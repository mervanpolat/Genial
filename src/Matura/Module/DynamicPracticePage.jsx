// File: src/Matura/Module/DynamicPracticePage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import practiceRegistry from "./PracticeRegistry.js";

function DynamicPracticePage() {
    const { slug } = useParams();
    const PracticeComponent = practiceRegistry[slug];

    if (!PracticeComponent) {
        return (
            <div style={{ padding: "1.5rem", color: "red" }}>
                <strong>Practice not found for slug: “{slug}”</strong>
            </div>
        );
    }

    // Render the appropriate "Praxis_..." component:
    return <PracticeComponent />;
}

export default DynamicPracticePage;
