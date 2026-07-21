//--Width Generator (Unified)--//
function getWidthClass(cols, prefix = "") {
  const map = {
    1: "full",
    2: "half",
    3: "33-33",
    4: "25",
    5: "20",
    6: "16-67",
    7: "14-29",
    8: "12-5",
    9: "11-11",
    10: "10",
  };

  if (!cols || !map[cols]) return "";

  const pre = prefix ? `${prefix}-` : "";
  return `rdc-${pre}w-${map[cols]}`;
}

//---Column Generator---//
const colCompContents = {
  content: `        <div class="rlab-cols-col"></div>`,
};

const colsFields = document.querySelectorAll(".rdcl-gen--cols-field");

const fields = {
  colCount: document.querySelector(".rdcl-gen--cols-count"),

  perRow: document.querySelector(".rdcl-gen--cols-perrow"),
  scrWidth: document.querySelector(".rdcl-gen--cols-scrwidth"),

  perRowMob: document.querySelector(".rdcl-gen--cols-perrowmob"),
  scrWidthMob: document.querySelector(".rdcl-gen--cols-scrwidthmob"),

  perRowTab: document.querySelector(".rdcl-gen--cols-perrowtab"),
  scrWidthTab: document.querySelector(".rdcl-gen--cols-scrwidthtab"),
};

const codeContent = document.querySelector(".rdcl-gen--cols-vw-inner code");
const layoutViewer = document.querySelector(".rdcl-gen--layout-vw-inner");
let colsPreviewStyle = document.getElementById("cols-preview-style");

if (!colsPreviewStyle) {
  colsPreviewStyle = document.createElement("style");
  colsPreviewStyle.id = "cols-preview-style";
  document.head.appendChild(colsPreviewStyle);
}

//--Helpers--//
const getVals = () => ({
  colCount: fields.colCount.value,

  perRow: fields.perRow.value,
  scrWidth: fields.scrWidth.value,

  perRowMob: fields.perRowMob.value,
  scrWidthMob: fields.scrWidthMob.value,

  perRowTab: fields.perRowTab?.value || "",
  scrWidthTab: fields.scrWidthTab?.value || "",
});

function handleExclusive(input, a, b) {
  if (!input) return;
  if (input.classList.contains(a)) fields[b].value = "";
}

//--Main Update--//
function updateCode(e = { target: null }) {
  const v = getVals();

  let contClasses = [];
  let mainClasses = [];
  let styles = [];

  //-- Desktop Logic --//
  if (v.perRow) {
    contClasses.push("rdc-fw-wrap");
    handleExclusive(e.target, "rdcl-gen--cols-perrow", "scrWidth");
  }

  if (v.scrWidth) {
    contClasses.push("rdc-w-fit");
    mainClasses.push("rdc-ofx-scr");
    handleExclusive(e.target, "rdcl-gen--cols-scrwidth", "perRow");
  }

  //-- Tablet Logic --//
  if (v.perRowTab) {
    contClasses.push("rdc-t-w-full rdc-t-fw-wrap");
    handleExclusive(e.target, "rdcl-gen--cols-perrowtab", "scrWidthTab");
  }

  if (v.scrWidthTab) {
    contClasses.push("rdc-t-w-fit rdc-t-fw-nwra");
    mainClasses.push("rdc-t-ofx-scr");
    handleExclusive(e.target, "rdcl-gen--cols-scrwidthtab", "perRowTab");
  }

  //-- Mobile Logic --//
  if (v.perRowMob) {
    contClasses.push("rdc-m-w-full rdc-m-fw-wrap");
    handleExclusive(e.target, "rdcl-gen--cols-perrowmob", "scrWidthMob");
  }

  if (v.scrWidthMob) {
    contClasses.push("rdc-m-w-fit rdc-m-fw-nwra");
    mainClasses.push("rdc-m-ofx-scr");
    handleExclusive(e.target, "rdcl-gen--cols-scrwidthmob", "perRowMob");
  }

  //-- Styles (Cleaner System)--//
  if (v.scrWidth) {
    styles.push(`.rlab-cols-col { width:${v.scrWidth}px; }`);
  }

  if (v.scrWidthTab) {
    styles.push(`@media (max-width:1024px) {
  .rlab-cols-col { width:${v.scrWidthTab}px; }
}`);
  }

  if (v.scrWidthMob) {
    styles.push(`@media (max-width:767px) {
  .rlab-cols-col { width:${v.scrWidthMob}px; }
}`);
  }

  //-- Width Classes --//
  const widthDesktop = v.scrWidth ? "" : getWidthClass(v.perRow || v.colCount);
  const widthTablet = v.scrWidthTab ? "" : getWidthClass(v.perRowTab, "t");
  const widthMobile = v.scrWidthMob ? "" : getWidthClass(v.perRowMob, "m");

  //-- Build Columns --//
  let cols = [];

  for (let i = 0; i < v.colCount; i++) {
    let cls = ["rlab-cols-col", widthDesktop, widthTablet, widthMobile]
      .filter(Boolean)
      .join(" ");

    cols.push(`        <div class="${cls}"></div>`);
  }

  //-- Output --//
  const opening = `
<div class="rlab-cols-main ${mainClasses.join(" ")}">
    <div class="rlab-cols-inner rdc-d-flex ${contClasses.join(" ")}">`;

  const closing = `    </div>
</div>`;

  const htmlCode = `${opening}
${cols.join("\n")}
${closing}`;
  const cssCode = buildCopiedCss(
    [
      "rlab-cols-main",
      "rlab-cols-inner",
      "rlab-cols-col",
      "rdc-d-flex",
      ...classListFromStrings(mainClasses),
      ...classListFromStrings(contClasses),
      ...classListFromStrings([widthDesktop, widthTablet, widthMobile]),
    ],
    styles,
  );
  const finalCode = `<style>
${cssCode}
</style>
${htmlCode}`;

  codeContent.innerText = finalCode;
  layoutViewer.innerHTML = htmlCode;
  colsPreviewStyle.textContent = styles.join("\n\n");
}

