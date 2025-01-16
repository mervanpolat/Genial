// File: src/Matura/Content/LektionenTemplate/LecturePracticeSection.jsx

import React from "react";
import { Box } from "@chakra-ui/react";

// Import your quiz components from the correct relative path
import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "../../../components/GenialQuizzes";

/**
 * LecturePracticeSection
 *
 * Renders exactly ONE quiz (the current step).
 * onAnswered() => called once the user has answered (correct or not).
 */
function LecturePracticeSection({ quizData, onAnswered = () => {} }) {
    if (!quizData) return null;

    const { type } = quizData;

    // Called after user checks an answer in each quiz
    const handleQuizComplete = () => {
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
