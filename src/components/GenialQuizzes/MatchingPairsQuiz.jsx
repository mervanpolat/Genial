// src/components/GenialQuizzes/MatchingPairsQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    HStack,
    Select,
    Button,
    useToast
} from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

/**
 * A "match pairs" quiz.
 * For each left item, user must pick the correct right item from a dropdown.
 *
 * Props:
 *  - pairs: array of objects => [{ left: "...", right: "..." }] (the correct pairing)
 *  - explanation: string
 *  - onQuizComplete: function (optional)
 *
 * Implementation detail:
 *  We'll randomize the "right" options in the dropdown, user picks them. If
 *  user's choice for each left item matches the correct "right" => correct.
 */
const MatchingPairsQuiz = ({
                               pairs,
                               explanation,
                               onQuizComplete
                           }) => {
    const [selected, setSelected] = useState(Array(pairs.length).fill(""));
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const toast = useToast();

    // Collect all 'right' items
    const rightItems = pairs.map((p) => p.right);
    // Let's randomize them for the dropdown
    const shuffledRightItems = [...rightItems].sort(() => Math.random() - 0.5);

    const handleSelectChange = (value, index) => {
        if (isAnswered) return;
        const updated = [...selected];
        updated[index] = value;
        setSelected(updated);
    };

    const handleCheck = () => {
        // verify each left item is matched with its correct right
        // correct if selected[index] === pairs[index].right
        for (let i = 0; i < pairs.length; i++) {
            if (selected[i] !== pairs[i].right) {
                setIsCorrect(false);
                setIsAnswered(true);
                return;
            }
        }
        // if we never returned, all matched
        setIsCorrect(true);
        setIsAnswered(true);
        if (onQuizComplete) {
            onQuizComplete();
        }
    };

    return (
        <Box
            p={6}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            bg="white"
            maxW="600px"
            mx="auto"
        >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Ordne die passenden Paare zu
            </Text>
            <VStack spacing={4} align="stretch">
                {pairs.map((pair, idx) => (
                    <HStack key={idx} spacing={3}>
                        <Box flex="1" p={2} bg="gray.50" borderRadius="md">
                            {pair.left}
                        </Box>
                        <Select
                            placeholder="Passendes Gegenstück wählen"
                            value={selected[idx]}
                            onChange={(e) => handleSelectChange(e.target.value, idx)}
                            isDisabled={isAnswered}
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
                    colorScheme="blue"
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
                        color={isCorrect ? "green.500" : "red.500"}
                    >
                        {isCorrect ? "Super, alle korrekt zugeordnet!" : "Leider falsch. Schau nochmal hin!"}
                    </Text>

                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
};

export default MatchingPairsQuiz;
