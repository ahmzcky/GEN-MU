// Mengatur Hamburger Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    // Toggle class 'active' untuk memunculkan/menyembunyikan menu
    navMenu.classList.toggle('active');
    
    // Animasi icon hamburger menjadi silang (X)
    mobileMenu.classList.toggle('is-active');
});

// Tutup menu otomatis jika salah satu link diklik (di mode mobile)
const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Fitur Lama: Animasi Scroll (Intersection Observer)
// Elemen akan muncul perlahan saat discroll ke area pandang
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Animasi mulai saat 15% elemen terlihat
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animasi hanya terjadi sekali
        }
    });
}, observerOptions);

// Pilih semua elemen dengan class animasi
const animatedElements = document.querySelectorAll('.fade-in, .slide-in');
animatedElements.forEach(el => observer.observe(el));
