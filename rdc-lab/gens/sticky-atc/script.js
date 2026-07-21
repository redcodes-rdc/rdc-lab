const satcOutput = document.getElementById("satcOutput");
const satcPreviewStage = document.getElementById("satcPreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

let satcPreviewStyle = document.getElementById("satc-preview-style");

if (!satcPreviewStyle) {
  satcPreviewStyle = document.createElement("style");
  satcPreviewStyle.id = "satc-preview-style";
  document.head.appendChild(satcPreviewStyle);
}

function getStickyAtcCss() {
  return `.rlab-satc-main {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  background: #b6bcac;
}

.rlab-satc-inner {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.rlab-satc-info {
  display: flex;
  flex-flow: column;
  gap: 4px;
  flex: 1 1 auto;
}

.rlab-satc-title {
  font-size: 14px;
  color: #111111;
}

.rlab-satc-price {
  font-size: 14px;
  font-weight: 600;
  color: #111111;
}

.rlab-satc-actions {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}

.rlab-satc-actions label {
  font-size: 11px;
  color: #000;
  margin-bottom: 4px;
  display: block;
}

.rlab-satc-variant select,
.rlab-satc-qty input {
  height: 36px;
  padding: 0 10px;
  border: unset;
  font-size: 13px;
  background-color: #9ca291;
}

.rlab-satc-qty input {
  width: 60px;
}

.rlab-satc-btn-wrap {
  display: flex;
  align-items: flex-end;
}

.rlab-satc-btn {
  height: 36px;
  padding: 0 16px;
  border: 1px solid #111111;
  background: #242923;
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;
}

@media only screen and (max-width: 1024px) {
  .rlab-satc-inner {
    flex-flow: column;
    align-items: stretch;
    gap: 12px;
  }

  .rlab-satc-actions {
    width: 100%;
    justify-content: space-between;
  }
}

@media only screen and (max-width: 767px) {
  .rlab-satc-inner {
    padding: 10px 12px;
  }

  .rlab-satc-actions {
    flex-wrap: wrap;
    gap: 8px;
  }

  .rlab-satc-variant,
  .rlab-satc-qty {
    width: calc(50% - 4px);
  }

  .rlab-satc-btn-wrap {
    width: 100%;
  }

  .rlab-satc-btn {
    width: 100%;
  }
}`;
}

function getPreviewCss() {
  return `.rlab-satc-viewer {
  padding: 20px;
}

.rlab-satc-viewer-inner {
  position: relative;
  min-height: 420px;
  background: #ffffff;
}

.rlab-satc-viewer-content {
  padding: 20px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  background-color: #dee1d8;
}

.rlab-satc-viewer-block {
  height: 120px;
  background: #434b41;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #666;
}

.rlab-satc-viewer .rlab-satc-main {
  position: absolute;
  z-index: 1;
}`;
}

function getStickyAtcHtml() {
  return `<div class="rlab-satc-main" id="rlabStickyAtc">
  <div class="rlab-satc-inner">
    <div class="rlab-satc-info">
      <div class="rlab-satc-title">Sample Product Title</div>
      <div class="rlab-satc-price">$49.00</div>
    </div>

    <div class="rlab-satc-actions">
      <div class="rlab-satc-variant">
        <label for="rlabStickyAtcVariant">Color</label>
        <select id="rlabStickyAtcVariant">
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div class="rlab-satc-qty">
        <label for="rlabStickyAtcQty">Qty</label>
        <input id="rlabStickyAtcQty" type="number" min="1" value="1" />
      </div>

      <div class="rlab-satc-btn-wrap">
        <button type="button" class="rlab-satc-btn">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>`;
}

function getStickyAtcOptionalScript() {
  return `<!--
<script>
// OPTIONAL: Show after scroll
// Uncomment below and adjust the code based on your requirements

(function () {
  const stickyAtc = document.getElementById("rlabStickyAtc");

  if (!stickyAtc) return;

  // stickyAtc.style.display = "none";

  // window.addEventListener("scroll", function () {
  //   if (window.scrollY > 400) {
  //     stickyAtc.style.display = "";
  //   } else {
  //     stickyAtc.style.display = "none";
  //   }
  // });
})();
</scr${"ipt"}>
-->`;
}

function getStickyAtcOutput() {
  return `<style>
${getStickyAtcCss()}
</style>

${getStickyAtcHtml()}

${getStickyAtcOptionalScript()}`;
}

function getPreviewMarkup() {
  return `<div class="rlab-satc-viewer">
  <div class="rlab-satc-viewer-inner">
    <div class="rlab-satc-viewer-content">
      <div class="rlab-satc-viewer-block">
        <p>Product media / gallery area</p>
      </div>
      <div class="rlab-satc-viewer-block">
        <p>Product details area</p>
      </div>
      <div class="rlab-satc-viewer-block">
        <p>Scroll trigger example space</p>
      </div>
    </div>

    ${getStickyAtcHtml()}
  </div>
</div>`;
}

function renderPreview() {
  satcPreviewStyle.textContent = [getStickyAtcCss(), getPreviewCss()].join(
    "\n\n",
  );
  satcPreviewStage.innerHTML = getPreviewMarkup();
}

function renderOutput() {
  satcOutput.textContent = getStickyAtcOutput();
}

function update() {
  renderPreview();
  renderOutput();
}

copyBtn.addEventListener("click", async () => {
  update();

  try {
    await navigator.clipboard.writeText(satcOutput.textContent);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Code"), 1200);
  } catch {
    copyBtn.textContent = "Copy Failed";
    setTimeout(() => (copyBtn.textContent = "Copy Code"), 1200);
  }
});

update();
