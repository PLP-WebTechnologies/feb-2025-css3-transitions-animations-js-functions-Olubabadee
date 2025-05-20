
// On page load, retrieve animation preference and update checkbox state
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleAnimation');
  const btn = document.getElementById('animateBtn');

  // Retrieve preference from localStorage
  const animationPref = localStorage.getItem('animationEnabled');

  // If preference exists, set checkbox and button behavior accordingly
  if (animationPref === 'true') {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }

  // Button click triggers animation only if enabled
  btn.addEventListener('click', () => {
    if (toggle.checked) {
      btn.classList.add('pulse-animation');
      // Remove animation class after animation ends to allow retriggering
      btn.addEventListener('animationend', () => {
        btn.classList.remove('pulse-animation');
      }, { once: true });
    } else {
      alert('Animation is disabled. Please enable it to see effects.');
    }
  });

  // On checkbox change, save preference in localStorage
  toggle.addEventListener('change', () => {
    localStorage.setItem('animationEnabled', toggle.checked);
  });
});
