// File: src/Matura/Module/DynamicTheoryPage.jsx

import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import theoryRegistry from "./TheoryRegistry.js";
import LectureTheoryPage from "./LektionTemplate/LectureTheoryPage.jsx";

function DynamicTheoryPage() {
    const { slug } = useParams();
    const data = theoryRegistry[slug];

    if (!data) {
        return (
            <Box p={6} color="red">
                <strong>Theory not found for slug: “{slug}”</strong>
            </Box>
        );
    }

    // Hier leiten wir das Data-Objekt (mit bannerImageSrc, headline, introText, sections)
    // einfach an LectureTheoryPage weiter. Dort wird quizData korrekt erkannt.
    return (
        <LectureTheoryPage
            bannerImageSrc={data.bannerImageSrc}
            bannerImages={data.bannerImages} // optional, falls du arrays hast
            headline={data.headline}
            introText={data.introText}
            sectionsContent={data.sections}  // <-- WICHTIG
            onSectionComplete={(sectionIndex) => {
                console.log("Section completed:", sectionIndex, "for slug:", slug);
            }}
        />
    );
}

export default DynamicTheoryPage;
