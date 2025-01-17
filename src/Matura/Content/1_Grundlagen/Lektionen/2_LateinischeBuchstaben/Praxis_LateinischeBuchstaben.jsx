// File: src/Matura/Content/2_LateinischeBuchstaben/Praxis_LateinischeBuchstaben.jsx

import React from "react";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";


/**
 * Praxis_LateinischeBuchstaben
 * A set of quiz steps to solidify knowledge about common Latin letters usage in math.
 */
function Praxis_LateinischeBuchstaben() {
    // quizSteps array, each step is one quiz
    const quizSteps = [
        {
            type: "mcq",
            question:
                "Welche Buchstaben verwendet man typischerweise für beliebige reelle Zahlen?",
            options: [
                "x, y, z",
                "f, g, h",
                "a, b, c",
                "k, n, m",
            ],
            correctAnswerIndex: 2,
            explanation:
                "a, b und c stehen häufig für (beliebige) reelle Zahlen, z.B. Seitenlängen oder Parameter.",
        },
        {
            type: "truefalse",
            statement:
                "p, q und r werden üblicherweise für Polynome oder Logik-Aussagen genutzt.",
            isTrue: true,
            explanation:
                "Richtig. p(x), q(x), r(x) stehen für Polynome; p, q, r für Aussagen in der Logik.",
        },
        {
            type: "fillblank",
            templateText:
                "Der Buchstabe ? (ungefähr 2.718) ist die Basis des natürlichen Logarithmus.",
            correctAnswers: ["e", "E"],
            explanation:
                "Euler’s Zahl e bildet die Grundlage für e^x, ln(x) und viele Wachstumsprozesse.",
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "x, y", right: "Variablen in Funktionen" },
                { left: "u, v, w", right: "Vektoren in der linearen Algebra" },
                { left: "k, n, m", right: "Natürliche oder ganze Zahlen" },
            ],
            explanation:
                "Man erkennt, dass x, y häufig Variablen sind, u, v, w für Vektoren stehen und k, n, m für natürliche Zahlen reserviert sind.",
        },
        {
            type: "reorder",
            prompt: "Ordne die Buchstaben so, wie sie oft als Funktionennamen auftauchen:",
            initialWords: ["g", "h", "f"],
            correctOrder: ["f", "g", "h"],
            explanation: "Bei mehreren Funktionen im selben Problem folgen wir meist der Reihenfolge f, g, h.",
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Lateinische Buchstaben"
            introText="Teste hier dein Wissen zu den gängigen Verwendungen lateinischer Buchstaben in der Mathematik."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_LateinischeBuchstaben;
