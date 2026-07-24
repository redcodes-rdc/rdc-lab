function createRdcLabGeneratorSchema({
  name,
  description,
  path,
  featureList = [],
  keywords = [],
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${path}#web-application`,
        name,
        description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: path,
        browserRequirements: "Requires JavaScript in a modern web browser.",
        featureList,
      },
      {
        "@type": "WebPage",
        "@id": `${path}#webpage`,
        name,
        description,
        url: path,
        isPartOf: {
          "@type": "WebSite",
          name: "RDC Lab",
          url: "/",
        },
        about: {
          "@id": `${path}#web-application`,
        },
        keywords: keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${path}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "RDC Lab",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "HTML Generators",
            item: "/pages/html-generators/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: path,
          },
        ],
      },
    ],
  };
}

function createRdcLabCollectionSchema({
  name,
  description,
  path,
  items = [],
  keywords = [],
}) {
  const graph = [
    {
      "@type": "Organization",
      "@id": "/#organization",
      name: "RDC Lab",
      url: "/",
    },
    {
      "@type": "CollectionPage",
      "@id": `${path}#collection`,
      name,
      description,
      url: path,
      isPartOf: {
        "@type": "WebSite",
        name: "RDC Lab",
        url: "/",
      },
      keywords: keywords.join(", "),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${path}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "RDC Lab",
          item: "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: path,
        },
      ],
    },
  ];

  if (items.length) {
    graph.push({
      "@type": "ItemList",
      "@id": `${path}#item-list`,
      name,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description,
        url: item.url,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function createRdcLabHelpCenterSchema({ name, description, path, faqs = [] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "/#organization",
        name: "RDC Lab",
        url: "/",
      },
      {
        "@type": "FAQPage",
        "@id": `${path}#faq`,
        name,
        description,
        url: path,
        isPartOf: {
          "@type": "WebSite",
          name: "RDC Lab",
          url: "/",
        },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${path}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "RDC Lab",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: path,
          },
        ],
      },
    ],
  };
}

