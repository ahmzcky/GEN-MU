// Navigasi Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu) navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animasi Fade-in (Intersection Observer)
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.fade-in, .slide-in');
animatedElements.forEach(el => observer.observe(el));
