// File: src/components/Quiz/GraphPlottingQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Button,
    Flex,
    ScaleFade,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const CARD_BG = "#f2e8d5";
const BLUE = "#30628b";
const GREEN = "#3bb25a";
const RED = "#c03b2d";

/**
 * Minimal placeholder: "Click the coordinate plane to place your point."
 * Real usage would display a coordinate plane or a library-based chart.
 */
function GraphPlottingQuiz({ question, correctPoint, onQuizComplete }) {
    const [userPoint, setUserPoint] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleCanvasClick = (e) => {
        if (isAnswered) return;
        // pretend we get coordinates from e
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        setUserPoint({ x: randomX, y: randomY });
    };

    const handleCheck = () => {
        if (userPoint && userPoint.x === correctPoint.x && userPoint.y === correctPoint.y) {
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
            textAlign="center"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={2}>
                {question}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={4}>
                Klicke auf das Koordinatensystem, um einen Punkt zu setzen.
            </Text>

            <Box
                w="300px"
                h="300px"
                bg="white"
                mx="auto"
                mb={4}
                border="1px solid #ccc"
                onClick={handleCanvasClick}
                position="relative"
                cursor={isAnswered ? "not-allowed" : "crosshair"}
            >
                {userPoint && (
                    <Box
                        position="absolute"
                        bg={BLUE}
                        borderRadius="50%"
                        width="10px"
                        height="10px"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    />
                )}
            </Box>

            {!isAnswered && userPoint && (
                <Button
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
                            {isCorrect
                                ? "Perfekt platziert!"
                                : `Dein Punkt ist (${userPoint.x}, ${userPoint.y}).`}
                        </Text>
                    </Flex>
                </ScaleFade>
            )}
        </Box>
    );
}

export default GraphPlottingQuiz;
