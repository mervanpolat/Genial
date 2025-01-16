// File: src/components/GenialQuizzes/TrueFalseQuiz.jsx
import React, { useState } from "react";
import { Box, Text, Button, HStack, useToast } from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";
const YELLOW = "#f0c34e";

function TrueFalseQuiz({ statement, isTrue, explanation, onQuizComplete }) {
    const [userAnswer, setUserAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleUserAnswer = (val) => {
        if (isAnswered) return;
        setUserAnswer(val);
    };

    const handleCheckAnswer = () => {
        if (userAnswer === null) {
            toast({
                title: "Bitte wähle wahr oder falsch.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const correct = (userAnswer === "true") === isTrue;
        setIsCorrect(correct);
        setIsAnswered(true);

        // *** Always call onQuizComplete ***
        if (onQuizComplete) onQuizComplete();
    };

    // same style as before
    const getButtonStyle = (val) => {
        if (isAnswered) {
            const userChoseThis = userAnswer === val;
            const correctVal = isTrue ? "true" : "false";

            if (userChoseThis && val === correctVal) {
                return { bg: GREEN, borderColor: BLUE, color: "white" };
            } else if (userChoseThis && val !== correctVal) {
                return { bg: RED, borderColor: BLUE, color: "white" };
            } else if (val === correctVal) {
                return { bg: GREEN, borderColor: BLUE, color: "white" };
            }
            return { bg: BEIGE, borderColor: BLUE, color: "black" };
        }
        const isSelected = userAnswer === val;
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
            textAlign="center"
            boxShadow="sm"
        >
            <Text
                fontSize={{ base: "xl", md: "lg" }}
                fontWeight="bold"
                mb={4}
                color="black"
            >
                {statement}
            </Text>

            <HStack spacing={6} justify="center">
                {["true", "false"].map((val) => {
                    const styleProps = getButtonStyle(val);
                    return (
                        <Button
                            key={val}
                            border="2px solid"
                            borderColor={styleProps.borderColor}
                            bg={styleProps.bg}
                            color={styleProps.color}
                            _hover={{
                                ...(isAnswered
                                    ? {}
                                    : {
                                        bg: styleProps.bg === BLUE ? BLUE : YELLOW,
                                        borderColor: BLUE,
                                        boxShadow: "md",
                                        transform: "scale(1.02)",
                                    }),
                            }}
                            _active={{ transform: "scale(0.98)" }}
                            transition="all 0.2s"
                            onClick={() => handleUserAnswer(val)}
                            isDisabled={isAnswered}
                            fontSize={{ base: "xl", md: "lg" }}
                        >
                            {val === "true" ? "Wahr" : "Falsch"}
                        </Button>
                    );
                })}
            </HStack>

            {!isAnswered && (
                <Button
                    mt={6}
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
                <Box mt={4} textAlign="center">
                    <Text
                        fontWeight="bold"
                        color={isCorrect ? GREEN : RED}
                        fontSize={{ base: "xl", md: "lg" }}
                    >
                        {isCorrect ? "Richtig!" : "Falsch!"}
                    </Text>
                    <ExplanationReveal explanation={explanation} />
                </Box>
            )}
        </Box>
    );
}

export default TrueFalseQuiz;
