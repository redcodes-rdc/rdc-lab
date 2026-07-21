const tabsCount = document.getElementById("tabs-count");
const tabsDesktopLayout = document.getElementById("tabs-desktop-layout");
const tabsTabletLayout = document.getElementById("tabs-tablet-layout");
const tabsMobileLayout = document.getElementById("tabs-mobile-layout");

const tabsOutput = document.getElementById("tabsOutput");
const tabsPreviewStage = document.getElementById("tabsPreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

let tabsPreviewStyle = document.getElementById("tabs-preview-style");

if (!tabsPreviewStyle) {
  tabsPreviewStyle = document.createElement("style");
  tabsPreviewStyle.id = "tabs-preview-style";
  document.head.appendChild(tabsPreviewStyle);
}

function getLayoutValue(field, fallback = "horizontal") {
  return field?.value || fallback;
}

function getTabsCount() {
  return Number(tabsCount?.value) || 4;
}

function getLayoutClasses() {
  return [
    getLayoutClass("desktop", getLayoutValue(tabsDesktopLayout)),
    getLayoutClass("tablet", getLayoutValue(tabsTabletLayout)),
    getLayoutClass("mobile", getLayoutValue(tabsMobileLayout)),
  ].join(" ");
}

function getLayoutClass(device, layout) {
  const prefix = {
    desktop: "rlab-tabs-layout",
    tablet: "rlab-tabs-layout-t",
    mobile: "rlab-tabs-layout-m",
  }[device];

  return `${prefix}-${layout}`;
}

function getButtons(count) {
  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `        <button class="rlab-tabs-btn${
      i === 1 ? " is-active" : ""
    }" type="button" data-tab-target="tab-${i}">
          Tab ${i}
        </button>\n`;
  }

  return html;
}

function getPanels(count) {
  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `        <div class="rlab-tabs-panel${
      i === 1 ? " is-active" : ""
    }" data-tab-panel="tab-${i}"${i === 1 ? "" : " hidden"}>
          <p>Tab ${i} content goes here.</p>
        </div>\n`;
  }

  return html;
}

function getTabsHtml() {
  const count = getTabsCount();

  return `<div class="rlab-tabs-main">
  <div class="rlab-tabs-inner ${getLayoutClasses()}">
    <div class="rlab-tabs-nav-wrap">
      <div class="rlab-tabs-nav rdc-d-flex">
${getButtons(count)}      </div>
    </div>

    <div class="rlab-tabs-content-wrap">
      <div class="rlab-tabs-content">
${getPanels(count)}      </div>
    </div>
  </div>
</div>`;
}

function getTabsScript() {
  return `<script>
(function () {
  const root = document.currentScript.previousElementSibling;
  if (!root) return;

  const buttons = root.querySelectorAll(".rlab-tabs-btn");
  const panels = root.querySelectorAll(".rlab-tabs-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab-target");

      buttons.forEach((button) => button.classList.remove("is-active"));
      panels.forEach((panel) => {
        panel.classList.remove("is-active");
        panel.hidden = true;
      });

      btn.classList.add("is-active");

      const match = root.querySelector(
        '[data-tab-panel="' + target + '"]'
      );

      if (match) {
        match.classList.add("is-active");
        match.hidden = false;
      }
    });
  });
})();
<\/script>`;
}

