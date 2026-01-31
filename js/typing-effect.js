// Typing Effect Implementation
class TypingEffect {
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = texts;
    this.speed = options.speed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseTime = options.pauseTime || 2000;
    
    this.currentTextIndex = 0;
    this.currentText = '';
    this.isDeleting = false;
    this.isPaused = false;
    this.timeoutId = null;
    
    this.typingTextElement = element.querySelector('.typing-text');
    this.init();
  }
  
  init() {
    this.type();
  }
  
  type() {
    if (this.isPaused) {
      this.timeoutId = setTimeout(() => {
        this.isPaused = false;
        this.isDeleting = true;
        this.type();
      }, this.pauseTime);
      return;
    }
    
    const fullText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
      
      if (this.currentText === '') {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      }
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
      
      if (this.currentText === fullText) {
        this.isPaused = true;
      }
    }
    
    this.typingTextElement.textContent = this.currentText;
    
    const delay = this.isDeleting ? this.deleteSpeed : this.speed;
    this.timeoutId = setTimeout(() => this.type(), delay);
  }
  
  destroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typingEffect');
  if (typingElement) {
    const texts = ['Full Stack Web Developer', 'Android Developer', 'Full Stack Web Developer'];
    new TypingEffect(typingElement, texts, {
      speed: 100,
      deleteSpeed: 50,
      pauseTime: 2000
    });
  }
});
