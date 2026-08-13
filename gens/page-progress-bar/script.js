const rpContentSelector = document.getElementById("rp-content-selector");

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

  return { contentSelector };
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
    if (!bar || !content) return;

    const scrollTarget = getScrollTarget(content);
    const isWindowScroll = scrollTarget === window;
    const currentPosition = isWindowScroll
      ? window.scrollY - (content.getBoundingClientRect().top + window.scrollY)
      : scrollTarget.scrollTop;
    const scrollableHeight = isWindowScroll
      ? content.scrollHeight - window.innerHeight
      : content.scrollHeight - scrollTarget.clientHeight;
    const yPosition = scrollableHeight > 0 ? currentPosition / scrollableHeight : 0;
    const barPercentage = Math.min(Math.max(yPosition * 100, 0), 100);

    bar.style.width = \`\${barPercentage}%\`;
  };

  const scrollTarget = content ? getScrollTarget(content) : window;

  updateProgressBar();
  window.addEventListener("scroll", updateProgressBar, { passive: true });
  document.addEventListener("scroll", updateProgressBar, {
    capture: true,
    passive: true,
  });
  if (scrollTarget !== window) {
    scrollTarget.addEventListener("scroll", updateProgressBar, {
      passive: true,
    });
  }
  window.addEventListener("resize", updateProgressBar);
})();
<\/script>`;
}

function updatePreview() {
  previewCont.innerHTML = buildPreviewHtml();
  rpPreviewStyle.textContent = getGeneratedCss();
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

[rpContentSelector].forEach((field) => {
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
