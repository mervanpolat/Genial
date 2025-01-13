// File: src/components/Quizzes/shares/PrimaryButton.jsx
import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

/**
 * A reusable button with:
 * - black background
 * - white font
 * - slight scale on hover
 * - optional left icon (defaults to ArrowForwardIcon)
 *
 * Usage:
 *   <PrimaryButton onClick={...}>Prüfen</PrimaryButton>
 */
const PrimaryButton = ({ children, leftIcon, onClick, ...props }) => {
    return (
        <Button
            bg="black"
            color="white"
            leftIcon={leftIcon || <ArrowForwardIcon />}
            _hover={{
                transform: "scale(1.01)",
                boxShadow: "md",
            }}
            transition="transform 0.2s"
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
