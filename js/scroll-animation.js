// Scroll Animation Implementation
class ScrollAnimation {
  constructor() {
    this.observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Optionally unobserve after animation
          // this.observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);
    
    this.init();
  }
  
  init() {
    // Observe all elements that should animate on scroll
    const elementsToAnimate = document.querySelectorAll('.profile-info, .profile-image-container, .objective-header, .objective-content');
    
    elementsToAnimate.forEach(element => {
      // Check if element is already visible (in viewport)
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        // If already visible, animate immediately
        setTimeout(() => {
          element.classList.add('animate-in');
        }, 100);
      } else {
        // Otherwise, observe for scroll
        this.observer.observe(element);
      }
    });
  }
}

// Initialize scroll animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimation();
});
