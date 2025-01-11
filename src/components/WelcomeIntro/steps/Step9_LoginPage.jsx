import React from 'react';
import { Box, VStack, Text, Button, Image, useDisclosure } from '@chakra-ui/react';

import OnboardingLayout from '../OnboardingLayout.jsx';
import LoginPopper from '../../LandingPage/LoginPopper/LoginPopper.jsx';

function Step9_LoginPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <OnboardingLayout>
            <Box
                p={4}
                textAlign="center"
                width="full"
                maxWidth="800px"
                mx="auto"
                mt={8}
            >
                <VStack spacing={6} align="center">
                    <Image
                        src="src/components/WelcomeIntro/assets/proposition_10_figure.svg"
                        alt="Login Illustration"
                        maxW="250px"
                        objectFit="contain"
                        mb={6}
                    />

                    <Text fontSize="xl" fontWeight="normal" textAlign="center">
                        Dein individueller Lernweg wartet auf dich. Registriere dich
                        kostenlos und fange an, dein Wissen auszubauen.
                    </Text>

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

                    {/* LoginPopper */}
                    <LoginPopper isOpen={isOpen} onClose={onClose} />
                </VStack>
            </Box>
        </OnboardingLayout>
    );
}

export default Step9_LoginPage;
