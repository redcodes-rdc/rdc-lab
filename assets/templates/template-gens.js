const main = document.querySelector("main");

const rdcAiPreviewImages = {
  twoColumnGenerator: {
    src: "/assets/images/rdc-lab-2-column-code-generator-sample-ai-prompt-output.jpg",
    alt: "Sample AI prompt output for the 2-column code generator",
  },
  accordionGenerator: {
    src: "/assets/images/rdc-lab-accordion-code-generator-sample-ai-prompt-output.jpg",
    alt: "Sample AI prompt output for the accordion code generator",
  },
};

function renderRdcAiPreviewImage() {
  const image = rdcAiPreviewImages[document.body.dataset.seoPage];

  if (image) {
    return `<img class="rdc-w-full rdc-br-6" src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async" />`;
  }

  return `<svg width="132" height="92" viewBox="0 0 132 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="1.5" y="1.5" width="129" height="89" rx="8.5" stroke="currentColor" stroke-width="3" opacity=".28"/>
                      <path d="M26 65L48 42L64 58L77 45L104 65H26Z" fill="currentColor" opacity=".18"/>
                      <circle cx="76" cy="28" r="8" fill="currentColor" opacity=".16"/>
                      <path d="M15 15H50" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".24"/>
                      <path d="M82 15H117" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".24"/>
                    </svg>
                    <span>AI preview image placeholder</span>`;
}

const genTemplate = `<div class="rdcl-gen-main">
        <div class="rdcl-gen-inner rdc-mw-1400 rdc-m-iauto">
          ${renderGeneratorBreadcrumb({
            label: "Back to Generators",
            href: "/pages/html-generators/",
          })}
          <div class="rdcl-gen--cols rdc-m-b20 rdc-p-5">
            <div class="rdcl-gen--cols-inner rdc-d-flex">
              <!-- LEFT: VIEW -->
              <div class="rdcl-gen--cols-vw rdc-p-r20 rdc-m-p-0 rdc-w-half">
              
              </div>

              <!-- RIGHT: SETTINGS -->
              <div class="rdcl-gen--cols-set-wrap rdc-m-d-none rdc-w-half rdc-lab-border-2 rdc-p-20 rdc-bg-dark-5">
              <p class="rdc-gen-mini-h rdc-d-flex rdc-ai-cen"><span class="rdcl-mini-h-icon rdc-d-iflex rdc-m-r10"><svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M150.954 44.6738V122.477L83.5752 161.377L16.1973 122.477V44.6738L83.5752 5.77344L150.954 44.6738Z" stroke="#C7F931" stroke-width="10"/>
<circle cx="83.5757" cy="83.5757" r="35.6621" stroke="#C6F932" stroke-width="10"/>
</svg>
</span>CONFIGURATION</p>
              <div class="rdcl-gen--cols-set">
              
              </div>
              </div>
            </div>
          </div>
          <!-- RIGHT: SMALL SCREEN NOTE -->
          <div class="rdcl-gen--cols-sm-note rdc-d-none rdc-ff-baij rdc-fw-900 rdc-m-d-block rdc-ta-cen rdc-p-b20">
          PLEASE USE A BIGGER SCREEN TO USE THIS TOOL.
          </div>

          <!-- PREVIEW -->
          <div class="rdcl-gen--layout-vw-wrap rdc-m-d-none rdc-p-20 rdc-m-b20 rdc-bg-dark-5 rdc-lab-border-2">
          <p class="rdc-gen-mini-h rdc-d-flex rdc-ai-cen rdc-m-b20"><span class="rdcl-mini-h-icon rdc-d-iflex rdc-m-r10"><svg width="158" height="86" viewBox="0 0 158 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.5449 5C98.9612 5.00003 117.638 13.0041 131.294 22.1904C138.105 26.7727 143.538 31.5641 147.208 35.624C149.049 37.6603 150.369 39.4292 151.198 40.8203C151.783 41.8015 151.984 42.3671 152.053 42.5752C151.984 42.783 151.783 43.3483 151.198 44.3301C150.369 45.7212 149.049 47.49 147.208 49.5264C143.538 53.5863 138.105 58.3777 131.294 62.96C117.638 72.1463 98.9612 80.1504 78.5449 80.1504C58.1286 80.1504 39.4514 72.1464 25.7959 62.96C18.9843 58.3776 13.5517 53.5863 9.88184 49.5264C8.04114 47.49 6.7196 45.7212 5.89062 44.3301C5.3053 43.3478 5.10408 42.7826 5.03516 42.5752C5.10421 42.3675 5.30556 41.8021 5.89062 40.8203C6.71958 39.4292 8.04127 37.6613 9.88184 35.625C13.5517 31.565 18.9842 26.7728 25.7959 22.1904C39.4514 13.004 58.1286 5 78.5449 5Z" stroke="#C6F932" stroke-width="10"/>
<circle cx="78.5449" cy="42.5755" r="24.4536" stroke="#C6F932" stroke-width="10"/>
</svg>
</span>PREVIEW</p>
          <div class="rdcl-gen--layout-vw">
          </div>
          </div>

          <!-- AI PROMPT HELPER -->
          <section class="rdcl-ai-rest rdc-m-d-none rdc-m-b20 rdc-p-20 rdc-bg-dark-6 rdc-lab-border-2" aria-labelledby="rdcl-ai-rest-title">
            <div class="rdcl-ai-rest-head">
              <div class="rdcl-ai-rest-kicker rdc-d-flex rdc-ai-cen">
                <span class="rdcl-ai-rest-spark" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6 2.8L18.1 10.1L25.2 12.6L18.1 15.1L15.6 22.4L13.1 15.1L6 12.6L13.1 10.1L15.6 2.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M25.3 20.5L26.4 23.7L29.5 24.8L26.4 25.9L25.3 29.2L24.2 25.9L21 24.8L24.2 23.7L25.3 20.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                    <path d="M5.8 21.2L6.6 23.4L8.8 24.2L6.6 25L5.8 27.2L5 25L2.8 24.2L5 23.4L5.8 21.2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                </span>
                <h2 id="rdcl-ai-rest-title" class="rdc-fs-30 rdc-m-l10">Let <span>AI</span> do the rest</h2>
              </div>
              <p>Customize, optimize, and take your generated component further with AI.</p>
            </div>

            <div class="rdcl-ai-rest-grid">
              <div class="rdcl-ai-panel rdcl-ai-config">
                <div class="rdcl-ai-panel-title">
                  <span class="rdcl-ai-title-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H18.5C19.33 4 20 4.67 20 5.5V14.5C20 15.33 19.33 16 18.5 16H11L7 20V16H5.5C4.67 16 4 15.33 4 14.5V5.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                      <path d="M8 9H8.01M12 9H12.01M16 9H16.01" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3>Configure your AI prompt</h3>
                    <p>Choose what you want AI to do. Add details for better results.</p>
                  </div>
                </div>

                <div class="rdcl-ai-form-group">
                  <p class="rdcl-ai-label">AI Tasks</p>
                  <div class="rdcl-ai-task-list" data-rdcl-ai-tasks></div>
                </div>

                <div class="rdcl-ai-context">
                  <p class="rdcl-ai-label">Additional Context (Optional)</p>
                  <div class="rdcl-ai-context-grid">
                    <label>Brand / Store Name<input type="text" data-rdcl-ai-context="brand" placeholder="e.g. Acme Store"></label>
                    <label>Niche / Industry<input type="text" data-rdcl-ai-context="niche" placeholder="e.g. Fashion"></label>
                    <label>Goal / Use Case<input type="text" data-rdcl-ai-context="goal" placeholder="e.g. Increase conversions"></label>
                  </div>
                  <label class="rdcl-ai-notes-label">Additional Notes<textarea data-rdcl-ai-context="notes" placeholder="Any specific instructions for the AI..."></textarea></label>
                </div>

                <button class="rdcl-ai-copy-btn" type="button" data-rdcl-ai-copy>
                  <span aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8.5C8 7.67 8.67 7 9.5 7H18.5C19.33 7 20 7.67 20 8.5V18.5C20 19.33 19.33 20 18.5 20H9.5C8.67 20 8 19.33 8 18.5V8.5Z" stroke="currentColor" stroke-width="2"/>
                      <path d="M5 16.5H4.5C3.67 16.5 3 15.83 3 15V5.5C3 4.67 3.67 4 4.5 4H14C14.83 4 15.5 4.67 15.5 5.5V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </span>
                  <span class="rdcl-ai-copy-btn-text">Copy Prompt</span>
                </button>
                <p class="rdcl-ai-copy-note">Tip: Open ChatGPT in a new tab (Ctrl/Cmd + T), paste your copied generator code at the very top, then paste this prompt below it.</p>
              </div>

              <div class="rdcl-ai-side">
                <div class="rdcl-ai-panel rdcl-ai-preview-panel">
                  <div class="rdcl-ai-panel-title">
                    <span class="rdcl-ai-title-icon rdcl-ai-title-icon-pink" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.8 12C4.9 8.4 8.1 6.6 12 6.6C15.9 6.6 19.1 8.4 21.2 12C19.1 15.6 15.9 17.4 12 17.4C8.1 17.4 4.9 15.6 2.8 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.8"/>
                      </svg>
                    </span>
                    <div>
                      <h3>Sample Output</h3>
                      <p>See a sample idea of how AI can enhance your component.</p>
                    </div>
                    <button class="rdcl-ai-preview-toggle" type="button" data-rdcl-ai-preview-toggle aria-expanded="true">
                      <span class="rdcl-ai-preview-toggle-icon rdcl-ai-preview-toggle-icon-show" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.8 12C4.9 8.4 8.1 6.6 12 6.6C15.9 6.6 19.1 8.4 21.2 12C19.1 15.6 15.9 17.4 12 17.4C8.1 17.4 4.9 15.6 2.8 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                          <circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.8"/>
                        </svg>
                      </span>
                      <span class="rdcl-ai-preview-toggle-icon rdcl-ai-preview-toggle-icon-hide" aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                          <path d="M9.6 6.95C10.36 6.72 11.16 6.6 12 6.6C15.9 6.6 19.1 8.4 21.2 12C20.45 13.29 19.55 14.35 18.52 15.18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M14.12 16.98C13.44 17.26 12.73 17.4 12 17.4C8.1 17.4 4.9 15.6 2.8 12C3.66 10.53 4.72 9.37 5.96 8.52" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span class="rdcl-ai-preview-toggle-text">Hide preview</span>
                    </button>
                  </div>
                  <div class="rdcl-ai-preview-image" aria-label="AI prompt sample output preview">
                    ${renderRdcAiPreviewImage()}
                  </div>
                  <p class="rdcl-ai-preview-note">Preview is a sample idea only. Results may vary because AI output is not always consistent and depends on your selected tasks, pasted code, and customization notes.</p>
                </div>

                <div class="rdcl-ai-panel rdcl-ai-prompt-panel">
                  <div class="rdcl-ai-prompt-head">
                    <p>
                      <span aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20L8.3 19.1L19.2 8.2C20.1 7.3 20.1 5.9 19.2 5L19 4.8C18.1 3.9 16.7 3.9 15.8 4.8L4.9 15.7L4 20Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                          <path d="M14.5 6.1L17.9 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                        </svg>
                      </span>
                      AI Prompt (Editable)
                    </p>
                    <button type="button" data-rdcl-ai-reset>
                      <span aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12C4 7.58 7.58 4 12 4C14.54 4 16.8 5.18 18.27 7.03" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                          <path d="M18.5 4V7.5H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M20 12C20 16.42 16.42 20 12 20C9.46 20 7.2 18.82 5.73 16.97" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                          <path d="M5.5 20V16.5H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Reset to default
                    </button>
                  </div>
                  <div class="rdcl-ai-prompt-note-wrap">
                    <span class="rdcl-ai-prompt-note-icon" aria-hidden="true">ⓘ</span>
                    <div>
                      <p class="rdcl-ai-prompt-note">Start by pasting your copied generator code at the top of the AI prompt.</p>
                  <p class="rdcl-ai-prompt-detail-note">Make sure to provide any relevant context and task details to help the AI generate a more accurate result. Look for 👉 to find fields where you can insert or replace details.</p>
                    </div>
                  </div>
                  <div class="rdcl-ai-context-preview" data-rdcl-ai-context-preview></div>
                  <div class="rdcl-ai-generator-config-preview" data-rdcl-ai-generator-config-preview></div>
                  <div class="rdcl-ai-prompt-list" data-rdcl-ai-prompt-list></div>
                  <div class="rdcl-ai-notes-preview" data-rdcl-ai-notes-preview></div>
                  <p class="rdcl-ai-disclaimer">AI results may not be perfect. Review and adjust as needed before adding the code to a live site.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- TUTORIAL -->
          <div class="rdcl-gen-tutorial rdc-d-none rdc-m-d-none"></div>

          <!-- MORE GENERATORS -->
          <div class="rdcl-gen-more-gens rdc-m-b20"></div>

          <!-- CTA -->
          <div class="rdcl-gen-sm-cta rdc-lab-border-5 rdc-p-10"></div>
        </div>
      </div>`;

