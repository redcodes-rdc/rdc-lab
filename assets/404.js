const notFoundPage = {
  page: {
    eyebrow: "404",
    title: "Lost in the Lab?",
    description:
      "The page you're looking for doesn't exist, may have been moved, or the link is outdated. Let's get you back to building.",
  },

  CTA: "work with me",

  actions: [
    {
      label: "Browse Generators",
      href: "/pages/html-generators/",
      className: "rdc-lab-3rd-btn",
    },
    {
      label: "Help Center",
      href: "/pages/help-center/",
      className: "rdc-lab-5th-btn",
    },
    {
      label: "Tutorials",
      href: "/pages/tutorials/",
      className: "rdc-lab-5th-btn",
    },
  ],

};

renderNotFoundPage(notFoundPage);

function renderNotFoundPage(content) {
  const main = document.querySelector("main");

  if (!main) return;

  main.innerHTML = `
    <div class="rdcl-404-main">
      <div class="rdcl-404-inner rdc-mw-1400 rdc-m-iauto rdc-p-20">
        ${renderNotFoundHero(content)}
      </div>
      ${renderNotFoundFeaturedGenerators()}
    </div>
  `;

  if (window.renderRdcLabPageCta) {
    window.renderRdcLabPageCta(content);
  } else {
    document.dispatchEvent(
      new CustomEvent("rdcLabPageContentReady", {
        detail: content,
      }),
    );
  }
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

          ${renderNotFoundActions(content.actions)}
        </div>

        <div class="rdcl-404-visual rdc-w-30 rdc-t-w-full rdc-m-w-full rdc-ta-cen">
          <span class="rdcl-404-code rdc-ff-baij rdc-fw-900" aria-hidden="true">404</span>
        </div>
      </div>
    </section>
  `;
}

function renderNotFoundActions(actions) {
  return `
    <div class="rdcl-404-actions rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-m-t20">
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

function renderNotFoundFeaturedGenerators() {
  if (!window.renderRdcLabFeaturedGeneratorsSection) return "";

  return window.renderRdcLabFeaturedGeneratorsSection({
    title: "Featured Generators",
  });
}
