// src/components/WelcomeIntro/steps/Step5_MathComfortLevel.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import OptionItem from "../OptionItem.jsx";
import ContinueButton from "../ContinueButton.jsx";
import { useOnboardingContext } from "../../../OnboardingContext/OnboardingContext.jsx";

function Step5_MathComfortLevel({ onContinue = () => {} }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const { setMathComfortLevel } = useOnboardingContext();

    // Each option includes a label + an emoji
    const options = [
        { label: "Grundrechnungsarten", emoji: "🧮" },
        { label: "Binomische Formel im Kopf", emoji: "🧠" },
        { label: "Division durch Null erklären", emoji: "💥" },
        { label: "Delta (Δ) ist mir bekannt", emoji: "📈" },
    ];

    const handleSelection = (index) => {
        setSelectedOption(index);
        // Store only the label
        setMathComfortLevel(options[index].label);
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
                        Wie wohl fühlst du dich mit Mathematik?
                    </Text>

                    <VStack spacing={4} align="start" w="100%">
                        {options.map((option, index) => (
                            <OptionItem
                                key={index}
                                emoji={option.emoji}
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
        </OnboardingLayout>
    );
}

Step5_MathComfortLevel.propTypes = {
    onContinue: PropTypes.func,
};

export default Step5_MathComfortLevel;
