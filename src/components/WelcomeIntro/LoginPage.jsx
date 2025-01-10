import React from 'react';
import { Box, VStack, Text, useDisclosure } from '@chakra-ui/react';
import LoginPopper from '../LandingPage/LoginPopper/LoginPopper.jsx';

function LoginPage() {
    const { isOpen, onClose } = useDisclosure(); // Manage open/close state

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Please log in to continue
                </Text>
                {/* Trigger LoginPopper on button click */}
                <LoginPopper isOpen={isOpen} onClose={onClose} />
                <Text fontSize="sm" color="gray.500">
                    Click the button above to start the login process.
                </Text>
            </VStack>
        </Box>
    );
}

export default LoginPage;
