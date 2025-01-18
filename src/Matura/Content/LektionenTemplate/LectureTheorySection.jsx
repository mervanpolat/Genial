// File: src/Matura/Content/LektionenTemplate/LectureTheorySection.jsx

import React from "react";
import { Box, Text } from "@chakra-ui/react";

import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "../../../components/GenialQuizzes";

// Optional: NumericInputQuiz or other custom quiz
// import NumericInputQuiz from "../../../components/GenialQuizzes/NumericInputQuiz.jsx";

function LectureTheorySection({
                                  heading,
                                  isVisible,
                                  children,
                                  quizData,
                                  onQuizAnswered = () => {},
                              }) {
    if (!isVisible) return null; // Gate: hide if not visible

    // Called after user completes the quiz
    const handleQuizComplete = () => {
        onQuizAnswered();
    };

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
            // case "numericinput":
            //   return (
            //     <NumericInputQuiz
            //       question={quizData.question}
            //       correctNumber={quizData.correctNumber}
            //       explanation={quizData.explanation}
            //       onQuizComplete={handleQuizComplete}
            //     />
            //   );
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
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
                    {heading}
                </Text>
            )}

            <Box mb={4} fontSize={{ base: "xl", md: "xl" }}>
                {children}
            </Box>

            {renderQuiz()}
        </Box>
    );
}

export default LectureTheorySection;
