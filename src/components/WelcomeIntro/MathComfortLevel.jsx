import React from 'react';
import { Box, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { GiCalculator } from 'react-icons/gi';
import { HiOutlineVariable } from 'react-icons/hi';
import { TbFunction } from 'react-icons/tb'; // Corrected import
import { FaInfinity } from 'react-icons/fa';

function MathComfortLevel() {
    const navigate = useNavigate();

    const options = [
        { label: 'Arithmetic', icon: GiCalculator },
        { label: 'Basic Algebra', icon: HiOutlineVariable },
        { label: 'Algebra', icon: TbFunction },
        { label: 'Calculus', icon: FaInfinity },
    ];

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    What&#39;s your math comfort level?
                </Text>
                <VStack spacing={4} align="start">
                    {options.map((option, index) => (
                        <HStack key={index} spacing={4}>
                            <Icon as={option.icon} boxSize={6} color="teal.500" />
                            <Text fontSize="lg">{option.label}</Text>
                        </HStack>
                    ))}
                </VStack>
                <Button colorScheme="teal" size="lg" onClick={() => navigate('/daily-goal')}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default MathComfortLevel;
