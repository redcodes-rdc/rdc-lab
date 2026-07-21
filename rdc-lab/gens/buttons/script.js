const btnType = document.getElementById("btn-type");
const btnText = document.getElementById("btn-text");
const btnStyle = document.getElementById("btn-style");
const btnCustomType = document.getElementById("btn-custom-type");
const btnCustomColor = document.getElementById("btn-custom-color");
const btnCustomTextColor = document.getElementById("btn-custom-text-color");
const btnCustomHoverColor = document.getElementById("btn-custom-hover-color");
const btnCustomHoverTextColor = document.getElementById(
  "btn-custom-hover-text-color",
);
const btnRadius = document.getElementById("btn-radius");
const btnSize = document.getElementById("btn-size");

const btnOutput = document.getElementById("btnOutput");
const copyBtn = document.getElementById("rdcl-copy-btn");
const previewCont = document.querySelector(".rdcl-gen--layout-vw-inner");

const buttonCssBlocks = {
  1: '.rlab-btn-style1 {\n  padding: 12px 30px;\n  border-radius: 6px;\n  background-color: #0363e4;\n  color: #fff;\n  position: relative;\n  align-items: center;\n  gap: 10px;\n  font-weight: 400;\n  font-size: 14px;\n}\n.rlab-btn-style1::after {\n  content: "";\n  width: 16px;\n  height: 16px;\n  flex: 0 0 16px;\n  background-image: url("/gens/buttons/assets/rlab-button-arrow.svg");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: transform 0.3s;\n}\n.rlab-btn-style1:hover::after {\n  transform: translateX(5px);\n}\n.rlab-btn-style1:hover {\n  background-color: #0257c6;\n}',
  2: '.rlab-btn-style2 {\n  padding: 14px 40px;\n  border-radius: 100px;\n  color: #fff;\n  background-image: linear-gradient(to top right, #5939ed, #e3429a);\n}\n.rlab-btn-style2::after {\n  content: "";\n  width: 16px;\n  height: 16px;\n  background-image: url("/gens/buttons/assets/rdc-lab-buttons-spark-icon.svg");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-left: 10px;\n}\n.rlab-btn-style2:hover::after {\n  animation: sparkSize 3s linear infinite;\n}\n@keyframes sparkSize {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.5;\n  }\n  70% {\n    scale: 1;\n  }\n  100% {\n    scale: 1;\n  }\n}',
  3: '.rlab-btn-style3 {\n  position: relative;\n  isolation: isolate;\n  background-color: transparent;\n  padding: 20px 38px;\n  align-items: center;\n  gap: 8px;\n}\n.rlab-btn-style3::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: url("/gens/buttons/assets/button-abstract-bg.svg");\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: all 0.1s linear;\n  z-index: -1;\n}\n.rlab-btn-style3:hover::before {\n  background-image: url("/gens/buttons/assets/button-abstract-bg-hover.svg");\n}\n.rlab-btn-style3 span {\n  color: #000;\n  font-weight: 500;\n}\n.rlab-btn-style3::after {\n  content: "🎉";\n  flex: 0 0 auto;\n  font-size: 17px;\n  line-height: 1;\n  transition: transform 0.3s;\n}\n.rlab-btn-style3:hover::after {\n  transform: scale(1.45) rotate(-8deg);\n}',
  4: '.rlab-btn-style4 {\n  position: relative;\n  padding: 14px 40px;\n  border-radius: 10px;\n  background: transparent;\n  border: none;\n  z-index: 1;\n  text-transform: uppercase;\n}\n.rlab-btn-style4 span {\n  color: #86e7ff;\n}\n.rlab-btn-style4::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  padding: 1px;\n\n  background: linear-gradient(90deg, #23c7f0, #2d5aad, #23c7f0);\n  background-size: 140% 100%;\n  background-position: 0% 0%;\n\n  -webkit-mask:\n    linear-gradient(#fff 0 0) content-box,\n    linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n\n  pointer-events: none;\n  transition: background-position 0.3s ease;\n}\n\n.rlab-btn-style4:hover::before {\n  background-position: -200% 0%;\n}',
  5: ".rlab-btn-style5 {\n  padding: 14px 40px;\n  border-radius: 10px;\n  background: transparent;\n  outline: 1px solid #fff;\n  min-height: 45px;\n  display: flex;\n  align-items: center;\n}\n.rlab-btn-style5,\n.rlab-btn-style5 span {\n  transition: all 0.3s;\n}\n.rlab-btn-style5:hover {\n  padding: 14px 45px;\n  outline-color: transparent;\n}\n.rlab-btn-style5:hover span {\n  font-size: 12px;\n}",
  6: '.rlab-btn-style6 {\n  padding: 14px 40px;\n  border-radius: 5px;\n  background: transparent;\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.rlab-btn-style6 span {\n  z-index: 1;\n}\n.rlab-btn-style6::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  background-image: url("assets/rdc-lab-button-arrow-bg-red.svg");\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  z-index: 0;\n  transition: all 0.3s;\n}\n.rlab-btn-style6:hover {\n  outline: 1px solid #fff;\n}\n.rlab-btn-style6:hover::before {\n  margin-left: 200%;\n}',
  7: '.rlab-btn-style7 {\n  padding: 14px 30px;\n  border-radius: 5px;\n  background: transparent;\n  border: 1px solid #5ee0dd;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.rlab-btn-style7:hover {\n  outline: 1px solid #5ee0dd;\n}\n.rlab-btn-style7 span {\n  color: #5ee0dd;\n}\n.rlab-btn-style7::after {\n  content: "";\n  width: 18px;\n  height: 18px;\n  flex: 0 0 18px;\n  background-image: url("assets/rdc-lab-button-lightning-icon.svg");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n.rlab-btn-style7:hover::after {\n  animation: lightningShake 1s infinite;\n}\n@keyframes lightningShake {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(-2px, 1px) scale(1.1);\n  }\n  50% {\n    transform: translate(2px, -1px) scale(1.3);\n  }\n  75% {\n    transform: translate(-1px, 2px) scale(1.05);\n  }\n}',
  8: '.rlab-btn-style8 {\n  padding: 14px 36px;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  isolation: isolate;\n  min-width: 180px;\n  min-height: 60px;\n}\n.rlab-btn-style8 span {\n  text-transform: uppercase;\n  font-style: italic;\n  z-index: 1;\n  font-weight: 900;\n  color: #000;\n}\n.rlab-btn-style8::before,\n.rlab-btn-style8::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n  transition: all 0.3s;\n}\n.rlab-btn-style8::before {\n  background-image: url("assets/rdc-lab-button-kpow-bg.svg");\n  z-index: -2;\n}\n.rlab-btn-style8::after {\n  background-image: url("assets/rdc-lab-button-kpow-bg-eff.svg");\n  z-index: -1;\n}\n.rlab-btn-style8:hover::before {\n  scale: 1.08;\n}\n.rlab-btn-style8:hover::after {\n  scale: 0.3;\n  opacity: 0;\n  rotate: 360deg;\n}',
  9: ".rlab-btn-style9 {\n  padding: 14px 40px 14px 40px;\n  background-color: #588e58;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-radius: 6px;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n.rlab-btn-style9 span {\n  color: #ffffff;\n  z-index: 1;\n  font-weight: 400;\n}\n.rlab-btn-style9:hover {\n  background-color: #3f633f;\n}",
  10: '.rlab-btn-style10 {\n  padding: 14px 40px;\n  background-color: transparent;\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.rlab-btn-style10 span {\n  z-index: 1;\n  font-weight: 500;\n  letter-spacing: 2px;\n  font-size: 12px;\n}\n.rlab-btn-style10::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: url("assets/rdc-lab-button-game-bg.svg");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n  z-index: -1;\n}\n.rlab-btn-style10:hover::before {\n  scale: 0.95;\n}',
  11: '.rlab-btn-style11 {\n  padding: 15px 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  position: relative;\n  isolation: isolate;\n  text-transform: uppercase;\n}\n.rlab-btn-style11 span {\n  z-index: 1;\n}\n.rlab-btn-style11::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: url("assets/rdc-lab-button-dashed-bg.svg");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n  z-index: -1;\n}\n.rlab-btn-style11:hover::before {\n  background-image: url("assets/rdc-lab-button-dashed-bg-2.svg");\n}',
  12: ".rlab-btn-style12 {\n  background-color: transparent;\n}\n\n.rlab-btn-style12 span {\n  color: #5384dd;\n  line-height: 1.5;\n}\n.rlab-btn-style12 span:hover {\n  border-bottom: 1px solid #5384dd;\n}",
  13: '.rlab-btn-style13 {\n  background-color: transparent; \n  position: relative;\n  padding: 0;\n}\n\n.rlab-btn-style13 span {\n  color: #fff;\n  line-height: 1.5;\n}\n.rlab-btn-style13::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-bottom: 1px solid #fff;\n  transition: all 0.3s;\n  left: 0;\n}\n.rlab-btn-style13:hover::before {\n  width: 0%;\n}',
  14: '.rlab-btn-style14 {\n  background-color: transparent; \n  position: relative;\n  padding: 0;\n  text-transform: uppercase;\n}\n\n.rlab-btn-style14 span {\n  color: #fff;\n  line-height: 1.5;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n  font-size: 13px;\n}\n.rlab-btn-style14:hover span {\n  letter-spacing: 5px;\n}\n.rlab-btn-style14::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-bottom: 1px solid #fff;\n  left: 0;\n}',
  15: '.rlab-btn-style15 {\n  background-color: transparent; \n  position: relative;\n  padding: 0;\n  text-transform: uppercase;\n}\n\n.rlab-btn-style15 span {\n  color: #fff;\n  line-height: 1.5;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n  font-size: 13px;\n}\n.rlab-btn-style15:hover span {\n  line-height: 1.8;\n}\n\n.rlab-btn-style15::before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-bottom: 1px dashed #fff;\n}\n.rlab-btn-style15:hover::before {\n  border-bottom: 1px solid #fff;\n}',
  base: ".rlab-btn-main {\n  margin-inline: auto;\n  display: flex;\n  border: unset;\n  cursor: pointer;\n  text-decoration: unset;\n  justify-content: center;\n}",
};

