// File: src/Matura/Module/1_Grundlagen/Lektionen/9_Primfaktorenzerlegung/PrimfaktorenzerlegungData.jsx
// ----------------------------------------------------------------------------------------------------
// Updated to showcase four separate sliders (Carousel60, Carousel84, Carousel105, Carousel48)
// using Chakra UI <images> for each step. Each "problem" is in its own section.
// Also fixes the MCQ for 84 to have four answer options.

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

import {Box, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images for 60
import prime60_3 from "./images/prime60_3.svg";

// Images for 84
import prime84_1 from "./images/prime84_1.svg";

// Images for 105
import prime105_1 from "./images/prime105_1.svg";

// Images for 48
import prime48_1 from "./images/prime48_1.svg";
import Primfaktorzerlegung from "./images/Primfaktorzerlegung.svg";
import { Image as ChakraImage } from "@chakra-ui/react";

import Teilbarkeit from "./images/Teilbarkeit.svg";


const PrimfaktorenzerlegungData = {
    bannerImageSrc: Primfaktorzerlegung,
    headline: "Primfaktorenzerlegung",
    introText:
        "Was steckt hinter der Zerlegung in Primfaktoren, und warum ist sie für viele mathematische Anwendungen so bedeutsam? Hier erfährst du alles Wichtige!",

    sections: [
        {
            heading: "1. Grundlagen: Warum Primfaktoren?",
            paragraphs: [
                <>
                    Jede natürliche Zahl <InlineMath>{String.raw`n > 1`}</InlineMath> lässt
                    sich in <TippyText content="Z.B. 2, 3, 5, 7 usw.">Primzahlen</TippyText>{" "}
                    zerlegen. Diese Zerlegung ist, abgesehen von der Reihenfolge der Faktoren,
                    eindeutig (Fundamentalsatz der Arithmetik).
                </>,
                <>
                    Die sogenannte <em>vertikale Strichmethode</em> hilft uns beim systematischen
                    Faktorisieren. Man schreibt die Zahl links und die kleinste passende Primzahl
                    rechts, dann wiederholt man es mit dem Quotienten.
                </>,
            ],
        },
        {
            heading: "Wiederholung: Teilbarkeitsregeln",
            paragraphs: [
                <>
                    Nachfolgend findest du zur Wiederholung noch einmal eine Übersicht der Teilbarkeitsregeln.
                </>,
                <>
                    <Box mt={4} textAlign="center">
                        <ChakraImage
                            src={Teilbarkeit}
                            alt="Dreieck mit α, β, γ"
                            maxW="80%"
                            objectFit="contain"
                            margin="0 auto"
                        />
                    </Box>
                </>,
            ],
        },
        {
            heading: "2. Beispiel: Primfaktorzerlegung von 60",
            paragraphs: [
                <>
                    <p>
                        Man erkennt schnell, dass 60 gerade ist und somit zunächst durch{" "}
                        <InlineMath>{String.raw`2`}</InlineMath> geteilt werden kann.
                    </p>
                    <Carousel60 />
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welche Primfaktorzerlegung gehört zu{" "}
                        <InlineMath>{String.raw`60`}</InlineMath>?
                    </>
                ),
                options: [
                    <InlineMath>{String.raw`2^2 * 3 * 5`}</InlineMath>,
                    <InlineMath>{String.raw`2^3 * 5`}</InlineMath>,
                    <InlineMath>{String.raw`3 * 4 * 5`}</InlineMath>,
                    <InlineMath>{String.raw`2 * 3 * 5`}</InlineMath>,

                ],
                correctAnswerIndex: 0,
                explanation: "60 = 2·2·3·5 = 2^2 * 3 * 5.",
            },
        },
        {
            heading: "3. Beispiel: Primfaktorzerlegung von 84",
            paragraphs: [
                <>
                    <p>
                        Die Zahl <InlineMath>{String.raw`84`}</InlineMath> ist ebenfalls gerade.
                        Man teilt zuerst durch 2, bis das Ergebnis ungerade ist, dann testet 3, 5, 7 usw.
                    </p>
                    <Carousel84 />
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Wie sieht die Primfaktorzerlegung von{" "}
                        <InlineMath>{String.raw`84`}</InlineMath> aus?
                    </>
                ),
                // Restored to four answer options:
                options: [
                    <InlineMath>{String.raw`2^2 \times 3 \times 7`}</InlineMath>,
                    <InlineMath>{String.raw`2^3 \times 3 \times 7`}</InlineMath>,
                    <InlineMath>{String.raw`2 \times 2 \times 2 \times 3`}</InlineMath>,
                    <InlineMath>{String.raw`2^2 \times 6 \times 7`}</InlineMath>,
                ],
                correctAnswerIndex: 0,
                explanation: "84 = 4 × 21 = 4 × (3×7). Somit 2^2 × 3 × 7.",
            },
        },
        {
            heading: "4. Beispiel: Primfaktorzerlegung von 105",
            paragraphs: [
                <>
                    <p>
                        Nun betrachten wir <InlineMath>{String.raw`105`}</InlineMath>. Sie ist
                        nicht durch 2 teilbar, aber die Quersumme 1+0+5 = 6 ist durch 3 teilbar.
                        Danach geht es mit 5 und 7 weiter.
                    </p>
                    <Carousel105 />
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText:
                    "Teile 105 wiederholt durch seine Primfaktoren. Was ergibt sich als vollständiges Produkt: ?",
                correctAnswers: ["105", "105."],
                explanation:
                    "105 = 3 × 5 × 7.",
            },
        },
        {
            heading: "5. Beispiel: Primfaktorzerlegung von 48",
            paragraphs: [
                <>
                    <p>
                        <InlineMath>{String.raw`48`}</InlineMath> ist mehrfach durch 2 teilbar.
                        Erst beim Quotienten 3 kommt man zu einer ungeraden Primzahl.
                        Sieh dir den Schritt-für-Schritt-Ablauf an:
                    </p>
                    <Carousel48 />
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        Ist <InlineMath>{String.raw`48`}</InlineMath> das Produkt{" "}
                        <InlineMath>{String.raw`2^4 \times 3`}</InlineMath>?
                    </>
                ),
                isTrue: true,
                explanation:
                    "48 = 2 × 2 × 2 × 2 × 3 = 16 × 3 = 48. Daher 2^4 × 3.",
            },
        },
        {
            heading: "6. Zusammenfassung",
            paragraphs: [
                <>
                    Du hast nun verschiedene Beispiele zur <em>vertikalen Strichmethode</em> gesehen.
                    Jede natürliche Zahl größer als 1 hat eine eindeutige Primfaktorzerlegung.
                </>,
                <>
                    Mithilfe dieser Zerlegung kannst du mühelos das kleinste gemeinsame Vielfache
                    (kgV) oder den größten gemeinsamen Teiler (ggT) berechnen – die wir demnächst lernen werden.
                </>,
            ],
        },
    ],
};

