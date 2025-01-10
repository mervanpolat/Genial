import React from 'react';
import { Box, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineReload, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

function GoalSelection() {
    const navigate = useNavigate();

    const options = [
        { label: 'Mathekenntnisse auffrischen', icon: AiOutlineReload },
        { label: 'Eine umfangreiche Mathekenntnisse auf Maturaniveau aufbauen', icon: BiBookAlt },
        { label: 'Excelling at school', icon: FaGraduationCap },
        { label: 'Helping my students learn', icon: MdSchool },
        { label: 'Something else', icon: AiOutlineQuestionCircle },
    ];

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    What&#39;s your top goal?
                </Text>

                <VStack spacing={4} align="start">
                    {options.map((option, index) => (
                        <HStack key={index} spacing={4}>
                            <Icon as={option.icon} boxSize={6} color="teal.500" />
                            <Text fontSize="lg">{option.label}</Text>
                        </HStack>
                    ))}
                </VStack>
                <Button colorScheme="teal" size="lg" onClick={() => navigate('/maturatyp-selection')}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default GoalSelection;
