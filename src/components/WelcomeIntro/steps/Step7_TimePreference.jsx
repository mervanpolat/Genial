import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack } from '@chakra-ui/react';

import OnboardingLayout from '../OnboardingLayout.jsx';
import OptionItem from '../OptionItem.jsx';
import ContinueButton from '../ContinueButton.jsx';

function Step7_TimePreference({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Morgens', emoji: '🐓' },
        { label: 'Mittags', emoji: '🍽️️' },
        { label: 'Abends', emoji: '🏡' },
        { label: 'Nachts', emoji: '🦉' },
    ];

    const handleSelection = (index) => setSelectedOption(index);

    const handleContinueClick = () => {
        if (selectedOption !== null) {
            onContinue();
        }
    };

    return (
        <OnboardingLayout>
            <Box p={8} textAlign="center">
                <VStack spacing={6}>
                    <Text fontSize="2xl" fontWeight="bold">
                        Wann lernst du gerne?
                    </Text>
                    <VStack spacing={4} align="start" w="100%">
                        {options.map((option, index) => (
                            <OptionItem
                                key={index}
                                emoji={option.emoji}
                                label={option.label}
                                isSelected={selectedOption === index}
                                onSelect={() => handleSelection(index)}
                                ariaLabel={`Select time preference: ${option.label}`}
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
        </OnboardingLayout>
    );
}

Step7_TimePreference.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step7_TimePreference;
