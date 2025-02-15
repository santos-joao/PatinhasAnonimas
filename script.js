        // Atualização do ano no footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Carrossel
        const carousel = document.querySelector('.carousel-inner');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        document.querySelector('.carousel-next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        document.querySelector('.carousel-prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        // Auto-play do carrossel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 5000);

        // WhatsApp click handler
        document.querySelector('.whatsapp-float').addEventListener('click', () => {
            window.open('https://wa.me/+5521979961158', '_blank'); //adcionar o numéro do zap
        });