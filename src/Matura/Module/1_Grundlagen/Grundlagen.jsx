// File: src/Matura/Module/Grundlagen.jsx

import React, { useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Grid,
    GridItem,
    VStack
} from "@chakra-ui/react";
import TooltipItem from "../ModulTippy/TooltipItem.jsx";

function Grundlagen() {
    const navigate = useNavigate();

    // -----------------------------------------------
    // Example data for the puzzle
    // -----------------------------------------------
    const moduleData = [
        // THEORY #1
        {
            id: 1,
            title: "Griechische Buchstaben",
            headline: "Griechische Buchstaben",
            description: "Lerne die Griechische Buchstaben in Mathematik.",
            route: "/theory/griechische"
        },
        // PRACTICE #1
        {
            id: 2,
            title: "Praxis: Griechische Buchstaben",
            headline: "Praxis: Griechische Buchstaben",
            description: "Vertiefe dein Verständnis über die griechischen Buchstaben.",
            route: "/practice/griechischebuchstaben"
        },
        // THEORY #2
        {
            id: 3,
            title: "Lateinische Buchstaben",
            headline: "Lateinische Buchstaben",
            description: "Lerne die Lateinische Buchstaben, die in der Mathematik vorkommen.",
            route: "/theory/lateinische"
        },
        // PRACTICE #2
        {
            id: 4,
            title: "Praxis: Lateinische Buchstaben",
            headline: "Praxis: Lateinische Buchstaben",
            description: "Vertiefe dein Verständnis über die lateinischen Buchstaben.",
            route: "/practice/lateinischebuchstaben"
        },
        // THEORY #3
        {
            id: 5,
            title: "Zahlenmengen",
            headline: "Zahlenmengen",
            description: "Lerne die Gründe, warum wir mehrere Zahlenmengen brauchen.",
            route: "/theory/zahlenarith"
        },
        // PRACTICE #3
        {
            id: 6,
            title: "Praxis: Zahlenmengen",
            headline: "Praxis: Zahlenmengen",
            description: "Vertiefe dein Verständnis über Zahlenmengen.",
            route: "/practice/zahlenarithmetik"
        },
        // THEORY #4
        {
            id: 7,
            title: "Grundlagen der Zahlen und Arithmetik",
            headline: "Grundlagen der Zahlen und Arithmetik",
            description: "Erfahre mehr über Zahlenmengen und grundlegende Rechenregeln.",
            route: "/theory/natZahlenArith"
        },
        // PRACTICE #4
        {
            id: 8,
            title: "Praxis: Grundlagen der Zahlen und Arithmetik",
            headline: "Praxis: Grundlagen der Zahlen und Arithmetik",
            description: "Vertiefe dein Verständnis über Zahlen und Arithmetik.",
            route: "/practice/natZahlenArithmetik"
        },
        // THEORY #5
        {
            id: 9,
            title: "Kommutativgesetz",
            headline: "Kommutativgesetz",
            description:
                "Erfahre, warum die Reihenfolge der Summanden oder Faktoren kein anderes Ergebnis liefert.",
            route: "/theory/kommutativg"
        },
        // PRACTICE #5
        {
            id: 10,
            title: "Praxis: Kommutativgesetz",
            headline: "Praxis: Kommutativität",
            description: "Vertiefe dein Verständnis zu Kommutativgesetz.",
            route: "/practice/kommutativ"
        },
        // THEORY #6
        {
            id: 11,
            title: "Assoziativgesetz",
            headline: "Assoziativgesetz",
            description:
                "Warum spielt die Klammerung bei Addition/Multiplikation keine Rolle? Erfahre es hier.",
            route: "/theory/assoziativitaet"
        },
        // PRACTICE #6
        {
            id: 12,
            title: "Praxis: Assoziativgesetz",
            headline: "Praxis: Assoziativität",
            description: "Vertiefe dein Verständnis zum Assoziativgesetz.",
            route: "/practice/assoziativitaet"
        },
        // THEORY #7
        {
            id: 13,
            title: "Distributivgesetz",
            headline: "Distributivgesetz",
            description: "Wie verknüpft man Addition und Multiplikation? Das Distributivgesetz!",
            route: "/theory/distributiv"
        },
        // PRACTICE #7
        {
            id: 14,
            title: "Praxis: Distributivgesetz",
            headline: "Praxis: Distributivgesetz",
            description: "Vertiefe dein Verständnis zum Distributivgesetz.",
            route: "/practice/distributivgesetz"
        },
        // THEORY #8
        {
            id: 15,
            title: "Primzahlen und Teilbarkeitsregeln",
            headline: "Primzahlen und Teilbarkeitsregeln",
            description: "Lerne die Grundlagen zu Primzahlen und Teilbarkeitsregeln.",
            route: "/theory/primzahlundteil"
        },
        // PRACTICE #8
        {
            id: 16,
            title: "Praxis: Primzahlen und Teilbarkeitsregeln",
            headline: "Praxis: Primzahlen und Teilbarkeitsregeln",
            description: "Vertiefe dein Verständnis zu Teilbarkeitsregeln.",
            route: "/practice/primzahlundteil"
        },
        // THEORY #9
        {
            id: 17,
            title: "Primfaktorenzerlegung",
            headline: "Primfaktorenzerlegung",
            description: "Lerne die Grundlagen zur Primfaktorenzerlegung.",
            route: "/theory/primfaktorenzerlegung"
        },
        // PRACTICE #9
        {
            id: 18,
            title: "Praxis: Primfaktorenzerlegung",
            headline: "Praxis: Primfaktorenzerlegung",
            description: "Vertiefe dein Verständnis zur Primfaktorenzerlegung.",
            route: "/practice/primfaktorenzerlegung"
        },
        // THEORY #10
        {
            id: 19,
            title: "Sieb des Eratosthenes",
            headline: "Sieb des Eratosthenes",
            description: "Lerne, wie du mithilfe des Siebs von Eratosthenes Primzahlen findest.",
            route: "/theory/primzahlenfinden"
        },
        // PRACTICE #10
        {
            id: 20,
            title: "Praxis: Sieb des Eratosthenes",
            headline: "Praxis: Sieb des Eratosthenes",
            description: "Vertiefe dein Verständnis zu Primzahlen.",
            route: "/practice/primzahlenfinden"
        },
        // THEORY #11
        {
            id: 21,
            title: "Zahlentheorie",
            headline: "Zahlentheorie",
            description: "Lerne die Grundlagen zu Zahlentheorie.",
            route: "/theory/zahlentheorie"
        },
        // PRACTICE #11
        {
            id: 22,
            title: "Praxis: Zahlentheorie",
            headline: "Praxis: Zahlentheorie",
            description: "Vertiefe dein Verständnis zu Zahlentheorie.",
            route: "/practice/zahlentheorie"
        }
    ];

    // Create refs for each item (if needed for scroll-into-view)
    const itemRefs = useRef([]);
    itemRefs.current = moduleData.map((_, i) => itemRefs.current[i] ?? createRef());

    // Navigation
    const handleAuswaehlen = (mod) => {
        if (!mod.route) {
            console.log("No route defined for module:", mod);
            return;
        }
        navigate(mod.route);
    };

    // Handle cube icon click
    const handleCubeClick = (mod, event, itemRef) => {
        event.stopPropagation();
        if (itemRef?.current) {
            itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    // Columns go 1,2,3,2,1,2,3,2,... (zig-zag)
    const zigZagCols = [1, 2, 3, 2];

    return (
        <Box /* remove background entirely or pick a color you want */
            // bg="#faf3dc"
            minH="100vh"
            py={6}
        >
            <Flex
                maxW="1200px"
                mx="auto"
                gap={8}
                px={4}
                // Sidebar on top for mobile, row for medium and up
                direction={{ base: "column", md: "row" }}
            >
                {/* LEFT SECTION (Sidebar) */}
                <Box
                    flex="1 0 300px"
                    border="1px solid #000" // remove or keep if you want a border
                    p={6}
                    textAlign="center"
                    position={{ base: "static", md: "sticky" }}
                    top="100px"
                    alignSelf="flex-start"
                    // bg="#fff" // removed white background
                >
                    <Image
                        src="/assets/CardImages/HTL2/Grundlagen.svg"
                        alt="Grundlagen"
                        w="200px"
                        mx="auto"
                        mb={4}
                    />
                    <Heading as="h6" fontSize="1.3rem" mb={1}>
                        LEVEL 1
                    </Heading>
                    <Heading as="h1" fontSize="2rem" color="#333" mb={2}>
                        Grundlagen
                    </Heading>
                    <Text fontSize="1.2rem" color="#555">
                        Vertiefe dich bei den Grundlagen der Mathematik.
                    </Text>

                    <Flex justify="space-evenly" gap={6} mt={6}>
                        <VStack spacing={1}>
                            <Image
                                src="/assets/images/Lektionen/Gleichungen/Uebung.png"
                                alt="Übung"
                                boxSize="40px"
                            />
                            <Heading as="h1" size="sm" color="#333">
                                12 Übungen
                            </Heading>
                        </VStack>
                        <VStack spacing={1}>
                            <Image
                                src="/assets/images/Lektionen/Gleichungen/Lectures.png"
                                alt="Einheit"
                                boxSize="40px"
                            />
                            <Heading as="h1" size="sm" color="#333">
                                2 Einheiten
                            </Heading>
                        </VStack>
                    </Flex>
                </Box>

                {/* RIGHT SECTION (Puzzle Grid) */}
                <Box flex="3">
                    <Grid
                        // Force 3 columns for ALL screen sizes
                        templateColumns="repeat(3, 1fr)"
                        autoRows="auto"
                        gap="1px"
                        position="relative"
                        // Enable horizontal scrolling if screen is too narrow
                        overflowX="auto"
                    >
                        {moduleData.map((mod, index) => {
                            const row = index + 1;
                            const col = zigZagCols[index % zigZagCols.length];

                            return (
                                <GridItem
                                    key={mod.id}
                                    rowStart={row}
                                    colStart={col}
                                    ref={itemRefs.current[index]}
                                    // bg="#fff" // removed white background
                                    p={3}
                                    borderRadius="md"
                                >
                                    <TooltipItem
                                        module={mod}
                                        onSelect={handleAuswaehlen}
                                        onCubeClick={handleCubeClick}
                                        itemRef={itemRefs.current[index]}
                                    />
                                </GridItem>
                            );
                        })}
                    </Grid>
                </Box>
            </Flex>
        </Box>
    );
}

export default Grundlagen;
