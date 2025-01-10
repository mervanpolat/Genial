import React from 'react';
import { Box, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { WiDaySunny } from 'react-icons/wi';
import { FaRegMoon } from 'react-icons/fa';

function TimePreference() {
    const navigate = useNavigate();

    const options = [
        { label: 'Morgens', icon: BsSunrise },
        { label: 'Mittags', icon: WiDaySunny },
        { label: 'Abends', icon: BsSunset },
        { label: 'Nachts', icon: FaRegMoon },
    ];

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Wann lernst du gerne?
                </Text>
                <VStack spacing={4} align="start">
                    {options.map((option, index) => (
                        <HStack key={index} spacing={4}>
                            <Icon as={option.icon} boxSize={6} color="teal.500" />
                            <Text fontSize="lg">{option.label}</Text>
                        </HStack>
                    ))}
                </VStack>
                <Button colorScheme="teal" size="lg" onClick={() => navigate('/info-2')}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default TimePreference;
