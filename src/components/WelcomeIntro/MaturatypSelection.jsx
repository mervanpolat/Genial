import React from 'react';
import { Box, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { GiBookshelf, GiStairsGoal } from 'react-icons/gi';
import { FaLaptopCode, FaToolbox } from 'react-icons/fa';
import { MdBusiness } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';

function MaturatypSelection() {
    const navigate = useNavigate();

    const options = [
        { label: 'AHS', icon: GiBookshelf },
        { label: 'BHS Cluster P', icon: FaLaptopCode },
        { label: 'BHS Cluster T1', icon: RiBuilding2Fill },
        { label: 'BHS Cluster T2', icon: FaToolbox },
        { label: 'BHS Cluster W1', icon: MdBusiness },
        { label: 'BHS Cluster W2', icon: GiStairsGoal },
    ];

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Welche Maturatyp besuchst du?
                </Text>
                <VStack spacing={4} align="start">
                    {options.map((option, index) => (
                        <HStack key={index} spacing={4}>
                            <Icon as={option.icon} boxSize={6} color="teal.500" />
                            <Text fontSize="lg">{option.label}</Text>
                        </HStack>
                    ))}
                </VStack>
                <Button colorScheme="teal" size="lg" onClick={() => navigate('/info-1')}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default MaturatypSelection;
