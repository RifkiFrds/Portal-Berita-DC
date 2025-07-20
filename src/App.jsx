import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

import HomePage from "./pages/HomePage";
import ArticleDetailPages from "./pages/ArticleDetailPages";
import AboutPage from "./pages/AboutPage";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
       <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 ...">
    <Header siteTitle="JUMT News" /> 

    <main className="conatiner mx-auto px-4 py-4 flex-grow">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticleDetailPages />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>

    <Footer authorName="Muhamad Rifki Firdaus"/>
    </div>
    </div>
  );
}

export default App;