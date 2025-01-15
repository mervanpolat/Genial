// File: src/Matura/Content/DynamicTheoryPage.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import theoryRegistry from "./TheoryRegistry.js";

// Reusable theory layout
import LectureTheoryPage from "./LektionenTemplate/LectureTheoryPage.jsx";

// Quizzes + optional interactive element
import {
    MCQQuiz,
    TrueFalseQuiz,
    ReorderQuiz,
    FillBlankQuiz,
    MatchingPairsQuiz
} from "../../components/GenialQuizzes";
import SecantTangentVisualization from "../../components/InteractiveElements/SecantTangentVisualization.jsx";

function DynamicTheoryPage() {
    // Slug from /theory/:slug
    const { slug } = useParams();
    // Grab the data from the registry
    const data = theoryRegistry[slug];

    if (!data) {
        return (
            <Box p={6} color="red">
                <strong>Theory not found for slug: “{slug}”</strong>
            </Box>
        );
    }

    // Build sections for LectureTheoryPage
    const sectionsContent = data.sections.map((section) => {
        // Paragraphs
        const paragraphsJSX = section.paragraphs?.map((para, idx) => (
            <Box mb="1rem" key={idx} fontSize="xl">
                {para}
            </Box>
        ));

        // Possibly a quiz
        let quizJSX = null;
        if (section.quiz) {
            switch (section.quiz.type) {
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

        // Possibly a special Secant/Tangent example
        let analysisJSX = null;
        if (section.includeSecantTangent) {
            analysisJSX = (
                <Box mt={6}>
                    <SecantTangentVisualization />
                </Box>
            );
        }

        // Combine paragraphs, quiz, analysis
        const combinedContent = (
            <>
                {paragraphsJSX}
                {quizJSX}
                {analysisJSX}
            </>
        );

        return {
            heading: section.heading,
            content: combinedContent,
        };
    });

    // Callback for finishing a section
    const handleSectionComplete = (sectionIndex) => {
        console.log("Section completed:", sectionIndex, "for slug=", slug);
    };

    return (
        <LectureTheoryPage
            bannerImageSrc={data.bannerImageSrc}
            headline={data.headline}
            introText={data.introText}
            sectionsContent={sectionsContent}
            onSectionComplete={handleSectionComplete}
        />
    );
}

export default DynamicTheoryPage;
