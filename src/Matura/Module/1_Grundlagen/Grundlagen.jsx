// File: src/Matura/Module/Grundlagen.jsx

import React from "react";
import ModulTemplate from "../ModulTemplate/ModulTemplate.jsx";


function Grundlagen() {
    // -----------------------------------------------
    // Example data for the puzzle
    // -----------------------------------------------
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
            route: "/practice/griechischebuchstaben"
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
            route: "/practice/lateinischebuchstaben"
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
            route: "/practice/zahlenarithmetik"
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
            route: "/practice/natZahlenArithmetik"
        },
        // THEORY #5
        {
            id: 9,
            title: "Kommutativgesetz",
            headline: "Kommutativgesetz",
            description:
                "Erfahre, warum die Reihenfolge der Summanden oder Faktoren kein anderes Ergebnis liefert.",
            route: "/theory/kommutativg"
        },
        // PRACTICE #5
        {
            id: 10,
            title: "Praxis: Kommutativgesetz",
            headline: "Praxis: Kommutativität",
            description: "Vertiefe dein Verständnis zu Kommutativgesetz.",
            route: "/practice/kommutativ"
        },
        // THEORY #6
        {
            id: 11,
            title: "Assoziativgesetz",
            headline: "Assoziativgesetz",
            description:
                "Warum spielt die Klammerung bei Addition/Multiplikation keine Rolle? Erfahre es hier.",
            route: "/theory/assoziativitaet"
        },
        // PRACTICE #6
        {
            id: 12,
            title: "Praxis: Assoziativgesetz",
            headline: "Praxis: Assoziativität",
            description: "Vertiefe dein Verständnis zum Assoziativgesetz.",
            route: "/practice/assoziativitaet"
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
            route: "/practice/distributivgesetz"
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
            route: "/practice/primzahlundteil"
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
            route: "/practice/primfaktorenzerlegung"
        },
        // THEORY #10
        {
            id: 19,
            title: "Sieb des Eratosthenes",
            headline: "Sieb des Eratosthenes",
            description: "Lerne, wie du mithilfe des Siebs von Eratosthenes Primzahlen findest.",
            route: "/theory/primzahlenfinden"
        },
        // PRACTICE #10
        {
            id: 20,
            title: "Praxis: Sieb des Eratosthenes",
            headline: "Praxis: Sieb des Eratosthenes",
            description: "Vertiefe dein Verständnis zu Primzahlen.",
            route: "/practice/primzahlenfinden"
        },
        // THEORY #11
        {
            id: 21,
            title: "Zahlentheorie",
            headline: "Zahlentheorie",
            description: "Lerne die Grundlagen zu Zahlentheorie.",
            route: "/theory/zahlentheorie"
        },
        // PRACTICE #11
        {
            id: 22,
            title: "Praxis: Zahlentheorie",
            headline: "Praxis: Zahlentheorie",
            description: "Vertiefe dein Verständnis zu Zahlentheorie.",
            route: "/practice/zahlentheorie"
        }
    ];

    return (
        <ModulTemplate
            level="LEVEL 1"
            title="Grundlagen"
            headline="Grundlagen"
            description="Vertiefe dich bei den Grundlagen der Mathematik."
            imageSrc="/assets/CardImages/HTL2/Grundlagen.svg"
            exercises={12}
            units={2}
            moduleData={moduleData}
        />
    );

}

export default Grundlagen;