main.innerHTML = genTemplate;
initRdcAiRest();

function renderGeneratorBreadcrumb(link) {
  if (window.renderRdcLabBreadcrumb) return window.renderRdcLabBreadcrumb(link);

  return `
    <a class="rdcl-page-breadcrumb rdcl-tutorial-back rdc-d-iflex rdc-ai-cen rdc-td-none rdc-ff-baij rdc-fw-600 rdc-m-b30" href="${link.href}">
      <span class="rdc-c-lgray-1" aria-hidden="true">&larr;</span>
      <span class="rdc-m-l10 rdc-c-lgray-1 rdc-fs-12">${link.label}</span>
    </a>
  `;
}

function initRdcAiRest() {
  const root = document.querySelector(".rdcl-ai-rest");

  if (!root) return;

  const taskList = root.querySelector("[data-rdcl-ai-tasks]");
  const promptList = root.querySelector("[data-rdcl-ai-prompt-list]");
  const contextPreview = root.querySelector("[data-rdcl-ai-context-preview]");
  const generatorConfigPreview = root.querySelector(
    "[data-rdcl-ai-generator-config-preview]",
  );
  const notesPreview = root.querySelector("[data-rdcl-ai-notes-preview]");
  const copyButton = root.querySelector("[data-rdcl-ai-copy]");
  const copyButtonText = root.querySelector(".rdcl-ai-copy-btn-text");
  const configPanel = root.querySelector(".rdcl-ai-config");
  const previewToggle = root.querySelector("[data-rdcl-ai-preview-toggle]");
  const previewToggleText = root.querySelector(".rdcl-ai-preview-toggle-text");
  const resetButton = root.querySelector("[data-rdcl-ai-reset]");
  const contextFields = Array.from(
    root.querySelectorAll("[data-rdcl-ai-context]"),
  );
  const generatorName = getRdcAiGeneratorName();
  const generatorType = getRdcAiGeneratorType(generatorName);
  const tasks = getRdcAiTasks(generatorType, generatorName);
  const state = {
    selected: new Set(
      tasks.filter((task) => task.defaultSelected).map((task) => task.id),
    ),
    drafts: Object.fromEntries(tasks.map((task) => [task.id, task.prompt])),
  };

  taskList.innerHTML = tasks.map(renderRdcAiTask).join("");

  taskList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-rdcl-ai-task]");

    if (!checkbox) return;

    syncRdcAiDraftsFromTextareas();

    if (checkbox.checked) {
      state.selected.add(checkbox.value);
    } else {
      state.selected.delete(checkbox.value);
    }

    renderRdcAiPrompts();
    updateRdcAiStickyState();
  });

  promptList.addEventListener("input", (event) => {
    const textarea = event.target.closest("[data-rdcl-ai-prompt]");

    if (!textarea) return;

    state.drafts[textarea.dataset.rdclAiPrompt] = textarea.value;
  });

  contextFields.forEach((field) => {
    field.addEventListener("input", () => {
      renderRdcAiContext();
      renderRdcAiGeneratorConfig();
      updateRdcAiStickyState();
    });
  });

  document.addEventListener("input", handleRdcAiGeneratorConfigChange);
  document.addEventListener("change", handleRdcAiGeneratorConfigChange);

  resetButton.addEventListener("click", () => {
    tasks.forEach((task) => {
      state.drafts[task.id] = task.prompt;
    });
    renderRdcAiPrompts();
    updateRdcAiStickyState();
  });

  previewToggle?.addEventListener("click", () => {
    const isHidden = root.classList.toggle("is-preview-hidden");

    if (previewToggleText) {
      previewToggleText.textContent = isHidden
        ? "Show preview"
        : "Hide preview";
    }
    previewToggle.setAttribute("aria-expanded", String(!isHidden));
    updateRdcAiStickyState();
  });

  copyButton.addEventListener("click", async () => {
    syncRdcAiDraftsFromTextareas();
    const copied = await copyRdcAiPromptToClipboard(buildRdcAiPromptText());

    if (copyButtonText) {
      copyButtonText.textContent = copied ? "Copied!" : "Copy Failed";
    }

    setTimeout(() => {
      if (copyButtonText) {
        copyButtonText.textContent = "Copy Prompt";
      }
    }, 1400);
  });

  renderRdcAiContext();
  renderRdcAiGeneratorConfig();
  renderRdcAiPrompts();
  updateRdcAiStickyState();
  window.addEventListener("resize", updateRdcAiStickyState);

  if (window.ResizeObserver && configPanel) {
    const stickyObserver = new ResizeObserver(updateRdcAiStickyState);
    stickyObserver.observe(configPanel);
  }

  const generatorSettings = document.querySelector(".rdcl-gen--cols-set");

  if (window.MutationObserver && generatorSettings) {
    const settingsObserver = new MutationObserver(() => {
      renderRdcAiGeneratorConfig();
      updateRdcAiStickyState();
    });
    settingsObserver.observe(generatorSettings, {
      childList: true,
      subtree: true,
    });
  }

  function renderRdcAiTask(task) {
    return `
      <label class="rdcl-ai-task">
        <input type="checkbox" data-rdcl-ai-task value="${task.id}"${task.defaultSelected ? " checked" : ""}>
        <span class="rdcl-ai-check" aria-hidden="true"></span>
        <span>
          <strong>${task.label}</strong>
          <em>${task.description}</em>
        </span>
      </label>
    `;
  }

  function renderRdcAiContext() {
    const values = getRdcAiContextValues();
    const rows = [
      ["Brand / Store", values.brand || "Not provided"],
      ["Niche / Industry", values.niche || "Not provided"],
      ["Goal / Use Case", values.goal || "Not provided"],
    ];

    contextPreview.innerHTML = `<div class="rdcl-ai-prompt-block rdcl-ai-prompt-context"><strong>Context</strong><pre>${escapeHtml(rows.map((row) => `- 👉 ${row[0]}: ${row[1]}`).join("\n"))}</pre></div>`;

    notesPreview.innerHTML = values.notes
      ? `<div class="rdcl-ai-prompt-block rdcl-ai-prompt-notes"><strong>Additional Notes</strong><pre>${escapeHtml(values.notes)}</pre></div>`
      : "";
  }

  function renderRdcAiGeneratorConfig() {
    const rows = getRdcAiGeneratorConfigRows();

    if (!generatorConfigPreview) return;

    generatorConfigPreview.innerHTML = rows.length
      ? `<div class="rdcl-ai-prompt-block rdcl-ai-prompt-generator-config"><strong>Generator Configuration</strong><pre>${escapeHtml(rows.map((row) => `- 👉 ${row.label}: ${row.value}`).join("\n"))}</pre></div>`
      : "";
  }

  function renderRdcAiPrompts() {
    const selectedTasks = tasks.filter((task) => state.selected.has(task.id));

    promptList.innerHTML = selectedTasks.length
      ? selectedTasks.map(renderRdcAiPromptBlock).join("")
      : `<div class="rdcl-ai-empty">Choose at least one AI task to build your prompt.</div>`;
  }

  function renderRdcAiPromptBlock(task) {
    return `
      <div class="rdcl-ai-prompt-block">
        <label for="rdcl-ai-prompt-${task.id}">${task.label}</label>
        <textarea id="rdcl-ai-prompt-${task.id}" data-rdcl-ai-prompt="${task.id}" spellcheck="false">${escapeHtml(state.drafts[task.id])}</textarea>
      </div>
    `;
  }

  function getRdcAiContextValues() {
    return contextFields.reduce((values, field) => {
      values[field.dataset.rdclAiContext] = field.value.trim();
      return values;
    }, {});
  }

  function handleRdcAiGeneratorConfigChange(event) {
    if (!event.target.closest(".rdcl-gen--cols-field")) return;

    renderRdcAiGeneratorConfig();
    updateRdcAiStickyState();
  }

  function syncRdcAiDraftsFromTextareas() {
    promptList.querySelectorAll("[data-rdcl-ai-prompt]").forEach((textarea) => {
      state.drafts[textarea.dataset.rdclAiPrompt] = textarea.value;
    });
  }

  function updateRdcAiStickyState() {
    if (!configPanel) return;

    requestAnimationFrame(() => {
      const hasDesktopWidth = window.matchMedia("(min-width: 768px)").matches;

      configPanel.classList.toggle("is-sticky", hasDesktopWidth);
    });
  }

  function buildRdcAiPromptText() {
    const values = getRdcAiContextValues();
    const selectedTasks = tasks
      .filter((task) => state.selected.has(task.id))
      .map((task) => ({
        label: task.label,
        prompt: (state.drafts[task.id] || "").trim(),
      }))
      .filter((task) => task.prompt);
    const taskLines = selectedTasks.length
      ? selectedTasks
          .map(
            (task, index) =>
              `${index + 1}. ${task.label}\n${indentRdcAiPrompt(task.prompt)}`,
          )
          .join("\n\n")
      : "No AI tasks selected.";
    const generatorConfigRows = getRdcAiGeneratorConfigRows();
    const generatorConfigLines = generatorConfigRows.length
      ? generatorConfigRows
          .map((row) => `- 👉 ${row.label}: ${row.value}`)
          .join("\n")
      : "- No configurable generator options detected.";

    return [
      "PASTE YOUR COPIED GENERATOR CODE ABOVE THIS PROMPT BEFORE SENDING.",
      "",
      `# AI Enhancement Request for ${generatorName}`,
      "",
      "## Role",
      "- You are an expert front-end developer.",
      "- Use Shopify Liquid expertise only when the selected tasks ask for Shopify Liquid.",
      "- Use the pasted generator code above as the source of truth.",
      "- Treat RDC Lab's generated component as already working. Enhance it; do not rebuild it from scratch.",
      "- Improve only what is requested below and only when the change is genuinely useful.",
      "",
      "## Priority Order",
      "1. Preserve the component's existing working functionality and visual intent.",
      "2. Make the smallest set of changes needed for the selected tasks.",
      "3. Preserve existing structure, IDs, data attributes, JavaScript behavior, event hooks, ARIA relationships, and rdc-* / rlab-* class names unless a selected task truly requires a change.",
      "4. Preserve the existing coding style where practical, including naming, indentation, JavaScript style, CSS organization, HTML formatting, and commenting style.",
      "5. Improve maintainability, accessibility, performance, and production readiness.",
      "6. Apply optional user preferences from Context, Design Options, task options, and Additional Notes.",
      "",
      "## Global Rules",
      "- First evaluate the pasted code before changing it. Ask: does this change actually improve the component?",
      "- Preserve working implementations when they already satisfy the selected task. Never rewrite code simply because another implementation is possible or stylistically preferred.",
      "- Do not normalize code style unless inconsistency is causing a practical problem.",
      "- If a selected task does not require changes, say so in Implementation Summary instead of forcing edits.",
      "- Ask before breaking: if a requested improvement would require major structural changes, redesigning the component, removing major portions of the implementation, or changing the public API, preserve the current implementation when possible. Explain the limitation in Implementation Summary and describe what would be required. Only make major structural changes when genuinely necessary for the selected task.",
      "- Do not invent brand details, niche details, goals, colors, typography, keywords, products, image descriptions, business claims, or content. If something is not provided, keep the component neutral and easy to customize.",
      "- Preserve all existing rdc-* and rlab-* classes. Add new classes only when they are needed for scoped styles or behavior.",
      "- Preserve IDs, data attributes, JavaScript selectors, event hooks, and ARIA relationships unless changing them is necessary and explained.",
      "- Keep CSS scoped to the component. Do not introduce external libraries, frameworks, fonts, or assets unless the user requests them.",
      "- Keep JavaScript safe for multiple component instances, with scoped initialization, no duplicate event listeners, no unnecessary globals, and no interference with other page scripts.",
      "- Keep the final code readable, maintainable, scalable, and production-ready without over-engineering it.",
      "",
      "## Context",
      `- 👉 Brand / Store: ${values.brand || "Not provided"}`,
      `- 👉 Niche / Industry: ${values.niche || "Not provided"}`,
      `- 👉 Goal / Use Case: ${values.goal || "Not provided"}`,
      "",
      "## Generator Configuration",
      "- Use these current generator settings as design and behavior context. Preserve or build on them unless a selected task requires a change.",
      generatorConfigLines,
      "",
      "## Selected Tasks",
      taskLines,
      "",
      "## Additional Notes",
      values.notes || "- 👉 No additional notes provided.",
      "",
      "## Internal Quality Checklist",
      "- Before responding, silently verify: every selected task was evaluated; functionality still works; rdc-* and rlab-* classes were preserved; IDs, data attributes, ARIA relationships, and JavaScript hooks still work; JavaScript selectors match the returned HTML; CSS remains scoped; multiple instances remain supported; Shopify conversion was only performed when requested; accessibility changes are appropriate; no unnecessary redesigns were introduced; the code is complete and production-ready.",
      "- Do not include this checklist in your response.",
      "",
      "## Required Output Format",
      "- Return the complete updated production-ready code. Do not return partial snippets unless the selected task explicitly asks for a separate file or Shopify snippet.",
      "- After the code, include Implementation Summary grouped by selected task, using headings such as Design, Mobile, Performance, Accessibility, Animations, Liquid, and SEO.",
      "- Under each task heading, summarize meaningful changes or state that no changes were necessary.",
      "- Include user-side setup notes when needed, especially for Shopify files, fonts, images, schema settings, SEO content, or theme placement.",
      "- Explain meaningful implementation decisions, especially any unavoidable structure, selector, behavior, or accessibility changes.",
    ]
      .filter((part) => part !== "")
      .join("\n");
  }
}

