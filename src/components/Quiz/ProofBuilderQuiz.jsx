// File: src/components/Quiz/ProofBuilderQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    Button,
    Flex,
    ScaleFade,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const CARD_BG = "#f2e8d5";
const BLUE = "#30628b";
const GREEN = "#3bb25a";
const RED = "#c03b2d";

/**
 * proofLines = array of line strings in correct order
 */
function ProofBuilderQuiz({ theorem, proofLines, onQuizComplete }) {
    // Start by shuffling lines
    const [lines, setLines] = useState([...proofLines].sort(() => Math.random() - 0.5));
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleLineClick = (idx) => {
        if (isAnswered) return;
        const newArr = [...lines];
        const [removed] = newArr.splice(idx, 1);
        newArr.push(removed);
        setLines(newArr);
    };

    const handleCheck = () => {
        if (JSON.stringify(lines) === JSON.stringify(proofLines)) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setIsAnswered(true);

        if (onQuizComplete) onQuizComplete();
    };

    return (
        <Box
            bg={CARD_BG}
            border="2px solid"
            borderColor={BLUE}
            borderRadius="md"
            p={6}
            mt={6}
            maxW="600px"
            mx="auto"
            boxShadow="lg"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={2}>
                Theorem: {theorem}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={4}>
                Sortiere die Beweisschritte in die richtige Reihenfolge.
            </Text>

            <VStack spacing={2} align="stretch">
                {lines.map((line, idx) => (
                    <Button
                        key={idx}
                        variant="outline"
                        border="2px solid"
                        borderColor={BLUE}
                        bg="white"
                        color="black"
                        textAlign="left"
                        onClick={() => handleLineClick(idx)}
                        isDisabled={isAnswered}
                        _hover={{
                            bg: "#faf3dc",
                            transform: "scale(1.01)",
                        }}
                    >
                        {line}
                    </Button>
                ))}
            </VStack>

            {!isAnswered && (
                <Button
                    mt={4}
                    bg="black"
                    color="white"
                    onClick={handleCheck}
                    _hover={{ bg: "#333333", transform: "scale(1.02)" }}
                    _active={{ transform: "scale(0.98)" }}
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
                        <Text
                            fontWeight="bold"
                            color={isCorrect ? GREEN : RED}
                            fontSize="lg"
                        >
                            {isCorrect ? "Beweis in korrekter Reihenfolge!" : "Reihenfolge stimmt nicht."}
                        </Text>
                    </Flex>
                </ScaleFade>
            )}
        </Box>
    );
}

export default ProofBuilderQuiz;
