// File: src/Matura/Module/1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx

import React from "react";
import { Box } from "@chakra-ui/react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import GreekLettersBanner from "./images/GriechischeBuchstaben.png";
import Dreieck from "./images/Dreieck.svg";
import Normalverteilung from "./images/Normalverteilung.svg";
import { Image as ChakraImage } from "@chakra-ui/react";

// Example of an optional interactive element
import SecantTangentVisualization from "../../../../../components/InteractiveElements/Module/1_Grundlagen/1_GriechischeBuchstaben/SecantTangentVisualization.jsx";

const GriechischeBuchstabenData = {
    bannerImageSrc: GreekLettersBanner,
    headline: "Griechische Buchstaben in der Mathematik",
    introText:
        "Von Alpha bis Omega: Griechische Buchstaben begegnen uns überall in der Mathematik...",
    sections: [
        {
            heading: "Einführung und Überblick",
            paragraphs: [
                <>
                    In vielen Formeln, Theoremen und Definitionen begegnen wir
                    griechischen Buchstaben...
                </>,
                <>
                    <em>
                        Hinweis: Du musst nicht alle griechischen Buchstaben auswendig
                        lernen...
                    </em>
                </>,
            ],
            // no quiz => user can continue immediately
        },
        {
            heading: "Allgemeine Verwendung in der Mathematik",
            paragraphs: [
                <>
                    Manche griechische Buchstaben sind in nahezu jedem Gebiet zu finden...
                </>,
            ],
            quizData: {
                type: "mcq",
                question: "Welcher Buchstabe repräsentiert typischerweise eine Summe?",
                options: ["Ε (Epsilon)", "Π (Pi)", "Σ (Sigma)", "Μ (My)"],
                correctAnswerIndex: 2,
                explanation:
                    "Das große Sigma (∑) ist das Summenzeichen...",
            },
        },
        {
            heading: "Geometrie: Winkelbezeichnungen",
            paragraphs: [
                <>
                    In der Geometrie werden <InlineMath>\alpha</InlineMath>,
                    <InlineMath>\beta</InlineMath> und <InlineMath>\gamma</InlineMath>...
                </>,
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Dreieck}
                            alt="Dreieck mit α, β, γ"
                            maxW="80%"
                            margin="0 auto"
                        />
                    </Box>
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: "Der Buchstabe α wird häufig als Winkel in der Geometrie verwendet.",
                isTrue: true,
                explanation:
                    "Stimmt! α, β, γ sind typische Winkelbezeichnungen in Dreiecken...",
            },
        },
        {
            heading: "Analysis: Epsilon und Delta",
            paragraphs: [
                <>
                    In der Analysis geht es oft um Grenzwerte...
                </>,
                <>
                    <BlockMath>{String.raw`\lim_{x \to a} f(x) = L`}</BlockMath>
                </>,
            ],
            // no quiz => user can continue
        },
        {
            heading: "Analysis: Sekante und Tangente",
            paragraphs: [
                <>
                    Hier ein interaktives Beispiel, das zeigt, wie sich die Steigung...
                </>,
                <>
                    <SecantTangentVisualization />
                </>,
            ],
        },
        {
            heading: "Lineare Algebra: Eigen- und Singularwerte",
            paragraphs: [
                <>
                    In der linearen Algebra steht <InlineMath>\lambda</InlineMath>...
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText: "Der Buchstabe ? wird üblicherweise für einen Eigenwert benutzt.",
                correctAnswers: ["lambda", "Lambda", "\\lambda"],
                explanation: "In der Regel schreibt man Eigenwerte als λ1, λ2, ...",
            },
        },
        {
            heading: "Wahrscheinlichkeit & Statistik",
            paragraphs: [
                <>
                    In Stochastik und Statistik steht <InlineMath>\Omega</InlineMath>...
                </>,
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Normalverteilung}
                            alt="Normalverteilung"
                            maxW="100%"
                            margin="0 auto"
                        />
                    </Box>
                </>,
            ],
            quizData: {
                type: "matchingpairs",
                pairs: [
                    { left: "Ergebnisraum", right: "Ω" },
                    { left: "Erwartungswert", right: "μ" },
                    { left: "Standardabweichung", right: "σ" },
                ],
                explanation:
                    "Ω bezeichnet den Ergebnisraum, μ den Erwartungswert, σ die Standardabweichung...",
            },
        },
        {
            heading: "Fazit und Ausblick",
            paragraphs: [
                <>
                    Die Welt der griechischen Buchstaben ist riesig...
                </>,
                <>
                    Weiter geht es oft mit den lateinischen Buchstaben...
                </>,
            ],
            // no quiz => user can finish
        },
    ],
};

export default GriechischeBuchstabenData;
