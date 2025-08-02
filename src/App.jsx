import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

import HomePage from "./pages/HomePage";
import ArticleDetailPages from "./pages/ArticleDetailPages";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
   <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 ...">
    <div className="flex flex-col min-h-srceen">
    <Header siteTitle="JUMT News" /> 
    </div>

    <main className="conatiner mx-auto px-4 py-4 flex-grow">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticleDetailPages />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>

    <Footer authorName="Muhamad Rifki Firdaus"/>
    </div>
  );
}

export default App;