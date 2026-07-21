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
  const total =
    parseFloat(rpTotal.value) || parseFloat(rpTotal.placeholder) || 0;

  const current =
    parseFloat(rpCurrent.value) || parseFloat(rpCurrent.placeholder) || 0;

  return { total, current };
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
  const { total, current } = getValues();

  return `<style>
${getGeneratedCss()}
</style>

<div class="rlab-rp-main">
  <div class="rlab-rp-bar">
    <div class="rlab-rp-bar-fill"></div>
  </div>
</div>

<script>
(function () {
  const totalHeight = ${total || 0};
  const currentPosition = ${current || 0};

  const rpMain = document.querySelector(".rlab-rp-main");
  const barEl = rpMain ? rpMain.querySelector(".rlab-rp-bar-fill") : null;

  function updateBar(current, total) {
    if (!barEl) return;

    if (total <= 0) {
      barEl.style.width = "0%";
      return;
    }

    const percent = Math.min((current / total) * 100, 100);
    barEl.style.width = percent + "%";
  }

  updateBar(currentPosition, totalHeight);

  // Sample scroll logic:
  // window.addEventListener("scroll", () => {
  //   const total = document.body.scrollHeight - window.innerHeight;
  //   const current = window.scrollY;
  //   updateBar(current, total);
  // });
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

[rpTotal, rpCurrent].forEach((field) => {
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
