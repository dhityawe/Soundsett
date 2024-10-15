// JavaScript untuk interaksi halaman

// Menampilkan modal sign-up ketika tombol "Sign up for free" diklik
const signUpBtn = document.getElementById('signUpBtn');
const signUpModal = document.getElementById('signUpModal');
const closeBtn = document.querySelector('.close-btn');

signUpBtn.addEventListener('click', () => {
    signUpModal.style.display = 'block';
});

// Menutup modal ketika tombol close diklik
closeBtn.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Menutup modal ketika pengguna mengklik di luar modal
window.addEventListener('click', (event) => {
    if (event.target == signUpModal) {
        signUpModal.style.display = 'none';
    }
});

// Navigasi ke halaman detail ketika salah satu song card diklik
const songCards = document.querySelectorAll('.song-card');

songCards.forEach((card) => {
    card.addEventListener('click', () => {
        window.location.href = 'detail.html';
    });
});