const buttonContent = {
  text: "Button Text",
  innerClass: "rlab-btn-text",
  id: "btnPreview",
  baseClass: "rlab-btn-main",
  customClass: "rlab-btn-custom",
};

function isCustomStyle() {
  return btnStyle.value === "custom";
}

function getButtonText() {
  return btnText.value.trim() || buttonContent.text;
}

function getRadiusClass(value) {
  const raw = (value || "").trim();

  if (!raw) return "";

  if (!raw.includes(",")) {
    return getSingleRadiusClass(raw);
  }

  const parts = raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!parts.length) return "";

  const corners = ["tl", "tr", "br", "bl"];
  const classes = [];

  for (let i = 0; i < 4; i++) {
    const part = parts[i] || "0";
    classes.push(`rdc-br-${corners[i]}-${normalizeRadiusValue(part)}`);
  }

  return classes.join(" ");
}

function getSingleRadiusClass(value) {
  return `rdc-br-${normalizeRadiusValue(value)}`;
}

function normalizeRadiusValue(value) {
  const cleaned = String(value).trim().toLowerCase();

  if (["0", "2", "4", "10", "full"].includes(cleaned)) {
    return cleaned;
  }

  return "0";
}

function getSizeClass(value) {
  return value === "full" ? "rdc-w-full" : "rdc-w-fit";
}

