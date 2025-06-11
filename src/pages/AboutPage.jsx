import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <main class="about-page">
        <section class="about-content">
            <h2>Tentang Kami</h2>
            <p>Jurnalistik UMT adalah Unit Kegiatan Mahasiswa Universitas Muhammadiyah Tangerang, yang didirikan pada tahun 2016.</p>
        </section>
        
        <aside class="sidebar">
            <h3>Visi & Misi</h3>
            <p>Menjadikan Junal Kampus sebagai wadah pemersatu penampung aspirasi penyalur bakar di Universitas Muhammadiyah Tangerang.</p>
        </aside>
    </main>
  );
}

export default AboutPage
