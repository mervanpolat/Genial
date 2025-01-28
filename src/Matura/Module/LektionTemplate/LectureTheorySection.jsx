// File: src/Matura/Module/LektionTemplate/LectureTheorySection.jsx

import React from "react";
import { Box, Text } from "@chakra-ui/react";

import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "../../../components/GenialQuizzes";

/**
 * Renders a single theory section (heading, paragraphs, optional quiz).
 * The `isVisible` gating is commented out. If needed, you could re-enable it,
 * but you must coordinate with LectureTheoryPage so they don’t conflict.
 */
function LectureTheorySection({
                                  heading,
                                  isVisible, // not used here, but could be used if you want an internal gating
                                  children,
                                  quizData,
                                  onQuizAnswered = () => {},
                              }) {
    // If you were using internal gating:
    // if (!isVisible) return null;

    const handleQuizComplete = () => {
        onQuizAnswered();
    };

    /** Renders the correct quiz type, if any */
    const renderQuiz = () => {
        if (!quizData) return null;

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

    // Make sure paragraphs each have a unique key
    const paragraphsArray = Array.isArray(children)
        ? children.map((para, i) => (
            <Box key={`para-${i}`} mb={2}>
                {para}
            </Box>
        ))
        : children;

    return (
        <Box as="section" mb={8}>
            {heading && (
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
                    {heading}
                </Text>
            )}

            <Box mb={4} fontSize={{ base: "xl", md: "xl" }}>
                {paragraphsArray}
            </Box>

            {renderQuiz()}
        </Box>
    );
}

export default LectureTheorySection;
