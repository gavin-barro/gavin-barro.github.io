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
    let backToTopBtn = document.getElementById("backToTop");
    let toggleBtn = document.getElementById("darkModeToggle");

    // Apply dark mode and button text from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        if (toggleBtn) {
            toggleBtn.textContent = localStorage.getItem("toggleText") || "Light Mode ☀️";
        }
    } else {
        document.body.classList.remove("dark-mode");
        if (toggleBtn) {
            toggleBtn.textContent = localStorage.getItem("toggleText") || "Dark Mode 🌑";
        }
    }

    // Back to Top button behavior
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Toggle dark mode and update button text
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                localStorage.setItem("toggleText", "Light Mode ☀️");
                toggleBtn.textContent = "Light Mode ☀️";
            } else {
                localStorage.setItem("darkMode", "disabled");
                localStorage.setItem("toggleText", "Dark Mode 🌑");
                toggleBtn.textContent = "Dark Mode 🌑";
            }
        });
    }
});