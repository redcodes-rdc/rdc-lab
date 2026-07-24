const tutorialsCollectionPage = {
  // PAGE HERO
  page: {
    eyebrow: "Implementation Guides",
    title: "Frontend Component Tutorials",
    description:
      "Explore practical tutorials for building, customizing, and improving frontend components. Follow clear implementation steps, use RDC Lab generators as your starting point, and apply the included AI enhancement prompts when you need more control.",
  },
  intro: {
    title: "Build with a clearer next step.",
    text:
      "Explore practical tutorials for building, customizing, and improving frontend components. Follow clear implementation steps, use RDC Lab generators as your starting point, and apply the included AI enhancement prompts when you need more control.",
  },

  CTA: "work with me",

  // SEARCH
  search: {
    placeholder: "What do you want to learn today?",
    label: "Search tutorials",
  },

  // FILTER CATEGORIES
  categories: [
    { label: "Content", value: "content" },
    { label: "CRO", value: "cro" },
    { label: "Layout", value: "layout" },
    { label: "Campaign", value: "campaign" },
    {
      label: "Shopify Kits",
      value: "shopify-kits",
      badge: { label: "Soon", type: "soon" },
    },
    { label: "UI", value: "ui" },
    { label: "Utilities", value: "utilities" },
  ],

  // POPULAR TAGS
  popularTagsTitle: "Popular Tags",
  popularTags: [
    { label: "Grid", value: "grid" },
    { label: "Product", value: "product" },
    { label: "Shopify", value: "shopify" },
    { label: "CRO", value: "cro" },
    { label: "Responsive", value: "responsive" },
    { label: "Liquid Kit", value: "liquid-kit" },
  ],

  // TUTORIAL CARDS
  tutorials: [
    {
      title: "Create a Two-Column Section in 5 Minutes",
      description:
        "Build a responsive HTML/CSS two-column layout and learn when to adjust widths, order, and stacking.",
      href: "/pages/tutorials/tutorial-1/",
      image: "/assets/images/rdc-lab-assets-easy-2.jpg",
      duration: "10:45",
      level: "Beginner",
      categories: ["layout"],
      tags: ["grid", "responsive", "layout"],
    },
    {
      title: "Add a Free Shipping Bar to Your Store",
      description:
        "Add a Shopify-friendly free shipping progress bar with cart threshold messaging and dynamic behavior.",
      href: "#",
      image: "/assets/images/rdc-lab-assets-easy-2.jpg",
      duration: "8:32",
      level: "Beginner",
      categories: ["campaign", "cro"],
      tags: ["cro", "shopify", "product"],
    },
    {
      title: "Build a Sticky Add to Cart Bar",
      description:
        "Keep Shopify purchase controls visible on long product pages with a sticky add-to-cart section.",
      href: "#",
      image: "/assets/images/rdc-lab-assets-easy-2.jpg",
      duration: "12:18",
      level: "Intermediate",
      categories: ["cro", "campaign", "ui"],
      tags: ["cro", "product", "shopify", "liquid-kit"],
    },
  ],
};

