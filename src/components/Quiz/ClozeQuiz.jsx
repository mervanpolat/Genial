// File: src/components/Quiz/ClozeQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Input,
    Button,
    useToast,
    Flex,
    ScaleFade,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";

function ClozeQuiz({ clozeText, blanks, explanation, onQuizComplete }) {
    // Example: clozeText = "Der Umfang eines Kreises ist 2 * π * __?"
    // blanks = ["r"] => user must fill "r" in the blank
    // For multiple blanks, you'd store them in an array and track user input for each.
    const [userInput, setUserInput] = useState(Array(blanks.length).fill(""));

    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleChange = (value, idx) => {
        if (isAnswered) return;
        const updated = [...userInput];
        updated[idx] = value;
        setUserInput(updated);
    };

    const handleCheck = () => {
        for (let i = 0; i < blanks.length; i++) {
            if (userInput[i].trim().toLowerCase() !== blanks[i].trim().toLowerCase()) {
                setIsCorrect(false);
                setIsAnswered(true);
                if (onQuizComplete) onQuizComplete();
                return;
            }
        }
        setIsCorrect(true);
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
            boxShadow="lg"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={2}>
                {clozeText}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={4}>
                Fülle alle Lücken aus:
            </Text>

            {blanks.map((_, idx) => (
                <Input
                    key={idx}
                    placeholder={`Lücke ${idx + 1}`}
                    value={userInput[idx]}
                    onChange={(e) => handleChange(e.target.value, idx)}
                    isDisabled={isAnswered}
                    border="2px solid"
                    borderColor={BLUE}
                    bg={BEIGE}
                    color="black"
                    mb={2}
                />
            ))}

            {!isAnswered && (
                <Button
                    mt={3}
                    bg="black"
                    color="white"
                    _hover={{ bg: "#333333", transform: "scale(1.02)" }}
                    _active={{ transform: "scale(0.98)" }}
                    onClick={handleCheck}
                >
                    Überprüfen
                </Button>
            )}

            {isAnswered && (
                <ScaleFade initialScale={0.9} in={isAnswered}>
                    <Flex alignItems="center" mt={4}>
                        {isCorrect ? (
                            <CheckCircleIcon boxSize="1.5em" color={GREEN} mr={2} />
                        ) : (
                            <CloseIcon boxSize="1em" color={RED} mr={2} />
                        )}
                        <Text fontWeight="bold" color={isCorrect ? GREEN : RED} fontSize="lg">
                            {isCorrect ? "Alle Lücken korrekt ausgefüllt!" : "Da fehlt noch was."}
                        </Text>
                    </Flex>
                    {explanation && (
                        <Box mt={2} textAlign="left" fontSize="sm" color="gray.800">
                            {explanation}
                        </Box>
                    )}
                </ScaleFade>
            )}
        </Box>
    );
}

export default ClozeQuiz;
