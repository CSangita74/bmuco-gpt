import '../styles/globals.css'
import { useState, useEffect, createContext } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const LangContext = createContext();

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </LangContext.Provider>
  );
}

export default MyApp;
