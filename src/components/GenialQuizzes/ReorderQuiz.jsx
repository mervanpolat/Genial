// File: src/components/GenialQuizzes/ReorderQuiz.jsx
import React, { useState } from "react";
import {
    Box,
    Text,
    Wrap,
    WrapItem,
    Button,
    useToast,
} from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

const ReorderQuiz = ({
                         prompt,
                         initialWords,
                         correctOrder,
                         explanation,
                         onQuizComplete,
                     }) => {
    const [words, setWords] = useState(initialWords);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleWordClick = (idx) => {
        if (isAnswered) return;
        // Move clicked word to the end
        const newArr = [...words];
        const [removed] = newArr.splice(idx, 1);
        newArr.push(removed);
        setWords(newArr);
    };

    const handleCheck = () => {
        if (words.length !== correctOrder.length) return;
        const correct = words.join(" ") === correctOrder.join(" ");
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
            boxShadow="sm"
        >
            <Text fontSize="xl" fontWeight="bold" mb={3}>
                {prompt}
            </Text>

            <Wrap spacing={2} mb={4}>
                {words.map((word, idx) => (
                    <WrapItem key={idx}>
                        <Button
                            variant="outline"
                            onClick={() => handleWordClick(idx)}
                            bg="gray.50"
                            _hover={{ bg: "gray.100" }}
                            isDisabled={isAnswered}
                        >
                            {word}
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>

            {!isAnswered && (
                <Button colorScheme="blue" onClick={handleCheck}>
                    Überprüfen
                </Button>
            )}

            {isAnswered && (
                <>
                    <Text
                        mt={4}
                        fontWeight="bold"
                        color={isCorrect ? "green.500" : "red.500"}
                    >
                        {isCorrect ? "Richtig!" : "Falsche Reihenfolge!"}
                    </Text>

                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
};

export default ReorderQuiz;
