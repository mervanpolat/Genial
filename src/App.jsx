// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import UeberUns from './components/UeberUns';
import MeinLehrplan from './components/MeinLehrplan';
import GleichungenLoesen from './components/GleichungenLoesen';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/mein-lehrplan" element={<MeinLehrplan />} />
        <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
