document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('floating-envelope');
    let velocity = { x: 2, y: 2 };
    let position = { 
        x: window.innerWidth - 200,
        y: window.innerHeight - 200
     };
    let isScrolling;

    function moveEnvelope() {
        const maxX = window.innerWidth - envelope.clientWidth;
        const maxY = window.innerHeight - envelope.clientHeight;

        position.x += velocity.x;
        position.y += velocity.y;

        if (position.x <= 0 || position.x >= maxX) {
            velocity.x *= -1;
        }
        if (position.y <= 0 || position.y >= maxY) {
            velocity.y *= -1;
        }

        envelope.style.left = `${position.x}px`;
        envelope.style.top = `${position.y}px`;
    }

    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        
        moveEnvelope();

        isScrolling = setTimeout(() => {
        }, 100);
    });
});

window.addEventListener("load", function () {
    setTimeout(hideLoader, 1500);
  });
  
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.overlay').style.display = 'block';
  });
  
  function hideLoader() {
    const loader = document.querySelector(".loader-wrapper");
    const overlay = document.querySelector(".overlay");
  
    loader.classList.add("hidden");
    overlay.classList.add("hidden");
  
    loader.addEventListener('animationend', () => {
      loader.remove();
      overlay.remove();
    });
  }