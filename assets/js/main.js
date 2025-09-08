// ------------------------------
// Dark Mode Toggle with Persistence
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');

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
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
  }
});

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
