// File: src/Matura/Content/LektionenTemplate/LectureTheorySection.jsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";

// IMPORTANT: use a relative path from your folder to the GenialQuizzes index
import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "../../../components/GenialQuizzes";

/**
 * LectureTheorySection
 * Renders heading, paragraphs, optional quiz.
 * If a quiz is present => once answered => calls onQuizAnswered().
 *
 * PROPS:
 * - heading: string
 * - isVisible: boolean => if false, we render nothing
 * - children: paragraphs (JSX)
 * - quizData: optional object => { type: "mcq", ... }
 * - onQuizAnswered: function => called once quiz is fully answered
 */
function LectureTheorySection({
                                  heading,
                                  isVisible,
                                  children,
                                  quizData,
                                  onQuizAnswered = () => {},
                              }) {
    if (!isVisible) return null;

    const renderQuiz = () => {
        if (!quizData) return null;

        const handleQuizComplete = () => onQuizAnswered();

        switch (quizData.type) {
            case "truefalse":
                return (
                    <TrueFalseQuiz
                        statement={quizData.statement}
                        isTrue={quizData.isTrue}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                );
            case "fillblank":
                return (
                    <FillBlankQuiz
                        templateText={quizData.templateText}
                        correctAnswers={quizData.correctAnswers}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                );
            case "reorder":
                return (
                    <ReorderQuiz
                        prompt={quizData.prompt}
                        initialWords={quizData.initialWords}
                        correctOrder={quizData.correctOrder}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                );
            case "matchingpairs":
                return (
                    <MatchingPairsQuiz
                        pairs={quizData.pairs}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                );
            case "mcq":
            default:
                return (
                    <MCQQuiz
                        question={quizData.question}
                        options={quizData.options}
                        correctAnswerIndex={quizData.correctAnswerIndex}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                );
        }
    };

    return (
        <Box as="section" mb={8}>
            {heading && (
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={7}>
                    {heading}
                </Text>
            )}
            <Box mb={4}>{children}</Box>

            {/* If there's a quiz, render it */}
            {renderQuiz()}
        </Box>
    );
}

export default LectureTheorySection;
