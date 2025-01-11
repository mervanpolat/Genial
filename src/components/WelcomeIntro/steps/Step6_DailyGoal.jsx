import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import OptionItem from "../OptionItem.jsx";
import ContinueButton from "../ContinueButton.jsx";

function Step6_DailyGoal({ onContinue = () => {} }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ["🕒 15 min", "🕧 30 min", "🕓 45 min", "🕐 60 min"];

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
        </OnboardingLayout>
    );
}

Step6_DailyGoal.propTypes = {
    onContinue: PropTypes.func,
};

export default Step6_DailyGoal;
