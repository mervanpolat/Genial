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

const MCQQuiz = ({
                     question,
                     options,
                     correctAnswerIndex,
                     explanation,
                     onQuizComplete,
                 }) => {
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
            <Text fontSize="xl" fontWeight="bold" mb={3}>
                {question}
            </Text>

            <SimpleGrid columns={[1, 2]} spacing={3} mt={3}>
                {options.map((option, idx) => {
                    // If user answered, color feedback
                    let bgColor = "gray.100";
                    if (isAnswered) {
                        if (idx === selectedIndex) {
                            bgColor = isCorrect ? "green.100" : "red.100";
                        }
                        if (idx === correctAnswerIndex) {
                            bgColor = "green.100";
                        }
                    } else {
                        bgColor = idx === selectedIndex ? "blue.50" : "gray.50";
                    }

                    return (
                        <Button
                            key={idx}
                            bg={bgColor}
                            border="1px solid"
                            borderColor="gray.300"
                            onClick={() => handleSelect(idx)}
                            isDisabled={isAnswered}
                            _hover={{ bg: "gray.200" }}
                        >
                            {option}
                        </Button>
                    );
                })}
            </SimpleGrid>

            <VStack mt={6}>
                {!isAnswered && (
                    <Button colorScheme="blue" onClick={handleCheckAnswer}>
                        Antwort prüfen
                    </Button>
                )}

                {isAnswered && (
                    <>
                        <Text
                            fontWeight="bold"
                            color={isCorrect ? "green.500" : "red.500"}
                        >
                            {isCorrect ? "Richtig!" : "Falsch!"}
                        </Text>

                        {/* Explanation left-aligned */}
                        <Box width="100%" textAlign="left">
                            <ExplanationReveal explanation={explanation} />
                        </Box>
                    </>
                )}
            </VStack>
        </Box>
    );
};

export default MCQQuiz;
