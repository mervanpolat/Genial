// File: src/components/Quizzes/QuizMultipleChoice.jsx

import React, { useState } from "react";
import { Box, VStack, Text, SimpleGrid, Accordion } from "@chakra-ui/react";
import PrimaryButton from "./shared/PrimaryButton.jsx";
import WhyAccordion from "./shared/WhyAccordion.jsx";

const QuizMultipleChoice = ({
                                question,
                                options,
                                correctAnswerIndex,
                                explanation,
                                onQuizComplete,
                            }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [disabledOptions, setDisabledOptions] = useState([]);
    const [highlightedCorrectIndex, setHighlightedCorrectIndex] = useState(null);
    const [highlightedWrongIndex, setHighlightedWrongIndex] = useState(null);
    const [showYellowPanel, setShowYellowPanel] = useState(false);
    const [showBlackPanel, setShowBlackPanel] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleSelection = (index) => {
        if (
            disabledOptions.includes(index) ||
            highlightedCorrectIndex !== null ||
            showBlackPanel
        ) {
            return;
        }

        if (highlightedWrongIndex !== null) {
            setHighlightedWrongIndex(null);
        }

        setSelectedOption(index);
    };

    const handleCheck = () => {
        if (selectedOption === null) return;

        setHighlightedWrongIndex(null);

        if (selectedOption === correctAnswerIndex) {
            setHighlightedCorrectIndex(correctAnswerIndex);
            setShowYellowPanel(false);
            setShowBlackPanel(true);

            if (onQuizComplete) onQuizComplete();
        } else {
            setHighlightedWrongIndex(selectedOption);
            setShowYellowPanel(true);
        }
    };

    const handleTryAgain = () => {
        setDisabledOptions((prev) => [...prev, selectedOption]);
        setShowYellowPanel(false);
        setSelectedOption(null);
        setHighlightedWrongIndex(null);

        const remainingOptions = options.filter(
            (_, idx) => !disabledOptions.includes(idx) && idx !== selectedOption
        );

        if (remainingOptions.length === 1) {
            const lastRemainingIndex = options.findIndex(
                (_, idx) => !disabledOptions.includes(idx) && idx !== selectedOption
            );
            setHighlightedCorrectIndex(lastRemainingIndex);
            if (onQuizComplete) onQuizComplete();
        }
    };

    const handleSeeAnswer = () => {
        setShowYellowPanel(false);
        setShowBlackPanel(true);
        setHighlightedCorrectIndex(correctAnswerIndex);
    };

    const handleWhy = () => {
        setShowExplanation((prev) => !prev);
    };

    const handleSkipExplanation = () => {
        setShowExplanation(false);
    };

    return (
        <Box
            p={8}
            borderWidth="1px"
            borderRadius="xl"
            textAlign="center"
            borderColor="rgba(0, 0, 0, 0.2)"
        >
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    {question}
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                    {options.map((option, index) => {
                        let bgColor = "#faf3dc";
                        let borderColor = "blackAlpha.200";
                        let textColor = "black";

                        if (index === highlightedCorrectIndex) {
                            bgColor = "green.100";
                            borderColor = "green.400";
                        } else if (index === highlightedWrongIndex) {
                            bgColor = "red.100";
                            borderColor = "red.400";
                        } else if (disabledOptions.includes(index)) {
                            bgColor = "#ececec";
                            textColor = "gray.500";
                        } else if (index === selectedOption) {
                            bgColor = "black";
                            borderColor = "black";
                            textColor = "white";

                        }

                        return (
                            <Box
                                key={index}
                                as="button"
                                w="100%"
                                p={4}
                                borderRadius="md"
                                border="2px solid"
                                borderColor={borderColor}
                                bg={bgColor}
                                color={textColor}
                                cursor={
                                    disabledOptions.includes(index) ||
                                    highlightedCorrectIndex !== null ||
                                    showBlackPanel
                                        ? "not-allowed"
                                        : "pointer"
                                }
                                onClick={() => handleSelection(index)}
                                _hover={
                                    index === selectedOption
                                        ? { bg: "black", borderColor: "black", transform: "scale(1.02)" }
                                        : disabledOptions.includes(index) ||
                                        highlightedCorrectIndex !== null ||
                                        showBlackPanel
                                            ? {}
                                            : {
                                                bg: "rgba(0, 0, 0, 0.1)",
                                                borderColor: "black",
                                                boxShadow: "md",
                                                transform: "scale(1.02)",
                                            }
                                }
                                _active={
                                    disabledOptions.includes(index) ||
                                    highlightedCorrectIndex !== null ||
                                    showBlackPanel
                                        ? {}
                                        : {
                                            transform: "scale(0.98)",
                                        }
                                }
                                transition="background-color 0.3s ease, border-color 0.3s ease,
                            box-shadow 0.3s ease, transform 0.2s ease"
                                textAlign="left"
                            >
                                <Text fontSize="lg" fontWeight="normal">
                                    {option}
                                </Text>
                            </Box>
                        );
                    })}
                </SimpleGrid>

                <PrimaryButton
                    onClick={handleCheck}
                    size="md"
                    bg="blue.500"
                    color="white"
                    disabled={selectedOption === null || showBlackPanel}
                >
                    Prüfen
                </PrimaryButton>

                {showYellowPanel && !showBlackPanel && (
                    <Box
                        bg="#fac22b"
                        p={4}
                        borderRadius="xl"
                        w="100%"
                        mt={4}
                        textAlign="left"
                    >
                        <Text mb={2} fontWeight="bold">
                            Leider Falsch. Versuche es nochmal.
                        </Text>
                        <Box display="flex" gap={4}>
                            <PrimaryButton
                                onClick={handleTryAgain}
                                size="sm"
                                bg="white"
                                color="black"
                            >
                                Nochmal versuchen
                            </PrimaryButton>
                            <PrimaryButton
                                onClick={handleSeeAnswer}
                                size="sm"
                                bg="white"
                                color="black"
                            >
                                Antwort sehen
                            </PrimaryButton>
                        </Box>
                    </Box>
                )}

                {showBlackPanel && (
                    <Box
                        bg="black"
                        color="white"
                        p={4}
                        borderRadius="md"
                        w="100%"
                        mt={4}
                        textAlign="left"
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Text fontWeight="bold" fontSize="lg">
                                Hier ist die Antwort
                            </Text>
                            <Box display="flex" gap={4}>
                                <PrimaryButton
                                    onClick={handleWhy}
                                    size="sm"
                                    bg="gray.700"
                                    color="white"
                                >
                                    Warum?
                                </PrimaryButton>
                                <PrimaryButton
                                    onClick={handleSkipExplanation}
                                    size="sm"
                                    bg="gray.700"
                                    color="white"
                                >
                                    Erklärung überspringen
                                </PrimaryButton>
                            </Box>
                        </Box>

                        {showExplanation && (
                            <Box w="100%" mt={4} color="white">
                                <WhyAccordion explanation={explanation} />
                            </Box>
                        )}
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default QuizMultipleChoice;
