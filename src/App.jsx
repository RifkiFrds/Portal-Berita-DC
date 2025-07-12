import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import './App.css';

function App() {
  return (
    <>
    <Header siteTitle="Aplikasi React Pertamaku" /> 

      <ArticleList />

    <Footer authorName="Muhamad Rifki Firdaus"/>
    </>
  );
}

export default App;