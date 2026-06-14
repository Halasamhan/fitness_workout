document.addEventListener('DOMContentLoaded', () => {
  
  /* --- FEATURE 1: About Us Toggle (Original Logic) --- */
  const btnPlus = document.getElementById('toggleBtnPlus');
  const btnMinus = document.getElementById('toggleBtnMinus');
  const content = document.getElementById('additionalContent');

  if (btnPlus && btnMinus && content) {
    btnPlus.addEventListener('click', () => {
      content.style.display = 'block';
      btnPlus.style.display = 'none';
      btnMinus.style.display = 'inline-block';
    });

    btnMinus.addEventListener('click', () => {
      content.style.display = 'none';
      btnPlus.style.display = 'inline-block';
      btnMinus.style.display = 'none';
    });
  }

  /* --- FEATURE 2: Active Navigation Link --- */
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    if (currentPath.endsWith(linkHref) || (currentPath.endsWith('/') && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* --- FEATURE 3: Dynamic Footer Year --- */
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    const currentYear = new Date().getFullYear();
    footerBottom.innerHTML = `&copy; ${currentYear} Fit | Keep Moving Forward`;
  }

  /* --- FEATURE 4: Scroll Animations (Fade In) --- */
  const observerOptions = {
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  // REMOVED '.f_section_text' FROM THIS LIST SO THE HERO DOESN'T MOVE
  const animatedElements = document.querySelectorAll('.class, .feedback, .route-card, h2, .form-box');
  
  animatedElements.forEach(el => {
    el.classList.add('fade-in-section'); 
    observer.observe(el);
  });

  /* --- FEATURE 5: Sticky Header Effect --- */
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#6a0dad';
      header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
    } else {
      header.style.backgroundColor = 'rgba(106, 13, 173, 0.95)';
      header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    }
  });

});