// src/components/Quizzes/QuizInputPlaceholder.jsx

import React, { useState } from "react";
import {
    Box,
    VStack,
    Select,
    Text,
} from "@chakra-ui/react";

import PrimaryButton from "./shares/PrimaryButton.jsx";
import WhyAccordion from "./shares/WhyAccordion.jsx";

const QuizInputPlaceholder = ({
                                  templateText,
                                  choices,
                                  correctIndex,
                                  explanation,
                                  onQuizComplete,
                              }) => {
    const [selected, setSelected] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCheck = () => {
        setIsSubmitted(true);
        if (onQuizComplete) {
            onQuizComplete();
        }
    };

    const displayedText = templateText.replace("?", selected);

    return (
        <Box
            // Removed border
            borderWidth="0"
            borderRadius="lg"
            p={4}
            m={2}
        >
            <Text fontSize="lg" mb={2}>
                {displayedText}
            </Text>

            <VStack align="start">
                <Select
                    placeholder="Wähle eine Antwort"
                    onChange={(e) => setSelected(e.target.value)}
                >
                    {choices.map((choice, idx) => (
                        <option key={idx} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Select>
            </VStack>

            <PrimaryButton mt={4} onClick={handleCheck}>
                Prüfen
            </PrimaryButton>

            <WhyAccordion explanation={explanation} />

            {isSubmitted && (
                <Box mt={2}>
                    {selected === choices[correctIndex] ? (
                        <Text color="green.500">Richtig!</Text>
                    ) : (
                        <Text color="red.500">Falsch, versuche es nochmal.</Text>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default QuizInputPlaceholder;
