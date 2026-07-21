const accLayout = document.getElementById("acc-layout");
const accLeftWidth = document.getElementById("acc-left-width");
const accRightWidth = document.getElementById("acc-right-width");
const accStackTab = document.getElementById("acc-stack-tab");
const accLeftWidthTab = document.getElementById("acc-left-width-tab");
const accRightWidthTab = document.getElementById("acc-right-width-tab");
const accStackMob = document.getElementById("acc-stack-mob");
const accEnableImage = document.getElementById("acc-enable-image");
const accImagePosition = document.getElementById("acc-image-position");
const accStyle = document.getElementById("acc-style");
const accIcon = document.getElementById("acc-icon");
const accOpenFirst = document.getElementById("acc-open-first");
const accCloseOthers = document.getElementById("acc-close-others");

const accOutput = document.getElementById("accOutput");
const copyBtn = document.getElementById("rdcl-copy-btn");
const accPreviewMain = document.querySelector(".rlab-acc-main");
const accPreviewRow = document.getElementById("accPreviewRow");
const accPreviewStyle = document.createElement("style");

accPreviewStyle.id = "acc-preview-style";
document.head.appendChild(accPreviewStyle);

const accordionBaseCss =
  '.rlab-acc-main {\n  padding: 4rem 20px;\n}\n.rlab-acc-main button {\n  border: unset;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.rlab-acc-icon {\n  display: flex;\n  align-items: center;\n}\n.rlab-acc-col-inner {\n  padding-inline: 4px;\n}\n.rlab-acc-icon::before {\n  content: "";\n  width: 14px;\n  height: 14px;\n  display: inline-flex;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}';