function indentRdcAiPrompt(value) {
  return String(value)
    .split("\n")
    .map((line) => `   ${line}`)
    .join("\n");
}

function getRdcAiGeneratorConfigRows() {
  return Array.from(document.querySelectorAll(".rdcl-gen--cols-field"))
    .map((control) => {
      const label = getRdcAiControlLabel(control);
      const value = getRdcAiControlValue(control);

      if (!label || !value) return null;

      return { label, value };
    })
    .filter(Boolean);
}

function getRdcAiControlLabel(control) {
  const sectionTitle = getRdcAiControlSectionTitle(control);
  const formatLabel = (label) => {
    if (!label) return "";

    return sectionTitle && !label.startsWith(`${sectionTitle} - `)
      ? `${sectionTitle} - ${label}`
      : label;
  };

  if (control.id) {
    const forLabel = document.querySelector(`label[for="${control.id}"]`);

    if (forLabel?.textContent?.trim()) {
      return formatLabel(forLabel.textContent.trim());
    }
  }

  const rowLabel = control.closest(".rdc-d-flex")?.querySelector("label");

  return formatLabel(
    rowLabel?.textContent?.trim() || control.name || control.id || "",
  );
}

function getRdcAiControlSectionTitle(control) {
  let node = control.closest(".rdc-d-flex");

  while (node?.previousElementSibling) {
    node = node.previousElementSibling;

    if (node.tagName === "H4") return node.textContent.trim();
  }

  return "";
}