function getTypeTag(value) {
  return value === "link" ? "a" : "button";
}

function getTypeAttributes(value, includePreviewId = false) {
  const attributes = [];

  if (value === "link") {
    attributes.push('href="#"');
  } else {
    attributes.push('type="button"');
  }

  if (includePreviewId && buttonContent.id) {
    attributes.push(`id="${buttonContent.id}"`);
  }

  return attributes.join(" ");
}

function getButtonClasses() {
  const classes = [buttonContent.baseClass];

  if (isCustomStyle()) {
    classes.push(buttonContent.customClass);
  } else {
    classes.push(`rlab-btn-style${btnStyle.value}`);
  }

  classes.push(getSizeClass(btnSize.value));

  const radiusClass = getRadiusClass(btnRadius.value);

  if (radiusClass) {
    classes.push(radiusClass);
  }

  return classes.filter(Boolean).join(" ");
}

function getButtonInnerHtml() {
  return `<span class="${buttonContent.innerClass}">${escapeHtml(getButtonText())}</span>`;
}

function buildButtonHtml(includePreviewId = false) {
  const tag = getTypeTag(btnType.value);
  const attrs = getTypeAttributes(btnType.value, includePreviewId);
  const classes = getButtonClasses();

  return `<${tag} ${attrs} class="${classes}">${getButtonInnerHtml()}</${tag}>`;
}

function buildPreviewHtml() {
  return `<div class="rlab-btn-preview-wrap">
  ${buildButtonHtml(true)}
</div>`;
}

function buildOutput() {
  return [getGeneratedCss(), "", buildButtonHtml(false)].join("\n");
}

function getGeneratedCss() {
  return `<style>
${getGeneratedCssBody()}
</style>`;
}

