//---2 Column Generator---//
const colsFields = document.querySelectorAll(".rdcl-gen--cols-field");

const fields = {
  // Desktop
  left: document.querySelector(".gen-left"),
  right: document.querySelector(".gen-right"),
  reverse: document.querySelector(".gen-reverse"),

  // Tablet
  leftTab: document.querySelector(".gen-left-tab"),
  rightTab: document.querySelector(".gen-right-tab"),
  reverseTab: document.querySelector(".gen-reverse-tab"),

  // Mobile
  stackMob: document.querySelector(".gen-stack-mob"),
  leftMob: document.querySelector(".gen-left-mob"),
  rightMob: document.querySelector(".gen-right-mob"),
  reverseMob: document.querySelector(".gen-reverse-mob"),
};

const codeContent = document.querySelector(".rdcl-gen--cols-vw-inner code");
const layoutViewer = document.querySelector(".rdcl-gen--layout-vw-inner");

//-- Matching opposite widths --//
const widthPairs = {
  "rdc-w-20": "rdc-w-80",
  "rdc-w-25": "rdc-w-75",
  "rdc-w-33-33": "rdc-w-66-67",
  "rdc-w-half": "rdc-w-half",
  "rdc-w-66-67": "rdc-w-33-33",
  "rdc-w-75": "rdc-w-25",
  "rdc-w-80": "rdc-w-20",

  "rdc-t-w-20": "rdc-t-w-80",
  "rdc-t-w-25": "rdc-t-w-75",
  "rdc-t-w-33-33": "rdc-t-w-66-67",
  "rdc-t-w-half": "rdc-t-w-half",
  "rdc-t-w-66-67": "rdc-t-w-33-33",
  "rdc-t-w-75": "rdc-t-w-25",
  "rdc-t-w-80": "rdc-t-w-20",

  "rdc-m-w-20": "rdc-m-w-80",
  "rdc-m-w-25": "rdc-m-w-75",
  "rdc-m-w-33-33": "rdc-m-w-66-67",
  "rdc-m-w-half": "rdc-m-w-half",
  "rdc-m-w-66-67": "rdc-m-w-33-33",
  "rdc-m-w-75": "rdc-m-w-25",
  "rdc-m-w-80": "rdc-m-w-20",
};

const cssRules = {
  base: {
    "rdc-d-flex": ".rdc-d-flex {\n  display: flex;\n}",
    "rdc-reverse": ".rdc-reverse {\n  flex-flow: row-reverse;\n}",
    "rdc-fw-wrap": ".rdc-fw-wrap {\n  flex-wrap: wrap;\n}",
  },
  width: {
    "rdc-w-20": ".rdc-w-20 {\n  width: 20%;\n}",
    "rdc-w-25": ".rdc-w-25 {\n  width: 25%;\n}",
    "rdc-w-33-33": ".rdc-w-33-33 {\n  width: 33.33%;\n}",
    "rdc-w-half": ".rdc-w-half {\n  width: 50%;\n}",
    "rdc-w-66-67": ".rdc-w-66-67 {\n  width: 66.67%;\n}",
    "rdc-w-75": ".rdc-w-75 {\n  width: 75%;\n}",
    "rdc-w-80": ".rdc-w-80 {\n  width: 80%;\n}",
    "rdc-w-full": ".rdc-w-full {\n  width: 100%;\n}",
  },
  tablet: {
    "rdc-t-reverse": ".rdc-t-reverse {\n    flex-flow: row-reverse;\n  }",
    "rdc-t-w-20": ".rdc-t-w-20 {\n    width: 20%;\n  }",
    "rdc-t-w-25": ".rdc-t-w-25 {\n    width: 25%;\n  }",
    "rdc-t-w-33-33": ".rdc-t-w-33-33 {\n    width: 33.33%;\n  }",
    "rdc-t-w-half": ".rdc-t-w-half {\n    width: 50%;\n  }",
    "rdc-t-w-66-67": ".rdc-t-w-66-67 {\n    width: 66.67%;\n  }",
    "rdc-t-w-75": ".rdc-t-w-75 {\n    width: 75%;\n  }",
    "rdc-t-w-80": ".rdc-t-w-80 {\n    width: 80%;\n  }",
    "rdc-t-w-full": ".rdc-t-w-full {\n    width: 100%;\n  }",
  },
  mobile: {
    "rdc-m-fw-wrap": ".rdc-m-fw-wrap {\n    flex-wrap: wrap;\n  }",
    "rdc-m-reverse": ".rdc-m-reverse {\n    flex-flow: row-reverse;\n  }",
    "rdc-m-w-20": ".rdc-m-w-20 {\n    width: 20%;\n  }",
    "rdc-m-w-25": ".rdc-m-w-25 {\n    width: 25%;\n  }",
    "rdc-m-w-33-33": ".rdc-m-w-33-33 {\n    width: 33.33%;\n  }",
    "rdc-m-w-half": ".rdc-m-w-half {\n    width: 50%;\n  }",
    "rdc-m-w-66-67": ".rdc-m-w-66-67 {\n    width: 66.67%;\n  }",
    "rdc-m-w-75": ".rdc-m-w-75 {\n    width: 75%;\n  }",
    "rdc-m-w-80": ".rdc-m-w-80 {\n    width: 80%;\n  }",
    "rdc-m-w-full": ".rdc-m-w-full {\n    width: 100%;\n  }",
  },
};

