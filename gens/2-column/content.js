const generatorContent = {
  leftView: {
    title: "2-Column Layout Generator",
    description:
      "Build responsive two-column HTML/CSS sections for Shopify pages, landing pages, and content blocks. Adjust widths, stacking, spacing, and order, then use built-in AI enhancement prompts to refine the result.",
    callouts: [
      {
        icon: `<img src="/assets/icons/overline-co-icon.svg" alt="">`,
        text: "Responsive HTML/CSS",
      },
      {
        icon: `<img src="/assets/icons/overline-co-icon.svg" alt="">`,
        text: "Copy & Paste",
      },
      {
        icon: `<img src="/assets/icons/overline-co-icon.svg" alt="">`,
        text: "AI Enhancement Included",
      },
    ],
    useCases: [
      "Pair product media with product details on Shopify pages.",
      "Create image-with-text feature sections for landing pages.",
      "Build comparison blocks with flexible column widths.",
      "Add responsive call-to-action sections between page blocks.",
      "Turn long-form content into easier-to-scan layouts.",
      "Create reusable service, benefit, or feature sections.",
    ],
    useCta: {
      icon: `<svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="2" y="2" width="146.766" height="146.766" rx="18" fill="#201D13" stroke="#C8FA33" stroke-width="4"/>
<rect x="22.0959" y="22.0959" width="106.574" height="106.574" fill="url(#pattern0_9916_1959)"/>
<defs>
<pattern id="pattern0_9916_1959" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_9916_1959" transform="scale(0.00390625)"/>
</pattern>
<image id="image0_9916_1959" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`,
      text: "Instantly generate clean responsive column layouts for any project.",
    },
    output: {
      element: "pre",
      code: `<div class="rlab-cols-main">
  <div class="rlab-cols-inner rdc-d-flex">
    <div class="rlab-cols-col rlab-left"></div>
    <div class="rlab-cols-col rlab-right"></div>
  </div>
</div>`,
    },
  },
  settings: {
    sections: [
      {
        title: "Desktop (Default)",
        fields: [
          {
            type: "select",
            label: "Left Width",
            className: "gen-left",
            options: [
              { value: "rdc-w-20", label: "20%" },
              { value: "rdc-w-25", label: "25%" },
              { value: "rdc-w-33-33", label: "33.33%" },
              { value: "rdc-w-half", label: "50%", selected: true },
              { value: "rdc-w-66-67", label: "66.67%" },
              { value: "rdc-w-75", label: "75%" },
              { value: "rdc-w-80", label: "80%" },
            ],
          },
          {
            type: "select",
            label: "Right Width",
            className: "gen-right",
            options: [
              { value: "rdc-w-20", label: "20%" },
              { value: "rdc-w-25", label: "25%" },
              { value: "rdc-w-33-33", label: "33.33%" },
              { value: "rdc-w-half", label: "50%", selected: true },
              { value: "rdc-w-66-67", label: "66.67%" },
              { value: "rdc-w-75", label: "75%" },
              { value: "rdc-w-80", label: "80%" },
            ],
          },
          {
            type: "checkbox",
            label: "Reverse",
            className: "gen-reverse",
          },
        ],
      },
      {
        title: "Tablet",
        fields: [
          {
            type: "select",
            label: "Left Width",
            className: "gen-left-tab",
            options: [
              { value: "", label: "Inherit Desktop" },
              { value: "rdc-t-w-20", label: "20%" },
              { value: "rdc-t-w-25", label: "25%" },
              { value: "rdc-t-w-33-33", label: "33.33%" },
              { value: "rdc-t-w-half", label: "50%" },
              { value: "rdc-t-w-66-67", label: "66.67%" },
              { value: "rdc-t-w-75", label: "75%" },
              { value: "rdc-t-w-80", label: "80%" },
            ],
          },
          {
            type: "select",
            label: "Right Width",
            className: "gen-right-tab",
            options: [
              { value: "", label: "Inherit Desktop" },
              { value: "rdc-t-w-20", label: "20%" },
              { value: "rdc-t-w-25", label: "25%" },
              { value: "rdc-t-w-33-33", label: "33.33%" },
              { value: "rdc-t-w-half", label: "50%" },
              { value: "rdc-t-w-66-67", label: "66.67%" },
              { value: "rdc-t-w-75", label: "75%" },
              { value: "rdc-t-w-80", label: "80%" },
            ],
          },
          {
            type: "checkbox",
            label: "Reverse",
            className: "gen-reverse-tab",
          },
        ],
      },
      {
        title: "Mobile",
        fields: [
          {
            type: "checkbox",
            label: "Stack",
            className: "gen-stack-mob",
            checked: true,
          },
          {
            type: "select",
            label: "Left Width",
            className: "gen-left-mob",
            options: [
              { value: "", label: "Inherit Tablet/Desktop" },
              { value: "rdc-m-w-20", label: "20%" },
              { value: "rdc-m-w-25", label: "25%" },
              { value: "rdc-m-w-33-33", label: "33.33%" },
              { value: "rdc-m-w-half", label: "50%" },
              { value: "rdc-m-w-66-67", label: "66.67%" },
              { value: "rdc-m-w-75", label: "75%" },
              { value: "rdc-m-w-80", label: "80%" },
            ],
          },
          {
            type: "select",
            label: "Right Width",
            className: "gen-right-mob",
            options: [
              { value: "", label: "Inherit Tablet/Desktop" },
              { value: "rdc-m-w-20", label: "20%" },
              { value: "rdc-m-w-25", label: "25%" },
              { value: "rdc-m-w-33-33", label: "33.33%" },
              { value: "rdc-m-w-half", label: "50%" },
              { value: "rdc-m-w-66-67", label: "66.67%" },
              { value: "rdc-m-w-75", label: "75%" },
              { value: "rdc-m-w-80", label: "80%" },
            ],
          },
          {
            type: "checkbox",
            label: "Reverse",
            className: "gen-reverse-mob",
          },
        ],
      },
    ],
    actions: [
      {
        label: "Copy Code",
        id: "rdcl-copy-btn",
        type: "button",
      },
    ],
    generatorCssDownload: {
      href: "",
      fileName: "",
      labelHtml: `<svg class="rdc-m-r5" width="16" height="100%" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_9935_2057" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38">
<rect width="37.2695" height="37.2695" fill="url(#pattern0_9935_2057)"/>
</mask>
<g mask="url(#mask0_9935_2057)">
<rect x="-4.51318" y="-4.51367" width="46.2962" height="46.2962" fill="#ED7531"/>
</g>
<defs>
<pattern id="pattern0_9935_2057" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_9935_2057" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_9935_2057" width="512" height="512" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
Download This Generator's CSS File`,
    },
    globalCssDownload: {
      href: "/assets/css/global.css",
      fileName: "global.css",
      labelHtml: `<svg class="rdc-m-r5" width="16" height="100%" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_9935_2053" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38">
<rect width="37.2695" height="37.2695" fill="url(#pattern0_9935_2053)"/>
</mask>
<g mask="url(#mask0_9935_2053)">
<rect x="-6.45996" y="-6.45996" width="50.1887" height="50.1887" fill="#50C8C0"/>
</g>
<defs>
<pattern id="pattern0_9935_2053" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_9935_2053" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_9935_2053" width="512" height="512" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
 Download Global CSS File`,
    },
  },
  preview: {
    wrapperClass: "rdcl-gen--layout-vw-inner",
    columns: {
      mainClass: "rlab-cols-main",
      row: {
        id: "previewRow",
        classList: ["rlab-cols-inner", "rdc-d-flex"],
      },
      items: [
        {
          id: "colLeft",
          classList: ["rlab-cols-col", "rlab-left"],
        },
        {
          id: "colRight",
          classList: ["rlab-cols-col", "rlab-right"],
        },
      ],
    },
  },
  tutorial: {
    projectPreview: `<img src="" alt="">`,
    video: "Tutorial video",
    text: "Follow the walkthrough to choose widths, set responsive behavior, preview the result, and copy the generated layout code.",
  },
  smallCta: {
    icon: `<svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="2" y="2" width="146.766" height="146.766" rx="19.2521" fill="#1A1119" stroke="#51C4D1" stroke-width="4"/>
<mask id="mask0_9917_1997" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="12" width="127" height="127">
<rect x="12.1504" y="12.1504" width="126.465" height="126.465" fill="url(#pattern0_9917_1997)"/>
</mask>
<g mask="url(#mask0_9917_1997)">
<rect x="6.86816" y="6.86768" width="137.031" height="137.031" fill="#51C4D1"/>
</g>
<defs>
<pattern id="pattern0_9917_1997" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_9917_1997" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_9917_1997" width="512" height="512" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`,
    text: "All code is clean, lightweight, and 100% free to use in your projects.",
    button: {
      label: "Browse Generators",
      href: "/pages/html-generators/",
    },
  },
};

