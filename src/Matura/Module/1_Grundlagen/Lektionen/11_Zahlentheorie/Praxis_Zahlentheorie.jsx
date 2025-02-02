// File: ZahlentheorieData.jsx

import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Box } from "@chakra-ui/react";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

// Hier die Imports für den Carousel/Slider (react-slick):
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Beispiel-Carousel: Schritt-für-Schritt-Lösung für 12, 18 und 20
function Carousel_12_18_20() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <Slider {...settings}>
                <div>
                    <h4>Schritt 1: Primfaktoren von 12</h4>
                    <p>
                        <InlineMath>{String.raw`12 = 2^2 \times 3`}</InlineMath>.
                        <br />
                        Also enthält 12 die Primfaktoren 2 und 3.
                    </p>
                </div>
                <div>
                    <h4>Schritt 2: Primfaktoren von 18</h4>
                    <p>
                        <InlineMath>{String.raw`18 = 2 \times 3^2`}</InlineMath>.
                        <br />
                        18 enthält 2 und 3, wobei 3 hoch 2 auftritt.
                    </p>
                </div>
                <div>
                    <h4>Schritt 3: Primfaktoren von 20</h4>
                    <p>
                        <InlineMath>{String.raw`20 = 2^2 \times 5`}</InlineMath>.
                        <br />
                        20 besteht aus 2 hoch 2 und 5.
                    </p>
                </div>
                <div>
                    <h4>Schritt 4: kgV bestimmen</h4>
                    <p>
                        Man nimmt die <em>größten</em> Exponenten pro Primfaktor:
                        <br />
                        <InlineMath>{String.raw`2^2`}</InlineMath> (aus 12 oder 20),
                        <InlineMath>{String.raw`3^2`}</InlineMath> (aus 18),
                        <InlineMath>{String.raw`5^1`}</InlineMath> (aus 20).
                        <br />
                        Also <InlineMath>{String.raw`kgV = 2^2 \times 3^2 \times 5 = 4 \times 9 \times 5 = 180`}</InlineMath>.
                    </p>
                </div>
                <div>
                    <h4>Schritt 5: ggT bestimmen</h4>
                    <p>
                        Man nimmt die <em>kleinsten</em> Exponenten pro Primfaktor:
                        <br />
                        Für 2 ist der kleinste Exponent 1 (in 18 hat 2 nur 1 als Exponent).
                        <br />
                        Für 3 ist der kleinste Exponent 1 (in 12 oder 20 teils 3^0, d.h. 20 hat gar kein 3, daher 3^0).
                        <br />
                        Für 5 ist der kleinste Exponent 0 (in 12 und 18 kommt 5 gar nicht vor).
                        <br />
                        <strong>Ergebnis:</strong> <InlineMath>{String.raw`2^1 \times 3^0 \times 5^0 = 2`}</InlineMath>.
                        <br />
                        Der ggT der drei Zahlen ist also 2.
                    </p>
                </div>
            </Slider>
        </div>
    );
}

