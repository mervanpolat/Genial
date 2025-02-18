import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Box } from "@chakra-ui/react";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

const GanzeZahlenAdditionData = {
  bannerImageSrc: "/assets/images/ganze-zahlen-addition-banner.png",
  headline: "Addition ganzer Zahlen",
  sections: [
    {
      paragraphs: [
        <>
          In dieser Lektion lernst du die grundlegenden Regeln zur Addition
          ganzer Zahlen und das Konzept des neutralen Elements.
        </>,
      ],
    },
    {
      heading: "1. Einführung in die Zahlengerade",
      paragraphs: [
        <>
          <Box mb={3} sx={{ textAlign: "center" }}>
            <img
              src="/assets/images/zahlengerade.png"
              alt="Zahlengerade mit positiven und negativen Zahlen"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <p>
            Um die Addition ganzer Zahlen anschaulich darzustellen, verwenden
            wir eine Zahlengerade:
          </p>
          <ul>
            <li>
              Der Nullpunkt <InlineMath math="0" /> ist unser Ausgangspunkt
            </li>
            <li>Positive Zahlen liegen rechts von 0</li>
            <li>Negative Zahlen liegen links von 0</li>
          </ul>
        </>,
      ],
      quizData: {
        type: "multiplechoice",
        question: (
          <p>
            Was ergibt <InlineMath math="(-7) + 3" />?
          </p>
        ),
        options: [
          { text: <InlineMath math="-4" /> },
          { text: <InlineMath math="10" /> },
          { text: <InlineMath math="4" /> },
          { text: <InlineMath math="-10" /> },
        ],
        correctAnswerIndex: 0,
        explanation:
          "Wenn wir bei -7 starten und 3 Schritte nach rechts gehen, landen wir bei -4.",
      },
    },
    {
      heading: "2. Das neutrale Element",
      paragraphs: [
        <>
          <p>Die Null ist das neutrale Element der Addition:</p>
          <BlockMath math="n + 0 = n" />
          <BlockMath math="0 + n = n" />
        </>,
      ],
    },
    // ... rest of your sections following the same pattern
  ],
};

export default GanzeZahlenAdditionData;
