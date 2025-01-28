// File: src/Matura/Module/1_Grundlagen/Lektionen/Assoziativitaet/Praxis_Assoziativitaet.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionTemplate/LecturePracticePage.jsx";

function Praxis_Assoziativitaet() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welche Aussage zur <InlineMath>{String.raw`\text{Assoziativität}`}</InlineMath>{" "}
                    der Addition ist falsch?
                </>
            ),
            options: [
                "Die Summe dreier Zahlen ist unabhängig von der Klammerung.",
                "Man darf nur zwei Zahlen addieren, nicht drei.",
                "Klammerung spielt keine Rolle für das Endergebnis.",
                "Auch für beliebig viele Summanden gilt diese Eigenschaft.",
            ],
            correctAnswerIndex: 1,
            explanation:
                "Man kann natürlich mehr als zwei Zahlen addieren; Assoziativität ermöglicht die Klammerung frei zu wählen.",
        },
        {
            type: "truefalse",
            statement: (
                <>
                    Die Multiplikation <InlineMath>{String.raw`(a\times b)\times c`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`a\times (b\times c)`}</InlineMath> liefern stets das
                    gleiche Ergebnis.
                </>
            ),
            isTrue: true,
            explanation:
                "Assoziativität der Multiplikation bedeutet, dass man die Faktoren unabhängig von der Klammerung multiplizieren kann.",
        },
        {
            type: "fillblank",
            templateText: "Berechne (2 + 3) + 4 = ? und 2 + (3 + 4) = ?",
            correctAnswers: ["9", "9"],
            explanation:
                "2 + 3 = 5, 5 + 4 = 9; sowie 3 + 4 = 7, 2 + 7 = 9. Gleiches Resultat.",
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "(a + b) + c", right: "a + (b + c)" },
                { left: "(x × y) × z", right: "x × (y × z)" },
            ],
            explanation:
                "Jeweils zwei Darstellungen derselben Summe/Produkt durch unterschiedliche Klammerungen.",
        },
        {
            type: "numericinput",
            question: (
                <>
                    Wie groß ist <InlineMath>{String.raw`(2 \times 5) \times 3`}</InlineMath> im Vergleich zu{" "}
                    <InlineMath>{String.raw`2 \times (5 \times 3)`}</InlineMath>? Was ist das Ergebnis?
                </>
            ),
            correctNumber: 30,
            explanation:
                "2×5=10, 10×3=30 und 5×3=15, 2×15=30. Beide Klammerungen identisch.",
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Assoziativität"
            introText="Teste hier die unterschiedlichen Klammerungen bei Addition und Multiplikation."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_Assoziativitaet;
