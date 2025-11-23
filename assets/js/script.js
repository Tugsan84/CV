const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Hamburger týklanýnca menüyü aç/kapa
hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation(); // click eventinin document'e yayýlmasýný engeller
});

// Nav menüye týklanýnca menü kapanmasýn
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Sayfaya týklanýnca menüyü kapat
document.addEventListener('click', () => {
    nav.classList.remove('active');
});
