const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (!(menuToggle instanceof HTMLButtonElement) || !(siteNav instanceof HTMLElement)) {
  throw new Error("The mobile navigation elements could not be found.");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (!(event.target instanceof Element) || !event.target.closest("a")) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
});

if (window.gsap && window.ScrollTrigger) {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".site-header .brand", { autoAlpha: 0, y: -12, duration: 0.65, immediateRender: false })
      .from(".site-nav > a, .menu-toggle", { autoAlpha: 0, y: -10, duration: 0.5, stagger: 0.07, immediateRender: false }, 0.12)
      .from(".hero-eyebrow", { autoAlpha: 0, y: 14, duration: 0.6, immediateRender: false }, 0.2)
      .from(".hero h1", { autoAlpha: 0, y: 22, duration: 0.8, immediateRender: false }, 0.32)
      .from(".hero-lead, .hero-link", { autoAlpha: 0, y: 14, duration: 0.6, stagger: 0.1, immediateRender: false }, 0.52)
      .from(".hero-caption, .hero-index", { autoAlpha: 0, duration: 0.6, immediateRender: false }, 0.7);

    gsap.to(".hero-image", {
      scale: 1.12,
      yPercent: 3,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.7,
      },
    });

    gsap.utils
      .toArray(".intro-main, .qualities-content, .section-heading, .travel-content")
      .forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            once: true,
          },
        });
      });

    gsap.from(".qualities-photo img", {
      scale: 1.1,
      duration: 1.1,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".qualities-photo",
        start: "top 82%",
        once: true,
      },
    });

    gsap.from(".quality-item", {
      autoAlpha: 0,
      x: 18,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".quality-list",
        start: "top 86%",
        once: true,
      },
    });

    gsap.from(".experience-card", {
      autoAlpha: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.14,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".experience-grid",
        start: "top 82%",
        once: true,
      },
    });

    gsap.to(".travel-image img", {
      yPercent: 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".travel",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.7,
      },
    });
  });
}
