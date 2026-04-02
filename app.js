const dataIslami = [
    // --- DOA HARIAN ---
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Sebelum Tidur', teks: 'Bismika Allahumma ahyaa wa bismika amuut.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Bangun Tidur', teks: 'Alhamdulillahilladzi ahyanaa ba\'damaa amatanaa wa ilaihin nusyuur.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Sebelum Makan', teks: 'Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa azaaban naar.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Sesudah Makan', teks: 'Alhamdulillahilladzi ath\'amanaa wa saqoonaa wa ja\'alanaa minal muslimiin.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Masuk WC', teks: 'Allahumma inni a\'udzu bika minal khubutsi wal khabaa-is.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Keluar WC', teks: 'Ghufraanaka. Alhamdulillahilladzi adzhaba \'annil adzaa wa \'aafaanii.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Keluar Rumah', teks: 'Bismillahi tawakaltu \'alallahi laa hawla wa laa quwwata illa billah.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Masuk Rumah', teks: 'Bismillahi walajnaa wa bismillahi kharajnaa wa \'alaa rabbina tawakkalnaa.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Naik Kendaraan', teks: 'Subhaanalladzii sakhkhara lanaa haadzaa wamaa kunnaa lahu muqriniina wa innaa ilaa rabbinaa lamunqalibuun.' },
    { tipe: 'Doa', kelas: 'b-doa', judul: 'Doa Belajar', teks: 'Robbi zidnii \'ilmaa, warzuqnii fahmaa.' },

    // --- HADITS ---
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Keutamaan Niat', teks: 'Sesungguhnya setiap amalan tergantung pada niatnya. (HR. Bukhari & Muslim)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Menuntut Ilmu', teks: 'Menuntut ilmu itu wajib atas setiap muslim. (HR. Ibnu Majah)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Menjaga Lisan', teks: 'Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah dia berkata baik atau diam. (HR. Bukhari & Muslim)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Kebersihan', teks: 'Kebersihan (kesucian) itu adalah sebagian dari iman. (HR. Muslim)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Kasih Sayang', teks: 'Barangsiapa tidak menyayangi, maka tidak akan disayangi. (HR. Bukhari)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Menebar Salam', teks: 'Sebarkanlah salam di antara kalian. (HR. Muslim)' },
    { tipe: 'Hadits', kelas: 'b-hadits', judul: 'Keutamaan Doa', teks: 'Doa adalah senjata orang mukmin, tiang agama, dan cahaya langit dan bumi. (HR. Hakim)' },

    // --- SUNNAH ---
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Tersenyum', teks: 'Senyummu di hadapan saudaramu adalah sedekah. (HR. Tirmidzi)' },
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Makan dengan Tangan Kanan', teks: 'Jika salah seorang dari kalian makan, maka makanlah dengan tangan kanannya. (HR. Muslim)' },
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Bersiwak (Sikat Gigi)', teks: 'Seandainya tidak memberatkan umatku, niscaya aku perintahkan mereka bersiwak setiap kali wudhu. (HR. Bukhari)' },
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Membaca Bismillah', teks: 'Setiap perkara penting yang tidak dimulai dengan bismillahirrahmanirrahim, maka amalan tersebut terputus (kurang keberkahannya).' },
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Tidur Miring ke Kanan', teks: 'Berbaringlah di atas rusuk sebelah kananmu. (HR. Bukhari)' },
    { tipe: 'Sunnah', kelas: 'b-sunnah', judul: 'Berwudhu Sebelum Tidur', teks: 'Apabila engkau hendak mendatangi tempat tidurmu, maka berwudhulah sebagaimana wudhumu untuk shalat. (HR. Bukhari & Muslim)' }
];

const kontainer = document.getElementById('konten-aplikasi');
const kolomCari = document.getElementById('kolom-cari');

function tampilkanData(data) {
    kontainer.innerHTML = '';
    if (data.length === 0) {
        kontainer.innerHTML = '<p style="text-align:center; margin-top:20px;">Data tidak ditemukan.</p>';
        return;
    }
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="badge ${item.kelas}">${item.tipe}</span>
            <h2>${item.judul}</h2>
            <p>${item.teks}</p>
        `;
        kontainer.appendChild(card);
    });
}

// Tampilkan semua data saat pertama kali dibuka
tampilkanData(dataIslami);

// Fitur Pencarian Real-time
kolomCari.addEventListener('input', (e) => {
    const kataKunci = e.target.value.toLowerCase();
    const hasilFilter = dataIslami.filter(item => 
        item.judul.toLowerCase().includes(kataKunci) || 
        item.teks.toLowerCase().includes(kataKunci) ||
        item.tipe.toLowerCase().includes(kataKunci)
    );
    tampilkanData(hasilFilter);
});

// Registrasi Service Worker untuk PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .catch(err => console.error('Pendaftaran SW Gagal', err));
    });
}
