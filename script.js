const biodata = {
    nama: "Wahyu Mulyo Aji",
    profesi: "Mahasiswa",
    nim: "G.231.25.0064",
    kelompok : "A1",
    kelas : "A1",
    prodi : "Teknik Informatika",
    media : [{nama : "Instagram", url : "https://www.instagram.com/mulyo_a?exln=MjRpZmJhZGw1c3Vj"},
        {nama : "Youtube", url : "https://www.youtube.com/@mulyo_a"}
    ],
    hobi : ["Membaca", "Sepak Bola", "Nonton"],
    foto : "foto.jpeg",
    ucapan : "Selamat Datang"
};

document.getElementById("nama").textContent = biodata.nama;
document.getElementById("nim").textContent = biodata.nim;
document.getElementById("inisial").src = biodata.foto;
document.getElementById("ucapan").textContent = biodata.ucapan;

const baris = [
    ["Progdi", biodata.prodi],
    ["Kelas", biodata.kelas],
    ["Kelompok", biodata.kelompok],
];

document.getElementById("data").innerHTML = baris
.map(([label, isi]) => `<p><span>${label}</span><span>${isi}</span></p>`)
.join("");

document.getElementById("daftarHobi").innerHTML = biodata.hobi
.map(h => `<li>${h}</li>`)
.join(" ");

document.getElementById("daftarmedia").innerHTML = biodata.media
.map(m => `<a href="${m.url}" target="_blank" rel="noopener noreferrer">${m.nama}</a>`)
.join(" ");

// Tombol tampilkan/sembunyikan hobi
const daftarHobi = document.getElementById("daftarHobi");
const btnHobi = document.getElementById("btnHobi");

btnHobi.addEventListener("click", () => {
    daftarHobi.classList.toggle("sembunyi");
    btnHobi.textContent = daftarHobi.classList.contains("sembunyi")
    ? "Lihat Hobi"
    : "Sembunyikan Hobi";
});

// Tombol mode gelap/terang
const daftarTema = ["a.png","t.jpg"];
let urutan = 0;

document.getElementById("btnTema").addEventListener("click", () => {
    urutan = (urutan + 1) %daftarTema.length;
    document.body.style.backgroundImage = `url('${daftarTema[urutan]}')`;
});

const daftarmedia = document.getElementById("daftarmedia");
const media = document.getElementById("media");

media.addEventListener("click", () => {
    daftarmedia.classList.toggle("sembunyi");
    media.textContent = daftarmedia.classList.contains("sembunyi")
    ? "Media Sosial"
    : "Sembunyikan"
});
