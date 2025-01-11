// src/components/WelcomeIntro/ContinueButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

function ContinueButton({ onClick, isDisabled, ariaLabel, children }) {
    return (
        <Button
            bg="black"
            color="white"
            size="lg"
            onClick={onClick}
            isDisabled={isDisabled}
            aria-label={ariaLabel}
            _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }} // Slightly transparent black on hover
        >
            {children}
        </Button>
    );
}

ContinueButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
};

ContinueButton.defaultProps = {
    isDisabled: false,
    ariaLabel: 'Continue',
};

export default ContinueButton;