function classListFromStrings(values) {
  return values
    .join(" ")
    .split(" ")
    .map((value) => value.trim())
    .filter(Boolean);
}

function buildCopiedCss(classes, customStyles) {
  const unique = [...new Set(classes.filter(Boolean))];
  const base = [
    `* { box-sizing: border-box; }`,
    ...getRules(unique, columnCss.base),
  ];
  const tablet = getRules(unique, columnCss.tablet);
  const mobile = getRules(unique, columnCss.mobile);

  if (tablet.length) {
    base.push(`@media only screen and (max-width: 1024px) {
${indentRules(tablet.join("\n"))}
}`);
  }

  if (mobile.length) {
    base.push(`@media only screen and (max-width: 767px) {
${indentRules(mobile.join("\n"))}
}`);
  }

  return [...base, ...customStyles].join("\n\n");
}

function getRules(classes, rules) {
  return classes.map((className) => rules[className]).filter(Boolean);
}

function indentRules(css) {
  return css
    .split("\n")
    .map((line) => (line ? `  ${line}` : line))
    .join("\n");
}

function widthRules(prefix) {
  const widths = {
    10: "10%",
    "11-11": "11.11%",
    "12-5": "12.5%",
    "14-29": "14.29%",
    "16-67": "16.67%",
    20: "20%",
    25: "25%",
    "33-33": "33.33%",
    half: "50%",
    "66-67": "66.67%",
    75: "75%",
    80: "80%",
    full: "100%",
    fit: "fit-content",
  };

  return Object.fromEntries(
    Object.entries(widths).map(([key, value]) => [
      `${prefix}${key}`,
      `.${prefix}${key} { width: ${value}; }`,
    ]),
  );
}

const columnCss = {
  base: {
    "rlab-cols-main": `.rlab-cols-main { width: 100%; }`,
    "rlab-cols-inner": `.rlab-cols-inner { width: 100%; }`,
    "rlab-cols-col": `.rlab-cols-col { box-sizing: border-box; }`,
    "rdc-d-flex": `.rdc-d-flex { display: flex; }`,
    "rdc-fw-wrap": `.rdc-fw-wrap { flex-wrap: wrap; }`,
    "rdc-ofx-scr": `.rdc-ofx-scr { overflow-x: scroll; }`,
    ...widthRules("rdc-w-"),
  },
  tablet: {
    "rdc-t-fw-wrap": `.rdc-t-fw-wrap { flex-wrap: wrap; }`,
    "rdc-t-fw-nwra": `.rdc-t-fw-nwra { flex-wrap: nowrap; }`,
    "rdc-t-ofx-scr": `.rdc-t-ofx-scr { overflow-x: scroll; }`,
    ...widthRules("rdc-t-w-"),
  },
  mobile: {
    "rdc-m-fw-wrap": `.rdc-m-fw-wrap { flex-wrap: wrap; }`,
    "rdc-m-fw-nwra": `.rdc-m-fw-nwra { flex-wrap: nowrap; }`,
    "rdc-m-ofx-scr": `.rdc-m-ofx-scr { overflow-x: scroll; }`,
    ...widthRules("rdc-m-w-"),
  },
};

//-- Events --//
colsFields.forEach((f) => {
  f.addEventListener("input", updateCode);
});

//-- Copy Button --//
const copyBtn = document.getElementById("rdcl-copy-btn");
const codeOutput = document.querySelector(".rdcl-gen--cols-vw-inner code");

copyBtn.addEventListener("click", () => {
  updateCode();
  navigator.clipboard.writeText(codeOutput.innerText).then(() => {
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy Code"), 1500);
  });
});

updateCode();
