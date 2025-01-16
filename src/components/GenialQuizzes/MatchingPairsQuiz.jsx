// File: src/components/GenialQuizzes/MatchingPairsQuiz.jsx
import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    HStack,
    Select,
    Button,
    useToast,
} from "@chakra-ui/react";
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

    const rightItems = pairs.map((p) => p.right);
    const shuffledRightItems = [...rightItems].sort(() => Math.random() - 0.5);

    const handleSelectChange = (value, index) => {
        if (isAnswered) return;
        const updated = [...selected];
        updated[index] = value;
        setSelected(updated);
    };

    const handleCheck = () => {
        for (let i = 0; i < pairs.length; i++) {
            if (selected[i] !== pairs[i].right) {
                setIsCorrect(false);
                setIsAnswered(true);

                // Always call onQuizComplete
                if (onQuizComplete) onQuizComplete();
                return;
            }
        }
        // If we got here => all matched
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
            boxShadow="sm"
        >
            <Text
                fontSize={{ base: "xl", md: "lg" }}
                fontWeight="bold"
                mb={4}
                color="black"
            >
                Ordne die passenden Paare zu
            </Text>
            <VStack spacing={4} align="stretch">
                {pairs.map((pair, idx) => (
                    <HStack key={idx} spacing={3}>
                        <Box
                            flex="1"
                            p={2}
                            bg={BEIGE}
                            borderRadius="md"
                            border="2px solid"
                            borderColor={BLUE}
                            color="black"
                            fontWeight="bold"
                            fontSize={{ base: "xl", md: "lg" }}
                        >
                            {pair.left}
                        </Box>
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
                            fontSize={{ base: "xl", md: "lg" }}
                        >
                            {shuffledRightItems.map((item, i) => (
                                <option key={i} value={item}>
                                    {item}
                                </option>
                            ))}
                        </Select>
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
                <>
                    <Text
                        mt={4}
                        fontWeight="bold"
                        color={isCorrect ? GREEN : RED}
                        fontSize={{ base: "xl", md: "lg" }}
                    >
                        {isCorrect
                            ? "Super, alle korrekt zugeordnet!"
                            : "Leider falsch. Schau nochmal hin!"}
                    </Text>

                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
}

export default MatchingPairsQuiz;
