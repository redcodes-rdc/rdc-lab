const iwtLayout = document.getElementById("iwt-layout");
const iwtCount = document.getElementById("iwt-count");
const iwtDesktopBehavior = document.getElementById("iwt-desktop-behavior");
const iwtTabletBehavior = document.getElementById("iwt-tablet-behavior");
const iwtMobileBehavior = document.getElementById("iwt-mobile-behavior");
const iwtRadius = document.getElementById("iwt-radius");

const iwtOutput = document.getElementById("iwtOutput");
const previewCont = document.getElementById("iwtPreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

let iwtPreviewStyle = document.getElementById("iwt-preview-style");

if (!iwtPreviewStyle) {
  iwtPreviewStyle = document.createElement("style");
  iwtPreviewStyle.id = "iwt-preview-style";
  document.head.appendChild(iwtPreviewStyle);
}

function normalizeRadiusValue(value) {
  const v = String(value).trim().toLowerCase();
  return ["0", "2", "4", "10", "full"].includes(v) ? v : "0";
}

function getRadiusClass(value) {
  const raw = (value || "").trim();
  if (!raw) return "";

  if (!raw.includes(",")) {
    return `rdc-br-${normalizeRadiusValue(raw)}`;
  }

  const parts = raw.split(",").map((v) => v.trim());
  const corners = ["tl", "tr", "br", "bl"];

  return corners
    .map((corner, i) => {
      const part = parts[i] || "0";
      return `rdc-br-${corner}-${normalizeRadiusValue(part)}`;
    })
    .join(" ");
}

function getMainClasses(layout) {
  return ["rlab-iwt-main", `rlab-iwt-layout-${layout}`].join(" ");
}

function getRowClasses(count, desktopBehavior, tabletBehavior, mobileBehavior) {
  return [
    "rlab-iwt-row",
    `rlab-iwt-count-${count}`,
    desktopBehavior === "wrap"
      ? "rlab-iwt-desktop-wrap"
      : "rlab-iwt-desktop-scroll",
    tabletBehavior === "wrap"
      ? "rlab-iwt-tablet-wrap"
      : "rlab-iwt-tablet-scroll",
    mobileBehavior === "wrap"
      ? "rlab-iwt-mobile-wrap"
      : "rlab-iwt-mobile-scroll",
  ].join(" ");
}

function buildItemHtml(index, radiusClass) {
  const innerClasses = ["rlab-iwt-item-inner"];

  if (radiusClass) {
    innerClasses.push(radiusClass);
  }

  return `<div class="rlab-iwt-item">
  <div class="${innerClasses.join(" ")}">
    <div class="rlab-iwt-icon-wrap">
      <img
        src="/gens/icon-text/assets/rdclab-icontext-ph-icon.svg"
        class="rlab-iwt-icon"
        alt=""
      />
    </div>
    <div class="rlab-iwt-text-wrap">
      <h4>Feature Title ${index}</h4>
      <p>Short supporting text goes here.</p>
    </div>
  </div>
</div>`;
}

function buildSectionHtml() {
  const layout = iwtLayout.value;
  const count = parseInt(iwtCount.value, 10) || 3;
  const desktopBehavior = iwtDesktopBehavior.value;
  const tabletBehavior = iwtTabletBehavior.value;
  const mobileBehavior = iwtMobileBehavior.value;
  const radiusClass = getRadiusClass(
    iwtRadius.value || iwtRadius.placeholder || "",
  );

  const mainClasses = getMainClasses(layout);
  const rowClasses = getRowClasses(
    count,
    desktopBehavior,
    tabletBehavior,
    mobileBehavior,
  );

  let itemsHtml = "";

  for (let i = 1; i <= count; i++) {
    itemsHtml += buildItemHtml(i, radiusClass);
  }

  return `<div class="${mainClasses}">
  <div class="rlab-iwt-inner">
    <div class="${rowClasses}">
      ${itemsHtml}
    </div>
  </div>
</div>`;
}

function getRadiusCss() {
  const radiusClass = getRadiusClass(
    iwtRadius.value || iwtRadius.placeholder || "",
  );

  if (!radiusClass) return "";

  const declarations = {
    "rdc-br-0": "border-radius: 0;",
    "rdc-br-2": "border-radius: 2px;",
    "rdc-br-4": "border-radius: 4px;",
    "rdc-br-10": "border-radius: 10px;",
    "rdc-br-full": "border-radius: 9999px;",
    "rdc-br-tl-0": "border-top-left-radius: 0;",
    "rdc-br-tl-2": "border-top-left-radius: 2px;",
    "rdc-br-tl-4": "border-top-left-radius: 4px;",
    "rdc-br-tl-10": "border-top-left-radius: 10px;",
    "rdc-br-tl-full": "border-top-left-radius: 9999px;",
    "rdc-br-tr-0": "border-top-right-radius: 0;",
    "rdc-br-tr-2": "border-top-right-radius: 2px;",
    "rdc-br-tr-4": "border-top-right-radius: 4px;",
    "rdc-br-tr-10": "border-top-right-radius: 10px;",
    "rdc-br-tr-full": "border-top-right-radius: 9999px;",
    "rdc-br-br-0": "border-bottom-right-radius: 0;",
    "rdc-br-br-2": "border-bottom-right-radius: 2px;",
    "rdc-br-br-4": "border-bottom-right-radius: 4px;",
    "rdc-br-br-10": "border-bottom-right-radius: 10px;",
    "rdc-br-br-full": "border-bottom-right-radius: 9999px;",
    "rdc-br-bl-0": "border-bottom-left-radius: 0;",
    "rdc-br-bl-2": "border-bottom-left-radius: 2px;",
    "rdc-br-bl-4": "border-bottom-left-radius: 4px;",
    "rdc-br-bl-10": "border-bottom-left-radius: 10px;",
    "rdc-br-bl-full": "border-bottom-left-radius: 9999px;",
  };

  return radiusClass
    .split(" ")
    .map((className) => {
      const declaration = declarations[className];
      if (!declaration) return "";

      return `.${className} {
  ${declaration}
}`;
    })
    .filter(Boolean)
    .join("\n\n");
}

function getGeneratedCss() {
  const layout = iwtLayout.value || "top";
  const count = parseInt(iwtCount.value, 10) || 3;
  const desktopBehavior = iwtDesktopBehavior.value || "wrap";
  const tabletBehavior = iwtTabletBehavior.value || "wrap";
  const mobileBehavior = iwtMobileBehavior.value || "wrap";

  return [
    getBaseCss(),
    layout === "left" ? getLeftLayoutCss() : "",
    getDesktopCss(count, desktopBehavior),
    getTabletCss(count, tabletBehavior),
    getMobileCss(count, mobileBehavior),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function getBaseCss() {
  return `/* MAIN */
.rlab-iwt-main,
.rlab-iwt-inner,
.rlab-iwt-row,
.rlab-iwt-item,
.rlab-iwt-item-inner {
  box-sizing: border-box;
}

.rlab-iwt-main,
.rlab-iwt-inner {
  width: 100%;
}

.rlab-iwt-row {
  --rlab-iwt-gap: 16px;
  display: flex;
  gap: var(--rlab-iwt-gap);
  align-items: stretch;
  width: 100%;
}

.rlab-iwt-item {
  display: flex;
  min-width: 0;
}

.rlab-iwt-item-inner {
  width: 100%;
  padding: 16px;
  background: #2e2d3a;
}

.rlab-iwt-icon-wrap {
  margin-bottom: 10px;
  flex: 0 0 auto;
}

.rlab-iwt-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: block;
}

.rlab-iwt-text-wrap h4 {
  margin: 0 0 4px;
}

.rlab-iwt-text-wrap p {
  margin: 0;
  font-size: 14px;
}`;
}

function getLeftLayoutCss() {
  return `/* LEFT LAYOUT */
.rlab-iwt-layout-left .rlab-iwt-item-inner {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rlab-iwt-layout-left .rlab-iwt-icon-wrap {
  margin-bottom: 0;
}`;
}

function getScrollCss(selector, important = false) {
  const suffix = important ? " !important" : "";

  return `${selector} {
  flex-wrap: nowrap${suffix};
  overflow-x: auto${suffix};
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  padding-bottom: 2px;
  padding-right: var(--rlab-iwt-gap);
}

${selector} .rlab-iwt-item {
  flex-shrink: 0;
  scroll-snap-align: start;
}`;
}

function getDesktopCss(count, behavior) {
  const selector = `.rlab-iwt-row.rlab-iwt-desktop-${behavior}`;
  const flex = getFlexValue("desktop", behavior, count);

  if (behavior === "scroll") {
    return `/* DESKTOP SCROLL */
${getScrollCss(selector)}

${selector}.rlab-iwt-count-${count} .rlab-iwt-item {
  flex: ${flex};
}`;
  }

  return `/* DESKTOP WRAP */
${selector} {
  flex-wrap: wrap;
  overflow-x: visible;
}

${selector}.rlab-iwt-count-${count} .rlab-iwt-item {
  flex: ${flex};
}`;
}

function getTabletCss(count, behavior) {
  const selector = `.rlab-iwt-row.rlab-iwt-tablet-${behavior}`;
  const flex = getFlexValue("tablet", behavior, count);

  if (behavior === "scroll") {
    return `/* TABLET SCROLL */
@media only screen and (max-width: 1024px) {
  ${indentCss(getScrollCss(selector, true))}

  ${selector}.rlab-iwt-count-${count} .rlab-iwt-item {
    flex: ${flex};
  }
}`;
  }

  return `/* TABLET WRAP */
@media only screen and (max-width: 1024px) {
  ${selector} {
    flex-wrap: wrap !important;
    overflow-x: visible !important;
  }

  ${selector}.rlab-iwt-count-${count} .rlab-iwt-item {
    flex: ${flex};
  }
}`;
}

function getMobileCss(count, behavior) {
  const selector = `.rlab-iwt-row.rlab-iwt-mobile-${behavior}`;
  const flex = getFlexValue("mobile", behavior, count);

  if (behavior === "scroll") {
    return `/* MOBILE SCROLL */
@media only screen and (max-width: 767px) {
  ${indentCss(getScrollCss(selector, true))}

  ${selector}.rlab-iwt-count-${count} .rlab-iwt-item {
    flex: ${flex};
  }
}`;
  }

  return `/* MOBILE WRAP */
@media only screen and (max-width: 767px) {
  ${selector} {
    flex-wrap: wrap !important;
    overflow-x: visible !important;
  }

  ${selector}.rlab-iwt-count-${count} .rlab-iwt-item {
    flex: ${flex};
  }
}`;
}

function indentCss(css) {
  return css.replace(/\n/g, "\n  ");
}

function getFlexValue(device, behavior, count) {
  if (device === "desktop" && behavior === "wrap") {
    if (count === 1) return "0 0 100%";
    if (count === 2) return "0 0 calc((100% - var(--rlab-iwt-gap)) / 2)";
    return `0 0 calc((100% - (var(--rlab-iwt-gap) * ${count - 1})) / ${count})`;
  }

  if (device === "desktop" && behavior === "scroll") {
    if (count === 1) return "0 0 100%";
    if (count === 2) return "0 0 calc((100% - var(--rlab-iwt-gap)) / 1.5)";
    if (count === 3)
      return "0 0 calc((100% - (var(--rlab-iwt-gap) * 2)) / 2.5)";
    return "0 0 calc((100% - (var(--rlab-iwt-gap) * 3)) / 3.5)";
  }

  if (device === "tablet" && behavior === "wrap") {
    if (count === 1) return "0 0 100%";
    if (count === 2) return "0 0 calc((100% - var(--rlab-iwt-gap)) / 2)";
    if (count === 3) return "0 0 calc((100% - (var(--rlab-iwt-gap) * 2)) / 3)";
    return "0 0 calc((100% - var(--rlab-iwt-gap)) / 2)";
  }

  if (device === "tablet" && behavior === "scroll") {
    if (count === 1) return "0 0 100%";
    if (count === 2) return "0 0 calc((100% - var(--rlab-iwt-gap)) / 1.5)";
    return "0 0 calc((100% - (var(--rlab-iwt-gap) * 2)) / 2.5)";
  }

  if (device === "mobile" && behavior === "wrap") {
    if (count === 1) return "0 0 100%";
    if (count === 2) return "0 0 calc((100% - var(--rlab-iwt-gap)) / 2)";
    return "0 0 calc((100% - var(--rlab-iwt-gap)) / 2)";
  }

  if (count === 1) return "0 0 100%";

  return "0 0 calc((100% - var(--rlab-iwt-gap)) / 1.5)";
}

function buildOutput() {
  const cssParts = [getGeneratedCss(), getRadiusCss()].filter(Boolean);

  return `<style>
${cssParts.join("\n\n")}
</style>

${buildSectionHtml()}`;
}

function updatePreview() {
  previewCont.innerHTML = buildSectionHtml();
  iwtPreviewStyle.textContent = [getGeneratedCss(), getRadiusCss()]
    .filter(Boolean)
    .join("\n\n");
}

function updateOutput() {
  iwtOutput.textContent = buildOutput();
}

function generateIwt() {
  updatePreview();
  updateOutput();
}

[
  iwtLayout,
  iwtCount,
  iwtDesktopBehavior,
  iwtTabletBehavior,
  iwtMobileBehavior,
  iwtRadius,
].forEach((el) => {
  el.addEventListener("input", generateIwt);
  el.addEventListener("change", generateIwt);
});

copyBtn.addEventListener("click", async () => {
  generateIwt();

  try {
    await navigator.clipboard.writeText(iwtOutput.textContent);
    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy Code";
    }, 1200);
  } catch {
    copyBtn.textContent = "Copy Failed";

    setTimeout(() => {
      copyBtn.textContent = "Copy Code";
    }, 1200);
  }
});

generateIwt();
