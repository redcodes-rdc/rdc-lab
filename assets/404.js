const notFoundPage = {
  page: {
    eyebrow: "404",
    title: "This page wandered off.",
    description:
      "The page you are looking for does not exist, may have moved, or the link may be outdated.",
  },

  search: {
    label: "Search RDC Lab",
    placeholder: "Search generators, tutorials, or help docs...",
    buttonLabel: "Search",
  },

  actions: [
    {
      label: "All Generators",
      href: "/pages/html-generators/",
      className: "rdc-lab-3rd-btn",
    },
    {
      label: "Tutorials",
      href: "/pages/tutorials/",
      className: "rdc-lab-5th-btn",
    },
    {
      label: "Help Center",
      href: "/pages/help-center/",
      className: "rdc-lab-5th-btn",
    },
  ],

  quickLinksTitle: "Popular places",
  quickLinks: [
    {
      title: "Generators",
      description: "Browse frontend generators and code tools.",
      href: "/pages/html-generators/",
    },
    {
      title: "Tutorials",
      description: "Learn how to build faster with RDC Lab.",
      href: "/pages/tutorials/",
    },
    {
      title: "Help Center",
      description: "Find FAQs, resources, and downloadable files.",
      href: "/pages/help-center/",
    },
  ],

  missingPathLabel: "Missing URL",
};

renderNotFoundPage(notFoundPage);

function renderNotFoundPage(content) {
  const main = document.querySelector("main");

  if (!main) return;

  main.innerHTML = `
    <div class="rdcl-404-main">
      <div class="rdcl-404-inner rdc-mw-1400 rdc-m-iauto rdc-p-20">
        ${renderNotFoundHero(content)}
        ${renderNotFoundQuickLinks(content)}
      </div>
    </div>
  `;
}

function renderNotFoundHero(content) {
  return `
    <section class="rdcl-404-hero rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b20">
      <div class="rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-jc-spb">
        <div class="rdcl-404-copy rdc-w-60 rdc-t-w-full rdc-m-w-full">
          <span class="rdcl-404-eyebrow rdcl-allgen-eyebrow rdc-ff-baij rdc-tt-upc">
            ${content.page.eyebrow}
          </span>
          <h1 class="rdc-fs-40 rdc-fw-700 rdc-m-bl10">
            ${content.page.title}
          </h1>
          <p>${content.page.description}</p>

          <div class="rdcl-404-path rdc-m-t20 rdc-lab-border-4 rdc-p-10">
            <span class="rdc-ff-baij rdc-tt-upc rdc-fs-12">${content.missingPathLabel}</span>
            <code class="rdc-d-block rdc-m-t5" data-404-path></code>
          </div>

          ${renderNotFoundSearch(content.search)}
          ${renderNotFoundActions(content.actions)}
        </div>

        <div class="rdcl-404-visual rdc-w-30 rdc-t-w-full rdc-m-w-full rdc-ta-cen">
          <span class="rdcl-404-code rdc-ff-baij rdc-fw-900" aria-hidden="true">404</span>
        </div>
      </div>
    </section>
  `;
}

function renderNotFoundSearch(search) {
  return `
    <form class="rdcl-404-search rdcl-search-bar rdc-lab-border-2 rdc-m-t20 rdc-d-flex rdc-ai-cen" data-404-search-form>
      <label class="rdc-d-none" for="rdcl-404-search">${search.label}</label>
      <span class="rdcl-search-bar-icon" aria-hidden="true">${renderSearchIcon()}</span>
      <input
        id="rdcl-404-search"
        class="rdc-w-full"
        type="text"
        placeholder="${search.placeholder}"
        data-404-search-input
      />
      <button class="rdcl-404-search-btn rdc-lab-3rd-btn rdc-br-4 rdc-cu-poi" type="submit">
        ${search.buttonLabel}
      </button>
    </form>
  `;
}

function renderNotFoundActions(actions) {
  return `
    <div class="rdcl-404-actions rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-m-t20">
      <button class="rdcl-404-back rdc-lab-5th-btn rdc-br-4 rdc-cu-poi rdc-m-r10 rdc-m-b10" type="button" data-404-back>
        Go Back
      </button>
      ${actions.map(renderNotFoundAction).join("")}
    </div>
  `;
}

function renderNotFoundAction(action) {
  return `
    <a class="rdcl-404-action ${action.className} rdc-br-4 rdc-td-none rdc-m-r10 rdc-m-b10" href="${action.href}">
      ${action.label}
    </a>
  `;
}

function renderNotFoundQuickLinks(content) {
  return `
    <section class="rdcl-404-links rdc-m-b20">
      <h2 class="rdc-gen-mini-h rdc-m-b10">${content.quickLinksTitle}</h2>
      <div class="rdc-d-flex rdc-fw-wrap">
        ${content.quickLinks.map(renderNotFoundQuickLink).join("")}
      </div>
    </section>
  `;
}

function renderNotFoundQuickLink(item) {
  return `
    <article class="rdcl-404-link-card rdcl-card rdc-w-33-33 rdc-t-w-half rdc-m-w-full rdc-p-5">
      <a href="${item.href}" class="rdcl-card-wrap rdc-darker-hover rdc-lab-border-2 rdc-bg-dark-5 rdc-td-none rdc-h-full rdc-p-20 rdc-d-flex rdc-ff-col">
        <h3 class="rdc-m-0 rdc-ff-baij rdc-fw-600">${item.title}</h3>
        <p>${item.description}</p>
        <span class="rdcl-404-link-arrow rdc-ta-rig" aria-hidden="true">${renderArrowIcon()}</span>
      </a>
    </article>
  `;
}

function renderSearchIcon() {
  return `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="2"/>
    <path d="M12 12L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

function renderArrowIcon() {
  return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
