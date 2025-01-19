// File: src/Matura/Content/1_Grundlagen/Lektionen/KommutativGesetze/KommutativGesetzData.jsx

import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

// Füge bitte den korrekten Import-Pfad für TippyText ein:
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

const KommutativGesetzData = {
    bannerImageSrc: "/assets/images/CommBanner.png",
    headline: "Kommutative Gesetze in der Arithmetik",
    introText:
        "In Hola dieser Lektion betrachten wir die Kommutativität von Addition und Multiplikation bei natürlichen Zahlen – warum das sinnvoll ist und wie sich das geometrisch sowie anschaulich begründen lässt.",

    sections: [
        {
            heading: "1. Einführung",
            paragraphs: [
                <>
                    Die Arithmetik natürlicher Zahlen (
                    <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>) umfasst Addition und
                    Multiplikation. Im Laufe des Kurses wirst du merken, dass dieselben
                    Eigenschaften auch für die reellen Zahlen gelten. Hier lernst du zunächst,
                    warum gewisse <TippyText content="Grundannahmen oder Postulate, die ohne Beweis akzeptiert werden.">Axiome</TippyText>
                    {" "}in der Arithmetik sinnvoll sind.
                </>,
                <>
                    Inbesondere betrachten wir, dass das Ergebnis einer Operation bei
                    <strong> vertauschbaren </strong>(
                    <TippyText content="Die Eigenschaft, dass die Reihenfolge der Operanden das Ergebnis nicht beeinflusst.">
                        Kommutativität
                    </TippyText>
                    ) kein anderes Resultat liefert – z. B., ob wir erst <InlineMath>{String.raw`a`}</InlineMath>{" "}
                    und dann <InlineMath>{String.raw`b`}</InlineMath> nehmen oder umgekehrt.
                </>,
            ],
            // kein quizData => user proceeds
        },
        {
            heading: "2. Kommutativität der Addition",
            paragraphs: [
                <>
                    Die Addition in <InlineMath>{String.raw`\mathbb{N}`}</InlineMath> heißt{" "}
                    <em>kommutativ</em>, weil
                    <InlineMath>{String.raw`\,a + b = b + a\,`}</InlineMath> gilt. Stelle dir zwei
                    Gruppen von Objekten vor: Eine mit <InlineMath>{String.raw`m`}</InlineMath>{" "}
                    Elementen, eine mit <InlineMath>{String.raw`n`}</InlineMath> Elementen. Ob du
                    zuerst die <InlineMath>{String.raw`m`}</InlineMath> oder{" "}
                    <InlineMath>{String.raw`n`}</InlineMath>-Gruppe nimmst, nach dem Zusammenfügen
                    bleibt die Gesamtanzahl gleich.
                </>,
                // Illustrationshinweis:
                /*
                  <Box mt={4} textAlign="center">
                    // Z.B. Bild, das zwei Gruppen von Objekten zeigt
                  </Box>
                */
            ],
            quizData: {
                type: "mcq",
                question: (
                    <>
                        Welche Aussage beschreibt die Kommutativität der Addition korrekt?
                    </>
                ),
                options: [
                    "Man darf die Reihenfolge beim Addieren nicht vertauschen.",
                    <>
                        <InlineMath>{String.raw`a+b = b+a`}</InlineMath> für alle{" "}
                        <InlineMath>{String.raw`a,b`}</InlineMath> in{" "}
                        <InlineMath>{String.raw`\mathbb{N}`}</InlineMath>.
                    </>,
                    "Eine Gruppe hat immer mehr Elemente als die andere.",
                    "Addition funktioniert nur für gleiche Objekte.",
                ],
                correctAnswerIndex: 1,
                explanation:
                    "Kommutative Gesetze beschreiben, dass sich die Reihenfolge der Summanden nicht aufs Ergebnis auswirkt.",
            },
        },
        {
            heading: "3. Kommutativität der Multiplikation",
            paragraphs: [
                <>
                    Ähnlich lässt sich die Multiplikation als „wiederholte Addition“
                    auffassen: <InlineMath>{String.raw`5\times3 = 3+3+3+3+3`}</InlineMath>. Doch
                    das Vertauschen der Faktoren (<InlineMath>{String.raw`a\times b`}</InlineMath>{" "}
                    vs. <InlineMath>{String.raw`b\times a`}</InlineMath>) führt stets zum gleichen
                    Produkt.
                </>,
                <>
                    Geometrisch: Denk an ein Rechteck mit Breite <InlineMath>{String.raw`a`}</InlineMath>{" "}
                    und Höhe <InlineMath>{String.raw`b`}</InlineMath>. Sein Flächeninhalt ist{" "}
                    <InlineMath>{String.raw`a\times b`}</InlineMath>. Wenn du das Rechteck um 90°
                    drehst, werden Breite und Höhe vertauscht – doch die Fläche bleibt gleich.
                </>,
            ],
            quizData: {
                type: "truefalse",
                statement: (
                    <>
                        <InlineMath>{String.raw`a\times b = b\times a`}</InlineMath> gilt für alle{" "}
                        <InlineMath>{String.raw`a,b\in\mathbb{N}`}</InlineMath>.
                    </>
                ),
                isTrue: true,
                explanation:
                    "Man kann das Rechteck-Argument oder die Idee von 'wiederholtem Addieren' als Begründung heranziehen.",
            },
        },
        {
            heading: "4. Bedeutung dieser Gesetze",
            paragraphs: [
                <>
                    Die Kommutativität von Addition und Multiplikation ist einer der Gründe, warum wir
                    nicht alle möglichen Rechenweisen einzeln beweisen müssen – wir können sie als
                    „Axiome“ festlegen und darauf aufbauen.
                </>,
                <>
                    In echten Anwendungen (z. B. Fläche eines Rechtecks) zeigt sich, dass{" "}
                    <strong>Vertauschungen</strong> keinen Einfluss auf das Endergebnis haben.
                </>,
            ],
            quizData: {
                type: "fillblank",
                templateText: "Vertausche die Faktoren: (3 x 4) = (4 x ?) = ?",
                correctAnswers: ["3", "3", "12"],
                explanation:
                    "3×4=12 genauso wie 4×3=12. Beide Reihenfolgen liefern das gleiche Produkt, 12.",
            },
        },
        {
            heading: "Fazit",
            paragraphs: [
                <>
                    Du hast gesehen, wie die Kommutativität von Addition und Multiplikation
                    anschaulich erklärt werden kann – entweder durch das Zusammenfügen von Gruppen
                    oder durch ein Rechteck, das man einfach umdreht. Auf dieser Grundlage bauen viele
                    weitere Gesetze und Beweise in der Algebra auf.
                </>,
                <>
                    Die Kommutativität mag selbstverständlich wirken, ist aber keineswegs banal und
                    in anderen Strukturen (z. B. Matrizenmultiplikation) gilt sie z. B. <em>nicht</em>!
                </>,
            ],
            // kein quiz => Ende
        },
    ],
};

export default KommutativGesetzData;
