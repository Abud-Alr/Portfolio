(function () {
  "use strict";

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  function initNavigation() {
    const nav = document.querySelector(".site-nav");
    const toggle = document.querySelector(".nav-toggle");

    document.querySelectorAll(".site-nav a").forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("open");
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          toggle.setAttribute("aria-expanded", "false");
          nav.classList.remove("open");
        });
      });
    }
  }

  function updateFaviconForTheme(theme) {
    const link = document.querySelector('link[rel="icon"]');
    if (!link) return;

    // Requirement:
    // - for favicon use black version
    // - text/logo usage switches: light mode uses dark logo, dark mode uses white logo.
    link.href = 'assets/images/logo_black.png';

    // Switch the header logo (and any other .site-logo img) to maintain contrast.
    document.querySelectorAll('.site-logo img').forEach(function (img) {
      img.src = theme === 'dark' ? 'assets/images/logo_white.png' : 'assets/images/logo_black.png';
    });

    // Also update hero ring logo (if present)
    document.querySelectorAll('.hero-logo-ring img').forEach(function (img) {
      img.src = theme === 'dark' ? 'assets/images/logo_white.png' : 'assets/images/logo_black.png';
    });
  }

  function initTheme() {
    const toggle = document.querySelector(".theme-toggle");
    const saved = localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    let initialTheme = document.documentElement.getAttribute('data-theme');

    if (saved) {
      initialTheme = saved;
      document.documentElement.setAttribute("data-theme", saved);
    } else if (prefersLight) {
      initialTheme = 'light';
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      initialTheme = 'dark';
      document.documentElement.setAttribute("data-theme", 'dark');
    }

    updateFaviconForTheme(initialTheme);

    if (toggle) {
      toggle.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("portfolio-theme", next);
        toggle.setAttribute("aria-label", next === "light" ? "Donker thema" : "Licht thema");
        updateFaviconForTheme(next);
      });
    }
  }


  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initTrailers() {
    document.querySelectorAll("[data-trailer]").forEach(function (container) {
      const images = container.dataset.trailer.split("|");
      if (images.length <= 1) return;

      container.innerHTML = "";
      images.forEach(function (src, index) {
        const slide = document.createElement("div");
        slide.className = "trailer-slide" + (index === 0 ? " active" : "");
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.loading = "lazy";
        slide.appendChild(img);
        container.appendChild(slide);
      });

      let current = 0;
      let interval = null;

      function nextSlide() {
        const slides = container.querySelectorAll(".trailer-slide");
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }

      container.closest(".project-card")?.addEventListener("mouseenter", function () {
        if (!interval) interval = setInterval(nextSlide, 1200);
      });

      container.closest(".project-card")?.addEventListener("mouseleave", function () {
        clearInterval(interval);
        interval = null;
        container.querySelectorAll(".trailer-slide").forEach(function (s, i) {
          s.classList.toggle("active", i === 0);
        });
        current = 0;
      });

      container.closest(".project-card")?.addEventListener("focusin", function () {
        if (!interval) interval = setInterval(nextSlide, 1200);
      });

      container.closest(".project-card")?.addEventListener("focusout", function () {
        clearInterval(interval);
        interval = null;
      });
    });
  }

  function initSkillBars() {
    const bars = document.querySelectorAll(".skill-bar-fill");
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const width = entry.target.dataset.width || "0";
            entry.target.style.width = width + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach(function (bar) {
      bar.style.width = "0";
      observer.observe(bar);
    });
  }

  function initShowcase() {
    const main = document.querySelector(".project-showcase-main img");
    const thumbs = document.querySelectorAll(".project-showcase-thumbs button");

    thumbs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const src = btn.dataset.src;
        const alt = btn.dataset.alt || "";
        if (main && src) {
          main.src = src;
          main.alt = alt;
        }
        thumbs.forEach(function (t) {
          t.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });
  }

  function initProjectFilters() {
    const tabs = document.querySelectorAll(".filter-tab");
    const cards = document.querySelectorAll("[data-project-type]");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const filter = tab.dataset.filter;

        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");

        cards.forEach(function (card) {
          const type = card.dataset.projectType;
          const featured = card.dataset.featured === "true";
          let show = filter === "all";

          if (filter === "school") show = type === "school";
          if (filter === "eigen") show = type === "eigen";
          if (filter === "featured") show = featured;
          if (filter === "team") show = card.dataset.team === "team";

          card.hidden = !show;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavigation();
    initTheme();
    initReveal();
    initTrailers();
    initSkillBars();
    initShowcase();
    initProjectFilters();
  });
})();
