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
        <>
          In dieser Lektion lernst du, wie man ganze Zahlen subtrahiert. Wir
          werden uns ansehen, wie man mit positiven und negativen Zahlen rechnet
          und welche Regeln dabei zu beachten sind. Diese Kenntnisse sind
          grundlegend für viele weitere mathematische Konzepte.
        </>,
      ],
    },
    {
      heading: "1. Grundprinzip der Subtraktion",
      paragraphs: [
        <>
          <p>
            Bei der Subtraktion ziehen wir eine Zahl von einer anderen ab. Dabei
            gibt es verschiedene Fälle zu beachten:
          </p>
          <ul>
            <li>
              Positive Zahlen subtrahieren: <InlineMath math="8 - 5 = 3" />
            </li>
            <li>
              Negative Zahlen subtrahieren: <InlineMath math="8 - (-5) = 13" />
            </li>
            <li>
              Von negativen Zahlen subtrahieren:{" "}
              <InlineMath math="(-8) - 5 = -13" />
            </li>
          </ul>
          <p>
            <TippyText tooltipText="Merke dir: Wenn du eine negative Zahl subtrahierst, wird daraus eine Addition!">
              Wichtiger Hinweis: Das Subtrahieren einer negativen Zahl
              entspricht dem Addieren der positiven Zahl.
            </TippyText>
          </p>
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
            Subtraktion:
          </p>
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
          <ul>
            <li>
              <TippyText tooltipText="Diese Regel ist besonders wichtig bei Aufgaben mit negativen Zahlen">
                Minus und Minus ergibt Plus:{" "}
                <InlineMath math="a - (-b) = a + b" />
              </TippyText>
            </li>
            <li>
              Jede Subtraktion lässt sich als Addition schreiben:{" "}
              <InlineMath math="a - b = a + (-b)" />
            </li>
            <li>
              Bei mehreren Minuszeichen gilt:
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
          <p>Beispielrechnungen:</p>
          <BlockMath math="6 - (-4) = 6 + 4 = 10" />
          <BlockMath math="(-3) - 5 = (-3) + (-5) = -8" />
          <BlockMath math="(-2) - (-8) = (-2) + 8 = 6" />
        </>,
      ],
    },
    {
      heading: "4. Anwendungsbeispiele",
      paragraphs: [
        <>
          <p>Die Subtraktion ganzer Zahlen begegnet uns im Alltag häufig:</p>
          <ul>
            <li>
              Temperaturunterschiede: Von <InlineMath math="-2°C" /> auf{" "}
              <InlineMath math="-7°C" />
              <br />
              Berechnung: <InlineMath math="(-7) - (-2) = -5" /> (Es wurde um
              5°C kälter)
            </li>
            <li>
              Höhenunterschiede: Von 100m unter dem Meeresspiegel auf 200m über
              dem Meeresspiegel
              <br />
              Berechnung: <InlineMath math="200 - (-100) = 300" />{" "}
              (Höhenunterschied von 300m)
            </li>
          </ul>
        </>,
      ],
    },
  ],
};

export default GanzeZahlenSubtraktionData;
