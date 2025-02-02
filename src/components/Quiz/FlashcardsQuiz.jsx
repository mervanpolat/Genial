// File: src/components/Quiz/FlashcardsQuiz.jsx

import React, { useState } from "react";
import { Box, Text, Button, ScaleFade } from "@chakra-ui/react";

const CARD_BG = "#f2e8d5";
const BLUE = "#30628b";
const BEIGE = "#faf3dc";

function FlashcardsQuiz({ frontText, backText }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <Box
            p={6}
            borderRadius="md"
            border="2px solid"
            borderColor={BLUE}
            bg={CARD_BG}
            maxW="400px"
            mx="auto"
            mt={6}
            boxShadow="lg"
            textAlign="center"
        >
            <ScaleFade in={!flipped} unmountOnExit>
                {!flipped && (
                    <Text fontSize="xl" fontWeight="bold" color="black" minH="60px">
                        {frontText}
                    </Text>
                )}
            </ScaleFade>
            <ScaleFade in={flipped} unmountOnExit>
                {flipped && (
                    <Text fontSize="xl" fontWeight="bold" color="black" minH="60px">
                        {backText}
                    </Text>
                )}
            </ScaleFade>

            <Button
                mt={4}
                bg="black"
                color="white"
                onClick={() => setFlipped((prev) => !prev)}
                _hover={{ bg: "#333333" }}
            >
                {flipped ? "Zurück" : "Umdrehen"}
            </Button>
        </Box>
    );
}

export default FlashcardsQuiz;
