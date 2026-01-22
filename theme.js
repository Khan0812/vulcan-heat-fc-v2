const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  })
});

const sections = document.querySelectorAll(".fade-section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint && sectionBottom > 100) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ================= THEME SWITCH =================

const themeButtons = document.querySelectorAll(".theme");

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.remove("dark-theme", "light-theme");

    if (button.classList.contains("dark")) {
      document.body.classList.add("dark-theme");
    }

    if (button.classList.contains("light")) {
      document.body.classList.add("light-theme");
    }
  });
});