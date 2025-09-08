// ------------------------------
// Dark Mode Toggle with Persistence
// ------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement; // <html> element
const DARK_CLASS = 'dark';

// Load saved theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  rootElement.classList.add(DARK_CLASS);
} else if (savedTheme === 'light') {
  rootElement.classList.remove(DARK_CLASS);
}

// Toggle dark mode on button click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = rootElement.classList.toggle(DARK_CLASS);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

