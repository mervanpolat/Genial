// File: src/components/GenialQuizzes/TrueFalseQuiz.jsx
import React, { useState } from "react";
import {
    Box,
    Text,
    Button,
    HStack,
    useToast,
} from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

const TrueFalseQuiz = ({
                           statement,
                           isTrue,
                           explanation,
                           onQuizComplete,
                       }) => {
    const [userAnswer, setUserAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleUserAnswer = (answer) => {
        if (isAnswered) return;
        setUserAnswer(answer);
    };

    const handleCheckAnswer = () => {
        if (userAnswer === null) {
            toast({
                title: "Bitte wähle wahr oder falsch.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const correct = (userAnswer === "true") === isTrue;
        setIsCorrect(correct);
        setIsAnswered(true);
        if (correct && onQuizComplete) {
            onQuizComplete();
        }
    };

    return (
        <Box
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={6}
            mt={6}
            maxW="600px"
            mx="auto"
            textAlign="center"
            boxShadow="sm"
        >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                {statement}
            </Text>

            <HStack spacing={4} justify="center">
                <Button
                    colorScheme={userAnswer === "true" ? "blue" : "gray"}
                    onClick={() => handleUserAnswer("true")}
                    isDisabled={isAnswered}
                >
                    Wahr
                </Button>
                <Button
                    colorScheme={userAnswer === "false" ? "blue" : "gray"}
                    onClick={() => handleUserAnswer("false")}
                    isDisabled={isAnswered}
                >
                    Falsch
                </Button>
            </HStack>

            {!isAnswered && (
                <Button
                    mt={6}
                    colorScheme="blue"
                    onClick={handleCheckAnswer}
                >
                    Antwort prüfen
                </Button>
            )}

            {isAnswered && (
                <Box mt={4} textAlign="center">
                    <Text
                        fontWeight="bold"
                        color={isCorrect ? "green.500" : "red.500"}
                    >
                        {isCorrect ? "Richtig!" : "Falsch!"}
                    </Text>
                    <ExplanationReveal explanation={explanation} />
                </Box>
            )}
        </Box>
    );
};

export default TrueFalseQuiz;
