const tipStyle = document.getElementById("tip-style");
const tipRadius = document.getElementById("tip-radius");
const tipPosition = document.getElementById("tip-position");
const tipAlign = document.getElementById("tip-align");

const tipOutput = document.getElementById("tipOutput");
const previewCont = document.getElementById("tipPreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

let tipPreviewStyle = document.getElementById("tip-preview-style");

if (!tipPreviewStyle) {
  tipPreviewStyle = document.createElement("style");
  tipPreviewStyle.id = "tip-preview-style";
  document.head.appendChild(tipPreviewStyle);
}

function normalizeRadiusValue(value) {
  const normalized = String(value).trim().toLowerCase();

  return ["0", "2", "4", "10", "full"].includes(normalized) ? normalized : "0";
}

function getRadiusClass(value) {
  const radius = String(value || "").trim();

  if (!radius) return "";

  if (!radius.includes(",")) {
    return `rdc-br-${normalizeRadiusValue(radius)}`;
  }

  const parts = radius.split(",").map((part) => part.trim());
  const corners = ["tl", "tr", "br", "bl"];

  return corners
    .map(
      (corner, index) =>
        `rdc-br-${corner}-${normalizeRadiusValue(parts[index] || "0")}`,
    )
    .join(" ");
}

function getMainClasses() {
  return [
    "rlab-tip-main",
    `rlab-tip-style-${tipStyle.value}`,
    `rlab-tip-pos-${tipPosition.value}`,
    `rlab-tip-align-${tipAlign.value}`,
  ].join(" ");
}

function getBubbleClasses() {
  return ["rlab-tip-bubble", getRadiusClass(tipRadius.value)]
    .filter(Boolean)
    .join(" ");
}

function getTooltipInnerHtml() {
  return `<span class="rlab-tip-text">Tool Tip</span>

<button
  class="rlab-tip-trigger rdc-br-full"
  type="button"
  aria-label="Show tooltip"
>
  i
</button>

<div class="${getBubbleClasses()}" role="tooltip">
  <div class="rlab-tip-bubble-inner">
    A helpful tool that gives quick extra info.
  </div>
</div>`;
}

function getTooltipHtml() {
  return `<div class="${getMainClasses()}">
  ${getTooltipInnerHtml()}
</div>`;
}

function getRadiusCssForClass(className) {
  const radiusMap = {
    0: "0",
    2: "2px",
    4: "4px",
    10: "10px",
    full: "9999px",
  };

  const singleMatch = className.match(/^rdc-br-(0|2|4|10|full)$/);

  if (singleMatch) {
    return `.${className} { border-radius: ${radiusMap[singleMatch[1]]}; }`;
  }

  const cornerMatch = className.match(/^rdc-br-(tl|tr|br|bl)-(0|2|4|10|full)$/);

  if (!cornerMatch) return "";

  const cornerMap = {
    tl: "border-top-left-radius",
    tr: "border-top-right-radius",
    br: "border-bottom-right-radius",
    bl: "border-bottom-left-radius",
  };

  return `.${className} { ${cornerMap[cornerMatch[1]]}: ${
    radiusMap[cornerMatch[2]]
  }; }`;
}

function getSelectedRadiusCss() {
  const radiusClasses = ["rdc-br-full", getRadiusClass(tipRadius.value)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean);

  return [...new Set(radiusClasses)]
    .map(getRadiusCssForClass)
    .filter(Boolean)
    .join("\n");
}

function getBaseCss() {
  return `* {
  box-sizing: border-box;
}

.rlab-tip-main {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.rlab-tip-trigger {
  width: 16px;
  height: 16px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 2px;
  background-color: #72bfb5;
  font-weight: 600;
  border: unset;
}

.rlab-tip-bubble {
  position: absolute;
  min-width: 180px;
  padding: 8px 10px;
  background: #bdd4cd;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.2s ease;
  z-index: 5;
}

.rlab-tip-bubble-inner {
  color: #000000;
  font-size: 12px;
  font-weight: 400;
}

.rlab-tip-main:hover .rlab-tip-bubble,
.rlab-tip-main:focus-within .rlab-tip-bubble {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}`;
}

function getPositionCss() {
  if (tipPosition.value === "bottom") {
    return `.rlab-tip-pos-bottom .rlab-tip-bubble {
  top: 100%;
  margin-top: 8px;
}`;
  }

  return `.rlab-tip-pos-top .rlab-tip-bubble {
  bottom: 100%;
  margin-bottom: 8px;
}`;
}

function getAlignmentCss() {
  if (tipAlign.value === "left") {
    return `.rlab-tip-align-left .rlab-tip-bubble {
  left: -200%;
}`;
  }

  if (tipAlign.value === "right") {
    return `.rlab-tip-align-right .rlab-tip-bubble {
  right: -200%;
}`;
  }

  return `.rlab-tip-align-center .rlab-tip-bubble {
  left: 50%;
  transform: translateX(-50%);
}`;
}

function getStyleCss() {
  if (tipStyle.value === "classic") {
    return `.rlab-tip-style-classic .rlab-tip-bubble {
  background: #bdd4cd;
  max-width: 180px;
}

.rlab-tip-style-classic .rlab-tip-bubble::after {
  display: none;
}`;
  }

  const arrowPosition =
    tipPosition.value === "bottom"
      ? `.rlab-tip-style-bubble.rlab-tip-pos-bottom .rlab-tip-bubble::after {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-color: transparent transparent #bdd4cd transparent;
}`
      : `.rlab-tip-style-bubble.rlab-tip-pos-top .rlab-tip-bubble::after {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-color: #bdd4cd transparent transparent transparent;
}`;

  return `.rlab-tip-style-bubble .rlab-tip-bubble::after {
  content: "";
  position: absolute;
  border-width: 6px;
  border-style: solid;
}

${arrowPosition}`;
}

function getGeneratedCss({ includePreview = false } = {}) {
  const previewCss = includePreview
    ? `.rlab-tip-preview-wrap {
  padding: 40px;
  display: flex;
  justify-content: center;
}`
    : "";

  return [
    previewCss,
    getBaseCss(),
    getPositionCss(),
    getAlignmentCss(),
    getStyleCss(),
    getSelectedRadiusCss(),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function buildPreviewHtml() {
  return `<div class="rlab-tip-preview-wrap">
  ${getTooltipHtml()}
</div>`;
}

function buildOutput() {
  return `<style>
${getGeneratedCss()}
</style>

${getTooltipHtml()}`;
}

function generateTip() {
  previewCont.innerHTML = buildPreviewHtml();
  tipPreviewStyle.textContent = getGeneratedCss({ includePreview: true });
  tipOutput.textContent = buildOutput();
}

[tipStyle, tipRadius, tipPosition, tipAlign].forEach((element) => {
  element.addEventListener("input", generateTip);
  element.addEventListener("change", generateTip);
});

copyBtn.addEventListener("click", async () => {
  generateTip();

  try {
    await navigator.clipboard.writeText(tipOutput.textContent);
    copyBtn.textContent = "Copied!";
  } catch {
    copyBtn.textContent = "Copy Failed";
  }

  setTimeout(() => {
    copyBtn.textContent = "Copy Code";
  }, 1200);
});

generateTip();
