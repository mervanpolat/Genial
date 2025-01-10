// src/components/WelcomeIntro/steps/Step2_GoalSelection.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem'; // Adjust the import path if necessary

import {
    AiOutlineReload,
    AiOutlineQuestionCircle
} from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

function Step2_GoalSelection({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Mathekenntnisse auffrischen', icon: AiOutlineReload },
        { label: 'Eine umfangreiche Mathekenntnisse auf Maturaniveau aufbauen', icon: BiBookAlt },
        { label: 'Excelling at school', icon: FaGraduationCap },
        { label: 'Helping my students learn', icon: MdSchool },
        { label: 'Something else', icon: AiOutlineQuestionCircle },
    ];

    const handleSelection = (index) => {
        setSelectedOption(index);
    };

    const handleContinueClick = () => {
        if (selectedOption !== null) {
            onContinue(); // Navigate to the next step
        } else {
            // Optionally, provide user feedback to select an option
            alert('Bitte wählen Sie ein Ziel aus, bevor Sie fortfahren.');
        }
    };

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    What's your top goal?
                </Text>

                <VStack spacing={4} align="start" w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            icon={option.icon}
                            label={option.label}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select goal: ${option.label}`}
                        />
                    ))}
                </VStack>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    aria-label="Continue to Maturatyp Selection"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step2_GoalSelection.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step2_GoalSelection;
