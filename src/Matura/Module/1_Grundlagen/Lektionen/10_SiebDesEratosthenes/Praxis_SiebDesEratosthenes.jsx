 // File: src/Matura/Module/1_Grundlagen/Lektionen/Praxis_SiebDesEratosthenes.jsx

import React from "react";
// Note the updated relative import path here:
import LecturePracticePage from "../../../LektionTemplate/LecturePracticePage.jsx";

function Praxis_SiebDesEratosthenes() {
    const quizSteps = [
        {
            type: "mcq",
            question: (
                <>
                    Welche Zahl ist die erste Primzahl, die im Sieb des Eratosthenes beim Start
                    erkannt wird?
                </>
            ),
            options: [
                <>1</>,
                <>2</>,
                <>3</>,
                <>5</>,
            ],
            correctAnswerIndex: 1,
            explanation:
                "1 ist keine Primzahl, daher ist 2 immer die erste gefundene Primzahl.",
        },
        {
            type: "fillblank",
            templateText:
                "Bis zur Wurzel aus ? muss man aktiv Vielfache streichen.",
            correctAnswers: ["n", "N"],
            explanation:
                "Für ein oberes Limit n prüft man alle Primzahlen bis sqrt(n).",
        },
        {
            type: "numericinput",
            question: (
                <>
                    Wie viele Primzahlen gibt es bis 10?
                </>
            ),
            correctNumber: 4,
            explanation:
                "2, 3, 5 und 7 sind Primzahlen unter 10.",
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "2", right: "Erste Primzahl" },
                { left: "3", right: "Nächste Primzahl" },
                { left: "Vielfache", right: "Mehrere gemeinsame Faktoren" },
            ],
            explanation: "Kleine Zuordnung zu den ersten Faktoren im Sieb.",
        },
        {
            type: "truefalse",
            statement: (
                <>
                    Im Siebverfahren bleiben nach dem Entfernen der Vielfachen von 2, 3, 5, 7 ...
                    nur Primzahlen übrig.
                </>
            ),
            isTrue: true,
            explanation:
                "Das ist genau der Clou: Nach und nach werden alle zusammengesetzten Zahlen entfernt.",
        },
    ];

    return (
        <LecturePracticePage
            headline="Praxis: Sieb des Eratosthenes"
            introText="Teste dein Wissen zum Siebverfahren! Beantworte die folgenden Fragen."
            quizSteps={quizSteps}
        />
    );
}

export default Praxis_SiebDesEratosthenes;
