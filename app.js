const dataIslami = [
    // SUNNAH
    { tipe: 'SUNNAH', kelas: 'b-sunnah', judul: 'Tersenyum', arab: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ', latin: '', teks: 'Senyummu di hadapan saudaramu adalah sedekah. (HR. Tirmidzi)' },
    { tipe: 'SUNNAH', kelas: 'b-sunnah', judul: 'Makan Tangan Kanan', arab: 'إِذَا أَكَلَ أَحَدُكُمْ فَلْيَأْكُلْ بِيَمِينِهِ', latin: '', teks: 'Jika salah seorang dari kalian makan, makanlah dengan tangan kanannya. (HR. Muslim)' },
    { tipe: 'SUNNAH', kelas: 'b-sunnah', judul: 'Bersiwak', arab: 'لَوْلاَ أَنْ أَشُقَّ عَلَى أُمَّتِي لأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلاَةٍ', latin: '', teks: 'Seandainya tidak memberatkan umatku, niscaya aku perintahkan mereka bersiwak setiap kali shalat. (HR. Bukhari)' },
    
    // HADITS
    { tipe: 'HADITS', kelas: 'b-hadits', judul: 'Niat', arab: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ', latin: '', teks: 'Sesungguhnya setiap amalan tergantung pada niatnya. (HR. Bukhari)' },
    { tipe: 'HADITS', kelas: 'b-hadits', judul: 'Berbakti Orang Tua', arab: 'رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ', latin: '', teks: 'Ridha Allah tergantung pada ridha orang tua. (HR. Tirmidzi)' },
    { tipe: 'HADITS', kelas: 'b-hadits', judul: 'Larangan Marah', arab: 'لاَ تَغْضَبْ وَلَكَ الْجَنَّةُ', latin: '', teks: 'Janganlah engkau marah, maka bagimu surga. (HR. Ath-Thabrani)' },
    { tipe: 'HADITS', kelas: 'b-hadits', judul: 'Kata yang Baik', arab: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ', latin: '', teks: 'Barangsiapa beriman kepada Allah, berkatalah yang baik atau diam. (HR. Bukhari)' },

    // DOA
    { tipe: 'DOA', kelas: 'b-doa', judul: 'Doa Makan', arab: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ', latin: 'Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa azaaban naar.', teks: 'Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka.' },
    { tipe: 'DOA', kelas: 'b-doa', judul: 'Doa Tidur', arab: 'بِاسْمِكَ اللَّهُمَّ أَحْيَا وَبِاسْمِكَ أَمُوتُ', latin: 'Bismika Allahumma ahyaa wa bismika amuut.', teks: 'Dengan nama-Mu, ya Allah, aku hidup dan dengan nama-Mu aku mati.' },
    { tipe: 'DOA', kelas: 'b-doa', judul: 'Doa Masuk Masjid', arab: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', latin: 'Allahummaftahlii abwaaba rahmatik.', teks: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.' },
    { tipe: 'DOA', kelas: 'b-doa', judul: 'Doa Keluar Masjid', arab: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', latin: 'Allahumma innii as-aluka min fadhlika.', teks: 'Ya Allah, sesungguhnya aku memohon karunia-Mu.' },
    { tipe: 'DOA', kelas: 'b-doa', judul: 'Doa Sapu Jagad', arab: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', latin: 'Rabbana aatina fid dunya hasanah wa fil akhirati hasanah wa qina adzaban naar.', teks: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka.' }
];

const kontainer = document.getElementById('konten-aplikasi');
const judulHal = document.getElementById('judul-halaman');
const kolomCari = document.getElementById('kolom-cari');
let kategoriSekarang = 'SEMUA';

function tampilkanData(filter = 'SEMUA', cari = '') {
    kontainer.innerHTML = '';
    const filtered = dataIslami.filter(item => {
        const matchKategori = filter === 'SEMUA' || item.tipe === filter;
        const pencarian = cari.toLowerCase();
        const matchCari = item.judul.toLowerCase().includes(pencarian) || 
                          item.teks.toLowerCase().includes(pencarian) ||
                          (item.latin && item.latin.toLowerCase().includes(pencarian));
        return matchKategori && matchCari;
    });

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Cek apakah ada teks latin (biasanya untuk doa)
        let htmlLatin = item.latin ? `<div class="teks-latin">${item.latin}</div>` : '';
        
        card.innerHTML = `
            <span class="badge ${item.kelas}">${item.tipe}</span>
            <h2>${item.judul}</h2>
            <div class="teks-arab">${item.arab}</div>
            ${htmlLatin}
            <div class="teks-terjemahan">${item.teks}</div>
        `;
        kontainer.appendChild(card);
    });
}

function filterKategori(kat, el) {
    kategoriSekarang = kat;
    judulHal.innerText = kat === 'SEMUA' ? 'Semua Data' : 'Kumpulan ' + kat;
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    el.classList.add('active');
    tampilkanData(kat, kolomCari.value);
}

kolomCari.addEventListener('input', () => tampilkanData(kategoriSekarang, kolomCari.value));

tampilkanData();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}
