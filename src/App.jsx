import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import './App.css';

import HomePage from "./pages/HomePage";
import ArticleDetailPages from "./pages/ArticleDetailPages";


function App() {
  return (
    <div className="flex flex-col min-h-sreen">
    <Header siteTitle="JUMT News" /> 

    <main className="conatiner mx-auto px-4 py-4 flex-grow">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticleDetailPages />} />
      </Routes>
    </main>

      <ArticleList />

    <Footer authorName="Muhamad Rifki Firdaus"/>
    </div>
  );
}

export default App;