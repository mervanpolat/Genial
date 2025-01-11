// src/components/WelcomeIntro/steps/Step9_LoginPage.jsx
import React from 'react';
import { VStack, Text, Button, Flex, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import LoginPopper from '../../LandingPage/LoginPopper/LoginPopper.jsx';

function Step9_LoginPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            p={8}
            direction="column"
            align="center"
            justify="center"
            h="100vh" // Full screen height for vertical centering
            bg="#faf3dc"
        >
            {/* Image component */}
            <Image
                src="src/components/WelcomeIntro/assets/icon1.png"
                alt="Login Illustration"
                boxSize="200px"
                mb={6}
                objectFit="contain"
            />

            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    Dein individueller Lernweg wartet auf dich. Registriere dich kostenlos und fange an, dein Wissen auszubauen.
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

                <LoginPopper isOpen={isOpen} onClose={onClose} />
            </VStack>
        </Flex>
    );
}

export default Step9_LoginPage;
