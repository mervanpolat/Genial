// src/components/Quizzes/QuizMatchingPairs.jsx

import React, { useState } from "react";
import {
    Box,
    HStack,
    VStack,
    Text,
} from "@chakra-ui/react";

import PrimaryButton from "./shares/PrimaryButton.jsx";
import WhyAccordion from "./shares/WhyAccordion.jsx";

const QuizMatchingPairs = ({
                               pairs, // e.g. [{ left: "x^2+2x+1", right: "(x+1)^2" }, ...]
                               explanation,
                               onQuizComplete,
                           }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCheck = () => {
        setIsSubmitted(true);
        if (onQuizComplete) {
            onQuizComplete();
        }
    };

    return (
        <Box
            // Removed border
            borderWidth="0"
            borderRadius="lg"
            p={4}
            m={2}
        >
            <Text fontSize="lg" mb={2}>
                Ordne die passenden Paare zu:
            </Text>

            <HStack align="start">
                <VStack>
                    {pairs.map((pair, idx) => (
                        <Box
                            key={idx}
                            borderWidth="1px"
                            borderRadius="md"
                            p={2}
                            w="200px"
                            mb={2}
                        >
                            {pair.left}
                        </Box>
                    ))}
                </VStack>
                <VStack>
                    {pairs.map((pair, idx) => (
                        <Box
                            key={idx}
                            borderWidth="1px"
                            borderRadius="md"
                            p={2}
                            w="200px"
                            mb={2}
                        >
                            {pair.right}
                        </Box>
                    ))}
                </VStack>
            </HStack>

            <PrimaryButton mt={4} onClick={handleCheck}>
                Prüfen
            </PrimaryButton>

            <WhyAccordion explanation={explanation} />

            {isSubmitted && (
                <Box mt={2} color="blue.500">
                    (Beispiel) Danke, deine Antwort wurde eingereicht!
                </Box>
            )}
        </Box>
    );
};

export default QuizMatchingPairs;
