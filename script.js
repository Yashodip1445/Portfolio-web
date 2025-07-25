// Typed.js Initialization
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed('#element', {
    strings: ['Fullstack Developer...', 'Front-End Developer...', 'Back-End Developer...'],
    typeSpeed: 50,
  });

  // Smooth Scrolling for Anchor Links
  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Scroll Reveal Animation
  window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".ftco-animate, .skills-entry, .blog-entry");
    for (let reveal of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    }
  });

  // Side Menu
  const sidemenu = document.getElementById("sidemenu");
  window.openmenu = function () {
    sidemenu.style.right = "0";
  };
  window.closemenu = function () {
    sidemenu.style.right = "-200px";
  };

  // Tabs in About Section
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");
  window.opentab = function (tabname) {
    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    document.querySelector(`[onclick="opentab('${tabname}')"]`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  };

  // Back to Top Button Logic
  const backToTop = document.getElementById("backToTop");
  window.onscroll = function () {
    backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
  };
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Theme Toggle
  window.toggleTheme = function () {
    document.body.classList.toggle("dark-theme");
  };
});
