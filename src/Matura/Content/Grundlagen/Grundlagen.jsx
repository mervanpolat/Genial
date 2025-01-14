// File: src/Matura/Content/Grundlagen/Grundlagen.jsx
import React, { useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../PageTemplate/PageWrapper.css";
import TooltipItem from "../../Tippy/TooltipItem.jsx";

function Grundlagen() {
    const navigate = useNavigate();

    const moduleData = [
        {
            id: 1,
            title: "Griechische Buchstaben",
            headline: "Griechische Buchstaben",
            description: "Lerne die griechischen Buchstaben in Mathematik."
        },
        {
            id: 2,
            title: "Praxis: Griechische Buchstaben",
            headline: "Praxis: Griechische Buchstaben",
            description: "Vertiefe dein Wissen über griechische Buchstaben!"
        },
        {
            id: 3,
            title: "Zahlenmengen 3",
            headline: "Zahlenmengen Advanced",
            description: "Vertiefte Einblicke in Zahlenmengen."
        },
        {
            id: 4,
            title: "Zahlenmengen 4",
            headline: "Zahlenmengen Mastery",
            description: "Fortgeschrittenes Üben."
        },
        {
            id: 5,
            title: "Zahlenmengen 5",
            headline: "Zahlenmengen Summary",
            description: "Abschließende Zusammenfassung."
        }
    ];

    const itemRefs = useRef([]);
    itemRefs.current = moduleData.map(
        (module, i) => itemRefs.current[i] ?? createRef()
    );

    const handleCubeClick = (module, event, itemRef) => {
        event.stopPropagation();
        console.log("Clicked Content:", module.headline);

        if (itemRef && itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const handleAuswaehlen = (module) => {
        if (module.id === 1) {
            navigate("/theorie-griechischebuchstaben");
        } else {
            alert(`Seite für Modul-ID ${module.id} ist noch nicht definiert!`);
        }
    };

    return (
        <div className="template-page">
            <div className="gleichungen-container">
                {/* LEFT SECTION */}
                <div className="left-section">
                    <img
                        src="/CardImages/HTL2/Grundlagen.svg"
                        alt="Grundlagen"
                        className="subject-icon"
                    />
                    <h6>LEVEL 1</h6>
                    <h1>Grundlagen</h1>
                    <p>Vertiefe dich bei den Grundlagen der Mathematik.</p>

                    <div className="exercise-units">
                        <div className="exercise-unit">
                            <img
                                src="/images/Lektionen/Gleichungen/Uebung.png"
                                alt="Übung"
                            />
                            <h1>12 Übungen</h1>
                        </div>
                        <div className="exercise-unit">
                            <img
                                src="/images/Lektionen/Gleichungen/Lectures.png"
                                alt="Einheit"
                            />
                            <h1>2 Einheiten</h1>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="right-section">
                    {moduleData.map((module, index) => (
                        <TooltipItem
                            key={module.id}
                            module={module}
                            onSelect={handleAuswaehlen}
                            onCubeClick={handleCubeClick}
                            itemRef={itemRefs.current[index]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Grundlagen;
