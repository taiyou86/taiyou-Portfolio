"use strict";

{

  const menuOpen = document.querySelector('.hidden-menu');
  const keyButton = document.querySelector('.mobile-menu-icon');
  const head = document.querySelector('.head');

  keyButton.addEventListener('click',function(){
    head.classList.toggle('menu-open');
    menuOpen.classList.toggle('open');
  })




  document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 0);
    
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}


  // observe
document.addEventListener('DOMContentLoaded', function() {
  function callback(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }

  

  const options = {
    threshold: 0.2,
  };
  
  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll(".hidden");

  targets.forEach(target => {
    observer.observe(target);
  });


});

  // business-card
  const card = document.querySelector('.business-card');

  if (card) {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  }



}