function syncPair(changedField, otherField) {
  if (!changedField || !otherField) return;
  const match = widthPairs[changedField.value];
  if (match) otherField.value = match;
}

function getVals() {
  return {
    left: fields.left?.value || "rdc-w-half",
    right: fields.right?.value || "rdc-w-half",
    reverse: fields.reverse?.checked || false,

    leftTab: fields.leftTab?.value || "",
    rightTab: fields.rightTab?.value || "",
    reverseTab: fields.reverseTab?.checked || false,

    stackMob: fields.stackMob?.checked || false,
    leftMob: fields.leftMob?.value || "",
    rightMob: fields.rightMob?.value || "",
    reverseMob: fields.reverseMob?.checked || false,
  };
}

function getClassList(value) {
  return value.split(/\s+/).filter(Boolean);
}

function getUsedClasses(html) {
  const classMatches = html.match(/class="([^"]+)"/g) || [];
  const classes = new Set();

  classMatches.forEach((match) => {
    const classValue = match.replace(/^class="/, "").replace(/"$/, "");
    getClassList(classValue).forEach((className) => classes.add(className));
  });

  return classes;
}

function buildGeneratedCss(html) {
  const usedClasses = getUsedClasses(html);
  const baseRules = [];
  const tabletRules = [];
  const mobileRules = [];

  Object.entries(cssRules.base).forEach(([className, rule]) => {
    if (usedClasses.has(className)) baseRules.push(rule);
  });

  Object.entries(cssRules.width).forEach(([className, rule]) => {
    if (usedClasses.has(className)) baseRules.push(rule);
  });

  if (usedClasses.has("rdc-fw-wrap") && usedClasses.has("rdc-reverse")) {
    baseRules.push(
      ".rdc-fw-wrap.rdc-reverse {\n  flex-flow: column-reverse;\n}",
    );
  }

  Object.entries(cssRules.tablet).forEach(([className, rule]) => {
    if (usedClasses.has(className)) tabletRules.push(rule);
  });

  if (usedClasses.has("rdc-t-fw-wrap") && usedClasses.has("rdc-t-reverse")) {
    tabletRules.push(
      ".rdc-t-fw-wrap.rdc-t-reverse {\n    flex-flow: column-reverse;\n  }",
    );
  }

  Object.entries(cssRules.mobile).forEach(([className, rule]) => {
    if (usedClasses.has(className)) mobileRules.push(rule);
  });

  if (usedClasses.has("rdc-m-fw-wrap") && usedClasses.has("rdc-m-reverse")) {
    mobileRules.push(
      ".rdc-m-fw-wrap.rdc-m-reverse {\n    flex-flow: column-reverse;\n  }",
    );
  }

  const cssParts = [...baseRules];

  if (tabletRules.length) {
    cssParts.push(
      `@media only screen and (max-width: 1024px) {\n${tabletRules.join("\n")}\n}`,
    );
  }

  if (mobileRules.length) {
    cssParts.push(
      `@media only screen and (max-width: 767px) {\n${mobileRules.join("\n")}\n}`,
    );
  }

  return cssParts.join("\n");
}

