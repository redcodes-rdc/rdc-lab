const rdclTutorialPage = window.rdclTutorialPage || {
  id: "sticky-add-to-cart-shopify",
  title: "How to Add a Sticky Add to Cart Bar in Shopify",
  eyebrow: "Sticky Add To Cart",
  description:
    "Learn how to add a sticky add to cart bar to your Shopify product pages to increase conversions and improve mobile UX.",
  backLink: {
    label: "Back to Tutorials",
    href: "/pages/tutorials/",
  },
  categories: ["cro", "shopify", "product"],
  tags: ["sticky-atc", "shopify", "conversion"],
  video: {
    title: "How to Add a Sticky Add to Cart Bar in Shopify",
    type: "placeholder",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    embedUrl: "",
    duration: "12:18",
  },
  written: {
    title: "Written Version",
    navTitle: "On This Page",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "A sticky add to cart bar stays visible at the bottom of the screen as customers scroll, keeping the purchase action within reach.",
          },
          {
            type: "tip",
            title: "Pro Tip",
            text: "Keep the bar clean and focused. Show only the essential product info and one primary action.",
          },
        ],
      },
      {
        id: "why-use-it",
        label: "Why Use a Sticky ATC Bar?",
        title: "Why Use a Sticky ATC Bar?",
        blocks: [
          {
            type: "paragraph",
            text: "Sticky add to cart bars can reduce friction by keeping the main purchase action visible while shoppers review product details.",
          },
          {
            type: "list",
            items: [
              "Improves mobile UX",
              "Keeps the CTA always visible",
              "Increases add to cart rate",
              "Works great for most product types",
            ],
          },
        ],
      },
      {
        id: "setup",
        label: "Setup in Theme Editor",
        title: "Setup in Theme Editor",
        blocks: [
          {
            type: "paragraph",
            text: "Use this section for theme editor instructions, screenshots, or Shopify-specific setup notes.",
          },
        ],
      },
      {
        id: "conclusion",
        label: "Conclusion",
        title: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "Use this final tab for next steps, reminders, links, or a short summary of the tutorial.",
          },
        ],
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    description: "Questions related to this tutorial.",
    items: [
      {
        question: "Question 1",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 2",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 3",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 4",
        answer: "Answer placeholder...",
      },
      {
        question: "Question 5",
        answer: "Answer placeholder...",
      },
    ],
  },
};

window.rdclTutorialPage = rdclTutorialPage;

const rdclTutorialLibrary = window.rdclTutorialLibrary || [
  {
    id: "free-shipping-bar-shopify",
    title: "How to Add a Free Shipping Bar in Shopify",
    description: "Encourage more sales with a dynamic free shipping bar.",
    href: "#",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    duration: "8:45",
    level: "Tutorial",
    categories: ["cro", "shopify", "campaign"],
    tags: ["free-shipping", "cart", "conversion"],
  },
  {
    id: "countdown-timer-bar-shopify",
    title: "How to Add a Countdown Timer Bar in Shopify",
    description: "Create urgency with a simple countdown timer bar.",
    href: "#",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    duration: "7:12",
    level: "Tutorial",
    categories: ["cro", "shopify", "campaign"],
    tags: ["timer", "sale", "conversion"],
  },
  {
    id: "promo-modal-popup-shopify",
    title: "How to Add a Promo Modal Popup in Shopify",
    description: "Use a modal popup for offers, announcements, and opt-ins.",
    href: "#",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    duration: "6:38",
    level: "Tutorial",
    categories: ["cro", "shopify", "ui"],
    tags: ["modal", "popup", "campaign"],
  },
  {
    id: "announcement-bar-shopify",
    title: "How to Add an Announcement Bar in Shopify",
    description: "Show key promos and messages with an announcement bar.",
    href: "#",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    duration: "5:21",
    level: "Tutorial",
    categories: ["shopify", "campaign", "content"],
    tags: ["announcement", "banner"],
  },
  {
    id: "product-badges-shopify",
    title: "How to Add Product Badges in Shopify",
    description: "Highlight product offers, status, and sale messaging.",
    href: "#",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    duration: "4:57",
    level: "Tutorial",
    categories: ["cro", "shopify", "product"],
    tags: ["badges", "product", "conversion"],
  },
  {
    id: "two-column-section",
    title: "Create a Two-Column Section in 5 Minutes",
    description: "Build a responsive two-column layout quickly.",
    href: "#",
    image: "/assets/images/rdc-lab-assets-easy-2.jpg",
    duration: "10:45",
    level: "Beginner",
    categories: ["layout"],
    tags: ["grid", "responsive"],
  },
];

