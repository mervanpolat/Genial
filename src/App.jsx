import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/LandingPage/NavBar.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import UeberUns from './components/LandingPage/UeberUns.jsx';
import MeinLehrplan from './components/Lehrplan/MeinLehrplan.jsx';
import Preis from './components/LandingPage/Preis.jsx'; // Importing Preis page

// Importing pages created using PageWrapper
import Grundlagen from './modules/Pages/Grundlagen.jsx';
import GleichungenLoesen from './modules/Pages/GleichungenLoesen.jsx'; // Example page using PageWrapper

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/ueber-uns" element={<UeberUns />} />
                <Route path="/kurse" element={<MeinLehrplan />} /> {/* Corrected route for Kurse */}
                <Route path="/preis" element={<Preis />} />

                {/* Routes for pages using PageWrapper */}
                <Route path="/grundlagen" element={<Grundlagen />} />
                <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
