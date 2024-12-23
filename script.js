document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.slide-section');
  let currentSection = 0;

  // Function to show the active section
  function showSection(index) {
      sections.forEach((section, i) => {
          section.classList.remove('active');
          if (i === index) {
              section.classList.add('active');
          }
      });
  }

  // Initial Section Load
  showSection(currentSection);

  // Add smooth scrolling for navigation
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          currentSection = index;
          showSection(currentSection);
      });
  });
});
