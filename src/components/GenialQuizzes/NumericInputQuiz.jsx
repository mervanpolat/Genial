// File: src/components/GenialQuizzes/NumericInputQuiz.jsx

import React, { useState } from "react";
import { Box, Text, Input, Button, useToast } from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";

function NumericInputQuiz({
                              question,
                              correctNumber,
                              explanation,
                              onQuizComplete,
                          }) {
    const [userAnswer, setUserAnswer] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleCheck = () => {
        if (!userAnswer.trim()) {
            toast({
                title: "Bitte trage eine Zahl ein.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const numericUser = parseFloat(userAnswer.replace(",", "."));
        const numericCorrect = parseFloat(correctNumber);

        if (!isNaN(numericUser) && numericUser === numericCorrect) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setIsAnswered(true);

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
                fontSize="lg"
                fontWeight="bold"
                color="black"
            >
                {question}
            </Text>

            {!isAnswered && (
                <Input
                    placeholder="Zahl eingeben"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    border="2px solid"
                    borderColor={BLUE}
                    bg={BEIGE}
                    color="black"
                />
            )}

            {!isAnswered && (
                <Button
                    mt={4}
                    bg="black"
                    color="white"
                    _hover={{ bg: "#333333" }}
                    whiteSpace="normal"
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
                        fontSize="lg"
                    >
                        {isCorrect ? "Richtig!" : "Falsch!"}
                    </Text>
                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
}

export default NumericInputQuiz;
