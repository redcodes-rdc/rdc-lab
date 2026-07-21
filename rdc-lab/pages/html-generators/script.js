(function () {
  const state = {
    category: "all",
    tag: "",
    search: "",
  };

  const selectors = {
    search: "[data-allgen-search]",
    searchClear: "[data-allgen-search-clear]",
    filterToggle: "[data-allgen-filter-toggle]",
    filterPanel: "[data-allgen-filter-panel]",
    filterIcon: "[data-allgen-filter-icon]",
    category: "[data-allgen-category]",
    tag: "[data-allgen-tag]",
    clearTags: "[data-allgen-clear-tags]",
    card: "[data-allgen-card]",
    count: "[data-allgen-count]",
    empty: "[data-allgen-empty]",
  };

  function initAllGenerators() {
    const cards = getCards();
    const searchInput = document.querySelector(selectors.search);

    if (!cards.length || !searchInput) {
      requestAnimationFrame(initAllGenerators);
      return;
    }

    readStateFromUrl();
    bindSearch(searchInput);
    bindSearchClear(searchInput);
    bindFilterToggle();
    bindCategoryFilters();
    bindTagFilters();
    bindClearTags();
    applyStateToControls();
    setFilterPanelForViewport();
    updateSearchClearVisibility(searchInput);
    filterGenerators();
  }

  function getCards() {
    return Array.from(document.querySelectorAll(selectors.card));
  }

  function bindSearch(input) {
    input.addEventListener("input", () => {
      state.search = normalizeSearch(input.value);
      updateSearchClearVisibility(input);
      filterGenerators();
      writeStateToUrl();
    });
  }

  function bindSearchClear(input) {
    const clearButton = document.querySelector(selectors.searchClear);

    if (!clearButton) return;

    clearButton.addEventListener("click", () => {
      input.value = "";
      state.search = "";
      updateSearchClearVisibility(input);
      filterGenerators();
      writeStateToUrl();
      input.focus();
    });
  }

  function updateSearchClearVisibility(input) {
    const clearButton = document.querySelector(selectors.searchClear);

    if (!clearButton) return;

    clearButton.classList.toggle("rdc-d-none", !input.value.trim());
  }

  function bindFilterToggle() {
    const toggle = document.querySelector(selectors.filterToggle);
    const panel = document.querySelector(selectors.filterPanel);

    if (!toggle || !panel) return;

    toggle.addEventListener("click", () => {
      setFilterPanelState(panel.hidden);
    });

    window.addEventListener("resize", setFilterPanelForViewport);
  }

  function setFilterPanelForViewport() {
    const shouldOpen = !window.matchMedia("(max-width: 767px)").matches;
    setFilterPanelState(shouldOpen);
  }

  function setFilterPanelState(isOpen) {
    const toggle = document.querySelector(selectors.filterToggle);
    const panel = document.querySelector(selectors.filterPanel);
    const icon = document.querySelector(selectors.filterIcon);

    if (!toggle || !panel) return;

    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
    panel.classList.toggle("rdc-d-none", !isOpen);

    if (icon) {
      icon.textContent = isOpen ? "-" : "+";
    }
  }

  function bindCategoryFilters() {
    document.querySelectorAll(selectors.category).forEach((button) => {
      button.addEventListener("click", () => {
        state.category = button.dataset.allgenCategory || "all";
        applyStateToControls();
        filterGenerators();
        writeStateToUrl();
      });
    });
  }

  function bindTagFilters() {
    document.querySelectorAll(selectors.tag).forEach((button) => {
      button.addEventListener("click", () => {
        const selectedTag = button.dataset.allgenTag || "";
        state.tag = state.tag === selectedTag ? "" : selectedTag;
        applyStateToControls();
        filterGenerators();
        writeStateToUrl();
      });
    });
  }

  function bindClearTags() {
    const clearButton = document.querySelector(selectors.clearTags);

    if (!clearButton) return;

    clearButton.addEventListener("click", () => {
      state.tag = "";
      applyStateToControls();
      filterGenerators();
      writeStateToUrl();
    });
  }

  function filterGenerators() {
    const cards = getCards();
    let visibleCount = 0;

    cards.forEach((card) => {
      const isVisible = cardMatchesState(card);
      card.classList.toggle("is-hidden", !isVisible);
      card.classList.toggle("rdc-d-none", !isVisible);
      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    updateCount(visibleCount, cards.length);
    updateEmptyState(visibleCount);
  }

  function cardMatchesState(card) {
    const categories = getDataList(card.dataset.categories);
    const tags = getDataList(card.dataset.tags);
    const searchText = normalizeSearch(card.dataset.search || "");

    const matchesCategory =
      state.category === "all" || categories.includes(state.category);
    const matchesTag = !state.tag || tags.includes(state.tag);
    const matchesSearch = !state.search || searchText.includes(state.search);

    return matchesCategory && matchesTag && matchesSearch;
  }

  function getDataList(value = "") {
    return String(value)
      .split(/\s+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function updateCount(visibleCount, totalCount) {
    const countEl = document.querySelector(selectors.count);
    if (!countEl) return;

    const label = visibleCount === 1 ? "generator" : "generators";
    countEl.textContent = `${visibleCount} of ${totalCount} ${label}`;
  }

  function updateEmptyState(visibleCount) {
    const emptyEl = document.querySelector(selectors.empty);
    if (!emptyEl) return;

    emptyEl.classList.toggle("rdc-d-none", visibleCount !== 0);
  }

  function applyStateToControls() {
    document.querySelectorAll(selectors.category).forEach((button) => {
      button.classList.toggle(
        "is-active",
        (button.dataset.allgenCategory || "all") === state.category,
      );
    });

    document.querySelectorAll(selectors.tag).forEach((button) => {
      const isSelected = (button.dataset.allgenTag || "") === state.tag;

      button.classList.toggle("is-active", isSelected);
      button.classList.toggle("is-selected", isSelected);
      button.classList.toggle("rdcl-allgen-tag-selected", isSelected);
    });

    const clearTagsButton = document.querySelector(selectors.clearTags);
    if (clearTagsButton) {
      clearTagsButton.classList.toggle("rdc-d-none", !state.tag);
    }

    const searchInput = document.querySelector(selectors.search);
    if (searchInput && searchInput.value !== state.search) {
      searchInput.value = state.search;
    }

    if (searchInput) {
      updateSearchClearVisibility(searchInput);
    }
  }

  function readStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const tag = params.get("tag");
    const search = params.get("search");

    if (category) {
      state.category = category;
    }

    if (tag) {
      state.tag = tag;
    }

    if (search) {
      state.search = normalizeSearch(search);
    }
  }

  function writeStateToUrl() {
    if (!window.history || !window.history.replaceState) return;

    const params = new URLSearchParams();

    if (state.category && state.category !== "all") {
      params.set("category", state.category);
    }

    if (state.tag) {
      params.set("tag", state.tag);
    }

    if (state.search) {
      params.set("search", state.search);
    }

    const query = params.toString();
    const nextUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname;

    window.history.replaceState({}, "", nextUrl);
  }

  function normalizeSearch(value = "") {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[-_/]+/g, " ")
      .replace(/\s+/g, " ");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllGenerators);
    return;
  }

  initAllGenerators();
})();
