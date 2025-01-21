// File: Praxis_MeinNeuesThema.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";

function Praxis_PrimzahlUndTeilbarkeit() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welche Zahl ist <InlineMath>{String.raw`\text{keine Primzahl}`}</InlineMath>?
                </>
            ),
            options: [
                "2",
                "7",
                "11",
                "9",
            ],
            correctAnswerIndex: 3,
            explanation:
                "9 hat neben 1 und 9 auch den Divisor 3 und ist somit keine Primzahl.",
        },
        {
            type: "fillblank",
            templateText: "Wie lautet die Primfaktorzerlegung von 18? ?",
            correctAnswers: ["2 * 3^2", "2*3^2", "2 × 3^2"],
            explanation:
                "18 = 2×3². 3²=9, 2×9=18.",
        },
        {
            type: "truefalse",
            statement: (
                <>
                    Die Zahl <InlineMath>{String.raw`30`}</InlineMath> ist durch{" "}
                    <InlineMath>{String.raw`5`}</InlineMath> teilbar.
                </>
            ),
            isTrue: true,
            explanation:
                "Letzte Ziffer = 0 => Teilbarkeit durch 5.",
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "2 teilt 8", right: "2 | 8" },
                { left: "Quersumme 9 ⇒ durch 3 teilbar", right: "54" },
                { left: "3^2 × 2^1", right: "18" },
            ],
            explanation:
                "Zuordnung: 2|8 => 8=4×2, 54 hat Quersumme 9 => 3-teilig, 18=3²×2.",
        },
        {
            type: "numericinput",
            question: (
                <>
                    Wie lautet <InlineMath>{String.raw`2+5`}</InlineMath> in Zahlen?
                </>
            ),
            correctNumber: 7,
            explanation:
                "2 + 5 = 7, eine Primzahl mit nur zwei Divisoren.",
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Teilbarkeit und Primfaktorzerlegung"
            introText="Teste hier dein Wissen zu Divisoren, Primfaktoren und einfachen Teilbarkeitsregeln."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_PrimzahlUndTeilbarkeit;
