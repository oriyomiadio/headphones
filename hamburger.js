// Get the hamburger button and navigation menu
const hamburgerButton = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation ul');

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation menu
  navigationMenu.classList.toggle('active');
});
