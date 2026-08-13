const rpContentSelector = document.getElementById("rp-content-selector");
const rpTotal = document.getElementById("rp-total");
const rpCurrent = document.getElementById("rp-current");

const rpOutput = document.getElementById("rpOutput");
const copyBtn = document.getElementById("rdcl-copy-btn");

const previewCont = document.querySelector(".rdcl-gen--layout-vw-inner");

let rpPreviewStyle = document.getElementById("rp-preview-style");

if (!rpPreviewStyle) {
  rpPreviewStyle = document.createElement("style");
  rpPreviewStyle.id = "rp-preview-style";
  document.head.appendChild(rpPreviewStyle);
}

function getValues() {
  const contentSelector =
    rpContentSelector.value.trim() || rpContentSelector.placeholder || "";

  const total =
    parseFloat(rpTotal.value) || parseFloat(rpTotal.placeholder) || 0;

  const current =
    parseFloat(rpCurrent.value) || parseFloat(rpCurrent.placeholder) || 0;

  return { contentSelector, total, current };
}

function calculateProgress(total, current) {
  if (total <= 0) return 0;
  return Math.min((current / total) * 100, 100);
}

function getGeneratedCss() {
  return `.rlab-rp-bar,
.rlab-rp-bar-fill {
  height: 10px;
}
.rlab-rp-bar {
  background-color: #495d63;
}
.rlab-rp-bar-fill {
  background-color: #50caee;
}
.rlab-rp-bar,
.rlab-rp-bar-fill {
  border-radius: 2px;
}`;
}

function buildPreviewHtml() {
  return `<div class="rlab-rp-main">
  <div class="rlab-rp-bar">
    <div class="rlab-rp-bar-fill" id="rpBarFill"></div>
  </div>
</div>`;
}

function buildOutput() {
  const { contentSelector } = getValues();

  return `<style>
${getGeneratedCss()}
</style>

<div class="rlab-rp-bar">
  <div class="rlab-rp-bar-fill"></div>
</div>

<script>
(function () {
  const bar = document.querySelector(".rlab-rp-bar-fill");
  const content = document.querySelector(${JSON.stringify(contentSelector)});

  const updateProgressBar = function () {
    if (!bar || !content) return;

    const scrollableHeight = content.clientHeight - window.innerHeight;
    const yPosition = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    const barPercentage = Math.min(Math.max(yPosition * 100, 0), 100);

    bar.style.width = \`\${barPercentage}%\`;
  };

  updateProgressBar();
  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);
})();
<\/script>`;
}

function updatePreview() {
  const { total, current } = getValues();
  const percent = calculateProgress(total, current);

  previewCont.innerHTML = buildPreviewHtml();
  rpPreviewStyle.textContent = getGeneratedCss();

  const rpBarFill = document.getElementById("rpBarFill");

  if (rpBarFill) {
    rpBarFill.style.width = percent + "%";
  }
}

function updateOutput() {
  rpOutput.textContent = buildOutput();
}

function generateRP() {
  updatePreview();
  updateOutput();
}

[rpContentSelector, rpTotal, rpCurrent].forEach((field) => {
  field.addEventListener("input", generateRP);
  field.addEventListener("change", generateRP);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(rpOutput.textContent);
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

generateRP();