const helpCenterIcons = {
  arrow: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 8H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M8.5 4.5L12 8L8.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

renderTutorialsCollectionPage(tutorialsCollectionPage);

function renderTutorialsCollectionPage(content) {
  const main = document.querySelector("main");

  if (!main) return;

  main.innerHTML = `
    <section class="rdcl-allgen-main rdc-mw-1400 rdc-m-iauto rdc-p-20">
      ${renderPageBreadcrumb({ label: "Back to Home", href: "/" })}
      ${renderPageHeader(content.page)}
      ${renderIntro(content.intro)}

      <div class="rdcl-allgen-layout rdc-d-flex rdc-m-fw-wrap">
        ${renderFilters(content)}

        <div class="rdcl-allgen-results rdc-w-75 rdc-t-w-full rdc-m-w-full">
          ${renderSearch(content.search)}
          ${renderResultsHeader(content.tutorials.length)}
          ${renderTutorialCards(content.tutorials)}
          ${renderEmptyState()}
        </div>
      </div>
    </section>
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

function renderPageBreadcrumb(link) {
  if (window.renderRdcLabBreadcrumb) return window.renderRdcLabBreadcrumb(link);

  return `
    <a class="rdcl-page-breadcrumb rdcl-tutorial-back rdc-d-iflex rdc-ai-cen rdc-td-none rdc-ff-baij rdc-tt-upc rdc-fs-12 rdc-fw-600 rdc-m-b30" href="${link.href}">
      <span aria-hidden="true">&larr;</span>
      <span class="rdc-m-l10">${link.label}</span>
    </a>
  `;
}

function renderPageHeader(content) {
  return `
    <header class="rdcl-allgen-header rdc-m-b30">
      <span class="rdcl-page-eyebrow rdc-d-iflex rdc-ff-baij rdc-fw-700 rdc-fs-12 rdc-m-b15">
        ${content.eyebrow}
      </span>
      <h1 class="rdc-fs-40 rdc-fw-700 rdc-m-bl10">${content.title}</h1>
    </header>
  `;
}

function renderIntro(content) {
  if (!content) return "";

  return `
    <section class="rdcl-page-intro rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b30">
      <div class="rdcl-page-intro-copy">
        <h2 class="rdc-gen-mini-h rdc-m-0 rdc-m-b10">${content.title}</h2>
        <p class="rdc-m-0">${content.text}</p>
      </div>
    </section>
  `;
}

function renderFilters(content) {
  const categories = [...content.categories].sort((a, b) =>
    a.label.localeCompare(b.label),
  );

  return `
    <aside class="rdcl-allgen-sidebar rdc-w-25 rdc-t-w-full rdc-m-w-full rdc-p-r20 rdc-m-p-0" aria-label="Tutorial filters">
      <button
        class="rdcl-allgen-filter-toggle rdc-cu-poi rdc-m-b20 rdc-d-none rdc-m-d-flex rdc-w-full rdc-d-flex rdc-ai-cen rdc-jc-spb rdc-ff-baij rdc-tt-upc"
        type="button"
        aria-expanded="true"
        data-allgen-filter-toggle
      >
        <span>FILTER</span>
        <span class="rdcl-allgen-filter-toggle-icon" aria-hidden="true" data-allgen-filter-icon>-</span>
      </button>

      <div class="rdcl-allgen-filter-panel" data-allgen-filter-panel>
        <div class="rdcl-allgen-filter-block rdc-p-10 rdc-m-b20">
          <p class="rdcl-allgen-filter-title rdc-fw-500 rdc-m-b20 rdc-ff-baij rdc-tt-upc">
            Categories
          </p>
          <div class="rdcl-allgen-filter-con rdc-ff-baij rdc-tt-upc rdc-d-flex rdc-ff-col">
            <button class="rdcl-allgen-filter rdc-lab-border-h-1 rdc-cu-poi rdc-w-full rdc-c-white-1 rdc-p-10 is-active" type="button" data-allgen-category="all">
              <span>All Tutorials</span>
            </button>
            ${categories.map(renderCategoryFilter).join("")}
          </div>
        </div>

        <div class="rdcl-allgen-filter-block rdc-p-10 rdc-m-b20">
          <div class="rdcl-allgen-tag-head rdc-d-flex rdc-ai-cen rdc-jc-sb">
            <p class="rdcl-allgen-filter-title rdc-fw-500 rdc-m-b20 rdc-ff-baij rdc-tt-upc rdc-m-0">
              ${content.popularTagsTitle}
            </p>
            <button class="rdcl-allgen-clear-tags rdc-lab-border-h-1 rdc-br-4 rdc-c-white-1 rdc-fw-300 rdc-tt-upc rdc-fs-11 rdc-cu-poi rdc-d-none" type="button" data-allgen-clear-tags>
              Clear
            </button>
          </div>
          <div class="rdcl-allgen-tags rdc-d-flex rdc-fw-wrap">
            ${content.popularTags.map(renderPopularTag).join("")}
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderCategoryFilter(category) {
  return `
    <button class="rdcl-allgen-filter rdc-lab-border-h-1 rdc-w-full rdc-cu-poi rdc-c-white-1 rdc-d-flex rdc-ai-cen rdc-cu-poi rdc-p-10" type="button" data-allgen-category="${category.value}">
      <span>${category.label}</span>
      ${category.badge ? renderCategoryBadge(category.badge) : ""}
    </button>
  `;
}

function renderCategoryBadge(badge) {
  return `<span class="rdc-catbadge-${badge.type} rdcl-allgen-badge rdc-ff-baij rdc-c-white-3 rdc-fw-500 rdc-br-4 rdc-fs-10 rdc-tt-upc rdcl-allgen-badge-cat">${badge.label}</span>`;
}

function renderPopularTag(tag) {
  return `
    <button class="rdcl-allgen-tag rdc-m-r5 rdc-m-b5 rdc-cu-poi rdc-lab-border-h-1" type="button" data-allgen-tag="${tag.value}">
      ${tag.label}
    </button>
  `;
}

function renderSearch(content) {
  return `
    <div class="rdcl-search-bar rdcl-allgen-search rdc-lab-border-2 rdc-m-b10 rdc-d-flex rdc-ai-cen">
      <label class="rdc-d-none" for="rdclTutorialSearch">${content.label}</label>
      <span class="rdcl-search-bar-icon" aria-hidden="true">${renderSearchIcon()}</span>
      <input
       id="rdcl-search-bar"
        class="rdcl-allgen-search-input rdc-w-full"
        type="text"
        placeholder="${content.placeholder}"
        data-allgen-search
      />
      <button class="rdcl-allgen-search-clear rdc-d-none" type="button" aria-label="Clear search" data-allgen-search-clear>
        &times;
      </button>
    </div>
  `;
}

function renderResultsHeader(total) {
  return `
    <div class="rdcl-allgen-results-head rdc-ai-cen rdc-m-b10">
      <p class="rdc-m-0 rdc-ta-rig rdc-p-r10 rdc-fs-12" data-allgen-count>${total} of ${total} tutorials</p>
    </div>
  `;
}

function renderTutorialCards(items) {
  return `
    <div class="rdcl-allgen-grid rdc-m-bl20 rdc-d-flex rdc-fw-wrap">
      ${items.map(renderTutorialCard).join("")}
    </div>
  `;
}

function renderTutorialCard(item) {
  const categories = item.categories.join(" ");
  const tags = item.tags.join(" ");
  const searchText = [
    item.title,
    item.description,
    item.duration,
    item.level,
    ...item.categories,
    ...item.tags,
  ].join(" ");

  return `
    <article
      class="rdcl-allgen-card rdcl-card rdcl-tutorial-card rdc-w-33-33 rdc-t-w-half rdc-m-w-full rdc-p-5"
      data-allgen-card
      data-categories="${escapeAttribute(categories)}"
      data-tags="${escapeAttribute(tags)}"
      data-search="${escapeAttribute(searchText)}"
    >
      <a href="${item.href}" class="rdcl-help-tutorial-card-inner rdcl-card-wrap rdc-p-10 rdc-darker-hover rdc-lab-border rdc-bg-dark-5 rdc-td-none rdc-h-full rdc-d-flex rdc-ff-col">
        <div class="rdcl-help-tutorial-media rdc-p-rel">
          <img class="rdc-w-full rdc-br-4" src="${item.image}" alt="${escapeAttribute(getTutorialImageAlt(item))}" loading="lazy" />
          <span class="rdcl-help-tutorial-duration rdc-p-abs rdc-ff-baij rdc-br-4 rdc-bg-black-1 rdc-c-white-1 rdc-fs-12">${item.duration}</span>
        </div>
        <div class="rdcl-help-tutorial-body rdc-d-flex rdc-ff-col rdc-jc-spb">
          <h2 class="rdc-fw-600 rdc-ff-baij rdc-fs-16">${item.title}</h2>
          <p class="rdc-m-t0 rdc-m-b20 rdc-fs-14 rdc-c-white-1">${item.description}</p>
          <span class="rdcl-help-tutorial-level rdc-m-b10">${item.level}</span>
          <span class="rdcl-help-tutorial-cta rdc-c-blue rdc-m-t-auto rdc-m-b10 rdc-fw-600 rdc-ff-baij rdc-fs-14 rdc-d-iflex rdc-ai-cen">
            Watch Tutorial
            <span aria-hidden="true">${helpCenterIcons.arrow}</span>
          </span>
        </div>
      </a>
    </article>
  `;
}

function getTutorialImageAlt(item) {
  if (window.getRdcLabImageAlt) return window.getRdcLabImageAlt(item);
  return item.alt || item.imageAlt || item.title || "";
}

function renderEmptyState() {
  return `
    <div class="rdcl-allgen-empty rdc-d-none rdc-p-20 rdc-ta-cen" data-allgen-empty>
      No tutorials found.
    </div>
  `;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderSearchIcon() {
  return `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="2"/>
    <path d="M12 12L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}
