import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BeritaSatu from '../assets/images/berita1.jpg'

function HomePage() {
  return (
    <main class="main-content">
        <div class="content">
            <article>
                <h2>Mahasiswa Tangerang Gelar Aksi Kamisan Serukan Penuntasan Kasus Pelanggaran HAM</h2>
                <img src={BeritaSatu} alt="Berita Pertama" />
                <p>TANGERANG, JURNALISTIK UMT - Mahasiswa Universitas Muhammadiyah Tangerang (UMT) yang tergabung dalam Badan Eksekutif Mahasiswa (BEM) menggelar aksi Kamisan di depan Polres Metro Tangerang Kota...</p>
                <a href="berita1.html" class="read-more">Baca Selengkapnya</a>
            </article>
            <article>
                <h2>79 Tahun Indonesia: Antusiasme Masyarakat Menyambut Hari Kemerdekaan</h2>
                <img src="assets/berita2.jpg" alt="Berita Kedua" />
                <p>Tangerang, Jurnalistik UMT - Semangat masyarakat Indonesia tidak pernah luntur dalam menyambut HUT RI setiap tahunnya...</p>
                <a href="/beritasatu" class="read-more">Baca Selengkapnya</a>
            </article>
            <article>
                <h2>Rektor UMT Daftar sebagai Calon Walikota Tangerang</h2>
                <img src="assets/berita3.jpg" alt="Berita Ketiga"/>
                <p>TANGERANG, JURNALISTIK UMT - Hari ini, Kamis (29/8/2024), menjadi hari terakhir pendaftaran calon kepala daerah di Kota Tangerang...</p>
                 <link to="/" class="read-more">Baca Selengkapnya</link>
            </article>
        </div>

        <aside class="sidebar">
                <h3>Berita Populer</h3>
                <ul>
                    <li><a href="berita1.html">Berita Populer 1</a></li>
                    <li><a href="berita2.html">Berita Populer 2</a></li>
                    <li><a href="berita3.html">Berita Populer 3</a></li>
                </ul>
                <h3>Profile Penulis</h3>
                <div class="penulis-container">
                    <img src="assets/penulis1.jpg" alt="Penulis" class="penulis-img" />
                    <p>Nama: Muhamad Rifki Firdaus</p>
                    <p>Bio: Mahasiswa Jurnalistik UMT 2024-2025.</p>
                </div>
                <div class="penulis-container">
                    <img src="assets/penulis2.jpg" alt="Penulis" class="penulis-img" />
                    <p>Nama: Masitoh</p>
                    <p>Bio: Mahasiswa Jurnalistik UMT 2024-2025.</p>
                </div>
                <div class="penulis-container">
                    <img src="assets/penulis3.jpg" alt="Penulis" class="penulis-img" />
                    <p>Nama: Famzah</p>
                    <p>Bio: Mahasiswa Jurnalistik UMT 2024-2025.</p>
                </div>
        </aside>
    </main>
  )
}

export default HomePage
