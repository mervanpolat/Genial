import React from 'react';
import { Box, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function DailyGoal() {
    const navigate = useNavigate();

    const options = ['15 min', '30 min', '45 min', '60 min'];

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    What's your daily learning goal?
                </Text>
                <VStack spacing={4}>
                    {options.map((option, index) => (
                        <HStack
                            key={index}
                            spacing={4}
                            p={4}
                            borderRadius="md"
                            border="2px solid"
                            borderColor="teal.500"
                            cursor="pointer"
                            _hover={{ bg: 'teal.500', color: 'white' }}
                        >
                            <Text fontSize="lg">{option}</Text>
                        </HStack>
                    ))}
                </VStack>
                <Button colorScheme="teal" size="lg" onClick={() => navigate('/time-preference')}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default DailyGoal;
