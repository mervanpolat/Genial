// File: src/components/GenialQuizzes/ReorderQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Wrap,
    WrapItem,
    Button,
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
            boxShadow="lg"
            transition="all 0.3s"
        >
            <Text fontSize="xl" fontWeight="bold" mb={1} color="black">
                {prompt}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={4}>
                Klicke auf die Wörter, um sie nach hinten zu verschieben und die Reihenfolge zu ändern.
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
                                            bg: YELLOW,
                                            borderColor: BLUE,
                                            boxShadow: "md",
                                            transform: "scale(1.02)",
                                        }),
                                }}
                                _active={{ transform: "scale(0.98)" }}
                                onClick={() => handleWordClick(idx)}
                                isDisabled={isAnswered}
                                fontSize="lg"
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
                            {isCorrect ? "Richtig!" : "Falsche Reihenfolge!"}
                        </Text>
                    </Flex>
                    <ExplanationReveal explanation={explanation} />
                </ScaleFade>
            )}
        </Box>
    );
}

export default ReorderQuiz;
