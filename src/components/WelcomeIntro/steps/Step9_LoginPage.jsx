// src/components/WelcomeIntro/steps/Step9_LoginPage.jsx
import React from 'react';
import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import LoginPopper from '../../LandingPage/LoginPopper/LoginPopper.jsx';

function Step9_LoginPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            p={4}
            textAlign="center"
            width="full"
            maxWidth="800px"
            mx="auto"
            mt={8}
        >
            <VStack spacing={6} align="center">
                {/* Image Section */}
                <Image
                    src="src/components/WelcomeIntro/assets/proposition_10_figure.svg"
                    alt="Login Illustration"
                    maxW="400px"
                    objectFit="contain"
                    mb={6}
                />

                {/* Supporting Text Section */}
                <Text fontSize="xl" fontWeight="bold" textAlign="center">
                    Dein individueller Lernweg wartet auf dich. Registriere dich kostenlos und fange an, dein Wissen auszubauen.
                </Text>

                {/* Login Button */}
                <Button
                    bg="black"
                    color="white"
                    size="lg"
                    onClick={onOpen}
                    aria-label="Open Login Popper"
                    _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
                >
                    Anmelden
                </Button>

                {/* Login Popper */}
                <LoginPopper isOpen={isOpen} onClose={onClose} />
            </VStack>
        </Box>
    );
}

export default Step9_LoginPage;
