document.addEventListener('DOMContentLoaded', function() {
    // efek tombol wishlist
    const wishlistBtn = document.querySelector('.btn-wishlist');
    if(wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            alert('Ditambahkan ke daftar keinginan');
        });
    }

    // fallback jika logo tidak ditemukan
    const logo = document.getElementById('app-logo');
    if(logo) {
        logo.onerror = function() {
            this.src = 'https://via.placeholder.com/80x80?text=LLC';
        };
    }
});