const rdcLabSeoConfig = {
  defaultPage: "home",

  defaults: {
    siteName: "RDC Lab",
    locale: "en_US",
    type: "website",
    robots: "index, follow",
    image: "/assets/rdc-lab-og.jpg",
    twitterCard: "summary_large_image",
    baseUrl: window.location.origin,
  },

  pages: {
    home: {
      title: "RDC Lab | Build Better Frontends, Faster",
      description:
        "RDC Lab helps frontend developers build faster with production-ready component generators, practical tutorials, and built-in AI enhancement prompts for customization and implementation.",
      path: "/",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "RDC Lab",
        url: "/",
        description:
          "RDC Lab helps you generate clean, customizable frontend code faster.",
      },
    },

    htmlGenerators: {
      title: "Frontend Component Generators + AI Prompts | RDC Lab",
      description:
        "Generate responsive frontend components without starting from scratch. Copy production-ready code, then customize and refine it with built-in AI enhancement prompts for faster development.",
      path: "/pages/html-generators/",
      schema: createRdcLabCollectionSchema({
        name: "HTML Generators",
        description:
          "Browse RDC Lab generators for responsive HTML, CSS, JavaScript, and Shopify-friendly components with copyable code and AI enhancement prompts.",
        path: "/pages/html-generators/",
        keywords: [
          "HTML generators",
          "CSS generators",
          "JavaScript generators",
          "responsive components",
          "Shopify code generators",
          "copy and paste components",
        ],
        items: [
          {
            name: "2-Column Generator",
            description: "Responsive two-column HTML and CSS layout generator.",
            url: "/gens/2-column/",
          },
          {
            name: "Accordion Generator",
            description: "Responsive accordion HTML, CSS, and JavaScript generator.",
            url: "/gens/accordion/",
          },
          {
            name: "Product Badge Generator",
            description: "Lightweight product badge HTML and CSS generator.",
            url: "/gens/badges/",
          },
          {
            name: "Button Generator",
            description: "Responsive button HTML and CSS generator.",
            url: "/gens/buttons/",
          },
          {
            name: "HTML Column Layout Generator",
            description: "Responsive multi-column HTML and CSS layout generator.",
            url: "/gens/columns/",
          },
          {
            name: "Free Shipping Bar Generator",
            description: "Shopify-friendly free shipping progress bar generator.",
            url: "/gens/fs-progress-bar/",
          },
          {
            name: "Icon With Text Generator",
            description: "Responsive icon-with-text HTML and CSS section generator.",
            url: "/gens/icon-text/",
          },
          {
            name: "Modal Generator",
            description: "Responsive modal HTML, CSS, and JavaScript generator.",
            url: "/gens/modal/",
          },
          {
            name: "Scroll Progress Bar Generator",
            description: "Lightweight scroll progress bar HTML, CSS, and JavaScript generator.",
            url: "/gens/page-progress-bar/",
          },
          {
            name: "Sticky Add To Cart Generator",
            description: "Shopify-focused sticky add to cart bar generator.",
            url: "/gens/sticky-atc/",
          },
          {
            name: "Tabs Generator",
            description: "Responsive tab HTML, CSS, and JavaScript generator.",
            url: "/gens/tabs/",
          },
          {
            name: "Timer Bar Generator",
            description: "Countdown timer bar HTML, CSS, and JavaScript generator.",
            url: "/gens/timer-bar/",
          },
          {
            name: "Tooltip Generator",
            description: "Lightweight CSS tooltip generator.",
            url: "/gens/tool-tip/",
          },
        ],
      }),
    },

    helpCenter: {
      title: "RDC Lab Help Center, Generator Docs & AI Prompt Help",
      description:
        "Find RDC Lab generator documentation, FAQs, tutorials, downloads, Shopify compatibility notes, and AI enhancement prompt guidance for copied code.",
      path: "/pages/help-center/",
      schema: createRdcLabHelpCenterSchema({
        name: "RDC Lab Help Center",
        description:
          "Find RDC Lab generator documentation, FAQs, tutorials, downloads, Shopify compatibility notes, and AI enhancement prompt guidance for copied code.",
        path: "/pages/help-center/",
        faqs: [
          {
            question: "What is RDC Lab?",
            answer:
              "RDC Lab is a collection of frontend code generators, tutorials, and resources designed to help developers create production-ready components faster.",
          },
          {
            question: "How do I use a generator?",
            answer:
              "Choose your settings, preview the result, copy the generated code, then customize or enhance it before adding it to your project.",
          },
          {
            question: "Can I edit the generated code?",
            answer:
              "Yes. RDC Lab generators create editable frontend code that can be customized for your design, platform, and implementation needs.",
          },
          {
            question: "What are AI enhancement prompts?",
            answer:
              "AI enhancement prompts are structured prompts available on generator pages. Paste your copied generator code at the top, choose the improvements you want, and use the prompt to refine design, accessibility, SEO, performance, animations, or Shopify Liquid conversion.",
          },
          {
            question: "Can I use the generators with Shopify?",
            answer:
              "Yes. The generated HTML, CSS, and JavaScript can be integrated into Shopify themes with minor adjustments where needed.",
          },
          {
            question: "Do tutorials use the generators from RDC Lab?",
            answer:
              "Yes. Most tutorials demonstrate practical examples using RDC Lab generators, resources, and frontend workflows.",
          },
        ],
      }),
    },

    tutorials: {
      title: "Frontend Component Tutorials + AI Prompts | RDC Lab",
      description:
        "Learn how to build, customize, and optimize frontend components with practical tutorials. Follow real implementation workflows and refine your results with built-in AI enhancement prompts.",
      path: "/pages/tutorials/",
      schema: createRdcLabCollectionSchema({
        name: "Tutorials",
        description:
          "Watch RDC Lab tutorials for HTML, CSS, JavaScript, Shopify, responsive components, generator workflows, and practical frontend implementation.",
        path: "/pages/tutorials/",
        keywords: [
          "HTML tutorials",
          "CSS tutorials",
          "JavaScript tutorials",
          "Shopify tutorials",
          "frontend tutorials",
          "web development tutorials",
        ],
        items: [
          {
            name: "Create a Two-Column Section in 5 Minutes",
            description:
              "Learn how to build a responsive two-column section with RDC Lab.",
            url: "/pages/tutorials/tutorial-1/",
          },
        ],
      }),
    },

    twoColumnGenerator: {
      title: "2-Column HTML Layout Generator + AI Prompts | RDC Lab",
      description:
        "Generate responsive two-column HTML/CSS layouts for product, content, and landing pages, then refine spacing or Shopify Liquid with AI prompts.",
      path: "/gens/2-column/",
      schema: createRdcLabGeneratorSchema({
        name: "2-Column Generator",
        description:
          "Generate responsive two-column HTML/CSS layouts for product, content, and landing pages, then refine spacing or Shopify Liquid with AI prompts.",
        path: "/gens/2-column/",
        featureList: [
          "Desktop, tablet, and mobile width controls",
          "Responsive stacking and content order settings",
          "Copyable HTML and CSS foundation",
          "Built-in AI enhancement prompts",
        ],
        keywords: [
          "2-column layout generator",
          "responsive HTML layout",
          "Shopify section layout",
        ],
      }),
    },

    accordionGenerator: {
      title: "Accordion HTML Generator + AI Prompts | RDC Lab",
      description:
        "Build responsive accordion HTML/CSS/JS for FAQs, product details, and guides. Copy clean code and refine accessibility or Shopify with AI prompts.",
      path: "/gens/accordion/",
      schema: createRdcLabGeneratorSchema({
        name: "Accordion Generator",
        description:
          "Build responsive accordion HTML/CSS/JS for FAQs, product details, and guides. Copy clean code and refine accessibility or Shopify with AI prompts.",
        path: "/gens/accordion/",
        featureList: [
          "Accordion layout and icon controls",
          "Open, close, and auto-open behavior settings",
          "Copyable HTML, CSS, and JavaScript",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["accordion generator", "FAQ accordion HTML", "accordion JavaScript"],
      }),
    },

    badgesGenerator: {
      title: "Product Badge HTML & CSS Generator + AI Prompts | RDC Lab",
      description:
        "Create lightweight product badge HTML/CSS for sales, labels, and launches. Copy production-ready code and refine styling with AI prompts.",
      path: "/gens/badges/",
      schema: createRdcLabGeneratorSchema({
        name: "Product Badge Generator",
        description:
          "Create lightweight product badge HTML/CSS for sales, labels, and launches. Copy production-ready code and refine styling with AI prompts.",
        path: "/gens/badges/",
        featureList: [
          "Badge text and style controls",
          "Position and border radius settings",
          "Copyable HTML and CSS",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["product badge generator", "CSS badge", "Shopify product label"],
      }),
    },

    buttonsGenerator: {
      title: "Button HTML & CSS Generator + AI Prompts | RDC Lab",
      description:
        "Generate responsive button HTML/CSS with colors, hover states, width, and radius controls. Copy clean code and refine it with AI prompts.",
      path: "/gens/buttons/",
      schema: createRdcLabGeneratorSchema({
        name: "Button Generator",
        description:
          "Generate responsive button HTML/CSS with colors, hover states, width, and radius controls. Copy clean code and refine it with AI prompts.",
        path: "/gens/buttons/",
        featureList: [
          "Button color, hover, and style controls",
          "Width, spacing, alignment, and radius settings",
          "Copyable HTML and CSS",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["button generator", "HTML CSS button", "CTA button CSS"],
      }),
    },

    columnsGenerator: {
      title: "HTML Column Layout Generator + AI Prompts | RDC Lab",
      description:
        "Build responsive multi-column HTML/CSS layouts with wrapping and device controls. Copy production-ready code and refine it with AI prompts.",
      path: "/gens/columns/",
      schema: createRdcLabGeneratorSchema({
        name: "HTML Column Layout Generator",
        description:
          "Build responsive multi-column HTML/CSS layouts with wrapping and device controls. Copy production-ready code and refine it with AI prompts.",
        path: "/gens/columns/",
        featureList: [
          "Multi-column layout controls",
          "Responsive wrapping and scroll width settings",
          "Copyable HTML and CSS",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["column layout generator", "responsive columns", "HTML CSS grid"],
      }),
    },

    freeShippingBarGenerator: {
      title: "Free Shipping Bar Generator for Shopify | RDC Lab",
      description:
        "Generate a Shopify-ready free shipping progress bar with dynamic JavaScript, cart thresholds, and copyable code you can refine with AI prompts.",
      path: "/gens/fs-progress-bar/",
      schema: createRdcLabGeneratorSchema({
        name: "Free Shipping Bar Generator",
        description:
          "Generate a Shopify-ready free shipping progress bar with dynamic JavaScript, cart thresholds, and copyable code you can refine with AI prompts.",
        path: "/gens/fs-progress-bar/",
        featureList: [
          "Cart threshold and progress settings",
          "Dynamic JavaScript progress updates",
          "Copyable Shopify-friendly code foundation",
          "Built-in AI enhancement prompts",
        ],
        keywords: [
          "free shipping bar generator",
          "Shopify free shipping progress bar",
          "cart progress bar",
        ],
      }),
    },

    iconTextGenerator: {
      title: "Icon With Text HTML Generator + AI Prompts | RDC Lab",
      description:
        "Create responsive icon-with-text HTML/CSS sections for benefits, trust blocks, and features. Copy clean code and refine the design with AI prompts.",
      path: "/gens/icon-text/",
      schema: createRdcLabGeneratorSchema({
        name: "Icon With Text Generator",
        description:
          "Create responsive icon-with-text HTML/CSS sections for benefits, trust blocks, and features. Copy clean code and refine the design with AI prompts.",
        path: "/gens/icon-text/",
        featureList: [
          "Icon and text layout controls",
          "Column count and responsive behavior settings",
          "Copyable HTML and CSS",
          "Built-in AI enhancement prompts",
        ],
        keywords: [
          "icon with text generator",
          "feature section generator",
          "trust badge layout",
        ],
      }),
    },

    modalGenerator: {
      title: "Modal HTML & JS Generator + AI Prompts | RDC Lab",
      description:
        "Generate responsive modal HTML/CSS/JS with positioning, spacing, radius, and optional trigger controls. Copy clean code and refine it with AI prompts.",
      path: "/gens/modal/",
      schema: createRdcLabGeneratorSchema({
        name: "Modal Generator",
        description:
          "Generate responsive modal HTML/CSS/JS with positioning, spacing, radius, and optional trigger controls. Copy clean code and refine it with AI prompts.",
        path: "/gens/modal/",
        featureList: [
          "Modal position, alignment, and width controls",
          "Spacing, radius, and trigger visibility settings",
          "Copyable HTML, CSS, and JavaScript",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["modal generator", "HTML CSS JS modal", "Shopify popup modal"],
      }),
    },

    pageProgressBarGenerator: {
      title: "Scroll Progress Bar Generator + AI Prompts | RDC Lab",
      description:
        "Create a lightweight scroll progress bar with HTML/CSS/JS for articles, guides, and long pages. Copy production-ready code and refine it with AI prompts.",
      path: "/gens/page-progress-bar/",
      schema: createRdcLabGeneratorSchema({
        name: "Scroll Progress Bar Generator",
        description:
          "Create a lightweight scroll progress bar with HTML/CSS/JS for articles, guides, and long pages. Copy production-ready code and refine it with AI prompts.",
        path: "/gens/page-progress-bar/",
        featureList: [
          "Scroll progress tracking",
          "Bar position, color, and sizing controls",
          "Copyable HTML, CSS, and JavaScript",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["scroll progress bar", "reading progress bar", "page progress indicator"],
      }),
    },

    stickyAtcGenerator: {
      title: "Sticky Add To Cart Generator for Shopify | RDC Lab",
      description:
        "Generate a Shopify-focused sticky add to cart bar with product details, quantity, variant controls, and copyable JavaScript-enhanced code.",
      path: "/gens/sticky-atc/",
      schema: createRdcLabGeneratorSchema({
        name: "Sticky Add To Cart Generator",
        description:
          "Generate a Shopify-focused sticky add to cart bar with product details, quantity, variant controls, and copyable JavaScript-enhanced code.",
        path: "/gens/sticky-atc/",
        featureList: [
          "Sticky cart bar behavior controls",
          "Product title, price, variant, quantity, and button settings",
          "Copyable Shopify-friendly HTML, CSS, and JavaScript",
          "Built-in AI enhancement prompts",
        ],
        keywords: [
          "sticky add to cart generator",
          "Shopify sticky add to cart",
          "sticky cart bar",
        ],
      }),
    },

    tabsGenerator: {
      title: "Tabs HTML & JS Generator + AI Prompts | RDC Lab",
      description:
        "Build responsive tab HTML/CSS/JS for product info, FAQs, plans, and content sections. Copy clean code and refine behavior with AI prompts.",
      path: "/gens/tabs/",
      schema: createRdcLabGeneratorSchema({
        name: "Tabs Generator",
        description:
          "Build responsive tab HTML/CSS/JS for product info, FAQs, plans, and content sections. Copy clean code and refine behavior with AI prompts.",
        path: "/gens/tabs/",
        featureList: [
          "Horizontal and vertical tab layout controls",
          "Responsive tab behavior settings",
          "Copyable HTML, CSS, and JavaScript",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["tabs generator", "HTML tabs", "responsive tab section"],
      }),
    },

    timerBarGenerator: {
      title: "Timer Bar Generator for HTML & Shopify | RDC Lab",
      description:
        "Create countdown timer bars with HTML/CSS/JS for offers, launches, and campaigns. Copy production-ready code and refine it with AI prompts.",
      path: "/gens/timer-bar/",
      schema: createRdcLabGeneratorSchema({
        name: "Timer Bar Generator",
        description:
          "Create countdown timer bars with HTML/CSS/JS for offers, launches, and campaigns. Copy production-ready code and refine it with AI prompts.",
        path: "/gens/timer-bar/",
        featureList: [
          "Countdown text, date, and CTA controls",
          "Timer bar radius and style settings",
          "Copyable HTML, CSS, and JavaScript",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["timer bar generator", "countdown bar HTML", "campaign timer"],
      }),
    },

    tooltipGenerator: {
      title: "CSS Tooltip Generator for HTML + AI Prompts | RDC Lab",
      description:
        "Generate lightweight CSS tooltips with position, style, alignment, and radius controls. Copy clean code and refine accessibility with AI prompts.",
      path: "/gens/tool-tip/",
      schema: createRdcLabGeneratorSchema({
        name: "Tooltip Generator",
        description:
          "Generate lightweight CSS tooltips with position, style, alignment, and radius controls. Copy clean code and refine accessibility with AI prompts.",
        path: "/gens/tool-tip/",
        featureList: [
          "Tooltip position, style, and alignment controls",
          "Border radius settings",
          "Copyable HTML and CSS",
          "Built-in AI enhancement prompts",
        ],
        keywords: ["tooltip generator", "CSS tooltip", "helper text UI"],
      }),
    },
  },

  manualTutorialPages: {
    "tutorial-1": {
      // Add optional overrides here. Values in this section win over dynamic tutorial data.
      // title: "Manual Tutorial SEO Title | RDC Lab",
      // description: "Manual meta description for this tutorial.",
      // image: "/assets/images/manual-og-image.jpg",
      // imageAlt: "Manual image alt text for the tutorial preview image",
      // canonicalUrl: "/pages/tutorials/tutorial-1/",
      // howToSteps: [
      //   { name: "Manual step title", text: "Manual step description." },
      // ],
    },
  },
};

function getRdcLabSeoPageKey(config) {
  const bodyKey = document.body?.dataset?.seoPage || "";
  const bodyId = document.body?.id || "";

  if (bodyKey && config.pages[bodyKey]) return bodyKey;
  if (bodyId && config.pages[bodyId]) return bodyId;

  return config.defaultPage;
}

function getRdcLabSeoPageData(config) {
  if (isRdcLabTutorialDetailPage()) {
    return getRdcLabTutorialSeoPageData(config);
  }

  const pageKey = getRdcLabSeoPageKey(config);
  const pageData = config.pages[pageKey] || config.pages[config.defaultPage];

  return {
    ...config.defaults,
    ...pageData,
  };
}

function isRdcLabTutorialDetailPage() {
  return document.body?.id === "rdcl-tutorial" || Boolean(window.rdclTutorialPage);
}

function getRdcLabTutorialSeoPageData(config) {
  const page = window.rdclTutorialPage || {};
  const manualSeo = getRdcLabManualTutorialSeo(page, config);
  const fallback = config.pages.tutorials || config.pages[config.defaultPage];
  const title =
    manualSeo.title || page.seo?.title || `${page.title || "Tutorial"} | RDC Lab`;
  const description =
    manualSeo.description ||
    page.seo?.description ||
    page.description ||
    fallback.description;
  const image =
    manualSeo.image || page.seo?.image || page.video?.image || fallback.image;
  const path = manualSeo.path || page.seo?.path || window.location.pathname;

  return {
    ...config.defaults,
    ...fallback,
    robots: manualSeo.robots || page.seo?.robots || config.defaults.robots,
    title,
    description,
    image,
    twitterCard:
      manualSeo.twitterCard || page.seo?.twitterCard || config.defaults.twitterCard,
    path,
    canonicalUrl: manualSeo.canonicalUrl || page.seo?.canonicalUrl || path,
    type: manualSeo.type || page.seo?.type || "article",
    schema: manualSeo.schema || getRdcLabTutorialSchema(page, config, {
      title,
      description,
      image,
      imageAlt: manualSeo.imageAlt || page.seo?.imageAlt || page.video?.alt,
      path,
      howToSteps: manualSeo.howToSteps || page.seo?.howToSteps,
    }),
  };
}

function getRdcLabManualTutorialSeo(page = {}, config) {
  const manualPages = config.manualTutorialPages || {};
  const path = normalizeRdcLabSeoPath(window.location.pathname);
  const id = page.id || path.split("/").filter(Boolean).pop();

  return manualPages[id] || manualPages[path] || {};
}

function setRdcLabSeoTitle(title) {
  if (!title) return;

  document.title = title;
}

function setRdcLabSeoMetaByName(name, content) {
  if (!name || !content) return;

  let meta = document.querySelector(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setRdcLabSeoMetaByProperty(property, content) {
  if (!property || !content) return;

  let meta = document.querySelector(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setRdcLabSeoLink(rel, href) {
  if (!rel || !href) return;

  let link = document.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
}

function setRdcLabSeoSchema(schema) {
  if (!schema) return;

  let script = document.getElementById("rdc-lab-schema");

  if (!script) {
    script = document.createElement("script");
    script.id = "rdc-lab-schema";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
}

function getRdcLabCurrentPageUrl() {
  return window.location.href.split("#")[0];
}

function getRdcLabAbsoluteUrl(pathOrUrl, baseUrl) {
  if (!pathOrUrl) return getRdcLabCurrentPageUrl();

  try {
    return new URL(pathOrUrl, baseUrl).href;
  } catch (error) {
    return getRdcLabCurrentPageUrl();
  }
}

function normalizeRdcLabSeoPath(path = "") {
  return String(path)
    .replace(/\/index\.html$/, "")
    .replace(/\/$/, "");
}

function getRdcLabSeoSchema(schema, url) {
  if (!schema) return null;

  if (schema["@graph"]) {
    return normalizeRdcLabSchemaUrls({
      ...schema,
      "@graph": schema["@graph"].map((item) => ({
        ...item,
        url: item.url || url,
      })),
    }, url);
  }

  return normalizeRdcLabSchemaUrls({
    ...schema,
    url: url,
  }, url);
}

function normalizeRdcLabSchemaUrls(value, baseUrl) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeRdcLabSchemaUrls(item, baseUrl));
  }

  if (!value || typeof value !== "object") return value;

  return Object.fromEntries(
    Object.entries(value).map(([key, itemValue]) => {
      const shouldNormalizeUrl =
        ["@id", "url", "item"].includes(key) && typeof itemValue === "string";

      return [
        key,
        shouldNormalizeUrl
          ? getRdcLabAbsoluteUrl(itemValue, baseUrl)
          : normalizeRdcLabSchemaUrls(itemValue, baseUrl),
      ];
    }),
  );
}

function getRdcLabTutorialSchema(page, config, seo) {
  const url = getRdcLabAbsoluteUrl(seo.path, config.defaults.baseUrl);
  const image = getRdcLabAbsoluteUrl(seo.image, config.defaults.baseUrl);
  const steps = getRdcLabTutorialHowToSteps(page.written, seo.howToSteps);
  const topicSchema = getRdcLabTutorialTopicSchema(page);
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: seo.title,
      headline: page.title || seo.title,
      description: seo.description,
      ...topicSchema,
      image,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: image,
        caption: seo.imageAlt || page.title || seo.title,
      },
      isPartOf: {
        "@type": "WebSite",
        name: config.defaults.siteName,
        url: getRdcLabAbsoluteUrl("/", config.defaults.baseUrl),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: getRdcLabAbsoluteUrl("/", config.defaults.baseUrl),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tutorials",
          item: getRdcLabAbsoluteUrl("/pages/tutorials/", config.defaults.baseUrl),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.title || "Tutorial",
          item: url,
        },
      ],
    },
  ];

  if (steps.length) {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: page.title || seo.title,
      description: seo.description,
      ...topicSchema,
      image,
      step: steps,
      mainEntityOfPage: {
        "@id": `${url}#webpage`,
      },
    });
  }

  if (page.video?.title) {
    graph.push({
      "@type": "VideoObject",
      "@id": `${url}#video`,
      name: page.video.title,
      description: seo.description,
      thumbnailUrl: [image],
      contentUrl: page.video.embedUrl || undefined,
      duration: getRdcLabIsoDuration(page.video.duration),
      mainEntityOfPage: {
        "@id": `${url}#webpage`,
      },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function getRdcLabTutorialTopicSchema(page = {}) {
  const categories = getRdcLabSeoLabels(page.categories);
  const tags = getRdcLabSeoLabels(page.tags);
  const keywords = getRdcLabUniqueSeoLabels([...categories, ...tags]);

  if (!keywords.length) return {};

  return {
    keywords: keywords.join(", "),
    about: keywords.map((name) => ({
      "@type": "Thing",
      name,
    })),
    ...(categories.length ? { articleSection: categories } : {}),
  };
}

function getRdcLabSeoLabels(values = []) {
  return values
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .map(getRdcLabSeoLabel);
}

function getRdcLabSeoLabel(value = "") {
  return String(value)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getRdcLabUniqueSeoLabels(values = []) {
  const seen = new Set();

  return values.filter((value) => {
    const key = value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getRdcLabTutorialHowToSteps(written = {}, manualSteps) {
  if (manualSteps?.length) {
    return manualSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name || step.title || `Step ${index + 1}`,
      text: step.text || step.description || "",
      url: step.url || `${getRdcLabCurrentPageUrl()}#step-${index + 1}`,
    }));
  }

  return (written.tabs || [])
    .filter((tab) => tab && (tab.title || tab.label))
    .map((tab, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: tab.title || tab.label,
      text: getRdcLabTutorialStepText(tab),
      url: `${getRdcLabCurrentPageUrl()}#${tab.id}`,
    }));
}

function getRdcLabTutorialStepText(tab) {
  if (tab.seoText) return tab.seoText;
  if (tab.html) return stripRdcLabHtml(tab.html);

  const text = (tab.blocks || [])
    .map(getRdcLabTutorialBlockText)
    .filter(Boolean)
    .join(" ");

  return text || tab.title || tab.label || "";
}

function getRdcLabTutorialBlockText(block = {}) {
  if (block.text) return block.text;
  if (block.code) return block.code;
  if (block.caption) return block.caption;
  if (block.items?.length) return block.items.join(" ");
  return "";
}

function stripRdcLabHtml(value = "") {
  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent.replace(/\s+/g, " ").trim();
}

function getRdcLabIsoDuration(duration = "") {
  const parts = String(duration).split(":").map(Number);
  if (parts.some(Number.isNaN)) return undefined;

  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return `PT${minutes}M${seconds}S`;
  }

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `PT${hours}H${minutes}M${seconds}S`;
  }

  return undefined;
}

function renderRdcLabSeo(config) {
  const data = getRdcLabSeoPageData(config);
  const url = getRdcLabAbsoluteUrl(
    data.canonicalUrl || data.path,
    data.baseUrl,
  );
  const image = getRdcLabAbsoluteUrl(data.image, data.baseUrl);
  const schema = getRdcLabSeoSchema(data.schema, url);

  setRdcLabSeoTitle(data.title);
  setRdcLabSeoMetaByName("description", data.description);
  setRdcLabSeoMetaByName("robots", data.robots);

  setRdcLabSeoLink("canonical", url);

  setRdcLabSeoMetaByProperty("og:title", data.title);
  setRdcLabSeoMetaByProperty("og:description", data.description);
  setRdcLabSeoMetaByProperty("og:url", url);
  setRdcLabSeoMetaByProperty("og:type", data.type);
  setRdcLabSeoMetaByProperty("og:site_name", data.siteName);
  setRdcLabSeoMetaByProperty("og:locale", data.locale);
  setRdcLabSeoMetaByProperty("og:image", image);

  setRdcLabSeoMetaByName("twitter:card", data.twitterCard);
  setRdcLabSeoMetaByName("twitter:title", data.title);
  setRdcLabSeoMetaByName("twitter:description", data.description);
  setRdcLabSeoMetaByName("twitter:image", image);

  setRdcLabSeoSchema(schema);
}

renderRdcLabSeo(rdcLabSeoConfig);

document.addEventListener("DOMContentLoaded", function () {
  renderRdcLabSeo(rdcLabSeoConfig);
});