function getRdcAiControlValue(control) {
  if (control.type === "checkbox")
    return control.checked ? "Enabled" : "Disabled";

  if (control.tagName === "SELECT") {
    const selectedOption = control.options[control.selectedIndex];

    return selectedOption?.textContent?.trim() || control.value || "";
  }

  const value = control.value?.trim();

  if (value) return value;

  return control.placeholder
    ? `Not provided (placeholder: ${control.placeholder})`
    : "Not provided";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getRdcAiGeneratorName() {
  const pageName = document
    .querySelector(".rdcl-gen--cols-vw-inner h1")
    ?.textContent?.trim();

  if (pageName) return pageName;

  return document.body?.dataset?.seoPage
    ? document.body.dataset.seoPage.replace(/Generator$/, " Generator")
    : "HTML Generator";
}

function getRdcAiGeneratorType(generatorName) {
  const value =
    `${document.body?.className || ""} ${document.body?.dataset?.seoPage || ""} ${generatorName}`.toLowerCase();

  if (value.includes("button")) return "button";
  if (value.includes("accordion") || value.includes("faq")) return "accordion";
  if (value.includes("tabs")) return "tabs";
  if (
    value.includes("2-col") ||
    value.includes("twocolumn") ||
    value.includes("column")
  )
    return "layout";
  if (value.includes("icon")) return "iconText";
  if (value.includes("timer")) return "timer";
  if (value.includes("progress")) return "progress";
  if (value.includes("modal")) return "modal";
  if (value.includes("badge")) return "badge";
  if (value.includes("sticky")) return "sticky";
  if (value.includes("tip")) return "tooltip";

  return "component";
}

function getRdcAiTasks(generatorType, generatorName) {
  const liquidDetails = getRdcAiLiquidPrompt(generatorType, generatorName);
  const designDetails = getRdcAiDesignPrompt(generatorType);
  const mobileDetails = getRdcAiMobilePrompt(generatorType);
  const seoDetails = getRdcAiSeoPrompt(generatorType);

  return [
    {
      id: "preserve",
      label: "Preserve HTML & Class Naming",
      description: "Keep the existing structure and rdc-* / rlab-* classes.",
      defaultSelected: true,
      prompt: [
        "Instruction:",
        "- Preserve the generated component as the foundation for all selected improvements.",
        "",
        "Specific Requirements:",
        "- Treat existing structure, selectors, IDs, data attributes, ARIA relationships, JavaScript hooks, and rdc-* / rlab-* classes as protected.",
        "- If any protected item must change, explain exactly why under Implementation Summary > Preserve HTML & Class Naming.",
      ].join("\n"),
    },
    {
      id: "design",
      label: "Improve Design",
      description:
        "Enhance spacing, typography, hierarchy, colors, and polish.",
      defaultSelected: true,
      prompt: designDetails,
    },
    {
      id: "mobile",
      label: "Improve Mobile Experience",
      description:
        "Refine smaller-screen spacing, stacking, and touch behavior.",
      defaultSelected: true,
      prompt: mobileDetails,
    },
    {
      id: "performance",
      label: "Optimize Performance",
      description: "Clean code, reduce bloat, and keep class names intact.",
      defaultSelected: true,
      prompt: [
        "Instruction:",
        "- Optimize only when the pasted code has a practical performance, maintainability, or redundancy issue.",
        "- If the code is already lightweight, preserve it and state that no major performance changes were needed.",
        "",
        "Performance Options:",
        "- 👉 CSS cleanup priority: [remove duplication / reduce selector complexity / keep current CSS mostly intact]",
        "- 👉 JavaScript cleanup priority: [scope events / reduce repeated DOM reads / keep current JS mostly intact]",
        "- 👉 Asset priority: [lazy-load images / compress images / no image changes needed]",
        "",
        "Specific Requirements:",
        "- Remove unnecessary duplication or dead code when it is safe.",
        "- Use efficient selectors and avoid overly broad CSS.",
        "- Avoid repeated DOM work in JavaScript.",
        "- Do not sacrifice readability or maintainability for tiny micro-optimizations.",
      ].join("\n"),
    },
    {
      id: "seo",
      label: "Add SEO Enhancements",
      description: "Improve semantic structure and SEO best practices.",
      defaultSelected: true,
      prompt: seoDetails,
    },
    {
      id: "shopify",
      label: "Convert to Shopify Liquid",
      description:
        "Convert the generated code into a useful Shopify Liquid section.",
      defaultSelected: false,
      prompt: liquidDetails,
    },
    {
      id: "accessibility",
      label: "Improve Accessibility",
      description:
        "Add ARIA, semantic structure, contrast, and keyboard support.",
      defaultSelected: false,
      prompt: [
        "Instruction:",
        "- Improve accessibility only where it is appropriate for the detected component and behavior.",
        "- Prefer semantic HTML. Use ARIA only when it adds necessary meaning, state, or relationships.",
        "",
        "Accessibility Options:",
        "- 👉 Interaction type: [button / link / modal / tabs / accordion / tooltip / progress indicator / other]",
        "- 👉 Keyboard behavior needed: [Enter and Space / Escape to close / arrow keys / Home and End / tab order only / not applicable]",
        "- 👉 Focus style preference: [keep existing / add visible outline / match brand color]",
        "",
        "Specific Requirements:",
        "- Preserve or improve visible focus states for keyboard users.",
        "- Improve color contrast only when the current contrast is likely insufficient.",
        "- For modals, tabs, accordions, menus, sliders, tooltips, and similar controls, apply the appropriate keyboard behavior, focus handling, states, and relationships only when relevant.",
        "- For motion, respect prefers-reduced-motion when animation is present.",
        "- For images, distinguish decorative images from meaningful images and provide alt text guidance without inventing real image content.",
        "- Include a short manual accessibility checklist only when accessibility changes were made.",
      ].join("\n"),
    },
    {
      id: "animations",
      label: "Add Animations",
      description: "Add subtle, performant motion and interactions.",
      defaultSelected: false,
      prompt: [
        "Instruction:",
        "- Add tasteful motion only where it improves clarity, feedback, or perceived polish.",
        "- Use Additional Notes as the main source of truth for animation style.",
        "- If no direction is provided, prefer subtle micro-interactions. If motion would distract or add complexity, avoid it.",
        "",
        "Animation Options:",
        "- 👉 Animation style: [subtle / playful / premium / bold / none on load, hover only]",
        "- 👉 Timing: [fast 150ms / standard 250ms / slow 400ms]",
        "- 👉 Trigger: [hover / focus / click / open-close / scroll into view / page load]",
        "- 👉 Intensity: [very subtle / noticeable / advanced]",
        "",
        "Specific Requirements:",
        "- Prefer CSS transitions or keyframes.",
        "- Animate transform and opacity when possible.",
        "- Add prefers-reduced-motion support.",
        "- Avoid flashy, slow, distracting, or layout-shifting effects.",
      ].join("\n"),
    },
  ];
}

function getRdcAiDesignPrompt(generatorType) {
  const details = {
    button: [
      "- 👉 Button background color: [e.g. #C5FA31, brand primary, transparent]",
      "- 👉 Button text color: [e.g. #101010, white, brand contrast color]",
      "- 👉 Hover style: [darken / invert / outline / subtle movement]",
      "- 👉 Border radius: [sharp / 4px / 10px / pill]",
      "- 👉 Button feel: [minimal / premium / playful / bold CTA]",
    ],
    modal: [
      "- 👉 Modal background color: [e.g. #ffffff, #211c1e, brand surface color]",
      "- 👉 Modal text color: [e.g. #111111, #ffffff, brand body color]",
      "- 👉 Overlay color: [dark / light / brand-tinted]",
      "- 👉 Overlay opacity: [e.g. 40%, 60%, 80%]",
      "- 👉 Close button style: [minimal icon / bordered / filled / text link]",
      "- 👉 Modal width: [compact / medium / wide]",
      "- 👉 Corner style: [sharp / slightly rounded / very rounded]",
    ],
    layout: [
      "- 👉 Section background color: [e.g. transparent, #ffffff, brand surface color]",
      "- 👉 Text color: [e.g. #111111, #ffffff, brand body color]",
      "- 👉 Column balance: [50/50 / image larger / text larger]",
      "- 👉 Image treatment: [square / rounded / full bleed / no image]",
      "- 👉 Spacing: [tight / balanced / spacious]",
      "- 👉 Edge style: [sharp / slightly rounded / soft rounded]",
    ],
    accordion: [
      "- 👉 Accordion background color: [e.g. transparent, white, dark surface]",
      "- 👉 Question text color: [e.g. brand heading color]",
      "- 👉 Answer text color: [e.g. brand body color]",
      "- 👉 Divider style: [solid / subtle / none]",
      "- 👉 Icon style: [plus-minus / chevron / text label]",
      "- 👉 Open item style: [highlight background / border accent / no special style]",
    ],
    tabs: [
      "- 👉 Tab style: [underline / pill / boxed / minimal]",
      "- 👉 Active tab color: [e.g. brand primary]",
      "- 👉 Inactive tab color: [e.g. muted gray]",
      "- 👉 Content background: [transparent / light / dark / brand surface]",
      "- 👉 Spacing: [compact / balanced / spacious]",
    ],
  };
  const selectedDetails = details[generatorType] || [
    "- 👉 Background color: [add preferred background or say keep current]",
    "- 👉 Text color: [add preferred text color or say keep current]",
    "- 👉 Accent color: [add brand accent color]",
    "- 👉 Corner style: [sharp / slightly rounded / rounded]",
    "- 👉 Spacing: [tight / balanced / spacious]",
  ];

  return [
    "Instruction:",
    "- Improve the visual design only where it makes the generated component clearer, more polished, or easier to use.",
    "- Follow the user's specifics below when they are filled in.",
    "- 👉 Note to user: feel free to replace the placeholders below with exact brand colors, vibe, spacing, or font preferences.",
    "",
    "Design Options:",
    "- 👉 Brand vibe: [minimal / playful / premium / editorial / bold / soft / conversion-focused]",
    "- 👉 Typography preference: [keep current / more modern / more editorial / use a specific font]",
    "- 👉 Font setup instructions: [include normal website instructions; include Shopify instructions only if Shopify is relevant]",
    ...selectedDetails,
    "",
    "Specific Requirements:",
    "- Review hierarchy, spacing, typography, color usage, contrast, alignment, and visual polish.",
    "- Change only the areas that would materially improve the component.",
    "- If a requested font is external, include setup notes. Include Shopify-specific font notes only when Shopify is relevant.",
  ].join("\n");
}

function getRdcAiMobilePrompt(generatorType) {
  const details = {
    timer: [
      "- 👉 Bar wrapping: [single line if possible / allow two lines / stack content]",
      "- 👉 Countdown size: [compact / medium / prominent]",
      "- 👉 Sticky behavior on mobile: [keep sticky / disable sticky / reduce height]",
    ],
    modal: [
      "- 👉 Mobile modal width: [full width with margin / nearly full screen / compact centered]",
      "- 👉 Mobile modal height: [content height / max-height with scroll / full screen]",
      "- 👉 Close button placement: [top right / outside corner / bottom action]",
    ],
    sticky: [
      "- 👉 Mobile sticky placement: [bottom / top / disable on mobile]",
      "- 👉 Button width: [full width / fit content]",
      "- 👉 Content density: [show all details / hide secondary details / button only]",
    ],
    layout: [
      "- 👉 Stack order: [image first / text first / keep current order]",
      "- 👉 Mobile spacing: [tight / balanced / spacious]",
      "- 👉 Image mobile behavior: [full width / contained / hide image]",
    ],
  };

  return [
    "Instruction:",
    "- Improve the mobile experience only where it genuinely helps.",
    "- First review whether the pasted code is already mobile friendly.",
    "- Avoid repetitive responsive rules when the current layout already works.",
    "- 👉 Note to user: add specific mobile pain points in Additional Notes if you have them.",
    "",
    "Mobile Options:",
    "- 👉 Target width: [mobile-first / under 767px / under 480px / all small screens]",
    "- 👉 Text sizing: [keep current / slightly smaller / slightly larger]",
    "- 👉 Touch target size: [minimum 44px / keep current if already usable]",
    ...(details[generatorType] || [
      "- 👉 Layout behavior: [stack / keep inline / allow horizontal scroll only if intentional]",
      "- 👉 Spacing: [tight / balanced / spacious]",
      "- 👉 Overflow handling: [prevent overflow / allow scroll / hide decorative elements]",
    ]),
    "",
    "Specific Requirements:",
    "- Check stacking, spacing, tap target size, readable font size, overflow, image scaling, sticky behavior, and touch behavior.",
    "- Add or adjust responsive CSS only where the component needs it.",
  ].join("\n");
}

function getRdcAiSeoPrompt(generatorType) {
  const details = {
    layout: [
      "- 👉 Image alt text pattern: [describe the real image content and page intent]",
      "- 👉 Heading level preference: [do not add heading / h2 / h3 / match current page hierarchy]",
    ],
    iconText: [
      "- 👉 Icon/image alt text: [decorative icons should use empty alt; meaningful images need descriptive alt]",
      "- 👉 Feature labels: [make titles descriptive / keep current if already clear]",
    ],
    accordion: [
      "- 👉 FAQ suitability: [treat as FAQ content / regular accordion only]",
      "- 👉 Schema: [add FAQ schema only if the content is true FAQ content / do not add schema]",
    ],
    tabs: [
      "- 👉 Tab labels: [make labels descriptive / keep current if clear]",
      "- 👉 Hidden content handling: [ensure content remains accessible and crawlable where appropriate]",
    ],
  };

  return [
    "Instruction:",
    "- Add SEO enhancements that make sense for this specific component.",
    "- If SEO is not meaningful for this component type, explain why and keep changes minimal.",
    "- 👉 Note to user: replace placeholders with real page keywords, image descriptions, and final copy before publishing.",
    "",
    "SEO Options:",
    "- 👉 Primary keyword or topic: [add target keyword or say not provided]",
    "- 👉 Link text preference: [more descriptive / keep current / CTA-focused]",
    ...(details[generatorType] || [
      "- 👉 Heading level preference: [do not add heading / h2 / h3 / match current page hierarchy]",
      "- 👉 Image alt text pattern: [describe the real image content and page intent]",
    ]),
    "",
    "Specific Requirements:",
    "- Use semantic HTML where it improves meaning.",
    "- Use meaningful headings only when appropriate for the final page hierarchy.",
    "- If image placeholders or image tags are missing alt text, add neutral alt text fields or instructions.",
    "- Improve vague link/button text when possible while respecting the user's goal.",
    "- Add structured content or schema only if it is relevant to the component type.",
    "- Include a short user-side SEO checklist when SEO changes were made.",
  ].join("\n");
}

function getRdcAiLiquidPrompt(generatorType, generatorName) {
  const base = [
    `- Convert the pasted ${generatorName} code into Shopify Liquid only if a Shopify version is useful for this component.`,
    "- First decide whether the output should be a section, snippet, or simple Liquid-ready block based on the pasted code and user context.",
    "- Return complete Liquid markup, scoped CSS, and scoped JavaScript if JavaScript is needed.",
    "- Include a useful {% schema %} block when a Shopify section is appropriate.",
    "- Use practical schema settings and defaults so a merchant can edit content in the Shopify theme editor.",
    "- Add short comments only where they help the user know where to paste code or how important settings work.",
    "- Include setup notes for file placement, theme editor setup, snippets, assets, Shopify limitations, or theme-specific caveats.",
  ];
  const details = {
    button: [
      "- For a button generator, keep the Liquid conversion lightweight.",
      "- Include settings for button label, link URL, link behavior when useful, style, width, radius, and optional aria label.",
      "- Include color settings only when they are relevant to the pasted code.",
      "- Do not overbuild blocks unless multiple buttons are clearly requested.",
      "- If the output is better as a snippet, include snippet instructions and a simple render example.",
    ].join("\n"),
    accordion: [
      "- For an accordion or FAQ, use Shopify blocks for each accordion item.",
      "- Include settings for question/title and answer rich text.",
      "- Include an optional heading and intro text for the section when useful.",
      "- Support one-open-at-a-time only if it makes sense for the pasted behavior.",
      "- Include accessible button states with aria-expanded and proper panel relationships.",
      "- Keep IDs unique by using section.id or block.id where needed.",
    ].join("\n"),
    tabs: [
      "- For tabs, use Shopify blocks for each tab.",
      "- Include settings for tab title and tab content.",
      "- Generate accessible tablist, tab, and panel markup.",
      "- Use section.id and block.id to keep controls and panels uniquely connected.",
    ].join("\n"),
    layout: [
      "- For a layout generator, infer the intended purpose from the pasted component and user context.",
      "- If the purpose cannot be determined with confidence, create a flexible reusable Shopify implementation and explain the assumptions made.",
      "- Include schema settings for headings, text, images, buttons/links, alignment, column widths, spacing, colors when relevant, and mobile stacking.",
      "- If blocks are useful, use them for repeatable content. If not, keep the schema simple.",
      "- Include clear comments showing where image_picker, richtext, URL, and text settings render.",
      "- If a snippet is better than a section, explain why and include snippet paste/render instructions.",
    ].join("\n"),
    iconText: [
      "- For icon-with-text, use Shopify blocks for each item.",
      "- Include settings for icon/image, image alt text, title, text, optional link, and optional link label.",
      "- Include section settings for columns, spacing, alignment, and mobile behavior.",
      "- Keep the generated output easy to add/remove/reorder in the theme editor.",
    ].join("\n"),
    timer: [
      "- For a timer or announcement bar, include settings for message text, start/end date, colors, links, visibility, and optional button text.",
      "- Include timezone notes and explain what date/time values the user must update.",
      "- Make sure the timer does not break if the date is missing or expired.",
    ].join("\n"),
    progress: [
      "- For a progress bar, include settings for colors, labels, thresholds, placement, and behavior.",
      "- If the bar depends on cart totals or scroll position, explain what data it uses.",
      "- Document what Shopify template, section area, or theme file should receive the code.",
    ].join("\n"),
    modal: [
      "- For a modal, include settings for trigger text, heading, content, image, button labels, overlay behavior, and close behavior.",
      "- Include a setting for whether the trigger button should be rendered or hidden.",
      "- Include accessible focus management, aria-modal, role dialog, labelledby/describedby relationships, and keyboard close behavior.",
      "- Use unique IDs for trigger, dialog, title, and description relationships.",
    ].join("\n"),
    badge: [
      "- For badges, keep the Liquid conversion lightweight.",
      "- Include settings for badge text, style, colors, and optional icon/image.",
      "- Use blocks only if multiple badges are needed.",
    ].join("\n"),
    sticky: [
      "- For sticky add-to-cart or sticky UI, include settings for product text, button label, colors, visibility rules, and mobile behavior.",
      "- Add notes about testing with the active Shopify theme's product form.",
      "- Avoid interfering with native product form behavior.",
    ].join("\n"),
    tooltip: [
      "- For tooltips, include settings for trigger text, tooltip content, placement, and optional icon.",
      "- Include accessible focus and hover behavior.",
      "- Make sure tooltip content can be reached by keyboard users.",
    ].join("\n"),
  };

  return [
    ...base,
    details[generatorType] ||
      "- Choose section settings that match the pasted component purpose without overcomplicating the Shopify schema.",
  ].join("\n");
}

async function copyRdcAiPromptToClipboard(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch (error) {
    return copyRdcAiPromptFallback(value);
  }

  return copyRdcAiPromptFallback(value);
}

function copyRdcAiPromptFallback(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.opacity = "0.01";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  textarea.remove();

  return copied;
}

// // Add this after main.innerHTML = genTemplate; in the generator template JS.
// const rdclGeneratorPlaceholderIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect x="4" y="4" width="24" height="24" rx="5" stroke="currentColor" stroke-width="3"/>
//   <path d="M10 12H22M10 17H22M10 22H17" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
// </svg>`;

const rdclGeneratorMoreItems = [
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.86304" y="5.86133" width="72.2739" height="8.3489" rx="4.17445" fill="currentColor"></rect>
        <rect x="6.36304" y="18.4561" width="69.2739" height="24.1834" rx="3.5" stroke="currentColor" stroke-width="3"></rect>
      </svg>`,
    iconColor: "#C8465F",
    title: "Accordion Generator",
    text: "Build responsive FAQ, guide, and product-detail accordions.",
    href: "/gens/accordion/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.86304" y="11.4082" width="72.2739" height="27.1834" rx="5" fill="currentColor"></rect>
        <path d="M23.009 25H58.991" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
      </svg>`,
    iconColor: "#4767E5",
    title: "Button Generator",
    text: "Create responsive HTML/CSS buttons with hover and radius controls.",
    href: "/gens/buttons/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 75 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="35.2763" height="35.2785" rx="17.6382" stroke="#8EA32F" stroke-width="3"/>
<path d="M43.6938 11.2705H72.549" stroke="#8EA32F" stroke-width="3.80532" stroke-linecap="round"/>
<path d="M43.6938 27.0088H62.9303" stroke="#8EA32F" stroke-width="3.80532" stroke-linecap="round"/>
<path d="M43.6934 19.585H72.5486" stroke="#8EA32F" stroke-width="3.80532" stroke-linecap="round"/>
</svg>
`,
    iconColor: "#C8FA33",
    title: "Icon With Text",
    text: "Generate benefit, trust, and feature sections with icons and text.",
    href: "/gens/icon-text/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 73 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28.7654" height="8.3489" rx="4.17445" fill="#44A8A1"/>
<rect x="32.0776" y="1" width="26.7654" height="6.3489" rx="3.17445" stroke="#44A8A1" stroke-width="2"/>
<rect x="1.5" y="12.5947" width="69.2739" height="24.1834" rx="3.5" stroke="#44A8A1" stroke-width="3"/>
</svg>
`,
    iconColor: "#C8FA33",
    title: "Tabs Generator",
    text: "Create responsive tabs for product info, FAQs, plans, and content.",
    href: "/gens/tabs/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.86304" y="5.86133" width="72.2739" height="38.2783" rx="5" fill="currentColor"></rect>
        <path d="M67.6467 10.2656L72.1447 14.7635" stroke="#211C1E" stroke-width="1.5149" stroke-linecap="round"></path>
        <path d="M72.145 10.2656L67.6471 14.7635" stroke="#211C1E" stroke-width="1.5149" stroke-linecap="round"></path>
        <path d="M20.6694 32.2773H47.7771" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
        <path d="M20.6687 17.7236H61.3311" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
        <path d="M20.6687 24.8535H61.3311" stroke="#211C1E" stroke-width="3.80532" stroke-linecap="round"></path>
      </svg>`,
    iconColor: "#742FA3",
    title: "Modal Generator",
    text: "Generate responsive modals with optional triggers and built-in JS.",
    href: "/gens/modal/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.3396" y="5.86133" width="34.764" height="38.2783" rx="5" fill="#4EA32F"/>
<rect x="44.3962" y="7.36133" width="31.764" height="35.2783" rx="3.5" stroke="#4EA32F" stroke-width="3"/>
</svg>
`,
    iconColor: "#4EA32F",
    title: "2-Column Generator",
    text: "Build responsive two-column sections for content and Shopify pages.",
    href: "/gens/2-column/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#B24E3C" stroke-width="3"/>
<rect x="41" y="12.3262" width="27.8499" height="10.4748" rx="1.92669" fill="#B24E3C"/>
<path d="M47.9924 17.5645H61.8576" stroke="#211C1E" stroke-width="1.46633" stroke-linecap="round"/>
</svg>
`,
    iconColor: "#B24E3C",
    title: "Badges Generator",
    text: "Create lightweight product badges for sales, labels, and launches.",
    href: "/gens/badges/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.86304" y="5.86133" width="22.4581" height="38.2783" rx="5" fill="#49A8C4"/>
<rect x="31.2712" y="7.36133" width="19.4581" height="35.2783" rx="3.5" stroke="#49A8C4" stroke-width="3"/>
<rect x="54.679" y="5.86133" width="22.4581" height="38.2783" rx="5" fill="#49A8C4"/>
</svg>
`,
    iconColor: "#51C4D1",
    title: "Multi-Columns Generator",
    text: "Build responsive multi-column layouts for cards and content grids.",
    href: "/gens/columns/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#6A4BCA" stroke-width="3"/>
<path d="M14.2612 24.8008H67.739" stroke="#3D373A" stroke-width="4" stroke-linecap="round"/>
<path d="M14.2612 24.8008H43.7703" stroke="#6A4BCA" stroke-width="4" stroke-linecap="round"/>
</svg>
`,
    iconColor: "#6A4BCA",
    title: "Free Shipping Progress Bar",
    text: "Create Shopify-friendly free shipping progress bars with JS.",
    href: "/gens/fs-progress-bar/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#4799E5" stroke-width="3"/>
<path d="M14.2612 20H67.739" stroke="#3D373A" stroke-width="4" stroke-linecap="round"/>
<path d="M14.2612 20H43.7703" stroke="#4799E5" stroke-width="4" stroke-linecap="round"/>
</svg>
`,
    iconColor: "#4799E5",
    title: "Scroll Progress Bar",
    text: "Add lightweight scroll progress indicators to long pages.",
    href: "/gens/page-progress-bar/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#902F7E" stroke-width="3"/>
<rect x="10.8159" y="31.3359" width="60.3679" height="8.12811" rx="1.92669" fill="#902F7E"/>
<path d="M55.6444 34.6672C55.2394 34.6672 54.9112 34.9954 54.9111 35.4003C54.9111 35.8052 55.2393 36.1335 55.6442 36.1336L55.6443 35.4004L55.6444 34.6672ZM66.5705 36.1345C66.9754 36.1346 67.3037 35.8063 67.3037 35.4014C67.3038 34.9965 66.9755 34.6682 66.5706 34.6682L66.5705 35.4014L66.5705 36.1345ZM55.6443 35.4004L55.6442 36.1336L66.5705 36.1345L66.5705 35.4014L66.5706 34.6682L55.6444 34.6672L55.6443 35.4004Z" fill="#211C1E"/>
</svg>
`,
    iconColor: "#902F7E",
    title: "Sticky ATC Generator",
    text: "Keep Shopify purchase controls visible on long product pages.",
    href: "/gens/sticky-atc/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36304" y="6.16113" width="69.2739" height="37.6777" rx="3.5" stroke="#C08114" stroke-width="3"/>
<rect x="11.042" y="11.7324" width="17.9973" height="18.2998" rx="1.92669" fill="#C08114"/>
<rect x="32.0012" y="11.7324" width="17.9973" height="18.2998" rx="1.92669" fill="#C08114"/>
<rect x="52.9604" y="11.7324" width="17.9973" height="18.2998" rx="1.92669" fill="#C08114"/>
<path d="M21.642 18.7596C21.642 18.3529 21.5758 18.003 21.4434 17.7098C21.311 17.4166 21.1266 17.1896 20.8901 17.0288C20.6631 16.868 20.3983 16.7876 20.0957 16.7876C19.7552 16.7876 19.462 16.8633 19.2161 17.0146C18.9796 17.1565 18.7905 17.3646 18.6486 17.6389C18.5162 17.9037 18.45 18.2252 18.45 18.6036C18.45 19.1899 18.5966 19.6392 18.8898 19.9513C19.1924 20.2634 19.6086 20.4195 20.1382 20.4195C20.4693 20.4195 20.7861 20.3911 21.0888 20.3343C21.4009 20.2681 21.7461 20.1641 22.1244 20.0222L21.486 21.2423C21.155 21.4031 20.8287 21.5166 20.5071 21.5828C20.195 21.6395 19.9018 21.6679 19.6275 21.6679C18.9938 21.6679 18.45 21.5497 17.996 21.3132C17.542 21.0768 17.1921 20.7268 16.9462 20.2634C16.7098 19.8 16.5915 19.2372 16.5915 18.5752C16.5915 17.932 16.7429 17.3646 17.0455 16.8728C17.3482 16.381 17.7643 15.9979 18.2939 15.7236C18.8236 15.4494 19.4384 15.3122 20.1382 15.3122C20.8287 15.3122 21.4245 15.4588 21.9258 15.752C22.427 16.0452 22.8101 16.4472 23.0749 16.9579C23.3397 17.4592 23.4721 18.0408 23.4721 18.7029C23.4721 19.2987 23.387 19.8615 23.2168 20.3911C23.056 20.9207 22.7912 21.4551 22.4223 21.9942C22.0629 22.5238 21.59 23.0771 21.0036 23.6541L19.8403 24.8174H17.4711L17.4569 24.789L19.4147 22.9873C19.9349 22.5144 20.3558 22.0368 20.6773 21.5544C21.0084 21.0721 21.2495 20.5944 21.4009 20.1215C21.5616 19.6487 21.642 19.1947 21.642 18.7596Z" fill="#211B1E"/>
<path d="M42.6013 18.9422C42.6013 18.5355 42.5351 18.1856 42.4026 17.8924C42.2702 17.5992 42.0858 17.3722 41.8494 17.2114C41.6224 17.0507 41.3576 16.9703 41.0549 16.9703C40.7144 16.9703 40.4212 17.0459 40.1753 17.1972C39.9389 17.3391 39.7497 17.5472 39.6078 17.8215C39.4754 18.0863 39.4092 18.4079 39.4092 18.7862C39.4092 19.3726 39.5558 19.8218 39.849 20.1339C40.1517 20.446 40.5678 20.6021 41.0975 20.6021C41.4285 20.6021 41.7453 20.5737 42.048 20.517C42.3601 20.4508 42.7053 20.3467 43.0836 20.2049L42.4452 21.4249C42.1142 21.5857 41.7879 21.6992 41.4663 21.7654C41.1542 21.8222 40.861 21.8505 40.5867 21.8505C39.9531 21.8505 39.4092 21.7323 38.9553 21.4959C38.5013 21.2594 38.1513 20.9095 37.9054 20.446C37.669 19.9826 37.5508 19.4198 37.5508 18.7578C37.5508 18.1147 37.7021 17.5472 38.0047 17.0554C38.3074 16.5636 38.7235 16.1805 39.2532 15.9062C39.7828 15.632 40.3976 15.4948 41.0975 15.4948C41.7879 15.4948 42.3837 15.6414 42.885 15.9346C43.3863 16.2278 43.7693 16.6298 44.0341 17.1405C44.299 17.6418 44.4314 18.2234 44.4314 18.8855C44.4314 19.4813 44.3462 20.0441 44.176 20.5737C44.0152 21.1034 43.7504 21.6377 43.3815 22.1768C43.0221 22.7065 42.5492 23.2597 41.9629 23.8367L40.7995 25H38.4303L38.4162 24.9716L40.3739 23.1699C40.8941 22.697 41.315 22.2194 41.6366 21.737C41.9676 21.2547 42.2088 20.7771 42.3601 20.3042C42.5209 19.8313 42.6013 19.3773 42.6013 18.9422Z" fill="#211B1E"/>
<path d="M63.7629 19.0721C63.7629 18.6654 63.6967 18.3155 63.5643 18.0223C63.4319 17.7291 63.2474 17.5021 63.011 17.3413C62.784 17.1805 62.5192 17.1001 62.2165 17.1001C61.876 17.1001 61.5828 17.1758 61.3369 17.3271C61.1005 17.469 60.9113 17.6771 60.7695 17.9514C60.6371 18.2162 60.5709 18.5377 60.5709 18.9161C60.5709 19.5024 60.7174 19.9517 61.0106 20.2638C61.3133 20.5759 61.7294 20.732 62.2591 20.732C62.5901 20.732 62.9069 20.7036 63.2096 20.6468C63.5217 20.5806 63.8669 20.4766 64.2452 20.3347L63.6068 21.5548C63.2758 21.7156 62.9495 21.8291 62.6279 21.8953C62.3158 21.952 62.0226 21.9804 61.7484 21.9804C61.1147 21.9804 60.5709 21.8622 60.1169 21.6257C59.6629 21.3893 59.313 21.0393 59.067 20.5759C58.8306 20.1125 58.7124 19.5497 58.7124 18.8877C58.7124 18.2445 58.8637 17.6771 59.1664 17.1853C59.469 16.6935 59.8852 16.3104 60.4148 16.0361C60.9444 15.7619 61.5592 15.6247 62.2591 15.6247C62.9495 15.6247 63.5454 15.7713 64.0466 16.0645C64.5479 16.3577 64.9309 16.7597 65.1958 17.2704C65.4606 17.7717 65.593 18.3533 65.593 19.0154C65.593 19.6112 65.5079 20.174 65.3376 20.7036C65.1768 21.2332 64.912 21.7676 64.5432 22.3067C64.1838 22.8363 63.7109 23.3896 63.1245 23.9666L61.9612 25.1299H59.592L59.5778 25.1015L61.5356 23.2998C62.0557 22.8269 62.4766 22.3493 62.7982 21.8669C63.1292 21.3846 63.3704 20.9069 63.5217 20.434C63.6825 19.9612 63.7629 19.5072 63.7629 19.0721Z" fill="#211B1E"/>
</svg>
`,
    iconColor: "#C08114",
    title: "Timer Bar Generator",
    text: "Build countdown bars for launches, offers, and campaigns.",
    href: "/gens/timer-bar/index.html",
  },
  {
    icon: `<svg width="32" height="100%" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.86304" y="5.86035" width="72.2739" height="30.9414" rx="5" fill="#A39B2F"/>
<path d="M41 47.2461L33.0992 33.5615L48.9008 33.5615L41 47.2461Z" fill="#A39B2F"/>
<path d="M20.6689 18.3271H61.3313" stroke="#211C1E" stroke-width="3" stroke-linecap="round"/>
<path d="M20.6689 25H61.3313" stroke="#211C1E" stroke-width="3" stroke-linecap="round"/>
</svg>
`,
    iconColor: "#A39B2F",
    title: "Tool Tip Generator",
    text: "Create lightweight CSS tooltips for helpful inline context.",
    href: "/gens/tool-tip/index.html",
  },
];

