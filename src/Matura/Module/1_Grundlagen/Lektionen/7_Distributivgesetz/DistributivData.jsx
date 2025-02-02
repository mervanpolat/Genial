// File: DistributivData.jsx

import React, { useRef, useEffect, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";
import { Box } from "@chakra-ui/react";
import Distributivgesetz from "./images/Distributivgesetz.svg";
import { Image as ChakraImage } from "@chakra-ui/react";
import Ausmultiplizieren from "./images/Ausmultiplizieren.svg";

/**
 * D3RectPartitionPro
 * Ein d3.js-Minimodul mit Slider zur Illustration des Distributivgesetzes.
 * - Ein großes Rechteck (Breite = m + n, Höhe = k), das in 2 Teilflächen (k×m, k×n) zerlegt wird.
 * - Farbe/Styles in Byrne-Farben:
 *   Byrne's Beige: #faf3dc
 *   Byrne's Blue: #30628b
 *   Byrne's Red: #c03b2d
 *   Byrne's Yellow: #f0c34e
 *
 * Wir animieren EINMAL beim ersten Render, spätere Slider-Änderungen sind ohne Transition.
 */

const DistributivData = {
    bannerImageSrc: Distributivgesetz,
    headline: "Das Distributivgesetz",
    introText:
        "Nach den Illustrationen zum Kommutativ- und Assoziativgesetz geht es jetzt um das Distributivgesetz. Es verbindet Multiplikation und Addition – und ist fundamental für das Ausmultiplizieren von Klammern.",

    sections: [
        {
            heading: "1. Einführung",
            paragraphs: [
                <>
                    Stell dir vor, du hast bereits das{" "}
                    <TippyText content="Vertauschungsgesetz: a×b = b×a">
                        Kommutativgesetz
                    </TippyText>{" "}
                    und das{" "}
                    <TippyText content="Verbindungsgesetz: (a×b)×c = a×(b×c)">
                        Assoziativgesetz
                    </TippyText>{" "}
                    kennengelernt. Nun siehst du, wie{" "}
                    <TippyText content="Ein Gesetz, das Multiplikation über Summen verteilt.">
                        das Distributivgesetz
                    </TippyText>{" "}
                    für einen noch umfassenderen Rechenkomfort sorgt.
                </>,
                <>
                    Beispiel: <InlineMath>{String.raw`2 \times (3 + 4)`}</InlineMath>. Du kannst erst{" "}
                    <InlineMath>{String.raw`3 + 4 = 7`}</InlineMath> rechnen und mit 2 multiplizieren, oder
                    2×3 plus 2×4 aufaddieren. Ergebnis: 14. Das ist kein Zufall, sondern ein allgemeines Gesetz.
                </>,
            ],
        },
        {
            heading: "2. Das Distributivgesetz",
            paragraphs: [
                <>
                    Für alle <InlineMath>{String.raw`k,m,n \in \mathbb{N}`}</InlineMath> gilt:
                </>,
                <>
                    <BlockMath>
                        {String.raw`k \cdot (m + n) = k \cdot m + k \cdot n`}
                    </BlockMath>
                    Dasselbe funktioniert auch mit vertauschten Faktoren, beispielsweise{" "}
                    <InlineMath>{String.raw`(m + n)\cdot k = m\cdot k + n\cdot k`}</InlineMath>.
                </>,
                <>
                    Dieses Rechengesetz erleichtert es, Summen zu multiplizieren. Man spricht davon,
                    „<em>k wird verteilt</em>“.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        Gilt das Distributivgesetz auch für <InlineMath>{String.raw`k \cdot (m - n)`}</InlineMath>?
                    </>
                ),
                isTrue: false,
                explanation:
                    "Hier brauchen wir zusätzlich, wie Subtraktion in den natürlichen Zahlen definiert wird. Das klassische Distributivgesetz bezieht sich strikt auf Addition. Für Minuenden und Subtraktionen verallgemeinert man später über ganze Zahlen.",
            },
        },
        // ... Teil der DistributivData.jsx ...

        {
            heading: "3. Geometrische Illustration",
            paragraphs: [
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Distributivgesetz}
                            alt="Dreieck mit α, β, γ"
                            maxW="80%"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,

                <>
                    In der linken Abbildung siehst du ein rotes Rechteck mit den Maßen{" "}
                    <InlineMath>{String.raw`k \times (m+n)`}</InlineMath>. In der rechten Abbildung ist dieselbe
                    Fläche in zwei Teilrechtecke aufgeteilt: ein grünes für{" "}
                    <InlineMath>{String.raw`k \times m`}</InlineMath> und ein oranges für{" "}
                    <InlineMath>{String.raw`k \times n`}</InlineMath>. So wird{" "}
                    <InlineMath>{String.raw`k(m+n) = km + kn`}</InlineMath> anschaulich dargestellt.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Was zeigt die Gegenüberstellung der roten und (grün + orange) Rechtecke?
                    </>
                ),
                options: [
                    "Eine Illustration von k = m + n",
                    "Zwei unterschiedliche Dimensionen in 3D",
                    "Das Distributivgesetz, indem ein großes Rechteck in k×m und k×n aufgeteilt wird",
                    "Nur zufällige Farbfelder ohne Bedeutung",
                ],
                correctAnswerIndex: 2,
                explanation:
                    "Das große rote Rechteck steht für k×(m+n), während die Teilrechtecke (grün/orange) für k×m und k×n stehen. Zusammen illustriert das Diagramm das Distributivgesetz.",
            },
        },
        {
            heading: "4. Arithmetische Deutung",
            paragraphs: [
                <>
                    Kaufst du <InlineMath>{String.raw`m`}</InlineMath> Stück einer Sorte und{" "}
                    <InlineMath>{String.raw`n`}</InlineMath> Stück einer anderen Sorte – beide zum Preis k
                    – kannst du den Gesamtpreis über (m+n)×k oder m×k + n×k berechnen. Beide Wege führen zum
                    selben Ergebnis.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText:
                    "Beispiel: k=4, m=3, n=5. Berechne: 4×(3+5) = ? ",
                correctAnswers: ["32"],
                explanation:
                    "3 + 5 = 8, dann 4 × 8 = 32. Alternativ: 3 × 4 + 5 × 4 = 12 + 20 = 32.",
            },
        },
        {
            heading: "5. Klammermultiplikation",
            paragraphs: [
                <>
                    Mit dem Distributivgesetz kann man auch zwei Summen ausmultiplizieren:
                    Indem man das Gesetz zweimal anwendet (und die Kommutativität nutzt), zerlegt man das
                    rechteckige Areal in vier Teilflächen.
                </>,

                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Ausmultiplizieren}
                            alt="Dreieck mit α, β, γ"
                            maxW="80%"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,

            ],
        },
    ],
};

export default DistributivData;
