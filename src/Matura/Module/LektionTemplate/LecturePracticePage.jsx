// File: src/Matura/Module/LektionTemplate/LecturePracticePage.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LecturePracticeSection from "./LecturePracticeSection.jsx";

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

    const handleAnswered = () => {
        setIsAnswered(true);
    };

    const handleNext = () => {
        setIsAnswered(false);
        if (!isLastStep) {
            setCurrentStep((prev) => prev + 1);
        } else {
            if (onAllDone) onAllDone();
            navigate("/grundlagen");
        }
    };

    const buttonLabel = isLastStep ? "Lektion abschließen" : "Weiter";
    const showButton = isAnswered; // Erst sichtbar, wenn geantwortet

    return (
        <Box
            maxW="600px"
            mx="auto"
            p={6}
            bg="#faf3dc"
            borderRadius="md"
        >
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

            <LecturePracticeSection
                quizData={quizSteps[currentStep]}
                onAnswered={handleAnswered}
            />

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

LecturePracticePage.propTypes = {
    headline: PropTypes.string,
    introText: PropTypes.string,
    quizSteps: PropTypes.arrayOf(PropTypes.object),
    onAllDone: PropTypes.func,
};

export default LecturePracticePage;
