/* ============================
   Dark/Light Mode Toggle Script
   ============================ */

// Get the theme toggle button
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark-mode';

// Apply saved theme on page load
if (currentTheme === 'light-mode') {
    htmlElement.classList.add('light-mode');
} else {
    htmlElement.classList.remove('light-mode');
}

// Listen for theme toggle button click
themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('light-mode')) {
        htmlElement.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        htmlElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Optional: Respect system theme preference on first visit
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        htmlElement.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        htmlElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
}
