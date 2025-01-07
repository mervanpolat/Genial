import 'react';
import { Link } from 'react-router-dom';
import './MeinLehrplan.css'; // Import the CSS file

function MeinLehrplan() {
  return (
    <div className="mein-lehrplan-container">
      {/* Main Heading */}
      <h1 className="main-heading">Mein Lehrplan</h1>
      <p>Schritt-für-Schritt-Wege zur Meisterschaft</p>

      {/* Header Section */}
      <div className="lehrplan-header">
        <div className="header-content">
          <div className="header-text">
            <h1>HTL2</h1>
            <p>Wähle diesen Pfad wenn du die HTL2 besuchst</p>
          </div>
        </div>
        <button className="start-path-button">Starten</button>
      </div>

      {/* Levels Section */}
      <div className="levels-scroll-container">
        <div className="levels-container">

          {/* Level 1 */}
          <Link to="/grundlagen" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 1</span>
              <img
                  src="/CardImages/Gleichung.png"
                  alt="Grundlagen"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Grundlagen</p>

          </Link>


          {/* Level 2 */}
          <Link to="/gleichungen-loesen" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 2</span>
              <img
                  src="/CardImages/Algebra.png"
                  alt="Gleichungen lösen"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Gleichungen lösen</p>

          </Link>

          {/* Level 3 */}
          <Link to="/level-3" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 3</span>
              <img
                  src="/CardImages/Funktionen.png"
                  alt="Funktionen"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Funktionen</p>

          </Link>

          {/* Level 4 */}
          <Link to="/level-4" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 4</span>
              <img
                  src="/CardImages/Trigonometrie.png"
                  alt="Trigonometrie"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Trigonometrie</p>

          </Link>

          {/* Level 5 */}
          <Link to="/level-5" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 5</span>
              <img
                  src="/CardImages/Vektoren.png"
                  alt="Vektoren"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Vektoren</p>

          </Link>

          {/* Level 6 */}
          <Link to="/level-6" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 6</span>
              <img
                  src="/CardImages/Ungleichungssysteme.png"
                  alt="(Un)gleichungssysteme"
                  className="level-icon"
              />
            </div>
            <p className="level-title">(Un)gleichungssysteme</p>

          </Link>

          {/* Level 7 */}
          <Link to="/level-7" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 7</span>
              <img
                  src="/CardImages/Differentialrechnung.png"
                  alt="Differentialrechnung"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Differentialrechnung</p>

          </Link>

          {/* Level 8 */}
          <Link to="/level-8" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 8</span>
              <img
                  src="/CardImages/Umkehraufgaben.png"
                  alt="Umkehraufgaben"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Umkehraufgaben</p>

          </Link>

          {/* Level 9 */}
          <Link to="/level-9" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 9</span>
              <img
                  src="/CardImages/Integral.png"
                  alt="Integral"
                  className="level-icon"
              />
            </div>
            <p className="level-title">Integral</p>
          </Link>

          {/* Level 10 */}
          <Link to="/level-10" className="level-link">
            <div className="level-card">
              <span className="level-label">LEVEL 10</span>
              <img
                  src="/CardImages/WHST.png"
                  alt="Wahrscheinlichkeit & Statistik"
                  className="level-icon"
              />

            </div>
            <p className="level-title">Wahrscheinlichkeit & Statistik</p>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default MeinLehrplan;
