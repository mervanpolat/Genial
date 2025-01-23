// File: src/Matura/Content/1_Grundlagen/Lektionen/Assoziativitaet/AssoziativitaetData.jsx

import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import TippyText from "../../../../../components/TippyText/TippyText.jsx"; // Pfad anpassen, falls nötig
import Assoziativgesetz from "./images/Assoziativgesetz.svg";
import Assoziativ_Addition from "./images/Assoziativ_Addition.svg";
import Assoziativ_Multiplikation from "./images/Assoziativ_Multiplikation.svg";
import {Box} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";

const AssoziativitaetData = {
    bannerImageSrc: Assoziativgesetz, // Beispielpfad oder weglassen
    headline: "Assoziativität in der Arithmetik",
    introText:
        "Hier lernst du, warum sich die Klammerung bei Addition oder Multiplikation natürlicher Zahlen auf das Ergebnis nicht auswirkt und wieso das als Axiom festgelegt wird.",

    sections: [
        {
            heading: "1. Einführung",
            paragraphs: [
                <>
                    Viele Rechengesetze, wie die{" "}
                    <TippyText content="Gesetz oder Eigenschaft, dass die Reihenfolge und Gruppierung die Operation nicht verändert.">
                        Assoziativität
                    </TippyText>
                    , gelten sowohl für natürliche als auch für reelle Zahlen. Ein{" "}
                    <TippyText content="Grundannahme, die ohne Beweis akzeptiert wird, um ein System aufzubauen.">
                        Axiom
                    </TippyText>{" "}
                    ist dabei nur eine sinnvolle Festlegung, die wir ohne formale Beweise annehmen.
                </>,
                <>
                    In diesem Abschnitt sehen wir konkret, was es bedeutet, wenn man sagt:{" "}
                    <em>“Die Art der Gruppierung ändert das Resultat nicht.”</em>
                </>,
            ],
        },
        {
            heading: "2. Assoziativität bei der Addition",
            paragraphs: [
                <>
                    Nehmen wir drei natürliche Zahlen{" "}
                    <InlineMath>{String.raw`m, n, k \in \mathbb{N}`}</InlineMath>. Das assoziative
                    Gesetz lautet:
                </>,
                <>
                    <BlockMath>
                        {String.raw`m + (n + k) = (m + n) + k`}
                    </BlockMath>
                </>,
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Assoziativ_Addition}
                            alt="Dreieck mit α, β, γ"
                            maxW="800px"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,

                <>
                    Die Summe dreier Zahlen ist unabhängig davon, welche beiden du zuerst addierst.
                    Denk an drei Gruppen von Objekten: Ob du erst Gruppe 1 mit Gruppe 2 und dann Gruppe
                    3 hinzufügst oder erst Gruppe 2 mit Gruppe 3 verbindest, das Endergebnis ist stets
                    dieselbe Gesamtanzahl.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Wie lautet das assoziative Gesetz der Addition für{" "}
                        <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>?
                    </>
                ),
                options: [
                    "Die Reihenfolge der Summanden ist bedeutend.",
                    <><InlineMath>{String.raw`(a + b) + c = a + (b + c)`}</InlineMath>.</>,
                    "Man darf nur zwei Zahlen addieren, nie drei.",
                    "Assoziativität existiert nur für reelle Zahlen.",
                ],
                correctAnswerIndex: 1,
                explanation:
                    "Assoziativität bedeutet, dass die Klammerung beim Addieren von drei Zahlen keinen Unterschied macht.",
            },
        },
        {
            heading: "3. Assoziativität bei der Multiplikation",
            paragraphs: [
                <>
                    Auch bei der Multiplikation dreier natürlicher Zahlen{" "}
                    <InlineMath>{String.raw`a, b, c`}</InlineMath> gilt:
                </>,
                <>
                    <BlockMath>
                        {String.raw`(a \times b) \times c = a \times (b \times c)`}
                    </BlockMath>
                </>,
                <>
                    Stell dir vor, du berechnest das Volumen eines Quaders mit Kantenlängen{" "}
                    <InlineMath>{String.raw`a, b, c`}</InlineMath>. Egal in welcher Reihenfolge du
                    „Fläche × Höhe“ rechnest – das Volumen bleibt identisch.
                </>,
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Assoziativ_Multiplikation}
                            alt="Dreieck mit α, β, γ"
                            maxW="800px"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,

            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        <InlineMath>{String.raw`(a\times b)\times c = a\times (b\times c)`}</InlineMath>{" "}
                        gilt für alle <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>.
                    </>
                ),
                isTrue: true,
                explanation:
                    "Eine denkbare Veranschaulichung ist das Volumen eines Quaders, das sich nicht durch unterschiedliche Reihenfolge ändert.",
            },
        },
        {
            heading: "4. Veranschaulichung durch Volumen",
            paragraphs: [
                <>
                    Bei <InlineMath>{String.raw`a \times b \times c`}</InlineMath> kannst du dir
                    einen Quader mit Höhe <InlineMath>{String.raw`a`}</InlineMath>, Breite{" "}
                    <InlineMath>{String.raw`b`}</InlineMath> und Tiefe{" "}
                    <InlineMath>{String.raw`c`}</InlineMath> vorstellen. Egal, ob du{" "}
                    <InlineMath>{String.raw`(a\times b)\times c`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`(b\times c)\times a`}</InlineMath> rechnest, das
                    Ergebnis ist dieselbe Menge an Einheitswürfeln, aus denen sich das Volumen
                    zusammensetzt.
                </>,
                // Illustrationshinweis:
                /*
                  <Box mt={4} textAlign="center">
                    // z.B. ein Quader mit Kantenlängen a, b, c
                  </Box>
                */
            ],
            quizData: {
                type: "fillblank",
                templateText: "Für (2×3)×4 und 2×(3×4) gilt jeweils ?",
                correctAnswers: ["24"],
                explanation:
                    "2×3=6, dann 6×4=24; genauso 3×4=12, und 2×12=24. Beide Klammerungen führen zum selben Resultat.",
            },
        },
        {
            heading: "5. Ausblick",
            paragraphs: [
                <>
                    Wir sehen, dass Assoziativität in vielen Rechenbereichen eine
                    Selbstverständlichkeit ist. Tatsächlich wird sie als fundamentales Gesetz (Axiom)
                    angenommen, um komplexere Strukturen (z. B. Ringe oder Körper) zu definieren.
                </>,
                <>
                    Im nächsten Schritt lernst du die Verknüpfung von Addition und Multiplikation
                    durch das Distributivgesetz kennen.
                </>,
            ],
            // kein quiz => user kann Ende
        },
    ],
};

export default AssoziativitaetData;
