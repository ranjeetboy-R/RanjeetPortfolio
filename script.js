// Setup and start animation!
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Web Developer', 'Web Designer', 'As HTML', 'CSS', 'React.js', 'JAVA SCRIPT.'],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '_',
});

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });





  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').appendChild(menuToggle);
    
    const rightNav = document.querySelector('.right-nav');
    
    menuToggle.addEventListener('click', function() {
        rightNav.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.right-nav a').forEach(link => {
        link.addEventListener('click', () => {
            rightNav.classList.remove('active');
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            rightNav.classList.remove('active');
        }
    });
});