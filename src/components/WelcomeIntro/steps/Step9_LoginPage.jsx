// src/components/WelcomeIntro/steps/Step9_LoginPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import LoginPopper from '../../LandingPage/LoginPopper/LoginPopper.jsx';

function Step9_LoginPage({ onContinue }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Please log in to continue
                </Text>
                {/* Trigger LoginPopper on button click */}
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={onOpen}
                    aria-label="Open Login Popper"
                >
                    Login
                </Button>
                <LoginPopper isOpen={isOpen} onClose={onClose} />
                <Text fontSize="sm" color="gray.500">
                    Click the button above to start the login process.
                </Text>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={onContinue}
                    aria-label="Continue after Login"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step9_LoginPage.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step9_LoginPage;
