// ------------------------------
// Dark Mode Toggle with Persistence
// ------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
<<<<<<< HEAD

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Initialize theme based on user preference or system
const userTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
  setTheme('dark');
} else {
  setTheme('light');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

=======
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

>>>>>>> new-site

// ------------------------------
// Optional: Online Status Indicator
// ------------------------------
const onlineStatus = document.getElementById('online-status');
if (onlineStatus) {
  const isOnline = true; // Set dynamically if you want
  if (isOnline) {
    onlineStatus.classList.add('bg-green-500', 'animate-pulse');
  } else {
    onlineStatus.classList.add('bg-gray-400');
  }
}


// ------------------------------
// Optional: Form Submission Handler
// ------------------------------
// If using a free service like Formspree, you can handle success/failure messages
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Use Formspree or similar API endpoint
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        alert('There was a problem sending your message.');
      }
    }).catch(() => {
      alert('There was a problem sending your message.');
    });
  });
}
