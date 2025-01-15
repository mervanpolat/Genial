// File: src/Matura/Content/1_Grundlagen/Lektionen/1_GriechischeBuchstaben/Praxis_GriechischeBuchstaben.jsx

import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

// FIX: relative path up to src/components/GenialQuizzes
import {
    MCQQuiz,
    TrueFalseQuiz,
    FillBlankQuiz,
    MatchingPairsQuiz,
    ReorderQuiz,
} from "../../../../../components/GenialQuizzes";

import { useNavigate } from "react-router-dom";

function Praxis_GriechischeBuchstaben() {
    const navigate = useNavigate();

    // We'll have an array of "quizSteps"
    // For now, placeholder quizzes with dummy data:
    const quizSteps = [
        {
            type: "mcq",
            question: "Was ist Pi ungefähr?",
            options: ["2.71", "3.14", "1.41", "1.618"],
            correctAnswerIndex: 1,
            explanation: "Pi ist ca. 3.14159 ...",
        },
        {
            type: "truefalse",
            statement: "Alpha wird oft als Winkel bezeichnet.",
            isTrue: true,
            explanation: "Stimmt, wir nutzen α für Winkel.",
        },
        {
            type: "fillblank",
            templateText: "Das Zeichen ? steht für die Summe.",
            correctAnswers: ["Sigma", "σ", "Σ"],
            explanation: "Σ (Sigma) wird für Summen verwendet.",
        },
        {
            type: "matchingpairs",
            pairs: [
                { left: "π", right: "3.14159..." },
                { left: "α", right: "Winkel" },
                { left: "Σ", right: "Summe" },
            ],
            explanation: "Typische griechische Buchstaben Zuordnung.",
        },
        {
            type: "reorder",
            prompt: "Sortiere die Buchstaben: α, β, γ",
            initialWords: ["γ", "α", "β"],
            correctOrder: ["α", "β", "γ"],
            explanation: "Griechische Alphabet Reihenfolge α, β, γ...",
        },
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const isLastStep = currentStep === quizSteps.length - 1;

    const handleNext = () => {
        if (!isLastStep) {
            setCurrentStep((prev) => prev + 1);
        } else {
            // last step => "Lektion abschließen"
            navigate("/grundlagen");
        }
    };

    // Helper function to render the quiz
    const renderQuiz = (step) => {
        const quiz = quizSteps[step];
        switch (quiz.type) {
            case "truefalse":
                return (
                    <TrueFalseQuiz
                        statement={quiz.statement}
                        isTrue={quiz.isTrue}
                        explanation={quiz.explanation}
                    />
                );
            case "fillblank":
                return (
                    <FillBlankQuiz
                        templateText={quiz.templateText}
                        correctAnswers={quiz.correctAnswers}
                        explanation={quiz.explanation}
                    />
                );
            case "matchingpairs":
                return (
                    <MatchingPairsQuiz
                        pairs={quiz.pairs}
                        explanation={quiz.explanation}
                    />
                );
            case "reorder":
                return (
                    <ReorderQuiz
                        prompt={quiz.prompt}
                        initialWords={quiz.initialWords}
                        correctOrder={quiz.correctOrder}
                        explanation={quiz.explanation}
                    />
                );
            case "mcq":
            default:
                return (
                    <MCQQuiz
                        question={quiz.question}
                        options={quiz.options}
                        correctAnswerIndex={quiz.correctAnswerIndex}
                        explanation={quiz.explanation}
                    />
                );
        }
    };

    return (
        <Box p={8} maxW="600px" mx="auto">
            <Text fontSize="2xl" mb={4} fontWeight="bold">
                Praxis: Griechische Buchstaben
            </Text>
            {/* Render current quiz */}
            {renderQuiz(currentStep)}

            {/* Show a Next/Finish button after the user has answered */}
            <Button mt={6} onClick={handleNext}>
                {isLastStep ? "Lektion abschließen" : "Weiter"}
            </Button>
        </Box>
    );
}

export default Praxis_GriechischeBuchstaben;
