// File: src/Matura/Module/1_Grundlagen/Lektionen/SiebDesEratosthenesData.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import SieveVisualization from "./SieveVisualization.jsx"; // <-- Wir binden die Visualisierung ein
import SiebDesEratosthenes from "../10_PrimzahlenFinden/images/SiebDesEratosthenes.svg";

const SiebDesEratosthenesData = {
    bannerImageSrc: SiebDesEratosthenes,
    headline: "Sieb des Eratosthenes – Primzahlen effizient finden",
    introText:
        "Das Sieb des Eratosthenes ist eine klassische Methode, um alle Primzahlen bis zu einer gewünschten Grenze zu bestimmen – ganz ohne komplizierte Teilbarkeitstests.",

    sections: [
        {
            heading: "Einleitung",
            paragraphs: [
                <>
                    Das Sieb des Eratosthenes entfernt systematisch Vielfache bekannter Primzahlen,
                    beginnend ab <InlineMath>{String.raw`2`}</InlineMath>. So bleiben
                    ausschließlich Primzahlen übrig.
                </>,
                <>
                    Dieses Verfahren ist besonders hilfreich, wenn{" "}
                    <InlineMath>{String.raw`n`}</InlineMath> nicht zu groß ist und man eine Liste
                    aller Primzahlen bis <InlineMath>{String.raw`n`}</InlineMath> benötigt.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        Das Sieb des Eratosthenes entfernt alle Vielfachen von{" "}
                        <InlineMath>{String.raw`2,3,\dots`}</InlineMath>, sodass nur Primzahlen
                        übrig bleiben.
                    </>
                ),
                isTrue: true,
                explanation:
                    "Indem man für jede Primzahl p alle Vielfachen p·k entfernt, bleiben schließlich nur Primzahlen übrig.",
            },
        },
        {
            heading: "Algorithmus und Idee",
            paragraphs: [
                <>
                    Man schreibt alle Zahlen von <InlineMath>{String.raw`2`}</InlineMath> bis{" "}
                    <InlineMath>{String.raw`n`}</InlineMath> auf. Dann entfernt man iterativ alle
                    Vielfachen jeder gefundenen Primzahl. Bis{" "}
                    <InlineMath>{String.raw`\sqrt{n}`}</InlineMath> muss man aktiv löschen.
                </>,
                <>
                    Die erste nicht gestrichene Zahl ist immer eine Primzahl – ihre Vielfachen
                    entfernt man. Daraufhin nimmt man die nächste ungestrichene Zahl usw.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welches Kriterium verwendet man beim Sieb, um zu wissen, bis wohin man Zahlen
                        aktiv prüfen/löschen muss?
                    </>
                ),
                options: [
                    "Bis zur Hälfte von n",
                    "Bis 2n",
                    "Bis zur Wurzel von n",
                    "Bis 1/3 von n",
                ],
                correctAnswerIndex: 2,
                explanation:
                    "Es genügt, bis zur Wurzel von n zu prüfen, da ein größerer Faktor bereits einen kleineren Partnerfaktor hätte.",
            },
        },
        {
            heading: "Interaktive Visualisierung",
            paragraphs: [
                <>
                    In einer interaktiven Ansicht kann man Schritt für Schritt beobachten, wie die
                    zu streichenden Zahlen markiert werden.
                </>,
                <>
                    <SieveVisualization />
                </>,
                <>
                    So erkennt man eindrucksvoll, dass nach dem Entfernen sämtlicher Vielfache nur
                    Primzahlen übrig bleiben.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText:
                    "Eine Primzahl ist eine natürliche Zahl, die genau ? Teiler hat: 1 und sich selbst.",
                correctAnswers: ["2", "zwei"],
                explanation:
                    "Primzahlen sind nur durch 1 und durch sich selbst teilbar, also genau 2 positive Teiler.",
            },
        },
        {
            heading: "Zusammenfassung und Ausblick",
            paragraphs: [
                <>
                    Das Sieb des Eratosthenes ist ein eleganter Algorithmus zur Primzahlbestimmung.
                    In der Informatik bildet es den Grundstein für viele Programme, die
                    Zahlentheorieaufgaben lösen.
                </>,
                <>
                    Für größere n sind Optimierungen möglich, z.B. Speicherverwaltung und
                    segmentierte Sieve-Verfahren.
                </>,
            ],
            quizData: {
                type: "matchingpairs",
                pairs: [
                    { left: "Eratosthenes", right: "Griechischer Mathematiker" },
                    { left: "Vielfaches", right: "p × k" },
                    { left: "Primzahl", right: "Nur 2 positive Teiler" },
                ],
                explanation:
                    "Beim Matching sieht man, dass Eratosthenes für das Siebverfahren bekannt ist.",
            },
        },
    ],
};

export default SiebDesEratosthenesData;
