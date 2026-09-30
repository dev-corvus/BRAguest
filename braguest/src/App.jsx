import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}