// src/components/Onboarding/steps/Step7_TimePreference.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import OptionItem from "../OptionItem.jsx";
import ContinueButton from "../ContinueButton.jsx";
import { useOnboardingContext } from "../OnboardingContext.jsx";

function Step7_TimePreference({ onContinue = () => {} }) {
    const { timePreference, setTimePreference } = useOnboardingContext();

    const options = [
        { label: "Morgens", emoji: "🐓" },
        { label: "Mittags", emoji: "🍽" },
        { label: "Abends", emoji: "🏡" },
        { label: "Nachts", emoji: "🦉" },
    ];

    // Initialize selectedOption from context
    const [selectedOption, setSelectedOption] = useState(() => {
        const index = options.findIndex(option => option.label === timePreference);
        return index !== -1 ? index : null;
    });

    // Sync with context changes (for when user navigates back)
    useEffect(() => {
        const index = options.findIndex(option => option.label === timePreference);
        setSelectedOption(index !== -1 ? index : null);
    }, [timePreference, options]);

    const handleSelection = (index) => {
        setSelectedOption(index);
        // Store only the label, e.g. "Morgens"
        setTimePreference(options[index].label);
    };

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
    onContinue: PropTypes.func,
};

export default Step7_TimePreference;
