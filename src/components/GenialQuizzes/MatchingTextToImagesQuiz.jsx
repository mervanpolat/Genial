// File: src/components/GenialQuizzes/MatchingTextToImagesQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    HStack,
    Select,
    Image,
    Button,
    Flex,
    ScaleFade,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";

/**
 * A skeleton: Each item is { text: 'Sinusfunktion', correctImg: 'sin.png' }
 * We'll let the user pick from a shuffled list of image filenames in a <Select>.
 */
function MatchingTextToImagesQuiz({ items, imageOptions, onQuizComplete }) {
    const [selected, setSelected] = useState(Array(items.length).fill(""));
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const shuffledImages = [...imageOptions].sort(() => Math.random() - 0.5);

    const handleChange = (value, idx) => {
        if (isAnswered) return;
        const upd = [...selected];
        upd[idx] = value;
        setSelected(upd);
    };

    const handleCheck = () => {
        for (let i = 0; i < items.length; i++) {
            if (selected[i] !== items[i].correctImg) {
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
            <Text fontSize="xl" fontWeight="bold" color="black" mb={4}>
                Ordne den Texten die korrekten Bilder zu
            </Text>

            <VStack spacing={4}>
                {items.map((item, idx) => (
                    <HStack key={idx} w="100%" alignItems="center" spacing={3}>
                        <Box
                            flex="1"
                            p={2}
                            bg={BEIGE}
                            border="2px solid"
                            borderColor={BLUE}
                            borderRadius="md"
                            fontWeight="bold"
                        >
                            {item.text}
                        </Box>
                        <Select
                            placeholder="Wähle ein Bild"
                            value={selected[idx]}
                            onChange={(e) => handleChange(e.target.value, idx)}
                            isDisabled={isAnswered}
                        >
                            {shuffledImages.map((imgSrc) => (
                                <option key={imgSrc} value={imgSrc}>
                                    {imgSrc}
                                </option>
                            ))}
                        </Select>
                    </HStack>
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
                <ScaleFade in={isAnswered}>
                    <Flex alignItems="center" mt={4}>
                        {isCorrect ? (
                            <CheckCircleIcon boxSize="1.5em" color={GREEN} mr={2} />
                        ) : (
                            <CloseIcon boxSize="1em" color={RED} mr={2} />
                        )}
                        <Text fontWeight="bold" color={isCorrect ? GREEN : RED} fontSize="lg">
                            {isCorrect ? "Alles richtig!" : "Zuordnungen prüfen!"}
                        </Text>
                    </Flex>
                </ScaleFade>
            )}
        </Box>
    );
}

export default MatchingTextToImagesQuiz;
