// File: PrimzahlUndTeilbarkeitData.jsx

import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";
import Teilbarkeit from "./images/Teilbarkeit.svg";

const PrimzahlUndTeilbarkeitData = {
    bannerImageSrc: Teilbarkeit, // oder bannerImages: ["...", "..."]
    headline: "Teilbarkeit und Primzahlen",
    introText:
        "Wie unterscheidet man Primzahlen und zusammengesetzte Zahlen? Wie funktioniert die Zerlegung in Primfaktoren? Hier erfährst du die wichtigsten Grundlagen zur Teilbarkeit.",

    sections: [
        {
            heading: "1. Divisoren und Notation",
            paragraphs: [
                <>
                    Eine natürliche Zahl <InlineMath>{String.raw`n`}</InlineMath> heißt{" "}
                    <TippyText content="Ein Divisor teilt eine andere Zahl ohne Rest.">
                        Divisor
                    </TippyText>{" "}
                    einer anderen Zahl <InlineMath>{String.raw`m`}</InlineMath>, wenn{" "}
                    <InlineMath>{String.raw`m`}</InlineMath> ein Vielfaches von{" "}
                    <InlineMath>{String.raw`n`}</InlineMath> ist. Man schreibt dann{" "}
                    <InlineMath>{String.raw`n \mid m`}</InlineMath> (
                    <em>“n teilt m”</em>).
                </>,
                <>
                    Beispiele:
                    <br/>
                    <br/>
                    <InlineMath>{String.raw`9\mid 18`}</InlineMath>,{""}
                    <br/>
                    <InlineMath>{String.raw`5\mid 30`}</InlineMath>,{" "}
                    <br/>
                    <InlineMath>{String.raw`7\mid 21`}</InlineMath>.
                    <br/><br/>
                    In all diesen Fällen
                    existiert ein <InlineMath>{String.raw`k`}</InlineMath>, sodass{" "}
                    <InlineMath>{String.raw`m = k\times n`}</InlineMath>.
                </>,
            ],
            // kein quiz => user kann fortfahren
        },
        {
            heading: "2. Primzahlen und zusammengesetzte Zahlen",
            paragraphs: [
                <>
                    Eine <strong>Primzahl</strong> ist eine natürliche Zahl, die genau zwei
                    Divisoren besitzt: 1 und sich selbst. Beispiele sind{" "}
                    <InlineMath>{String.raw`2,3,5,7,11,13,\dots`}</InlineMath>.{" "}
                    <InlineMath>{String.raw`1`}</InlineMath> hingegen ist keine Primzahl, da
                    sie nur einen Divisor (1) hat.
                </>,
                <>
                    <strong>Zusammengesetzte Zahlen </strong>
                     sind dagegen Produkte aus zwei kleineren natürlichen Zahlen. Beispiele:
                    <InlineMath>{String.raw` 10, 25, 42`}</InlineMath>. Weder Primzahlen noch
                    die 1 zählen dazu.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welche Aussage beschreibt eine Primzahl korrekt?
                    </>
                ),
                options: [
                    "Eine Zahl mit genau einem Divisor.",
                    "Eine Zahl mit genau zwei Divisoren: 1 und sie selbst.",
                    "Alle geraden Zahlen außer 0.",
                    "Jede Zahl, die durch 1 teilbar ist.",
                ],
                correctAnswerIndex: 1,
                explanation:
                    "Primzahlen besitzen genau zwei Divisoren: 1 und sich selbst.",
            },
        },
        {
            heading: "3. Primfaktorzerlegung (Fundamentalsatz der Arithmetik)",
            paragraphs: [
                <>
                    Jede positive natürliche Zahl{" "}
                    <InlineMath>{String.raw`> 1`}</InlineMath> lässt sich eindeutig als
                    Produkt von <TippyText content="Z.B. 2, 3, 5, 7, ...">Primzahlen</TippyText>{" "}
                    in Potenzform darstellen:
                </>,
                <>
                    <BlockMath>
                        {String.raw`\displaystyle n \;=\; p_1^{\alpha_1}\times p_2^{\alpha_2}\times \cdots \times p_k^{\alpha_k}`}
                    </BlockMath>
                </>,
                <>
                    Dabei sind alle <InlineMath>{String.raw`p_i`}</InlineMath> Primzahlen,
                    und <InlineMath>{String.raw`\alpha_i`}</InlineMath> sind natürliche
                    Exponenten.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText:
                    "Betrachte die Zahl 12. Man kann sie als 2² · 3¹ zerlegen. Welches Produkt erhältst du: ?",
                correctAnswers: ["12", "12."],
                explanation:
                    "2² = 4, 4 × 3 = 12. So entsteht aus den Primfaktoren 2 und 3 erneut 12.",
            },

        },
        {
            heading: "4. Wichtige Teilbarkeitsregeln",
            paragraphs: [
                <>
                    <ul>
                        <li>
                            <strong>Durch 2</strong>: Die letzte Ziffer ist gerade (
                            <InlineMath>{String.raw`0,2,4,6,8`}</InlineMath>).
                        </li>
                        <li>
                            <strong>Durch 5</strong>: Die letzte Ziffer ist{" "}
                            <InlineMath>{String.raw`0`}</InlineMath> oder{" "}
                            <InlineMath>{String.raw`5`}</InlineMath>.
                        </li>
                        <li>
                            <strong>Durch 3</strong>: Die Quersumme aller Ziffern ist durch 3
                            teilbar.
                        </li>
                    </ul>
                </>,
                <>
                    Beispiel: <InlineMath>{String.raw`54`}</InlineMath> ist durch 3 teilbar,
                    weil <InlineMath>{String.raw`5+4=9`}</InlineMath> ebenfalls durch 3
                    teilbar ist.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        Hat eine Zahl als letzte Ziffer 0 oder 5, so ist sie durch{" "}
                        <InlineMath>{String.raw`5`}</InlineMath> teilbar.
                    </>
                ),
                isTrue: true,
                explanation:
                    "Das ist die bekannte Regel: Jede Endziffer von 0 oder 5 deutet auf Teilbarkeit durch 5 hin.",
            },
        },
        {
            heading: "Fazit",
            paragraphs: [
                <>
                    Du kennst nun die Begriffe <em>Divisor</em>, <em>Primzahl</em> und{" "}
                    <em>Primfaktorzerlegung</em>. Außerdem hast du grundlegende
                    Teilbarkeitsregeln (2, 3, 5) aufgefrischt. In der nächsten Lektion siehst du
                    praktische Beispiele über Primfaktorenzerlegung.
                </>,
            ],
            // kein quiz => user kann abschließen
        },
    ],
};

export default PrimzahlUndTeilbarkeitData;
