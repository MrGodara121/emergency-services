// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('mobile-sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  const overlay = document.getElementById('overlay');
  
  if (menuToggle && sidebar && closeSidebar && overlay) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    
    function closeMenu() {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
    
    closeSidebar.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }
  
  // Accordion for mobile categories
  const accordionToggle = document.querySelector('.accordion-toggle');
  if (accordionToggle) {
    accordionToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.accordion').classList.toggle('active');
    });
  }
  
  console.log('Emergency Services USA loaded');
});