const ZahlentheorieData = {
    bannerImageSrc: "/assets/images/Banner_LCM_GCF.svg",
    headline: "kgV und ggT in der Schulmathematik",
    introText:
        "In dieser Lektion lernst du, wie du das kleinste gemeinsame Vielfache (kgV) und den größten gemeinsamen Teiler (ggT) von Zahlen oder Termen bestimmst. Dabei hilft dir insbesondere die Primfaktorzerlegung.",

    sections: [
        {
            heading: "1. Einführung in das kgV (kleinstes gemeinsames Vielfaches)",
            paragraphs: [
                <>
                    Das <TippyText content="kleinste gemeinsame Vielfache">
                    kgV
                </TippyText>{" "}
                    einer Menge natürlicher Zahlen ist die kleinste natürliche Zahl, die
                    Vielfaches aller gegebenen Zahlen ist. Beispiel: Das kgV von{" "}
                    <InlineMath>{String.raw`2`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`3`}</InlineMath> ist{" "}
                    <InlineMath>{String.raw`6`}</InlineMath>, denn 6 ist das kleinste gemeinsame
                    Vielfache beider Zahlen.
                </>,
                <>
                    <Box mt={3} mb={3}>
                        {/* Illustration: z.B. ein Bild oder Diagramm zum kgV */}
                        {/* <img src="/assets/images/kgV_Illustration.png" alt="kgV Illustration" /> */}
                    </Box>
                    Zur Bestimmung betrachtet man alle Vielfachen der einzelnen Zahlen und
                    sucht das kleinste gemeinsame Element.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welches ist das <em>kleinste</em> gemeinsame Vielfache von{" "}
                        <InlineMath>{String.raw`4`}</InlineMath> und{" "}
                        <InlineMath>{String.raw`6`}</InlineMath>?
                    </>
                ),
                options: [
                    <InlineMath>{String.raw`6`}</InlineMath>,
                    <InlineMath>{String.raw`12`}</InlineMath>,
                    <InlineMath>{String.raw`24`}</InlineMath>,
                    <InlineMath>{String.raw`18`}</InlineMath>,
                ],
                correctAnswerIndex: 1,
                explanation:
                    "Die Vielfachen von 4 sind 4, 8, 12, ... und von 6 sind 6, 12, ... Das kleinste gemeinsame Vielfache ist 12.",
            },
        },
        {
            heading: "2. Der ggT (größter gemeinsamer Teiler)",
            paragraphs: [
                <>
                    Der <TippyText content="größter gemeinsamer Teiler">ggT</TippyText> einer
                    Menge natürlicher Zahlen ist der größte Faktor, durch den alle Zahlen
                    ohne Rest teilbar sind.
                </>,
                <>
                    Beispiel: Der ggT von <InlineMath>{String.raw`12`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`16`}</InlineMath> ist{" "}
                    <InlineMath>{String.raw`4`}</InlineMath>, weil 4 der größte gemeinsame
                    Teiler beider Zahlen ist.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        Ist <InlineMath>{String.raw`8`}</InlineMath> der ggT von{" "}
                        <InlineMath>{String.raw`24`}</InlineMath> und{" "}
                        <InlineMath>{String.raw`40`}</InlineMath>?
                    </>
                ),
                isTrue: true,
                explanation:
                    "Sowohl 24 als auch 40 sind durch 8 teilbar. Es gibt keinen größeren gemeinsamen Faktor.",
            },
        },
        {
            heading: "3. Primfaktorzerlegung als Werkzeug",
            paragraphs: [
                <>
                    Die <em>Primfaktorzerlegung</em> ist ein systematischer Ansatz, um kgV oder ggT
                    zu finden. Jede Zahl wird in ihre Primfaktoren zerlegt:
                </>,
                <>
                    <BlockMath>{String.raw`12 = 2^2 \times 3,\quad 18 = 2 \times 3^2`}</BlockMath>
                </>,
                <>
                    - Das <strong>kgV</strong> erhält man, indem man die <em>höchsten</em>{" "}
                    Exponenten jedes Primfaktors nimmt.
                    <br />
                    - Den <strong>ggT</strong> bestimmt man, indem man die <em>kleinsten</em>{" "}
                    Exponenten jedes Primfaktors wählt.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText:
                    "Wie lautet die Primfaktorzerlegung von 36? Schreibe als 2^? x 3^?.",
                correctAnswers: ["2^2 x 3^2", "2^2 * 3^2", "2^2 × 3^2"],
                explanation:
                    "36 = 2² × 3². Beim Eingeben auf exakte Schreibweise achten (Hochzahlen, Multiplikationszeichen).",
            },
        },
        {
            heading: "4. Beispiel mit drei Zahlen",
            paragraphs: [
                <>
                    Betrachte die Zahlen <InlineMath>{String.raw`12`}</InlineMath>,{" "}
                    <InlineMath>{String.raw`18`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`20`}</InlineMath>. Unten siehst du eine
                    Schritt-für-Schritt-Anleitung, wie man kgV und ggT ermittelt.
                </>,
                <>
                    <Carousel_12_18_20 />
                </>,
            ],
            quizData: {
                type: "matchingpairs",
                pairs: [
                    { left: "kgV", right: "Höchste Primfaktor-Exponenten" },
                    { left: "ggT", right: "Kleinste Primfaktor-Exponenten" },
                    { left: "Primzahl", right: "Nur zwei positive Teiler" },
                ],
                explanation:
                    "Um das kgV zu finden, nimmt man die jeweils größten Exponenten, für den ggT die kleinsten.",
            },
        },
        {
            heading: "Fazit",
            paragraphs: [
                <>
                    Die Kombination aus kgV und ggT bildet einen wichtigen Grundpfeiler
                    der Zahlentheorie. Sie wird oft beim Kürzen von Brüchen und in vielen
                    anderen Anwendungsfällen in der Mathematik verwendet.
                </>,
            ],
        },
    ],
};

export default ZahlentheorieData;
