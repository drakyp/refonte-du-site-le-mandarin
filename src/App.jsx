import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans text-brand-dark selection:bg-brand-red selection:text-white scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <History />
        <Gallery />
        <Menu />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

