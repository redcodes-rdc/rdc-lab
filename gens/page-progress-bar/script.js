const rpContentSelector = document.getElementById("rp-content-selector");
const rpPosition = document.getElementById("rp-position");
const rpOffset = document.getElementById("rp-offset");
const rpRevealAfter = document.getElementById("rp-reveal-after");
const rpZIndex = document.getElementById("rp-z-index");

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
  const position = rpPosition.value;
  const offset = rpOffset.value.trim() || rpOffset.placeholder || "0px";
  const revealAfterValue = parseFloat(rpRevealAfter.value);
  const revealAfterPlaceholder = parseFloat(rpRevealAfter.placeholder);
  const revealAfter = Number.isFinite(revealAfterValue)
    ? revealAfterValue
    : revealAfterPlaceholder || 3;
  const zIndex = rpZIndex.value.trim() || rpZIndex.placeholder || "999999";

  return { contentSelector, position, offset, revealAfter, zIndex };
}

function shouldRevealOnScroll(values = {}) {
  const revealAfter = Number.parseFloat(values.revealAfter);

  return Number.isFinite(revealAfter) && revealAfter > 0;
}

function getGeneratedCss(values = {}) {
  const positionProperty = values.position === "bottom" ? "bottom" : "top";
  const revealOnScroll = shouldRevealOnScroll(values);

  return `.rlab-rp-bar,
.rlab-rp-bar-fill {
  height: 10px;
}
.rlab-rp-bar {
  background-color: #495d63;
  left: 0;
  position: fixed;
  ${positionProperty}: ${values.offset || "0px"};
  width: 100%;
  z-index: ${values.zIndex || "999999"};
  ${revealOnScroll ? "opacity: 0;" : ""}
  ${revealOnScroll ? "transition: opacity 150ms ease;" : ""}
  ${revealOnScroll ? "visibility: hidden;" : ""}
}
${revealOnScroll ? `.rlab-rp-bar.is-visible {
  opacity: 1;
  visibility: visible;
}` : ""}
.rlab-rp-bar-fill {
  background-color: #50caee;
}
.rlab-rp-bar,
.rlab-rp-bar-fill {
  border-radius: 2px;
}`;
}

function getPreviewCss() {
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
  const values = getValues();
  const revealOnScroll = shouldRevealOnScroll(values);

  return `<style>
${getGeneratedCss(values)}
</style>

<div class="rlab-rp-bar">
  <div class="rlab-rp-bar-fill"></div>
</div>

<script>
(function () {
  const bar = document.querySelector(".rlab-rp-bar-fill");
  const contentSelector = ${JSON.stringify(values.contentSelector)};
  const revealAfter = ${Number.isFinite(values.revealAfter) ? values.revealAfter : 3};
  let isTicking = false;

  const getContent = function () {
    return document.querySelector(contentSelector);
  };

  const getScrollTarget = function (element) {
    let current = element;

    while (current && current !== document.body) {
      const style = window.getComputedStyle(current);
      const canScroll = /(auto|scroll|overlay)/.test(style.overflowY);

      if (canScroll && current.scrollHeight > current.clientHeight) {
        return current;
      }

      current = current.parentElement;
    }

    return window;
  };

  const updateProgressBar = function () {
    const content = getContent();
    if (!bar || !content) return;

    const scrollTarget = getScrollTarget(content);
    const isWindowScroll = scrollTarget === window;
    const contentRect = content.getBoundingClientRect();
    const viewportTop = isWindowScroll ? 0 : scrollTarget.getBoundingClientRect().top;
    const viewportHeight = isWindowScroll ? window.innerHeight : scrollTarget.clientHeight;
    const currentPosition = viewportTop - contentRect.top;
    const scrollableHeight = content.scrollHeight - viewportHeight;
    const yPosition = scrollableHeight > 0 ? currentPosition / scrollableHeight : 0;
    const barPercentage = Math.min(Math.max(yPosition * 100, 0), 100);

    bar.style.width = \`\${barPercentage}%\`;
    ${revealOnScroll ? `bar.parentElement?.classList.toggle("is-visible", barPercentage >= revealAfter);` : ""}
  };

  const scheduleProgressUpdate = function () {
    if (isTicking) return;

    isTicking = true;
    window.requestAnimationFrame(function () {
      updateProgressBar();
      isTicking = false;
    });
  };

  scheduleProgressUpdate();
  window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
  document.addEventListener("scroll", scheduleProgressUpdate, {
    capture: true,
    passive: true,
  });
  window.addEventListener("resize", scheduleProgressUpdate);
  window.addEventListener("load", scheduleProgressUpdate);
  document.addEventListener("DOMContentLoaded", scheduleProgressUpdate);

  if ("MutationObserver" in window) {
    const observer = new MutationObserver(scheduleProgressUpdate);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
})();
<\/script>`;
}

function updatePreview() {
  previewCont.innerHTML = buildPreviewHtml();
  rpPreviewStyle.textContent = getPreviewCss();
  updatePreviewProgress();
}

function updatePreviewProgress() {
  const rpBarFill = document.getElementById("rpBarFill");
  if (!rpBarFill) return;

  const page = document.querySelector("main") || document.documentElement;
  const scrollableHeight = page.scrollHeight - window.innerHeight;
  const percent =
    scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

  rpBarFill.style.width = `${Math.min(Math.max(percent, 0), 100)}%`;
}

function updateOutput() {
  rpOutput.textContent = buildOutput();
}

function generateRP() {
  updatePreview();
  updateOutput();
}

[rpContentSelector, rpPosition, rpOffset, rpRevealAfter, rpZIndex].forEach((field) => {
  field.addEventListener("input", generateRP);
  field.addEventListener("change", generateRP);
});

window.addEventListener("scroll", updatePreviewProgress, { passive: true });
window.addEventListener("resize", updatePreviewProgress);

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
