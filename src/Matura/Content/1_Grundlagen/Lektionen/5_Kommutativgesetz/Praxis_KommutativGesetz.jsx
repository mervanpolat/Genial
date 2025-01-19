// File: src/Matura/Content/1_Grundlagen/Lektionen/KommutativGesetze/Praxis_KommutativGesetz.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";

function Praxis_KommutativGesetz() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welche Aussage ist <strong>falsch</strong> zur Kommutativität der Addition?
                </>
            ),
            options: [
                <>
                    <InlineMath>{String.raw`a+b = b+a`}</InlineMath> für alle{" "}
                    <InlineMath>{String.raw`a,b \in \mathbb{N}`}</InlineMath>.
                </>,
                "Sie besagt, dass Vertauschung der Summanden kein anderes Ergebnis liefert.",
                "Sie gilt nur, wenn a = b.",
                "Sie wird durch Zusammenlegen von Objektgruppen illustriert.",
            ],
            correctAnswerIndex: 2,
            explanation:
                "Kommutativität gilt nicht nur für a=b, sondern für alle natürlichen Zahlen a,b.",
        },
        {
            type: "truefalse",
            statement: (
                <>
                    Multiplikation ist ebenfalls kommutativ, also{" "}
                    <InlineMath>{String.raw`a \times b = b \times a`}</InlineMath>.
                </>
            ),
            isTrue: true,
            explanation:
                "Das Rechteck-Beispiel zeigt anschaulich, weshalb die Reihenfolge der Faktoren keine Rolle spielt.",
        },
        {
            type: "fillblank",
            templateText:
                "In einem Rechteck mit Breite 3 und Höhe 4 gilt: Fläche = ?",
            correctAnswers: ["12"],
            explanation:
                "Die Fläche (3×4) ergibt 12. Vertauschung (4×3) ändert nichts.",
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "3+5", right: "5+3" },
                { left: "2×7", right: "7×2" },
                { left: "m×n", right: "n×m" },
            ],
            explanation:
                "Jedes Paar illustriert die Kommutativität. Links und Rechts sind jeweils zwei Darstellungsweisen desselben Ergebnisses.",
        },
        {
            type: "numericinput",
            question: (
                <>
                    Bestimme das Ergebnis von <InlineMath>{String.raw`2 + 4`}</InlineMath>{" "}
                    und <InlineMath>{String.raw`4 + 2`}</InlineMath>. Wie lautet der gemeinsame Wert?
                </>
            ),
            correctNumber: 6,
            explanation:
                "2+4 = 6 und 4+2 = 6. Das bestätigt die Vertauschbarkeit der Summanden.",
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Kommutative Gesetze"
            introText="Vertiefe dein Verständnis von Additions- und Multiplikationskommutativität durch interaktive Aufgaben."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_KommutativGesetz;
