// src/components/Quizzes/QuizClassicFourOptions.jsx

import React from "react";
import QuizMultipleChoice from "./QuizMultipleChoice";

/**
 * A specialized version of QuizMultipleChoice
 * that expects exactly 4 answer options.
 */
const QuizClassicFourOptions = (props) => {
    return <QuizMultipleChoice {...props} />;
};

export default QuizClassicFourOptions;