const accordionStyleCss = {
  1: '/**STYLE 1**/\n.rlab-acc-style1 {\n  background-color: #1a1a1a;\n}\n.rlab-acc-style1 button {\n  background-color: #2c2c2b;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n.rlab-acc-style1 button:hover {\n  background-color: #222222;\n}\n.rlab-acc-style1 button span {\n  font-weight: 500;\n}\n.rlab-acc-style1 .rlab-acc-panel {\n  background-color: #222222;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  margin-bottom: 10px;\n}\n.rlab-acc-style1 .rlab-acc-item.is-open button {\n  background-color: unset;\n}\n.rlab-acc-style1 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.rlab-acc-style1 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon.svg");\n}\n.rlab-acc-style1 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon.svg");\n}',
  2: '/**STYLE 2**/\n.rlab-acc-style2 {\n  background-color: #fff;\n}\n.rlab-acc-style2 button {\n  background-color: #fff;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  border: 1px solid #cfcfcf;\n}\n.rlab-acc-style2 button:hover {\n  background-color: #f4fcf2;\n}\n\n.rlab-acc-style2 button span {\n  font-weight: 500;\n  color: #212121;\n}\n.rlab-acc-style2 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n}\n\n.rlab-acc-style2 .rlab-acc-item.is-open button {\n  background-color: #e8fbe6;\n  outline: 2px solid #cceacd;\n  border: unset;\n  margin-bottom: 0;\n}\n\n.rlab-acc-style2 .rlab-acc-item.is-open {\n  background-color: #f4fcf2;\n  outline: 2px solid #cceacd;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.rlab-acc-style2 .rlab-acc-item p {\n  color: #212121;\n}\n\n.rlab-acc-style2 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n.rlab-acc-style2 .rlab-acc-title {\n  padding-left: 25px;\n}\n\n.rlab-acc-style2 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon-black.svg");\n}\n.rlab-acc-style2 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon-black.svg");\n}\n.rlab-acc-style2 button.rlab-acc-trigger::before {\n  content: "?";\n  background-image: linear-gradient(45deg, #0d7c34, #0b5224);\n  width: 20px;\n  height: 20px;\n  border-radius: 100px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n}',
  3: '/**STYLE 3**/\n.rlab-acc-style3 {\n  background-color: #fff;\n}\n.rlab-acc-style3 .rlab-acc-item {\n  background-color: #f5f2fd;\n}\n.rlab-acc-style3 button {\n  background-color: #f5f2fd;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  outline: 2px solid #c2b8f4;\n  transition: all 0.3s;\n}\n.rlab-acc-style3 button:hover {\n  background-color: #c2b8f4;\n}\n\n.rlab-acc-style3 button span {\n  font-weight: 500;\n  color: #212121;\n}\n.rlab-acc-style3 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n}\n\n.rlab-acc-style3 .rlab-acc-item.is-open button {\n  background-color: #d7cbfc;\n  border: unset;\n  margin-bottom: 0;\n}\n\n.rlab-acc-style3 .rlab-acc-item.is-open {\n  outline: 2px solid #c2b8f4;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.rlab-acc-style3 .rlab-acc-item p {\n  color: #212121;\n}\n\n.rlab-acc-style3 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.rlab-acc-style3 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon-black.svg");\n}\n.rlab-acc-style3 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon-black.svg");\n}',
  4: '/**STYLE 4**/\n.rlab-acc-style4 {\n  background-color: #fff;\n}\n.rlab-acc-style4 .rlab-acc-item {\n  background-color: #f3f6f0;\n  border-radius: 10px;\n}\n.rlab-acc-style4 button {\n  background-color: #eaefe5;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  box-shadow: 3px 3px #585858;\n  position: relative;\n}\n.rlab-acc-style4 button::after {\n  content: "";\n  position: absolute;\n  width: 0%;\n  height: 100%;\n  background-color: #d6e4cd;\n  transition: all 0.5s;\n  left: 0;\n  border-radius: 10px;\n  z-index: 0;\n}\n.rlab-acc-style4 button:hover::after {\n  width: 100%;\n}\n.rlab-acc-style4 button span {\n  font-weight: 500;\n  color: #212121;\n  position: relative;\n  z-index: 1;\n}\n.rlab-acc-style4 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n}\n\n.rlab-acc-style4 .rlab-acc-item.is-open button {\n  border: unset;\n  margin-bottom: 0;\n  box-shadow: unset;\n  background-color: #d2d8cc;\n}\n\n.rlab-acc-style4 .rlab-acc-item.is-open {\n  border-radius: 10px;\n  margin-bottom: 10px;\n  box-shadow: 3px 3px #585858;\n  background-color: #eaefe5;\n}\n.rlab-acc-style4 .rlab-acc-item p {\n  color: #212121;\n}\n\n.rlab-acc-style4 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.rlab-acc-style4 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon-black.svg");\n}\n.rlab-acc-style4 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon-black.svg");\n}',
  5: '/**STYLE 5**/\n.rlab-acc-style5 {\n  background-color: #fff;\n}\n.rlab-acc-style5 .rlab-acc-item {\n  background-color: #deeaf4;\n  border-radius: 10px;\n}\n.rlab-acc-style5 button {\n  background-image: linear-gradient(to top right, #665476, #80a8c9);\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  transition: all 0.3s;\n}\n.rlab-acc-style5 button:hover {\n  /* filter: hue-rotate(320deg); */\n  filter: brightness(0.8);\n}\n\n.rlab-acc-style5 button span {\n  font-weight: 500;\n  color: #fff;\n}\n.rlab-acc-style5 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border: 2px solid #c7cbd0;\n}\n\n.rlab-acc-style5 .rlab-acc-item.is-open button {\n  margin-bottom: 0;\n  border-radius: 10px 10px 0 0;\n}\n\n.rlab-acc-style5 .rlab-acc-item.is-open {\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.rlab-acc-style5 .rlab-acc-item p {\n  color: #212121;\n}\n\n.rlab-acc-style5 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.rlab-acc-style5 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon.svg");\n}\n.rlab-acc-style5 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon.svg");\n}',
  6: '/**STYLE 6**/\n.rlab-acc-style6 {\n  background-color: #fafdff;\n}\n.rlab-acc-style6 button {\n  background-color: #fff;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  border: 1px solid #cfcfcf;\n}\n.rlab-acc-style6 button:hover {\n  background-color: #ebf5fd;\n}\n.rlab-acc-style6 button span {\n  font-weight: 500;\n  color: #212121;\n}\n.rlab-acc-style6 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  margin-bottom: 10px;\n}\n.rlab-acc-style6 .rlab-acc-panel p {\n  color: #212121;\n}\n.rlab-acc-style6 .rlab-acc-item {\n  border-radius: 10px;\n}\n.rlab-acc-style6 .rlab-acc-item.is-open {\n  background-color: #ebf5fd;\n}\n.rlab-acc-style6 .rlab-acc-item.is-open button {\n  background-color: #0363e4;\n  border: unset;\n  margin: 0;\n}\n.rlab-acc-style6 .rlab-acc-item.is-open button span {\n  color: #fff;\n}\n.rlab-acc-style6 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.rlab-acc-style6 .rlab-acc-icon::before,\n.rlab-acc-style6 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  content: "";\n  width: 14px;\n  height: 14px;\n  display: inline-flex;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.rlab-acc-style6 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon-black.svg");\n}\n.rlab-acc-style6 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon.svg");\n}',
  7: '/**STYLE 7**/\n.rlab-acc-style7 {\n  background-color: #fff;\n}\n.rlab-acc-style7 button {\n  background-color: #fff;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  border: 1px solid #cfcfcf;\n}\n.rlab-acc-style7 button:hover {\n  background-color: #fafaf8;\n}\n.rlab-acc-style7 button span {\n  font-weight: 500;\n  color: #212121;\n}\n.rlab-acc-style7 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n}\n\n.rlab-acc-style7 .rlab-acc-item.is-open button {\n  background-color: #fafaf8;\n  outline: 2px solid #ececed;\n  border: unset;\n  border-radius: 10px 10px 0 0;\n  margin-bottom: 0;\n}\n\n.rlab-acc-style7 .rlab-acc-item.is-open {\n  background-color: #fff;\n  outline: 2px solid #ececed;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.rlab-acc-style7 .rlab-acc-item p {\n  color: #212121;\n}\n\n.rlab-acc-style7 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n.rlab-acc-style7 .rlab-acc-title {\n  padding-left: 35px;\n}\n\n.rlab-acc-style7 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon-black.svg");\n}\n.rlab-acc-style7 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon-black.svg");\n}\n\n.rlab-acc-style7 .rlab-acc-col-inner {\n  counter-reset: acc-counter;\n}\n.rlab-acc-style7 button.rlab-acc-trigger::before {\n  counter-increment: acc-counter;\n  content: counter(acc-counter);\n  background-color: #cacbcf;\n  width: 30px;\n  height: 30px;\n  border-radius: 100px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n}\n.rlab-acc-style7 .rlab-acc-item.is-open button.rlab-acc-trigger::before {\n  background-color: #0162f1;\n}',
  8: '/**STYLE 8**/\n.rlab-acc-style8 {\n  background-color: #fff;\n}\n.rlab-acc-style8 button {\n  background-color: #fff;\n  padding: 20px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  border: 1px solid #afafaf;\n}\n.rlab-acc-style8 button:hover {\n  outline: 2px solid #212121;\n  border: 1px solid transparent;\n}\n.rlab-acc-style8 button span {\n  font-weight: 500;\n  color: #212121;\n}\n.rlab-acc-style8 .rlab-acc-panel {\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n}\n.rlab-acc-style8 .rlab-acc-item.is-open .rlab-acc-panel {\n  border-top: 1px solid #afafaf;\n}\n.rlab-acc-style8 .rlab-acc-panel p {\n  color: #212121;\n}\n.rlab-acc-style8 .rlab-acc-item {\n  border-radius: 10px;\n  background-color: #fff;\n}\n.rlab-acc-style8 .rlab-acc-item.is-open {\n  border: 1px solid #afafaf;\n  margin-bottom: 10px;\n}\n.rlab-acc-style8 .rlab-acc-item.is-open button {\n  border: unset;\n  margin: 0;\n}\n\n.rlab-acc-style8 .rlab-acc-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.rlab-acc-style8 .rlab-acc-icon::before,\n.rlab-acc-style8 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  content: "";\n  width: 14px;\n  height: 14px;\n  display: inline-flex;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.rlab-acc-style8 .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-plus-icon-black.svg");\n}\n.rlab-acc-style8 .rlab-acc-item.is-open .rlab-acc-icon::before {\n  background-image: url("assets/rlab-acc-minus-icon-black.svg");\n}',
};

