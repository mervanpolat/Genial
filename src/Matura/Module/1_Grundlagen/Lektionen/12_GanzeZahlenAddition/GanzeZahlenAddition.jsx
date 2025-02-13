import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import LecturePracticePage from "../../../../../components/LecturePracticePage";
import TippyText from "../../../../../components/TippyText";

function GanzeZahlenAddition() {
  const quizSteps = [
    {
      type: "multiplechoice",
      heading: "1. Addition ganzer Zahlen",
      content: (
        <>
          <p>Bei der Addition ganzer Zahlen gelten bestimmte Regeln:</p>
          <p>
            - Positive Zahlen plus positive Zahlen ergeben positive Zahlen
            <br />
            - Negative Zahlen plus negative Zahlen ergeben negative Zahlen
            <br />- Bei unterschiedlichen Vorzeichen subtrahiert man die Beträge
          </p>
        </>
      ),
      question: (
        <>
          Was ergibt <InlineMath>{String.raw`(-5) + (+3)`}</InlineMath>?
        </>
      ),
      options: [
        <InlineMath>{String.raw`-2`}</InlineMath>,
        <InlineMath>{String.raw`-8`}</InlineMath>,
        <InlineMath>{String.raw`+2`}</InlineMath>,
        <InlineMath>{String.raw`+8`}</InlineMath>,
      ],
      correctAnswerIndex: 0,
      explanation:
        "Bei unterschiedlichen Vorzeichen subtrahiert man die Beträge: |-5| - |3| = 5 - 3 = 2, das Vorzeichen kommt von der betragsmäßig größeren Zahl (-5).",
    },
    {
      type: "truefalse",
      heading: "2. Kommutativgesetz der Addition",
      content: (
        <>
          <p>
            Das{" "}
            <TippyText content="Vertauschungsgesetz">
              Kommutativgesetz
            </TippyText>{" "}
            besagt, dass die Reihenfolge bei der Addition keine Rolle spielt.
          </p>
          <BlockMath>{String.raw`a + b = b + a`}</BlockMath>
        </>
      ),
      statement: (
        <>
          Gilt: <InlineMath>{String.raw`(-3) + (+7) = (+7) + (-3)`}</InlineMath>
          ?
        </>
      ),
      isTrue: true,
      explanation:
        "Das Kommutativgesetz gilt auch für ganze Zahlen. Beide Rechnungen ergeben +4.",
    },
    {
      type: "fillblank",
      heading: "3. Gegenzahlen",
      content: (
        <>
          <p>
            Zwei Zahlen sind <em>Gegenzahlen</em>, wenn ihre Summe 0 ergibt.
          </p>
          <p>
            Beispiel: <InlineMath>{String.raw`5 + (-5) = 0`}</InlineMath>
          </p>
        </>
      ),
      templateText: "Die Gegenzahl zu -8 ist ___.",
      correctAnswers: ["8", "+8"],
      explanation:
        "Die Gegenzahl zu einer negativen Zahl ist die entsprechende positive Zahl.",
    },
    {
      type: "matchingpairs",
      heading: "4. Rechenregeln",
      content: (
        <>
          <p>Wichtige Konzepte bei der Addition ganzer Zahlen:</p>
        </>
      ),
      pairs: [
        { left: "(-2) + (-3)", right: "-5" },
        { left: "(-4) + (+4)", right: "0" },
        { left: "(+5) + (+2)", right: "+7" },
      ],
      explanation:
        "Bei gleichen Vorzeichen addiert man die Beträge, bei verschiedenen subtrahiert man sie.",
    },
  ];

  return (
    <LecturePracticePage
      headline="Addition ganzer Zahlen"
      introText="In dieser Lektion lernst du die grundlegenden Regeln zur Addition ganzer Zahlen."
      quizSteps={quizSteps}
    />
  );
}

export default GanzeZahlenAddition;
