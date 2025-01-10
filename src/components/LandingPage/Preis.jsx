import React from 'react';
import { Box, SimpleGrid, Heading, Text, Button, List, ListItem, Icon } from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai'; // Importing icons

function Preis() {
    const plans = [
        {
            name: 'Silver',
            price: '€19,90 / Monat',
            color: '#6B6B6B',
            textColor: 'white',
            features: ['Nur Matura-Lektionen', 'Eingeschränkte Anzahl an Aufgaben', 'What\'s App-Support'],
        },
        {
            name: 'Gold',
            price: '€35.90 / Monat',
            color: '#f0c34e',
            textColor: '#000000',
            features: ['Alle Silver-Features', 'Intensivkurs', 'Vorbereitung auf Schularbeiten und Kolloquien', 'Priorisierter What\'s App-Support'],
        },
        {
            name: 'Platinum',
            price: '€49,90 / Monat',
            color: '#000000',
            textColor: 'white',
            features: ['Alle Features des Gold-Plans', 'Online-Nachhilfe', 'Echtzeit Erklärungen für deine Aufgaben in < 30 Minuten'],
        },

    ];

    return (
        <Box p={8} bg="#faf3dc">
            <Heading as="h1" textAlign="center" mb={8} fontSize="3xl" color="#000000">
                Unsere Preise
            </Heading>

            <SimpleGrid columns={[1, 1, 3]} spacing={8}>
                {plans.map((plan, index) => (
                    <Box
                        key={index}
                        p={6}
                        borderRadius="md"
                        boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
                        bg={plan.color}
                        color={plan.textColor}
                        textAlign="center"
                    >
                        <Heading as="h3" fontSize="2xl" mb={4}>
                            {plan.name} Plan
                        </Heading>
                        <Text fontSize="xl" mb={4}>
                            {plan.price}
                        </Text>
                        <List spacing={3} mb={6}>
                            {plan.features.map((feature, idx) => (
                                <ListItem key={idx}>
                                    <Icon as={AiOutlineCheck} color={plan.textColor} mr={2} />
                                    {feature}
                                </ListItem>
                            ))}
                        </List>
                        <Button
                            border="2px solid"
                            borderColor={plan.name === 'Platinum' ? 'white' : plan.name === 'Silver' ? 'white' : 'black'}
                            color={plan.name === 'Platinum' ? 'white' : plan.name === 'Silver' ? 'white' : 'black'}
                            bg="transparent"
                            _hover={{
                                bg: plan.name === 'Platinum' ? 'white' : plan.name === 'Silver' ? 'white' : 'black',
                                color: plan.name === 'Platinum' ? 'black' : plan.name === 'Silver' ? 'black' : 'white',
                            }}
                            size="lg"
                        >
                            Plan auswählen
                        </Button>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Preis;
