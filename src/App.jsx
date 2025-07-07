import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import ArticleList from "./components/ArticleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

    <main className="container my-4">
      <ArticleList />
    </main>
    
    <Footer authorName="Muhamad Rifki Firdaus"/>
    </>
  );
}

export default App;