const modalSide = document.getElementById("modal-side");
const modalAlign = document.getElementById("modal-align");
const modalTrigger = document.getElementById("modal-trigger");
const modalRadius = document.getElementById("modal-radius");
const modalWidth = document.getElementById("modal-width");
const modalSpacingDesktop = document.getElementById("modal-spacing-desktop");
const modalSpacingTablet = document.getElementById("modal-spacing-tablet");
const modalSpacingMobile = document.getElementById("modal-spacing-mobile");

const modalOutput = document.getElementById("modalOutput");
const previewCont = document.getElementById("modalPreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

let modalPreviewStyle = document.getElementById("modal-preview-style");

if (!modalPreviewStyle) {
  modalPreviewStyle = document.createElement("style");
  modalPreviewStyle.id = "modal-preview-style";
  document.head.appendChild(modalPreviewStyle);
}

function getValueOrPlaceholder(el) {
  return el.value || el.placeholder || "";
}

function normalizeRadiusValue(value) {
  const v = String(value).trim().toLowerCase();
  if (["0", "2", "4", "10", "full"].includes(v)) return v;
  return "0";
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
    .map(
      (corner, i) =>
        `rdc-br-${corner}-${normalizeRadiusValue(parts[i] || "0")}`,
    )
    .join(" ");
}

function getModalMainClasses() {
  const classes = ["rlab-modal-main", `rlab-modal-side-${modalSide.value}`];
  const radiusClass = getRadiusClass(modalRadius.value);

  if (radiusClass) {
    classes.push(radiusClass);
  }

  return classes.join(" ");
}

function getOverlayClasses() {
  return `rlab-modal-overlay rlab-modal-align-${modalAlign.value}`;
}

function getMaxWidthStyle() {
  const width = getValueOrPlaceholder(modalWidth).trim();
  if (!width) return "";

  const numeric = parseFloat(width);

  if (!isNaN(numeric) && /^[\d.]+$/.test(width)) {
    return `max-width: ${Math.max(250, numeric)}px;`;
  }

  if (!isNaN(numeric) && width.endsWith("px")) {
    return `max-width: ${Math.max(250, numeric)}px;`;
  }

  return `max-width: ${width};`;
}

function getSpacingStyleVars() {
  const desktop = getValueOrPlaceholder(modalSpacingDesktop).trim() || "0";
  const tablet = getValueOrPlaceholder(modalSpacingTablet).trim() || desktop;
  const mobile = getValueOrPlaceholder(modalSpacingMobile).trim() || tablet;

  return `--rlab-modal-spacing-desktop: ${desktop}; --rlab-modal-spacing-tablet: ${tablet}; --rlab-modal-spacing-mobile: ${mobile};`;
}

function shouldShowTriggerButton() {
  return modalTrigger?.value === "show";
}

function getModalTriggerCss() {
  if (!shouldShowTriggerButton()) return "";

  return `.rlab-modal-open {
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-color: #33734f;
  border: unset;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}`;
}

function getModalBaseCss() {
  return `.rlab-modal-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  --rlab-modal-spacing-desktop: 0;
  --rlab-modal-spacing-tablet: var(--rlab-modal-spacing-desktop);
  --rlab-modal-spacing-mobile: var(--rlab-modal-spacing-tablet);
  padding: var(--rlab-modal-spacing-desktop);
}

.rlab-modal-overlay.is-hidden {
  display: none;
}

.rlab-modal-backdrop {
  position: absolute;
  inset: 0;
}

.rlab-modal-main {
  position: relative;
  z-index: 2;
  width: 100%;
  background: #cfdcd6;
}

.rlab-modal-inner {
  padding: 20px;
}

.rlab-modal-inner p {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.rlab-modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: unset;
  font-size: 15px;
}`;
}

function getModalPreviewCss() {
  return `.rlab-modal-preview-stage {
  position: relative;
  min-height: 420px;
  padding: 20px;
  background: #2e292d;
  overflow: hidden;
}

.rlab-modal-preview-open {
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-color: #33734f;
  border: unset;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}`;
}

function getModalSideCss() {
  const side = modalSide.value || "center";

  return `.rlab-modal-side-${side} {
  align-self: ${getModalSideAlignSelf(side)};
}`;
}

function getModalSideAlignSelf(side) {
  if (side === "top") return "flex-start";
  if (side === "bottom") return "flex-end";

  return "center";
}

function getModalAlignCss() {
  const align = modalAlign.value || "center";

  return `.rlab-modal-align-${align} {
  justify-content: ${getModalJustifyContent(align)};
}`;
}

function getModalJustifyContent(align) {
  if (align === "left") return "flex-start";
  if (align === "right") return "flex-end";

  return "center";
}

function getModalSpacingCss() {
  return `@media only screen and (max-width: 1024px) {
  .rlab-modal-overlay {
    padding: var(--rlab-modal-spacing-tablet);
  }
}

@media only screen and (max-width: 767px) {
  .rlab-modal-overlay {
    padding: var(--rlab-modal-spacing-mobile);
  }
}`;
}

function getModalRadiusCss() {
  const radiusClass = getRadiusClass(modalRadius.value);

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
  return [
    getModalBaseCss(),
    getModalSideCss(),
    getModalAlignCss(),
    getModalSpacingCss(),
    getModalRadiusCss(),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function getModalInnerHtml() {
  return `<button class="rlab-modal-close" type="button" aria-label="Close modal">✕</button>
<div class="rlab-modal-inner">
  <p>Modal Content</p>
</div>`;
}

function getModalScript() {
  return `<script>
(function () {
  const openBtn = document.querySelector(".rlab-modal-open");
  const overlay = document.querySelector(".rlab-modal-overlay");
  const closeBtn = overlay ? overlay.querySelector(".rlab-modal-close") : null;
  const backdrop = overlay ? overlay.querySelector(".rlab-modal-backdrop") : null;

  if (openBtn && overlay) {
    openBtn.addEventListener("click", function () {
      overlay.classList.remove("is-hidden");
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", function () {
      overlay.classList.add("is-hidden");
    });
  }

  if (backdrop && overlay) {
    backdrop.addEventListener("click", function () {
      overlay.classList.add("is-hidden");
    });
  }
})();
<\/script>`;
}

function buildPreviewHtml() {
  const triggerButton = shouldShowTriggerButton()
    ? `  <button class="rlab-modal-preview-open" type="button">Open Modal</button>\n\n`
    : "";
  const hiddenClass = shouldShowTriggerButton() ? " is-hidden" : "";

  return `<div class="rlab-modal-preview-stage">
${triggerButton}  <div class="${getOverlayClasses()}${hiddenClass}" style="${getSpacingStyleVars()}">
    <div class="rlab-modal-backdrop"></div>

    <div class="${getModalMainClasses()}" style="${getMaxWidthStyle()}">
      ${getModalInnerHtml()}
    </div>
  </div>
</div>`;
}

function buildOutput() {
  const triggerButton = shouldShowTriggerButton()
    ? `\n<button class="rlab-modal-open" type="button">Open Modal</button>\n`
    : "";

  return `<style>
${[getModalTriggerCss(), getGeneratedCss()].filter(Boolean).join("\n\n")}
</style>
${triggerButton}

<div class="${getOverlayClasses()} is-hidden" style="${getSpacingStyleVars()}">
  <div class="rlab-modal-backdrop"></div>

  <div class="${getModalMainClasses()}" style="${getMaxWidthStyle()}">
    ${getModalInnerHtml()}
  </div>
</div>

${getModalScript()}`;
}

function bindPreviewEvents() {
  const openBtn = previewCont.querySelector(".rlab-modal-preview-open");
  const overlay = previewCont.querySelector(".rlab-modal-overlay");
  const closeBtn = previewCont.querySelector(".rlab-modal-close");
  const backdrop = previewCont.querySelector(".rlab-modal-backdrop");

  if (openBtn && overlay) {
    openBtn.addEventListener("click", () => {
      overlay.classList.remove("is-hidden");
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.add("is-hidden");
    });
  }

  if (backdrop && overlay) {
    backdrop.addEventListener("click", () => {
      overlay.classList.add("is-hidden");
    });
  }
}

function updatePreview() {
  modalPreviewStyle.textContent = [
    getModalPreviewCss(),
    getGeneratedCss(),
  ].join("\n\n");
  previewCont.innerHTML = buildPreviewHtml();
  bindPreviewEvents();
}

function updateOutput() {
  modalOutput.textContent = buildOutput();
}

function generateModal() {
  updatePreview();
  updateOutput();
}

[
  modalSide,
  modalAlign,
  modalTrigger,
  modalRadius,
  modalWidth,
  modalSpacingDesktop,
  modalSpacingTablet,
  modalSpacingMobile,
].forEach((el) => {
  el.addEventListener("input", generateModal);
  el.addEventListener("change", generateModal);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(modalOutput.textContent);
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

generateModal();
