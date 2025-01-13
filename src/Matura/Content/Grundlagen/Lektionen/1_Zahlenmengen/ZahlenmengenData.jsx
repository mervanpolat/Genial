// src/Matura/Content/Grundlagen/Lektionen/1_Zahlenmengen/ZahlenmengenData.jsx

import React from "react";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

const ZahlenmengenData = {
    bannerImageSrc: "/images/lectureBanner_Zahlenmengen.jpg",
    headline: "Theorie - Zahlenmengen",
    introText:
        "In dieser Theorie-Einheit erfährst du, welche Zahlenmengen es gibt und wie sie zueinander in Beziehung stehen.",

    sections: [
        {
            heading: "Einleitung",
            paragraphs: [
                // We can store multiple paragraphs in an array
                "Zahlen begegnen uns ständig – sei es beim Einkaufen, in Statistiken oder direkt in der Mathematik. In dieser Lektion lernst du die wichtigsten Zahlenmengen kennen.",
                // For the second paragraph, we include TippyText inlined
                <>
                    Insbesondere beschäftigen wir uns mit
                    <TippyText content="Die natürlichen Zahlen (1, 2, 3, …)">ℕ</TippyText>,
                    <TippyText content="Die ganzen Zahlen (… -2, -1, 0, 1, 2, …)">ℤ</TippyText>,
                    <TippyText content="Die rationalen Zahlen (Brüche und ganze Zahlen)">ℚ</TippyText>
                    und
                    <TippyText content="Die reellen Zahlen (rationale + irrationale Zahlen)">ℝ</TippyText>.
                </>,
            ],
        },
        {
            heading: "Definitionen",
            paragraphs: [
                <>
                    <strong>Natürliche Zahlen:</strong> (ℕ) Die Zahlen, die beim Zählen
                    verwendet werden: typischerweise {"{1, 2, 3, …}"}. Manche Definitionen
                    schließen die 0 ein.
                </>,
                <>
                    <strong>Ganze Zahlen (ℤ):</strong> Alle positiven und negativen
                    Zahlen einschließlich 0 (… -2, -1, 0, 1, 2, …).
                </>,
                <>
                    <strong>Rationale Zahlen:</strong> (ℚ) Alle Zahlen, die man als
                    Bruch zweier ganzer Zahlen schreiben kann (z.B. 1/2, 3, -7/4).
                    Die ganzen Zahlen (ℤ) sind eine Teilmenge von ℚ.
                </>,
                <>
                    <strong>Reelle Zahlen (ℝ):</strong> Die Menge aller rationalen und
                    aller irrationalen Zahlen (z.B. √2, π). ℚ ist Teilmenge von ℝ.
                </>,
            ],
        },
        {// We define a 'quiz' key that we’ll render in Theorie_Zahlenmengen.jsx
            quiz: {
                question: "Zu welcher Zahlenmenge gehört die Zahl 0?",
                options: ["ℕ", "ℤ", "ℚ", "ℝ"],
                correctAnswerIndex: 1,
                explanation:
                    "0 gehört den ganzen Zahlen (ℤ) an. Ob 0 zu ℕ zählt, hängt von der Definition ab.",
            },
        },
    ],
};

export default ZahlenmengenData;