renderRandomMoreGenerators(rdclGeneratorMoreItems);

function renderRandomMoreGenerators(items, limit = 5) {
  const container = document.querySelector(".rdcl-gen-more-gens");

  if (!container || !items.length) return;

  const currentPath = normalizeGeneratorPath(window.location.pathname);
  const cleanItems = items.filter(Boolean);
  const availableItems = cleanItems.filter(
    (item) => normalizeGeneratorPath(item.href) !== currentPath,
  );
  const sourceItems =
    availableItems.length >= limit ? availableItems : cleanItems;
  const selectedItems = shuffleGenerators(sourceItems).slice(0, limit);

  container.innerHTML = renderMoreGenerators(selectedItems);
}

function normalizeGeneratorPath(path = "") {
  return String(path)
    .replace(/\/index\.html$/, "")
    .replace(/\/$/, "");
}

function shuffleGenerators(items = []) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function renderMoreGenerators(items) {
  return `
    <h3 class="rdcl-gen-more-gens-title rdc-p-t10 rdc-p-in5 rdc-m-b10 rdc-c-white-3 rdc-fw-500 rdc-ff-baij rdc-d-flex rdc-ai-cen">
      <span class="rdcl-mini-h-icon rdc-d-iflex rdc-m-r10">${renderMoreGeneratorsHeaderIcon()}</span>
      MORE GENERATORS
    </h3>
    <div class="rdcl-gen-more-gens-wrap rdc-m-ofx-scr">
      <div class="rdcl-gen-more-gens-inner rdc-m-w-fit rdc-d-flex">
        ${items.map(renderMoreGenerator).join("")}
      </div>
    </div>
  `;
}

