// Fast Wikimedia Commons image URLs.
// Commons stores thumbnails at upload.wikimedia.org/.../thumb/<md5[0]>/<md5[0..1]>/<name>/<w>px-<name>,
// so building that URL directly skips the two redirects Special:FilePath costs (~1 s → ~0.3 s per image).
(function () {
  // Compact MD5 (RFC 1321) over UTF-8 bytes.
  function md5(str) {
    const bytes = new TextEncoder().encode(str);
    const n = ((bytes.length + 8) >>> 6) + 1;
    const words = new Uint32Array(n * 16);
    for (let i = 0; i < bytes.length; i++) words[i >> 2] |= bytes[i] << ((i % 4) * 8);
    words[bytes.length >> 2] |= 0x80 << ((bytes.length % 4) * 8);
    words[n * 16 - 2] = bytes.length * 8;
    const K = [], S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
    for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) >>> 0;
    let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
    for (let blk = 0; blk < words.length; blk += 16) {
      let a = a0, b = b0, c = c0, d = d0;
      for (let i = 0; i < 64; i++) {
        let f, g;
        if (i < 16) { f = (b & c) | (~b & d); g = i; }
        else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) % 16; }
        else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
        else { f = c ^ (b | ~d); g = (7 * i) % 16; }
        const tmp = d; d = c; c = b;
        const x = (a + f + K[i] + words[blk + g]) >>> 0;
        const s = S[(i >> 4) * 4 + (i % 4)];
        b = (b + ((x << s) | (x >>> (32 - s)))) >>> 0;
        a = tmp;
      }
      a0 = (a0 + a) >>> 0; b0 = (b0 + b) >>> 0; c0 = (c0 + c) >>> 0; d0 = (d0 + d) >>> 0;
    }
    return [a0, b0, c0, d0].map((v) => [0, 8, 16, 24].map((sh) => ((v >>> sh) & 255).toString(16).padStart(2, "0")).join("")).join("");
  }

  // Standard Wikimedia thumbnail steps (other widths may be refused or slow).
  const STEPS = [250, 330, 500, 960, 1280];
  const step = (w) => STEPS.find((s) => s >= w) || 1280;

  // Small images drawn locally instead of downloading heavy animated GIFs ("local:<id>").
  const LOCAL = {
    digitalrain() {
      const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ0123456789";
      let seed = 7;
      const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      let cols = "";
      for (let x = 10; x < 400; x += 20) {
        const head = Math.floor(rnd() * 14) + 3;
        for (let r = 0; r <= head; r++) {
          const c = chars[Math.floor(rnd() * chars.length)];
          const op = r === head ? 1 : (0.15 + 0.7 * (r / head)).toFixed(2);
          const fill = r === head ? "#d9ffe6" : "#39ff88";
          cols += `<text x="${x}" y="${18 + r * 18}" fill="${fill}" opacity="${op}">${c}</text>`;
        }
      }
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#020a05"/><g font-family="monospace" font-size="16" text-anchor="middle">${cols}</g></svg>`;
      return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    }
  };
  const cache = {};
  const local = (name) => (cache[name] = cache[name] || LOCAL[name.slice(6)]());

  // Images copied into the repo (img/c/<key>.<ext>, listed in js/img-manifest.js) load from here first,
  // so a file deleted on Commons doesn't break the post; Commons stays as the fallback.
  const OWN = window.IMG_LOCAL || {};
  const own = (name) => OWN[name] && "img/c/" + OWN[name];

  window.IMG = {
    thumb(name, w) {
      if (name.startsWith("local:")) return local(name);
      if (name.startsWith("file:")) return name.slice(5);
      if (own(name)) return own(name);
      const file = name.replace(/ /g, "_");
      const h = md5(file);
      const enc = encodeURIComponent(file);
      const ext = /\.svg$/i.test(file) ? ".png" : "";
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/${h[0]}/${h.slice(0, 2)}/${enc}/${step(w)}px-${enc}${ext}`;
    },
    remote(name, w) {
      const file = name.replace(/ /g, "_");
      const h = md5(file);
      const enc = encodeURIComponent(file);
      const ext = /\.svg$/i.test(file) ? ".png" : "";
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/${h[0]}/${h.slice(0, 2)}/${enc}/${step(w)}px-${enc}${ext}`;
    },
    // Slower but always works (also for images smaller than the requested width).
    fallback(name, w) {
      if (name.startsWith("local:")) return local(name);
      if (name.startsWith("file:")) return name.slice(5);
      if (own(name)) return IMG.remote(name, w);
      return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(name.replace(/ /g, "_")) + "?width=" + step(w);
    },
    md5
  };
})();
