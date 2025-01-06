import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleStart = () => {
    navigate('/mein-lehrplan'); // Redirect to "Mein Lehrplan für HTL2" page
  };

  return (
    <section className="landing-section">
      {/* Hero content */}
      <h1>Learn by doing.</h1>
      <p>
        Interaktives Problemlösen, das effektiv und unterhaltsam ist. <br></br>
        Bereite dich mühelos auf die Mathematik-Zentralmatura und Schularbeiten vor – egal ob AHS oder BHS.
      </p>
      <button className="cta-button" onClick={handleStart}>Loslegen</button>
      <div className="video-container">
        <video
          className="hero-video"
          src="/videos/LandingPage_Sinusfunktion.mov"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Concepts section */}
      <section className="concepts-section">
        <div className="concepts-text">
          <h2>KONZEPTE, DIE LICHT INS DUNKEL BRINGEN.</h2>
          <p>
            Interaktive Lektionen machen komplexe Themen leicht zugänglich. 
            Direktes Feedback sorgt dafür, dass du schneller verstehst.
          </p>
        </div>
        <img
          className="concepts-image"
          src="/images/LandingPage/ZRegel.png"
          alt="Konzept Grafik"
        />
      </section>

      {/* KURSINHALT SECTION */}
      <section className="kursinhalt-section">
        <h2>KURSINHALT.</h2>
        <p>
          Genial hilft dir, die österreichische Mathematikmatura spielend zu
          meistern – mit perfekt abgestimmten Übungen.
        </p>

        {/* Container for both logos side-by-side */}
        <div className="kursinhalt-logos">
          <img
            src="/images/LandingPage/Bundesministerium.png"
            alt="Bundesministerium: Bildung, Wissenschaft und Forschung"
          />
          <img
            src="/images/LandingPage/bifie.png"
            alt="Bundesinstitut bifie"
          />
        </div>
      </section>

      {/* TECHNOLOGIEEINSATZ SECTION */}
      <section className="technologieeinsatz-section">
        <h2>TECHNOLOGIE.</h2>
        <p>
          Egal, ob du GeoGebra, den TI-Nspire CX CAS, TI-82, TI-84 oder den CASIO ClassPad II verwendest, 
          Genial sorgt für eine optimale Vorbereitung mit Leichtigkeit.
        </p>

        {/* Container for the three images */}
        <div className="technologieeinsatz-images">
          <img
            src="/images/LandingPage/Casio.svg"
            alt="Casio Logo"
          />
          <img
            src="/images/LandingPage/TexasInstruments.svg"
            alt="Texas Instruments Logo"
          />
          <img
            src="/images/LandingPage/Geogebra.svg"
            alt="Geogebra Logo"
          />
        </div>
      </section>
    </section>
  );
}

export default LandingPage;
