const timerTextBefore = document.getElementById("timer-text-before");
const timerTextAfter = document.getElementById("timer-text-after");
const timerBtnText = document.getElementById("timer-btn-text");
const timerBtnUrl = document.getElementById("timer-btn-url");
const timerStartDate = document.getElementById("timer-start-date");
const timerEndDate = document.getElementById("timer-end-date");
const timerBoxRadius = document.getElementById("timer-box-radius");
const timerBtnRadius = document.getElementById("timer-btn-radius");
const timerBarRadius = document.getElementById("timer-bar-radius");

const timerOutput = document.getElementById("timerOutput");
const previewCont = document.getElementById("timerPreviewStage");
const copyBtn = document.getElementById("rdcl-copy-btn");

let previewTimerInterval = null;
let timerPreviewStyle = document.getElementById("timer-preview-style");

if (!timerPreviewStyle) {
  timerPreviewStyle = document.createElement("style");
  timerPreviewStyle.id = "timer-preview-style";
  document.head.appendChild(timerPreviewStyle);
}

function getValueOrPlaceholder(el) {
  return (el.value || el.placeholder || "").trim();
}

function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeRadiusValue(value) {
  const v = String(value).trim().toLowerCase();
  if (["0", "2", "4", "10", "full"].includes(v)) return v;
  return "0";
}

function getRadiusClass(value) {
  const raw = (value || "").trim();
  if (!raw) return "";

  if (!raw.includes(",")) {
    return `rdc-br-${normalizeRadiusValue(raw)}`;
  }

  const parts = raw.split(",").map((v) => v.trim());
  const corners = ["tl", "tr", "br", "bl"];

  return corners
    .map((corner, i) => {
      const part = parts[i] || "0";
      return `rdc-br-${corner}-${normalizeRadiusValue(part)}`;
    })
    .join(" ");
}

function getRadiusCssForClass(className) {
  const radiusMap = {
    0: "0",
    2: "2px",
    4: "4px",
    10: "10px",
    full: "999px",
  };

  const singleMatch = className.match(/^rdc-br-(0|2|4|10|full)$/);

  if (singleMatch) {
    return `.${className} { border-radius: ${radiusMap[singleMatch[1]]}; }`;
  }

  const cornerMatch = className.match(/^rdc-br-(tl|tr|br|bl)-(0|2|4|10|full)$/);

  if (!cornerMatch) return "";

  const cornerMap = {
    tl: "border-top-left-radius",
    tr: "border-top-right-radius",
    br: "border-bottom-right-radius",
    bl: "border-bottom-left-radius",
  };

  return `.${className} { ${cornerMap[cornerMatch[1]]}: ${
    radiusMap[cornerMatch[2]]
  }; }`;
}

function getRadiusCss(values) {
  const classes = [
    values.boxRadiusClass,
    values.btnRadiusClass,
    values.barRadiusClass,
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean);

  return [...new Set(classes)]
    .map(getRadiusCssForClass)
    .filter(Boolean)
    .join("\n");
}

function getTimerBaseCss() {
  return `* {
  box-sizing: border-box;
}

.rdc-d-flex {
  display: flex;
}

.rdc-jc-cen {
  justify-content: center;
}

.rdc-ai-cen {
  align-items: center;
}

.rdc-of-hid {
  overflow: hidden;
}

.rlab-timerbar-inner {
  gap: 22px;
  padding: 8px;
  background-color: #266aa9;
}

.rlab-timerbar-inner * {
  color: #ffffff;
}

.rlab-timerbar-timer {
  gap: 8px;
}

.rlab-timerbar-timer > div {
  background-color: #000000;
  padding: 6px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  width: 40px;
}

span.rlab-timerbar-num {
  font-weight: 400;
}

.rlab-timerbar-timer span {
  font-size: 16px;
  letter-spacing: 1px;
}

span.rlab-timerbar-label {
  font-size: 7px;
  margin-top: 2px;
}

.rlab-timerbar-btn {
  background-color: #e36800;
  color: #ffffff;
  text-decoration: unset;
  padding: 8px 20px;
  font-weight: 600;
}`;
}

function getGeneratedCss(values) {
  return [getTimerBaseCss(), getRadiusCss(values)].filter(Boolean).join("\n\n");
}

function toDatetimeLocalString(date) {
  const pad = (n) => String(n).padStart(2, "0");

  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hours = pad(date.getUTCHours());
  const mins = pad(date.getUTCMinutes());

  return `${year}-${month}-${day}T${hours}:${mins}`;
}

function getDefaultDates() {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(
    now.getTime() + 3 * 86400000 + 12 * 3600000 + 45 * 60000,
  );

  return {
    startDate: toDatetimeLocalString(start),
    endDate: toDatetimeLocalString(end),
  };
}

