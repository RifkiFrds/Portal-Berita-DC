import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BeritaDua() {
  return (
    <div>
      <header className="navbar-container">
        <div className="logo">
          <img src="assets/logo.jpg" alt="logo" />
        </div>
        <nav className="nav-list">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">News</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <h2>79 Tahun Indonesia: Antusiasme Masyarakat Menyambut Hari Kemerdekaan</h2>
          <img src="assets/berita2.jpg" alt="Berita Kedua" />
          <p>
            Tangerang, Jurnalistik UMT - Semangat masyarakat Indonesia tidak pernah luntur dalam
            menyambut HUT RI setiap tahunnya. Perayaan ke-79 tahun kemerdekaan Indonesia kali ini tak
            kalah meriah dari tahun-tahun sebelumnya. Di seluruh penjuru negeri, berbagai daerah
            mengadakan upacara peringatan dan lomba-lomba yang menarik antusiasme warga.
          </p>
          <p>
            Alun-alun Kota Tangerang menjadi pusat perayaan di wilayah tersebut. Upacara bendera yang
            khidmat dihadiri oleh peserta undangan dan disaksikan oleh masyarakat umum. Pengibaran
            Bendera Merah Putih menjadi momen yang paling ditunggu-tunggu.
          </p>
          <p>
            "Pengibar benderanya keren banget. Saya merasa bangga dan terhormat bisa ikut upacara hari
            ini," ujar Lidia, siswa SMAN 1 Kota Tangerang yang menjadi peserta upacara.
          </p>
          <p>
            Usai upacara, rangkaian acara dilanjutkan dengan berbagai perlombaan yang diikuti
            masyarakat sekitar. Salah satu lomba yang menarik perhatian adalah estafet belut yang
            diikuti oleh ibu-ibu, menambah kemeriahan suasana.
          </p>
          <p>
            Kemeriahan perayaan HUT RI ke-79 di Alun-alun Kota Tangerang mencerminkan antusiasme
            masyarakat dalam merayakan kemerdekaan Indonesia. Semangat ini diharapkan terus terjaga
            dan meningkat di tahun-tahun mendatang.
          </p>
        </article>

        <aside className="sidebar">
          <h3>Berita Populer</h3>
          <ul>
            <li><a href="berita1.html">Berita Populer 1</a></li>
            <li><a href="berita2.html">Berita Populer 2</a></li>
            <li><a href="berita3.html">Berita Populer 3</a></li>
          </ul>

          <h3>Profile Penulis</h3>
          <div className="penulis-container">
            <img src="assets/penulis1.jpg" alt="Penulis" className="penulis-img" />
            <p>Nama: Muhamad Rifki Firdaus</p>
            <p>Bio: Mahasiswa Jurnalistik UMT 2024-2025.</p>
          </div>
          <div className="penulis-container">
            <img src="assets/penulis2.jpg" alt="Penulis" className="penulis-img" />
            <p>Nama: Masitoh</p>
            <p>Bio: Mahasiswa Jurnalistik UMT 2024-2025.</p>
          </div>
          <div className="penulis-container">
            <img src="assets/penulis3.jpg" alt="Penulis" className="penulis-img" />
            <p>Nama: Famzah</p>
            <p>Bio: Mahasiswa Jurnalistik UMT 2024-2025.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
