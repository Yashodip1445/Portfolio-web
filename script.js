// Typed.js Initialization
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed('.auto-type', {
    strings: ['Yashodip Wani', 'a Web Developer', 'a UI/UX Designer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
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

  // Modern Mobile Menu Functionality
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  window.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar')) {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Handle window resize for mobile menu
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

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
