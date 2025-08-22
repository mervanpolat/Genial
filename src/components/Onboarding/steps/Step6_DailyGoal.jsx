// src/components/Onboarding/steps/Step6_DailyGoal.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import OptionItem from "../OptionItem.jsx";
import ContinueButton from "../ContinueButton.jsx";
import { useOnboardingContext } from "../OnboardingContext.jsx";

function Step6_DailyGoal({ onContinue = () => {} }) {
    const { dailyGoal, setDailyGoal } = useOnboardingContext();

    // We show the emoji but only store label
    const options = [
        { label: "15 min", emoji: "🕒" },
        { label: "30 min", emoji: "🕧" },
        { label: "45 min", emoji: "🕓" },
        { label: "60 min", emoji: "🕐" },
    ];

    // Initialize selectedOption from context
    const [selectedOption, setSelectedOption] = useState(() => {
        const index = options.findIndex(option => option.label === dailyGoal);
        return index !== -1 ? index : null;
    });

    // Sync with context changes (for when user navigates back)
    useEffect(() => {
        const index = options.findIndex(option => option.label === dailyGoal);
        setSelectedOption(index !== -1 ? index : null);
    }, [dailyGoal, options]);

    const handleSelection = (index) => {
        setSelectedOption(index);
        // Store only the label, e.g. "15 min"
        setDailyGoal(options[index].label);
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
                        Was ist dein tägliches Lernziel?
                    </Text>
                    <VStack spacing={4} w="100%">
                        {options.map((option, index) => (
                            <OptionItem
                                key={index}
                                emoji={option.emoji}
                                label={option.label}
                                isSelected={selectedOption === index}
                                onSelect={() => handleSelection(index)}
                                ariaLabel={`Select daily goal: ${option.label}`}
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

Step6_DailyGoal.propTypes = {
    onContinue: PropTypes.func,
};

export default Step6_DailyGoal;
