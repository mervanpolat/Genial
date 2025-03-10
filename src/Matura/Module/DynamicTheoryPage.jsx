// File: src/Matura/Module/DynamicTheoryPage.jsx

import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import theoryRegistry from "./TheoryRegistry.js";
import LectureTheoryPage from "./LektionTemplate/LectureTheoryPage.jsx";

/**
 * Loads the correct data from the registry based on the URL's :slug,
 * then renders <LectureTheoryPage> with that data.
 */
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

    // We pass data.bannerImageSrc, data.introText, data.sections, etc. to LectureTheoryPage
    return (
        <LectureTheoryPage
            bannerImageSrc={data.bannerImageSrc}
            bannerImages={data.bannerImages} // optional
            headline={data.headline}
            introText={data.introText}
            sectionsContent={data.sections}
            onSectionComplete={(sectionIndex) => {
                console.log("Section completed:", sectionIndex, "for slug:", slug);
            }}
        />
    );
}

export default DynamicTheoryPage;
