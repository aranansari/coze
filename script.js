document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', (e) => {
      const answer = e.target.nextElementSibling;
      answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
  });
  

const navbar = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    const content = document.querySelector('.content');
  
    // Get the width of the content
    const contentWidth = content.offsetWidth;
  
    // Calculate the animation duration
    const duration = (contentWidth / 50) + 's';
  
    // Create the keyframes for the animation
    const keyframes = `
      @keyframes marquee-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
  
    // Add the keyframes to the document's styles
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  
    // Apply the animation to the marquee
    marquee.style.animation = `marquee-scroll ${duration} linear infinite`;
  });
  