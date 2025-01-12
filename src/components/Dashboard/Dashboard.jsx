import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function Dashboard() {
    return (
        <Box p={8}>
            <VStack spacing={4} align="start">
                <Heading>Dein Dashboard</Heading>
                <Text>
                    Willkommen! Dies ist dein persönlicher Bereich – du kannst
                    deine Lernfortschritte ansehen, Kurse fortsetzen und neue Themen entdecken.
                </Text>
            </VStack>
        </Box>
    );
}

export default Dashboard;
