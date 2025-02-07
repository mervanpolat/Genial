// File: src/Matura/Module/1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx

import React from "react";
import { Box } from "@chakra-ui/react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import GreekLettersBanner from "./images/GriechischeBuchstaben.svg";
import Dreieck from "./images/Dreieck.svg";
import Normalverteilung from "./images/Normalverteilung.svg";
import { Image as ChakraImage } from "@chakra-ui/react";

// Example of an optional interactive element
import SecantTangentVisualization from "../../../../../components/InteractiveElements/Module/1_Grundlagen/1_GriechischeBuchstaben/SecantTangentVisualization.jsx";

const GriechischeBuchstabenData = {
    bannerImageSrc: GreekLettersBanner,
    headline: "Griechische Buchstaben in der Mathematik",
    introText:
        "Von Alpha bis Omega: Griechische Buchstaben begegnen uns überall in der Mathematik—von Winkeln in der Geometrie bis hin zu Wahrscheinlichkeiten in der Statistik! " +
        "Diese Lektion zeigt dir Schritt für Schritt, wo und wie du sie anwenden kannst.",
    sections: [
        {
            heading: "Einführung und Überblick",
            paragraphs: [
                <>
                    In vielen Formeln, Theoremen und Definitionen begegnen wir griechischen Buchstaben. Sie wirken
                    anfangs einschüchternd, sind aber oft nur eine formale (und praktische!) Konvention.
                </>,
                <>
                    <em>
                        Hinweis: Du musst nicht alle griechischen Buchstaben auswendig lernen.
                        Konzentriere dich auf die gängigsten, die in deinen Themenbereichen vorkommen.
                    </em>
                </>,
            ],
            // no quiz => user can continue immediately
        },
        {
            heading: "Allgemeine Verwendung in der Mathematik",
            paragraphs: [
                <>
                    Manche griechische Buchstaben sind in nahezu jedem Gebiet zu finden:
                    <Box as="ul" mt={2} ml={6}>
                        <li>
                            <InlineMath>\pi</InlineMath> (Pi, klein) für die berühmte Kreiszahl:{" "}
                            <InlineMath>\pi \approx 3.14159</InlineMath>
                        </li>
                        <li>
                            <InlineMath>\Pi</InlineMath> (Pi, groß) für Produkte, z.B.{" "}
                            <BlockMath>{String.raw`\prod_{i=1}^{n} a_i`}</BlockMath>
                        </li>
                        <li>
                            <InlineMath>\Sigma</InlineMath> (Sigma, groß) für Summen, z.B.{" "}
                            <BlockMath>{String.raw`\sum_{k=0}^{m} b_k`}</BlockMath>
                        </li>
                        <li>
                            <InlineMath>\in</InlineMath> (Epsilon-Variante) für „gehört zu“:{" "}
                            <InlineMath>{String.raw`x \in \mathbb{R}`}</InlineMath>
                        </li>
                    </Box>
                </>,
            ],
            quizData: {
                type: "mcq",
                question: "Welcher Buchstabe repräsentiert typischerweise eine Summe?",
                options: ["Ε (Epsilon)", "Π (Pi)", "Σ (Sigma)", "Μ (My)"],
                correctAnswerIndex: 2,
                explanation:
                    "Das große Sigma (∑) ist das klassische Summenzeichen, während das große Pi (∏) für Produkte steht.",
            },
        },
        {
            heading: "Geometrie: Winkelbezeichnungen",
            paragraphs: [
                <>
                    In der Geometrie werden <InlineMath>\alpha</InlineMath>, <InlineMath>\beta</InlineMath> und{" "}
                    <InlineMath>\gamma</InlineMath> besonders häufig zur Bezeichnung von Winkeln in Dreiecken
                    verwendet. So kannst du beispielsweise ein Dreieck mit den Eckpunkten A, B und C benennen
                    und die jeweiligen Winkel mit{" "}
                    <InlineMath>\alpha, \beta, \gamma</InlineMath> markieren.
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
                    "Stimmt! Typischerweise nutzen wir α, β, γ als Winkel in Dreiecken. So behalten wir in Formeln wie dem Kosinussatz den Überblick.",
            },
        },
        {
            heading: "Analysis: Epsilon und Delta",
            paragraphs: [
                <>
                    In der Analysis geht es oft um Grenzwerte. Dabei kommt die berühmte „Epsilon-Delta-Definition“
                    ins Spiel. <InlineMath>\varepsilon</InlineMath> (Epsilon) und <InlineMath>\delta</InlineMath>{" "}
                    (Delta) beschreiben, wie nah wir an einen Grenzwert herankommen.
                </>,
                <>
                    Beispiel für einen Grenzwert:{" "}
                    <BlockMath>
                        {String.raw`\lim_{x \to a} f(x) = L \quad`}
                    </BlockMath>
                </>,
                <>
                    <strong>
                        Natürlich gehen wir davon aus, dass du diese Konzepte weder gehört noch gesehen hast 😃
                    </strong>
                </>,
            ],
            // no quiz => user can continue
        },
        {
            heading: "Analysis: Sekante und Tangente",
            paragraphs: [
                <>
                    Hier ein interaktives Beispiel, das zeigt, wie sich die Steigung der Sekante allmählich die Steigung der Tangente annähert.
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
                    In der linearen Algebra steht <InlineMath>\lambda</InlineMath> (Lambda) für Eigenwerte einer
                    Matrix. Auch <InlineMath>\sigma</InlineMath> (Sigma) kann hier auftauchen, z.B. bei der
                    Singulärwertzerlegung (SVD) für „Singular Values“.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText: "Der Buchstabe ? wird üblicherweise für einen Eigenwert benutzt.",
                correctAnswers: ["lambda", "Lambda", "\\lambda"],
                explanation: "In der Regel schreibt man Eigenwerte als λ1, λ2 usw. Sigma (σ) nutzt man hingegen für Singularwerte.",
            },
        },
        {
            heading: "Wahrscheinlichkeit & Statistik",
            paragraphs: [
                <>
                    In Stochastik und Statistik steht <InlineMath>\Omega</InlineMath> (großes Omega) häufig für den
                    Ergebnisraum (Sample Space). <InlineMath>\mu</InlineMath> (My) bezeichnet den Erwartungswert,
                    und <InlineMath>\sigma</InlineMath> (Sigma, klein) wird gern als Standardabweichung verwendet.
                    Außerdem gibt es die Chi-Quadrat-Verteilung, die mit <InlineMath>\chi^2</InlineMath> notiert
                    ist.
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
                    "In der Statistik bezeichnet man mit Ω den gesamten Ereignisraum, während μ und σ für Lage- und Streuungsmaße stehen.",
            },
        },
        {
            heading: "Fazit und Ausblick",
            paragraphs: [
                <>
                    Die Welt der griechischen Buchstaben ist riesig—doch für deinen Studienalltag genügen meist
                    ein paar wenige: <InlineMath>\alpha, \beta, \gamma, \varepsilon, \delta</InlineMath> und natürlich
                    <InlineMath>\pi</InlineMath>.
                </>,
                <>
                    Weiter geht es oft mit den lateinischen Buchstaben, die genauso wichtig sind!
                </>
            ],
            // no quiz => user can finish
        },
    ],
};

export default GriechischeBuchstabenData;
