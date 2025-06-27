import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Article from "./components/Article";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from "./components/Counter";


function App() {
  return (
    <>
    <Header siteTitle="Aplikasi React Pertamaku" /> 
    <Jumbotron title="Hallo Portal Berita" subtitle="Selamat datang di portal berita kami" buttonText="Baca Selengkapnya"/>

    <main className="container my-4">
      <h2>Selamat Datang di Aplikasi React Pertamaku</h2>
      <p>Ini adalah aplikasi React pertama saya. Saya belajar banyak tentang komponen, props, dan state.</p>
      <p>Semoga aplikasi ini bermanfaat bagi saya dan orang lain yang ingin belajar React!</p>
    </main>

    <Article title="Telah terjadi kerusakan jalan di daerah Jumudi Kota Tangerang" content="Kelurahan Jurumudi merupakan kelurahn yang telah hadi sejak tahun 1989, banyak kerusakan jalana yang di akibatkan oleh Pembangunan jalan Tol Benda, dengan ini masyrakat sekitar kesulitan untuk mengakses jalan setiap harinya"/>

    <Article title="Pembangunan jalan tol Benda" content="Pembangunan jalan tol Benda merupakan salah satu proyek infrastruktur yang sedang berlangsung di wilayah Benda, Kota Tangerang. Proyek ini bertujuan untuk meningkatkan konektivitas dan aksesibilitas di daerah tersebut."/>

    <Counter />
    <Footer authorName="Muhamad Rifki Firdaus"/>
    </>
  );
}

export default App;