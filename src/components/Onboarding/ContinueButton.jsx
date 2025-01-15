// src/components/Onboarding/ContinueButton.jsx
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function ContinueButton({
                            onClick = () => {},
                            isDisabled = false,
                            ariaLabel = "Continue",
                            children,
                        }) {
    return (
        <Button
            bg="black"
            color="white"
            size="lg"
            onClick={onClick}
            isDisabled={isDisabled}
            aria-label={ariaLabel}
            _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
        >
            {children}
        </Button>
    );
}

ContinueButton.propTypes = {
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ContinueButton;
