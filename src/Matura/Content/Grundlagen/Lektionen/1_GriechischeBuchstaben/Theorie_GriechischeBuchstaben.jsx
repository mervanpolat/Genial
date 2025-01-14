// File: src/Matura/Content/Grundlagen/Lektionen/1_GriechischeBuchstaben/Theorie_GriechischeBuchstaben.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import LecturePage from "../../../../../components/LecturePage/LecturePage.jsx";
import {
    MCQQuiz,
    TrueFalseQuiz,
    ReorderQuiz,
    FillBlankQuiz,
    MatchingPairsQuiz
} from "../../../../../components/GenialQuizzes";

import GriechischeBuchstabenData from "./GriechischeBuchstabenData.jsx";

const Theorie_GriechischeBuchstaben = () => {
    const sectionsContent = GriechischeBuchstabenData.sections.map((section) => {
        // paragraphs
        const paragraphsJSX = section.paragraphs?.map((para, idx) => (
            <Box mb="1rem" key={idx}>
                {para}
            </Box>
        ));

        let quizJSX = null;
        if (section.quiz) {
            const quizType = section.quiz.type || "mcq";
            switch (quizType) {
                case "truefalse":
                    quizJSX = (
                        <TrueFalseQuiz
                            statement={section.quiz.statement}
                            isTrue={section.quiz.isTrue}
                            explanation={section.quiz.explanation}
                        />
                    );
                    break;
                case "reorder":
                    quizJSX = (
                        <ReorderQuiz
                            prompt={section.quiz.prompt}
                            initialWords={section.quiz.initialWords}
                            correctOrder={section.quiz.correctOrder}
                            explanation={section.quiz.explanation}
                        />
                    );
                    break;
                case "fillblank":
                    quizJSX = (
                        <FillBlankQuiz
                            templateText={section.quiz.templateText}
                            correctAnswers={section.quiz.correctAnswers}
                            explanation={section.quiz.explanation}
                        />
                    );
                    break;
                case "matchingpairs":
                    quizJSX = (
                        <MatchingPairsQuiz
                            pairs={section.quiz.pairs}
                            explanation={section.quiz.explanation}
                        />
                    );
                    break;
                case "mcq":
                default:
                    quizJSX = (
                        <MCQQuiz
                            question={section.quiz.question}
                            options={section.quiz.options}
                            correctAnswerIndex={section.quiz.correctAnswerIndex}
                            explanation={section.quiz.explanation}
                        />
                    );
                    break;
            }
        }

        const combinedContent = (
            <>
                {paragraphsJSX}
                {quizJSX}
            </>
        );

        return {
            heading: section.heading,
            content: combinedContent,
        };
    });

    const handleSectionComplete = (sectionIndex) => {
        console.log("Section completed:", sectionIndex);
    };

    return (
        <LecturePage
            bannerImageSrc={GriechischeBuchstabenData.bannerImageSrc}
            headline={GriechischeBuchstabenData.headline}
            introText={GriechischeBuchstabenData.introText}
            sectionsContent={sectionsContent}
            onSectionComplete={handleSectionComplete}
        />
    );
};

export default Theorie_GriechischeBuchstaben;
