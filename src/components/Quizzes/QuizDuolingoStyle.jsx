// src/components/Quizzes/QuizDuolingoStyle.jsx

import React, { useState } from "react";
import {
    Box,
    HStack,
    Text,
} from "@chakra-ui/react";

import PrimaryButton from "./shared/PrimaryButton.jsx";
import WhyAccordion from "./shared/WhyAccordion.jsx";

const QuizDuolingoStyle = ({
                               prompt,
                               words,
                               correctOrder,
                               explanation,
                               onQuizComplete,
                           }) => {
    const [currentOrder, setCurrentOrder] = useState(words);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCheck = () => {
        setIsSubmitted(true);
        if (onQuizComplete) {
            onQuizComplete();
        }
    };

    const isCorrect =
        JSON.stringify(currentOrder) ===
        JSON.stringify(correctOrder.map((i) => words[i]));

    return (
        <Box
            // Removed border
            borderWidth="0"
            borderRadius="lg"
            p={4}
            m={2}
        >
            <Text fontSize="lg" mb={2}>
                {prompt}
            </Text>

            <HStack spacing={2} mb={4}>
                {currentOrder.map((word, idx) => (
                    <Box
                        key={idx}
                        borderWidth="1px"
                        borderRadius="md"
                        p={2}
                        cursor="pointer"
                        onClick={() => {
                            const newOrder = [...currentOrder];
                            const removed = newOrder.splice(idx, 1);
                            newOrder.push(removed[0]);
                            setCurrentOrder(newOrder);
                        }}
                    >
                        {word}
                    </Box>
                ))}
            </HStack>

            <PrimaryButton onClick={handleCheck}>
                Prüfen
            </PrimaryButton>

            <WhyAccordion explanation={explanation} />

            {isSubmitted && (
                <Text mt={4} color={isCorrect ? "green.500" : "red.500"}>
                    {isCorrect ? "Richtig angeordnet!" : "Falsche Reihenfolge!"}
                </Text>
            )}
        </Box>
    );
};

export default QuizDuolingoStyle;
