// File: src/Matura/Content/LektionenTemplate/LecturePracticePage.jsx
import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LecturePracticeSection from "./LecturePracticeSection.jsx";

/**
 * LecturePracticePage
 *
 * - Renders multiple quiz steps (quizSteps array).
 * - Each step is 1 quiz -> user must answer before seeing “Weiter”.
 * - On final step => “Lektion abschließen” => redirects to /grundlagen.
 *
 * PROPS:
 * - headline (string) => optional page headline
 * - introText (string) => optional short text if needed
 * - quizSteps (array) => each item is { type: "mcq"|"truefalse"|..., ... }
 * - onAllDone?: callback => if you want a custom callback after last step
 */

function LecturePracticePage({
                                 headline = "Praxis: Beispiel",
                                 introText = "",
                                 quizSteps = [],
                                 onAllDone,
                             }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const navigate = useNavigate();

    const totalSteps = quizSteps.length;
    const isLastStep = currentStep === totalSteps - 1;

    // Called whenever the user has answered the quiz
    const handleAnswered = () => {
        setIsAnswered(true);
    };

    // Called on button click
    const handleNext = () => {
        // Reset for next quiz
        setIsAnswered(false);

        if (!isLastStep) {
            // Move on to next quiz
            setCurrentStep((prev) => prev + 1);
        } else {
            // Last quiz => “Lektion abschließen”
            // optional: if you have onAllDone, call it
            if (onAllDone) onAllDone();
            // Then navigate away
            navigate("/grundlagen");
        }
    };

    // Decide button label
    const buttonLabel = isLastStep ? "Lektion abschließen" : "Weiter";

    // The “Weiter” or “Lektion abschließen” button is hidden until quiz is answered
    const showButton = isAnswered;

    return (
        <Box maxW="600px" mx="auto" p={6} bg="#faf3dc" borderRadius="md">
            {/* Optional headline & intro */}
            {headline && (
                <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    mb={4}
                >
                    {headline}
                </Text>
            )}

            {introText && (
                <Text fontSize={{ base: "xl", md: "lg" }} mb={6}>
                    {introText}
                </Text>
            )}

            {/* Render current quiz */}
            <LecturePracticeSection
                quizData={quizSteps[currentStep]}
                onAnswered={handleAnswered}
            />

            {/* Only show button after user answered */}
            {showButton && (
                <Button
                    onClick={handleNext}
                    mt={6}
                    bg="#30628b"
                    color="white"
                    size={{ base: "md", md: "lg" }}
                    boxShadow="md"
                    _hover={{
                        bg: "#245074",
                        boxShadow: "lg",
                    }}
                    _active={{
                        bg: "#1d3f5e",
                    }}
                >
                    {buttonLabel}
                </Button>
            )}
        </Box>
    );
}

export default LecturePracticePage;