function getGeneratedCssBody() {
  return [
    getBaseButtonCss(),
    getSelectedStyleCss(),
    getSizeCss(),
    getRadiusCss(),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function getBaseButtonCss() {
  return buttonCssBlocks.base;
}

function getSelectedStyleCss() {
  if (isCustomStyle()) {
    return getCustomButtonCss();
  }

  return buttonCssBlocks[btnStyle.value] || "";
}

function getCustomButtonCss() {
  const customType = btnCustomType.value;
  const color = normalizeColor(btnCustomColor.value, "#ffffff");
  const textColor = normalizeColor(btnCustomTextColor.value, "#111111");
  const hoverColor = normalizeColor(btnCustomHoverColor.value, "#f2f2f2");
  const hoverTextColor = normalizeColor(
    btnCustomHoverTextColor?.value,
    textColor,
  );

  if (customType === "outline") {
    return `.rlab-btn-custom {
  padding: 14px 40px;
  border: 1px solid ${color};
  background-color: transparent;
  color: ${textColor};
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
}

.rlab-btn-custom span {
  color: inherit;
}

.rlab-btn-custom:hover {
  border-color: ${hoverColor};
  background-color: transparent;
  color: ${hoverTextColor};
}

.rlab-btn-custom:hover span {
  color: inherit;
}`;
  }

  return `.rlab-btn-custom {
  padding: 14px 40px;
  border: 1px solid ${color};
  background-color: ${color};
  color: ${textColor};
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
}

.rlab-btn-custom span {
  color: inherit;
}

.rlab-btn-custom:hover {
  border-color: ${hoverColor};
  background-color: ${hoverColor};
  color: ${hoverTextColor};
}

.rlab-btn-custom:hover span {
  color: inherit;
}`;
}

function getSizeCss() {
  if (btnSize.value === "full") {
    return `.rdc-w-full {
  width: 100%;
}`;
  }

  return `.rdc-w-fit {
  width: fit-content;
}`;
}

function getRadiusCss() {
  const radiusClass = getRadiusClass(btnRadius.value);

  if (!radiusClass) return "";

  const declarations = {
    "rdc-br-0": "border-radius: 0;",
    "rdc-br-2": "border-radius: 2px;",
    "rdc-br-4": "border-radius: 4px;",
    "rdc-br-10": "border-radius: 10px;",
    "rdc-br-full": "border-radius: 999px;",
    "rdc-br-tl-0": "border-top-left-radius: 0;",
    "rdc-br-tl-2": "border-top-left-radius: 2px;",
    "rdc-br-tl-4": "border-top-left-radius: 4px;",
    "rdc-br-tl-10": "border-top-left-radius: 10px;",
    "rdc-br-tl-full": "border-top-left-radius: 999px;",
    "rdc-br-tr-0": "border-top-right-radius: 0;",
    "rdc-br-tr-2": "border-top-right-radius: 2px;",
    "rdc-br-tr-4": "border-top-right-radius: 4px;",
    "rdc-br-tr-10": "border-top-right-radius: 10px;",
    "rdc-br-tr-full": "border-top-right-radius: 999px;",
    "rdc-br-br-0": "border-bottom-right-radius: 0;",
    "rdc-br-br-2": "border-bottom-right-radius: 2px;",
    "rdc-br-br-4": "border-bottom-right-radius: 4px;",
    "rdc-br-br-10": "border-bottom-right-radius: 10px;",
    "rdc-br-br-full": "border-bottom-right-radius: 999px;",
    "rdc-br-bl-0": "border-bottom-left-radius: 0;",
    "rdc-br-bl-2": "border-bottom-left-radius: 2px;",
    "rdc-br-bl-4": "border-bottom-left-radius: 4px;",
    "rdc-br-bl-10": "border-bottom-left-radius: 10px;",
    "rdc-br-bl-full": "border-bottom-left-radius: 999px;",
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

function normalizeColor(value, fallback) {
  const color = String(value || "").trim();

  if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color)) return color;
  if (/^(rgb|rgba|hsl|hsla)\(/i.test(color)) return color;
  if (/^[a-z]+$/i.test(color)) return color;

  return fallback;
}

function updateCustomFieldState() {
  const disabled = !isCustomStyle();
  [
    btnCustomType,
    btnCustomColor,
    btnCustomTextColor,
    btnCustomHoverColor,
    btnCustomHoverTextColor,
  ].forEach((field) => {
    if (!field) return;
    field.disabled = disabled;
    field.closest(".rdc-d-flex")?.classList.toggle("is-disabled", disabled);
  });
}

function updatePreviewStyles() {
  let style = document.getElementById("btn-preview-style");

  if (!style) {
    style = document.createElement("style");
    style.id = "btn-preview-style";
    document.head.appendChild(style);
  }

  style.textContent = getGeneratedCssBody();
}

function updatePreview() {
  updateCustomFieldState();
  updatePreviewStyles();
  previewCont.innerHTML = buildPreviewHtml();
}

function updateOutput() {
  btnOutput.textContent = buildOutput();
}

function generateButton() {
  updatePreview();
  updateOutput();
}

[
  btnType,
  btnText,
  btnStyle,
  btnCustomType,
  btnCustomColor,
  btnCustomTextColor,
  btnCustomHoverColor,
  btnCustomHoverTextColor,
  btnRadius,
  btnSize,
].forEach((field) => {
  field?.addEventListener("input", generateButton);
  field?.addEventListener("change", generateButton);
});

copyBtn.addEventListener("click", async () => {
  generateButton();

  try {
    await navigator.clipboard.writeText(btnOutput.textContent);
    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy Code";
    }, 1200);
  } catch (error) {
    copyBtn.textContent = "Copy Failed";

    setTimeout(() => {
      copyBtn.textContent = "Copy Code";
    }, 1200);
  }
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

generateButton();
