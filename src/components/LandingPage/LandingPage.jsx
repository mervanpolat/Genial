import React, { useState } from 'react';
import { Box, Button, Heading, Text, Image, Flex, Grid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Loading state

    const handleStart = () => {
        setLoading(true); // Start loading

        // Simulate a delay before navigation (remove if unnecessary)
        setTimeout(() => {
            navigate('/welcome'); // Redirect to Step1_Welcome page
            setLoading(false); // Reset loading state after navigation
        }, 1000);
    };

    return (
        <Box textAlign="center" py="8" maxW="1200px" mx="auto">
            {/* Hero Content */}
            <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb="4">
                Learn by doing.
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.6" mb="6">
                Interaktives Problemlösen, das effektiv und unterhaltsam ist. <br />
                Bereite dich mühelos auf die Mathematik-Zentralmatura und Schularbeiten vor – egal ob AHS oder BHS.
            </Text>
            <Button
                onClick={handleStart}
                variant="outline"
                borderColor="black"
                color="black"
                _hover={{ bg: 'blackAlpha.100' }}
                mb="8"
                isLoading={loading} // Apply loading state
                loadingText="Loslegen" // Text during loading
            >
                Loslegen
            </Button>

            {/* Video Section */}
            <Box maxW="800px" mx="auto" mb="16" overflow="hidden" borderRadius="md">
                <Box
                    as="video"
                    src="/videos/LandingPage_Sinusfunktion.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    w="100%"
                    h="auto"
                    maxH="400px"
                    objectFit="contain"
                />
            </Box>

            {/* Concepts Section */}
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap="8"
                maxW="1000px"
                mx="auto"
                mb="16"
                px="4"
            >
                <Box>
                    <Heading as="h2" fontSize="2xl" mb="4">
                        KONZEPTE, DIE LICHT INS DUNKEL BRINGEN.
                    </Heading>
                    <Text fontSize="lg" lineHeight="1.6">
                        Interaktive Lektionen machen komplexe Themen leicht zugänglich. Direktes Feedback sorgt dafür,
                        dass du schneller verstehst.
                    </Text>
                </Box>
                <Image src="/images/LandingPage/ZRegel.png" alt="Konzept Grafik" objectFit="cover" />
            </Grid>

            {/* Kursinhalt Section */}
            <Box textAlign="center" maxW="1000px" mx="auto" mb="16" px="4">
                <Heading as="h2" fontSize="2xl" mb="4">
                    KURSINHALT.
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" mb="8">
                    Genial hilft dir, die österreichische Mathematikmatura spielend zu meistern – mit perfekt
                    abgestimmten Übungen.
                </Text>
                <Flex justify="center" gap="8" mb="8" wrap={{ base: 'wrap', md: 'nowrap' }}>
                    <Image
                        src="/images/LandingPage/Bundesministerium.png"
                        alt="Bundesministerium: Bildung, Wissenschaft und Forschung"
                        maxH="100px"
                    />
                    <Image src="/images/LandingPage/bifie.png" alt="Bundesinstitut bifie" maxH="100px" />
                </Flex>
            </Box>

            {/* Technologieeinsatz Section */}
            <Box textAlign="center" maxW="1000px" mx="auto" mb="16" px="4">
                <Heading as="h2" fontSize="2xl" mb="4">
                    TECHNOLOGIE.
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" mb="8">
                    Egal, ob du GeoGebra, den TI-Nspire CX CAS, TI-82, TI-84 oder den CASIO ClassPad II verwendest,
                    Genial sorgt für eine optimale Vorbereitung mit Leichtigkeit.
                </Text>

                <Flex justify="center" gap="8" mb="8" wrap={{ base: 'wrap', md: 'nowrap' }} maxW="250px" mx="auto">
                    <Image src="/images/LandingPage/Casio.svg" alt="Casio Logo" borderRadius="md" maxH="100px" />
                    <Image src="/images/LandingPage/TexasInstruments.svg" alt="Texas Instruments Logo" borderRadius="md" maxH="100px" />
                    <Image src="/images/LandingPage/Geogebra.svg" alt="Geogebra Logo" borderRadius="md" maxH="100px" />
                </Flex>
            </Box>
        </Box>
    );
}

export default LandingPage;
