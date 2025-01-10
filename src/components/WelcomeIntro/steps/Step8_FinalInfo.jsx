// src/components/WelcomeIntro/steps/Step8_FinalInfo.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Step8_FinalInfo({ onContinue }) {
    const message = "You’re on your way now! If you like bending your mind over interesting problems or want to explore a rich world full of beautiful mysteries, this app will be a sure thing for you.";

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="xl">{message}</Text>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={onContinue}
                    aria-label="Continue to Login"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step8_FinalInfo.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step8_FinalInfo;
