import React from "react";
import ModulTemplate from "../ModulTemplate/ModulTemplate.jsx";

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

  return (
      <ModulTemplate
          level="LEVEL 2"
          title="Gleichungen lösen"
          headline="Gleichungen lösen"
          description="Eine solide Grundlage in Gleichungen mit Unbekannten aufbauen."
          imageSrc="/assets/CardImages/HTL2/Gleichung.png"
          exercises={24}
          units={4}
          moduleData={moduleData}
      />
  );
}

export default GleichungenLoesen;
