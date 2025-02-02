// File: src/components/Quiz/LatexInputQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Textarea,
    Button,
    Flex,
    ScaleFade,
    useToast,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const CARD_BG = "#f2e8d5";
const BLUE = "#30628b";
const GREEN = "#3bb25a";
const RED = "#c03b2d";

function LatexInputQuiz({ question, correctLatex, onQuizComplete }) {
    const [userLatex, setUserLatex] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleCheck = () => {
        if (!userLatex.trim()) {
            toast({
                title: "Bitte gib einen LaTeX-Ausdruck ein.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        // Very naive check: see if strings match ignoring whitespace
        const cleanInput = userLatex.replace(/\s+/g, "");
        const cleanCorrect = correctLatex.replace(/\s+/g, "");
        if (cleanInput === cleanCorrect) {
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
            textAlign="center"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={2}>
                {question}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={4}>
                Gib den passenden LaTeX-Code ein (z.B. <code>\frac{1}{2}</code>).
            </Text>

            {!isAnswered && (
                <Textarea
                    placeholder="z.B. \frac{1}{2}"
                    value={userLatex}
                    onChange={(e) => setUserLatex(e.target.value)}
                    size="md"
                    border="2px solid"
                    borderColor={BLUE}
                />
            )}

            {!isAnswered && (
                <Button
                    mt={3}
                    bg="black"
                    color="white"
                    onClick={handleCheck}
                    _hover={{ bg: "#333333", transform: "scale(1.02)" }}
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
                            {isCorrect ? "Korrekte LaTeX-Eingabe!" : "Leider falsch."}
                        </Text>
                    </Flex>
                </ScaleFade>
            )}
        </Box>
    );
}

export default LatexInputQuiz;
