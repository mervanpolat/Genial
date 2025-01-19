// File: src/Matura/Content/1_Grundlagen/Lektionen/4_NatZahlenArith/NatZahlenArithData.jsx

import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const NatZahlenArithData = {
    bannerImageSrc: "/assets/images/NatZahlenArith_Banner.png", // Beispielpfad
    headline: "Natürliche Zahlen und Grundrechenarten",
    introText: `In diesem Abschnitt besprechen wir die wichtigsten Eigenschaften der natürlichen Zahlen, darunter Diskretheit, Ordnungsrelation und die Bedeutung von neutralen Elementen beim Addieren und Multiplizieren.`,

    sections: [
        {
            heading: "1. Einführung in die natürlichen Zahlen",
            paragraphs: [
                <>
                    Die <InlineMath>{String.raw`\text{natürlichen Zahlen}`}</InlineMath> (
                    <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>) umfassen{" "}
                    <InlineMath>{String.raw`0,1,2,3,\dots`}</InlineMath>. Du weißt bereits,
                    dass sie in einer <em>aufsteigenden Reihenfolge</em> angeordnet werden können:{" "}
                    <InlineMath>{String.raw`0 < 1 < 2 < 3 < \dots`}</InlineMath>. <br/>Dieses Merkmal
                    bezeichnet man als <strong>geordnete Menge</strong>.
                </>,
                <>
                    <br/><br/>Weiterhin ist <InlineMath>{String.raw`\mathbb{N}`}</InlineMath> eine{" "}
                    <strong>diskrete Menge</strong>. Das heißt, zwischen zwei natürlichen Zahlen
                    liegen keine weiteren „Zahlen“ dieser Art. Im Gegensatz dazu kennst du bestimmt
                    die reellen Zahlen <InlineMath>{String.raw`\mathbb{R}`}</InlineMath>, die{" "}
                    <em>kontinuierlich</em> sind.
                </>,
            ],
        },
        {
            heading: "2. Neutrale Elemente und Geschlossenheit",
            paragraphs: [
                <>
                    Zu den wichtigsten Grundlagen gehört, dass{" "}
                    <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>{" "}
                    <strong>geschlossen</strong> ist unter Addition und Multiplikation. Mit anderen
                    Worten: Wenn du zwei natürliche Zahlen addierst oder multiplizierst, bleibt das
                    Ergebnis in <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>.
                </>,
                <>
                    <br/><br/>Zusätzlich kennen wir sogenannte <strong>neutrale Elemente</strong>:<br/>
                </>,
                <>
                    - <InlineMath>{String.raw`0`}</InlineMath> ist das neutrale Element der Addition, da{" "}
                    <InlineMath>{String.raw`n + 0 = n`}</InlineMath> für alle{" "}
                    <InlineMath>{String.raw`n \in \mathbb{N}`}</InlineMath>.
                </>,
                <>
                    <br/>- <InlineMath>{String.raw`1`}</InlineMath> ist das neutrale Element der Multiplikation,
                    da <InlineMath>{String.raw`n \cdot 1 = n`}</InlineMath> für alle{" "}
                    <InlineMath>{String.raw`n \in \mathbb{N}`}</InlineMath>.
                </>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welches neutrale Element besitzt die Addition in{" "}
                        <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>?
                    </>
                ),
                options: [
                    <InlineMath>{String.raw`0`}</InlineMath>,
                    <InlineMath>{String.raw`1`}</InlineMath>,
                    <InlineMath>{String.raw`2`}</InlineMath>,
                    "Keines davon",
                ],
                correctAnswerIndex: 0,
                explanation: (
                    <>
                        <InlineMath>{String.raw`0`}</InlineMath> addiert zu jeder natürlichen Zahl{" "}
                        <InlineMath>{String.raw`n`}</InlineMath> ergibt wieder{" "}
                        <InlineMath>{String.raw`n`}</InlineMath>, somit ist 0 das neutrale Element.
                    </>
                ),
            },
        },
        {
            heading: "3. Multiplikation und Potenzen",
            paragraphs: [
                <>
                    Die <strong>Multiplikation</strong> kannst du dir als{" "}
                    <em>wiederholtes Addieren</em> vorstellen:{" "}
                    <InlineMath>{String.raw`5 \times 3 = 3 + 3 + 3 + 3 + 3`}</InlineMath>. Noch einen
                    Schritt weiter gehen die <strong>Potenzen</strong>, die man als <em>wiederholte
                    Multiplikation</em> definieren kann. Zum Beispiel ist{" "}
                    <InlineMath>{String.raw`5^3 = 5 \times 5 \times 5`}</InlineMath>.
                </>,
                <>
                    <br/><br/><strong>Begriffe:</strong> Beim Addieren heißt jedes Summenglied ein{" "}
                    „Term“ und das Ergebnis die „Summe“. Beim Multiplizieren nennen wir die
                    einzelnen Zahlen „Faktoren“ und das Ergebnis das „Produkt“.
                </>,
                // Illustrationshinweis:
                /*
                  <Box mt={4} textAlign="center">
                    <Image
                      src="/assets/images/MultiplikationBeispiel.png"
                      alt="Illustration zu 5x3"
                      maxW="400px"
                      objectFit="contain"
                    />
                  </Box>
                */
            ],
        },
        {
            heading: "4. Rechenregeln & Vorrang",
            paragraphs: [
                <>
                    Du kennst es sicher aus der Schule: Bei einem Ausdruck wie{" "}
                    <InlineMath>{String.raw`4 \times 2 + 5`}</InlineMath> rechnet man zuerst die
                    Multiplikation und erhält <InlineMath>{String.raw`8 + 5 = 13`}</InlineMath>. Man
                    sagt: <strong>Multiplikation</strong> hat einen höheren Vorrang als{" "}
                    <strong>Addition</strong>. Die Idee dahinter: Durch
                    <em>wiederholtes Addieren</em> ist die Multiplikation nur eine
                    „erweiterte Form“ von Addition.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText:
                    "Welche Zahl erhält man bei 4 x 2 + 5 = ?",
                correctAnswers: ["13"],
                explanation: (
                    <>
                        Da <InlineMath>{String.raw`4 \times 2 = 8`}</InlineMath> zuerst gerechnet wird,
                        folgt <InlineMath>{String.raw`8 + 5 = 13`}</InlineMath>.
                    </>
                ),
            },
        },
        {
            heading: "5. Zusammenfassung",
            paragraphs: [
                <>
                    Im weiteren Verlauf dieses Kurses wirst du die Konzepte in der
                    Arithmetik immer sicherer anwenden können.
                </>,
                <>
                    Wir haben gesehen: <InlineMath>{String.raw`\mathbb{N}`}</InlineMath> ist
                    geordnet, diskret und besitzt neutrale Elemente für Addition bzw.
                    Multiplikation. So sind die Grundlagen gelegt, um später komplexere
                    Strukturen und Beweise zu verstehen.
                </>,
            ],
            // kein quiz => Ende
        },
    ],
};

export default NatZahlenArithData;
