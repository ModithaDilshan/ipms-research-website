(() => {
  const root = document.documentElement;
  const header = document.getElementById("site-header");
  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const themeButton = document.getElementById("theme-toggle");
  const themeIcon = themeButton?.querySelector(".theme-icon");
  const scrollProgress = document.querySelector("#scroll-progress span");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const savedTheme = localStorage.getItem("ipms-research-theme");
  const initialTheme = savedTheme || "light";

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#08111f" : "#f4f7ff");
    if (themeButton && themeIcon) {
      const isDark = theme === "dark";
      themeIcon.textContent = isDark ? "☀" : "☾";
      themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  applyTheme(initialTheme);

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("ipms-research-theme", nextTheme);
    applyTheme(nextTheme);
  });

  function closeMenu() {
    menuButton?.classList.remove("open");
    navLinks?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("nav-open");
  }

  menuButton?.addEventListener("click", () => {
    const willOpen = !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", willOpen);
    menuButton.classList.toggle("open", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("nav-open", willOpen);
  });

  navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navLinks?.classList.contains("open")) return;
    if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  function updatePageState() {
    header?.classList.toggle("scrolled", window.scrollY > 12);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    scrollProgress?.style.setProperty("transform", `scaleX(${progress})`);
  }

  updatePageState();
  window.addEventListener("scroll", updatePageState, { passive: true });

  const revealElements = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px" });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  function animateCounter(element) {
    const target = Number(element.dataset.counter || 0);
    const decimals = Number(element.dataset.decimals || 0);
    const suffix = element.dataset.suffix || "";
    const duration = reducedMotion ? 0 : 1150;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = duration === 0 ? 1 : Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      element.textContent = `${new Intl.NumberFormat("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.55 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  const sectionLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      sectionLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.2, 0.5] });

    sections.forEach((section) => activeObserver.observe(section));
  }

  const illuminatedCards = document.querySelectorAll(
    ".component-card, .feature-panel, .principle, .evidence-card, .document-card, .member-card"
  );

  illuminatedCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  });

  if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        element.style.setProperty("--tilt-x", `${(-y * 3.5).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(x * 4.5).toFixed(2)}deg`);
      });

      element.addEventListener("pointerleave", () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) closeMenu();
    updatePageState();
  });
})();
