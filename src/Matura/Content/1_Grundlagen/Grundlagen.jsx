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
            title: "Lateinische Buchstaben",
            headline: "Lateinische Buchstaben",
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
            title: "Zahlenmengen",
            headline: "Zahlenmengen",
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
        {
            id: 7,
            title: "Grundlagen der Zahlen und Arithmetik",
            headline: "Grundlagen der Zahlen und Arithmetik",
            description: "Erfahre mehr über Zahlenmengen, ihre Eigenschaften und grundlegende Rechenregeln.",
            route: "/theory/natZahlenArith"
        },
        {
            id: 8,
            title: "Praxis: Grundlagen der Zahlen und Arithmetik",
            headline: "Praxis: Grundlagen der Zahlen und Arithmetik",
            description: "Vertiefe dein Verständnis über Zahlen und Arithmetik.",
            route: "/praxis-natZahlenArithmetik"
        },

        {
            id: 9,
            title: "Kommutativgesetz",
            headline: "Kommutativgesetz",
            description: "Erfahre, warum die Reihenfolge der Summanden oder Faktoren das Ergebnis nicht verändert.",
            route: "/theory/kommutativg"

        },
        {
            id: 10,
            title: "Praxis: Kommutativgesetz",
            headline: "Praxis: Kommutativität von Addition und Multiplikation",
            description: "Vertiefe dein Verständnis zu Kommutativgesetz.",
            route: "/praxis-kommutativ"
        },
        {
            id: 11,
            title: "Assoziativgesetz",
            headline: "Assoziativgesetz",
            description: "Lerne, warum die Klammerung bei Addition/Multiplikation natürlicher Zahlen auf das Ergebnis nicht auswirkt.",
            route: "/theory/assoziativitaet"
        },

        {
            id: 12,
            title: "Praxis: Assoziativgesetz",
            headline: "Praxis: Assoziativität in der Arithmetik",
            description: "Vertiefe dein Verständnis zu Assoziativgesetz",
            route: "/praxis-assoziativitaet"
        },

        {
            id: 13,
            title: "Distributivgesetz",
            headline: "Distributivgesetz",
            description: "Wie verknüpft man Addition und Multiplikation sinnvoll? Das Distributivgesetz liefert die Antwort!",
            route: "/theory/distributiv"
        },

        {
            id: 14,
            title: "Praxis: Distributivgesetz",
            headline: "Praxis: Das Distributive Gesetz in der Arithmetik",
            description: "Vertiefe dein Verständnis zu Distributivgesetz!",
            route: "/praxis-distributivgesetz"
        },
        {
            id: 15,
            title: "Primzahlen und Teilbarkeitsregeln",
            headline: "Primzahlen und Teilbarkeitsregeln",
            description: "Lerne die Grundlagen zu Primzahlen und Teilbarkeitsregeln.",
            route: "/theory/primzahlundteil"
        },

        {
            id: 16,
            title: "Praxis: Primzahlen und Teilbarkeitsregeln",
            headline: "Praxis: Primzahlen und Teilbarkeitsregeln",
            description: "Vertiefe dein Verständnis zu Primzahlen und wichtigen Teilbarkeitsregeln.",
            route: "/praxis-primzahlundteil"
        },

        {
            id: 17,
            title: "Primfaktorenzerlegung",
            headline: "Primfaktorenzerlegung",
            description: "Lerne die Grundlagen zu Primfaktorenzerlegung.",
            route: "/theory/primfaktorenzerlegung"
        },

        {
            id: 18,
            title: "Praxis: Primfaktorenzerlegung",
            headline: "Praxis: Primfaktorenzerlegung",
            description: "Vertiefe dein Verständnis zu Primfaktorenzerlegung.",
            route: "/praxis-primfaktorenzerlegung"
        }


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
