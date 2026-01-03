import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
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
                <strong>
                    No practice data found for slug: &quot;{slugFromRoute}&quot;
                </strong>
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

DynamicPracticePage.propTypes = {
    slug: PropTypes.string,
};

export default DynamicPracticePage;
