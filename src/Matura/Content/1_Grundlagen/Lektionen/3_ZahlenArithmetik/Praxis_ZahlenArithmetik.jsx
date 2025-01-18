// File: src/Matura/Content/1_Grundlagen/Lektionen/3_ZahlenArithmetik/Praxis_ZahlenArithmetik.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";

function Praxis_ZahlenArithmetik() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welche Aussage über ganze Zahlen{" "}
                    <InlineMath>{String.raw`\mathbb{Z}`}</InlineMath> ist korrekt?
                </>
            ),
            options: [
                "Sie enthalten nur positive Zahlen.",
                "Sie enthalten keine Null.",
                "Sie enthalten alle positiven und negativen Ganzzahlen.",
                "Sie sind identisch mit den rationalen Zahlen.",
            ],
            correctAnswerIndex: 2,
            explanation: (
                <>
                    In <InlineMath>{String.raw`\mathbb{Z}`}</InlineMath> sind alle ganzen Zahlen
                    enthalten, also negative, positive und 0.
                </>
            ),
        },
        {
            type: "fillblank",
            templateText:
                "Die Zahl ? (3.14159...) nennt man eine wichtige irrationale Zahl.",
            correctAnswers: ["pi", "π", "Pi", "PI", "Π"],
            explanation: (
                <>
                    <InlineMath>{String.raw`\pi`}</InlineMath> (Pi) ist irrational und kann nicht als
                    endlicher Bruch aus ganzen Zahlen dargestellt werden.
                </>
            ),
        },
        {
            type: "truefalse",
            statement: (
                <>
                    Jede reelle Zahl ist auch eine{" "}
                    <InlineMath>{String.raw`\text{rationale Zahl}`}</InlineMath>?
                </>
            ),
            isTrue: false,
            explanation: (
                <>
                    Es gibt irrationale Zahlen wie{" "}
                    <InlineMath>{String.raw`\sqrt{2}`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`\pi`}</InlineMath> – sie gehören zu{" "}
                    <InlineMath>{String.raw`\mathbb{R}`}</InlineMath>, sind aber nicht rational.
                </>
            ),
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "Natürliche Zahlen", right: "Zum Zählen (0,1,2,…)" },
                { left: "Rationale Zahlen", right: "Brüche p/q" },
                { left: "Komplexe Zahlen", right: "Form a + bi (i²=-1)" },
            ],
            explanation: (
                <>
                    Natürliche Zahlen (<InlineMath>{String.raw`\mathbb{N}`}</InlineMath>) → Zählen,
                    Rationale (<InlineMath>{String.raw`\mathbb{Q}`}</InlineMath>) → Bruchdarstellung,
                    Komplexe (<InlineMath>{String.raw`\mathbb{C}`}</InlineMath>) → Realteil +
                    Imaginärteil.
                </>
            ),
        },
        {
            type: "numericinput",
            question: (
                <>
                    Welche Zahl löst <InlineMath>{String.raw`x + 4 = 7`}</InlineMath>?
                </>
            ),
            correctNumber: 3,
            explanation: (
                <>
                    <InlineMath>{String.raw`x = 7 - 4 = 3`}</InlineMath>.
                    Die Zahl – 4 löst die Gleichung.
                </>
            ),
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Zahlen und Arithmetik"
            introText="Vertiefe dein Wissen mit interaktiven Aufgaben. Überprüfe, ob du Zahlenmengen und ihre Eigenschaften sicher beherrschst!"
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_ZahlenArithmetik;
