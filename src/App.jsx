import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans text-gray-100 selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <History />
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

