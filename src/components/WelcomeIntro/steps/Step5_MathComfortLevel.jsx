import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';
import ContinueButton from "../ContinueButton.jsx";

function Step5_MathComfortLevel({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Grundrechnungsarten', emoji: '🧮' },
        { label: 'Binomische Formel kann ich im Kopf', emoji: '🧠' },
        { label: 'Ich kann erklären, warum Division durch Null nicht definiert ist', emoji: '💥' },
        { label: 'Delta von x und y ist mir bekannt', emoji: '📈' },
    ];

    const handleSelection = (index) => {
        setSelectedOption(index);
    };

    const handleContinueClick = () => {
        if (selectedOption !== null) {
            onContinue();
        }
    };

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="2xl" fontWeight="bold">
                    Wie wohl fühlst du dich mit Mathematik?
                </Text>
                <VStack spacing={4} align="start" w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            emoji={option.emoji} // Pass the correct emoji prop
                            label={option.label}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select math comfort level: ${option.label}`}
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

Step5_MathComfortLevel.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step5_MathComfortLevel;
