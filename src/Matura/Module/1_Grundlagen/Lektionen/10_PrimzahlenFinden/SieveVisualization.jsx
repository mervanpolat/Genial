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
    Progress,
    useToast,
    Icon,
} from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

/**
 * Byrne Color Palette
 */
const BYRNE_COLORS = {
    beige: "#FAF3DC",
    blue: "#30628B",
    red: "#C03B2D",      // crossed-past
    orange: "#DD8D41",   // crossed-current
    green: "#48A346",    // prime-past
    yellow: "#F0C34E",   // prime-current
};

/**
 * Generate all sieve steps up to `n`.
 * Each step => { prime, multiples[] }
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
    // The numbers from 2..120
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
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const goNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
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
     * Determine the status of a number based on:
     *   - prime-past, prime-current, crossed-past, crossed-current, or none
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
     * Map each status to Byrne's color logic.
     */
    const getBoxColors = (status) => {
        switch (status) {
            case "prime-past":
                return { bg: BYRNE_COLORS.green, color: "white" };
            case "prime-current":
                return { bg: BYRNE_COLORS.yellow, color: "black" };
            case "crossed-past":
                return { bg: BYRNE_COLORS.red, color: "white" };
            case "crossed-current":
                return { bg: BYRNE_COLORS.orange, color: "white" };
            default:
                return { bg: "white", color: "black" };
        }
    };

    // Responsive grid columns
    const columns = useBreakpointValue({ base: 5, sm: 6, md: 8, lg: 10 });
    const spacing = useBreakpointValue({ base: 2, md: 3 });

    // Progress bar
    const progressPercent = totalSteps === 0 ? 0 : (currentStep / totalSteps) * 100;

    return (
        <Box
            bg={BYRNE_COLORS.beige}
            borderRadius="md"
            p={{ base: 3, md: 5 }}
            maxW="800px"
            mx="auto"
            mt={4}
        >
            <Heading
                as="h1"
                size="md"
                mb={3}
                color={BYRNE_COLORS.blue}
                textAlign="center"
                whiteSpace="nowrap"
            >
                Sieb des Eratosthenes (2–120)
            </Heading>

            <Text color={BYRNE_COLORS.blue} fontSize="sm" mb={3} textAlign="center">
                Beobachte Schritt für Schritt, wie Primzahlen erkannt und ihre
                Vielfachen gestrichen werden.
            </Text>

            <Progress
                value={progressPercent}
                size="sm"
                colorScheme="blue"
                borderRadius="sm"
                mb={3}
            />

            <Flex justify="center" align="center" mb={3} wrap="wrap" gap={2}>
                {/* Previous Step */}
                <Button
                    onClick={goPrevStep}
                    size="sm"
                    bg={BYRNE_COLORS.blue}
                    color="white"
                    _hover={{ bg: "#24597D" }}
                    isDisabled={currentStep === 0 || isPlaying}
                >
                    Zurück
                </Button>

                {/* Play / Pause */}
                <Button
                    onClick={handlePlayPause}
                    size="sm"
                    bg={BYRNE_COLORS.blue}
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

                {/* Next Step */}
                <Button
                    onClick={goNextStep}
                    size="sm"
                    bg={BYRNE_COLORS.blue}
                    color="white"
                    _hover={{ bg: "#24597D" }}
                    isDisabled={currentStep >= totalSteps || isPlaying}
                >
                    Weiter
                </Button>

                {/* Reset */}
                <Button
                    onClick={resetSteps}
                    size="sm"
                    variant="outline"
                    borderColor={BYRNE_COLORS.blue}
                    color={BYRNE_COLORS.blue}
                    _hover={{ bg: BYRNE_COLORS.beige, opacity: 0.8 }}
                >
                    Reset
                </Button>
            </Flex>

            <SimpleGrid columns={columns} spacing={spacing}>
                {numbers.map((num) => {
                    const status = getNumberStatus(num);
                    const { bg, color } = getBoxColors(status);

                    return (
                        <Box
                            key={num}
                            textAlign="center"
                            p={{ base: 2, md: 3 }}
                            borderRadius="md"
                            fontWeight="semibold"
                            bg={bg}
                            color={color}
                            boxShadow="xs"
                            // Prevent wrapping of three-digit numbers like '100'
                            whiteSpace="nowrap"
                            minW={{ base: "35px", md: "40px" }}
                        >
                            {num}
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}