function buildOutputCode(html) {
  const css = buildGeneratedCss(html);

  if (!css) return html;

  return `<style>\n${css}\n</style>\n\n${html}`;
}

function updateCode() {
  const v = getVals();

  let mainClasses = [];
  let contClasses = [];

  // container classes
  if (v.reverse) contClasses.push("rdc-reverse");
  if (v.reverseTab) contClasses.push("rdc-t-reverse");
  if (v.reverseMob) contClasses.push("rdc-m-reverse");
  if (v.stackMob) contClasses.push("rdc-m-fw-wrap");

  // width classes with fallback behavior
  const leftDesktop = v.left;
  const rightDesktop = v.right;

  const leftTablet = v.leftTab || "";
  const rightTablet = v.rightTab || "";

  const leftMobile = v.stackMob ? "rdc-m-w-full" : v.leftMob || "";
  const rightMobile = v.stackMob ? "rdc-m-w-full" : v.rightMob || "";

  const leftColClasses = ["rlab-cols-col", leftDesktop, leftTablet, leftMobile]
    .filter(Boolean)
    .join(" ");

  const rightColClasses = [
    "rlab-cols-col",
    rightDesktop,
    rightTablet,
    rightMobile,
  ]
    .filter(Boolean)
    .join(" ");

  const finalHtml = `<div class="rlab-cols-main ${mainClasses.join(" ")}">
    <div class="rlab-cols-inner rdc-d-flex ${contClasses.join(" ")}">
        <div class="${leftColClasses}"></div>
        <div class="${rightColClasses}"></div>
    </div>
</div>`;

  codeContent.innerText = buildOutputCode(finalHtml);
  layoutViewer.innerHTML = finalHtml;
}

// sync desktop pair
fields.left?.addEventListener("change", () => {
  syncPair(fields.left, fields.right);
  updateCode();
});

fields.right?.addEventListener("change", () => {
  syncPair(fields.right, fields.left);
  updateCode();
});

// sync tablet pair
fields.leftTab?.addEventListener("change", () => {
  if (fields.leftTab.value) syncPair(fields.leftTab, fields.rightTab);
  updateCode();
});

fields.rightTab?.addEventListener("change", () => {
  if (fields.rightTab.value) syncPair(fields.rightTab, fields.leftTab);
  updateCode();
});

// sync mobile pair
fields.leftMob?.addEventListener("change", () => {
  if (fields.leftMob.value) syncPair(fields.leftMob, fields.rightMob);
  updateCode();
});

fields.rightMob?.addEventListener("change", () => {
  if (fields.rightMob.value) syncPair(fields.rightMob, fields.leftMob);
  updateCode();
});

// generic updates
colsFields.forEach((f) => {
  f.addEventListener("input", updateCode);
  f.addEventListener("change", updateCode);
});

// copy
const copyBtn = document.getElementById("rdcl-copy-btn");
const codeOutput = document.querySelector(".rdcl-gen--cols-vw-inner code");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codeOutput.innerText).then(() => {
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerText = "Copy Code";
    }, 1500);
  });
});

// init pairing
syncPair(fields.left, fields.right);
updateCode();
