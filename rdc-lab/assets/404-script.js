(function () {
  const config = {
    searchUrl: "/pages/html-generators/",
    searchParam: "search",
    fallbackBackUrl: "/",
  };

  function initNotFoundPage() {
    renderMissingPath();
    bindBackButton();
    bindSearchForm();
  }

  function renderMissingPath() {
    const pathEl = document.querySelector("[data-404-path]");

    if (!pathEl) return;

    pathEl.textContent = window.location.pathname + window.location.search;
  }

  function bindBackButton() {
    const backButton = document.querySelector("[data-404-back]");

    if (!backButton) return;

    backButton.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
        return;
      }

      window.location.href = config.fallbackBackUrl;
    });
  }

  function bindSearchForm() {
    const form = document.querySelector("[data-404-search-form]");
    const input = document.querySelector("[data-404-search-input]");

    if (!form || !input) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = input.value.trim();

      if (!query) {
        input.focus();
        return;
      }

      const url = new URL(config.searchUrl, window.location.origin);
      url.searchParams.set(config.searchParam, query);

      window.location.href = url.pathname + url.search;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNotFoundPage);
    return;
  }

  initNotFoundPage();
})();