function getGeneratedCss() {
  return [
    getBaseCss(),
    getDesktopLayoutCss(getLayoutValue(tabsDesktopLayout)),
    getTabletLayoutCss(getLayoutValue(tabsTabletLayout)),
    getMobileLayoutCss(getLayoutValue(tabsMobileLayout)),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function getBaseCss() {
  return `.rlab-tabs-main,
.rlab-tabs-inner {
  width: 100%;
}

.rlab-tabs-nav-wrap,
.rlab-tabs-content-wrap,
.rlab-tabs-content {
  width: 100%;
  min-width: 0;
}

.rlab-tabs-content {
  display: flex;
}

.rlab-tabs-nav {
  width: 100%;
  gap: 12px;
}

.rlab-tabs-btn {
  appearance: none;
  -webkit-appearance: none;
  border: unset;
  background: #474770;
  color: #ffffff;
  padding: 12px 18px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  transition: all 0.2s ease;
}

.rlab-tabs-btn.is-active {
  background: #65657c;
  color: #ffffff;
}

.rlab-tabs-panel {
  display: none;
  width: 100%;
  padding: 20px;
  background-color: #65657c;
}

.rlab-tabs-panel p{
color: #fff;
}

.rlab-tabs-panel.is-active {
  display: block;
}

.rlab-tabs-panel[hidden] {
  display: none !important;
}`;
}

function getDesktopLayoutCss(layout) {
  if (layout === "vertical-left" || layout === "vertical-right") {
    const direction = layout === "vertical-right" ? "row-reverse" : "row";

    return `.rlab-tabs-layout-${layout} {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  flex-flow: ${direction} nowrap;
}

.rlab-tabs-layout-${layout} .rlab-tabs-nav-wrap {
  flex: 0 0 calc(28% - 8px);
  width: calc(28% - 8px);
  min-width: 0;
}

.rlab-tabs-layout-${layout} .rlab-tabs-content-wrap {
  flex: 1 1 0;
  width: auto;
  min-width: 0;
}

.rlab-tabs-layout-${layout} .rlab-tabs-nav {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}

.rlab-tabs-layout-${layout} .rlab-tabs-btn {
  width: 100%;
  min-width: 0;
  flex: 0 0 auto;
}`;
  }

  return `.rlab-tabs-layout-horizontal {
  display: block;
}

.rlab-tabs-layout-horizontal .rlab-tabs-nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
}

.rlab-tabs-layout-horizontal .rlab-tabs-btn {
  flex: 1 1 0;
  min-width: 0;
}`;
}

function getTabletLayoutCss(layout) {
  if (layout === "vertical-left" || layout === "vertical-right") {
    const direction = layout === "vertical-right" ? "row-reverse" : "row";

    return `@media only screen and (max-width: 1024px) {
  .rlab-tabs-layout-t-${layout} {
    display: flex !important;
    gap: 14px !important;
    align-items: flex-start !important;
    flex-flow: ${direction} nowrap !important;
  }

  .rlab-tabs-layout-t-${layout} .rlab-tabs-nav-wrap {
    width: calc(32% - 7px) !important;
    flex: 0 0 calc(32% - 7px) !important;
    min-width: 0 !important;
  }

  .rlab-tabs-layout-t-${layout} .rlab-tabs-content-wrap {
    width: auto !important;
    flex: 1 1 0 !important;
    min-width: 0 !important;
  }

  .rlab-tabs-layout-t-${layout} .rlab-tabs-nav {
    display: flex !important;
    flex-flow: column nowrap !important;
    align-items: stretch !important;
  }

  .rlab-tabs-layout-t-${layout} .rlab-tabs-btn {
    width: 100% !important;
    min-width: 0 !important;
    flex: 0 0 auto !important;
  }
}`;
  }

  return `@media only screen and (max-width: 1024px) {
  .rlab-tabs-layout-t-horizontal {
    display: block !important;
  }

  .rlab-tabs-layout-t-horizontal .rlab-tabs-nav-wrap,
  .rlab-tabs-layout-t-horizontal .rlab-tabs-content-wrap {
    width: 100% !important;
    flex: none !important;
    min-width: 0 !important;
  }

  .rlab-tabs-layout-t-horizontal .rlab-tabs-nav {
    display: flex !important;
    flex-flow: row nowrap !important;
    align-items: stretch !important;
  }

  .rlab-tabs-layout-t-horizontal .rlab-tabs-btn {
    flex: 1 1 0 !important;
    width: auto !important;
    min-width: 0 !important;
  }
}`;
}

function getMobileLayoutCss(layout) {
  if (layout === "vertical-left" || layout === "vertical-right") {
    const direction = layout === "vertical-right" ? "row-reverse" : "row";

    return `@media only screen and (max-width: 767px) {
  .rlab-tabs-layout-m-${layout} {
    display: flex !important;
    gap: 10px !important;
    align-items: flex-start !important;
    flex-flow: ${direction} nowrap !important;
  }

  .rlab-tabs-layout-m-${layout} .rlab-tabs-nav-wrap {
    width: calc(30% - 5px) !important;
    flex: 0 0 calc(30% - 5px) !important;
    min-width: 0 !important;
  }

  .rlab-tabs-layout-m-${layout} .rlab-tabs-content-wrap {
    width: auto !important;
    flex: 1 1 0 !important;
    min-width: 0 !important;
  }

  .rlab-tabs-layout-m-${layout} .rlab-tabs-nav {
    display: flex !important;
    flex-flow: column nowrap !important;
    align-items: stretch !important;
    overflow: visible !important;
    width: 100% !important;
    min-width: 0 !important;
  }

  .rlab-tabs-layout-m-${layout} .rlab-tabs-btn {
    width: 100% !important;
    min-width: 0 !important;
    flex: 0 0 auto !important;
    padding: 10px 12px !important;
    font-size: 14px;
  }
}`;
  }

  return `@media only screen and (max-width: 767px) {
  .rlab-tabs-layout-m-horizontal {
    display: block !important;
  }

  .rlab-tabs-layout-m-horizontal .rlab-tabs-nav-wrap,
  .rlab-tabs-layout-m-horizontal .rlab-tabs-content-wrap,
  .rlab-tabs-layout-m-horizontal .rlab-tabs-content {
    width: 100% !important;
    flex: none !important;
    min-width: 0 !important;
    max-width: none !important;
  }

  .rlab-tabs-layout-m-horizontal .rlab-tabs-nav-wrap {
    overflow: hidden !important;
  }

  .rlab-tabs-layout-m-horizontal .rlab-tabs-nav {
    display: flex !important;
    flex-flow: row nowrap !important;
    align-items: stretch !important;
    width: max-content !important;
    min-width: 100% !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .rlab-tabs-layout-m-horizontal .rlab-tabs-nav::-webkit-scrollbar {
    display: none;
  }

  .rlab-tabs-layout-m-horizontal .rlab-tabs-btn {
    flex: 0 0 auto !important;
    width: auto !important;
    min-width: calc((100% - 48px) / 3.5) !important;
  }
}`;
}

function getMarkup() {
  return `<style>
${getGeneratedCss()}
</style>

${getTabsHtml()}

${getTabsScript()}`;
}

function activateTab(target) {
  const buttons = tabsPreviewStage.querySelectorAll(".rlab-tabs-btn");
  const panels = tabsPreviewStage.querySelectorAll(".rlab-tabs-panel");

  buttons.forEach((btn) => {
    btn.classList.toggle(
      "is-active",
      btn.getAttribute("data-tab-target") === target,
    );
  });

  panels.forEach((panel) => {
    const isMatch = panel.getAttribute("data-tab-panel") === target;
    panel.classList.toggle("is-active", isMatch);
    panel.hidden = !isMatch;
  });
}

tabsPreviewStage.addEventListener("click", (event) => {
  const btn = event.target.closest(".rlab-tabs-btn");
  if (!btn) return;

  activateTab(btn.getAttribute("data-tab-target"));
});

function renderPreview() {
  tabsPreviewStyle.textContent = getGeneratedCss();
  tabsPreviewStage.innerHTML = getTabsHtml();
  activateTab("tab-1");
}

function renderOutput() {
  tabsOutput.textContent = getMarkup();
}

function update() {
  renderPreview();
  renderOutput();
}

[tabsCount, tabsDesktopLayout, tabsTabletLayout, tabsMobileLayout].forEach(
  (field) => {
    field?.addEventListener("input", update);
    field?.addEventListener("change", update);
  },
);

copyBtn.addEventListener("click", async () => {
  update();

  try {
    await navigator.clipboard.writeText(tabsOutput.textContent);
    copyBtn.textContent = "Copied!";
  } catch {
    copyBtn.textContent = "Copy Failed";
  }

  setTimeout(() => {
    copyBtn.textContent = "Copy Code";
  }, 1200);
});

update();
