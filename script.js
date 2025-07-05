document.addEventListener('DOMContentLoaded', () => {
    console.log('H1ter blog sitesi başarıyla yüklendi. Geliştirmeye hazır!');

    // Gelecekteki interaktif özellikler buraya eklenecek.
    // Örneğin, başlık üzerine gelince bir animasyon eklenebilir.
    const logoText = document.querySelector('.logo a');

    if (logoText) {
        logoText.addEventListener('mouseover', () => {
            logoText.style.letterSpacing = '4px';
        });
        logoText.addEventListener('mouseout', () => {
            logoText.style.letterSpacing = '2px';
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of a simple animation on scroll
    const animatedElements = document.querySelectorAll('.tool-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s ${entry.target.dataset.delay || '0s'} forwards`;
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
