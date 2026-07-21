const pbadgeText = document.getElementById("pbadge-text");
const pbadgeRadius = document.getElementById("pbadge-radius");
const pbadgePosition = document.getElementById("pbadge-position");

const pbadgeOutput = document.getElementById("pbadgeOutput");
const pbadgePreviewStage = document.getElementById("pbadgePreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

function getRadiusValue(value) {
  const radius = value.trim();

  if (!radius) return "0";

  return radius
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map(addPxToNumber)
    .join(" ");
}

function addPxToNumber(value) {
  return /^-?\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
}

function getBadgeText() {
  return pbadgeText.value.trim() || "SALE";
}

function getBadgeRadius() {
  return getRadiusValue(pbadgeRadius.value);
}

function getBadgePosition() {
  return pbadgePosition?.value || "top-left";
}

function getBadgePositionClass() {
  return `rlab-pbadge-pos-${getBadgePosition()}`;
}

function getBadgePositionCss() {
  const positionClass = getBadgePositionClass();
  const position = getBadgePosition();

  const desktopPositions = {
    "top-right": "top: 10px;\n  right: 10px;",
    "top-left": "top: 10px;\n  left: 10px;",
    "bottom-left": "bottom: 10px;\n  left: 10px;",
    "bottom-right": "right: 10px;\n  bottom: 10px;",
  };

  const mobilePositions = {
    "top-right": "top: 8px;\n    right: 8px;",
    "top-left": "top: 8px;\n    left: 8px;",
    "bottom-left": "bottom: 8px;\n    left: 8px;",
    "bottom-right": "right: 8px;\n    bottom: 8px;",
  };

  return {
    className: positionClass,
    desktop: desktopPositions[position] || desktopPositions["top-left"],
    mobile: mobilePositions[position] || mobilePositions["top-left"],
  };
}

function getBadgeNote() {
  return `<!--
Positioning note: The badge is absolutely positioned. Make sure the parent element that contains this badge is set to position: relative; so placement works correctly.
-->`;
}

function getBadgeMarkup() {
  return `<div class="rlab-pbadge-badge ${getBadgePositionClass()}">${escapeHtml(getBadgeText())}</div>`;
}

function getBadgeCss() {
  const positionCss = getBadgePositionCss();

  return `<style>
.rlab-pbadge-badge {
  position: absolute;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border: 1px solid #111111;
  background: #111111;
  color: #ffffff;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  border-radius: ${getBadgeRadius()};
}

.${positionCss.className} {
  ${positionCss.desktop}
}

@media only screen and (max-width: 767px) {
  .rlab-pbadge-badge {
    padding: 5px 8px;
    font-size: 11px;
  }

  .${positionCss.className} {
    ${positionCss.mobile}
  }
}
</style>`;
}

function buildOutput() {
  return [getBadgeNote(), getBadgeCss(), "", getBadgeMarkup()].join("\n");
}

function updatePreview() {
  const badge = pbadgePreviewStage?.querySelector(".rlab-pbadge-badge");

  if (!badge) return;

  badge.textContent = getBadgeText();
  badge.className = `rlab-pbadge-badge ${getBadgePositionClass()}`;
  badge.style.borderRadius = getBadgeRadius();
}

function updateOutput() {
  pbadgeOutput.textContent = buildOutput();
}

function updateGenerator() {
  updatePreview();
  updateOutput();
}

[pbadgeText, pbadgeRadius, pbadgePosition].forEach((field) => {
  field?.addEventListener("input", updateGenerator);
  field?.addEventListener("change", updateGenerator);
});

copyBtn.addEventListener("click", async () => {
  updateGenerator();

  try {
    await navigator.clipboard.writeText(pbadgeOutput.textContent);
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
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

updateGenerator();
