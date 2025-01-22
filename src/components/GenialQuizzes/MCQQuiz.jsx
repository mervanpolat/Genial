// File: src/components/GenialQuizzes/MCQQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Button,
    VStack,
    useToast,
} from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

// Farben
const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";

function MCQQuiz({
                     question,
                     options,
                     correctAnswerIndex,
                     explanation,
                     onQuizComplete,
                 }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleSelect = (idx) => {
        if (isAnswered) return;
        setSelectedIndex(idx);
    };

    const handleCheckAnswer = () => {
        if (selectedIndex === null) {
            toast({
                title: "Bitte wähle eine Option aus.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const correct = selectedIndex === correctAnswerIndex;
        setIsCorrect(correct);
        setIsAnswered(true);

        if (onQuizComplete) onQuizComplete();
    };

    const getButtonStyle = (idx) => {
        // Stil je nach Status
        if (isAnswered) {
            // Nach Abgabe
            if (idx === selectedIndex) {
                // User Choice
                return isCorrect
                    ? { bg: GREEN, borderColor: BLUE, color: "white" }
                    : { bg: RED, borderColor: BLUE, color: "white" };
            }
            if (idx === correctAnswerIndex) {
                // Markiere die richtige Option
                return { bg: GREEN, borderColor: BLUE, color: "white" };
            }
            // andere bleiben normal
            return { bg: BEIGE, borderColor: BLUE, color: "black" };
        }
        // Vor Abgabe
        const isSelected = idx === selectedIndex;
        if (isSelected) {
            return { bg: BLUE, borderColor: BLUE, color: "white" };
        }
        return { bg: BEIGE, borderColor: BLUE, color: "black" };
    };

    return (
        <Box
            bg={CARD_BG}
            border="2px solid"
            borderColor={BLUE}
            borderRadius="md"
            p={6}
            mt={6}
            maxW="600px"
            mx="auto"
            boxShadow="sm"
        >
            <Text fontSize={{ base: "xl", md: "lg" }} fontWeight="bold" color="black" mb={2}>
                {question}
            </Text>

            <SimpleGrid columns={[1, 2]} spacing={4} mt={3}>
                {options.map((option, idx) => {
                    const styleProps = getButtonStyle(idx);
                    return (
                        <Button
                            key={idx}
                            border="2px solid"
                            borderColor={styleProps.borderColor}
                            bg={styleProps.bg}
                            color={styleProps.color}
                            px={6} // Horizontales Padding
                            py={10} // Vertikales Padding
                            // WICHTIG: Zeilenumbruch ermöglichen
                            whiteSpace="normal"
                            textAlign="center"
                            // Hover-Effekt nur, wenn noch nicht beantwortet
                            _hover={{
                                ...(isAnswered
                                    ? {}
                                    : {
                                        bg: styleProps.bg === BLUE ? BLUE : "#e2d7b7",
                                        boxShadow: "md",
                                    }),
                            }}
                            _active={{
                                transform: "scale(0.98)",
                            }}
                            onClick={() => handleSelect(idx)}
                            isDisabled={isAnswered}
                            fontSize={{ base: "md", md: "lg" }}
                        >
                            {option}
                        </Button>
                    );
                })}
            </SimpleGrid>

            <VStack mt={6}>
                {!isAnswered && (
                    <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "#333333", transform: "scale(1.02)" }}
                        _active={{ transform: "scale(0.98)" }}
                        onClick={handleCheckAnswer}
                    >
                        Antwort prüfen
                    </Button>
                )}

                {isAnswered && (
                    <>
                        <Text
                            fontWeight="bold"
                            color={isCorrect ? GREEN : RED}
                            fontSize={{ base: "xl", md: "lg" }}
                        >
                            {isCorrect ? "Richtig!" : "Falsch!"}
                        </Text>
                        <Box width="100%" textAlign="left">
                            <ExplanationReveal explanation={explanation} />
                        </Box>
                    </>
                )}
            </VStack>
        </Box>
    );
}

export default MCQQuiz;
