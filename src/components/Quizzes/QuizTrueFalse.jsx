// src/components/Quizzes/QuizTrueFalse.jsx

import React, { useState } from "react";
import {
    Box,
    Stack,
    Radio,
    RadioGroup,
    Text,
} from "@chakra-ui/react";

import PrimaryButton from "./shares/PrimaryButton.jsx";
import WhyAccordion from "./shares/WhyAccordion.jsx";

const QuizTrueFalse = ({
                           statement,
                           isTrue,
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
            // Removed border
            borderWidth="0"
            borderRadius="lg"
            p={4}
            m={2}
        >
            <Text fontSize="lg" mb={2}>
                {statement}
            </Text>

            <RadioGroup onChange={(val) => setSelected(val)} value={selected}>
                <Stack direction="row" spacing={5}>
                    <Radio value="true">True</Radio>
                    <Radio value="false">False</Radio>
                </Stack>
            </RadioGroup>

            <PrimaryButton mt={4} onClick={handleCheck}>
                Prüfen
            </PrimaryButton>

            <WhyAccordion explanation={explanation} />

            {isSubmitted && (
                <Box mt={2}>
                    {selected === (isTrue ? "true" : "false") ? (
                        <Text color="green.500">Richtig!</Text>
                    ) : (
                        <Text color="red.500">Falsch!</Text>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default QuizTrueFalse;
