document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
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
  

  function slideUpOnScroll() {
    const slideUpElements = document.querySelectorAll('.slide-up');
    const windowHeight = window.innerHeight;
    const scrolledToBottom = window.scrollY + windowHeight >= document.documentElement.scrollHeight;
  
    slideUpElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
  
      if (elementTop <= windowHeight - 200 || scrolledToBottom) { // 200px buffer
        element.classList.add('active');
      }
    });
  }
  
  // Add the scroll event listener
  window.addEventListener('scroll', slideUpOnScroll);
  
  // Trigger the function on page load to catch any visible elements
  slideUpOnScroll();
  