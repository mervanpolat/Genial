// File: src/Matura/Module/1_Grundlagen/Lektionen/Assoziativitaet/AssoziativitaetData.jsx

import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

// ---- Import the original images ----
import Assoziativgesetz from "./images/Assoziativgesetz.svg";
import Assoziativ_Multiplikation from "./images/Assoziativ_Multiplikation.svg";

// ---- Import the three new images for the slider ----
import Assoziativ_Addition_1 from "./images/Assoziativ_Addition_1.svg";
import Assoziativ_Addition_2 from "./images/Assoziativ_Addition_2.svg";
import Assoziativ_Addition_3 from "./images/Assoziativ_Addition_3.svg";

// ---- Chakra components ----
import { Box } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";

// ---- react-slick imports ----
import Slider from "react-slick";
// For default slick styles (optional but recommended):
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AssoziativitaetData = {
    bannerImageSrc: Assoziativgesetz, // Optional banner
    headline: "Assoziativität in der Arithmetik",

    sections: [
        {
            paragraphs: [
                <>Hier lernst du, warum sich die Klammerung bei Addition oder Multiplikation natürlicher Zahlen auf das Ergebnis nicht auswirkt und wieso das als Axiom festgelegt wird.</>
            ]
        },
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
                    <InlineMath>{String.raw`a, b, c \in \mathbb{N}`}</InlineMath>. Das assoziative
                    Gesetz lautet:
                </>,
                <>
                    <BlockMath>{String.raw`a + (b + c) = (a + b) + c`}</BlockMath>
                </>,
                // --- Slider with three images and extra bottom margin on dots ---
                <>
                    {/* Slider Container */}
                    <Box mt={4} textAlign="center" maxW="800px" margin="0 auto">
                        {/* React Slick settings */}
                        <Slider
                            dots={true}
                            infinite={false}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            // This adds margin to the bottom of the dots
                            appendDots={(dots) => (
                                <div style={{ marginBottom: "30px" }}>
                                    <ul style={{ margin: "0px" }}>{dots}</ul>
                                </div>
                            )}
                        >
                            <Box>
                                <ChakraImage
                                    src={Assoziativ_Addition_1}
                                    alt="Assoziativität Addition 1"
                                    maxW="100%"
                                    objectFit="contain"
                                    margin="0 auto"
                                />
                            </Box>
                            <Box>
                                <ChakraImage
                                    src={Assoziativ_Addition_2}
                                    alt="Assoziativität Addition 2"
                                    maxW="100%"
                                    objectFit="contain"
                                    margin="0 auto"
                                />
                            </Box>
                            <Box>
                                <ChakraImage
                                    src={Assoziativ_Addition_3}
                                    alt="Assoziativität Addition 3"
                                    maxW="100%"
                                    objectFit="contain"
                                    margin="0 auto"
                                />
                            </Box>
                        </Slider>
                    </Box>
                </>,
                <>
                    Die Summe dreier Zahlen ist unabhängig davon, welche beiden du zuerst addierst.
                    Denk an drei Gruppen von Objekten: Ob du erst Gruppe 1 mit Gruppe 2 und dann Gruppe
                    3 hinzufügst oder erst Gruppe 2 mit Gruppe 3 verbindest, das Endergebnis ist stets
                    dieselbe Gesamtanzahl.
                </>,
            ],

        },
        {
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
                    <>
                        <InlineMath>{String.raw`(a + b) + c = a + (b + c)`}</InlineMath>.
                    </>,
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
                    <BlockMath>{String.raw`(a \times b) \times c = a \times (b \times c)`}</BlockMath>
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
                            alt="Assoziative Multiplikation"
                            maxW="800px"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,
            ],

        },
        {
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
            heading: "4. Ausblick",
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
