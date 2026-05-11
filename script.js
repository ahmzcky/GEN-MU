document.addEventListener("DOMContentLoaded", function() {
    
    // Logika Navbar Mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Penanganan Jika Gambar Gagal Dimuat
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" style="background:%23cccccc"%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14px" fill="%23333333"%3EGambar Belum Ditambahkan%3C/text%3E%3C/svg%3E';
            this.alt = "Gambar tidak tersedia";
        });
    });
});