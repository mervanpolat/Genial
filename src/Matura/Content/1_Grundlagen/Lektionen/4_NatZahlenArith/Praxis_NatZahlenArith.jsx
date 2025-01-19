// File: src/Matura/Content/1_Grundlagen/Lektionen/4_NatZahlenArith/Praxis_NatZahlenArith.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";

function Praxis_NatZahlenArith() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welche Aussage über <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>{" "}
                    ist korrekt?
                </>
            ),
            options: [
                "Die natürlichen Zahlen enthalten negative Zahlen.",
                "Die natürlichen Zahlen sind kontinuierlich angeordnet.",
                "Die natürlichen Zahlen sind diskret und geordnet.",
                "Sie heißen nur deshalb natürlich, weil 0 nicht dazugehört.",
            ],
            correctAnswerIndex: 2,
            explanation: (
                <>
                    <InlineMath>{String.raw`\mathbb{N}`}</InlineMath> ist diskret, da zwischen
                    benachbarten Zahlen keine weitere natürliche Zahl liegt, und geordnet, da man
                    sie in aufsteigender Reihenfolge anordnen kann.
                </>
            ),
        },
        {
            type: "truefalse",
            statement: (
                <>
                    <InlineMath>{String.raw`0`}</InlineMath> ist das neutrale Element
                    der Addition in <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>.
                </>
            ),
            isTrue: true,
            explanation: (
                <>
                    <InlineMath>{String.raw`n + 0 = n`}</InlineMath> für alle{" "}
                    <InlineMath>{String.raw`n \in \mathbb{N}`}</InlineMath>, somit ist{" "}
                    <InlineMath>{String.raw`0`}</InlineMath> neutral für die Addition.
                </>
            ),
        },
        {
            type: "fillblank",
            templateText:
                "Welche Zahl erhält man bei 4 × 2 + 5 = ?",
            correctAnswers: ["13"],
            explanation: (
                <>
                    Durch die Vorrangregel erst Multiplikation:{" "}
                    <InlineMath>{String.raw`4 \times 2 = 8`}</InlineMath>, dann
                    <InlineMath>{String.raw` 8 + 5 = 13`}</InlineMath>.
                </>
            ),
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "Term + Term", right: "Summe" },
                { left: "Faktor × Faktor", right: "Produkt" },
                { left: "Potenz", right: "Wiederholte Multiplikation" },
            ],
            explanation: "Beim Addieren heißen die Summanden „Term“, beim Multiplizieren „Faktor“.",
        },
        {
            type: "numericinput",
            question: (
                <>
                    Wie viele einzelne <InlineMath>{String.raw`3`}</InlineMath>-Summanden
                    stecken in <InlineMath>{String.raw`3 \times 5`}</InlineMath>?
                </>
            ),
            correctNumber: 5,
            explanation: (
                <>
                    <InlineMath>{String.raw`3 \times 5`}</InlineMath> entspricht
                    <InlineMath>{String.raw`3 + 3 + 3 + 3 + 3`}</InlineMath>, also fünf Summanden.
                </>
            ),
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Natürliche Zahlen und Grundrechenarten"
            introText="Teste dein Verständnis zu Ordnung, neutralen Elementen und dem Vorrang von Multiplikation."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_NatZahlenArith;
