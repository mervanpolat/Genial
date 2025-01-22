// File: DistributivData.jsx

import React, { useRef, useEffect, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import * as d3 from "d3";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";
import {Box} from "@chakra-ui/react";

/**
 * D3RectPartitionPro
 * Ein d3.js-Minimodul mit Slider zur Illustration des Distributivgesetzes.
 * - Ein großes Rechteck (Breite = m + n, Höhe = k), das in 2 Teilflächen (k×m, k×n) zerlegt wird.
 * - Farbe/Styles in Byrne-Farben:
 *   Byrne's Beige: #faf3dc  (Seiten-Hintergrund)
 *   Byrne's Blue: #30628b
 *   Byrne's Red: #c03b2d
 *   Byrne's Yellow: #f0c34e
 *
 * Wir animieren EINMAL beim ersten Render, spätere Slider-Änderungen sind ohne Transition.
 */
function D3RectPartitionPro({ width = 400, height = 150 }) {
    const svgRef = useRef(null);
    const didMountRef = useRef(false); // um erneutem Animieren zu verhindern

    // mRel: Verhältnis [0..1], wie viel % vom großen Rechteck "m" einnimmt.
    const [mRel, setMRel] = useState(0.5);

    const marginLeft = 10;
    const marginTop = 10;
    const bigWidth = width;
    const bigHeight = height;

    // Byrne-Farben
    const colorYellow = "#f0c34e"; // großes Rechteck
    const colorRed = "#c03b2d";    // Rahmen
    const colorBlue = "#30628b";   // Sub-Rechtecke
    const textColor = "#30628b";   // Text

    // Slider-Handler
    const handleSliderChange = (e) => {
        setMRel(parseFloat(e.target.value));
    };

    useEffect(() => {
        if (!svgRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const subW1 = mRel * bigWidth;      // k×m
        const subW2 = (1 - mRel) * bigWidth; // k×n

        // The main big rect
        const rectAll = svg.append("rect")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("height", bigHeight)
            .attr("fill", colorYellow)
            .attr("stroke", colorRed)
            .attr("stroke-width", 2);

        // First subrect
        const rect1 = svg.append("rect")
            .attr("y", marginTop)
            .attr("height", bigHeight)
            .attr("fill", colorBlue)
            .attr("fill-opacity", 0.6);

        // Second subrect
        const rect2 = svg.append("rect")
            .attr("y", marginTop)
            .attr("height", bigHeight)
            .attr("fill", colorBlue)
            .attr("fill-opacity", 0.3);

        // Falls wir das erste Mal rendern => Transition, sonst direkt
        if (!didMountRef.current) {
            didMountRef.current = true; // Merke: das nächste Mal KEINE Animation

            // Animation
            rectAll
                .attr("width", 0)
                .transition()
                .duration(700)
                .attr("width", subW1 + subW2);

            rect1
                .attr("x", marginLeft)
                .attr("width", 0)
                .transition()
                .duration(700)
                .attr("width", subW1);

            rect2
                .attr("x", marginLeft + subW1)
                .attr("width", 0)
                .transition()
                .duration(700)
                .attr("width", subW2);

        } else {
            // Nur aktualisieren, keine Transition
            rectAll.attr("width", subW1 + subW2);
            rect1
                .attr("x", marginLeft)
                .attr("width", subW1);
            rect2
                .attr("x", marginLeft + subW1)
                .attr("width", subW2);
        }

        // Beschriftung
        svg.append("text")
            .attr("x", marginLeft + 10)
            .attr("y", marginTop + 20)
            .style("fill", textColor)
            .style("font-size", "14px")
            .text("Distributiv: k×(m+n) = k×m + k×n");
    }, [mRel, bigWidth, bigHeight]);

    return (
        <div style={{ textAlign: "center" }}>
            <svg
                ref={svgRef}
                width={width + marginLeft * 2}
                height={height + marginTop * 2}
            />
            <div style={{ marginTop: "8px" }}>
                <label style={{ marginRight: "6px" }}>
                    Verhältnis m / (m+n):
                </label>
                <input
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.01"
                    value={mRel}
                    onChange={handleSliderChange}
                    style={{ width: "150px" }}
                />
                <span style={{ marginLeft: "8px" }}>
          {(mRel * 100).toFixed(0)}%
        </span>
            </div>
        </div>
    );
}

const DistributivData = {
    bannerImageSrc: "/pfad/DistributivesGesetz_Banner.png",
    headline: "Das Distributive Gesetz in der Arithmetik",
    introText:
        "Wie verknüpft man Addition und Multiplikation sinnvoll? Das Distributivgesetz liefert die Antwort und erklärt das Multiplizieren von Summen (Klammermultiplikation).",
    sections: [
        {
            heading: "1. Einführung",
            paragraphs: [
                <>
                    Bisher hast du <TippyText content="z.B. bei Summen und Produkten">
                    kommutative
                </TippyText>{" "}
                    und assoziative Gesetze kennengelernt. Hier lernst du, wie{" "}
                    <InlineMath>{String.raw`\text{Multiplikation}`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`\text{Addition}`}</InlineMath> verknüpft werden: das{" "}
                    <TippyText content="Ein Rechengesetz, das Multiplikation auf Summanden verteilt.">
                        Distributivgesetz
                    </TippyText>
                    .
                </>,
                <>
                    Zwar beweisen wir es hier nicht formal, aber wir illustrieren, warum es
                    „praktisch nützlich“ ist, es als Axiom festzulegen.
                </>,
            ],
        },
        {
            heading: "2. Formulierung des Distributivgesetzes",
            paragraphs: [
                <>
                    Für <InlineMath>{String.raw`k,m,n \in \mathbb{N}`}</InlineMath> gilt:
                </>,
                <>
                    <BlockMath>
                        {String.raw`k \times (m+n) = k \times m + k \times n`}
                    </BlockMath>
                </>,
                <>
                    Man sagt: <em>k wird auf die Summanden m und n „verteilt“</em>. Ob du erst die
                    Summe <InlineMath>{String.raw`m+n`}</InlineMath> bildest und dann mal k
                    rechnest, oder du k×m + k×n addierst – das Ergebnis bleibt gleich.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        Gilt <InlineMath>{String.raw`k \times (m+n) = k\times m + k\times n`}</InlineMath>{" "}
                        stets in <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>?
                    </>
                ),
                isTrue: true,
                explanation:
                    "Ja, das Distributivgesetz verbindet Addition und Multiplikation in allen natürlichen Zahlen.",
            },
        },
        {
            heading: "3. Interaktive Veranschaulichung (d3.js)",
            paragraphs: [
                <>
                    Bewege den Slider, um das Verhältnis von <InlineMath>{String.raw`m`}</InlineMath> zu{" "}
                    <InlineMath>{String.raw`n`}</InlineMath> zu ändern. Das große Rechteck zeigt
                    <InlineMath>{String.raw`k\times(m+n)`}</InlineMath>, aufgeteilt in{" "}
                    <InlineMath>{String.raw`k\times m`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`k\times n`}</InlineMath>.
                </>,
                <>
                    Damit siehst du live, wie das Distributivgesetz funktioniert – einmal animiert,
                    danach ohne erneute Übergänge.
                </>,
                // Hier binden wir unser Minimodul ein (D3RectPartitionPro):
                <Box mt={4} textAlign="center">
                    <D3RectPartitionPro width={400} height={150} />
                </Box>,
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welche Farbflächen zeigen <InlineMath>{String.raw`k\times m`}</InlineMath> bzw.{" "}
                        <InlineMath>{String.raw`k\times n`}</InlineMath>?
                    </>
                ),
                options: [
                    "Zwei unterschiedlich große Kreise",
                    "Zwei Teilrechtecke in einem großen Rechteck",
                    "Ein Quader mit 3 Dimensionen",
                    "Keines davon",
                ],
                correctAnswerIndex: 1,
                explanation:
                    "Die zwei Teilrechtecke (blau) repräsentieren k×m und k×n, das große gelbe Rechteck k×(m+n).",
            },
        },
        {
            heading: "4. Arithmetische Deutung",
            paragraphs: [
                <>
                    Stell dir einen Preis <InlineMath>{String.raw`k`}</InlineMath> pro Stück vor.
                    Kaufst du <InlineMath>{String.raw`m`}</InlineMath> Stück einer Sorte und{" "}
                    <InlineMath>{String.raw`n`}</InlineMath> einer anderen, so kannst du
                    den Gesamtpreis rechnen als{" "}
                    <InlineMath>{String.raw`(m+n)\times k`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`m\times k + n\times k`}</InlineMath>.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText: "Wenn k=4, m=2 und n=3, was ist k×(m+n)? Ergebnis: ?",
                correctAnswers: ["20"],
                explanation:
                    "m+n=5, 4×5=20. Oder 2×4 + 3×4= 8+12=20.",
            },
        },
        {
            heading: "5. Klammermultiplikation (Konsequenz)",
            paragraphs: [
                <>
                    Für <InlineMath>{String.raw`(k+l)\times (m+n)`}</InlineMath> resultiert:
                    <br />
                    <BlockMath>
                        {String.raw`(k+l)\times (m+n) = k\times m + k\times n + l\times m + l\times n`}
                    </BlockMath>
                </>,
                <>
                    „Ausmultiplizieren“ zweier Summen – man kann es durch wiederholtes
                    Distributivgesetz und Kommutativität herleiten. Grafisch: Ein großes Rechteck
                    wird in vier Teilrechtecke zerlegt.
                </>,
            ],
            // kein quiz => user kann finish
        },
    ],
};

export default DistributivData;
