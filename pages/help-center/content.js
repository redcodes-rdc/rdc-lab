const helpCenterPage = {
  // =========================
  // HERO / PAGE TITLE
  // =========================
  page: {
    eyebrow: "Support & Resources",
    title: "RDC Lab Help Center",
    description:
      "Find generator documentation, FAQs, tutorials, downloads, and practical guidance for using RDC Lab's copyable code and built-in AI enhancement prompts.",
  },
  intro: {
    title: "Find the answers and resources you need.",
    text:
      "Use the Help Center to find RDC Lab documentation, FAQs, downloads, and tutorials that explain how the generators work and how to get more from the code you copy, customize, and implement.",
  },
  quickLinks: [
    {
      title: "Browse Generators",
      description: "Find responsive HTML, CSS, JavaScript, and Shopify-friendly component generators.",
      href: "/pages/html-generators/index.html",
    },
    {
      title: "Watch Tutorials",
      description: "Learn how to use generated foundations in real frontend and Shopify workflows.",
      href: "/pages/tutorials/index.html",
    },
    {
      title: "Use AI Prompts",
      description: "Enhance copied generator code with structured prompts for design, accessibility, SEO, and Liquid.",
      href: "/pages/html-generators/index.html",
    },
  ],

  CTA: "work with me",

  // =========================
  // DOWNLOADABLES
  // =========================
  downloadables: {
    title: "Downloadables",
    description:
      "Useful resources to help you build faster with RDC Lab.",
    items: [
      {
        icon: "codeFile",
        title: "RDC Lab Global CSS",
        description:
          "The shared utility CSS used by RDC Lab generators for spacing, layout, typography, and responsive helpers.",
        fileType: "CSS",
        fileSize: "9 KB",
        href: "/assets/rdc-lab.css",
      },
    ],
  },

  // =========================
  // FAQS
  // =========================
  faqs: {
    title: "FAQs",
    description: "Search common questions about RDC Lab generators, Shopify compatibility, tutorials, downloads, and AI prompt help.",
    search: {
      label: "Search questions",
      placeholder: "Search questions...",
    },
    tabs: [
      { label: "All", value: "all" },
      { label: "Getting Started", value: "getting-started" },
      { label: "Using the Generators", value: "using-the-generators" },
      { label: "Shopify & Compatibility", value: "shopify-compatibility" },
      { label: "Resources & Downloads", value: "resources-downloads" },
      { label: "Tutorials", value: "tutorials" },
      { label: "Working With Me", value: "working-with-me" },
      { label: "General", value: "general" },
    ],
    items: [
      {
        question: "What is RDC Lab?",
        answer:
          "RDC Lab is a collection of frontend code generators, tutorials, and resources designed to help developers create production-ready components faster.",
        category: "getting-started",
      },
      {
        question: "Are all generators free to use?",
        answer:
          "Yes. All generators currently available on RDC Lab are free to use for both personal and commercial projects unless otherwise stated.",
        category: "getting-started",
      },
      {
        question: "Do I need coding experience?",
        answer:
          "A basic understanding of HTML and CSS is recommended. The generators are designed to reduce repetitive work, not replace fundamental frontend knowledge.",
        category: "getting-started",
      },
      {
        question: "Who is RDC Lab designed for?",
        answer:
          "RDC Lab is built for frontend developers, Shopify developers, freelancers, agencies, and anyone who wants to speed up UI development with clean, customizable code.",
        category: "getting-started",
      },
      {
        question: "Can I use RDC Lab for commercial projects?",
        answer:
          "Yes. You're free to use the generated code in personal and commercial projects.",
        category: "getting-started",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No. Everything currently available can be accessed without creating an account.",
        category: "getting-started",
      },
      {
        question: "Will more generators be added?",
        answer:
          "Absolutely. RDC Lab is continuously expanding with new generators, downloadable resources, tutorials, and future Shopify Kits.",
        category: "getting-started",
      },

      {
        question: "How do I use a generator?",
        answer:
          "Choose your settings, preview the result, copy the generated code, then customize or enhance it before adding it to your project.",
        category: "using-the-generators",
      },
      {
        question: "Can I edit the generated code?",
        answer:
          "Yes. RDC Lab generators create editable frontend code that can be customized for your design, platform, and implementation needs.",
        category: "using-the-generators",
      },
      {
        question: "What are AI enhancement prompts?",
        answer:
          "AI enhancement prompts are structured prompts available on generator pages. Paste your copied generator code at the top, choose the improvements you want, and use the prompt to refine design, accessibility, SEO, performance, animations, or Shopify Liquid conversion.",
        category: "using-the-generators",
      },
      {
        question: "Can I regenerate the code after making changes?",
        answer:
          "Yes. Simply update the settings and generate the code again. Any manual edits should be made after copying the generated output.",
        category: "using-the-generators",
      },
      {
        question: "Why doesn't the preview match my website exactly?",
        answer:
          "The preview only demonstrates the generated component. Your website's fonts, colors, spacing, and styles may affect how it looks after integration.",
        category: "using-the-generators",
      },
      {
        question: "Can I save my generator settings?",
        answer:
          "Not at the moment, but it's something planned for a future update.",
        category: "using-the-generators",
      },
      {
        question: "Are the generators mobile responsive?",
        answer:
          "Most generators include responsive options. Be sure to review the available settings before generating your code.",
        category: "using-the-generators",
      },
      {
        question: "Which browsers are supported?",
        answer:
          "The generated code is designed to work in all modern browsers including Chrome, Edge, Firefox, and Safari.",
        category: "using-the-generators",
      },

      {
        question: "Can I use the generators with Shopify?",
        answer:
          "Yes. The generated HTML, CSS, and JavaScript can be integrated into Shopify themes with minor adjustments where needed.",
        category: "shopify-compatibility",
      },
      {
        question: "Which Shopify themes are supported?",
        answer:
          "Because the generators produce standard frontend code, they can generally be adapted to any Shopify theme.",
        category: "shopify-compatibility",
      },
      {
        question: "What's the difference between Generators and Shopify Kits?",
        answer:
          "Generators create flexible HTML, CSS, and JavaScript components that work across different platforms. Shopify Kits are complete, plug-and-play solutions built specifically for Shopify, including Liquid, schema settings, CSS, and JavaScript.",
        category: "shopify-compatibility",
      },
      {
        question: "Can I use the generated code on other platforms?",
        answer:
          "Yes. Most generators are platform-independent and can be used on virtually any website that supports HTML, CSS, and JavaScript.",
        category: "shopify-compatibility",
      },
      {
        question: "Do the generators work with Webflow or WordPress?",
        answer:
          "Yes. Since the generated code uses standard frontend technologies, it can usually be adapted for Webflow, WordPress, and many other platforms.",
        category: "shopify-compatibility",
      },
      {
        question: "Can I combine multiple generators on the same page?",
        answer:
          "Absolutely. The generators are designed to work together, allowing you to build complete pages using multiple components.",
        category: "shopify-compatibility",
      },
      {
        question: "Will Shopify Kits include schema and theme settings?",
        answer:
          "Yes. Shopify Kits are designed to be nearly plug-and-play, complete with Liquid, schema, CSS, JavaScript, and merchant-friendly customization options.",
        category: "shopify-compatibility",
      },

      {
        question: "What's included in Global CSS?",
        answer:
          "Global CSS includes utility classes, variables, spacing helpers, layout utilities, typography helpers, and other commonly used styles to speed up frontend development.",
        category: "resources-downloads",
      },
      {
        question: "How do I use the Global CSS file?",
        answer:
          "Download the file and include it in your project before using the generated components. It provides many of the utility classes used throughout RDC Lab.",
        category: "resources-downloads",
      },
      {
        question: "What's inside the AI Build Prompts?",
        answer:
          "AI Build Prompts contain structured prompt templates designed to work alongside RDC Lab generators, helping you generate layouts and content more effectively with AI.",
        category: "resources-downloads",
      },
      {
        question:
          "What's the difference between the Wireframe Kit and Copywriting Library?",
        answer:
          "The Wireframe Kit helps you plan page layouts visually, while the Copywriting Library provides reusable copy examples and AI prompts to help you write content faster.",
        category: "resources-downloads",
      },
      {
        question: "How often are the downloadable resources updated?",
        answer:
          "Resources are updated regularly as RDC Lab grows. Existing resources may receive improvements and new content over time.",
        category: "resources-downloads",
      },
      {
        question: "Are future resources included for free?",
        answer:
          "Yes. Any future resources released under the free collection will continue to be available at no cost.",
        category: "resources-downloads",
      },

      {
        question: "Where should I start if I'm new?",
        answer:
          "Start with the Getting Started tutorials, then explore the generators that match the type of component you're trying to build.",
        category: "tutorials",
      },
      {
        question: "Are tutorials beginner friendly?",
        answer:
          "Yes. Tutorials are designed to be straightforward, practical, and easy to follow without unnecessary complexity.",
        category: "tutorials",
      },
      {
        question: "Do tutorials use the generators from RDC Lab?",
        answer:
          "Yes. Most tutorials demonstrate practical examples using RDC Lab generators, resources, and frontend workflows.",
        category: "tutorials",
      },
      {
        question: "Can I request a tutorial?",
        answer:
          "Absolutely. If there's a topic you'd like covered, feel free to send a suggestion.",
        category: "tutorials",
      },
      {
        question: "Will you create Shopify-specific tutorials?",
        answer:
          "Yes. As Shopify Kits are released, dedicated tutorials will be added as well.",
        category: "tutorials",
      },

      {
        question: "Can you build a custom section for my Shopify store?",
        answer:
          "Yes. I offer custom Shopify development for businesses looking for tailored solutions beyond the generators available on RDC Lab.",
        category: "working-with-me",
      },
      {
        question: "Do you offer full Shopify development services?",
        answer:
          "Yes. I can help with custom sections, theme customization, CRO improvements, frontend development, and other Shopify-related work.",
        category: "working-with-me",
      },
      {
        question: "Can you customize a generator for my project?",
        answer:
          "Yes. If you need additional functionality or a custom variation, feel free to get in touch.",
        category: "working-with-me",
      },
      {
        question: "Can you convert my design into Shopify?",
        answer:
          "Yes. I can convert Figma or other design files into clean, responsive Shopify themes and sections.",
        category: "working-with-me",
      },
      {
        question: "How do I request a quote?",
        answer:
          "Simply reach out through the contact page with your project details, and I'll get back to you with an estimate.",
        category: "working-with-me",
      },
      {
        question: "Do you offer ongoing support or retainers?",
        answer:
          "Yes. Ongoing development and maintenance services are available depending on your project's needs.",
        category: "working-with-me",
      },

      {
        question: "How often is RDC Lab updated?",
        answer:
          "New generators, resources, tutorials, and improvements are added regularly.",
        category: "general",
      },
      {
        question: "Can I suggest a new generator?",
        answer:
          "Absolutely. User feedback plays a big role in deciding what gets built next.",
        category: "general",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Use the contact page and include as much detail as possible, including screenshots or steps to reproduce the issue.",
        category: "general",
      },
      {
        question: "Can I request a new feature?",
        answer:
          "Yes. Feature requests are always welcome and help shape future updates.",
        category: "general",
      },
      {
        question: "How can I support RDC Lab?",
        answer:
          "The easiest way is by sharing RDC Lab, using the generators, or working with me on your next Shopify project.",
        category: "general",
      },
      {
        question: "Where can I contact you?",
        answer:
          "You can reach me through the contact page or any of the contact methods listed on RDC Lab.",
        category: "general",
      },
    ],
  },

  // =========================
  // TUTORIALS
  // =========================
  tutorials: {
    title: "Tutorials",
    description: "Step-by-step frontend and Shopify guides that connect generator output to real implementation.",
    ctaLabel: "View All Tutorials",
    ctaHref: "/pages/tutorials/index.html",
    items: [
      {
        image: "/assets/images/rdc-lab-assets-easy-2.jpg",
        duration: "10:45",
        title: "Create a Two-Column Section in 5 Minutes",
        description: "Build a responsive two-column layout without any hassle.",
        level: "",
        href: "/pages/tutorials/tutorial-1/index.html",
      },
    ],
  },
};

