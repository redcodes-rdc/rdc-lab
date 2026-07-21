const allGeneratorsPage = {
  page: {
    eyebrow: "Copy-Ready Components",
    title: "Frontend Component Generators",
    description:
      "Browse practical code generators for common frontend components and features. Start with a responsive working foundation, customize it to fit your project, or refine it further using the included AI enhancement prompts.",
  },
  intro: {
    title: "Generate the foundation, then customize it.",
    text:
      "Browse practical code generators for common frontend components and features. Start with a responsive working foundation, customize it to fit your project, or refine it further using the included AI enhancement prompts.",
  },
  CTA: "work with me",
  search: {
    placeholder: "What are you building today?",
    label: "Search generators",
  },
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
  popularTagsTitle: "Popular Tags",
  popularTags: [
    { label: "Grid", value: "grid" },
    { label: "Product", value: "product" },
    { label: "Shopify", value: "shopify" },
    { label: "CRO", value: "cro" },
    { label: "Responsive", value: "responsive" },
    { label: "Liquid Kit", value: "liquid-kit" },
  ],
  cta: {
    title: "Missing a generator you need?",
    text: "Request a practical frontend generator for a layout, Shopify section, UI pattern, or conversion-focused component.",
    buttonLabel: "Request Generator",
    href: "https://www.reddelacruz.dev/contact",
  },
  generators: [
    {
      title: "2-Column Generator",
      description:
        "Build responsive two-column HTML/CSS sections with device-specific widths, stacking, and content order.",
      href: "/gens/2-column",
      icon: "columns2",
      iconColor: "#c8fa33",
      categories: ["layout"],
      tags: ["layout", "responsive", "grid"],
      badges: {
        cro: [{ label: "Popular", type: "popular" }],
        tech: [],
      },
    },
    {
      title: "Accordion Generator",
      description:
        "Create responsive FAQ, product detail, policy, and guide accordions with working JavaScript behavior.",
      href: "/gens/accordion",
      icon: "accordion",
      iconColor: "#c8465f",
      categories: ["content", "ui"],
      tags: ["content", "product", "faq"],
      badges: {
        cro: [{ label: "Popular", type: "popular" }],
        tech: [{ label: "JS", type: "js" }],
      },
    },
    {
      title: "Badges Generator",
      description:
        "Create lightweight product badges for sales, labels, new arrivals, and campaign messaging.",
      href: "/gens/badges",
      icon: "badge",
      iconColor: "#ffb84d",
      categories: ["ui", "cro", "campaign"],
      tags: ["cro", "product", "badge"],
      badges: {
        cro: [],
        tech: [],
      },
    },
    {
      title: "Buttons Generator",
      description:
        "Generate responsive CTA buttons with custom colors, hover states, sizing, width, and radius.",
      href: "/gens/buttons",
      icon: "button",
      iconColor: "#4767e5",
      categories: ["ui", "cro"],
      tags: ["button", "cta", "cro"],
      badges: {
        cro: [{ label: "Popular", type: "popular" }],
        tech: [],
      },
    },
    {
      title: "Columns Generator",
      description:
        "Create responsive multi-column HTML/CSS layouts for cards, feature grids, categories, and content blocks.",
      href: "/gens/columns",
      icon: "grid",
      iconColor: "#51c4d1",
      categories: ["layout"],
      tags: ["grid", "layout", "responsive"],
      badges: {
        cro: [],
        tech: [],
      },
    },
    {
      title: "Free Shipping Bar Generator",
      description:
        "Generate a Shopify-friendly free shipping progress bar with cart thresholds and dynamic JavaScript.",
      href: "/gens/fs-progress-bar",
      icon: "freeShippingProgress",
      iconColor: "#40f78c",
      categories: ["campaign", "cro"],
      tags: ["cro", "cart", "shopify"],
      badges: {
        cro: [],
        tech: [],
      },
    },
    {
      title: "Icon With Text Generator",
      description:
        "Generate responsive icon-with-text sections for benefits, trust signals, policies, and feature highlights.",
      href: "/gens/icon-text",
      icon: "iconText",
      iconColor: "#c8fa33",
      categories: ["content", "layout"],
      tags: ["content", "features", "responsive"],
      badges: {
        cro: [],
        tech: [],
      },
    },
    {
      title: "Modal Generator",
      description:
        "Create responsive modal HTML/CSS/JS for offers, forms, notices, guides, and Shopify content.",
      href: "/gens/modal",
      icon: "modal",
      iconColor: "#742fa3",
      categories: ["ui", "campaign", "cro"],
      tags: ["modal", "popup", "cro"],
      badges: {
        cro: [],
        tech: [{ label: "JS", type: "js" }],
      },
    },
    {
      title: "Scroll Progress Bar Generator",
      description:
        "Create lightweight scroll progress indicators for articles, tutorials, setup flows, and long pages.",
      href: "/gens/page-progress-bar",
      icon: "readingProgress",
      iconColor: "#ff6b6b",
      categories: ["content", "utilities"],
      tags: ["content", "progress", "utility"],
      badges: {
        cro: [],
        tech: [{ label: "JS", type: "js" }],
      },
    },
    {
      title: "Sticky ATC Generator",
      description:
        "Generate a Shopify-focused sticky add-to-cart bar with product info, variants, quantity, and purchase controls.",
      href: "/gens/sticky-atc",
      icon: "cart",
      iconColor: "#c8465f",
      categories: ["cro", "campaign", "ui"],
      tags: ["cro", "product", "shopify", "liquid-kit"],
      badges: {
        cro: [],
        tech: [],
      },
    },
    {
      title: "Tabs Generator",
      description:
        "Create responsive tabs for product information, FAQs, specifications, plans, and landing page content.",
      href: "/gens/tabs",
      icon: "tabs",
      iconColor: "#44a8a1",
      categories: ["content", "layout", "ui"],
      tags: ["content", "tabs", "responsive"],
      badges: {
        cro: [],
        tech: [{ label: "JS", type: "js" }],
      },
    },
    {
      title: "Timer Bar Generator",
      description:
        "Build countdown timer bars for launches, limited-time offers, promos, and campaign pages.",
      href: "/gens/timer-bar",
      icon: "timer",
      iconColor: "#f6d365",
      categories: ["campaign", "cro"],
      tags: ["cro", "sale", "timer"],
      badges: {
        cro: [],
        tech: [{ label: "JS", type: "js" }],
      },
    },
    {
      title: "Tooltip Generator",
      description:
        "Create lightweight CSS tooltips for product details, form help, pricing notes, and UI guidance.",
      href: "/gens/tool-tip",
      icon: "tooltip",
      iconColor: "#a78bfa",
      categories: ["content", "ui", "utilities"],
      tags: ["content", "css-only", "tooltip"],
      badges: {
        cro: [],
        tech: [],
      },
    },
  ],
};