export default PrimfaktorenzerlegungData;

/*
  Below are the 4 slider components (Carousel60, Carousel84, Carousel105, Carousel48).
  Each references images for each step and centers them via display="block" and mx="auto".
*/

function Carousel60() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <Slider {...settings}>
                <div>
                    <p>So schaut die Primfaktorzerlegung für die Zahl 60 aus.</p>
                    <Image
                        src={prime60_3}
                        alt="60 step 3"
                        maxW="80%"
                        display="block"
                        mx="auto"
                    />
                </div>
            </Slider>
        </div>
    );
}

function Carousel84() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <Slider {...settings}>
                <div>
                    <Image
                        src={prime84_1}
                        alt="84 step 1"
                        maxW="80%"
                        display="block"
                        mx="auto"
                    />
                </div>
            </Slider>
        </div>
    );
}

function Carousel105() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <Slider {...settings}>
                <div>
                    <Image
                        src={prime105_1}
                        alt="105 step 1"
                        maxW="80%"
                        display="block"
                        mx="auto"
                    />
                </div>
            </Slider>
        </div>
    );
}

function Carousel48() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <Slider {...settings}>
                <div>
                    <Image
                        src={prime48_1}
                        alt="48 step 1"
                        maxW="80%"
                        display="block"
                        mx="auto"
                    />
                </div>
            </Slider>
        </div>
    );
}
