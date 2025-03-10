document.addEventListener('DOMContentLoaded', () => {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(container => {
        let interval;
        const slide = container.querySelector('.carousel-slide');
        const items = slide.children;
        let currentIndex = 0;
        
        // Set initial positions
        Array.from(items).forEach((item, index) => {
            item.style.transform = `translateX(${index * 100}%)`;
        });

        // Auto-advance function
        function startInterval() {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;
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