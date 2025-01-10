// src/components/WelcomeIntro/steps/Step4_InfoSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';

function Step4_InfoSection({ onContinue }) {
    const message = "Your custom message here. This section can provide additional information to the user before proceeding.";

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="xl">{message}</Text>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={onContinue}
                    aria-label="Continue to Math Comfort Level"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step4_InfoSection.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step4_InfoSection;
