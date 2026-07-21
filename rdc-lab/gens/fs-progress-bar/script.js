const fsThreshold = document.getElementById("fs-threshold");
const fsCurrent = document.getElementById("fs-current");

const fsOutput = document.getElementById("fsOutput");
const copyBtn = document.getElementById("rdcl-copy-btn");

const previewCont = document.querySelector(".rdcl-gen--layout-vw-inner");

let fsPreviewStyle = document.getElementById("fs-preview-style");

if (!fsPreviewStyle) {
  fsPreviewStyle = document.createElement("style");
  fsPreviewStyle.id = "fs-preview-style";
  document.head.appendChild(fsPreviewStyle);
}

function getValues() {
  const threshold =
    parseFloat(fsThreshold.value) || parseFloat(fsThreshold.placeholder) || 0;

  const current =
    parseFloat(fsCurrent.value) || parseFloat(fsCurrent.placeholder) || 0;

  return { threshold, current };
}

function calculateProgress(threshold, current) {
  if (threshold <= 0) return 0;
  return Math.min((current / threshold) * 100, 100);
}

function formatMoney(value) {
  return value.toFixed(2).replace(/\.00$/, "");
}

function getMessage(threshold, current) {
  if (threshold <= 0) return "Enter a threshold";

  if (current >= threshold) {
    return "You’ve unlocked free shipping";
  }

  const remaining = formatMoney(threshold - current);
  return `You’re $${remaining} away from free shipping`;
}

function getGeneratedCss() {
  return `.rlab-fs-bar,
.rlab-fs-bar-fill {
  height: 10px;
}
.rlab-fs-bar {
  background-color: #505050;
}
.rlab-fs-bar-fill {
  background-color: #44a8a1;
}`;
}

function buildPreviewHtml() {
  return `<div class="rlab-fs-main" id="fsPreview">
  <div class="rlab-fs-inner">
    <p class="rlab-fs-message" id="fsMessage"></p>

    <div class="rlab-fs-bar rdc-w-full">
      <div class="rlab-fs-bar-fill" id="fsBarFill"></div>
    </div>
  </div>
</div>`;
}

function buildOutput() {
  const { threshold, current } = getValues();

  return `<style>
${getGeneratedCss()}
</style>

<div class="rlab-fs-main">
  <div class="rlab-fs-inner">
    <p class="rlab-fs-message">You’re $0 away from free shipping</p>

    <div class="rlab-fs-bar rdc-w-full">
      <div class="rlab-fs-bar-fill" style="width: 0%;"></div>
    </div>
  </div>
</div>

<script>
(function () {
  const threshold = ${threshold || 0};
  const currentAmount = ${current || 0};

  const fsMain = document.querySelector(".rlab-fs-main");
  const messageEl = fsMain ? fsMain.querySelector(".rlab-fs-message") : null;
  const barEl = fsMain ? fsMain.querySelector(".rlab-fs-bar-fill") : null;

  function formatMoney(value) {
    return value.toFixed(2).replace(/\\.00$/, "");
  }

  function updateBar(current) {
    if (!messageEl || !barEl) return;

    if (threshold <= 0) {
      messageEl.textContent = "Enter a threshold";
      barEl.style.width = "0%";
      return;
    }

    if (current >= threshold) {
      messageEl.textContent = "You’ve unlocked free shipping";
      barEl.style.width = "100%";
      return;
    }

    const remaining = formatMoney(threshold - current);
    const percent = Math.min((current / threshold) * 100, 100);

    messageEl.textContent = "You’re $" + remaining + " away from free shipping";
    barEl.style.width = percent + "%";
  }

  updateBar(currentAmount);

  // Shopify example:
  // fetch("/cart.js")
  //   .then((res) => res.json())
  //   .then((cart) => {
  //     const total = cart.total_price / 100;
  //     updateBar(total);
  //   });
})();
<\/script>`;
}

function updatePreview() {
  const { threshold, current } = getValues();
  const percent = calculateProgress(threshold, current);
  const message = getMessage(threshold, current);

  previewCont.innerHTML = buildPreviewHtml();
  fsPreviewStyle.textContent = getGeneratedCss();

  const fsMessage = document.getElementById("fsMessage");
  const fsBarFill = document.getElementById("fsBarFill");

  if (fsMessage) {
    fsMessage.textContent = message;
  }

  if (fsBarFill) {
    fsBarFill.style.width = percent + "%";
  }
}

function updateOutput() {
  fsOutput.textContent = buildOutput();
}

function generateFS() {
  updatePreview();
  updateOutput();
}

[fsThreshold, fsCurrent].forEach((field) => {
  field.addEventListener("input", generateFS);
  field.addEventListener("change", generateFS);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(fsOutput.textContent);
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

generateFS();