insertLeftView(generatorContent.leftView);
insertSettings(generatorContent.settings);
insertPreview(generatorContent.preview);
insertTutorial(generatorContent.tutorial);
insertSmallCta(generatorContent.smallCta);

function insertLeftView(content) {
  const container = document.querySelector(".rdcl-gen--cols-vw");

  if (!container) return;

  container.innerHTML = renderLeftView(content);
}

function insertSettings(content) {
  const container = document.querySelector(".rdcl-gen--cols-set");

  if (!container) return;

  container.innerHTML = renderSettings(content);
}

function insertPreview(content) {
  const container = document.querySelector(".rdcl-gen--layout-vw");

  if (!container) return;

  container.innerHTML = renderPreview(content);
}

function renderLeftView(content) {
  return `
    <div class="rdcl-gen--cols-vw-inner">
      ${renderCallouts(content.callouts)}
      <h1>${content.title}</h1>
      <p>${content.description}</p>
      ${renderUseCases(content.useCases)}
      ${renderUseCta(content.useCta)}
      <${content.output.element}><code>${escapeHtml(content.output.code)}</code></${content.output.element}>
    </div>
  `;
}

function renderCallouts(callouts = []) {
  if (!callouts.length) return "";

  return `
    <div class="rdcl-gen-co rdc-m-b10">
      <div class="rdcl-gen-co-inner rdc-m-b10">
        ${callouts.map(renderCallout).join("")}
      </div>
    </div>
  `;
}

