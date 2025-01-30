// File: src/Matura/Module/1_Grundlagen/Lektionen/SieveVisualization.jsx

import React, { useState, useEffect, useMemo } from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    SimpleGrid,
    Flex,
    useBreakpointValue,
    useToast,
    Icon,
} from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

/**
 * LIMITED BYRNE'S COLOR PALETTE
 */
const BYRNE_COLORS = {
    beige:  "#FAF3DC", // Page background & default cell background
    green:   "#48A346", // Prime-past
    red:    "#C03B2D", // Crossed (both past & current)
    yellow: "#F0C34E", // Prime-current
    black:    "#000000",
};

/**
 * Generate sieve steps up to `n`.
 */
function generateSieveSteps(n) {
    const crossed = new Array(n + 1).fill(false);
    const steps = [];
    for (let i = 2; i <= n; i++) {
        if (!crossed[i]) {
            const multiples = [];
            for (let j = i * 2; j <= n; j += i) {
                if (!crossed[j]) {
                    crossed[j] = true;
                    multiples.push(j);
                }
            }
            steps.push({ prime: i, multiples });
        }
    }
    return steps;
}

export default function SieveVisualization() {
    // Numbers from 2..120
    const numbers = useMemo(() => Array.from({ length: 119 }, (_, i) => i + 2), []);

    // Generate steps once
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        setSteps(generateSieveSteps(120));
    }, []);

    // Steps control
    const totalSteps = steps.length;
    const [currentStep, setCurrentStep] = useState(0);

    // Auto-play control
    const [isPlaying, setIsPlaying] = useState(false);
    const toast = useToast();

    /**
     * If isPlaying, automatically move forward every 800ms
     */
    useEffect(() => {
        if (!isPlaying) return undefined;

        const timer = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev >= totalSteps) {
                    setIsPlaying(false);
                    clearInterval(timer);
                    toast({
                        title: "Alle Schritte abgeschlossen",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                    });
                    return prev;
                }
                return prev + 1;
            });
        }, 800);

        return () => clearInterval(timer);
    }, [isPlaying, totalSteps, toast]);

    /** Manual step controls */
    const goPrevStep = () => {
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };

    const goNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        } else {
            toast({
                title: "Ende erreicht",
                status: "info",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    const resetSteps = () => {
        setCurrentStep(0);
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        if (currentStep >= totalSteps) {
            toast({
                title: "Alle Schritte abgeschlossen",
                status: "info",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        setIsPlaying((prev) => !prev);
    };

    /**
     * Determine the status of a number
     *  - "prime-past", "prime-current", "crossed-past", "crossed-current", or "none"
     */
    const getNumberStatus = (num) => {
        // Check completed steps
        for (let i = 0; i < currentStep; i++) {
            const { prime, multiples } = steps[i];
            if (num === prime) return "prime-past";
            if (multiples.includes(num)) return "crossed-past";
        }
        // Check current step
        if (currentStep < totalSteps) {
            const { prime, multiples } = steps[currentStep];
            if (num === prime) return "prime-current";
            if (multiples.includes(num)) return "crossed-current";
        }
        return "none";
    };

    /**
     * Map each status to a color from the limited palette
     */
    const getBoxColors = (status) => {
        switch (status) {
            case "prime-past":
                // Past prime => Byrne’s Blue
                return { bg: BYRNE_COLORS.green, color: "white" };
            case "prime-current":
                // Current prime => Byrne’s Yellow
                return { bg: BYRNE_COLORS.yellow, color: "black" };
            case "crossed-past":
            case "crossed-current":
                // Crossed => Byrne’s Red (past & current share the same red)
                return { bg: BYRNE_COLORS.red, color: "white" };
            default:
                // None => Byrne’s Beige cell background, Blue text
                return { bg: BYRNE_COLORS.beige, color: BYRNE_COLORS.black };
        }
    };

    // Adjust columns at different breakpoints
    const columns = useBreakpointValue({
        base: 10,  // on small screens
        md: 10,
        lg: 12,    // bigger on desktop
    });


    // Cell size bigger on desktop
    const cellSize = useBreakpointValue({
        base: "28px",  // mobile
        md: "34px",    // medium
        lg: "40px",    // desktop
    });

    return (
        <Box
            bg={BYRNE_COLORS.beige}
            p={4}
            maxW="1000px"
            mx="auto"
            mt={4}
            fontFamily="Inter, sans-serif"
        >
            <Heading as="h1" size="md" mb={3} color={BYRNE_COLORS.black} textAlign="center">
                Sieb des Eratosthenes (2–120)
            </Heading>

            <Text color={BYRNE_COLORS.black} fontSize="sm" mb={3} textAlign="center">
                Beobachte Schritt für Schritt, wie Primzahlen erkannt und ihre Vielfachen
                gestrichen werden.
            </Text>


            <Flex justify="center" align="center" mb={3} wrap="wrap" gap={2}>
                {/* Previous */}
                <Button
                    onClick={goPrevStep}
                    size="xs"
                    bg={BYRNE_COLORS.black}
                    color="white"
                    _hover={{ bg: "#24597D" }}
                    isDisabled={currentStep === 0 || isPlaying}
                >
                    Zurück
                </Button>

                {/* Play / Pause */}
                <Button
                    onClick={handlePlayPause}
                    size="xs"
                    bg={BYRNE_COLORS.black}
                    color="white"
                    _hover={{ bg: "#24597D" }}
                >
                    {isPlaying ? (
                        <>
                            <Icon as={FaPause} mr={1} />
                            Pause
                        </>
                    ) : (
                        <>
                            <Icon as={FaPlay} mr={1} />
                            Abspielen
                        </>
                    )}
                </Button>

                {/* Next */}
                <Button
                    onClick={goNextStep}
                    size="xs"
                    bg={BYRNE_COLORS.black}
                    color="white"
                    _hover={{ bg: "#24597D" }}
                    isDisabled={currentStep >= totalSteps || isPlaying}
                >
                    Weiter
                </Button>

                {/* Reset */}
                <Button
                    onClick={resetSteps}
                    size="xs"
                    variant="outline"
                    borderColor={BYRNE_COLORS.black}
                    color={BYRNE_COLORS.black}
                    _hover={{ bg: BYRNE_COLORS.beige, opacity: 0.8 }}
                >
                    Reset
                </Button>
            </Flex>

            {/* Grid Container with no spacing */}
            <Box
                border={`1px solid ${BYRNE_COLORS.black}`}
                mx="auto"
                display="block"
                w="fit-content"
            >
                <SimpleGrid columns={columns} spacing={0}>
                    {numbers.map((num) => {
                        const status = getNumberStatus(num);
                        const { bg, color } = getBoxColors(status);

                        return (
                            <Box
                                key={num}
                                border={`1px solid ${BYRNE_COLORS.black}`}
                                w={cellSize}
                                h={cellSize}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="xs"
                                fontWeight="semibold"
                                bg={bg}
                                color={color}
                            >
                                {num}
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    );
}
