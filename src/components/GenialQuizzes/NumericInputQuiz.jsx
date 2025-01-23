// File: src/components/GenialQuizzes/NumericInputQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Input,
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

function NumericInputQuiz({
                              question,
                              correctNumber,
                              explanation,
                              onQuizComplete,
                          }) {
    const [userAnswer, setUserAnswer] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleCheck = () => {
        if (!userAnswer.trim()) {
            toast({
                title: "Bitte trage eine Zahl ein.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const numericUser = parseFloat(userAnswer.replace(",", "."));
        const numericCorrect = parseFloat(correctNumber);

        if (!isNaN(numericUser) && numericUser === numericCorrect) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
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
            <Text fontSize="xl" fontWeight="bold" color="black" mb={1}>
                {question}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={5}>
                Gib eine Zahl ein und klicke auf „Antwort prüfen“.
            </Text>

            {!isAnswered && (
                <>
                    <Tooltip label="Nur Zahlen eingeben" hasArrow>
                        <Input
                            placeholder="Zahl eingeben"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            border="2px solid"
                            borderColor={BLUE}
                            bg={BEIGE}
                            color="black"
                            _hover={{
                                borderColor: BLUE,
                            }}
                            _focus={{
                                borderColor: BLUE,
                                boxShadow: "0 0 0 1px #30628b",
                            }}
                            fontSize="lg"
                        />
                    </Tooltip>

                    <Button
                        mt={4}
                        bg="black"
                        color="white"
                        _hover={{
                            bg: "#333333",
                            transform: "scale(1.02)",
                        }}
                        _active={{
                            transform: "scale(0.98)",
                        }}
                        transition="all 0.2s"
                        onClick={handleCheck}
                    >
                        Antwort prüfen
                    </Button>
                </>
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
                            {isCorrect ? "Richtig!" : "Falsch!"}
                        </Text>
                    </Flex>
                    <ExplanationReveal explanation={explanation} />
                </ScaleFade>
            )}
        </Box>
    );
}

export default NumericInputQuiz;
