// File: src/components/GenialQuizzes/ExplanationReveal.jsx
import React, { useState } from "react";
import { Box, Button, Text, Collapse } from "@chakra-ui/react";

const ExplanationReveal = ({ explanation }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!explanation) return null;

    return (
        <Box mt={4} textAlign="left">
            <Button
                size="sm"
                variant="outline"
                onClick={() => setIsOpen((prev) => !prev)}
                colorScheme="gray"
                _hover={{ bg: "gray.100" }}
            >
                {isOpen ? "Erklärung verbergen" : "Erklärung anzeigen"}
            </Button>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    mt={2}
                    p={3}
                    bg="gray.50"
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.200"
                >
                    <Text fontSize="sm">{explanation}</Text>
                </Box>
            </Collapse>
        </Box>
    );
};

export default ExplanationReveal;
