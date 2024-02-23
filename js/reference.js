document.addEventListener("DOMContentLoaded", function() {
    var marquee = document.querySelector(".marquee");
    var container = document.querySelector(".marquee-container");
    var containerRect = container.getBoundingClientRect();
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= containerRect.top &&
        rect.left >= containerRect.left &&
        rect.bottom <= containerRect.bottom &&
        rect.right <= containerRect.right
      );
    }
  
    function checkVisibility() {
      if (isElementInViewport(marquee)) {
        marquee.style.animationPlayState = "running";
      } else {
        marquee.style.animationPlayState = "paused";
      }
    }
  
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", function() {
      containerRect = container.getBoundingClientRect();
      checkVisibility();
    });
  
    checkVisibility();
  });
s  