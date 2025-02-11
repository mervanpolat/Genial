import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "../../../components/Quiz";
import NumericInputQuiz from "../../../components/Quiz/NumericInputQuiz.jsx";

/**
 * Renders a single quiz step. If there's a recognized 'type', it delegates
 * to the correct quiz component. Otherwise defaults to MCQ.
 */
function LecturePracticeSection({ quizData, onAnswered = () => {} }) {
    if (!quizData) return null;

    const { type } = quizData;

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

        case "numericinput":
            return (
                <Box>
                    <NumericInputQuiz
                        question={quizData.question}
                        correctNumber={quizData.correctNumber}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                </Box>
            );

        case "info":
            // No actual quiz question. We can auto-complete so user can click “Weiter.”
            useEffect(() => {
                handleQuizComplete();
                // eslint-disable-next-line
            }, []);

            return (
                <Box>
                    {/* For consistency, let's display a heading if provided: */}
                    {quizData.heading && (
                        <Text fontSize="xl" fontWeight="bold" mb={4}>
                            {quizData.heading}
                        </Text>
                    )}
                    {/* The content is normal text or any JSX: */}
                    <Box>{quizData.content}</Box>
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
