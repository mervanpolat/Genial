// File: src/components/GenialQuizzes/MCQQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Button,
    VStack,
    Flex,
    useToast,
    ScaleFade,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import ExplanationReveal from "./ExplanationReveal";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";

function MCQQuiz({
                     question,
                     options,
                     correctAnswerIndex,
                     explanation,
                     onQuizComplete,
                 }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleSelect = (idx) => {
        if (isAnswered) return;
        setSelectedIndex(idx);
    };

    const handleCheckAnswer = () => {
        if (selectedIndex === null) {
            toast({
                title: "Bitte wähle eine Option aus.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const correct = selectedIndex === correctAnswerIndex;
        setIsCorrect(correct);
        setIsAnswered(true);

        if (onQuizComplete) onQuizComplete();
    };

    // Button style logic
    const getButtonStyle = (idx) => {
        if (isAnswered) {
            // After submitting
            if (idx === selectedIndex) {
                // The user's choice
                return isCorrect
                    ? { bg: GREEN, borderColor: BLUE, color: "white" }
                    : { bg: RED, borderColor: BLUE, color: "white" };
            }
            if (idx === correctAnswerIndex) {
                // Mark the correct option
                return { bg: GREEN, borderColor: BLUE, color: "white" };
            }
            // Others remain neutral
            return { bg: BEIGE, borderColor: BLUE, color: "black" };
        }

        // Before submitting
        const isSelected = idx === selectedIndex;
        if (isSelected) {
            return { bg: BLUE, borderColor: BLUE, color: "white" };
        }
        return { bg: BEIGE, borderColor: BLUE, color: "black" };
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
            transition="all 0.3s"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={1}>
                {question}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={5}>
                Wähle eine der folgenden Optionen:
            </Text>

            <SimpleGrid columns={[1, 2]} spacing={4}>
                {options.map((option, idx) => {
                    const styleProps = getButtonStyle(idx);
                    return (
                        <Button
                            key={idx}
                            border="2px solid"
                            borderColor={styleProps.borderColor}
                            bg={styleProps.bg}
                            color={styleProps.color}
                            px={4}
                            py={6}
                            whiteSpace="normal"
                            textAlign="center"
                            transition="all 0.2s"
                            _hover={{
                                ...(isAnswered
                                    ? {}
                                    : {
                                        bg: styleProps.bg === BLUE ? BLUE : "#e2d7b7",
                                        boxShadow: "md",
                                        transform: "scale(1.02)",
                                    }),
                            }}
                            _active={{
                                transform: "scale(0.98)",
                            }}
                            fontSize="lg"
                            onClick={() => handleSelect(idx)}
                            isDisabled={isAnswered}
                        >
                            {option}
                        </Button>
                    );
                })}
            </SimpleGrid>

            <VStack mt={6}>
                {!isAnswered && (
                    <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "#333333", transform: "scale(1.02)" }}
                        _active={{ transform: "scale(0.98)" }}
                        onClick={handleCheckAnswer}
                    >
                        Antwort prüfen
                    </Button>
                )}

                {isAnswered && (
                    <ScaleFade initialScale={0.9} in={isAnswered}>
                        <Flex alignItems="center" mt={2}>
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
                                {isCorrect ? "Richtig!" : "Falsch!"}
                            </Text>
                        </Flex>
                        <Box width="100%" textAlign="left" mt={2}>
                            <ExplanationReveal explanation={explanation} />
                        </Box>
                    </ScaleFade>
                )}
            </VStack>
        </Box>
    );
}

export default MCQQuiz;
