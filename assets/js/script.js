// Back to top button
document.addEventListener("DOMContentLoaded", function () {
  let backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// Dark mode
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTop");
    const toggleBtn = document.getElementById("darkModeToggle");

    // Apply dark mode if previously set
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Back to top button behavior
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Toggle dark mode
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleBtn.textContent = "Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleBtn.textContent = "Dark Mode";
        }
    });
});