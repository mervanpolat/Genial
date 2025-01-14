// src/components/GenialQuizzes/FillBlankQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Input,
    Button,
    useToast
} from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

/**
 * Fill in the blank quiz. The placeholder "?" in the template is replaced by user's input.
 *
 * Props:
 *  - templateText: string => e.g. "Ein Kreis hat ? Durchmesser"
 *  - correctAnswers: string[] => one or more accepted correct answers
 *  - explanation: string
 *  - onQuizComplete: function (optional)
 */
const FillBlankQuiz = ({
                           templateText,
                           correctAnswers = [],
                           explanation,
                           onQuizComplete
                       }) => {
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
        // Check if the typed answer matches one of the correctAnswers (case-insensitive)
        const correct = correctAnswers.some(
            (ans) => ans.toLowerCase().trim() === userInput.toLowerCase().trim()
        );
        setIsCorrect(correct);
        setIsAnswered(true);
        if (correct && onQuizComplete) {
            onQuizComplete();
        }
    };

    return (
        <Box
            p={6}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            bg="white"
            maxW="600px"
            mx="auto"
        >
            <Text mb={2} fontSize="xl" fontWeight="bold">
                {displayText}
            </Text>

            {!isAnswered && (
                <Input
                    mt={4}
                    placeholder="Deine Antwort"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            )}

            {!isAnswered && (
                <Button
                    mt={4}
                    colorScheme="blue"
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
                        color={isCorrect ? "green.500" : "red.500"}
                    >
                        {isCorrect ? "Richtig!" : "Leider falsch!"}
                    </Text>

                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
};

export default FillBlankQuiz;
