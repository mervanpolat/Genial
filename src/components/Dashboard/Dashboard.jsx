import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function Dashboard() {
    return (
        <Box
            p={{ base: 4, md: 8 }} // Smaller padding for small screens, larger for medium and above
            maxW={{ base: "95vw", md: "80vw", lg: "60vw" }} // Dynamically adjusts max width
            mx="auto" // Centers the container horizontally
        >
            <VStack spacing={4} align="start">
                <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Dein Dashboard</Heading>
                <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Willkommen! Dies ist dein persönlicher Bereich – du kannst
                    deine Lernfortschritte ansehen, Kurse fortsetzen und neue Themen entdecken.
                </Text>
            </VStack>
        </Box>
    );
}

export default Dashboard;
