// File: src/Matura/Module/1_Grundlagen/Lektionen/3_Zahlenmengen/ZahlenmengenData.jsx

import React from "react";
import { Box, Image as ChakraImage } from "@chakra-ui/react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

// Beispielbanner (SVG oder PNG) – Pfad ggf. anpassen:
import Zahlenmengen from "./images/Zahlenmengen.svg";

const ZahlenmengenData = {
    bannerImageSrc: Zahlenmengen,

    headline: "Zahlen und Arithmetik – Ein Überblick",
    sections: [

        {
            paragraphs: [
                <>
                    In diesem Abschnitt frischen wir grundlegende Kenntnisse zu Zahlenmengen und den zugehörigen Rechenoperationen auf. Warum braucht man neben natürlichen Zahlen noch ganze, rationale, reelle und sogar komplexe Zahlen? Hier erfährst du es!
                </>
            ],
        },

        {
            heading: "1. Einführung",
            paragraphs: [
                <>
                    In der Schulmathematik lernen wir <strong>verschiedene Zahlenmengen</strong>{" "}
                    kennen: von den natürlichen Zahlen{" "}
                    <InlineMath>{String.raw`(\mathbb{N})`}</InlineMath> über ganze Zahlen{" "}
                    <InlineMath>{String.raw`(\mathbb{Z})`}</InlineMath> bis hin zu den reellen{" "}
                    <InlineMath>{String.raw`(\mathbb{R})`}</InlineMath> und komplexen Zahlen{" "}
                    <InlineMath>{String.raw`(\mathbb{C})`}</InlineMath>. Jede Erweiterung wird nötig,
                    um neue Problemstellungen zu lösen: z. B. negative Lösungen, Brüche, Wurzeln oder
                    sogar imaginäre Zahlen.
                </>
            ],


        },

        {
            paragraphs: [
                <>
                    Vielleicht hast du schon von <strong>“irrationalen”</strong> Zahlen gehört, wie{" "}
                    <InlineMath>{String.raw`\sqrt{2}`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`\pi`}</InlineMath>. Sie lassen sich nicht als Bruch
                    ganzer Zahlen ausdrücken. In diesem Kapitel geht es darum zu verstehen,{" "}
                    <em>warum</em> wir all diese Mengen benötigen und wie sie zusammenhängen.
                </>,
            ],
        },
        {   quizData: {
                type: "matchingpairs",
                pairs: [
                    { left: "Natürliche Zahlen", right: "Zählen von Objekten (0,1,2,…)" },
                    { left: "Ganze Zahlen", right: "Erweitern um negative Werte" },
                    { left: "Reelle Zahlen", right: "Beinhalten auch irrationale Zahlen" },
                ],
                explanation:
                    "Natürliche Zahlen (ℕ) -> Zählen, ganze Zahlen (ℤ) -> schließt Negatives ein, reelle Zahlen (ℝ) -> auch irrationale Werte wie √2.",
            }
        },

        {
            heading: "2. Natürliche und ganze Zahlen",
            paragraphs: [
                <>
                    <strong>Natürliche Zahlen</strong>{" "}
                    (<InlineMath>{String.raw`\mathbb{N}`}</InlineMath>) sind die Grundlage zum
                    Zählen: <InlineMath>{String.raw`\{0, 1, 2, 3,\dots\}`}</InlineMath>. Um eine
                    Gleichung wie <InlineMath>{String.raw`x + 2 = 1`}</InlineMath> zu lösen, benötigen
                    wir jedoch eine negative Lösung{" "}
                    <InlineMath>{String.raw`x = -1`}</InlineMath>, was in{" "}
                    <InlineMath>{String.raw`\mathbb{N}`}</InlineMath> nicht existiert.
                </>,
                <>
                    Daher führt man die <strong>ganzen Zahlen</strong>{" "}
                    (<InlineMath>{String.raw`\mathbb{Z}`}</InlineMath>) ein, die sowohl positive als
                    auch negative Werte (und 0) enthalten.
                </>,
            ],
            quizData: {
                type: "mcq",
                // Hier wandeln wir “Frage” in ein JSX-Element um, damit du InlineMath nutzen kannst
                question: (
                    <>
                        Welche Zahlen gehören <strong>NICHT</strong> zu den natürlichen Zahlen{" "}
                        <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>?
                    </>
                ),
                options: [
                    "0, 1, 2, 3, …",
                    "2, 4, 8, 16, …",
                    "-1, -2, -3, …",
                    "1, 3, 5, 7, …",
                ],
                correctAnswerIndex: 2,
                explanation:
                    "Natürliche Zahlen umfassen keine negativen Werte, daher gehören -1, -2, -3 usw. nicht zu ℕ.",
            },
        },
        {
            heading: "3. Rationale und irrationale Zahlen",
            paragraphs: [
                <>
                    Um Divisionen wie <InlineMath>{String.raw`\frac{p}{q}`}</InlineMath> zu ermöglichen,
                    erweitert man <InlineMath>{String.raw`\mathbb{Z}`}</InlineMath> zu den{" "}
                    <strong>rationalen Zahlen</strong>{" "}
                    (<InlineMath>{String.raw`\mathbb{Q}`}</InlineMath>). Jede rationale Zahl ist ein
                    Bruch <InlineMath>{String.raw`\tfrac{p}{q}`}</InlineMath> mit{" "}
                    <InlineMath>{String.raw`p, q \in \mathbb{Z}, \, q \neq 0`}</InlineMath>.
                </>,
                <>
                    Zahlen wie <InlineMath>{String.raw`\sqrt{2}`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`\pi`}</InlineMath> lassen sich allerdings nicht als
                    endliche oder periodische Brüche schreiben, sie sind <strong>irrational</strong>.
                    Zusammen mit allen rationalen Zahlen bilden sie die{" "}
                    <strong>reellen Zahlen</strong>{" "}
                    (<InlineMath>{String.raw`\mathbb{R}`}</InlineMath>).
                </>,
            ],
            quizData: {
                type: "truefalse",
                // Wieder als JSX
                statement: (
                    <>
                        Die Zahl <InlineMath>{String.raw`\sqrt{2}`}</InlineMath> ist rational.
                    </>
                ),
                isTrue: false,
                explanation: (
                    <>
                        Ein klassischer Beweis zeigt, dass{" "}
                        <InlineMath>{String.raw`\sqrt{2}`}</InlineMath> sich nicht als{" "}
                        <InlineMath>{String.raw`\frac{p}{q}`}</InlineMath> (mit{" "}
                        <InlineMath>{String.raw`p,q \in \mathbb{Z}`}</InlineMath>) darstellen lässt.
                    </>
                ),

            },
        },
        {
            heading: "4. Reelle und komplexe Zahlen",
            paragraphs: [
                <>
                    Selbst mit <InlineMath>{String.raw`\mathbb{R}`}</InlineMath> sind nicht alle
                    Gleichungen lösbar (z. B.{" "}
                    <InlineMath>{String.raw`x^2 = -1`}</InlineMath>). Deswegen führt man die{" "}
                    <strong>komplexen Zahlen</strong> (
                    <InlineMath>{String.raw`\mathbb{C}`}</InlineMath>) ein:{" "}
                    <InlineMath>{String.raw`a + b\,i`}</InlineMath> mit{" "}
                    <InlineMath>{String.raw`i^2 = -1`}</InlineMath>. Sie ermöglichen auch „imaginäre“
                    Lösungen.
                </>,
            ],
            quizData: {
                type: "fillblank",
                // Hier reicht ein einfacher String für die Frage
                templateText: "In den komplexen Zahlen gilt i² = ?",
                correctAnswers: ["-1", "−1"],
                explanation: (
                    <>
                        Der imaginäre Anteil <InlineMath>{String.raw`i`}</InlineMath> ist definiert durch{" "}
                        <InlineMath>{String.raw`i^2 = -1`}</InlineMath>. Dies erweitert{" "}
                        <InlineMath>{String.raw`\mathbb{R}`}</InlineMath> zu{" "}
                        <InlineMath>{String.raw`\mathbb{C}`}</InlineMath>.
                    </>
                ),
            },

        },
        {
            heading: "5. Venn-Diagramm und Inklusion",
            paragraphs: [
                <>
                    Jede Zahlenmenge ist Teilmenge der nächsten:{" "}
                    <InlineMath>
                        {String.raw`\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}`}
                    </InlineMath>
                    .<br />
                    <em>Natürliche</em> ⊂ <em>Ganze</em> ⊂ <em>Rationale</em> ⊂ <em>Reelle</em> ⊂{" "}
                    <em>Komplexe</em>.
                </>,
            ],
            quizData: {
                type: "matchingpairs",
                // Hier: Key "question" ist optional, MatchingPairsQuiz hat standard.
                // Falls du ein "question" prop übergeben willst,
                // müsstest du MatchingPairsQuiz ggf. anpassen.
                pairs: [
                    { left: "ℕ", right: "Zählen (0,1,2,…)" },
                    { left: "ℝ", right: "Beinhaltet irrationale Zahlen" },
                    { left: "ℂ", right: "i² = -1 möglich" },
                ],
                explanation:
                    "ℕ ⊂ ℤ, ℤ ⊂ ℚ, ℚ ⊂ ℝ, ℝ ⊂ ℂ. Jede Menge erweitert die vorige.",
            },
        },
        {
            heading: "6. Fazit",
            paragraphs: [
                <>
                    Wenn du noch Schwierigkeiten mit diesen Themen hast, ist das kein Grund zur Sorge.
                    Im weiteren Verlauf dieses Kurses wirst du diese Konzepte wie im Schlaf beherrschen.
                </>,
            ],
            // kein quizData => Ende
        },
    ],
};

export default ZahlenmengenData;
