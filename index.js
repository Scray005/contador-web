        let count = 0;
        const counterElement = document.getElementById('counter');

        function incrementCounter() {
            count++;
            counterElement.textContent = count;
        }

        function resetCounter() {
            count = 0;
            counterElement.textContent = count;
        }

        counterElement.addEventListener('touchstart', handleTouchStart);
        counterElement.addEventListener('touchend', handleTouchEnd);
        counterElement.addEventListener('click', incrementCounter);

        let touchStartX = 0;

        function handleTouchStart(event) {
            touchStartX = event.touches[0].clientX;
        }

        function handleTouchEnd(event) {
            const touchEndX = event.changedTouches[0].clientX;
            const touchThreshold = 50; // Ajusta este valor según sea necesario

            if (Math.abs(touchEndX - touchStartX) < touchThreshold) {
                incrementCounter();
            }
        }