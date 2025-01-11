import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';
import ContinueButton from "../ContinueButton.jsx";

function Step2_GoalSelection({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Mathekenntnisse auffrischen.', emoji: '✨' },
        { label: 'Die Maturaprüfung schaffen', emoji: '👩‍🎓' },
        { label: 'Meine Noten verbessern', emoji: '🚀' },
        { label: 'Meinen Schülern helfen', emoji: '🧩' },
        { label: 'Etwas anderes', emoji: '🧚' },
    ];

    const handleSelection = (index) => {
        setSelectedOption(index);
    };

    const handleContinueClick = () => {
        if (selectedOption !== null) {
            onContinue();
        } else {
            alert('Bitte wählen Sie ein Ziel aus, bevor Sie fortfahren.');
        }
    };

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Was ist dein Ziel?
                </Text>

                <VStack spacing={4} align="start" w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            emoji={option.emoji}
                            label={option.label}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select goal: ${option.label}`}
                        />
                    ))}
                </VStack>

                <ContinueButton
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    ariaLabel="Continue to Maturatyp Selection"
                >
                    Weiter
                </ContinueButton>
            </VStack>
        </Box>
    );
}

Step2_GoalSelection.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step2_GoalSelection;