const rdclTutorialIcons = {
  arrow: `<svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  check: `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 8.2L6.5 11.2L12.8 4.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  play: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="21" fill="currentColor"/>
    <path d="M20 16L33 24L20 32V16Z" fill="#ffffff"/>
  </svg>`,
  bulb: `<svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M6.5 14H11.5M7 16H11M9 2.5C6.5 2.5 4.6 4.4 4.6 6.8C4.6 8.2 5.2 9.2 6.1 10.1C6.7 10.7 7.1 11.3 7.2 12H10.8C10.9 11.3 11.3 10.7 11.9 10.1C12.8 9.2 13.4 8.2 13.4 6.8C13.4 4.4 11.5 2.5 9 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  clock: `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 4.8V8.2L10.3 9.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  message: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M8 9H24V20H14L8 25V9Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  </svg>`,
};

const rdclTutorialPlaceholderVideoUrl =
  "https://www.youtube.com/embed/rGlVduB0T5s";

renderRdclTutorialPage(rdclTutorialPage, rdclTutorialLibrary);

function renderRdclTutorialPage(page, library) {
  const main = document.querySelector("main");
  if (!main) return;

  const relatedTutorials = getRelatedTutorials(page, library, 5);

  main.innerHTML = `
    <div class="rdcl-tutorial-main">
      <div class="rdcl-tutorial-inner rdc-mw-1400 rdc-m-iauto rdc-p-20">
        ${renderTutorialBreadcrumb(page.backLink)}
        ${renderTutorialHeader(page)}
        ${renderTutorialVideo(page.video)}
        ${renderWrittenVersion(page.written)}
        ${renderTutorialFaqs(page.faqs)}
        ${renderRelatedTutorials(relatedTutorials)}
      </div>
    </div>
  `;

  bindTutorialWrittenNav();
}

function renderTutorialHeader(page) {
  return `
    <header class="rdcl-tutorial-header rdc-mw-1200 rdc-m-iauto rdc-m-b30">
      <span class="rdcl-tutorial-eyebrow rdcl-allgen-eyebrow rdc-ff-baij rdc-tt-upc">
        ${page.eyebrow}
      </span>
      <h1 class="rdc-fs-40 rdc-fw-700 rdc-m-bl10">
        ${page.title}
      </h1>
      <p class="rdc-mw-800">${page.description}</p>
      ${renderMetaTags(page)}
    </header>
  `;
}

function renderTutorialBreadcrumb(link) {
  if (window.renderRdcLabBreadcrumb) return window.renderRdcLabBreadcrumb(link);

  return `
    <a class="rdcl-page-breadcrumb rdcl-tutorial-back rdc-d-iflex rdc-ai-cen rdc-td-none rdc-ff-baij rdc-fw-600 rdc-m-b30" href="${link.href}">
      <span class="rdc-c-lgray-1" aria-hidden="true">&larr;</span>
      <span class="rdc-m-l10 rdc-c-lgray-1 rdc-fs-12">${link.label}</span>
    </a>
  `;
}

function renderMetaTags(page) {
  const tags = [...(page.categories || []), ...(page.tags || [])];
  if (!tags.length) return "";

  return `
    <div class="rdcl-tutorial-tags rdc-d-flex rdc-fw-wrap rdc-m-t20">
      ${tags.map(renderMetaTag).join("")}
    </div>
  `;
}

function renderMetaTag(tag) {
  return `<span class="rdcl-tutorial-tag rdcl-allgen-tag rdc-lab-border-h-1 rdc-br-4 rdc-ff-baij rdc-fs-12 rdc-tt-upc rdc-m-r5 rdc-m-b5">${escapeHtml(valueToLabel(tag))}</span>`;
}

