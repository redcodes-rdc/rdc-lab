//Head
const rdcLabHeadData = {
  stylesheets: [
    "/assets/fonts.css",
    "/assets/rdc-lab.css",
    "/assets/style.css",
  ],
  favicon: {
    rel: "icon",
    type: "image/x-icon",
    href: "/assets/icons/rdclab-favicon.svg",
  },
  viewport: {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
};

function normalizeRdcLabAssetUrl(url) {
  const link = document.createElement("a");
  link.href = url;

  return link.href;
}

function hasRdcLabStylesheet(href) {
  const targetHref = normalizeRdcLabAssetUrl(href);

  return Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(
    function (link) {
      return normalizeRdcLabAssetUrl(link.getAttribute("href")) === targetHref;
    },
  );
}

function getFirstPageSpecificStylesheet() {
  const globalStyles = rdcLabHeadData.stylesheets.map(normalizeRdcLabAssetUrl);

  return Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find(
    function (link) {
      const href = normalizeRdcLabAssetUrl(link.getAttribute("href"));
      return !globalStyles.includes(href);
    },
  );
}

function addRdcLabStylesheet(href) {
  if (hasRdcLabStylesheet(href)) return;

  const link = document.createElement("link");
  link.href = href;
  link.rel = "stylesheet";

  const firstPageSpecificStylesheet = getFirstPageSpecificStylesheet();

  if (firstPageSpecificStylesheet) {
    document.head.insertBefore(link, firstPageSpecificStylesheet);
    return;
  }

  document.head.appendChild(link);
}

function addRdcLabFavicon() {
  const favicon = rdcLabHeadData.favicon;
  const targetHref = normalizeRdcLabAssetUrl(favicon.href);
  const existingIcon = Array.from(
    document.querySelectorAll('link[rel~="icon"]'),
  ).find(function (link) {
    return normalizeRdcLabAssetUrl(link.getAttribute("href")) === targetHref;
  });

  if (existingIcon) return;

  const link = document.createElement("link");
  link.rel = favicon.rel;
  link.type = favicon.type;
  link.href = favicon.href;
  document.head.appendChild(link);
}

function addRdcLabViewport() {
  const viewport = rdcLabHeadData.viewport;
  let meta = document.querySelector(`meta[name="${viewport.name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = viewport.name;
    document.head.appendChild(meta);
  }

  meta.content = viewport.content;
}

function renderRdcLabHeadAssets() {
  rdcLabHeadData.stylesheets.forEach(addRdcLabStylesheet);
  addRdcLabFavicon();
  addRdcLabViewport();
}

renderRdcLabHeadAssets();

function renderRdcLabBreadcrumb(link) {
  if (!link || !link.href || !link.label) return "";

  return `
    <a class="rdcl-page-breadcrumb rdcl-tutorial-back rdc-d-iflex rdc-ai-cen rdc-td-none rdc-ff-baij rdc-fw-600 rdc-m-b30" href="${link.href}">
      <span class="rdc-c-lgray-1" aria-hidden="true">&larr;</span>
      <span class="rdc-m-l10 rdc-c-lgray-1 rdc-fs-12">${link.label}</span>
    </a>
  `;
}

window.renderRdcLabBreadcrumb = renderRdcLabBreadcrumb;

function getRdcLabImageAlt(item, fallback = "") {
  if (!item) return fallback;
  if (typeof item === "string") return fallback;

  return (
    item.alt ||
    item.imageAlt ||
    item.image?.alt ||
    item.seo?.imageAlt ||
    fallback ||
    item.title ||
    item.name ||
    item.description ||
    ""
  );
}

window.getRdcLabImageAlt = getRdcLabImageAlt;

//Nav
const rdcLabNavData = {
  logoUrl: "/",

  logo: `
    <svg width="218" height="63" viewBox="0 0 218 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.60538 55V18.8048H18.832V29.7229L16.516 26.6129C17.6189 23.7896 19.3834 21.6722 21.8097 20.2605C24.2359 18.8489 27.1474 18.1431 30.5442 18.1431V31.3772C29.8825 31.2889 29.2869 31.2228 28.7576 31.1787C28.2723 31.1345 27.765 31.1125 27.2356 31.1125C24.9859 31.1125 23.1331 31.708 21.6773 32.8991C20.2657 34.046 19.5599 36.0532 19.5599 38.9206V55H4.60538Z" fill="#FF437B"/>
<path d="M50.3405 55.6617C47.2084 55.6617 44.2969 54.9118 41.606 53.4119C38.9592 51.8679 36.8417 49.7064 35.2536 46.9272C33.6655 44.1039 32.8715 40.7513 32.8715 36.8693C32.8715 32.9873 33.6655 29.6567 35.2536 26.8776C36.8417 24.0543 38.9592 21.8927 41.606 20.3929C44.2969 18.893 47.2084 18.1431 50.3405 18.1431C53.5167 18.1431 56.1194 18.8268 58.1486 20.1944C60.1778 21.5178 61.6777 23.5691 62.6482 26.3482C63.6187 29.0833 64.1039 32.5903 64.1039 36.8693C64.1039 41.1924 63.6407 44.7436 62.7144 47.5227C61.8321 50.3019 60.3763 52.3532 58.3471 53.6766C56.362 55 53.6931 55.6617 50.3405 55.6617ZM53.9137 44.0157C55.0165 44.0157 56.0091 43.751 56.8914 43.2217C57.7736 42.6923 58.4794 41.8983 59.0088 40.8395C59.5382 39.7367 59.8029 38.4133 59.8029 36.8693C59.8029 35.2812 59.5382 33.9799 59.0088 32.9653C58.4794 31.9065 57.7736 31.1125 56.8914 30.5831C56.0091 30.0538 55.0165 29.7891 53.9137 29.7891C52.8108 29.7891 51.8183 30.0538 50.936 30.5831C50.0537 31.1125 49.3479 31.9065 48.8186 32.9653C48.2892 33.9799 48.0245 35.2812 48.0245 36.8693C48.0245 38.4133 48.2892 39.7367 48.8186 40.8395C49.3479 41.8983 50.0537 42.6923 50.936 43.2217C51.8183 43.751 52.8108 44.0157 53.9137 44.0157ZM60.266 55V50.1034L60.1999 36.8693L59.5382 23.6352V5.90157H74.4927V55H60.266Z" fill="#DAF277"/>
<path d="M100.569 55.6617C96.4223 55.6617 92.7388 54.8677 89.5185 53.2796C86.2982 51.6915 83.7617 49.4858 81.9089 46.6625C80.1003 43.7951 79.1959 40.5307 79.1959 36.8693C79.1959 33.2079 80.1003 29.9655 81.9089 27.1423C83.7617 24.319 86.2982 22.1133 89.5185 20.5252C92.7388 18.9371 96.4223 18.1431 100.569 18.1431C104.98 18.1431 108.752 19.0915 111.884 20.9884C115.016 22.8853 117.178 25.5101 118.369 28.8627L106.789 34.5533C106.039 32.877 105.113 31.6639 104.01 30.914C102.951 30.164 101.782 29.7891 100.503 29.7891C99.4 29.7891 98.3633 30.0538 97.3928 30.5831C96.4664 31.1125 95.7165 31.9065 95.143 32.9653C94.6136 33.9799 94.349 35.2812 94.349 36.8693C94.349 38.4574 94.6136 39.7808 95.143 40.8395C95.7165 41.8983 96.4664 42.6923 97.3928 43.2217C98.3633 43.751 99.4 44.0157 100.503 44.0157C101.782 44.0157 102.951 43.6407 104.01 42.8908C105.113 42.1409 106.039 40.9278 106.789 39.2514L118.369 44.9421C117.178 48.2947 115.016 50.9195 111.884 52.8164C108.752 54.7133 104.98 55.6617 100.569 55.6617Z" fill="#67FF92"/>
<path d="M133.662 56C130.971 56 128.986 55.5368 127.707 54.6104C126.472 53.684 125.854 52.118 125.854 49.9123C125.854 48.8977 125.942 47.9272 126.119 47.0008L132.67 9.68073H137.434L130.883 47.0008C130.751 47.6625 130.685 48.2581 130.685 48.7874C130.685 49.8903 130.971 50.6623 131.545 51.1034C132.118 51.5445 133.067 51.7651 134.39 51.7651H136.64L135.912 56H133.662ZM152.361 56.5294C149.449 56.5294 147.089 55.8456 145.28 54.4781C143.472 53.0664 142.567 51.1916 142.567 48.8536C142.567 48.5007 142.612 47.9713 142.7 47.2655L143.097 45.0819C143.626 42.1704 144.905 39.9206 146.935 38.3325C149.008 36.7444 151.633 35.9504 154.809 35.9504H159.044C160.5 35.9504 162.088 36.193 163.808 36.6782C165.573 37.1194 166.918 37.6929 167.845 38.3987L168.771 32.9065C168.859 32.2889 168.903 31.8478 168.903 31.5831C168.903 30.0392 168.418 28.826 167.448 27.9438C166.521 27.0615 165.242 26.6203 163.61 26.6203H158.316C156.419 26.6203 154.809 27.0615 153.486 27.9438C152.206 28.826 151.434 29.995 151.17 31.4508H146.405C146.891 28.7599 148.214 26.5983 150.376 24.9661C152.581 23.2898 155.228 22.4516 158.316 22.4516H163.61C166.698 22.4516 169.124 23.2015 170.888 24.7014C172.697 26.2013 173.601 28.2525 173.601 30.8553C173.601 31.4728 173.535 32.1566 173.403 32.9065L169.366 56H164.867L165.661 51.3681C164.338 53.0003 162.882 54.2796 161.294 55.206C159.706 56.0882 158.051 56.5294 156.331 56.5294H152.361ZM156.463 52.3606C158.537 52.3606 160.5 51.721 162.352 50.4417C164.249 49.1624 165.661 47.464 166.587 45.3466L167.05 42.8983C166.301 42.0601 165.176 41.3984 163.676 40.9132C162.22 40.3838 160.676 40.1191 159.044 40.1191H154.809C152.912 40.1191 151.346 40.5602 150.111 41.4425C148.92 42.3248 148.17 43.56 147.861 45.1481L147.464 47.2655C147.376 47.7949 147.332 48.1478 147.332 48.3242C147.332 49.5594 147.773 50.552 148.655 51.3019C149.582 52.0077 150.817 52.3606 152.361 52.3606H156.463ZM192.702 56.5294C190.938 56.5294 189.306 56.1103 187.806 55.2721C186.35 54.3899 185.203 53.2208 184.365 51.7651L183.637 56H179.005L187.144 9.68073H191.908L188.931 26.885C190.078 25.5616 191.423 24.5029 192.967 23.7088C194.555 22.8707 196.033 22.4516 197.4 22.4516H202.099C205.319 22.4516 207.855 23.3339 209.708 25.0984C211.561 26.8189 212.487 29.1569 212.487 32.1125C212.487 33.083 212.399 33.9873 212.223 34.8255L210.701 43.3615C209.951 47.4199 208.385 50.6402 206.003 53.0223C203.665 55.3604 200.775 56.5294 197.334 56.5294H192.702ZM197.202 52.2945C199.364 52.2945 201.238 51.4784 202.826 49.8462C204.459 48.214 205.495 46.0524 205.936 43.3615L207.458 34.8255C207.591 34.0755 207.657 33.3918 207.657 32.7742C207.657 30.9214 207.15 29.4436 206.135 28.3408C205.12 27.2379 203.731 26.6865 201.966 26.6865H197.533C195.151 26.6865 193.011 27.5247 191.114 29.201C189.262 30.8773 188.004 33.083 187.343 35.818L185.887 43.8908C185.843 44.1114 185.821 44.4422 185.821 44.8834C185.821 47.0008 186.482 48.7654 187.806 50.177C189.129 51.5886 190.761 52.2945 192.702 52.2945H197.202Z" fill="#E8ECD8"/>
</svg>
  `,

  links: [
    {
      label: "Tutorials",
      url: "/pages/tutorials/",
    },
  ],

  cta: {
    homeLabel: "START GENERATING",
    generatorLabel: "MORE GENERATORS",
    mobileLabel: "All Generators",
    url: "/pages/html-generators/",
  },

  mobileMenu: {
    breakpoint: 767,
    openLabel: "Open menu",
    closeLabel: "Close menu",
    hamburgerIcon: `
      <span class="rdc-lab-nav-hamb-line"></span>
      <span class="rdc-lab-nav-hamb-line"></span>
      <span class="rdc-lab-nav-hamb-line"></span>
    `,
    closeIcon: "&times;",
    links: [
      {
        type: "cta",
        label: "All Generators",
        url: "/pages/html-generators/",
      },
      {
        label: "Tutorials",
        url: "/pages/tutorials/",
      },
      {
        label: "Help Center",
        url: "/pages/help-center/",
      },
      {
        label: "Work with RDC",
        url: "https://www.reddelacruz.dev/anything-frontend",
      },
      {
        label: "Contact",
        url: "https://www.reddelacruz.dev/contact",
      },
      {
        label: "RDC Dev",
        url: "https://www.reddelacruz.dev",
      },
    ],
  },
};

const rdcLabNav = document.getElementById("rdc-lab-nav");

function injectRdcLabNavStyles() {
  if (document.getElementById("rdc-lab-nav-mobile-style")) return;

  const style = document.createElement("style");
  style.id = "rdc-lab-nav-mobile-style";
  style.textContent = `
    .rdc-lab-nav-desktop-list,
    .rdc-lab-nav-desktop-cta {
      display: flex;
    }

    .rdc-lab-nav-mobile-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: 0;
      background: transparent;
      color: currentColor;
      cursor: pointer;
    }

    .rdc-lab-nav-hamb-line {
      display: block;
      width: 22px;
      height: 2px;
      background: currentColor;
      border-radius: 999px;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .rdc-lab-nav-hamb-line + .rdc-lab-nav-hamb-line {
      margin-top: 5px;
    }

    .rdc-lab-nav-mobile-toggle.is-open .rdc-lab-nav-hamb-line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .rdc-lab-nav-mobile-toggle.is-open .rdc-lab-nav-hamb-line:nth-child(2) {
      opacity: 0;
    }

    .rdc-lab-nav-mobile-toggle.is-open .rdc-lab-nav-hamb-line:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .rdc-lab-nav-mobile-overlay {
      position: fixed;
      inset: 0;
      z-index: 998;
      background: rgba(0, 0, 0, 0.55);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease, visibility 0.2s ease;
    }

    .rdc-lab-nav-mobile-overlay.is-open {
      opacity: 1;
      visibility: visible;
    }

    .rdc-lab-nav-mobile-drawer {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
      width: min(86vw, 360px);
      height: 100vh;
      overflow-y: auto;
      background: #111111;
      color: #ffffff;
      transform: translateX(100%);
      transition: transform 0.25s ease;
    }

    .rdc-lab-nav-mobile-drawer.is-open {
      transform: translateX(0);
    }

    .rdc-lab-nav-mobile-drawer-inner {
      min-height: 100%;
      padding: 20px;
    }

    .rdc-lab-nav-mobile-drawer-head {
      gap: 20px;
      margin-bottom: 24px;
      justify-content: flex-end;
    }

    .rdc-lab-nav-mobile-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 0;
      background: transparent;
      color: inherit;
      font-size: 32px;
      line-height: 1;
      cursor: pointer;
    }

    .rdc-lab-nav-drawer-link {
      display: block;
      padding: 14px 0;
      color: inherit;
      font-size: 16px;
    }

    body.rdc-lab-nav-open {
      overflow: hidden;
    }

    @media only screen and (max-width: 767px) {
      .rdc-lab-nav-logo,
      .rdc-lab-nav-links {
        width: auto;
      }

      .rdc-lab-nav-logo svg {
        max-width: 160px;
        height: auto;
      }

      .rdc-lab-nav-desktop-list,
      .rdc-lab-nav-desktop-cta {
        display: none !important;
      }

      .rdc-lab-nav-mobile-toggle {
        display: inline-flex;
        flex-direction: column;
      }
    }
  `;

  document.head.appendChild(style);
}

function renderNavLinks(links) {
  return links
    .map(function (link) {
      return `
      <li class="rdc-p-10">
        <a class="rdc-td-none" href="${link.url}">
          ${link.label}
        </a>
      </li>
    `;
    })
    .join("");
}

function renderMobileDrawerLinks(links) {
  return links
    .map(function (link) {
      const label =
        link.type === "cta" ? rdcLabNavData.cta.mobileLabel : link.label;
      const url = link.type === "cta" ? rdcLabNavData.cta.url : link.url;

      return `
      <li class="rdc-lab-nav-drawer-item">
        <a class="rdc-lab-nav-drawer-link rdc-ff-baij rdc-fs-12 rdc-td-none rdc-lab-border rdc-bg-dark-5 rdc-p-10 rdc-ta-cen rdc-m-b10 rdc-br-4" href="${url}">
          ${label}
        </a>
      </li>
    `;
    })
    .join("");
}

function getNavButtonData(isGeneratorPage) {
  const buttonText = isGeneratorPage
    ? rdcLabNavData.cta.generatorLabel
    : rdcLabNavData.cta.homeLabel;

  const buttonClasses = isGeneratorPage
    ? "rdc-td-none rdc-p-10 rdc-lab-4th-btn rdc-m-l20 rdc-fs-14 rdc-c-white-1"
    : "rdc-td-none rdc-p-10 rdc-lab-btn rdc-lab-3rd-btn rdc-m-l20 rdc-br-4 rdc-fs-14";

  return { buttonText: buttonText, buttonClasses: buttonClasses };
}

function setMobileDrawerState(isOpen) {
  const drawer = document.getElementById("rdc-lab-nav-mobile-drawer");
  const overlay = document.getElementById("rdc-lab-nav-mobile-overlay");
  const toggle = document.getElementById("rdc-lab-nav-mobile-toggle");

  if (!drawer || !overlay || !toggle) return;

  drawer.classList.toggle("is-open", isOpen);
  overlay.classList.toggle("is-open", isOpen);
  toggle.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("rdc-lab-nav-open", isOpen);

  toggle.setAttribute("aria-expanded", String(isOpen));
  drawer.setAttribute("aria-hidden", String(!isOpen));
}

if (rdcLabNav) {
  injectRdcLabNavStyles();

  const isGeneratorPage = document.body.id === "rlab-generator";
  const navButton = getNavButtonData(isGeneratorPage);
  const linksHTML = renderNavLinks(rdcLabNavData.links);
  const mobileLinksHTML = renderMobileDrawerLinks(
    rdcLabNavData.mobileMenu.links,
  );

  rdcLabNav.innerHTML = `
    <div class="rdc-lab-nav-inner rdc-d-flex rdc-jc-spb rdc-ai-cen rdc-p-20">
      <div class="rdc-lab-nav-logo rdc-w-half">
        <a href="${rdcLabNavData.logoUrl}" aria-label="RDC Lab home">
          ${rdcLabNavData.logo}
        </a>
      </div>

      <div class="rdc-lab-nav-links rdc-w-half rdc-d-flex rdc-ai-cen rdc-jc-fle">
        <ul class="rdc-lab-nav-desktop-list rdc-d-flex rdc-m-0 rdc-p-0 rdc-ls-none rdc-ai-cen">
          ${linksHTML}
        </ul>

        <a
          class="rdc-lab-nav-desktop-cta ${navButton.buttonClasses}"
          href="${rdcLabNavData.cta.url}"
        >
          ${navButton.buttonText}
        </a>

        <button
          class="rdc-lab-nav-mobile-toggle"
          id="rdc-lab-nav-mobile-toggle"
          type="button"
          aria-label="${rdcLabNavData.mobileMenu.openLabel}"
          aria-controls="rdc-lab-nav-mobile-drawer"
          aria-expanded="false"
        >
          ${rdcLabNavData.mobileMenu.hamburgerIcon}
        </button>
      </div>
    </div>

    <div class="rdc-lab-nav-mobile-overlay" id="rdc-lab-nav-mobile-overlay"></div>

    <aside
      class="rdc-lab-nav-mobile-drawer"
      id="rdc-lab-nav-mobile-drawer"
      aria-hidden="true"
    >
      <div class="rdc-lab-nav-mobile-drawer-inner">
        <div class="rdc-lab-nav-mobile-drawer-head rdc-d-flex rdc-jc-fle rdc-ai-cen">
          <button
            class="rdc-lab-nav-mobile-close"
            id="rdc-lab-nav-mobile-close"
            type="button"
            aria-label="${rdcLabNavData.mobileMenu.closeLabel}"
          >
            ${rdcLabNavData.mobileMenu.closeIcon}
          </button>
        </div>

        <nav class="rdc-lab-nav-mobile-nav" aria-label="Mobile navigation">
          <ul class="rdc-lab-nav-mobile-list rdc-m-0 rdc-p-0 rdc-ls-none">
            ${mobileLinksHTML}
          </ul>
        </nav>
      </div>
    </aside>
  `;

  const mobileToggle = document.getElementById("rdc-lab-nav-mobile-toggle");
  const mobileClose = document.getElementById("rdc-lab-nav-mobile-close");
  const mobileOverlay = document.getElementById("rdc-lab-nav-mobile-overlay");
  const mobileDrawer = document.getElementById("rdc-lab-nav-mobile-drawer");

  mobileToggle.addEventListener("click", function () {
    const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";
    setMobileDrawerState(!isOpen);
  });

  mobileClose.addEventListener("click", function () {
    setMobileDrawerState(false);
  });

  mobileOverlay.addEventListener("click", function () {
    setMobileDrawerState(false);
  });

  mobileDrawer.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMobileDrawerState(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMobileDrawerState(false);
  });
}

//CTA V1
const rdcLabCtaV1Data = {
  title: "Build better. Build faster.",
  text: "RDC Lab is your frontend tool.",
  buttonText: "EXPLORE GENERATORS",
  buttonUrl: "/pages/html-generators/",

  icon: `
   <svg width="200" height="200" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="2" y="2" width="146.766" height="146.766" rx="19.2521" fill="#1A1119" stroke="#51C4D1" stroke-width="4"></rect>
<mask id="mask0_9917_1997" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="12" width="127" height="127">
<rect x="12.1504" y="12.1504" width="126.465" height="126.465" fill="url(#pattern0_9917_1997)"></rect>
</mask>
<g mask="url(#mask0_9917_1997)">
<rect x="6.86816" y="6.86768" width="137.031" height="137.031" fill="#51C4D1"></rect>
</g>
<defs>
<pattern id="pattern0_9917_1997" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_9917_1997" transform="scale(0.00195312)"></use>
</pattern>
<image id="image0_9917_1997" width="512" height="512" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"></image>
</defs>
</svg>
  `,
};

const rdcLabCtaV1Con = document.getElementById("rdc-lab-cta-v1-con");

if (rdcLabCtaV1Con) {
  rdcLabCtaV1Con.innerHTML = `
    <div class="rdc-lab-cta-v1-left rdc-c-white-1 rdc-w-60 rdc-m-m-b20 rdc-m-w-full">
      <div class="rdc-lab-cta-v1-left-inner rdc-d-flex rdc-m-fw-wrap rdc-ai-cen">

        <span class="rdc-w-10 rdc-m-m-b10 rdc-m-w-20 rdc-d-flex rdc-ai-cen">
          ${rdcLabCtaV1Data.icon}
        </span>

        <div class="rdc-w-90 rdc-m-l20 rdc-m-m-0">
          <h3 class="rdc-fw-700 rdc-ff-baij rdc-m-bl10 rdc-fs-16">
            ${rdcLabCtaV1Data.title}
          </h3>

          <p class="rdc-m-bl10 rdc-fs-16">
            ${rdcLabCtaV1Data.text}
          </p>
        </div>

      </div>
    </div>

    <div class="rdc-lab-cta-v1-right rdc-w-30 rdc-m-w-full rdc-d-flex rdc-jc-fle rdc-ai-cen">
      <a
        class="rdc-lab-3rd-btn rdc-m-mw-uns rdc-m-w-full rdc-d-flex rdc-jc-cen rdc-br-4 rdc-fs-14"
        href="${rdcLabCtaV1Data.buttonUrl}"
      >
        ${rdcLabCtaV1Data.buttonText}
      </a>
    </div>
  `;
}

//Page CTA
const rdcLabPageCtaData = {
  workWithMe: {
    match: "work with me",
    eyebrow: "Need custom help?",
    title: "Let's build something amazing together.",
    description:
      "Have a custom project or need help implementing something specific? I'd love to help.",
    buttonLabel: "Work With Me",
    href: "https://www.reddelacruz.dev/anything-frontend",
    image: "/assets/images/shopify-web-developer-rdc-lab-cta.jpg",
    imageAlt: "Custom frontend project support from RDC Lab",
  },
};

function normalizeRdcLabPageCtaValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function getRdcLabPageCtaData(pageContent) {
  const pageCtaValue = normalizeRdcLabPageCtaValue(
    pageContent?.CTA || pageContent?.cta,
  );

  return Object.values(rdcLabPageCtaData).find(function (cta) {
    return normalizeRdcLabPageCtaValue(cta.match) === pageCtaValue;
  }) || rdcLabPageCtaData.workWithMe;
}

function isRdcLabHomePage() {
  const path = window.location.pathname.replace(/\/index\.html$/, "/");

  return (
    document.body?.id === "index" ||
    document.body?.dataset.seoPage === "home" ||
    path === "/"
  );
}

function renderRdcLabPageCtaMarkup(cta) {
  return `
    <section class="rdcl-help-work-cta rdcl-global-page-cta rdc-lab-border-2 rdc-bg-dark-5 rdc-p-20 rdc-m-b20">
      <div class="rdc-d-flex rdc-fw-wrap rdc-ai-cen rdc-jc-spb">
        <div class="rdcl-help-work-copy rdcl-global-page-cta-copy rdc-d-flex rdc-ff-col rdc-w-30 rdc-m-b20 rdc-m-w-full">
          <span class="rdcl-help-work-eyebrow rdcl-global-page-cta-eyebrow rdc-ff-baij rdc-m-t10 rdc-d-flex rdc-w-fit rdc-tt-upc rdc-fw-400 rdc-lab-border-4 rdc-fs-12 rdc-c-yellow">${cta.eyebrow}</span>
          <h2 class="rdc-c-white-3 rdc-m-b0">${cta.title}</h2>
          <p>${cta.description}</p>
          <a href="${cta.href}" class="rdcl-help-work-btn rdcl-global-page-cta-btn rdc-lab-btn rdc-m-bl10 rdc-lab-3rd-btn rdc-br-4 rdc-d-iflex rdc-ai-cen rdc-td-none rdc-ff-baij rdc-tt-upc">
            <span>${cta.buttonLabel}</span>
            <span aria-hidden="true">${renderRdcLabPageCtaArrow()}</span>
          </a>
        </div>
        <div class="rdcl-help-work-image rdcl-global-page-cta-image rdc-w-40 rdc-m-w-full">
          <img class="rdc-w-full rdc-br-10" src="${cta.image}" alt="${getRdcLabImageAlt(cta)}" loading="lazy" />
        </div>
      </div>
    </section>
  `;
}

function renderRdcLabPageCtaArrow() {
  return `<svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

window.renderRdcLabPageCta = function (pageContent) {
  const cta = getRdcLabPageCtaData(pageContent);
  const main = document.querySelector("main");
  const footer = document.getElementById("rdc-lab-footer");

  if (!cta || isRdcLabHomePage()) return;

  const existingCta = document.querySelector("[data-rdcl-page-cta]");

  if (existingCta) {
    existingCta.remove();
  }

  const wrapper = document.createElement("div");
  wrapper.className =
    "rdcl-global-page-cta-wrap rdc-mw-1400 rdc-m-iauto rdc-p-in20";
  wrapper.setAttribute("data-rdcl-page-cta", cta.match);
  wrapper.innerHTML = renderRdcLabPageCtaMarkup(cta);

  if (footer) {
    footer.parentNode.insertBefore(wrapper, footer);
    return;
  }

  if (main) main.appendChild(wrapper);
};

document.addEventListener("rdcLabPageContentReady", function (event) {
  window.renderRdcLabPageCta(event.detail);
});

document.addEventListener("DOMContentLoaded", function () {
  window.renderRdcLabPageCta();
});

//Footer

const footer = document.getElementById("rdc-lab-footer");

const rdcLabFooterData = {
  logo: `
    <svg width="218" height="63" viewBox="0 0 218 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.60538 55V18.8048H18.832V29.7229L16.516 26.6129C17.6189 23.7896 19.3834 21.6722 21.8097 20.2605C24.2359 18.8489 27.1474 18.1431 30.5442 18.1431V31.3772C29.8825 31.2889 29.2869 31.2228 28.7576 31.1787C28.2723 31.1345 27.765 31.1125 27.2356 31.1125C24.9859 31.1125 23.1331 31.708 21.6773 32.8991C20.2657 34.046 19.5599 36.0532 19.5599 38.9206V55H4.60538Z" fill="#FF437B"/>
<path d="M50.3405 55.6617C47.2084 55.6617 44.2969 54.9118 41.606 53.4119C38.9592 51.8679 36.8417 49.7064 35.2536 46.9272C33.6655 44.1039 32.8715 40.7513 32.8715 36.8693C32.8715 32.9873 33.6655 29.6567 35.2536 26.8776C36.8417 24.0543 38.9592 21.8927 41.606 20.3929C44.2969 18.893 47.2084 18.1431 50.3405 18.1431C53.5167 18.1431 56.1194 18.8268 58.1486 20.1944C60.1778 21.5178 61.6777 23.5691 62.6482 26.3482C63.6187 29.0833 64.1039 32.5903 64.1039 36.8693C64.1039 41.1924 63.6407 44.7436 62.7144 47.5227C61.8321 50.3019 60.3763 52.3532 58.3471 53.6766C56.362 55 53.6931 55.6617 50.3405 55.6617ZM53.9137 44.0157C55.0165 44.0157 56.0091 43.751 56.8914 43.2217C57.7736 42.6923 58.4794 41.8983 59.0088 40.8395C59.5382 39.7367 59.8029 38.4133 59.8029 36.8693C59.8029 35.2812 59.5382 33.9799 59.0088 32.9653C58.4794 31.9065 57.7736 31.1125 56.8914 30.5831C56.0091 30.0538 55.0165 29.7891 53.9137 29.7891C52.8108 29.7891 51.8183 30.0538 50.936 30.5831C50.0537 31.1125 49.3479 31.9065 48.8186 32.9653C48.2892 33.9799 48.0245 35.2812 48.0245 36.8693C48.0245 38.4133 48.2892 39.7367 48.8186 40.8395C49.3479 41.8983 50.0537 42.6923 50.936 43.2217C51.8183 43.751 52.8108 44.0157 53.9137 44.0157ZM60.266 55V50.1034L60.1999 36.8693L59.5382 23.6352V5.90157H74.4927V55H60.266Z" fill="#DAF277"/>
<path d="M100.569 55.6617C96.4223 55.6617 92.7388 54.8677 89.5185 53.2796C86.2982 51.6915 83.7617 49.4858 81.9089 46.6625C80.1003 43.7951 79.1959 40.5307 79.1959 36.8693C79.1959 33.2079 80.1003 29.9655 81.9089 27.1423C83.7617 24.319 86.2982 22.1133 89.5185 20.5252C92.7388 18.9371 96.4223 18.1431 100.569 18.1431C104.98 18.1431 108.752 19.0915 111.884 20.9884C115.016 22.8853 117.178 25.5101 118.369 28.8627L106.789 34.5533C106.039 32.877 105.113 31.6639 104.01 30.914C102.951 30.164 101.782 29.7891 100.503 29.7891C99.4 29.7891 98.3633 30.0538 97.3928 30.5831C96.4664 31.1125 95.7165 31.9065 95.143 32.9653C94.6136 33.9799 94.349 35.2812 94.349 36.8693C94.349 38.4574 94.6136 39.7808 95.143 40.8395C95.7165 41.8983 96.4664 42.6923 97.3928 43.2217C98.3633 43.751 99.4 44.0157 100.503 44.0157C101.782 44.0157 102.951 43.6407 104.01 42.8908C105.113 42.1409 106.039 40.9278 106.789 39.2514L118.369 44.9421C117.178 48.2947 115.016 50.9195 111.884 52.8164C108.752 54.7133 104.98 55.6617 100.569 55.6617Z" fill="#67FF92"/>
<path d="M133.662 56C130.971 56 128.986 55.5368 127.707 54.6104C126.472 53.684 125.854 52.118 125.854 49.9123C125.854 48.8977 125.942 47.9272 126.119 47.0008L132.67 9.68073H137.434L130.883 47.0008C130.751 47.6625 130.685 48.2581 130.685 48.7874C130.685 49.8903 130.971 50.6623 131.545 51.1034C132.118 51.5445 133.067 51.7651 134.39 51.7651H136.64L135.912 56H133.662ZM152.361 56.5294C149.449 56.5294 147.089 55.8456 145.28 54.4781C143.472 53.0664 142.567 51.1916 142.567 48.8536C142.567 48.5007 142.612 47.9713 142.7 47.2655L143.097 45.0819C143.626 42.1704 144.905 39.9206 146.935 38.3325C149.008 36.7444 151.633 35.9504 154.809 35.9504H159.044C160.5 35.9504 162.088 36.193 163.808 36.6782C165.573 37.1194 166.918 37.6929 167.845 38.3987L168.771 32.9065C168.859 32.2889 168.903 31.8478 168.903 31.5831C168.903 30.0392 168.418 28.826 167.448 27.9438C166.521 27.0615 165.242 26.6203 163.61 26.6203H158.316C156.419 26.6203 154.809 27.0615 153.486 27.9438C152.206 28.826 151.434 29.995 151.17 31.4508H146.405C146.891 28.7599 148.214 26.5983 150.376 24.9661C152.581 23.2898 155.228 22.4516 158.316 22.4516H163.61C166.698 22.4516 169.124 23.2015 170.888 24.7014C172.697 26.2013 173.601 28.2525 173.601 30.8553C173.601 31.4728 173.535 32.1566 173.403 32.9065L169.366 56H164.867L165.661 51.3681C164.338 53.0003 162.882 54.2796 161.294 55.206C159.706 56.0882 158.051 56.5294 156.331 56.5294H152.361ZM156.463 52.3606C158.537 52.3606 160.5 51.721 162.352 50.4417C164.249 49.1624 165.661 47.464 166.587 45.3466L167.05 42.8983C166.301 42.0601 165.176 41.3984 163.676 40.9132C162.22 40.3838 160.676 40.1191 159.044 40.1191H154.809C152.912 40.1191 151.346 40.5602 150.111 41.4425C148.92 42.3248 148.17 43.56 147.861 45.1481L147.464 47.2655C147.376 47.7949 147.332 48.1478 147.332 48.3242C147.332 49.5594 147.773 50.552 148.655 51.3019C149.582 52.0077 150.817 52.3606 152.361 52.3606H156.463ZM192.702 56.5294C190.938 56.5294 189.306 56.1103 187.806 55.2721C186.35 54.3899 185.203 53.2208 184.365 51.7651L183.637 56H179.005L187.144 9.68073H191.908L188.931 26.885C190.078 25.5616 191.423 24.5029 192.967 23.7088C194.555 22.8707 196.033 22.4516 197.4 22.4516H202.099C205.319 22.4516 207.855 23.3339 209.708 25.0984C211.561 26.8189 212.487 29.1569 212.487 32.1125C212.487 33.083 212.399 33.9873 212.223 34.8255L210.701 43.3615C209.951 47.4199 208.385 50.6402 206.003 53.0223C203.665 55.3604 200.775 56.5294 197.334 56.5294H192.702ZM197.202 52.2945C199.364 52.2945 201.238 51.4784 202.826 49.8462C204.459 48.214 205.495 46.0524 205.936 43.3615L207.458 34.8255C207.591 34.0755 207.657 33.3918 207.657 32.7742C207.657 30.9214 207.15 29.4436 206.135 28.3408C205.12 27.2379 203.731 26.6865 201.966 26.6865H197.533C195.151 26.6865 193.011 27.5247 191.114 29.201C189.262 30.8773 188.004 33.083 187.343 35.818L185.887 43.8908C185.843 44.1114 185.821 44.4422 185.821 44.8834C185.821 47.0008 186.482 48.7654 187.806 50.177C189.129 51.5886 190.761 52.2945 192.702 52.2945H197.202Z" fill="#E8ECD8"/>
</svg>
  `,

  tagline: `
    Simple components. <br>
    Clean code. <br>
    Fast workflow.
  `,

  columns: [
    {
      title: "TOP GENERATORS",
      links: [
        { label: "2-Column", url: "/gens/2-column/" },
        { label: "Accordion", url: "/gens/accordion/" },
        { label: "Columns", url: "/gens/columns/" },
        { label: "Buttons", url: "/gens/buttons/" },
        { label: "Modal", url: "/gens/modal/" },
        { label: "All Generators", url: "/pages/html-generators/" },
      ],
    },
    {
      title: "INFO",
      links: [
        { label: "Tutorials", url: "/pages/tutorials" },
        { label: "Help Center", url: "/pages/help-center/" },
      ],
    },
    {
      title: "CREATOR",
      links: [
        {
          label: "Work with RDC",
          url: "https://www.reddelacruz.dev/anything-frontend",
        },
        { label: "Contact", url: "https://www.reddelacruz.dev/contact" },
        { label: "RDC Dev", url: "https://www.reddelacruz.dev/" },
      ],
    },
  ],

  legal: [
    { label: "Terms", url: "/terms/" },
    { label: "Privacy", url: "/privacy/" },
  ],
};

if (footer) {
  const footerColumns = rdcLabFooterData.columns
    .map(
      (column) => `
    <div class="rlab-cols-col rdc-lab-footer-col rdc-w-20 rdc-t-w-half rdc-m-w-full rdc-fs-14">
      <p class="rdc-fw-400">${column.title}</p>
      <ul class="rdc-ls-none rdc-p-0 rdc-fw-300">
        ${column.links
          .map(
            (link) => `
          <li><a href="${link.url}">${link.label}</a></li>
        `,
          )
          .join("")}
      </ul>
    </div>
  `,
    )
    .join("");

  const legalLinks = rdcLabFooterData.legal
    .map(
      (link) => `
    <div class="rlab-cols-col rdc-w-10 rdc-t-w-20 rdc-p-in10">
      <a href="${link.url}">${link.label}</a>
    </div>
  `,
    )
    .join("");

  footer.innerHTML = `
    <div class="rdc-lab-sec rdc-lab-footer rdc-c-white-1 rdc-p-bl20 rdc-m-t4r">
      <div class="rdc-lab-footer-inner rdc-d-flex rdc-t-w-full rdc-t-fw-wrap rdc-m-w-full rdc-m-fw-wrap rdc-mw-1600 rdc-m-iauto rdc-p-20">
        
        <div class="rlab-cols-col rdc-lab-footer-col rdc-w-40 rdc-t-w-half rdc-m-w-full">
          ${rdcLabFooterData.logo}

          <p class="rdc-fs-14 rdc-ff-baij">
            ${rdcLabFooterData.tagline}
          </p>
        </div>

        ${footerColumns}

      </div>

      <div class="rdc-lab-footer-bottom rdc-ff-baij rdc-d-flex rdc-ai-cen rdc-fw-wrap rdc-m-iauto rdc-fs-12 rdc-p-in20">
        <div class="rlab-cols-col rdc-w-half rdc-t-w-half">
          <p>
            &copy; ${new Date().getFullYear()} <a href="/">RDC Lab</a>. All rights reserved.
          </p>
        </div>

        <div class="rlab-cols-col rdc-d-flex rdc-jc-fle rdc-w-half rdc-t-w-half">
          ${legalLinks}
        </div>
      </div>
    </div>
  `;
}
