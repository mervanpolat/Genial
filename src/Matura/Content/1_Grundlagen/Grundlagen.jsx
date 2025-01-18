// File: src/Matura/Content/1_Grundlagen/Grundlagen.jsx
import React, { useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import "../ModulTemplate/PageWrapper.css";
import TooltipItem from "../ModulTippy/TooltipItem.jsx";

function Grundlagen() {
    const navigate = useNavigate();

    const moduleData = [
        {
            id: 1,
            title: "Griechische Buchstaben",
            headline: "Griechische Buchstaben",
            description: "Lerne die Griechische Buchstaben in Mathematik.",
            route: "/theory/griechische" // this is the slug from theoryRegistry
        },
        {
            id: 2,
            title: "Praxis: Griechische Buchstaben",
            headline: "Praxis: Griechische Buchstaben",
            description: "Vertiefe dein Verständnis über die griechischen Buchstaben in Mathematik.",
            route: "/praxis-griechischebuchstaben"
        },

        {
            id: 3,
            title: "Theorie: Lateinische Buchstaben",
            headline: "Theorie: Lateinische Buchstaben",
            description: "Lerne die Lateinische Buchstaben die in Mathematik ständig vorkommen.",
            route: "/theory/lateinische"
        },
        {
            id: 4,
            title: "Praxis: Lateinische Buchstaben",
            headline: "Praxis: Lateinische Buchstaben",
            description: "Vertiefe dein Verständnis über die lateinischen Buchstaben in Mathematik.",
            route: "/praxis-lateinischebuchstaben"
        },

        {
            id: 5,
            title: "Theorie: Zahlenmengen",
            headline: "Theorie: Zahlenmengen",
            description: "Lerne die Gründe warum wir mehrere Zahlenmengen brauchen.",
            route: "/theory/zahlenarith"
        },

        {
            id: 6,
            title: "Praxis: Zahlenmengen",
            headline: "Praxis: Zahlenmengen",
            description: "Vertiefe dein Verständnis über Zahlenmengen.",
            route: "/praxis-zahlenarithmetik"
        },
        // more modules ...
    ];

    const itemRefs = useRef([]);
    itemRefs.current = moduleData.map(
        (_, i) => itemRefs.current[i] ?? createRef()
    );

    const handleCubeClick = (mod, event, itemRef) => {
        event.stopPropagation();
        if (itemRef?.current) {
            itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const handleAuswaehlen = (mod) => {
        if (!mod.route) {
            console.log("No route defined for module:", mod);
            return;
        }
        navigate(mod.route);
    };

    return (
        <div className="template-page">
            <div className="gleichungen-container">
                <div className="left-section">
                    <img
                        src="/assets/CardImages/HTL2/Grundlagen.svg"
                        alt="Grundlagen"
                        className="subject-icon"
                    />
                    <h6>LEVEL 1</h6>
                    <h1>Grundlagen</h1>
                    <p>Vertiefe dich bei den Grundlagen der Mathematik.</p>
                    <div className="exercise-units">
                        <div className="exercise-unit">
                            <img
                                src="/assets/images/Lektionen/Gleichungen/Uebung.png"
                                alt="Übung"
                            />
                            <h1>12 Übungen</h1>
                        </div>
                        <div className="exercise-unit">
                            <img
                                src="/assets/images/Lektionen/Gleichungen/Lectures.png"
                                alt="Einheit"
                            />
                            <h1>2 Einheiten</h1>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    {moduleData.map((mod, idx) => (
                        <TooltipItem
                            key={mod.id}
                            module={mod}
                            onSelect={handleAuswaehlen}
                            onCubeClick={handleCubeClick}
                            itemRef={itemRefs.current[idx]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Grundlagen;