function renderTutorialVideo(video) {
  return `
    <section class="rdcl-tutorial-video rdc-mw-1200 rdc-m-iauto rdc-m-b30">
      <div class="rdcl-tutorial-video-inner rdc-lab-border-2 rdc-bg-dark-5 rdc-br-10 rdc-p-rel">
        ${video.embedUrl ? renderVideoEmbed(video) : renderVideoPlaceholder(video)}
      </div>
      ${renderVideoFallbackLink(video)}
    </section>
  `;
}

function renderVideoEmbed(video) {
  const embedUrl = getTutorialVideoEmbedUrl(video.embedUrl);

  return `
    <iframe
      class="rdcl-tutorial-video-frame rdc-w-full"
      src="${embedUrl}"
      title="${escapeHtml(video.title)}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  `;
}

function renderVideoPlaceholder(video) {
  return renderVideoEmbed({
    ...video,
    embedUrl: video.placeholderEmbedUrl || rdclTutorialPlaceholderVideoUrl,
    title: video.title || "Tutorial video placeholder",
  });
}

function renderVideoFallbackLink(video = {}) {
  const watchUrl = getTutorialVideoWatchUrl(
    video.embedUrl ||
      video.placeholderEmbedUrl ||
      rdclTutorialPlaceholderVideoUrl,
  );

  if (!watchUrl) return "";

  return `
    <a class="rdcl-tutorial-video-fallback rdc-ai-cen rdc-ff-baij rdc-fs-12 rdc-c-lgray-1 rdc-td-none rdc-m-t10" href="${watchUrl}" target="_blank" rel="noopener">
      Open video on YouTube
      <span class="rdc-m-l5" aria-hidden="true">${rdclTutorialIcons.arrow}</span>
    </a>
  `;
}

function getTutorialVideoEmbedUrl(url = "") {
  if (!url) return "";

  try {
    const videoUrl = new URL(url, window.location.origin);
    const videoId = videoUrl.searchParams.get("v");

    if (videoUrl.hostname.includes("youtube.com") && videoId) {
      videoUrl.pathname = `/embed/${videoId}`;
      videoUrl.search = "";
    }

    if (videoUrl.hostname === "youtu.be") {
      const shortVideoId = videoUrl.pathname.replace("/", "");
      videoUrl.hostname = "www.youtube.com";
      videoUrl.pathname = `/embed/${shortVideoId}`;
      videoUrl.search = "";
    }

    if (videoUrl.hostname.includes("youtube.com")) {
      videoUrl.searchParams.set("playsinline", "1");
      videoUrl.searchParams.set("rel", "0");
      videoUrl.searchParams.set("enablejsapi", "1");
      if (window.location.origin.startsWith("http")) {
        videoUrl.searchParams.set("origin", window.location.origin);
      }
    }

    return videoUrl.href;
  } catch (error) {
    return url;
  }
}

function getTutorialVideoWatchUrl(url = "") {
  if (!url) return "";

  try {
    const videoUrl = new URL(url, window.location.origin);
    const watchId =
      videoUrl.searchParams.get("v") ||
      videoUrl.pathname.match(/\/embed\/([^/?]+)/)?.[1] ||
      (videoUrl.hostname === "youtu.be"
        ? videoUrl.pathname.replace("/", "")
        : "");

    return watchId
      ? `https://www.youtube.com/watch?v=${watchId}`
      : videoUrl.href;
  } catch (error) {
    return url;
  }
}

