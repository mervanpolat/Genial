// File: src/components/Quiz/MatchingPairsQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    HStack,
    Select,
    Button,
    Flex,
    useToast,
    ScaleFade,
    Tooltip,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import ExplanationReveal from "./ExplanationReveal";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";
const YELLOW = "#f0c34e";

function MatchingPairsQuiz({ pairs, explanation, onQuizComplete }) {
    const [selected, setSelected] = useState(Array(pairs.length).fill(""));
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    // Gather all 'right' options, then shuffle them
    const rightItems = pairs.map((p) => p.right);
    const shuffledRightItems = [...rightItems].sort(() => Math.random() - 0.5);

    const handleSelectChange = (value, index) => {
        if (isAnswered) return;
        const updated = [...selected];
        updated[index] = value;
        setSelected(updated);
    };

    const handleCheck = () => {
        // Check if all selected answers match pairs[i].right
        for (let i = 0; i < pairs.length; i++) {
            if (selected[i] !== pairs[i].right) {
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
            transition="all 0.3s"
        >
            <Text fontSize="xl" fontWeight="bold" mb={1} color="black">
                Ordne die passenden Paare zu
            </Text>
            <Text fontSize="sm" color="gray.700" mb={5}>
                Wähle zu jedem linken Ausdruck das passende Gegenstück rechts aus.
            </Text>

            <VStack spacing={5} align="stretch">
                {pairs.map((pair, idx) => (
                    <HStack key={idx} spacing={3} align="center">
                        <Box
                            flex="1"
                            p={2}
                            bg={BEIGE}
                            borderRadius="md"
                            border="2px solid"
                            borderColor={BLUE}
                            color="black"
                            fontWeight="bold"
                            fontSize="lg"
                            textAlign="center"
                            transition="all 0.2s"
                        >
                            {pair.left}
                        </Box>
                        <Tooltip label="Wähle die passende Lösung" hasArrow>
                            <Select
                                placeholder="Passendes Gegenstück"
                                value={selected[idx]}
                                onChange={(e) => handleSelectChange(e.target.value, idx)}
                                isDisabled={isAnswered}
                                border="2px solid"
                                borderColor={BLUE}
                                bg={BEIGE}
                                color="black"
                                _hover={{
                                    bg: YELLOW,
                                    borderColor: BLUE,
                                }}
                                _focus={{
                                    borderColor: BLUE,
                                    boxShadow: "0 0 0 1px #30628b",
                                }}
                                fontSize="lg"
                                flex="1"
                            >
                                {shuffledRightItems.map((item, i) => (
                                    <option key={i} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </Select>
                        </Tooltip>
                    </HStack>
                ))}
            </VStack>

            {!isAnswered && (
                <Button
                    mt={6}
                    bg="black"
                    color="white"
                    border="2px solid"
                    borderColor={BLUE}
                    _hover={{
                        bg: "#333333",
                        boxShadow: "md",
                        transform: "scale(1.02)",
                    }}
                    _active={{
                        transform: "scale(0.98)",
                    }}
                    transition="all 0.2s"
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
                        <Text
                            fontWeight="bold"
                            color={isCorrect ? GREEN : RED}
                            fontSize="lg"
                        >
                            {isCorrect
                                ? "Super, alle korrekt zugeordnet!"
                                : "Leider falsch. Schau nochmal hin!"}
                        </Text>
                    </Flex>
                    <ExplanationReveal explanation={explanation} />
                </ScaleFade>
            )}
        </Box>
    );
}

export default MatchingPairsQuiz;
