(function () {
  const state = {
    faqCategory: "all",
    faqSearch: "",
  };

  const selectors = {
    faqSearch: "[data-help-faq-search]",
    faqTab: "[data-help-faq-tab]",
    faqItem: "[data-help-faq-item]",
    faqQuestion: "[data-help-faq-question]",
    faqAnswer: "[data-help-faq-answer]",
    faqList: "[data-help-faq-list]",
    faqEmpty: "[data-help-faq-empty]",
  };

  function initHelpCenter() {
    const faqItems = getFaqItems();
    const faqSearch = document.querySelector(selectors.faqSearch);

    if (!faqItems.length) {
      requestAnimationFrame(initHelpCenter);
      return;
    }

    if (faqSearch) bindFaqSearch(faqSearch);
    bindFaqTabs();
    bindFaqAccordions();
    updateFaqScrollHint();
    filterFaqs();
  }

  function getFaqItems() {
    return Array.from(document.querySelectorAll(selectors.faqItem));
  }

  function bindFaqSearch(input) {
    input.addEventListener("input", () => {
      state.faqSearch = normalizeSearch(input.value);
      filterFaqs();
    });
  }

  function bindFaqTabs() {
    document.querySelectorAll(selectors.faqTab).forEach((tab) => {
      tab.addEventListener("click", () => {
        state.faqCategory = tab.dataset.helpFaqTab || "all";
        updateFaqTabs();
        filterFaqs();
      });
    });
  }

  function bindFaqAccordions() {
    document.querySelectorAll(selectors.faqQuestion).forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(selectors.faqItem);
        if (!item) return;

        const isOpen = button.getAttribute("aria-expanded") === "true";
        setFaqItemState(item, !isOpen);
      });
    });
  }

  function filterFaqs() {
    let visibleCount = 0;

    getFaqItems().forEach((item) => {
      const isVisible = faqMatchesState(item);
      item.classList.toggle("rdc-d-none", !isVisible);
      item.hidden = !isVisible;

      if (!isVisible) {
        setFaqItemState(item, false);
      } else {
        visibleCount += 1;
      }
    });

    updateFaqEmptyState(visibleCount);
    updateFaqScrollHint();
  }

  function faqMatchesState(item) {
    const category = item.dataset.helpFaqCategory || "";
    const searchText = normalizeSearch(item.dataset.helpFaqSearch || "");

    const matchesCategory =
      state.faqCategory === "all" || category === state.faqCategory;
    const matchesSearch =
      !state.faqSearch || searchText.includes(state.faqSearch);

    return matchesCategory && matchesSearch;
  }

  function setFaqItemState(item, isOpen) {
    const button = item.querySelector(selectors.faqQuestion);
    const answer = item.querySelector(selectors.faqAnswer);
    const icon = item.querySelector(".rdcl-help-faq-icon");

    if (!button || !answer) return;

    button.setAttribute("aria-expanded", String(isOpen));
    answer.classList.toggle("rdc-d-none", !isOpen);
    answer.hidden = !isOpen;

    if (icon) {
      icon.textContent = isOpen ? "-" : "+";
    }
  }

  function updateFaqTabs() {
    document.querySelectorAll(selectors.faqTab).forEach((tab) => {
      tab.classList.toggle(
        "is-active",
        (tab.dataset.helpFaqTab || "all") === state.faqCategory,
      );
    });
  }

  function updateFaqEmptyState(visibleCount) {
    const empty = document.querySelector(selectors.faqEmpty);
    if (!empty) return;

    empty.classList.toggle("rdc-d-none", visibleCount !== 0);
    empty.hidden = visibleCount !== 0;
  }

  function updateFaqScrollHint() {
    const list = document.querySelector(selectors.faqList);
    if (!list) return;

    const visibleItems = getFaqItems().filter((item) => !item.hidden);
    list.classList.toggle("rdcl-help-faq-list-scroll", visibleItems.length > 8);
  }

  function normalizeSearch(value = "") {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[-_/]+/g, " ")
      .replace(/\s+/g, " ");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHelpCenter);
    return;
  }

  initHelpCenter();
})();