const helpCenterIcons = {
  download: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 5V21M16 21L10 15M16 21L22 15" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 25H25" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`,
  message: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M8 9H24V20H14L8 25V9Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  </svg>`,
  play: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="6" y="8" width="20" height="16" rx="3" stroke="currentColor" stroke-width="2.2"/>
    <path d="M14 13L20 16L14 19V13Z" fill="currentColor"/>
  </svg>`,
  codeFile: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M12 6H29L38 15V42H12V6Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M29 6V15H38" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M21 22L17 26L21 30M27 22L31 26L27 30" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  layoutFile: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="9" y="10" width="30" height="28" rx="3" stroke="currentColor" stroke-width="3"/>
    <path d="M9 19H39M22 19V38" stroke="currentColor" stroke-width="3"/>
  </svg>`,
  cssFile: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M12 6H29L38 15V42H12V6Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M29 6V15H38" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M20 23L16 27L20 31M28 23L32 27L28 31" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  figmaFile: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 24H17A7 7 0 1 1 17 10H24V24ZM24 24H31A7 7 0 1 0 31 10H24V24ZM24 24H17A7 7 0 1 0 17 38H24V24ZM24 24H31A7 7 0 1 1 31 38H24V24Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  </svg>`,
  checklistFile: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M12 7H36V41H12V7Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M18 19L21 22L28 15M18 31L21 34L30 25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  search: `<svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="2"/>
    <path d="M12 12L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  arrow: `<svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

renderHelpCenterPage(helpCenterPage);

function renderHelpCenterPage(content) {
  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `
    <div class="rdcl-help-main">
      <div class="rdcl-help-inner rdc-mw-1400 rdc-m-iauto rdc-p-20">
        ${renderPageBreadcrumb({ label: "Back to Home", href: "/" })}
        ${renderHelpHero(content.page)}
        ${renderIntro(content.intro)}
        ${renderDownloadables(content.downloadables)}
        ${renderFaqs(content.faqs)}
        ${renderTutorials(content.tutorials)}
        ${renderQuickLinks(content.quickLinks)}
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

// =========================
// HERO / PAGE TITLE
// =========================
function renderHelpHero(content) {
  return `
    <header class="rdcl-help-hero rdcl-allgen-header rdc-m-b30">
      <span class="rdcl-page-eyebrow rdcl-help-eyebrow rdcl-allgen-eyebrow rdc-d-iflex rdc-ff-baij rdc-fw-700 rdc-fs-12 rdc-m-b15 rdc-tt-upc">${content.eyebrow}</span>
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

function renderQuickLinks(items = []) {
  if (!items.length) return "";

  return `
    <section class="rdcl-help-quick-links rdc-d-flex rdc-fw-wrap rdc-m-b20" aria-label="Help center quick links">
      ${items.map(renderQuickLink).join("")}
    </section>
  `;
}

function renderQuickLink(item) {
  return `
    <article class="rdcl-help-quick-link rdc-w-33-33 rdc-t-w-half rdc-m-w-full rdc-p-5">
      <a class="rdcl-help-quick-link-inner rdc-darker-hover rdc-lab-border rdc-bg-dark-5 rdc-td-none rdc-h-full rdc-p-20 rdc-d-flex rdc-ff-col" href="${item.href}">
        <h2 class="rdc-ff-baij rdc-fw-600 rdc-fs-16 rdc-m-0 rdc-m-b10">${item.title}</h2>
        <p class="rdc-m-0">${item.description}</p>
        <span class="rdcl-help-tutorial-cta rdc-c-blue rdc-m-t20 rdc-fw-600 rdc-ff-baij rdc-fs-14 rdc-d-iflex rdc-ai-cen">
          Open
          <span aria-hidden="true">${helpCenterIcons.arrow}</span>
        </span>
      </a>
    </article>
  `;
}

// =========================
// DOWNLOADABLES
// =========================
function renderDownloadables(content) {
  return `
    <section class="rdcl-help-section rdcl-help-downloads rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b20">
    <div class="rdcl-help-section-top rdc-d-flex rdc-ai-cen rdc-jc-spb rdc-m-b30">
      ${renderSectionHeader("download", content.title, content.description)}
       </div>
      <div class="rdcl-help-downloads-row rdc-d-flex ${content.items.length > 4 ? "rdc-fw-nwra rdc-ofx-scr" : "rdc-fw-wrap"}" data-help-downloads-row>
        ${content.items.map(renderDownloadableCard).join("")}
      </div>
    </section>
  `;
}

function renderDownloadableCard(item) {
  return `
    <article class="rdcl-help-download-card rdc-w-25 rdc-t-w-half rdc-m-w-full rdc-p-5">
      <a href="${item.href}" class="rdcl-help-download-card-inner rdc-darker-hover rdc-lab-border rdc-bg-dark-5 rdc-td-none rdc-h-full rdc-p-20 rdc-d-flex rdc-ff-col rdc-jc-spb" download>
        <div>
          <span class="rdcl-help-card-icon rdc-p-10 rdc-lab-border-4 rdc-d-iflex rdc-c-ic-green">${helpCenterIcons[item.icon] || helpCenterIcons.codeFile}</span>
          <h3 class="rdc-ff-baij rdc-fw-500 rdc-fs-16">${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div class="rdcl-help-card-meta rdc-d-flex rdc-ai-cen rdc-jc-spb">
          <span class="rdc-fs-12 rdc-ff-baij rdc-c-white-3">${item.fileType} <span aria-hidden="true">•</span> ${item.fileSize}</span>
          <span class="rdcl-help-download-icon rdc-p-10 rdc-br-6 rdc-lab-border-4 rdc-c-green rdc-d-iflex" aria-hidden="true">${helpCenterIcons.download}</span>
        </div>
      </a>
    </article>
  `;
}

// =========================
// FAQS
// =========================
function renderFaqs(content) {
  return `
    <section class="rdcl-help-section rdcl-help-faqs rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b20">
      <div class="rdcl-help-section-top rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-jc-spb rdc-m-b30">
        ${renderSectionHeader("message", content.title, content.description)}
        ${renderFaqSearch(content.search)}
      </div>
       <div class="rdcl-help-faq-tabs-wrap rdc-ofx-scr">
      <div class="rdcl-help-faq-tabs rdc-p-5 rdc-d-flex rdc-fw-nwra rdc-m-b10 rdc-w-max" role="tablist" aria-label="FAQ topics">
        ${content.tabs.map(renderFaqTab).join("")}
      </div>
      </div>
      <div class="rdcl-help-faq-list rdc-p-5" data-help-faq-list>
        ${content.items.map(renderFaqItem).join("")}
      </div>
      <div class="rdcl-help-faq-empty rdc-d-none" data-help-faq-empty>
        No matching questions found.
      </div>
    </section>
  `;
}

function renderFaqSearch(search) {
  return `
    <div class="rdcl-help-faq-search rdcl-search-bar rdc-lab-border-4 rdc-m-m-t20 rdc-w-full rdc-d-flex rdc-ai-cen">
      <label class="rdc-d-none" for="rdcl-help-faq-search">${search.label}</label>
      <span class="rdcl-help-search-icon rdcl-search-bar-icon rdc-d-iflex" aria-hidden="true">${helpCenterIcons.search}</span>
      <input id="rdcl-search-bar" class="rdc-w-full" type="text" placeholder="${search.placeholder}" data-help-faq-search />
      </div>
  `;
}

function renderFaqTab(tab) {
  return `
    <button class="rdcl-help-faq-tab rdc-darker-hover rdc-m-r10 rdc-m-b10 rdc-lab-border-4 rdc-c-white-1 rdc-tt-upc rdc-ff-baij rdc-fs-12 rdc-bg-dark-2 rdc-br-6 rdc-p-10 rdc-cu-poi${tab.value === "all" ? " is-active" : ""}" type="button" data-help-faq-tab="${tab.value}">
      ${tab.label}
    </button>
  `;
}

function renderFaqItem(item, index) {
  const panelId = `rdcl-help-faq-panel-${index}`;

  return `
    <article class="rdcl-help-faq-item rdc-m-b10" data-help-faq-item data-help-faq-category="${item.category}" data-help-faq-search="${escapeHtml(`${item.question} ${item.answer} ${item.category}`.toLowerCase())}">
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

// =========================
// TUTORIALS
// =========================
function renderTutorials(content) {
  return `
    <section class="rdcl-help-section rdcl-help-tutorials rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b20">
      <div class="rdcl-help-section-top rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-jc-spb rdc-m-b30">
        ${renderSectionHeader("play", content.title, content.description)}
        <a href="${content.ctaHref}" class="rdcl-help-section-cta rdc-m-t30 rdc-d-flex rdc-ai-cen rdc-lab-5th-btn rdc-td-none rdc-ff-baij rdc-tt-upc">
          <span class="rdc-ff-baij rdc-fs-12 rdc-fw-500">${content.ctaLabel}</span>
          <span class="rdc-m-l5 rdc-c-green" aria-hidden="true">${helpCenterIcons.arrow}</span>
        </a>
      </div>
      <div class="rdcl-help-tutorial-grid rdc-m-t30 rdc-d-flex rdc-fw-wrap">
        ${content.items.slice(0, 5).map(renderTutorialCard).join("")}
      </div>
    </section>
  `;
}

function renderTutorialCard(item) {
  return `
    <article class="rdcl-help-tutorial-card rdc-w-20 rdc-t-w-half rdc-m-w-full rdc-p-5">
      <a href="${item.href}" class="rdcl-help-tutorial-card-inner rdc-p-10 rdc-darker-hover rdc-lab-border rdc-bg-dark-5 rdc-td-none rdc-h-full rdc-d-flex rdc-ff-col">
        <div class="rdcl-help-tutorial-media rdc-p-rel">
          <img class="rdc-w-full rdc-br-4" src="${item.image}" alt="${escapeHtml(getTutorialImageAlt(item))}" loading="lazy" />
          <span class="rdcl-help-tutorial-duration rdc-p-abs rdc-ff-baij rdc-br-4 rdc-bg-black-1 rdc-c-white-1 rdc-fs-12">${item.duration}</span>
        </div>
        <div class="rdcl-help-tutorial-body rdc-d-flex rdc-ff-col rdc-jc-spb">
          <h3 class="rdc-m-t10 rdc-m-0 rdc-fw-600 rdc-ff-baij rdc-fs-16">${item.title}</h3>
          <p class="rdc-m-b20 rdc-fs-14">${item.description}</p>
          <span class="rdcl-help-tutorial-level">${item.level}</span>
          <span class="rdcl-help-tutorial-cta rdc-c-blue rdc-m-b10 rdc-fw-600 rdc-ff-baij rdc-fs-14 rdc-d-iflex rdc-ai-cen">
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

function renderSectionHeader(icon, title, description) {
  return `
    <div class="rdcl-help-section-head rdc-d-flex rdc-m-w-full rdc-ai-fls">
      <span class="rdcl-help-section-icon rdc-p-5 rdc-br-6 rdc-m-r20 rdc-d-iflex">${helpCenterIcons[icon]}</span>
      <span>
        <h2 class="rdc-gen-mini-h rdc-m-0 rdc-m-b10">${title}</h2>
        <p class="rdc-m-0">${description}</p>
      </span>
    </div>
  `;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
