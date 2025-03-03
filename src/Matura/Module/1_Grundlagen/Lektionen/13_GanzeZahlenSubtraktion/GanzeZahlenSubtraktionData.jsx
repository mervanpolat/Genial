import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Box } from "@chakra-ui/react";
import TippyText from "../../../../../components/TippyText/TippyText.jsx";

const GanzeZahlenSubtraktionData = {
  bannerImageSrc: "/assets/images/ganze-zahlen-subtraktion-banner.png",
  headline: "Subtraktion ganzer Zahlen",
  sections: [
    {
      paragraphs: [
        <p>
          In dieser Lektion lernst du, wie man ganze Zahlen subtrahiert. Mit Hilfe von anschaulichen 
          Beispielen und der Zahlengerade wirst du schnell verstehen, wie die Subtraktion mit 
          positiven und negativen Zahlen funktioniert. Diese Kenntnisse sind nicht nur in der 
          Mathematik wichtig, sondern begegnen uns auch häufig im Alltag.
        </p>,
      ],
    },
    {
      heading: "1. Grundprinzip der Subtraktion",
      paragraphs: [
        <>
          <p>
            Bei der Subtraktion ziehen wir eine Zahl von einer anderen ab. Schauen wir uns die 
            verschiedenen Fälle mit einfachen Beispielen an:
          </p>
          <ul>
            <li>
              Positive Zahlen subtrahieren: <InlineMath math="8 - 5 = 3" />
              <br />
              <small style={{ color: '#666' }}>
                (Wie beim Zählen: Von 8 um 5 nach unten zählen)
              </small>
            </li>
            <li>
              Negative Zahlen subtrahieren: <InlineMath math="8 - (-5) = 13" />
              <br />
              <small style={{ color: '#666' }}>
                (Minus und Minus wird zu Plus: 8 + 5 = 13)
              </small>
            </li>
            <li>
              Von negativen Zahlen subtrahieren: <InlineMath math="(-8) - 5 = -13" />
              <br />
              <small style={{ color: '#666' }}>
                (Von -8 noch 5 weiter runter)
              </small>
            </li>
          </ul>
          <Box p={3} bg="blue.50" borderRadius="md">
            <TippyText tooltipText="Dies ist eine der wichtigsten Regeln bei der Subtraktion ganzer Zahlen!">
              <strong>Goldene Regel:</strong> Das Subtrahieren einer negativen Zahl 
              entspricht dem Addieren der positiven Zahl.
              <br />
              <InlineMath math="a - (-b) = a + b" />
            </TippyText>
          </Box>
        </>,
      ],
    },
    {
      heading: "2. Die Zahlengerade als Hilfsmittel",
      paragraphs: [
        <>
          <Box mb={3} sx={{ textAlign: "center" }}>
            <img
              src="/assets/images/zahlengerade-subtraktion.png"
              alt="Zahlengerade für Subtraktion"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <p>
            Die Zahlengerade ist ein wichtiges Werkzeug zum Verständnis der
            Subtraktion. Denke an einen Thermometer - die Bewegung nach links bedeutet 
            kälter (subtrahieren), nach rechts wärmer (addieren):
          </p>
          <Box p={3} bg="purple.50" borderRadius="md" mb={3}>
            <ul>
              <li>
                Eine positive Zahl subtrahieren: Nach links gehen
                <br />
                Beispiel: <InlineMath math="5 - 3 = 2" /> (3 Schritte nach links)
              </li>
              <li>
                Eine negative Zahl subtrahieren: Nach rechts gehen
                <br />
                Beispiel: <InlineMath math="5 - (-3) = 8" /> (3 Schritte nach
                rechts)
              </li>
            </ul>
          </Box>
          <TippyText tooltipText="Diese Visualisierung hilft dir, die Richtung der Bewegung auf der Zahlengerade zu verstehen">
            <Box p={3} bg="yellow.50" borderRadius="md">
              <p><strong>Merkhilfe:</strong></p>
              <ul>
                <li>Subtrahieren einer positiven Zahl: "Gehe nach links" ⬅️</li>
                <li>Subtrahieren einer negativen Zahl: "Gehe nach rechts" ➡️</li>
              </ul>
            </Box>
          </TippyText>
        </>,
      ],
      quizData: {
        type: "multiplechoice",
        question: (
          <p>
            Berechne: <InlineMath math="(-4) - (-7)" />
          </p>
        ),
        options: [
          { text: <InlineMath math="3" /> },
          { text: <InlineMath math="-11" /> },
          { text: <InlineMath math="-3" /> },
          { text: <InlineMath math="11" /> },
        ],
        correctAnswerIndex: 0,
        explanation:
          "Wenn wir von -4 starten und -7 subtrahieren (was dasselbe ist wie +7 zu addieren), kommen wir bei 3 an. Denn: (-4) - (-7) = (-4) + 7 = 3",
      },
    },
    {
      heading: "3. Wichtige Regeln und Merksätze",
      paragraphs: [
        <>
          <p>
            Für die Subtraktion ganzer Zahlen gelten diese wichtigen Regeln:
          </p>
          <Box p={4} bg="green.50" borderRadius="md">
            <ul>
              <li>
                <TippyText tooltipText="Diese Regel ist besonders wichtig bei Aufgaben mit negativen Zahlen">
                  <strong>Hauptregel:</strong> Minus und Minus ergibt Plus:{" "}
                  <InlineMath math="a - (-b) = a + b" />
                </TippyText>
              </li>
              <li>
                <strong>Umwandlungsregel:</strong> Jede Subtraktion lässt sich als Addition schreiben:{" "}
                <InlineMath math="a - b = a + (-b)" />
              </li>
              <li>
                <strong>Vorzeichenregel:</strong> Bei mehreren Minuszeichen:
                <ul>
                  <li>
                    Zwei Minuszeichen = Plus: <InlineMath math="--a = a" />
                  </li>
                  <li>
                    Drei Minuszeichen = Minus: <InlineMath math="---a = -a" />
                  </li>
                </ul>
              </li>
            </ul>
          </Box>
          <Box mt={4}>
            <p><strong>Schrittweise Beispielrechnungen:</strong></p>
            <Box p={3} bg="gray.50" borderRadius="md">
              <BlockMath math="6 - (-4) = 6 + 4 = 10" />
              <small style={{ color: '#666' }}>Minus und Minus wird zu Plus</small>
              
              <BlockMath math="(-3) - 5 = (-3) + (-5) = -8" />
              <small style={{ color: '#666' }}>Von -3 noch 5 weiter runter</small>
              
              <BlockMath math="(-2) - (-8) = (-2) + 8 = 6" />
              <small style={{ color: '#666' }}>Minus und Minus wird zu Plus</small>
            </Box>
          </Box>
        </>,
      ],
    },
    {
      heading: "4. Anwendungsbeispiele",
      paragraphs: [
        <>
          <p>Die Subtraktion ganzer Zahlen begegnet uns im Alltag häufig:</p>
          <Box p={4} bg="teal.50" borderRadius="md">
            <ul>
              <li>
                <strong>Temperaturunterschiede:</strong> Von <InlineMath math="-2°C" /> auf{" "}
                <InlineMath math="-7°C" />
                <br />
                Berechnung: <InlineMath math="(-7) - (-2) = -5" />
                <br />
                <small style={{ color: '#666' }}>
                  (Es wurde um 5°C kälter, weil wir von -2°C noch 5 Einheiten nach unten gehen)
                </small>
              </li>
              <li>
                <strong>Höhenunterschiede:</strong> Von 100m unter dem Meeresspiegel auf 200m über
                dem Meeresspiegel
                <br />
                Berechnung: <InlineMath math="200 - (-100) = 300" />
                <br />
                <small style={{ color: '#666' }}>
                  (Gesamter Höhenunterschied von 300m, weil wir von -100m bis +200m gehen)
                </small>
              </li>
              <li>
                <strong>Kontostand:</strong> Von <InlineMath math="-150€" /> (Schulden) auf <InlineMath math="50€" /> (Guthaben)
                <br />
                Berechnung: <InlineMath math="50 - (-150) = 200" />
                <br />
                <small style={{ color: '#666' }}>
                  (Eine Verbesserung um 200€, weil wir von -150€ zu +50€ gehen)
                </small>
              </li>
            </ul>
          </Box>
        </>,
      ],
    },
  ],
};

export default GanzeZahlenSubtraktionData;
