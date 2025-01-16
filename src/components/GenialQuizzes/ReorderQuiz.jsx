// File: src/components/GenialQuizzes/ReorderQuiz.jsx
import React, { useState } from "react";
import { Box, Text, Wrap, WrapItem, Button, useToast } from "@chakra-ui/react";
import ExplanationReveal from "./ExplanationReveal";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";
const YELLOW = "#f0c34e";

function ReorderQuiz({
                         prompt,
                         initialWords,
                         correctOrder,
                         explanation,
                         onQuizComplete,
                     }) {
    const [words, setWords] = useState(initialWords);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const toast = useToast();

    const handleWordClick = (idx) => {
        if (isAnswered) return;
        const newArr = [...words];
        const [removed] = newArr.splice(idx, 1);
        newArr.push(removed);
        setWords(newArr);
    };

    const handleCheck = () => {
        if (words.length !== correctOrder.length) return;
        const correct = words.join(" ") === correctOrder.join(" ");
        setIsCorrect(correct);
        setIsAnswered(true);

        // *** ALWAYS call onQuizComplete ***
        if (onQuizComplete) onQuizComplete();
    };

    const getButtonStyle = () => {
        if (isAnswered) {
            return isCorrect
                ? { bg: GREEN, borderColor: BLUE, color: "white" }
                : { bg: RED, borderColor: BLUE, color: "white" };
        }
        return {
            bg: BEIGE,
            borderColor: BLUE,
            color: "black",
        };
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
            boxShadow="sm"
        >
            <Text
                fontSize={{ base: "xl", md: "lg" }}
                fontWeight="bold"
                mb={3}
                color="black"
            >
                {prompt}
            </Text>

            <Wrap spacing={2} mb={4}>
                {words.map((word, idx) => {
                    const styleProps = getButtonStyle();
                    return (
                        <WrapItem key={idx}>
                            <Button
                                variant="outline"
                                border="2px solid"
                                borderColor={styleProps.borderColor}
                                bg={styleProps.bg}
                                color={styleProps.color}
                                transition="all 0.2s"
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
                                onClick={() => handleWordClick(idx)}
                                isDisabled={isAnswered}
                                fontSize={{ base: "xl", md: "lg" }}
                            >
                                {word}
                            </Button>
                        </WrapItem>
                    );
                })}
            </Wrap>

            {!isAnswered && (
                <Button
                    bg="black"
                    color="white"
                    _hover={{ bg: "#333333", transform: "scale(1.02)" }}
                    _active={{ transform: "scale(0.98)" }}
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
                        {isCorrect ? "Richtig!" : "Falsche Reihenfolge!"}
                    </Text>
                    <ExplanationReveal explanation={explanation} />
                </>
            )}
        </Box>
    );
}

export default ReorderQuiz;