const allGeneratorIcons = {
  default: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" stroke-width="3"/>
    <path d="M16 18H32M16 24H30M16 30H26" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  columns2: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.3396" y="5.86133" width="34.764" height="38.2783" rx="5" fill="#28b375"/>
<rect x="44.3962" y="7.36133" width="31.764" height="35.2783" rx="3.5" stroke="#28b375" stroke-width="3"/>
</svg>`,
  accordion: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.86304" y="5.86133" width="72.2739" height="8.3489" rx="4.17445" fill="#c84d95"></rect>
    <rect x="6.36304" y="18.4561" width="69.2739" height="24.1834" rx="3.5" stroke="#c84d95" stroke-width="3"></rect>
  </svg>`,
  badge: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#cfca3a" stroke-width="3"/>
<rect x="41" y="12.3262" width="27.8499" height="10.4748" rx="1.92669" fill="#cfca3a"/>
<path d="M47.9924 17.5645H61.8576" stroke="#211C1E" stroke-width="1.46633" stroke-linecap="round"/>
</svg>`,
  button: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.86304" y="11.4082" width="72.2739" height="27.1834" rx="5" fill="#9651d7"></rect>
    <path d="M23.009 25H58.991" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
  </svg>`,
  grid: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.86304" y="5.86133" width="22.4581" height="38.2783" rx="5" fill="#45c1e7"/>
<rect x="31.2712" y="7.36133" width="19.4581" height="35.2783" rx="3.5" stroke="#45c1e7" stroke-width="3"/>
<rect x="54.679" y="5.86133" width="22.4581" height="38.2783" rx="5" fill="#45c1e7"/>
</svg>`,
  freeShippingProgress: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#e1594a" stroke-width="3"/>
<path d="M14.2612 24.8008H67.739" stroke="#3D373A" stroke-width="4" stroke-linecap="round"/>
<path d="M14.2612 24.8008H43.7703" stroke="#cb4747" stroke-width="4" stroke-linecap="round"/>
</svg>`,
  iconText: `<svg width="32" height="100%" viewBox="0 0 75 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="35.2763" height="35.2785" rx="17.6382" stroke="#a9c334" stroke-width="3"/>
<path d="M43.6938 11.2705H72.549" stroke="#a9c334" stroke-width="3.80532" stroke-linecap="round"/>
<path d="M43.6938 27.0088H62.9303" stroke="#a9c334" stroke-width="3.80532" stroke-linecap="round"/>
<path d="M43.6934 19.585H72.5486" stroke="#a9c334" stroke-width="3.80532" stroke-linecap="round"/>
</svg>`,
  modal: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.86304" y="5.86133" width="72.2739" height="38.2783" rx="5" fill="#3fc7bc"></rect>
    <path d="M67.6467 10.2656L72.1447 14.7635" stroke="#211C1E" stroke-width="1.5149" stroke-linecap="round"></path>
    <path d="M72.145 10.2656L67.6471 14.7635" stroke="#211C1E" stroke-width="1.5149" stroke-linecap="round"></path>
    <path d="M20.6694 32.2773H47.7771" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
    <path d="M20.6687 17.7236H61.3311" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
    <path d="M20.6687 24.8535H61.3311" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
  </svg>`,
  readingProgress: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#3aa0ff" stroke-width="3"/>
<path d="M14.2612 20H67.739" stroke="#3D373A" stroke-width="4" stroke-linecap="round"/>
<path d="M14.2612 20H43.7703" stroke="#3aa0ff" stroke-width="4" stroke-linecap="round"/>
</svg>`,
  cart: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#6d6aff" stroke-width="3"/>
<rect x="10.8159" y="31.3359" width="60.3679" height="8.12811" rx="1.92669" fill="#6d6aff"/>
<path d="M55.6444 34.6672C55.2394 34.6672 54.9112 34.9954 54.9111 35.4003C54.9111 35.8052 55.2393 36.1335 55.6442 36.1336L55.6443 35.4004L55.6444 34.6672ZM66.5705 36.1345C66.9754 36.1346 67.3037 35.8063 67.3037 35.4014C67.3038 34.9965 66.9755 34.6682 66.5706 34.6682L66.5705 35.4014L66.5705 36.1345ZM55.6443 35.4004L55.6442 36.1336L66.5705 36.1345L66.5705 35.4014L66.5706 34.6682L55.6444 34.6672L55.6443 35.4004Z" fill="#211C1E"/>
</svg>`,
  tabs: `<svg width="32" height="100%" viewBox="0 0 73 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28.7654" height="8.3489" rx="4.17445" fill="#ebc957"/>
<rect x="32.0776" y="1" width="26.7654" height="6.3489" rx="3.17445" stroke="#ebc957" stroke-width="2"/>
<rect x="1.5" y="12.5947" width="69.2739" height="24.1834" rx="3.5" stroke="#ebc957" stroke-width="3"/>
</svg>`,
  timer: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#62cb5d" stroke-width="3"/>
<rect x="11.042" y="11.7324" width="17.9973" height="18.2998" rx="1.92669" fill="#62cb5d"/>
<rect x="32.0012" y="11.7324" width="17.9973" height="18.2998" rx="1.92669" fill="#62cb5d"/>
<rect x="52.9604" y="11.7324" width="17.9973" height="18.2998" rx="1.92669" fill="#62cb5d"/>
<path d="M21.642 18.7596C21.642 18.3529 21.5758 18.003 21.4434 17.7098C21.311 17.4166 21.1266 17.1896 20.8901 17.0288C20.6631 16.868 20.3983 16.7876 20.0957 16.7876C19.7552 16.7876 19.462 16.8633 19.2161 17.0146C18.9796 17.1565 18.7905 17.3646 18.6486 17.6389C18.5162 17.9037 18.45 18.2252 18.45 18.6036C18.45 19.1899 18.5966 19.6392 18.8898 19.9513C19.1924 20.2634 19.6086 20.4195 20.1382 20.4195C20.4693 20.4195 20.7861 20.3911 21.0888 20.3343C21.4009 20.2681 21.7461 20.1641 22.1244 20.0222L21.486 21.2423C21.155 21.4031 20.8287 21.5166 20.5071 21.5828C20.195 21.6395 19.9018 21.6679 19.6275 21.6679C18.9938 21.6679 18.45 21.5497 17.996 21.3132C17.542 21.0768 17.1921 20.7268 16.9462 20.2634C16.7098 19.8 16.5915 19.2372 16.5915 18.5752C16.5915 17.932 16.7429 17.3646 17.0455 16.8728C17.3482 16.381 17.7643 15.9979 18.2939 15.7236C18.8236 15.4494 19.4384 15.3122 20.1382 15.3122C20.8287 15.3122 21.4245 15.4588 21.9258 15.752C22.427 16.0452 22.8101 16.4472 23.0749 16.9579C23.3397 17.4592 23.4721 18.0408 23.4721 18.7029C23.4721 19.2987 23.387 19.8615 23.2168 20.3911C23.056 20.9207 22.7912 21.4551 22.4223 21.9942C22.0629 22.5238 21.59 23.0771 21.0036 23.6541L19.8403 24.8174H17.4711L17.4569 24.789L19.4147 22.9873C19.9349 22.5144 20.3558 22.0368 20.6773 21.5544C21.0084 21.0721 21.2495 20.5944 21.4009 20.1215C21.5616 19.6487 21.642 19.1947 21.642 18.7596Z" fill="#211B1E"/>
<path d="M42.6013 18.9422C42.6013 18.5355 42.5351 18.1856 42.4026 17.8924C42.2702 17.5992 42.0858 17.3722 41.8494 17.2114C41.6224 17.0507 41.3576 16.9703 41.0549 16.9703C40.7144 16.9703 40.4212 17.0459 40.1753 17.1972C39.9389 17.3391 39.7497 17.5472 39.6078 17.8215C39.4754 18.0863 39.4092 18.4079 39.4092 18.7862C39.4092 19.3726 39.5558 19.8218 39.849 20.1339C40.1517 20.446 40.5678 20.6021 41.0975 20.6021C41.4285 20.6021 41.7453 20.5737 42.048 20.517C42.3601 20.4508 42.7053 20.3467 43.0836 20.2049L42.4452 21.4249C42.1142 21.5857 41.7879 21.6992 41.4663 21.7654C41.1542 21.8222 40.861 21.8505 40.5867 21.8505C39.9531 21.8505 39.4092 21.7323 38.9553 21.4959C38.5013 21.2594 38.1513 20.9095 37.9054 20.446C37.669 19.9826 37.5508 19.4198 37.5508 18.7578C37.5508 18.1147 37.7021 17.5472 38.0047 17.0554C38.3074 16.5636 38.7235 16.1805 39.2532 15.9062C39.7828 15.632 40.3976 15.4948 41.0975 15.4948C41.7879 15.4948 42.3837 15.6414 42.885 15.9346C43.3863 16.2278 43.7693 16.6298 44.0341 17.1405C44.299 17.6418 44.4314 18.2234 44.4314 18.8855C44.4314 19.4813 44.3462 20.0441 44.176 20.5737C44.0152 21.1034 43.7504 21.6377 43.3815 22.1768C43.0221 22.7065 42.5492 23.2597 41.9629 23.8367L40.7995 25H38.4303L38.4162 24.9716L40.3739 23.1699C40.8941 22.697 41.315 22.2194 41.6366 21.737C41.9676 21.2547 42.2088 20.7771 42.3601 20.3042C42.5209 19.8313 42.6013 19.3773 42.6013 18.9422Z" fill="#211B1E"/>
<path d="M63.7629 19.0721C63.7629 18.6654 63.6967 18.3155 63.5643 18.0223C63.4319 17.7291 63.2474 17.5021 63.011 17.3413C62.784 17.1805 62.5192 17.1001 62.2165 17.1001C61.876 17.1001 61.5828 17.1758 61.3369 17.3271C61.1005 17.469 60.9113 17.6771 60.7695 17.9514C60.6371 18.2162 60.5709 18.5377 60.5709 18.9161C60.5709 19.5024 60.7174 19.9517 61.0106 20.2638C61.3133 20.5759 61.7294 20.732 62.2591 20.732C62.5901 20.732 62.9069 20.7036 63.2096 20.6468C63.5217 20.5806 63.8669 20.4766 64.2452 20.3347L63.6068 21.5548C63.2758 21.7156 62.9495 21.8291 62.6279 21.8953C62.3158 21.952 62.0226 21.9804 61.7484 21.9804C61.1147 21.9804 60.5709 21.8622 60.1169 21.6257C59.6629 21.3893 59.313 21.0393 59.067 20.5759C58.8306 20.1125 58.7124 19.5497 58.7124 18.8877C58.7124 18.2445 58.8637 17.6771 59.1664 17.1853C59.469 16.6935 59.8852 16.3104 60.4148 16.0361C60.9444 15.7619 61.5592 15.6247 62.2591 15.6247C62.9495 15.6247 63.5454 15.7713 64.0466 16.0645C64.5479 16.3577 64.9309 16.7597 65.1958 17.2704C65.4606 17.7717 65.593 18.3533 65.593 19.0154C65.593 19.6112 65.5079 20.174 65.3376 20.7036C65.1768 21.2332 64.912 21.7676 64.5432 22.3067C64.1838 22.8363 63.7109 23.3896 63.1245 23.9666L61.9612 25.1299H59.592L59.5778 25.1015L61.5356 23.2998C62.0557 22.8269 62.4766 22.3493 62.7982 21.8669C63.1292 21.3846 63.3704 20.9069 63.5217 20.434C63.6825 19.9612 63.7629 19.5072 63.7629 19.0721Z" fill="#211B1E"/>
</svg>`,
  tooltip: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.86304" y="5.86035" width="72.2739" height="30.9414" rx="5" fill="#e44071"/>
<path d="M41 47.2461L33.0992 33.5615L48.9008 33.5615L41 47.2461Z" fill="#e44071"/>
<path d="M20.6689 18.3271H61.3313" stroke="#211C1E" stroke-width="3" stroke-linecap="round"/>
<path d="M20.6689 25H61.3313" stroke="#211C1E" stroke-width="3" stroke-linecap="round"/>
</svg>`,
};

renderAllGeneratorsPage(allGeneratorsPage);

function renderAllGeneratorsPage(content) {
  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `
    <div class="rdcl-allgen-main">
      <div class="rdcl-allgen-inner rdc-mw-1400 rdc-m-iauto rdc-p-20">
        ${renderPageBreadcrumb({ label: "Back to Home", href: "/" })}
        ${renderHeader(content.page)}
        ${renderIntro(content.intro)}
        <div class="rdcl-allgen-layout rdc-d-flex rdc-fw-wrap">
          ${renderFilters(content)}
          <section class="rdcl-allgen-results rdc-w-75 rdc-t-w-full rdc-m-w-full" aria-label="Generator results">
            ${renderSearch(content.search)}
            <div class="rdcl-allgen-count rdc-ta-rig rdc-fs-12 rdc-p-r10" data-allgen-count></div>
            <div class="rdcl-allgen-grid rdc-m-bl20 r rdc-d-flex rdc-fw-wrap" data-allgen-grid>
              ${content.generators.map(renderGeneratorCard).join("")}
            </div>
            <div class="rdcl-allgen-empty rdc-d-none" data-allgen-empty>
              No generators found.
            </div>
          </section>
        </div>
        ${renderCta(content.cta)}
      </div>
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

function renderPageBreadcrumb(link) {
  if (window.renderRdcLabBreadcrumb) return window.renderRdcLabBreadcrumb(link);

  return `
    <a class="rdcl-page-breadcrumb rdcl-tutorial-back rdc-d-iflex rdc-ai-cen rdc-td-none rdc-ff-baij rdc-tt-upc rdc-fs-12 rdc-fw-600 rdc-m-b30" href="${link.href}">
      <span aria-hidden="true">&larr;</span>
      <span class="rdc-m-l10">${link.label}</span>
    </a>
  `;
}

function renderHeader(content) {
  return `
    <header class="rdcl-allgen-header rdc-m-b30">
      <span class="rdcl-page-eyebrow rdcl-allgen-eyebrow rdc-d-iflex rdc-ff-baij rdc-fw-700 rdc-fs-12 rdc-m-b15 rdc-tt-upc">${content.eyebrow}</span>
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
    <aside class="rdcl-allgen-sidebar rdc-w-25 rdc-t-w-full rdc-m-w-full rdc-p-r20 rdc-m-p-0" aria-label="Generator filters">
      <button class="rdcl-allgen-filter-toggle rdc-cu-poi rdc-m-b20 rdc-d-none rdc-m-d-flex rdc-w-full rdc-d-flex rdc-ai-cen rdc-jc-spb rdc-ff-baij rdc-tt-upc" type="button" aria-expanded="true" data-allgen-filter-toggle>
        <span>FILTER</span>
        <span class="rdcl-allgen-filter-toggle-icon" aria-hidden="true" data-allgen-filter-icon>-</span>
      </button>
      <div class="rdcl-allgen-filter-panel" data-allgen-filter-panel>
        <div class="rdcl-allgen-filter-block rdc-p-10 rdc-m-b20">
          <div class="rdcl-allgen-filter-title rdc-fw-500 rdc-m-b20 rdc-ff-baij rdc-tt-upc">Categories</div>
          <div class="rdcl-allgen-filter-con rdc-ff-baij rdc-tt-upc rdc-d-flex rdc-ff-col">
          <button class="rdcl-allgen-filter rdc-lab-border-h-1 rdc-cu-poi rdc-p-10 is-active" type="button" data-allgen-category="all">
            <span>All Generators</span>
          </button>
          ${categories.map(renderCategoryFilter).join("")}
          </div>
        </div>
        <div class="rdcl-allgen-filter-block rdc-p-10 rdc-m-b20">
          <div class="rdcl-allgen-filter-title rdc-fw-500 rdc-m-b20 rdc-ff-baij rdc-tt-upc">${content.popularTagsTitle}</div>
          <div class="rdcl-allgen-tags">
            ${content.popularTags.map(renderTagFilter).join("")}
          </div>
          <button class="rdcl-allgen-clear-tags rdc-lab-border-h-1 rdc-br-4 rdc-c-white-1 rdc-fw-300 rdc-tt-upc rdc-m-t5 rdc-fs-11 rdc-cu-poi rdc-m-t10 rdc-d-none" type="button" data-allgen-clear-tags>
            Remove selected tags
          </button>
        </div>
      </div>
    </aside>
  `;
}

function renderCategoryFilter(category) {
  return `
    <button class="rdcl-allgen-filter rdc-lab-border-h-1 rdc-d-flex rdc-ai-cen rdc-cu-poi rdc-p-10" type="button" data-allgen-category="${category.value}">
      <span>${category.label}</span>
      ${category.badge ? renderBadge(category.badge, "cat") : ""}
    </button>
  `;
}

function renderTagFilter(tag) {
  return `<button class="rdcl-allgen-tag rdc-lab-border-h-1 rdc-cu-poi rdc-m-b5 rdc-m-r5" type="button" data-allgen-tag="${tag.value}">${tag.label}</button>`;
}

function renderSearch(search) {
  return `
    <div class="rdcl-search-bar rdcl-allgen-search rdc-lab-border-2 rdc-m-b10 rdc-d-flex rdc-ai-cen">
      <label class="rdc-d-none" for="rdcl-search-bar">${search.label}</label>
      <span class="rdcl-search-bar-icon" aria-hidden="true">${renderSearchIcon()}</span>
      <input id="rdcl-search-bar" class="rdc-w-full" type="text" placeholder="${search.placeholder}" data-allgen-search />
      <button class="rdcl-search-bar-clear" type="button" aria-label="Clear search" data-allgen-search-clear>
        &times;
      </button>
    </div>
  `;
}

function renderGeneratorCard(item) {
  const categories = item.categories.join(" ");
  const tags = item.tags.join(" ");
  const badgeText = getBadgeSearchText(item.badges);
  const categoryText = item.categories.map(valueToSearchWords).join(" ");
  const tagText = item.tags.map(valueToSearchWords).join(" ");
  const searchText = [
    item.title,
    item.description,
    categories,
    categoryText,
    tags,
    tagText,
    badgeText,
  ]
    .join(" ")
    .toLowerCase();

  return `
    <article class="rdcl-allgen-card rdcl-card rdc-w-33-33 rdc-t-w-half rdc-m-w-full rdc-p-5" style="--rdcl-allgen-icon-color: ${item.iconColor || "#c8fa33"}" data-allgen-card data-categories="${categories}" data-tags="${tags}" data-search="${escapeHtml(searchText)}">
      <a href="${item.href}" class="rdcl-allgen-card-link rdcl-card-wrap rdc-jc-spb rdc-darker-hover rdc-lab-border-2 rdc-td-none rdc-bg-dark-5 rdc-br-10 rdc-h-full rdc-p-20 rdc-d-flex rdc-ff-col">
        <div class="rdcl-allgen-icon-wrap rdc-p-rel">
          <span class="rdcl-allgen-icon rdc-h-full rdc-d-iflex">${allGeneratorIcons[item.icon] || allGeneratorIcons.default}</span>
          ${renderBadgeGroup(item.badges?.cro, "cro")}
          ${renderBadgeGroup(item.badges?.tech, "tech")}
        </div>
        <div class="rdcl-allgen-card-body">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
        <span class="rdcl-allgen-arrow rdc-ta-rig" aria-hidden="true">${renderArrowIcon()}</span>
      </a>
    </article>
  `;
}

function renderBadgeGroup(badges = [], position) {
  if (!badges.length) return "";

  return `
    <span class="rdcl-allgen-badge-stack rdcl-allgen-badge-stack-${position}">
      ${badges.map((badge) => renderBadge(badge, position)).join("")}
    </span>
  `;
}

function renderBadge(badge, position = "") {
  const typeClass = `rdc-catbadge-${normalizeClassName(badge.type || badge.label)}`;
  const positionClass = position ? `rdcl-allgen-badge-${position}` : "";

  return `<span class="rdcl-allgen-badge rdc-ff-baij rdc-c-white-3 rdc-fw-500 rdc-br-4 rdc-fs-10 rdc-tt-upc ${positionClass} ${typeClass}">${badge.label}</span>`;
}

function getBadgeSearchText(badges = {}) {
  return Object.values(badges)
    .flat()
    .filter(Boolean)
    .map((badge) => `${badge.label || ""} ${badge.type || ""}`)
    .join(" ");
}

function valueToSearchWords(value = "") {
  return String(value).replace(/-/g, " ");
}

function renderCta(cta) {
  if (!cta) return "";

  return `
    <section class="rdcl-allgen-cta rdc-d-flex rdc-ai-cen rdc-jc-spb">
      <div>
        <h3>${cta.title}</h3>
        <p>${cta.text}</p>
      </div>
      <a href="${cta.href}" class="rdcl-allgen-cta-btn">${cta.buttonLabel}</a>
    </section>
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
    <path d="M4 11L11 4M11 4H5M11 4V10" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function normalizeClassName(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
