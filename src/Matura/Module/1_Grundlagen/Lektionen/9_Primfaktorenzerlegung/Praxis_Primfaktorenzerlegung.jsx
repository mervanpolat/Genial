// File: src/Matura/Module/1_Grundlagen/Lektionen/9_Primfaktorenzerlegung/Praxis_Primfaktorenzerlegung.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionTemplate/LecturePracticePage.jsx";

function Praxis_Primfaktorenzerlegung() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <span>
                    Welche Primfaktorzerlegung gehört zu <InlineMath>{String.raw`60`}</InlineMath>?
                </span>
            ),
            options: [
                <span><InlineMath>{String.raw`2^2 * 3 * 5`}</InlineMath></span>,
                <span><InlineMath>{String.raw`2^3 * 5`}</InlineMath></span>,
                <span><InlineMath>{String.raw`3 * 4 * 5`}</InlineMath></span>
            ],
            correctAnswerIndex: 0,
            explanation: "60 = 2·2·3·5 = 2^2 * 3 * 5."
        },
        {
            type: "fillblank",
            question: (
                <span>
                    Fülle die Lücke: Die kleinste Primzahl ist <InlineMath>{String.raw`?`}</InlineMath>.
                </span>
            ),
            correctAnswers: ["2"],
            explanation: "2 ist die kleinste Primzahl."
        },
        {
            type: "truefalse",
            statement: (
                <span>
                    Die Zahl <InlineMath>{String.raw`1`}</InlineMath> gilt als Primzahl.
                </span>
            ),
            isTrue: false,
            explanation: "1 ist per Definition keine Primzahl, da eine Primzahl zwei positive Teiler haben muss."
        },
        {
            type: "matchingpairs",
            question: (
                <span>
                    Ordne den Zahlen ihre passenden Primfaktorzerlegungen zu:
                </span>
            ),
            pairs: [
                { left: "12", right: "2^2 · 3" },
                { left: "14", right: "2 · 7" },
                { left: "36", right: "2^2 · 3^2" }
            ],
            explanation: "Beispielsweise: 12 = 2^2 * 3, 14 = 2 * 7, 36 = 2^2 * 3^2."
        },
        {
            type: "numericinput",
            question: (
                <span>
                    Berechne <InlineMath>{String.raw`2^4 \cdot 3`}</InlineMath>. Gib das Ergebnis ein.
                </span>
            ),
            correctNumber: "48",
            explanation: "2^4 = 16, und 16 * 3 = 48."
        }
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Primfaktorenzerlegung"
            introText="Trainiere dein Wissen rund um Primzahlen und deren Zerlegung!"
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_Primfaktorenzerlegung;
