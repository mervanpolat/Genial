// src/components/WelcomeIntro/steps/Step6_DailyGoal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';

function Step6_DailyGoal({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ['15 min', '30 min', '45 min', '60 min'];

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
                    What's your daily learning goal?
                </Text>
                <VStack spacing={4} w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            label={option}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select daily goal: ${option}`}
                        />
                    ))}
                </VStack>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    aria-label="Continue to Time Preference"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step6_DailyGoal.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step6_DailyGoal;