function renderCallout(callout) {
  return `
    <span class="rdcl-gen-co-item rdc-lab-border-4 rdc-p-5 rdc-m-r5 rdc-bg-dark-6 rdc-d-iflex rdc-ai-cen">
      <span class="rdcl-gen-co-icon rdc-d-flex rdc-m-r5">${callout.icon}</span>
      <span class="rdcl-gen-co-text rdc-fs-10 rdc-tt-upc rdc-ff-baij rdc-lh-1">${callout.text}</span>
    </span>
  `;
}

function renderUseCases(useCases = []) {
  if (!useCases.length) return "";

  return `
    <div class="rdcl-gen-use rdc-m-bl20"> 
      <div class="rdcl-gen-use-inner rdc-lab-border rdc-p-20 rdc-bg-dark-6">
      <span class="rdc-ff-baij rdc-fw-500 rdc-c-white-3 rdc-d-flex rdc-ai-cen"><span class="rdcl-mini-h-icon rdc-d-iflex rdc-m-r10"><svg width="162" height="148" viewBox="0 0 162 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.8286 112.017V18.6504" stroke="#C5FA31" stroke-width="9.09587" stroke-linecap="round"/>
<path d="M53.1658 29.4181L67.7911 13.4001C70.4963 10.4374 75.1617 10.4374 77.8668 13.4002L92.4919 29.4181" stroke="#C5FA31" stroke-width="9.09587" stroke-linecap="round"/>
<path d="M43.874 112.017L29.2487 128.035C26.5435 130.997 21.8781 130.997 19.173 128.035L4.54788 112.017" stroke="#C5FA31" stroke-width="9.09587" stroke-linecap="round"/>
<path d="M116.352 18.6503L137.027 12.091C140.851 10.8778 144.892 13.2105 145.753 17.1289L150.41 38.3134" stroke="#C5FA31" stroke-width="9.09587" stroke-linecap="round"/>
<path d="M72.9697 81.6625H109.942C112.79 81.6625 115.339 79.8924 116.334 77.2231L138.765 17.042" stroke="#C5FA31" stroke-width="9.09587" stroke-linecap="round"/>
<path d="M67.6826 60.5139H31.0326C27.265 60.5139 24.2107 63.5682 24.2107 67.3358V122.785" stroke="#C5FA31" stroke-width="9.09587" stroke-linecap="round"/>
<circle cx="72.9697" cy="129.749" r="13.1843" stroke="#C6F932" stroke-width="9.09587"/>
</svg>


</span>USE CASES</span>
        <ul class="rdcl-gen-use-list rdc-m-0 rdc-m-b10">
          ${useCases.map((useCase) => `<li>${useCase}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function renderUseCta(cta) {
  if (!cta) return "";

  return `
    <div class="rdcl-gen-co-cta rdc-m-b10">
      <div class="rdcl-gen-co-cta-inner rdc-d-flex rdc-ai-cen rdc-p-10 rdc-lab-border-3 rdc-bg-dark-7 rdc-m-b10">
        <span class="rdcl-gen-co-cta-icon rdc-m-r10 rdc-d-flex">${cta.icon}</span>
        <span class="rdcl-gen-co-cta-text rdc-ff-baij">${cta.text}</span>
      </div>
    </div>
  `;
}

function renderSettings(content) {
  return `
    <div class="rdcl-gen--cols-set-inner">
      <div class="rdc-d-flex rdc-ff-col">
        ${content.sections.map(renderSettingsSection).join("")}
        ${content.actions.map(renderAction).join("")}
        ${renderCssDownloads(content)}
      </div>
    </div>
  `;
}

function renderSettingsSection(section) {
  return `
    <h4>${section.title}</h4>
    ${section.fields.map(renderField).join("")}
  `;
}

function renderField(field) {
  return `
    <div class="rdc-d-flex">
      <label class="rdc-w-half">${field.label}</label>
      ${renderFieldControl(field)}
    </div>
  `;
}

function renderFieldControl(field) {
  if (field.type === "checkbox") {
    return `<input type="checkbox" class="${field.className} rdcl-gen--cols-field"${field.checked ? " checked" : ""} />`;
  }

  return `
    <select class="${field.className} rdcl-gen--cols-field rdc-w-half">
      ${field.options.map(renderOption).join("")}
    </select>
  `;
}

function renderOption(option) {
  return `<option value="${option.value}"${option.selected ? " selected" : ""}>${option.label}</option>`;
}

function renderAction(action) {
  return `<button id="${action.id}" type="${action.type}">${action.label}</button>`;
}

function renderCssDownloads(content) {
  return [content.generatorCssDownload, content.globalCssDownload]
    .map(renderCssDownload)
    .join("");
}

function renderCssDownload(download) {
  if (!download || !download.href) return "";

  return `
    <a href="${download.href}" class="rdcl-copy-css-btn rdc-d-none rdc-fs-12 rdc-c-white-2 rdc-jc-cen rdc-m-t10 rdc-ff-baij" download="${download.fileName || ""}">
      ${download.labelHtml || "Download CSS File"}
    </a>
  `;
}

function renderPreview(content) {
  return `
    <div class="${content.wrapperClass}">
      <div class="${content.columns.mainClass}">
        <div class="${content.columns.row.classList.join(" ")}" id="${content.columns.row.id}">
          ${content.columns.items.map(renderPreviewColumn).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderPreviewColumn(column) {
  return `<div class="${column.classList.join(" ")}" id="${column.id}"></div>`;
}

function insertTutorial(content) {
  const container = document.querySelector(".rdcl-gen-tutorial");

  if (!container || !content) return;

  container.innerHTML = renderTutorial(content);
}

function renderTutorial(content) {
  return `
    <div class="rdcl-gen-tutorial-inner">
      <div class="rdcl-gen-tutorial-project">${content.projectPreview}</div>
      <div class="rdcl-cols-main">
        <div class="rdcl-cols-inner rdc-d-flex rdc-m-fw-wrap">
          <div class="rdcl-cols-col rdc-w-half rdc-m-w-full">${content.video}</div>
          <div class="rdcl-cols-col rdc-w-half rdc-m-w-full">${content.text}</div>
        </div>
      </div>
    </div>
  `;
}

function insertSmallCta(content) {
  const container = document.querySelector(".rdcl-gen-sm-cta");

  if (!container || !content) return;

  container.innerHTML = renderSmallCta(content);
}

function renderSmallCta(content) {
  return `
    <div class="rdcl-gen-sm-cta-inner">
      <div class="rdcl-cols-main">
        <div class="rdcl-cols-inner rdc-d-flex rdc-m-fw-wrap">
          <div class="rdcl-cols-col rdc-w-half rdc-m-w-full rdc-d-flex rdc-ai-cen">
            <span class="rdcl-gen-sm-cta-icon rdc-d-flex rdc-m-r10">${content.icon}</span>
            <span>${content.text}</span>
          </div>
          <div class="rdcl-cols-col rdc-w-half rdc-m-w-full rdc-d-flex rdc-jc-fle rdc-ai-cen">
            <a class="rdc-lab-5th-btn rdc-lab-btn-fit" href="${content.button.href}">${content.button.label}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
