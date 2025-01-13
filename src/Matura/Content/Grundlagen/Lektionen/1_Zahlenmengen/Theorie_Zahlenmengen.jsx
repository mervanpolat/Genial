// File: src/Matura/Content/Grundlagen/Lektionen/1_Zahlenmengen/Theorie_Zahlenmengen.jsx

import React from "react";
import LecturePage from "../../../../../components/LecturePage/LecturePage.jsx";
import QuizMultipleChoice from "../../../../../components/Quizzes/QuizMultipleChoice.jsx";

// Important: import from ZahlenmengenData.jsx
import ZahlenmengenData from "./ZahlenmengenData.jsx";

const Theorie_Zahlenmengen = () => {
    // 1) Convert the data into the LecturePage's expected "sectionsContent" format
    const sectionsContent = ZahlenmengenData.sections.map((section) => {
        // Create <p> tags for each paragraph
        const paragraphsJSX = section.paragraphs?.map((para, idx) => (
            <p style={{ marginBottom: "1rem" }} key={idx}>
                {para}
            </p>
        ));

        // If there's a 'quiz' object, render QuizMultipleChoice
        let quizJSX = null;
        if (section.quiz) {
            quizJSX = (
                <QuizMultipleChoice
                    question={section.quiz.question}
                    options={section.quiz.options}
                    correctAnswerIndex={section.quiz.correctAnswerIndex}
                    explanation={section.quiz.explanation}
                    onQuizComplete={() => console.log("Quiz abgeschlossen!")}
                />
            );
        }

        // Combine paragraphs + optional quiz
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

    // 2) Handle "Weiter" button callback
    const handleSectionComplete = (sectionIndex) => {
        console.log("User has completed section:", sectionIndex);
        // e.g. save progress, Firestore, localStorage, etc.
    };

    // 3) Render the LecturePage
    return (
        <LecturePage
            bannerImageSrc={ZahlenmengenData.bannerImageSrc}
            headline={ZahlenmengenData.headline}
            introText={ZahlenmengenData.introText}
            sectionsContent={sectionsContent}
            onSectionComplete={handleSectionComplete}
        />
    );
};

export default Theorie_Zahlenmengen;