function renderMoreGenerator(item) {
  return `
    <div class="rdcl-cols-col rdcl-card rdc-w-20 rdc-p-5">
      <a href="${item.href}" class="rlab-lab-pop-col-inner rdcl-card-wrap rdc-darker-hover rdc-lab-border rdc-bg-dark-5 rdc-p-20 rdc-fs-14 rdc-h-full rdc-d-block">
        ${renderMoreGeneratorIcon(item)}
        <p class="rdc-fw-500 rdc-c-white-1 rdc-ff-baij">${item.title}</p>
        <p class="rdc-c-white-2">${item.text}</p>
        <span class="rdcl-gen-more-gens-cta rdc-d-iflex rdc-ai-cen rdc-ff-baij">
          <span class="rdcl-gen-more-gens-cta-text">Open</span>
          <span class="rdcl-gen-more-gens-cta-icon rdc-d-flex" aria-hidden="true">${renderArrowRightIcon()}</span>
        </span>
      </a>
    </div>
  `;
}

function renderMoreGeneratorIcon(item) {
  if (!item.icon) return "";

  const color = item.iconColor || "";
  const style = color
    ? ` style="color: ${color}; --rdcl-gen-more-gens-icon-color: ${color};"`
    : "";

  return `<span class="rdcl-gen-more-gens-icon rdc-d-flex"${style}>${item.icon}</span>`;
}

function renderMoreGeneratorsHeaderIcon() {
  return `<svg width="151" height="154" viewBox="0 0 151 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13.9661" cy="13.9661" r="13.9661" fill="#40F78C"/>
    <circle cx="13.9661" cy="76.7222" r="13.9661" fill="#40F78C"/>
    <circle cx="13.9661" cy="139.478" r="13.9661" fill="#40F78C"/>
    <circle cx="77.2458" cy="13.9661" r="13.9661" fill="#40F78C"/>
    <circle cx="77.2458" cy="76.7222" r="13.9661" fill="#40F78C"/>
    <circle cx="77.2458" cy="139.478" r="13.9661" fill="#40F78C"/>
    <circle cx="136.676" cy="13.9661" r="13.9661" fill="#40F78C"/>
    <circle cx="136.676" cy="76.7222" r="13.9661" fill="#40F78C"/>
    <circle cx="136.676" cy="139.478" r="13.9661" fill="#40F78C"/>
  </svg>`;
}

function renderArrowRightIcon() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
