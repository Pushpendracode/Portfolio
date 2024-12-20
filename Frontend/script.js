document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Highlight Active Navigation Link
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navItem = document.querySelector(`nav a[href="#${id}"]`);
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            if (navItem) navItem.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    // Form Validation for Contact Page
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        if (!name || !email || !message) {
          alert("Please fill out all the fields.");
          return;
        }
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
        }
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      });
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Display Current Year in Footer
    const yearElement = document.querySelector("#current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    // Intersection Observer for Animations
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            animationObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    animatedElements.forEach((el) => animationObserver.observe(el));
  });
  
