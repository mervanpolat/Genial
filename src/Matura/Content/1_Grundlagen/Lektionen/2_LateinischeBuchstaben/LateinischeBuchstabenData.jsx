// File: src/Matura/Content/1_Grundlagen/Lektionen/2_LateinischeBuchstaben/LateinischeBuchstabenData.jsx

import React from "react";
import { Box, Image as ChakraImage } from "@chakra-ui/react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

// We need react-slick for the small slider in the Fazit
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TippyText from "../../../../../components/TippyText/TippyText.jsx";

// Banners for the top-level slider
import Lateinische_Buchstaben from "./images/Lateinische_Buchstaben.svg";
import Lateinische_Buchstaben2 from "./images/Lateinische_Buchstaben2.svg";

// Additional inline images
import DependantAndNonDependant from "./images/DependantAndNonDependant.svg";

/**
 * A small inline slider to show the two “Lateinische_Buchstaben” images
 * at the end (Fazit). We rename it to avoid double declarations.
 */
function DoubleImageSliderFazit() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Box
            w="100%"
            maxW="400px"
            mx="auto"
            mt={4}
            bg="#faf3dc"
            borderRadius="md"
            overflow="hidden"
        >
            <Slider {...settings}>
                <Box textAlign="center" p={2}>
                    <ChakraImage
                        src={Lateinische_Buchstaben}
                        alt="Lateinische Buchstaben Teil 1/2"
                        maxW="100%"
                        objectFit="contain"
                        m="0 auto"
                    />
                </Box>
                <Box textAlign="center" p={2}>
                    <ChakraImage
                        src={Lateinische_Buchstaben2}
                        alt="Lateinische Buchstaben Teil 2/2"
                        maxW="100%"
                        objectFit="contain"
                        m="0 auto"
                    />
                </Box>
            </Slider>
        </Box>
    );
}

