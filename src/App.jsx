import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/LandingPage/NavBar.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import UeberUns from './components/LandingPage/UeberUns.jsx';
import MeinLehrplan from './components/Lehrplan/MeinLehrplan.jsx';

// Importing pages created using PageWrapper
import Grundlagen from './modules/Pages/Grundlagen.jsx';
import GleichungenLoesen from './modules/Pages/GleichungenLoesen.jsx'; // Example page using PageWrapper

function App() {
    return (//sdfgsduzfgsddfzugsuzfdg
        <Router>
            <NavBar />
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/ueber-uns" element={<UeberUns />} />
                <Route path="/mein-lehrplan" element={<MeinLehrplan />} />

                {/* Routes for pages using PageWrapper */}
                <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />
                <Route path="/grundlagen" element={<Grundlagen />} /> {/* Updated route */}
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;
