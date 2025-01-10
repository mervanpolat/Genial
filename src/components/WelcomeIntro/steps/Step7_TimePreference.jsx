// src/components/WelcomeIntro/steps/Step7_TimePreference.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';

import { BsSunrise, BsSunset } from 'react-icons/bs';
import { WiDaySunny } from 'react-icons/wi';
import { FaRegMoon } from 'react-icons/fa';

function Step7_TimePreference({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Morgens', icon: BsSunrise },
        { label: 'Mittags', icon: WiDaySunny },
        { label: 'Abends', icon: BsSunset },
        { label: 'Nachts', icon: FaRegMoon },
    ];

    const handleSelection = (index) => {
        setSelectedOption(index);
    };

    const handleContinueClick = () => {
        if (selectedOption !== null) {
            onContinue();
        } else {
            // Optionally, provide user feedback to select an option
        }
    };

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Wann lernst du gerne?
                </Text>
                <VStack spacing={4} align="start" w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            icon={option.icon}
                            label={option.label}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select time preference: ${option.label}`}
                        />
                    ))}
                </VStack>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    aria-label="Continue to Final Info"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step7_TimePreference.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step7_TimePreference;
