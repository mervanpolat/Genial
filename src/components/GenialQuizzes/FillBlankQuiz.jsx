// File: src/components/GenialQuizzes/FillBlankQuiz.jsx
import React, { useState } from "react";
import { Box, Text, Input, Button, useToast } from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";
const YELLOW = "#f0c34e";

function FillBlankQuiz({
                           templateText,
                           correctAnswers = [],
                           explanation,
                           onQuizComplete,
                       }) {
    const [userInput, setUserInput] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const displayText = templateText.replace("?", userInput || "___");

    const handleCheck = () => {
        if (!userInput.trim()) {
            toast({
                title: "Bitte trage eine Antwort ein.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const correct = correctAnswers.some(
            (ans) => ans.toLowerCase().trim() === userInput.toLowerCase().trim()
        );
        setIsCorrect(correct);
        setIsAnswered(true);

        // *** ALWAYS call onQuizComplete ***
        if (onQuizComplete) onQuizComplete();
    };

    return (
        <Box
            p={6}
            borderRadius="md"
            border="2px solid"
            borderColor={BLUE}
            bg={CARD_BG}
            maxW="600px"
            mx="auto"
            mt={6}
            boxShadow="sm"
        >
            <Text
                mb={2}
                fontSize={{ base: "xl", md: "lg" }}
                fontWeight="bold"
                color="black"
            >
                {displayText}
            </Text>

            {!isAnswered && (
                <Input
                    mt={4}
                    placeholder="Deine Antwort"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    border="2px solid"
                    borderColor={BLUE}
                    bg={BEIGE}
                    color="black"
                    _hover={{
                        borderColor: BLUE,
                    }}
                    _focus={{
                        borderColor: BLUE,
                        boxShadow: "0 0 0 1px #30628b",
                    }}
                    fontSize={{ base: "xl", md: "lg" }}
                />
            )}

            {!isAnswered && (
                <Button
                    mt={4}
                    bg="black"
                    color="white"
                    _hover={{
                        bg: "#333333",
                        transform: "scale(1.02)",
                    }}
                    _active={{
                        transform: "scale(0.98)",
                    }}
                    transition="all 0.2s"
                    onClick={handleCheck}
                >
                    Antwort prüfen
                </Button>
            )}

            {isAnswered && (
                <>
                    <Text
                        mt={4}
                        fontWeight="bold"
                        color={isCorrect ? GREEN : RED}
                        fontSize={{ base: "xl", md: "lg" }}
                    >
                        {isCorrect ? "Richtig!" : "Leider falsch!"}
                    </Text>

                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
}

export default FillBlankQuiz;
