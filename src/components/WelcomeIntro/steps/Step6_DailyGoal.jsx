// src/components/WelcomeIntro/steps/Step6_DailyGoal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';
import ContinueButton from "../ContinueButton.jsx";

function Step6_DailyGoal({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ['🕒 15 min', '🕧 30 min', '🕓 45 min', '🕐 60 min'];

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
                    Was ist dein tägliches Lernziel?
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
                <ContinueButton
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    ariaLabel="Continue to Info Section"
                >
                    Weiter
                </ContinueButton>
            </VStack>
        </Box>
    );
}

Step6_DailyGoal.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step6_DailyGoal;
