import React from "react";
import { useParams } from "react-router-dom";
import practiceRegistry from "../practiceRegistry.js";
import LecturePracticePage from "./LecturePracticePage.jsx";

function DynamicPracticePage({ slug: propSlug }) {
    // if slug is not provided as a prop, read from route param
    const routeParams = useParams();
    const slugFromRoute = routeParams.slug || propSlug;

    // get the practice data from the registry
    const data = practiceRegistry[slugFromRoute];

    if (!data) {
        return (
            <div style={{ padding: "2rem", color: "red" }}>
                <strong>No practice data found for slug: "{slugFromRoute}"</strong>
            </div>
        );
    }

    // pass data to the generic practice page
    return (
        <LecturePracticePage
            headline={data.headline}
            introText={data.introText}
            quizSteps={data.quizSteps}
        />
    );
}

export default DynamicPracticePage;