function formatTimerDateForOutput(value) {
  if (!value) return "";

  const date = parseTimerDate(value);
  if (!date || Number.isNaN(date.getTime())) return value;

  const pad = (n) => String(n).padStart(2, "0");
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const year = date.getUTCFullYear();
  const hours = pad(date.getUTCHours());
  const mins = pad(date.getUTCMinutes());

  return `${month}/${day}/${year} ${hours}:${mins}`;
}

function parseTimerDate(value) {
  if (!value) return null;

  const normalized = String(value).trim();
  const inputMatch = normalized.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/,
  );

  if (inputMatch) {
    return new Date(
      Date.UTC(
        Number(inputMatch[1]),
        Number(inputMatch[2]) - 1,
        Number(inputMatch[3]),
        Number(inputMatch[4]),
        Number(inputMatch[5]),
      ),
    );
  }

  const match = normalized.match(
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}))?$/,
  );

  if (match) {
    const month = Number(match[1]) - 1;
    const day = Number(match[2]);
    const year = Number(match[3]);
    const hours = Number(match[4] || 0);
    const mins = Number(match[5] || 0);

    return new Date(Date.UTC(year, month, day, hours, mins));
  }

  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

function ensureDateDefaults() {
  const defaults = getDefaultDates();

  if (!timerStartDate.value) {
    timerStartDate.value = defaults.startDate;
  }

  if (!timerEndDate.value) {
    timerEndDate.value = defaults.endDate;
  }
}

function getFormValues() {
  ensureDateDefaults();

  return {
    textBefore: getValueOrPlaceholder(timerTextBefore) || "SALE ENDS IN",
    textAfter: getValueOrPlaceholder(timerTextAfter) || "USE CODE: SALE15",
    btnText: getValueOrPlaceholder(timerBtnText) || "SHOP NOW",
    btnUrl: getValueOrPlaceholder(timerBtnUrl) || "#",
    startDate: timerStartDate.value,
    endDate: timerEndDate.value,
    boxRadiusClass: getRadiusClass(
      timerBoxRadius.value || timerBoxRadius.placeholder || "",
    ),
    btnRadiusClass: getRadiusClass(
      timerBtnRadius.value || timerBtnRadius.placeholder || "",
    ),
    barRadiusClass: getRadiusClass(
      timerBarRadius.value || timerBarRadius.placeholder || "",
    ),
  };
}

function getBoxHtml(num, label, radiusClass) {
  const classes = ["rlab-timerbar-box"];
  if (radiusClass) classes.push(radiusClass);

  return `<div class="${classes.join(" ")}">
  <span class="rlab-timerbar-num">${num}</span>
  <span class="rlab-timerbar-label">${label}</span>
</div>`;
}

function buildTimerBarHtml(values) {
  const mainClasses = ["rlab-timerbar-main", "rdc-of-hid"];
  const btnClasses = ["rlab-timerbar-btn"];

  if (values.barRadiusClass) mainClasses.push(values.barRadiusClass);
  if (values.btnRadiusClass) btnClasses.push(values.btnRadiusClass);

  return `<div class="${mainClasses.join(" ")}">
  <div class="rlab-timerbar-inner rdc-d-flex rdc-jc-cen rdc-ai-cen">
    <div class="rlab-timerbar-text-before">
      ${escapeHtml(values.textBefore)}
    </div>

    <div class="rlab-timerbar-timer rdc-d-flex">
      ${getBoxHtml("00", "DAYS", values.boxRadiusClass)}
      ${getBoxHtml("00", "HRS", values.boxRadiusClass)}
      ${getBoxHtml("00", "MINS", values.boxRadiusClass)}
      ${getBoxHtml("00", "SECS", values.boxRadiusClass)}
    </div>

    <div class="rlab-timerbar-text-after">
      ${escapeHtml(values.textAfter)}
    </div>

    <a href="${escapeHtml(values.btnUrl)}" class="${btnClasses.join(" ")}">
      ${escapeHtml(values.btnText)}
    </a>
  </div>
</div>`;
}

