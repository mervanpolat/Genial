// File: src/Matura/Module/1_Grundlagen/Grundlagen.jsx
import React, { useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import "../ModulTemplate/PageWrapper.css";
import TooltipItem from "../ModulTippy/TooltipItem.jsx";

function Grundlagen() {
    const navigate = useNavigate();

    const moduleData = [
        // THEORY #1
        {
            id: 1,
            title: "Griechische Buchstaben",
            headline: "Griechische Buchstaben",
            description: "Lerne die Griechische Buchstaben in Mathematik.",
            route: "/theory/griechische"
        },
        // PRACTICE #1
        {
            id: 2,
            title: "Praxis: Griechische Buchstaben",
            headline: "Praxis: Griechische Buchstaben",
            description: "Vertiefe dein Verständnis über die griechischen Buchstaben.",
            route: "/practice/griechischebuchstaben" // <-- updated
        },

        // THEORY #2
        {
            id: 3,
            title: "Lateinische Buchstaben",
            headline: "Lateinische Buchstaben",
            description: "Lerne die Lateinische Buchstaben, die in der Mathematik vorkommen.",
            route: "/theory/lateinische"
        },
        // PRACTICE #2
        {
            id: 4,
            title: "Praxis: Lateinische Buchstaben",
            headline: "Praxis: Lateinische Buchstaben",
            description: "Vertiefe dein Verständnis über die lateinischen Buchstaben.",
            route: "/practice/lateinischebuchstaben" // <-- updated
        },

        // THEORY #3
        {
            id: 5,
            title: "Zahlenmengen",
            headline: "Zahlenmengen",
            description: "Lerne die Gründe, warum wir mehrere Zahlenmengen brauchen.",
            route: "/theory/zahlenarith"
        },
        // PRACTICE #3
        {
            id: 6,
            title: "Praxis: Zahlenmengen",
            headline: "Praxis: Zahlenmengen",
            description: "Vertiefe dein Verständnis über Zahlenmengen.",
            route: "/practice/zahlenarithmetik" // <-- updated
        },

        // THEORY #4
        {
            id: 7,
            title: "Grundlagen der Zahlen und Arithmetik",
            headline: "Grundlagen der Zahlen und Arithmetik",
            description: "Erfahre mehr über Zahlenmengen und grundlegende Rechenregeln.",
            route: "/theory/natZahlenArith"
        },
        // PRACTICE #4
        {
            id: 8,
            title: "Praxis: Grundlagen der Zahlen und Arithmetik",
            headline: "Praxis: Grundlagen der Zahlen und Arithmetik",
            description: "Vertiefe dein Verständnis über Zahlen und Arithmetik.",
            route: "/practice/natZahlenArithmetik" // <-- updated
        },

        // THEORY #5
        {
            id: 9,
            title: "Kommutativgesetz",
            headline: "Kommutativgesetz",
            description: "Erfahre, warum die Reihenfolge der Summanden oder Faktoren kein anderes Ergebnis liefert.",
            route: "/theory/kommutativg"
        },
        // PRACTICE #5
        {
            id: 10,
            title: "Praxis: Kommutativgesetz",
            headline: "Praxis: Kommutativität",
            description: "Vertiefe dein Verständnis zu Kommutativgesetz.",
            route: "/practice/kommutativ" // <-- updated
        },

        // THEORY #6
        {
            id: 11,
            title: "Assoziativgesetz",
            headline: "Assoziativgesetz",
            description: "Warum spielt die Klammerung bei Addition/Multiplikation keine Rolle? Erfahre es hier.",
            route: "/theory/assoziativitaet"
        },
        // PRACTICE #6
        {
            id: 12,
            title: "Praxis: Assoziativgesetz",
            headline: "Praxis: Assoziativität",
            description: "Vertiefe dein Verständnis zum Assoziativgesetz.",
            route: "/practice/assoziativitaet" // <-- updated
        },

        // THEORY #7
        {
            id: 13,
            title: "Distributivgesetz",
            headline: "Distributivgesetz",
            description: "Wie verknüpft man Addition und Multiplikation? Das Distributivgesetz!",
            route: "/theory/distributiv"
        },
        // PRACTICE #7
        {
            id: 14,
            title: "Praxis: Distributivgesetz",
            headline: "Praxis: Distributivgesetz",
            description: "Vertiefe dein Verständnis zum Distributivgesetz.",
            route: "/practice/distributivgesetz" // <-- updated
        },

        // THEORY #8
        {
            id: 15,
            title: "Primzahlen und Teilbarkeitsregeln",
            headline: "Primzahlen und Teilbarkeitsregeln",
            description: "Lerne die Grundlagen zu Primzahlen und Teilbarkeitsregeln.",
            route: "/theory/primzahlundteil"
        },
        // PRACTICE #8
        {
            id: 16,
            title: "Praxis: Primzahlen und Teilbarkeitsregeln",
            headline: "Praxis: Primzahlen und Teilbarkeitsregeln",
            description: "Vertiefe dein Verständnis zu Teilbarkeitsregeln.",
            route: "/practice/primzahlundteil" // <-- updated
        },

        // THEORY #9
        {
            id: 17,
            title: "Primfaktorenzerlegung",
            headline: "Primfaktorenzerlegung",
            description: "Lerne die Grundlagen zur Primfaktorenzerlegung.",
            route: "/theory/primfaktorenzerlegung"
        },
        // PRACTICE #9
        {
            id: 18,
            title: "Praxis: Primfaktorenzerlegung",
            headline: "Praxis: Primfaktorenzerlegung",
            description: "Vertiefe dein Verständnis zur Primfaktorenzerlegung.",
            route: "/practice/primfaktorenzerlegung" // <-- updated
        },
        {
            id: 19,
            title: "Sieb des Eratosthenes",
            headline: "Sieb des Eratosthenes",
            description: "Lerne, wie du mithilfe des Siebs von Eratosthenes Primzahlen findest.",
            route: "/theory/primzahlenfinden"
        },
        {
            id: 20,
            title: "Praxis: Sieb des Eratosthenes",
            headline: "Praxis: Sieb des Eratosthenes",
            description: "Vertiefe dein Verständnis zu Primzahlen.",
            route: "/practice/primzahlenfinden"
        },
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
        // Navigate to the route (theory or practice)
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
