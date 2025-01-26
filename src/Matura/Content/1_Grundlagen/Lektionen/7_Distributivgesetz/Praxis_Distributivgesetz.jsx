// File: Praxis_Primfaktorenzerlegung.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";

function Praxis_Distributivgesetz() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welches Gesetz verbindet{" "}
                    <InlineMath>{String.raw`\text{Addition}`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`\text{Multiplikation}`}</InlineMath>?
                </>
            ),
            options: [
                "Kommutativgesetz",
                "Assoziativgesetz",
                "Distributivgesetz",
                "Potenzgesetz",
            ],
            correctAnswerIndex: 2,
            explanation: (
                <>
                    Das Distributivgesetz: <InlineMath>{String.raw`k\times(m+n) = k\times m + k\times n`}</InlineMath>.
                </>
            ),
        },
        {
            type: "truefalse",
            statement: (
                <>
                    <InlineMath>{String.raw`(k+l)\times m`}</InlineMath> ={" "}
                    <InlineMath>{String.raw`k\times m + l\times m`}</InlineMath> folgt direkt aus
                    dem Distributivgesetz.
                </>
            ),
            isTrue: true,
            explanation:
                "Durch Verteilen von k+l auf m entsteht k×m + l×m.",
        },
        {
            type: "fillblank",
            templateText: "Berechne 3×(2+4) = ?",
            correctAnswers: ["18"],
            explanation: (
                <>
                    <InlineMath>{String.raw`2+4=6`}</InlineMath>, also 3×6=18 oder 3×2 + 3×4=6+12=18.
                </>
            ),
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "k×(m+n)", right: "k×m + k×n" },
                { left: "(k+l)×(m+n)", right: "k×m + k×n + l×m + l×n" },
            ],
            explanation:
                "Ausmultiplizieren zweier Summen mit dem Distributivgesetz.",
        },
        {
            type: "numericinput",
            question: (
                <>
                    Wie groß ist <InlineMath>{String.raw`(2+5)\times(1+3)`}</InlineMath>?
                </>
            ),
            correctNumber: 28,
            explanation: (
                <>
                    (2+5)=7, (1+3)=4, 7×4=28. Oder einzeln: 2×1 + 2×3 + 5×1 + 5×3 = 2+6+5+15=28.
                </>
            ),
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Distributivgesetz"
            introText="Teste dein Wissen über das Verteilen von Faktoren auf Summanden."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_Distributivgesetz;