function getAccordionIconCss(iconType) {
  const iconMap = {
    plusminus: { closed: "+", open: "−" },
    "arrow-up-down": { closed: "↓", open: "↑" },
    chevron: { closed: "⌄", open: "⌃" },
    caret: { closed: "▾", open: "▴" },
  };

  const icon = iconMap[iconType] || iconMap.plusminus;

  return `.rlab-acc-icon::before {
  content: "${icon.closed}";
  width: auto;
  height: auto;
  min-width: 14px;
  background-image: none !important;
  background-size: initial;
  background-repeat: initial;
  background-position: initial;
  font-size: 18px;
  line-height: 1;
}
.rlab-acc-item.is-open .rlab-acc-icon::before {
  content: "${icon.open}";
  background-image: none !important;
}
.rlab-acc-panel[hidden] {
  display: none !important;
}`;
}

function getSelectedAccordionCss() {
  const selectedStyle = accStyle.value || "1";

  return [
    accordionBaseCss,
    accordionStyleCss[selectedStyle] || accordionStyleCss["1"],
    getAccordionIconCss(accIcon.value),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function getAccordionItemHtml(index, isOpen = false) {
  const hiddenAttr = isOpen ? "" : " hidden";
  const expanded = isOpen ? "true" : "false";
  const openClass = isOpen ? " is-open" : "";

  return `
<div class="rlab-acc-item${openClass}">
  <button class="rlab-acc-trigger rdc-w-full rdc-p-10" type="button" aria-expanded="${expanded}">
    <span class="rlab-acc-title">Accordion Title ${index}</span>
    <span class="rlab-acc-icon" aria-hidden="true"></span>
  </button>
  <div class="rlab-acc-panel"${hiddenAttr}>
    <div class="rlab-acc-panel-inner">
      <p>Accordion content ${index} goes here.</p>
    </div>
  </div>
</div>`;
}

function getAccordionItemsHtml(start, end, openFirstItem) {
  let html = "";

  for (let i = start; i <= end; i++) {
    html += getAccordionItemHtml(i, openFirstItem && i === 1);
  }

  return html;
}

function getColClasses(desktopClass, tabletClass, stackTablet, stackMobile) {
  const classes = ["rlab-acc-col"];

  if (desktopClass) classes.push(desktopClass);

  if (stackTablet) {
    classes.push("rdc-t-w-full");
  } else if (tabletClass) {
    classes.push(tabletClass);
  }

  if (stackMobile) classes.push("rdc-m-w-full");

  return classes.join(" ");
}

function getRowClasses(stackTablet, stackMobile) {
  const classes = ["rlab-acc-col-wrap", "rdc-d-flex"];

  if (stackTablet) classes.push("rdc-t-fw-wrap");
  if (stackMobile) classes.push("rdc-m-fw-wrap");

  return classes.join(" ");
}

function buildAccordionColumn(itemsHtml, classNames) {
  return `
      <div class="${classNames}">
        <div class="rlab-acc-col-inner rdc-mw-800 rdc-w-full rdc-m-iauto">
${itemsHtml}
        </div>
      </div>`;
}

function buildImageColumn(classNames) {
  return `
      <div class="${classNames}">
        <div class="rlab-acc-col-inner">
          <div class="rlab-acc-image-wrap">
            <div class="rlab-acc-image-placeholder">Placeholder Image</div>
          </div>
        </div>
      </div>`;
}

function getAccordionScriptHtml() {
  return `<script>
(function () {
  function openItem(item) {
    const trigger = item.querySelector(".rlab-acc-trigger");
    const panel = item.querySelector(".rlab-acc-panel");

    item.classList.add("is-open");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    if (panel) panel.hidden = false;
  }

  function closeItem(item) {
    const trigger = item.querySelector(".rlab-acc-trigger");
    const panel = item.querySelector(".rlab-acc-panel");

    item.classList.remove("is-open");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (panel) panel.hidden = true;
  }

  document.querySelectorAll(".rlab-acc-main").forEach((accordion) => {
    const closeOthers = accordion.dataset.closeOthers === "true";
    const openFirst = accordion.dataset.openFirst === "true";
    const items = Array.from(accordion.querySelectorAll(".rlab-acc-item"));

    items.forEach((item, index) => {
      const trigger = item.querySelector(".rlab-acc-trigger");
      const panel = item.querySelector(".rlab-acc-panel");
      const startsOpen = item.classList.contains("is-open") || (openFirst && index === 0);

      if (!trigger || !panel) return;

      if (startsOpen) {
        openItem(item);
      } else {
        closeItem(item);
      }

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        if (closeOthers) {
          items.forEach((otherItem) => {
            if (otherItem !== item) closeItem(otherItem);
          });
        }

        if (isOpen) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
    });
  });
})();
<\/script>`;
}

function getAccordionValues() {
  const isSingle = accLayout.value === "single";
  const enableImage = accEnableImage.checked;
  const imagePosition = accImagePosition.value;
  const stackTablet = accStackTab.checked;
  const stackMobile = accStackMob.checked;
  const openFirst = Boolean(accOpenFirst && accOpenFirst.checked);
  const closeOthers = !accCloseOthers || accCloseOthers.checked;
  const styleClass = `rlab-acc-style${accStyle.value}`;
  const iconClass = `rlab-acc-icon-${accIcon.value}`;
  const rowClasses = getRowClasses(stackTablet, stackMobile);
  const leftDesktopClass = isSingle ? "rdc-w-full" : accLeftWidth.value;
  const rightDesktopClass = isSingle ? "" : accRightWidth.value;
  const leftTabletClass = isSingle ? "" : accLeftWidthTab.value;
  const rightTabletClass = isSingle ? "" : accRightWidthTab.value;
  const leftClasses = getColClasses(
    leftDesktopClass,
    leftTabletClass,
    stackTablet,
    stackMobile,
  );
  const rightClasses = getColClasses(
    rightDesktopClass,
    rightTabletClass,
    stackTablet,
    stackMobile,
  );

  return {
    isSingle,
    enableImage,
    imagePosition,
    openFirst,
    closeOthers,
    styleClass,
    iconClass,
    rowClasses,
    leftClasses,
    rightClasses,
  };
}

function buildColumnsHtml(values) {
  if (values.isSingle) {
    return buildAccordionColumn(
      getAccordionItemsHtml(1, 10, values.openFirst),
      values.leftClasses,
    );
  }

  if (values.enableImage) {
    const accordionCol = buildAccordionColumn(
      getAccordionItemsHtml(1, 10, values.openFirst),
      values.leftClasses,
    );
    const imageCol = buildImageColumn(values.rightClasses);

    return values.imagePosition === "left"
      ? `${imageCol}${accordionCol}`
      : `${accordionCol}${imageCol}`;
  }

  const leftAccordionCol = buildAccordionColumn(
    getAccordionItemsHtml(1, 5, values.openFirst),
    values.leftClasses,
  );
  const rightAccordionCol = buildAccordionColumn(
    getAccordionItemsHtml(6, 10, false),
    values.rightClasses,
  );

  return `${leftAccordionCol}${rightAccordionCol}`;
}

function buildAccordionMarkup(values) {
  const colsHtml = buildColumnsHtml(values);

  return `<div class="rlab-acc-main ${values.styleClass} ${values.iconClass}" data-open-first="${values.openFirst}" data-close-others="${values.closeOthers}">
  <div class="rlab-acc-inner">
    <div class="${values.rowClasses}">
${colsHtml}
    </div>
  </div>
</div>`;
}

function buildOutputHtml() {
  const values = getAccordionValues();

  return `<style>
${getSelectedAccordionCss()}
</style>

${buildAccordionMarkup(values)}

${getAccordionScriptHtml()}`;
}

function setPreviewItemState(item, shouldOpen) {
  const trigger = item.querySelector(".rlab-acc-trigger");
  const panel = item.querySelector(".rlab-acc-panel");

  item.classList.toggle("is-open", shouldOpen);
  if (trigger)
    trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  if (panel) panel.hidden = !shouldOpen;
}

function bindPreviewAccordion(closeOthers) {
  const triggers = accPreviewRow.querySelectorAll(".rlab-acc-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".rlab-acc-item");
      const isOpen = item.classList.contains("is-open");

      if (closeOthers) {
        accPreviewRow
          .querySelectorAll(".rlab-acc-item")
          .forEach((otherItem) => {
            if (otherItem !== item) setPreviewItemState(otherItem, false);
          });
      }

      setPreviewItemState(item, !isOpen);
    });
  });
}

function updatePreview() {
  const values = getAccordionValues();

  accPreviewStyle.textContent = getSelectedAccordionCss();
  accPreviewMain.className = `rlab-acc-main ${values.styleClass} ${values.iconClass}`;
  accPreviewMain.dataset.openFirst = String(values.openFirst);
  accPreviewMain.dataset.closeOthers = String(values.closeOthers);
  accPreviewRow.className = values.rowClasses;
  accPreviewRow.innerHTML = buildColumnsHtml(values);

  bindPreviewAccordion(values.closeOthers);
}

function updateOutput() {
  accOutput.textContent = buildOutputHtml();
}

function generateAccordion() {
  updatePreview();
  updateOutput();
}

[
  accLayout,
  accLeftWidth,
  accRightWidth,
  accStackTab,
  accLeftWidthTab,
  accRightWidthTab,
  accStackMob,
  accEnableImage,
  accImagePosition,
  accStyle,
  accIcon,
  accOpenFirst,
  accCloseOthers,
]
  .filter(Boolean)
  .forEach((field) => {
    field.addEventListener("input", generateAccordion);
    field.addEventListener("change", generateAccordion);
  });

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(accOutput.textContent);
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

generateAccordion();
