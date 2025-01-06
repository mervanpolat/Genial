import React, { useRef, createRef } from 'react';
import './GleichungenLoesen.css';

import CodeButton from './CodeButton';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function GleichungenLoesen() {
  const moduleData = [
    {
      id: 1,
      title: 'Unbekannte Finden',
      headline: 'Unbekannte Finden',
      description: 'Lerne, wie man mithilfe von Gleichungen unbekannte Werte bestimmt.'
    },
    {
      id: 2,
      title: 'Praxis: Unbekannte Finden',
      headline: 'Praxis: Unbekannte Finden',
      description: 'Übungen und praktische Beispiele zum Finden von Unbekannten.'
    },
    {
      id: 3,
      title: 'Gleichungen mit Unbekannten',
      headline: 'Gleichungen mit Unbekannten',
      description: 'Verstehe die Theorie hinter Gleichungen und wie man sie löst.'
    },
    {
      id: 4,
      title: 'Praxis: Gleichungen mit Unbekannten',
      headline: 'Praxis: Gleichungen mit Unbekannten',
      description: 'Teste dein Wissen mit zusätzlichen Übungen zu Gleichungen.'
    },
    {
      id: 5,
      title: 'Praxis: Gleichungen mit mehreren Unbekannten',
      headline: 'Praxis: Gleichungen mit mehreren Unbekannten',
      description: 'Teste dein Wissen mit zusätzlichen Übungen zu Gleichungen.'
    },
    {
      id: 6,
      title: 'Gleichungen lösen',
      headline: 'Theorie: Gleichungen lösen',
      description: 'Teste dein Wissen mit zusätzlichen Übungen zu Gleichungen lösen.'
    },
    {
      id: 7,
      title: 'Al Habsi',
      headline: 'Praxis: Gleichungen lösen',
      description: 'Teste dein Wissen mit zusätzlichen Übungen zu Gleichungen lösen.'
    }
  ];

  const itemRefs = useRef([]);
  itemRefs.current = moduleData.map(
    (module, i) => itemRefs.current[i] ?? createRef()
  );

  const handleCubeClick = (module, event, itemRef) => {
    event.stopPropagation();
    console.log('Clicked module:', module.headline);

    if (itemRef && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleAuswaehlen = (module) => {
    alert(`Ausgewählt: ${module.headline}`);
  };

  return (
    <div className="gleichungen-page">
      <div className="gleichungen-container">
        <div className="left-section">
          <img
            src="/images/Lektionen/Gleichungen/Gleichung.png"
            alt="Gleichung"
            className="gleichung-icon"
          />
          <h6>ALGEBRA &amp; FUNKTIONSTHEORIE</h6>
          <h1>1.1 Gleichungen lösen</h1>
          <p>Eine solide Grundlage in Gleichungen mit Unbekannten aufbauen.</p>
          <div className="exercise-units">
            <div className="exercise-unit">
              <img
                src="/images/Lektionen/Gleichungen/Uebung.png"
                alt="Übung"
              />
              <h1>24 Übungen</h1>
            </div>
            <div className="exercise-unit">
              <img
                src="/images/Lektionen/Gleichungen/Lectures.png"
                alt="Einheit"
              />
              <h1>4 Einheiten</h1>
            </div>
          </div>
        </div>

        <div className="right-section">
          {moduleData.map((module, index) => (
            <Tippy
              key={module.id}
              theme="genial"
              interactive={true}
              trigger="click"
              hideOnClick={false}
              onClickOutside={(instance) => instance.hide()}
              arrow={true}
              placement="bottom"
              offset={[0, 1]}
              animation="appleish"
              content={
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ margin: 0, marginBottom: '1px' }}>
                    {module.headline}
                  </h2>
                  <p style={{ margin: 0 }}>{module.description}</p>
                  <button
                    className="btn-auswaehlen"
                    onClick={() => handleAuswaehlen(module)}
                  >
                    Auswählen
                  </button>
                </div>
              }
            >
              <div
                ref={itemRefs.current[index]}
                className="right-item"
                onClick={(e) =>
                  handleCubeClick(module, e, itemRefs.current[index])
                }
              >
                <CodeButton />
                <p>{module.title}</p>
              </div>
            </Tippy>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GleichungenLoesen;
