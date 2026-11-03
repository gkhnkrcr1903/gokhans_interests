(function () {
  const POSTS = window.POSTS || [];
  const app = document.getElementById("app");
  const langBtn = document.getElementById("langToggle");
  let lang = "tr";
  try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("tr") ? "tr" : "en"); } catch (e) {}

  const t = (k) => I18N[lang][k];
  const L = (o) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] ?? o.tr : o);
  const img = (name, w = 640) =>
    "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(name.replace(/ /g, "_")) + "?width=" + w;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t("siteTitle");
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    langBtn.textContent = lang === "tr" ? "EN" : "TR";
  }

  function cards() {
    const live = POSTS.map((p) => `
      <a class="card" href="#/post/${p.slug}">
        <div class="thumb" style="background-image:url('${img(p.cover, 640)}')"></div>
        <div class="body">
          <h3>${esc(L(p.title))}</h3>
          <p>${esc(L(p.summary))}</p>
          <div class="meta">${p.readMin} ${t("minRead")} · ${t("readMore")}</div>
        </div>
      </a>`).join("");
    const soon = t("soonTopics").map((s) => `
      <div class="card soon"><div class="thumb">${t("comingSoon")}</div>
        <div class="body"><h3>${esc(s)}</h3><p>...</p></div></div>`).join("");
    return `<div class="grid">${live}${soon}</div>`;
  }

  function home() {
    const first = POSTS[0];
    return `
      <section class="hero">
        <div>
          <p class="term">${esc(t("heroLine1"))}</p>
          <h1>${esc(t("siteTitle"))}</h1>
          <p>${esc(t("heroText"))}</p>
          ${first ? `<a class="btn" href="#/post/${first.slug}">${esc(t("heroCta"))}</a>` : ""}
        </div>
        <div class="monitor" aria-hidden="true">
          <div class="screen">READY.<br>10 PRINT "GOKHAN"<br>20 GOTO 10<br>RUN<br><br><span class="invader">👾</span> <span class="invader" style="animation-delay:.3s">👾</span> <span class="invader" style="animation-delay:.6s">👾</span><br>█</div>
          <div class="base"></div><div class="kbd"></div>
        </div>
      </section>
      <h2 class="section-title">${esc(t("topicsTitle"))}</h2>
      ${cards()}`;
  }

  function topics() {
    return `<h2 class="section-title">${esc(t("topicsTitle"))}</h2>${cards()}`;
  }

  function figure(name, caption) {
    return `<figure data-full="${esc(img(name, 1280))}" data-cap="${esc(caption)}">
      <img loading="lazy"${/\.svg$/i.test(name) ? ' class="logo"' : ""} src="${esc(img(name))}" alt="${esc(caption)}" onerror="this.outerHTML='<div class=&quot;img-fallback&quot;>${esc(caption).replace(/'/g, "")}</div>'">
      <figcaption>${esc(caption)}</figcaption></figure>`;
  }

  function post(slug) {
    const p = POSTS.find((x) => x.slug === slug);
    if (!p) return notFound();
    const filters = p.filters || [{ key: "pc", label: t("filterPc") }, { key: "game", label: t("filterGame") }];
    const catLabel = (c) => L((filters.find((f) => f.key === c) || {}).label) || c;
    const toc = p.sections.map((s) => `<a href="#/post/${p.slug}/${s.id}">${esc(L(s.title))}</a>`).join("") +
      (p.stats ? `<a href="#/post/${p.slug}/stats">${esc(L(p.stats.title))}</a>` : "") +
      (p.facts ? `<a href="#/post/${p.slug}/facts">${esc(L(p.facts.title))}</a>` : "");

    const sections = p.sections.map((s) => {
      const entries = p.entries.filter((e) => e.section === s.id).map((e) => `
        <article class="entry c${filters.findIndex((f) => f.key === e.cat)}" data-cat="${e.cat}">
          ${figure(e.img, L(e.caption) || L(e.title))}
          <div>
            <span class="year">${esc(e.year)}</span><span class="tag">${esc(catLabel(e.cat))}</span>
            <h3>${esc(L(e.title))}</h3>
            <p>${esc(L(e.text))}</p>
            ${e.facts ? `<ul class="facts">${L(e.facts).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
          </div>
        </article>`).join("");
      return `<h2 id="${s.id}"><span class="era">${esc(s.era)}</span>${esc(L(s.title))}</h2>
        <p>${esc(L(s.intro))}</p><div class="timeline">${entries}</div>`;
    }).join("");

    const stats = p.stats ? `
      <h2 id="stats"><span class="era">// DATA</span>${esc(L(p.stats.title))}</h2>
      <div class="stats">${p.stats.tiles.map((s) => `
        <div class="stat"><div class="v">${esc(s.value)}</div><div class="l">${esc(L(s.label))}</div></div>`).join("")}</div>
      ${p.stats.charts.map((c) => {
        const max = Math.max(...c.rows.map((r) => r[1]));
        return `<div class="chart"><h4>${esc(L(c.title))}</h4>${c.rows.map((r) => `
          <div class="bar-row"><span class="bl">${esc(L(r[0]))}</span>
            <span class="bar"><span style="width:${(r[1] / max) * 100}%"></span></span>
            <span class="bv">${esc(r[2] || r[1])}</span></div>`).join("")}
          ${c.note ? `<p class="note">${esc(L(c.note))}</p>` : ""}</div>`;
      }).join("")}` : "";

    const facts = p.facts ? `
      <h2 id="facts"><span class="era">// FUN FACTS</span>${esc(L(p.facts.title))}</h2>
      <div class="facts-grid">${p.facts.items.map((f, i) => `
        <div class="fact">${figure(f.img, L(f.caption))}
          <div class="fact-body"><span class="fact-no">#${String(i + 1).padStart(2, "0")}</span>
          <h3>${esc(L(f.title))}</h3><p>${esc(L(f.text))}</p></div></div>`).join("")}</div>` : "";

    return `
      <section class="post-hero">
        <div class="kicker">${esc(L(p.kicker))}</div>
        <h1>${esc(L(p.title))}</h1>
        <p>${esc(L(p.intro))}</p>
      </section>
      <div class="post-layout">
        <aside class="toc"><h4>${esc(t("toc"))}</h4>${toc}<br><a href="#/topics">${esc(t("back"))}</a></aside>
        <div class="prose">
          <div class="filters">
            <button class="active" data-f="all">${esc(t("filterAll"))}</button>
            ${filters.map((f) => `<button data-f="${f.key}">${esc(L(f.label))}</button>`).join("")}
          </div>
          ${sections}${stats}${facts}
        </div>
      </div>`;
  }

  function about() {
    const a = window.ABOUT;
    if (!a) return notFound();
    const postLink = (slug) => (POSTS.some((p) => p.slug === slug) ? `#/post/${slug}` : "#/topics");
    return `
      <section class="about-hero">
        <div class="avatar" aria-hidden="true"><span>GK</span></div>
        <div>
          <p class="term">${esc(t("aboutKicker"))}</p>
          <h1>${esc(a.name)}</h1>
          <p class="role">${esc(L(a.role))}</p>
          <p class="tagline">${esc(L(a.tagline))}</p>
        </div>
      </section>
      <p class="about-intro">${esc(L(a.intro))}</p>
      <div class="about-facts">${a.facts.map((f) => `
        <div class="about-fact"><span class="ico">${f.icon}</span>
          <div><div class="lbl">${esc(L(f.label))}</div><div class="val">${esc(L(f.value))}</div></div></div>`).join("")}</div>
      <div class="about-grid">
        <div class="about-story">${a.story.map((s) => `
          <h2 class="section-title">${esc(L(s.title))}</h2><p>${esc(L(s.text))}</p>`).join("")}</div>
        <aside class="about-side">
          <div class="chart char-stats"><h4>${esc(t("aboutStats"))}</h4>${a.stats.map((s) => `
            <div class="bar-row"><span class="bl">${esc(L(s.label))}</span>
              <span class="bar"><span style="width:${s.value}%"></span></span><span class="bv">${s.value}</span></div>`).join("")}</div>
          <div class="chart achievements"><h4>${esc(t("aboutAchievements"))}</h4>
            <ul>${a.achievements.map((x) => `<li>${esc(L(x))}</li>`).join("")}</ul></div>
        </aside>
      </div>
      <h2 class="section-title">${esc(t("aboutInterests"))}</h2>
      <div class="grid">${a.interests.map((i) => `
        <a class="card interest" href="${postLink(i.link)}">
          <div class="body"><div class="ico">${i.icon}</div><h3>${esc(L(i.title))}</h3><p>${esc(L(i.text))}</p>
          <div class="meta">${esc(t("readMore"))}</div></div></a>`).join("")}</div>`;
  }

  function notFound() { return `<div class="notfound">${esc(t("notFound"))}</div>`; }

  function render() {
    applyStatic();
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    if (parts[0] === "post") app.innerHTML = post(parts[1]);
    else if (parts[0] === "topics") app.innerHTML = topics();
    else if (parts[0] === "about") app.innerHTML = about();
    else if (!parts[0]) app.innerHTML = home();
    else app.innerHTML = notFound();

    const anchor = parts[0] === "post" && parts[2] && document.getElementById(parts[2]);
    if (anchor) anchor.scrollIntoView(); else window.scrollTo(0, 0);
  }

  app.addEventListener("click", (e) => {
    const btn = e.target.closest(".filters button");
    if (btn) {
      app.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("active", b === btn));
      app.querySelectorAll(".entry").forEach((el) =>
        el.classList.toggle("hidden", btn.dataset.f !== "all" && el.dataset.cat !== btn.dataset.f));
      return;
    }
    const fig = e.target.closest("figure[data-full]");
    if (fig && fig.querySelector("img")) {
      const lb = document.getElementById("lightbox");
      lb.querySelector("img").src = fig.dataset.full;
      lb.querySelector("figcaption").textContent = fig.dataset.cap;
      lb.hidden = false;
    }
  });
  document.getElementById("lightbox").addEventListener("click", (e) => (e.currentTarget.hidden = true));
  document.addEventListener("keydown", (e) => e.key === "Escape" && (document.getElementById("lightbox").hidden = true));

  langBtn.addEventListener("click", () => {
    lang = lang === "tr" ? "en" : "tr";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });
  window.addEventListener("hashchange", render);
  render();
})();
