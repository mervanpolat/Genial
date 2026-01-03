import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Box } from "@chakra-ui/react";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";
import LecturePracticePage from "../../../LektionTemplate/LecturePracticePage.jsx";

function GanzeZahlenAddition() {
  const quizSteps = [
    {
      type: "multiplechoice",
      heading: "1. Einführung in die Zahlengerade",
      content: (
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

          <h4>Das neutrale Element</h4>
          <Box mb={3} sx={{ textAlign: "center" }}>
            <img
              src="/assets/images/neutrales-element.png"
              alt="Demonstration des neutralen Elements"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <p>Die Null ist das neutrale Element der Addition:</p>
          <BlockMath math="n + 0 = n" />
          <BlockMath math="0 + n = n" />

          <h4>Gegenzahlen (Opposites)</h4>
          <Box mb={3} sx={{ textAlign: "center" }}>
            <img
              src="/assets/images/gegenzahlen.png"
              alt="Visualisierung von Gegenzahlen"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <p>Jede Zahl hat eine Gegenzahl:</p>
          <ul>
            <li>
              Die Gegenzahl zu <InlineMath math="n" /> ist{" "}
              <InlineMath math="-n" />
            </li>
            <li>
              Zusammen ergeben sie Null: <InlineMath math="n + (-n) = 0" />
            </li>
            <li>
              Beispiel: <InlineMath math="5 + (-5) = 0" />
            </li>
          </ul>

          <h4>Addition auf der Zahlengerade</h4>
          <Box mb={3} sx={{ textAlign: "center" }}>
            <img
              src="/assets/images/addition-visualisierung.png"
              alt="Visualisierung der Addition auf der Zahlengerade"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <p>Bei der Addition bewegen wir uns auf der Zahlengerade:</p>
          <ul>
            <li>Positive Zahlen: Bewegung nach rechts</li>
            <li>Negative Zahlen: Bewegung nach links</li>
          </ul>

          <Box
            sx={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "5px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <strong>Wichtige Eigenschaften:</strong>
            <ul>
              <li>
                Kommutativgesetz: <InlineMath math="a + b = b + a" />
              </li>
              <li>
                Assoziativgesetz:{" "}
                <InlineMath math="(a + b) + c = a + (b + c)" />
              </li>
              <li>
                Neutrales Element: <InlineMath math="a + 0 = a" />
              </li>
            </ul>
          </Box>
        </>
      ),
      question: (
        <p>
          Was ergibt <InlineMath math="(-7) + 3" />?
        </p>
      ),
      options: [
        { id: 0, text: <InlineMath math="-4" /> },
        { id: 1, text: <InlineMath math="10" /> },
        { id: 2, text: <InlineMath math="4" /> },
        { id: 3, text: <InlineMath math="-10" /> },
      ],
      correctAnswerIndex: 0,
      explanation:
        "Wenn wir bei -7 starten und 3 Schritte nach rechts gehen, landen wir bei -4.",
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
      introText="In dieser Lektion lernst du die grundlegenden Regeln zur Addition ganzer Zahlen und das Konzept des neutralen Elements."
      quizSteps={quizSteps}
    />
  );
}

export default GanzeZahlenAddition;
