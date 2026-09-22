import React, { useEffect } from 'react';
import ContextMenu from './components/ContextMenu';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    if (sessionStorage.getItem('scrollPosition') === '0') {
      window.scrollTo(0, 0);
      sessionStorage.removeItem('scrollPosition');
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <ContextMenu />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
