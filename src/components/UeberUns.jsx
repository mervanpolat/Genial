import React from 'react';
import './UeberUns.css'; // Make sure to style the grid in this file

function UeberUns() {
  return (
    <div className="ueber-uns-container">
      <div className="ueber-uns-grid">
        {/* Row 1, Column 1 */}
        <div className="grid-item header">
          <h1>Über uns</h1>
        </div>

        {/* Row 2, Column 1 */}
        <div className="grid-item text">
          <p>
            Wir helfen Schülern und Lernenden, ihre mathematischen Fähigkeiten zu verbessern, 
            mit besonderem Fokus auf die Vorbereitung zur Zentralmatura. 
            <br></br><br></br>
            Auf unserer Plattform setzt du auf aktives Lernen – keine Videos, nur interaktive Übungen. 
            <br></br><br></br>
            Wir führen dich Schritt für Schritt durch die Konzepte und bauen dabei ein solides Fundament auf, 
            um dich optimal auf die Matura vorzubereiten.
          </p>
        </div>

        {/* Row 1 & 2, Column 2 */}
        <div className="grid-item image">
          <img 
            src="/images/UeberUns/Euclid.png" 
            alt="Euclid's Elements" 
          />
        </div>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <h1>Team</h1>
        <div className="team-member">
          <img 
            src="/images/TeamMembers/MervanPolat.png" 
            alt="Mervan Polat" 
            className="team-member-image"
          />
          <h3>Mervan Polat</h3>
          <p>Software Engineer, Founder</p>
        </div>
      </section>
    </div>
  );
}

export default UeberUns;
