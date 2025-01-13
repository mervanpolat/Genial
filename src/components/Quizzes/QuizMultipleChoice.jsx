// src/components/Quizzes/QuizMultipleChoice.jsx

import React, { useState } from "react";
import {
    Box,
    VStack,
    Radio,
    RadioGroup,
    Text,
} from "@chakra-ui/react";

import PrimaryButton from "./shares/PrimaryButton.jsx";
import WhyAccordion from "./shares/WhyAccordion.jsx";

const QuizMultipleChoice = ({
                                question,
                                options,
                                correctAnswerIndex,
                                explanation,
                                onQuizComplete,
                            }) => {
    const [selected, setSelected] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCheck = () => {
        setIsSubmitted(true);
        if (onQuizComplete) {
            onQuizComplete();
        }
    };

    return (
        <Box
            borderWidth="1px"
            borderRadius="xl"
            p={4}
            borderColor="rgba(0, 0, 0, 0.2)" // <--- Transparent black border
        >
            <Text fontSize="xl" mb={10}>
                {question}
            </Text>

            <RadioGroup onChange={(val) => setSelected(val)} value={selected}>
                <VStack align="start" spacing={2}>
                    {options.map((opt, idx) => (
                        <Radio
                            key={idx}
                            value={String(idx)}
                            size="lg"           // Large radio circle
                            colorScheme="blue" // Optional color scheme
                        >
                            <Text fontSize="xl">{opt}</Text> {/* Larger label text */}
                        </Radio>
                    ))}
                </VStack>
            </RadioGroup>


            <PrimaryButton mt={10} onClick={handleCheck}>
                Prüfen
            </PrimaryButton>

            <WhyAccordion explanation={explanation} />

            {isSubmitted && (
                <Box mt={2}>
                    {parseInt(selected, 10) === correctAnswerIndex ? (
                        <Text color="green.500">Richtig!</Text>
                    ) : (
                        <Text color="red.500">Falsch! Versuche es nochmal.</Text>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default QuizMultipleChoice;
