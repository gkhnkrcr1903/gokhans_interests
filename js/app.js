(function () {
  const POSTS = window.POSTS || [];
  const app = document.getElementById("app");
  const langBtn = document.getElementById("langToggle");
  let lang = "tr";
  try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("tr") ? "tr" : "en"); } catch (e) {}

  const t = (k) => I18N[lang][k];
  const L = (o) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] ?? o.tr : o);
  const img = (name, w = 500) => IMG.thumb(name, w);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t("siteTitle");
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    langBtn.textContent = lang === "tr" ? "EN" : "TR";
    const workLink = document.querySelector('.topbar a[href="#/work"]');
    if (workLink) workLink.hidden = !(window.WORK && WORK.enabled);
  }

  function cards(list = POSTS) {
    const live = list.map((p) => `
      <a class="card" href="#/post/${p.slug}" data-search="${esc((L(p.title) + " " + L(p.summary)).toLocaleLowerCase(lang))}">
        <div class="thumb" data-bg="${esc(p.cover)}" data-w="500"><span class="chip">${esc(L(p.kicker).replace(/^\/\/\s*/, ""))}</span></div>
        <div class="body">
          <h3>${esc(L(p.title))}</h3>
          <p>${esc(L(p.summary))}</p>
          <div class="meta">${p.readMin} ${t("minRead")} · ${p.entries.length} ${t("entries")} · ${t("readMore")}</div>
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
      <div class="counters">
        <div><b>${POSTS.length}</b><span>${esc(t("cntPosts"))}</span></div>
        <div><b>${POSTS.reduce((n, p) => n + p.entries.length, 0)}</b><span>${esc(t("cntEntries"))}</span></div>
        <div><b>${POSTS.reduce((n, p) => n + (p.facts ? p.facts.items.length : 0), 0)}</b><span>${esc(t("cntFacts"))}</span></div>
      </div>
      <h2 class="section-title">${esc(t("latest"))}</h2>
      ${cards(POSTS.slice(-6).reverse())}
      <p class="all-link"><a class="btn" href="#/topics">${esc(t("allTopics"))}</a></p>`;
  }

  function topics() {
    return `<h2 class="section-title">${esc(t("topicsTitle"))}</h2>
      <input class="search" type="search" placeholder="${esc(t("searchPh"))}" aria-label="${esc(t("searchPh"))}">
      ${cards()}<p class="no-results" hidden>${esc(t("noResults"))}</p>`;
  }

  function figure(name, caption) {
    return `<figure data-name="${esc(name)}" data-cap="${esc(caption)}">
      <img loading="lazy" decoding="async" width="500" height="375"${/\.svg$/i.test(name) ? ' class="logo"' : ""} src="${esc(img(name))}" data-fb="${esc(IMG.fallback(name, 500))}" alt="${esc(caption)}" onerror="imgError(this)">
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

    const ex = (window.EXPANSIONS || {})[p.slug] || {};
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
        <p>${esc(L(s.intro))}</p>${ex.sections && ex.sections[s.id] ? `<p class="section-more">${esc(L(ex.sections[s.id]))}</p>` : ""}<div class="timeline">${entries}</div>`;
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
      <section class="post-hero" data-bg="${esc(p.cover)}" data-w="1280" data-var="--cover">
        <div class="kicker">${esc(L(p.kicker))}</div>
        <h1>${esc(L(p.title))}</h1>
        <div class="post-meta">⏱ ${p.readMin} ${t("minRead")} · 📜 ${p.entries.length} ${t("entries")}${p.facts ? ` · 💡 ${p.facts.items.length} ${t("cntFacts")}` : ""}</div>
      </section>
      <p class="post-intro">${esc(L(p.intro))}</p>
      <div class="post-layout">
        <aside class="toc"><h4>${esc(t("toc"))}</h4>${toc}<br><a href="#/topics">${esc(t("back"))}</a></aside>
        <div class="prose">
          <div class="filters">
            <button class="active" data-f="all">${esc(t("filterAll"))}</button>
            ${filters.map((f) => `<button data-f="${f.key}">${esc(L(f.label))}</button>`).join("")}
          </div>
          ${sections}${stats}${facts}
          ${ex.closing ? `<section class="closing"><h2 id="closing"><span class="era">// THE END</span>${esc(t("closingTitle"))}</h2><p>${esc(L(ex.closing))}</p></section>` : ""}
          ${pager(p)}
        </div>
      </div>`;
  }

  function pager(p) {
    const i = POSTS.indexOf(p), prev = POSTS[i - 1], next = POSTS[i + 1];
    const link = (q, cls, label) => q ? `<a class="${cls}" href="#/post/${q.slug}"><small>${esc(label)}</small>${esc(L(q.title))}</a>` : "<span></span>";
    return `<nav class="pager">${link(prev, "prev", t("prevPost"))}${link(next, "next", t("nextPost"))}</nav>`;
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

  function work(tab) {
    const w = window.WORK;
    if (!w) return notFound();
    const tabs = `<nav class="work-tabs" aria-label="${esc(t("navWork"))}">
      <a href="#/work" class="${tab !== "projects" ? "active" : ""}">📄 ${esc(t("workCv"))}</a>
      <a href="#/work/projects" class="${tab === "projects" ? "active" : ""}">🛠️ ${esc(t("workProjects"))}</a></nav>`;
    const head = `
      <section class="work-hero">
        <p class="term">&gt; cat portfolio.txt_</p>
        <h1>${esc(window.ABOUT ? window.ABOUT.name : "")}</h1>
        <p class="role">${esc(L(w.headline))}</p>
        <p class="work-intro">${esc(L(w.intro))}</p>
        <div class="work-links">${w.links.map((l) => `<a class="btn small" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>
        <div class="counters">${w.stats.map((s) => `<div><b>${esc(s.value)}</b><span>${esc(L(s.label))}</span></div>`).join("")}</div>
      </section>${tabs}`;
    if (tab === "projects") {
      return head + `
        <div class="pfilters">${w.projectFilters.map((f, i) => `<button class="${i ? "" : "active"}" data-pf="${f.key}">${esc(L(f.label))}</button>`).join("")}</div>
        <div class="grid projects">${w.projects.map((pr) => `
          <article class="card project" data-cats="${pr.cat.join(" ")}">
            <div class="body">
              <div class="p-head"><h3>${esc(pr.name)}</h3><span class="chip-s">${esc(L(pr.status))}</span></div>
              <p>${esc(L(pr.text))}</p>
              <div class="p-tech">${esc(pr.tech)}</div>
              <div class="p-links">${pr.links.length ? pr.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(L(l.label))} ↗</a>`).join("") : `<span>${esc(t("noPublicLink"))}</span>`}</div>
            </div>
          </article>`).join("")}</div>`;
    }
    return head + `
      <div class="work-grid">
        <div>
          <h2 class="section-title">${esc(t("workExperience"))}</h2>
          <div class="timeline cv">${w.experience.map((x, i) => `
            <article class="entry cv-entry c${i % 4}">
              <div>
                <span class="year">${esc(L(x.period))}</span>
                <h3>${esc(L(x.role))}</h3>
                <p class="cv-company">${esc(x.company)} · ${esc(x.place)}</p>
                <p>${esc(L(x.text))}</p>
                ${x.tech ? `<p class="p-tech">${esc(x.tech)}</p>` : ""}
              </div>
            </article>`).join("")}</div>
        </div>
        <aside class="work-side">
          <div class="chart"><h4>${esc(t("workEducation"))}</h4>${w.education.map((e) => `<p><b>${esc(L(e.title))}</b><br>${esc(e.place)}<br><span class="muted">${esc(e.period)}</span></p>`).join("")}</div>
          <div class="chart"><h4>${esc(t("workSkills"))}</h4><div class="skill-tags">${w.skills.map((k) => `<span>${esc(k)}</span>`).join("")}</div></div>
          <div class="chart"><h4>${esc(t("workCerts"))}</h4><ul class="cert-list">${w.certificates.map((c) => `<li>${esc(L(c))}</li>`).join("")}</ul></div>
          <div class="chart"><h4>${esc(t("workLangs"))}</h4><p>${w.languages.map((l) => esc(L(l))).join(", ")}</p></div>
        </aside>
      </div>`;
  }

  function notFound() { return `<div class="notfound">${esc(t("notFound"))}</div>`; }

  // Try the fast thumbnail first, then the slower redirect URL, then a text placeholder.
  window.imgError = (el) => {
    if (el.dataset.fb && el.src !== el.dataset.fb) { el.src = el.dataset.fb; return; }
    const d = document.createElement("div");
    d.className = "img-fallback"; d.textContent = el.alt;
    el.replaceWith(d);
  };

  function loadBg(el) {
    const name = el.dataset.bg, w = +el.dataset.w || 500;
    const apply = (url) => (el.dataset.var ? el.style.setProperty(el.dataset.var, `url("${url}")`) : (el.style.backgroundImage = `url("${url}")`));
    const probe = new Image();
    probe.decoding = "async";
    probe.onload = () => apply(probe.src);
    probe.onerror = () => { if (!probe.dataset.fb) { probe.dataset.fb = 1; probe.src = IMG.fallback(name, w); } };
    probe.src = IMG.thumb(name, w);
  }
  const bgObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((items) => items.forEach((it) => { if (it.isIntersecting) { bgObserver.unobserve(it.target); loadBg(it.target); } }), { rootMargin: "300px" })
    : null;
  function hydrate() {
    app.querySelectorAll("[data-bg]").forEach((el) => (bgObserver ? bgObserver.observe(el) : loadBg(el)));
  }

  function render() {
    applyStatic();
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    if (parts[0] === "post") app.innerHTML = post(parts[1]);
    else if (parts[0] === "topics") app.innerHTML = topics();
    else if (parts[0] === "about") app.innerHTML = about();
    else if (parts[0] === "work" && window.WORK && WORK.enabled) app.innerHTML = work(parts[1]);
    else if (!parts[0]) app.innerHTML = home();
    else app.innerHTML = notFound();

    hydrate();
    const anchor = parts[0] === "post" && parts[2] && document.getElementById(parts[2]);
    if (anchor) anchor.scrollIntoView(); else window.scrollTo(0, 0);
  }

  app.addEventListener("input", (e) => {
    if (!e.target.matches(".search")) return;
    const q = e.target.value.trim().toLocaleLowerCase(lang);
    let shown = 0;
    app.querySelectorAll(".card[data-search]").forEach((c) => {
      const hit = !q || c.dataset.search.includes(q);
      c.hidden = !hit; shown += hit;
    });
    app.querySelector(".no-results").hidden = shown > 0;
  });

  const progress = document.getElementById("progress");
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    toTop.classList.toggle("show", scrollY > 600);
  }, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  app.addEventListener("click", (e) => {
    const pf = e.target.closest(".pfilters button");
    if (pf) {
      app.querySelectorAll(".pfilters button").forEach((b) => b.classList.toggle("active", b === pf));
      app.querySelectorAll(".project").forEach((c) => (c.hidden = pf.dataset.pf !== "all" && !c.dataset.cats.split(" ").includes(pf.dataset.pf)));
      return;
    }
    const btn = e.target.closest(".filters button");
    if (btn) {
      app.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("active", b === btn));
      app.querySelectorAll(".entry").forEach((el) =>
        el.classList.toggle("hidden", btn.dataset.f !== "all" && el.dataset.cat !== btn.dataset.f));
      return;
    }
    const fig = e.target.closest("figure[data-name]");
    if (fig && fig.querySelector("img")) {
      const lb = document.getElementById("lightbox");
      const big = lb.querySelector("img");
      big.src = fig.querySelector("img").currentSrc; // show the cached thumb instantly
      big.dataset.fb = IMG.fallback(fig.dataset.name, 1280);
      big.onerror = () => { if (big.src !== big.dataset.fb) big.src = big.dataset.fb; };
      const hi = new Image();
      hi.onload = () => { big.src = hi.src; };
      hi.src = IMG.thumb(fig.dataset.name, 1280);
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
