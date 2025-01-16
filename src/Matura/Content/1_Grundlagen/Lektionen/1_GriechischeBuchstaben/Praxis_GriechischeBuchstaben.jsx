// File: src/Matura/Content/1_Grundlagen/Lektionen/1_GriechischeBuchstaben/Praxis_GriechischeBuchstaben.jsx
import React from "react";
import LecturePracticePage from "../../../LektionenTemplate/LecturePracticePage.jsx";



    // We'll have an array of "quizSteps"
    // For now, placeholder quizzes with dummy data:
    function Praxis_GriechischeBuchstaben() {
        // This array is your “quizSteps” for practice
        const quizSteps = [
            {
                type: "mcq",
                question: "Was ist Pi ungefähr?",
                options: ["2.71", "3.14", "1.41", "42"],
                correctAnswerIndex: 1,
                explanation: "Pi ist rund 3.14159",
            },
            {
                type: "truefalse",
                statement: "Alpha wird meist als Winkel bezeichnet",
                isTrue: true,
                explanation: "Richtig, α, β, γ sind gängige Winkelbezeichnungen ...",
            },
            {
                type: "fillblank",
                templateText: "Das Zeichen ? steht für die Summe.",
                correctAnswers: ["Sigma", "σ", "Σ"],
                explanation: "Σ (Sigma) wird für Summen verwendet.",
            },
            {
                type: "matchingpairs",
                pairs: [
                    { left: "π", right: "3.14159..." },
                    { left: "α", right: "Winkel" },
                    { left: "Σ", right: "Summe" },
                ],
                explanation: "Typische griechische Buchstaben Zuordnung.",
            },
            {
                type: "reorder",
                prompt: "Sortiere die Buchstaben: α, β, γ",
                initialWords: ["γ", "α", "β"],
                correctOrder: ["α", "β", "γ"],
                explanation: "Griechische Alphabet Reihenfolge α, β, γ...",
            },
    ];

        return (
            <LecturePracticePage
                headline="Praxis: Griechische Buchstaben"
                introText="Vertiefe dein Verständnis durch interaktive Fragen!"
                quizSteps={quizSteps}
            />
        );
}

    export default Praxis_GriechischeBuchstaben;
