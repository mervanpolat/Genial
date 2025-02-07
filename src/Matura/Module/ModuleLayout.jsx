import React from "react";
import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";

/**
 * A reusable layout component to display a module page.
 * Receives `level`, `title`, `description`, `image`, `exercisesCount`, `unitsCount`
 * and `children` (where you can render your module items, grid, lists, etc.).
 */
const ModuleLayout = ({
                          level,
                          title,
                          description,
                          image,
                          exercisesCount,
                          unitsCount,
                          children
                      }) => {
    return (
        <Box minH="100vh" py={6}>
            <Flex
                maxW="1200px"
                mx="auto"
                gap={8}
                px={4}
                // Stack vertically on small screens, side-by-side on md+
                direction={{ base: "column", md: "row" }}
            >
                {/* LEFT SECTION (Sidebar) */}
                <Box
                    flex="1 0 300px"
                    border="1px solid #000" // Remove or style as you prefer
                    p={6}
                    textAlign="center"
                    position={{ base: "static", md: "sticky" }}
                    top="100px"
                    alignSelf="flex-start"
                >
                    {/* Module Image */}
                    <Image
                        src={image}
                        alt={title}
                        w="200px"
                        mx="auto"
                        mb={4}
                    />

                    {/* LEVEL */}
                    <Heading as="h6" fontSize="1.3rem" mb={1}>
                        LEVEL {level}
                    </Heading>

                    {/* TITLE */}
                    <Heading as="h1" fontSize="2rem" color="#333" mb={2}>
                        {title}
                    </Heading>

                    {/* DESCRIPTION */}
                    <Text fontSize="1.2rem" color="#555">
                        {description}
                    </Text>

                    {/* Exercise/Units info */}
                    <Flex justify="space-evenly" gap={6} mt={6}>
                        <VStack spacing={1}>
                            <Image
                                src="/assets/images/Lektionen/Gleichungen/Uebung.png"
                                alt="Übung"
                                boxSize="40px"
                            />
                            <Heading as="h1" size="sm" color="#333">
                                {exercisesCount} Übungen
                            </Heading>
                        </VStack>
                        <VStack spacing={1}>
                            <Image
                                src="/assets/images/Lektionen/Gleichungen/Lectures.png"
                                alt="Einheit"
                                boxSize="40px"
                            />
                            <Heading as="h1" size="sm" color="#333">
                                {unitsCount} Einheiten
                            </Heading>
                        </VStack>
                    </Flex>
                </Box>

                {/* RIGHT SECTION (Main Content) */}
                <Box flex="3">
                    {children}
                </Box>
            </Flex>
        </Box>
    );
};

export default ModuleLayout;