function renderWrittenVersion(written) {
  const tabs = written.tabs || [];

  return `
    <section class="rdcl-tutorial-written rdcl-tutorial-written-border rdc-bg-dark-6 rdc-mw-1200 rdc-m-iauto rdc-br-10 rdc-m-b30">
      <div class="rdc-d-flex rdc-fw-wrap">
        <aside class="rdcl-tutorial-written-nav rdc-w-30 rdc-t-w-full rdc-m-w-full">
          <p class="rdcl-tutorial-written-title rdc-ff-baij rdc-tt-upc rdc-fw-700 rdc-fs-12 rdc-m-t0 rdc-m-b20">
            ${written.navTitle || written.title}
          </p>
          <nav aria-label="${escapeHtml(written.navTitle || written.title)}">
            <ol class="rdcl-tutorial-written-list rdc-ls-none rdc-p-0 rdc-m-0" role="tablist">
              ${tabs.map(renderWrittenNavItem).join("")}
            </ol>
          </nav>
        </aside>

        <div class="rdcl-tutorial-written-content rdc-w-70 rdc-t-w-full rdc-m-w-full">
          ${tabs.map((tab, index) => renderWrittenTab(tab, index, tabs)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderWrittenNavItem(tab, index) {
  const number = index + 1;

  return `
    <li class="rdcl-tutorial-written-nav-item">
      <button
        class="rdcl-tutorial-written-nav-link rdc-d-flex rdc-ai-cen rdc-td-none rdc-fs-14${index === 0 ? " is-active" : ""}"
        type="button"
        role="tab"
        aria-selected="${index === 0 ? "true" : "false"}"
        aria-controls="${tab.id}"
        data-tutorial-tab-link="${tab.id}"
      >
        <span class="rdcl-tutorial-written-nav-number rdc-m-r10">${number}.</span>
        <span class="rdcl-tutorial-written-nav-label">${tab.label || tab.title}</span>
      </button>
    </li>
  `;
}

function renderWrittenTab(tab, index, tabs = []) {
  return `
    <article
      class="rdcl-tutorial-tab"
      id="${tab.id}"
      role="tabpanel"
      data-tutorial-tab="${tab.id}"
      ${index === 0 ? "" : "hidden"}
    >
      <h2 class="rdc-fs-24 rdc-fw-700 rdc-m-t0">
        ${index + 1}. ${tab.title}
      </h2>
      ${renderTabBody(tab)}
      ${renderNextTutorialTab(index, tabs)}
    </article>
  `;
}

function renderNextTutorialTab(index, tabs = []) {
  const nextTab = tabs[index + 1];
  if (!nextTab) return "";

  return `
    <div class="rdcl-tutorial-next-wrap">
      <button
        class="rdcl-tutorial-next rdc-lab-border-4 rdc-br-6 rdc-d-iflex rdc-ai-cen rdc-ff-baij rdc-fw-600"
        type="button"
        data-next-tutorial-tab="${nextTab.id}"
      >
        <span>Next: ${nextTab.label || nextTab.title}</span>
        <span aria-hidden="true">${rdclTutorialIcons.arrow}</span>
      </button>
    </div>
  `;
}

function renderTabBody(tab) {
  if (tab.html) return tab.html;
  if (!tab.blocks?.length) return "";

  return tab.blocks.map(renderContentBlock).join("");
}

function renderContentBlock(block) {
  const renderers = {
    paragraph: renderParagraphBlock,
    heading: renderHeadingBlock,
    list: renderListBlock,
    tip: renderTipBlock,
    code: renderCodeBlock,
    image: renderImageBlock,
    cta: renderCtaBlock,
  };

  const renderer = renderers[block.type] || renderParagraphBlock;
  return renderer(block);
}

function renderParagraphBlock(block) {
  return `<p class="rdcl-tutorial-copy rdc-lh-1-5">${block.text || ""}</p>`;
}

function renderHeadingBlock(block) {
  const level = Math.min(Math.max(Number(block.level) || 3, 3), 4);
  return `<h${level} class="rdc-ff-baij rdc-fw-700">${block.text || ""}</h${level}>`;
}

function renderListBlock(block) {
  return `
    <ul class="rdcl-tutorial-check-list rdc-ls-none rdc-p-0">
      ${(block.items || []).map(renderListItem).join("")}
    </ul>
  `;
}

function renderListItem(item) {
  return `
    <li class="rdc-d-flex rdc-ai-cen rdc-m-b10">
      <span class="rdcl-tutorial-check rdc-d-iflex rdc-ai-cen rdc-jc-cen rdc-m-r10" aria-hidden="true">${rdclTutorialIcons.check}</span>
      <span>${item}</span>
    </li>
  `;
}

function renderTipBlock(block) {
  return `
    <aside class="rdcl-tutorial-tip rdc-lab-border-4 rdc-p-20 rdc-m-bl20">
      <p class="rdc-d-flex rdc-ai-cen rdc-ff-baij rdc-fw-700 rdc-m-t0 rdc-m-b10">
        <span class="rdc-d-iflex rdc-m-r10" aria-hidden="true">${rdclTutorialIcons.bulb}</span>
        ${block.title || "Tip"}
      </p>
      <p class="rdc-m-0 rdc-lh-1-5">${block.text || ""}</p>
    </aside>
  `;
}

function renderCodeBlock(block) {
  return `
    <pre class="rdcl-tutorial-code rdc-lab-border-4 rdc-p-20"><code>${escapeHtml(block.code || "")}</code></pre>
  `;
}

function renderImageBlock(block) {
  return `
    <figure class="rdcl-tutorial-figure rdc-m-bl20">
      <img class="rdc-w-full rdc-br-10" src="${block.src}" alt="${escapeHtml(getTutorialImageAlt(block, block.caption || block.title || ""))}" loading="lazy" />
      ${block.caption ? `<figcaption class="rdc-fs-12 rdc-m-t10">${block.caption}</figcaption>` : ""}
    </figure>
  `;
}

function renderCtaBlock(block) {
  return `
    <p>
      <a class="rdcl-tutorial-inline-cta rdc-lab-5th-btn rdc-td-none rdc-d-iflex rdc-ai-cen" href="${block.href || "#"}">
        <span>${block.label || "Open Link"}</span>
        <span class="rdc-m-l5" aria-hidden="true">${rdclTutorialIcons.arrow}</span>
      </a>
    </p>
  `;
}

function renderTutorialFaqs(faqs) {
  if (!faqs || !Array.isArray(faqs.items) || !faqs.items.length) return "";

  return `
    <section class="rdcl-help-section rdcl-help-faqs rdc-mw-1200 rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b20">
      <div class="rdcl-help-section-top rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-jc-spb rdc-m-b30">
        ${renderTutorialFaqHeader(faqs.title, faqs.description)}
      </div>
      <div class="rdcl-help-faq-list rdc-p-5" data-help-faq-list>
        ${faqs.items.map(renderTutorialFaqItem).join("")}
      </div>
    </section>
  `;
}

function renderTutorialFaqHeader(title, description) {
  return `
    <div class="rdcl-help-section-head rdc-d-flex rdc-m-w-full rdc-ai-fls">
      <span class="rdcl-help-section-icon rdc-p-5 rdc-br-6 rdc-m-r20 rdc-d-iflex">${rdclTutorialIcons.message}</span>
      <span>
        <h2 class="rdc-gen-mini-h rdc-m-0 rdc-m-b10">${title}</h2>
        <p class="rdc-m-0">${description}</p>
      </span>
    </div>
  `;
}

function renderTutorialFaqItem(item, index) {
  const category = item.category || "tutorial";
  const panelId = `rdcl-tutorial-faq-panel-${index}`;

  return `
    <article class="rdcl-help-faq-item rdc-m-b10" data-help-faq-item data-help-faq-category="${escapeHtml(category)}" data-help-faq-search="${escapeHtml(`${item.question} ${item.answer} ${category}`.toLowerCase())}">
      <button class="rdcl-help-faq-question rdc-darker-hover rdc-lab-border-6 rdc-bg-dark-2 rdc-br-10 rdc-p-20 rdc-w-full rdc-d-flex rdc-ai-cen rdc-jc-spb rdc-cu-poi" type="button" aria-expanded="false" aria-controls="${panelId}" data-help-faq-question>
        <span class="rdc-ta-lef">${item.question}</span>
        <span class="rdcl-help-faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="rdcl-help-faq-answer rdc-p-20 rdc-m-b20 rdc-d-none" id="${panelId}" data-help-faq-answer>
        <p class="rdc-m-0 rdc-lh-1-5">${item.answer}</p>
      </div>
    </article>
  `;
}

function renderRelatedTutorials(items) {
  if (!items.length) return "";

  return `
    <section class="rdcl-tutorial-related rdc-mw-1200 rdc-m-iauto rdc-m-b30">
      <h2 class="rdc-gen-mini-h rdc-m-b20">Related Tutorials</h2>
      <div class="rdcl-help-tutorial-grid rdc-m-t30 rdc-d-flex rdc-fw-wrap">
        ${items.map(renderRelatedTutorialCard).join("")}
      </div>
    </section>
  `;
}

function renderRelatedTutorialCard(item) {
  return `
    <article class="rdcl-help-tutorial-card rdc-w-20 rdc-t-w-half rdc-m-w-full rdc-p-5">
      <a href="${item.href}" class="rdcl-help-tutorial-card-inner rdc-p-10 rdc-darker-hover rdc-lab-border rdc-bg-dark-5 rdc-td-none rdc-h-full rdc-d-flex rdc-ff-col">
        <div class="rdcl-help-tutorial-media rdc-p-rel">
          <img class="rdc-w-full rdc-br-4" src="${item.image}" alt="${escapeHtml(getTutorialImageAlt(item))}" loading="lazy" />
          ${renderRelatedTutorialDuration(item.duration)}
        </div>
        <div class="rdcl-help-tutorial-body rdc-d-flex rdc-ff-col rdc-jc-spb">
          <h3 class="rdc-m-t10 rdc-m-0 rdc-fw-600 rdc-ff-baij rdc-fs-16">${item.title}</h3>
          <p class="rdc-m-b20 rdc-fs-14">${item.description}</p>
          <span class="rdcl-help-tutorial-level">${item.level}</span>
          <span class="rdcl-help-tutorial-cta rdc-c-blue rdc-m-b10 rdc-fw-600 rdc-ff-baij rdc-fs-14 rdc-d-iflex rdc-ai-cen">
            Watch Tutorial
            <span aria-hidden="true">${rdclTutorialIcons.arrow}</span>
          </span>
        </div>
      </a>
    </article>
  `;
}

function renderRelatedTutorialDuration(duration) {
  if (!duration) return "";

  return `<span class="rdcl-help-tutorial-duration rdc-p-abs rdc-ff-baij rdc-br-4 rdc-bg-black-1 rdc-c-white-1 rdc-fs-12">${escapeHtml(duration)}</span>`;
}

function getTutorialImageAlt(item, fallback = "") {
  if (window.getRdcLabImageAlt) return window.getRdcLabImageAlt(item, fallback);
  return (
    item.alt || item.imageAlt || item.image?.alt || fallback || item.title || ""
  );
}

function getRelatedTutorials(page, library, limit = 5) {
  const currentId = page.id;
  const pageCategories = new Set(page.categories || []);
  const pageTags = new Set(page.tags || []);

  const candidates = library
    .filter((item) => item.id !== currentId)
    .map((item) => ({
      item,
      score: getRelatedScore(item, pageCategories, pageTags),
    }))
    .sort(
      (a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title),
    );

  const matched = candidates
    .filter((entry) => entry.score > 0)
    .map((entry) => entry.item);
  const fallback = candidates
    .filter((entry) => entry.score === 0)
    .map((entry) => entry.item);

  return [...matched, ...fallback].slice(0, limit);
}

function getRelatedScore(item, pageCategories, pageTags) {
  const categoryScore = (item.categories || []).reduce((score, category) => {
    return pageCategories.has(category) ? score + 3 : score;
  }, 0);

  const tagScore = (item.tags || []).reduce((score, tag) => {
    return pageTags.has(tag) ? score + 1 : score;
  }, 0);

  return categoryScore + tagScore;
}

function bindTutorialWrittenNav() {
  const links = Array.from(
    document.querySelectorAll("[data-tutorial-tab-link]"),
  );
  const nextButtons = Array.from(
    document.querySelectorAll("[data-next-tutorial-tab]"),
  );
  const tabs = Array.from(document.querySelectorAll("[data-tutorial-tab]"));

  if (!links.length || !tabs.length) return;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveTutorialNav(link.dataset.tutorialTabLink);
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTutorialNav(button.dataset.nextTutorialTab);
    });
  });
}

function setActiveTutorialNav(id) {
  document.querySelectorAll("[data-tutorial-tab-link]").forEach((link) => {
    const isActive = link.dataset.tutorialTabLink === id;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll("[data-tutorial-tab]").forEach((tab) => {
    tab.hidden = tab.dataset.tutorialTab !== id;
  });
}

function valueToLabel(value = "") {
  return String(value)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
