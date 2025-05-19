function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

// Cek apakah ada mode tersimpan di local storage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
} else {
  body.classList.add("light-mode");
}

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark"); // Simpan pilihan mode
  } else {
    body.classList.replace("dark-mode", "light-mode");
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light"); // Simpan pilihan mode
  }
});