import React, { useRef, createRef } from "react";
import PropTypes from "prop-types";
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

function ModulTemplate({
                           level,
                           title,
                           headline,
                           description,
                           imageSrc,
                           exercises,
                           units,
                           moduleData,
                           onSelect: customOnSelect,
                           onCubeClick: customOnCubeClick,
                       }) {
    const navigate = useNavigate();

    // Create refs for each module item
    const itemRefs = useRef([]);
    itemRefs.current = moduleData.map(
        (_, i) => itemRefs.current[i] ?? createRef()
    );

    // Default onSelect: use route if defined, otherwise log an error.
    const handleAuswaehlen = (mod) => {
        if (customOnSelect) {
            customOnSelect(mod);
        } else {
            if (!mod.route) {
                console.log("No route defined for module:", mod);
                return;
            }
            navigate(mod.route);
        }
    };

    // Default cube click: scroll the item into view.
    const handleCubeClick = (mod, event, itemRef) => {
        if (customOnCubeClick) {
            customOnCubeClick(mod, event, itemRef);
        } else {
            event.stopPropagation();
            if (itemRef?.current) {
                itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    // Use the same zig‑zag column pattern as in Grundlagen.jsx
    const zigZagCols = [1, 2, 3, 2];

    return (
        <Box minH="100vh" py={6}>
            <Flex
                maxW="1000px"
                mx="auto"
                gap={8}
                px={4}
                direction={{ base: "column", md: "row" }}
            >
                {/* LEFT SECTION (Info Card) */}
                <Box
                    flex="1 0 300px"
                    border="1px solid #000"
                    p={6}
                    textAlign="center"
                    position={{ base: "static", md: "sticky" }}
                    top="100px"
                    alignSelf="flex-start"
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        w="200px"
                        mx="auto"
                        mb={4}
                    />
                    <Heading as="h6" fontSize="1.3rem" mb={1}>
                        {level}
                    </Heading>
                    <Heading as="h1" fontSize="2rem" color="#333" mb={2}>
                        {headline}
                    </Heading>
                    <Text fontSize="1.2rem" color="#555">
                        {description}
                    </Text>

                    <Flex justify="space-evenly" gap={6} mt={6}>
                        <VStack spacing={1}>
                            <Image
                                src="/assets/images/Lektionen/Gleichungen/Uebung.png"
                                alt="Übung"
                                boxSize="40px"
                            />
                            <Heading as="h1" size="sm" color="#333">
                                {exercises} Übungen
                            </Heading>
                        </VStack>
                        <VStack spacing={1}>
                            <Image
                                src="/assets/images/Lektionen/Gleichungen/Lectures.png"
                                alt="Einheit"
                                boxSize="40px"
                            />
                            <Heading as="h1" size="sm" color="#333">
                                {units} Einheiten
                            </Heading>
                        </VStack>
                    </Flex>
                </Box>

                {/* RIGHT SECTION (Puzzle Grid) */}
                {/* RIGHT SECTION (Puzzle Grid) */}
                <Box flex="3">
                    <Grid
                        // Use one column on base, two on small screens, and three on md and above
                        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
                        autoRows="auto"
                        gap={{ base: 4, md: 1 }}  // A bit more gap on mobile, less on larger screens
                        justifyItems="center"     // Center items horizontally
                        position="relative"
                        // Remove overflowX to avoid horizontal scroll on small screens
                    >
                        {moduleData.map((mod, index) => (
                            <GridItem
                                key={mod.id}
                                p={3}
                                borderRadius="md"
                                textAlign="center"  // Ensure text inside each cell is centered
                                // Only apply custom row/column placement for md and up
                                rowStart={{ md: index + 1 }}
                                colStart={{ md: zigZagCols[index % zigZagCols.length] }}
                            >
                                <TooltipItem
                                    module={mod}
                                    onSelect={handleAuswaehlen}
                                    onCubeClick={handleCubeClick}
                                    itemRef={itemRefs.current[index]}
                                />
                            </GridItem>
                        ))}
                    </Grid>
                </Box>


            </Flex>
        </Box>
    );
}

ModulTemplate.propTypes = {
    level: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    exercises: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    units: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    moduleData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            headline: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            route: PropTypes.string,
        })
    ).isRequired,
    onSelect: PropTypes.func,
    onCubeClick: PropTypes.func,
};

export default ModulTemplate;