function getTimerScript(values) {
  const outputStartDate = formatTimerDateForOutput(values.startDate);
  const outputEndDate = formatTimerDateForOutput(values.endDate);

  return `<script>
(function () {
  const timerBar = document.querySelector(".rlab-timerbar-main");
  if (!timerBar) return;

  // UTC date format: MM/DD/YYYY or MM/DD/YYYY HH:mm
  const startDate = ${JSON.stringify(outputStartDate)};
  const endDate = ${JSON.stringify(outputEndDate)};

  const boxes = timerBar.querySelectorAll(".rlab-timerbar-box");
  if (boxes.length < 4) return;

  function parseTimerDate(value) {
    if (!value) return null;

    const normalized = String(value).trim();
    const match = normalized.match(
      /^(\\d{1,2})\\/(\\d{1,2})\\/(\\d{4})(?:\\s+(\\d{1,2}):(\\d{2}))?$/
    );

    if (match) {
      const month = Number(match[1]) - 1;
      const day = Number(match[2]);
      const year = Number(match[3]);
      const hours = Number(match[4] || 0);
      const mins = Number(match[5] || 0);

      return new Date(Date.UTC(year, month, day, hours, mins));
    }

    const date = new Date(normalized);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function setValues(days, hours, mins, secs) {
    boxes[0].querySelector(".rlab-timerbar-num").textContent = String(days).padStart(2, "0");
    boxes[1].querySelector(".rlab-timerbar-num").textContent = String(hours).padStart(2, "0");
    boxes[2].querySelector(".rlab-timerbar-num").textContent = String(mins).padStart(2, "0");
    boxes[3].querySelector(".rlab-timerbar-num").textContent = String(secs).padStart(2, "0");
  }

  function hideTimerBar() {
    timerBar.hidden = true;
  }

  function updateCountdown() {
    if (!endDate) {
      hideTimerBar();
      return;
    }

    const now = new Date();
    const start = parseTimerDate(startDate);
    const end = parseTimerDate(endDate);

    if (!end) {
      hideTimerBar();
      return;
    }

    if (start && now < start) {
      timerBar.hidden = false;
      setValues(0, 0, 0, 0);
      return;
    }

    let diff = end - now;

    if (diff <= 0) {
      hideTimerBar();
      return;
    }

    timerBar.hidden = false;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    const secs = Math.floor(diff / 1000);

    setValues(days, hours, mins, secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
<\/script>`;
}

function buildOutput(values) {
  return `<style>
${getGeneratedCss(values)}
</style>

${buildTimerBarHtml(values)}

${getTimerScript(values)}`;
}

function getTimeParts(startDateStr, endDateStr) {
  if (!endDateStr) {
    return { days: 0, hours: 0, mins: 0, secs: 0, isExpired: true };
  }

  const now = new Date();
  const start = parseTimerDate(startDateStr);
  const end = parseTimerDate(endDateStr);

  if (!end) {
    return { days: 0, hours: 0, mins: 0, secs: 0, isExpired: true };
  }

  if (start && now < start) {
    return { days: 0, hours: 0, mins: 0, secs: 0, isExpired: false };
  }

  let diff = end - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, mins: 0, secs: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);

  const secs = Math.floor(diff / 1000);

  return { days, hours, mins, secs, isExpired: false };
}

function renderPreviewNumbers(values) {
  const timerBar = previewCont.querySelector(".rlab-timerbar-main");
  const boxes = previewCont.querySelectorAll(".rlab-timerbar-box");
  if (boxes.length < 4) return;

  const parts = getTimeParts(values.startDate, values.endDate);

  if (timerBar) {
    timerBar.hidden = parts.isExpired;
  }

  if (parts.isExpired) return;

  boxes[0].querySelector(".rlab-timerbar-num").textContent = String(
    parts.days,
  ).padStart(2, "0");
  boxes[1].querySelector(".rlab-timerbar-num").textContent = String(
    parts.hours,
  ).padStart(2, "0");
  boxes[2].querySelector(".rlab-timerbar-num").textContent = String(
    parts.mins,
  ).padStart(2, "0");
  boxes[3].querySelector(".rlab-timerbar-num").textContent = String(
    parts.secs,
  ).padStart(2, "0");
}

function updatePreview() {
  const values = getFormValues();

  if (previewTimerInterval) {
    clearInterval(previewTimerInterval);
    previewTimerInterval = null;
  }

  timerPreviewStyle.textContent = getGeneratedCss(values);
  previewCont.innerHTML = buildTimerBarHtml(values);
  renderPreviewNumbers(values);

  previewTimerInterval = setInterval(() => {
    renderPreviewNumbers(values);
  }, 1000);
}

function updateOutput() {
  const values = getFormValues();
  timerOutput.textContent = buildOutput(values);
}

function generateTimerBar() {
  updatePreview();
  updateOutput();
}

[
  timerTextBefore,
  timerTextAfter,
  timerBtnText,
  timerBtnUrl,
  timerStartDate,
  timerEndDate,
  timerBoxRadius,
  timerBtnRadius,
  timerBarRadius,
].forEach((el) => {
  el.addEventListener("input", generateTimerBar);
  el.addEventListener("change", generateTimerBar);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(timerOutput.textContent);
    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy Code";
    }, 1200);
  } catch {
    copyBtn.textContent = "Copy Failed";

    setTimeout(() => {
      copyBtn.textContent = "Copy Code";
    }, 1200);
  }
});

generateTimerBar();
