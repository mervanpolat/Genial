// File: src/components/GenialQuizzes/ExplanationReveal.jsx

import React, { useState } from "react";
import { Box, Button, Text, Collapse } from "@chakra-ui/react";

// We’ll keep a subtle color for the reveal background
const EXPL_BG = "#f9edda";

const ExplanationReveal = ({ explanation }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!explanation) return null;

    return (
        <Box mt={4} textAlign="left">
            <Button
                size="sm"
                variant="outline"
                onClick={() => setIsOpen((prev) => !prev)}
                borderColor="#30628b"
                color="#30628b"
                bg="#faf3dc"
                _hover={{
                    bg: "#f0c34e",
                    borderColor: "#30628b",
                    transform: "scale(1.02)",
                }}
                _active={{
                    transform: "scale(0.98)",
                }}
                transition="all 0.2s"
            >
                {isOpen ? "Erklärung verbergen" : "Erklärung anzeigen"}
            </Button>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    mt={2}
                    p={3}
                    bg={EXPL_BG}
                    borderRadius="md"
                    border="2px solid"
                    borderColor="#30628b"
                >
                    <Text fontSize="sm" color="black">
                        {explanation}
                    </Text>
                </Box>
            </Collapse>
        </Box>
    );
};

export default ExplanationReveal;
