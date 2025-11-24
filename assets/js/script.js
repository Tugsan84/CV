const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Hamburger tıklanınca menüyü aç/kapa
hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation(); // click eventinin document'e yayılmasını engeller
});

// Nav menüye tıklanınca menü kapanmasın
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Sayfaya tıklanınca menüyü kapat
document.addEventListener('click', () => {
    nav.classList.remove('active');
});






    // Sayfa yolu al
    const path = window.location.pathname;

    // Buton elementleri
    const desktopBtn = document.getElementById('desktop-lang-btn');
    const mobileBtn = document.getElementById('mobile-lang-btn');

    // Aktif bayrağı belirle
    if (path.includes('/en/')) {
        desktopBtn.textContent = 'EN';
    mobileBtn.textContent = 'EN';
    } else {
        desktopBtn.textContent = 'TR';
    mobileBtn.textContent = 'TR';
    }
