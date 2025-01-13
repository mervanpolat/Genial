import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Box,
    Text,
} from "@chakra-ui/react";

/**
 * A reusable "Why?" accordion button that:
 * - Stays "inline-flex" so it doesn’t expand across the whole parent
 * - Has a transparent background & black border
 * - Retains the same size (no transform) on click or hover
 * - Now aligned on the left
 */
const WhyAccordion = ({ explanation }) => {
    return (
        <Box textAlign="left" mt={4}>
            {/* Changed from textAlign="right" to "left" */}
            <Accordion allowToggle display="inline-block" border="none">
                <AccordionItem border="none">
                    <AccordionButton
                        as={Button}
                        variant="unstyled"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        width="auto"
                        borderRadius="m"
                        border="1px solid black"
                        bg="transparent"
                        color="black"
                        px="19px"
                        py="6px"
                        transition="border-color 0.2s ease-in-out"
                        _hover={{
                            borderColor: "rgba(0, 0, 0, 0.4)",
                        }}
                        _active={{
                            bg: "transparent",
                            transform: "none",
                        }}
                        _expanded={{
                            bg: "transparent",
                            transform: "none",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        <Text mr={2} whiteSpace="nowrap">
                            Warum?
                        </Text>
                        <AccordionIcon color="black" />
                    </AccordionButton>

                    <AccordionPanel pb={4}>{explanation}</AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default WhyAccordion;
