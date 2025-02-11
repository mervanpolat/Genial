import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    ReorderQuiz,
    MatchingPairsQuiz,
} from "../../../components/Quiz";
import ClozeQuiz from "../../../components/Quiz/ClozeQuiz";
import DragAndDropSortQuiz from "../../../components/Quiz/DragAndDropSortQuiz";
import FlashcardsQuiz from "../../../components/Quiz/FlashcardsQuiz";
import MatchingTextToImagesQuiz from "../../../components/Quiz/MatchingTextToImagesQuiz";

function LectureTheorySection({
                                  heading,
                                  children,
                                  quizData,
                                  onQuizAnswered = () => {},
                              }) {
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
            case "cloze":
                return (
                    <ClozeQuiz
                        clozeText={quizData.clozeText}
                        blanks={quizData.blanks}
                        explanation={quizData.explanation}
                        onQuizComplete={handleQuizComplete}
                    />
                );
            case "dragAndDropSort":
                return (
                    <DragAndDropSortQuiz
                        prompt={quizData.prompt}
                        items={quizData.items}
                        correctOrder={quizData.correctOrder}
                        onQuizComplete={handleQuizComplete}
                    />
                );
            case "flashcards":
                return (
                    <FlashcardsQuiz
                        frontText={quizData.frontText}
                        backText={quizData.backText}
                    />
                );
            case "matchingTextToImages":
                return (
                    <MatchingTextToImagesQuiz
                        items={quizData.items}
                        imageOptions={quizData.imageOptions}
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

    // Map each paragraph
    const paragraphsArray = Array.isArray(children)
        ? children.map((para, i) => <Box key={i} mb={2}>{para}</Box>)
        : [children];

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
