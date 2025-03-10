document.addEventListener('DOMContentLoaded', () => {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(container => {
        let interval;
        const slide = container.querySelector('.carousel-slide');
        const images = slide.querySelectorAll('img');
        let currentIndex = 0;
        const containerWidth = container.offsetWidth;

        // Set initial positions
        images.forEach((img, index) => {
            img.style.width = `${containerWidth}px`;
        });

        // Auto-advance function
        function startInterval() {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                slide.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
            }, 3000);
        }

        startInterval();

        // Pause on hover
        container.addEventListener('mouseenter', () => clearInterval(interval));
        container.addEventListener('mouseleave', startInterval);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});