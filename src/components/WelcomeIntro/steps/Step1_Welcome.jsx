// src/components/WelcomeIntro/steps/Step1_Welcome.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack, Image } from '@chakra-ui/react';

function Step1_Welcome({ onContinue }) {
    return (
        <Box p={8} textAlign="center">
            <VStack spacing={10}>
                <Image src="src/components/WelcomeIntro/assets/Intro.png" alt="Step1_Welcome" boxSize="350px" />
                <Text fontSize="2xl" fontWeight="bold">
                    Hallo, lass uns einen Lernpfad nur für dich erstellen.
                </Text>

                {/* Continue Button */}
                <Button
                    colorScheme="blackAlpha"
                    bg="black"
                    color="white"
                    size="lg"
                    _hover={{ bg: 'gray.700' }}
                    onClick={onContinue}
                    aria-label="Continue to Goal Selection"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step1_Welcome.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step1_Welcome;
