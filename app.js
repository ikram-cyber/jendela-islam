const dataIslami = [
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Tersenyum', teks: 'Senyummu di hadapan saudaramu adalah sedekah. (HR. Tirmidzi)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Keutamaan Niat', teks: 'Sesungguhnya setiap amalan tergantung pada niatnya. (HR. Bukhari & Muslim)' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Sebelum Makan', teks: 'Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa azaaban naar.' },
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Makan dengan Tangan Kanan', teks: 'Jika salah seorang dari kalian makan, maka makanlah dengan tangan kanannya. (HR. Muslim)' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Keluar Rumah', teks: 'Bismillahi tawakaltu alallahi laa hawla wa laa quwwata illa billah.' }
];

const kontainer = document.getElementById('konten-aplikasi');

dataIslami.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <span class="badge ${item.kelas}">${item.tipe}</span>
        <h2>${item.judul}</h2>
        <p>${item.teks}</p>
    `;
    kontainer.appendChild(card);
});

// Registrasi Service Worker untuk PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Terdaftar', reg))
            .catch(err => console.error('Pendaftaran SW Gagal', err));
    });
}