const LateinischeBuchstabenData = {
    // We have two main banners for the top-level slider in LectureTheoryPage
    bannerImages: [Lateinische_Buchstaben, Lateinische_Buchstaben2],

    headline: "Lateinische Buchstaben in der Mathematik",
    introText:
        "Diese kurze Übersicht behandelt die häufigsten lateinischen Buchstaben und deren typische Verwendung in der Mathematik – von Variablen für reelle Zahlen bis hin zu Euler’s berühmter Zahl e.",

    sections: [
        {
            heading: "A, B, C: Beliebte Reelle Zahlen",
            paragraphs: [
                <>
                    In vielen Kontexten stehen{" "}
                    <InlineMath>{String.raw`A, B, C`}</InlineMath> für beliebige reelle
                    Zahlen. Häufig verwenden wir diese, wenn wir einfach nur drei Werte in{" "}
                    <InlineMath>{String.raw`\mathbb{R}`}</InlineMath> betrachten wollen,
                    ohne Einschränkungen. Außerdem begegnet man ihnen in der Geometrie –
                    etwa als Seitenlängen in einem Dreieck.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: "Wofür werden die Buchstaben A, B und C häufig verwendet?",
                options: [
                    "Für beliebige reelle Zahlen",
                    "Für komplexe Zahlen",
                    "Für logarithmische Basen",
                    "Ausschließlich für Winkel in Dreiecken",
                ],
                correctAnswerIndex: 0,
                explanation:
                    "A, B und C werden sehr oft für drei beliebige reelle Zahlen benutzt (z.B. Seitenlängen oder unbestimmte Werte in \\(\\mathbb{R}\\)).",
            },
        },

        {
            heading: "D: Eine typische Distanz",
            paragraphs: [
                <>
                    <InlineMath>{String.raw`D`}</InlineMath> taucht in der Regel auf,
                    wenn wir explizit von einer Distanz oder einem Abstand sprechen
                    möchten. So kann{" "}
                    <InlineMath>{String.raw`D`}</InlineMath> etwa die Länge eines Weges
                    oder den Abstand zweier Punkte in{" "}
                    <InlineMath>{String.raw`\mathbb{R}`}</InlineMath> bezeichnen.
                </>,
            ],
            // no quiz => user proceeds
        },

        {
            heading: "E: Eulers Zahl",
            paragraphs: [
                <>
                    <InlineMath>{String.raw`e`}</InlineMath> (Eulers Zahl) ist eine
                    fundamentale Konstante der Mathematik:
                    <BlockMath>{String.raw`e \approx 2.7182818\ldots`}</BlockMath>
                    Sie ist die Basis des natürlichen Logarithmus (
                    <InlineMath>{String.raw`\ln(x)`}</InlineMath>) und spielt in vielen
                    Bereichen eine zentrale Rolle. Du kennst sie wahrscheinlich aus
                    Exponentialfunktionen, Wachstumsprozessen und der
                    Logarithmusrechnung.
                </>,
                <>
                    <TippyText content="Natürlicher Logarithmus mit Basis e (Eulersche Zahl).">
                        Natürliche Logarithmen
                    </TippyText>{" "}
                    werden z.B. als <InlineMath>{String.raw`\ln(x)`}</InlineMath> notiert.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement:
                    "Die Zahl e ist ungefähr 2,7 und bildet die Basis der natürlichen Logarithmen.",
                isTrue: true,
                explanation:
                    "Richtig, e ≈ 2.71828… ist irrational und dient als Standardbasis des natürlichen Logarithmus \\(\\ln(x)\\).",
            },
        },

        {
            heading: "F, G, H: Typische Funktionsnamen",
            paragraphs: [
                <>
                    <InlineMath>{String.raw`f(x)`}</InlineMath> ist wohl die bekannteste
                    Funktionsschreibweise. Brauchen wir jedoch mehrere Funktionen in
                    derselben Aufgabe, verwenden wir meist{" "}
                    <InlineMath>{String.raw`f, g, h`}</InlineMath> als zusätzliche Namen.
                    So können wir verschiedene Funktionen im selben Problem eindeutig
                    benennen.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText: "Typische Funktionsnamen in einer Aufgabe sind f, g und ?.",
                correctAnswers: ["h", "H"],
                explanation:
                    "Oft verwenden wir f(x), g(x) und h(x), wenn wir mehrere Funktionen im gleichen Kontext definieren.",
            },
        },

        {
            heading: "Index-Variablen und Komplexe Zahlen",
            paragraphs: [
                <>
                    <strong>Indizes:</strong> In Summen oder Produkten dient{" "}
                    <InlineMath>{String.raw`i`}</InlineMath> häufig als Laufindex, z.B.{" "}
                    <InlineMath>{String.raw`\sum_{i=1}^{n} a_i`}</InlineMath>. Weitere
                    Index-Variablen sind oft{" "}
                    <InlineMath>{String.raw`j`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`k`}</InlineMath>.
                </>,
                <>
                    <strong>Komplexe Zahlen:</strong>{" "}
                    <InlineMath>{String.raw`i`}</InlineMath> ist außerdem als imaginäre
                    Einheit definiert, für die{" "}
                    <InlineMath>{String.raw`i^2 = -1`}</InlineMath> gilt. Beachte also den
                    Kontext, in dem <InlineMath>{String.raw`i`}</InlineMath> verwendet
                    wird!
                </>,
            ],
            quizData: {
                type: "matchingpairs",
                pairs: [
                    { left: "i (Index)", right: "Laufvariable in Summen/Produkten" },
                    { left: "i (imaginär)", right: "i² = -1" },
                    { left: "j, k", right: "Weitere Indizes" },
                ],
                explanation:
                    "Je nach Kontext kann i ein Index sein oder die imaginäre Einheit im Bereich komplexer Zahlen.",
            },
        },

        {
            heading: "K, N, M: Natürliche oder ganze Zahlen",
            paragraphs: [
                <>
                    Buchstaben wie <InlineMath>{String.raw`k, n`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`m`}</InlineMath> werden gern für natürliche
                    oder ganze Zahlen genutzt. Schreibt man{" "}
                    <InlineMath>{String.raw`n \in \mathbb{N}`}</InlineMath>, ist sofort
                    klar, dass <InlineMath>{String.raw`n`}</InlineMath> eine natürliche
                    Zahl (also 1, 2, 3, ...) sein soll.
                </>,
                <>
                    Für reelle Zahlen greift man hingegen eher auf{" "}
                    <InlineMath>{String.raw`a, b, c`}</InlineMath> zurück.
                </>,
            ],
            // no quiz => user proceeds
        },

        {
            heading: "Polynome und Aussagen",
            paragraphs: [
                <>
                    <InlineMath>{String.raw`p, q, r`}</InlineMath> tauchen in zwei großen
                    Kontexten auf:
                    <br />
                    <strong>Polynome:</strong>{" "}
                    <InlineMath>{String.raw`p(x)`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`q(x)`}</InlineMath> sind klassische Namen für
                    Polynome (z.B. <InlineMath>{String.raw`p(x) = x^2 + 3x - 1`}</InlineMath>).
                    <br />
                    <strong>Logik:</strong> In der Aussagenlogik bezeichnet man oft{" "}
                    <InlineMath>{String.raw`p, q, r`}</InlineMath> als Aussagen (z.B.
                    „Es regnet“, „Ich habe einen Schirm“).
                </>,
            ],
            quizData: {
                type: "mcq",
                question: "Welche Buchstaben nutzt man gerne für Polynomfunktionen?",
                options: ["f, g, h", "p, q, r", "x, y, z", "c, d, e"],
                correctAnswerIndex: 1,
                explanation:
                    "Polynome heißen häufig p(x), q(x), r(x) – ein fester Brauch in vielen Lehrbüchern.",
            },
        },

        {
            heading: "S, T: Parameter",
            paragraphs: [
                <>
                    Die Buchstaben <InlineMath>{String.raw`S`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`T`}</InlineMath> übernehmen oft die Rolle von
                    Parametern, besonders wenn wir Lösungsräume oder Gleichungssysteme
                    beschreiben, in denen wir freie Variablen benennen.
                </>,
            ],
            // no quiz => user proceeds
        },

        {
            heading: "Lineare Algebra: Vektoren",
            paragraphs: [
                <>
                    In der linearen Algebra (insbesondere in{" "}
                    <InlineMath>{String.raw`\mathbb{R}^n`}</InlineMath>) sehen wir häufig{" "}
                    <InlineMath>{String.raw`u, v, w`}</InlineMath> für Vektoren. Ob mit
                    Pfeilen darüber oder einfach so, der Kontext verrät es meist schnell.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement:
                    "u, v und w werden üblicherweise als Vektoren in der linearen Algebra genutzt.",
                isTrue: true,
                explanation:
                    "Richtig – das ist ein gängiges Schema in nahezu allen linearen Algebra-Kapiteln.",
            },
        },

        {
            heading: "Variablen und Koordinatenachsen",
            paragraphs: [
                <>
                    In vielen Gleichungen ist{" "}
                    <InlineMath>{String.raw`x`}</InlineMath> die unabhängige Variable und{" "}
                    <InlineMath>{String.raw`y`}</InlineMath> die abhängige Variable,
                    beispielsweise in{" "}
                    <InlineMath>{String.raw`y = f(x)`}</InlineMath>. In der Analytischen
                    Geometrie oder in mehrdimensionalen Räumen werden{" "}
                    <InlineMath>{String.raw`x, y`}</InlineMath> (und{" "}
                    <InlineMath>{String.raw`z`}</InlineMath>) hingegen als
                    Achsenbezeichnungen verwendet.
                </>,
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={DependantAndNonDependant}
                            alt="Dreieck mit α, β, γ"
                            maxW="400px"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,
                <>
                    Das heißt, <InlineMath>{String.raw`x, y, z`}</InlineMath> können
                    sowohl Variablen als auch Koordinatenachsen sein – immer eine Frage
                    des Kontextes.
                </>,
            ],
            // no quiz => user proceeds
        },

        /**
         * Final "Fazit" with a slider for the 2 images
         */
        {
            heading: "Fazit und Kontextabhängigkeit",
            paragraphs: [

                <>
                    Die Bedeutung lateinischer Buchstaben in der Mathematik ist stark
                    konventionell geprägt. Meist halten sich Lehrbücher und Vorlesungen an
                    die oben genannten Gepflogenheiten – trotzdem kann ein Lehrer oder
                    Autor sie auch anders verwenden.
                </>,
                <>
                    Achte also immer genau darauf, wie die Variablen{" "}
                    <InlineMath>{String.raw`a, b, c, i`}</InlineMath> usw. in deinem
                    jeweiligen Kontext eingeführt werden!
                </>
            ],
            // no quiz => user proceeds
        },
    ],
};

export default LateinischeBuchstabenData;
