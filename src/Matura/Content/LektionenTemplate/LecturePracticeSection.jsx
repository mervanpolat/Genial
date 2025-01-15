// File: src/Matura/Content/LektionenTemplate/LecturePracticeSection.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
// Import your existing quiz components
import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "src/components/GenialQuizzes";

/**
 * LecturePracticeSection
 *
 * Renders ONE quiz based on quizData. No "next" button here,
 * just the quiz itself. The parent decides flow.
 *
 * PROPS:
 * - quizData: { type, ... } describing the quiz to show
 * - onAnswered: function => called once the user has answered (correct or not)
 */
function LecturePracticeSection({ quizData, onAnswered = () => {} }) {
    if (!quizData) {
        return null;
    }

    const { type } = quizData;

    // A small helper we can pass to each quiz to signal “User answered”
    const handleQuizComplete = () => {
        // The user has clicked “Überprüfen” and fully answered
        onAnswered();
    };

    switch (type) {
        case "truefalse":
            return (
                <Box>
                    <TrueFalseQuiz
                        statement={quizData.statement}
                        isTrue={quizData.isTrue}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                </Box>
            );

        case "fillblank":
            return (
                <Box>
                    <FillBlankQuiz
                        templateText={quizData.templateText}
                        correctAnswers={quizData.correctAnswers}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                </Box>
            );

        case "reorder":
            return (
                <Box>
                    <ReorderQuiz
                        prompt={quizData.prompt}
                        initialWords={quizData.initialWords}
                        correctOrder={quizData.correctOrder}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                </Box>
            );

        case "matchingpairs":
            return (
                <Box>
                    <MatchingPairsQuiz
                        pairs={quizData.pairs}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                </Box>
            );

        case "mcq":
        default:
            // Default to an MCQ quiz if type is "mcq" or unknown
            return (
                <Box>
                    <MCQQuiz
                        question={quizData.question}
                        options={quizData.options}
                        correctAnswerIndex={quizData.correctAnswerIndex}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                </Box>
            );
    }
}

export default LecturePracticeSection;
