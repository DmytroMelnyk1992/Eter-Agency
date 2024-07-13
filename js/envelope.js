document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('floating-envelope');
    let velocity = { x: 2, y: 2 }; // Початкова швидкість
    let position = { 
        x: window.innerWidth - 200, // Повна ширина вікна мінус ширина конверта
        y: window.innerHeight - 200 // Висота вікна мінус висота конверта
     };
    let isScrolling;

    function moveEnvelope() {
        const maxX = window.innerWidth - envelope.clientWidth;
        const maxY = window.innerHeight - envelope.clientHeight;

        // Оновлюємо позицію
        position.x += velocity.x;
        position.y += velocity.y;

        // Перевіряємо зіткнення з краями
        if (position.x <= 0 || position.x >= maxX) {
            velocity.x *= -1; // Змінюємо напрямок по X
        }
        if (position.y <= 0 || position.y >= maxY) {
            velocity.y *= -1; // Змінюємо напрямок по Y
        }

        // Застосовуємо нову позицію
        envelope.style.left = `${position.x}px`;
        envelope.style.top = `${position.y}px`;
    }

    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        
        // Викликаємо функцію руху
        moveEnvelope();

        // Встановлюємо таймер на зупинку
        isScrolling = setTimeout(() => {
            // Зупиняємо рух, коли скрол зупиняється
        }, 100);
    });
});