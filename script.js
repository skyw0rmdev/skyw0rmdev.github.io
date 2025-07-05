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
});
