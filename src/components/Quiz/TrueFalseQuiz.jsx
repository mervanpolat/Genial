// File: src/components/Quiz/TrueFalseQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Button,
    HStack,
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

        if (onQuizComplete) onQuizComplete();
    };

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
        // Before answering
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
            boxShadow="lg"
            transition="all 0.3s"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={1}>
                {statement}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={5}>
                Wähle „Wahr“ oder „Falsch“ und klicke auf „Antwort prüfen“.
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
                            fontSize="lg"
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
                <ScaleFade initialScale={0.9} in={isAnswered}>
                    <Flex alignItems="center" justifyContent="center" mt={4}>
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
                    <ExplanationReveal explanation={explanation} />
                </ScaleFade>
            )}
        </Box>
    );
}

export default TrueFalseQuiz;
