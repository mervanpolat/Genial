// src/components/Onboarding/steps/Step3_MaturatypSelection.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import OptionItem from "../OptionItem.jsx";
import ContinueButton from "../ContinueButton.jsx";

import { GiBookshelf, GiStairsGoal } from "react-icons/gi";
import { FaLaptopCode, FaToolbox } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";

import { useOnboardingContext } from "../OnboardingContext.jsx";

function Step3_MaturatypSelection({ onContinue = () => {} }) {
    const { maturatyp, setMaturatyp } = useOnboardingContext();
    
    const options = [
        { label: "AHS", icon: GiBookshelf },
        { label: "BHS Cluster P", icon: FaLaptopCode },
        { label: "BHS Cluster T1", icon: RiBuilding2Fill },
        { label: "BHS Cluster T2", icon: FaToolbox },
        { label: "BHS Cluster W1", icon: MdBusiness },
        { label: "BHS Cluster W2", icon: GiStairsGoal },
    ];

    // Initialize selectedOption from context
    const [selectedOption, setSelectedOption] = useState(() => {
        const index = options.findIndex(option => option.label === maturatyp);
        return index !== -1 ? index : null;
    });

    // Sync with context changes (for when user navigates back)
    useEffect(() => {
        const index = options.findIndex(option => option.label === maturatyp);
        setSelectedOption(index !== -1 ? index : null);
    }, [maturatyp, options]);

    const handleSelection = (index) => {
        setSelectedOption(index);
        setMaturatyp(options[index].label); // saves to OnboardingContext
    };

    const handleContinueClick = () => {
        if (selectedOption !== null) {
            onContinue();
        } else {
            alert("Bitte wählen Sie einen Maturatyp aus, bevor Sie fortfahren.");
        }
    };

    return (
        <OnboardingLayout>
            <Box p={8} textAlign="center">
                <VStack spacing={6}>
                    <Text fontSize="2xl" fontWeight="bold">
                        Welche Maturatyp besuchst du?
                    </Text>

                    <VStack spacing={4} align="start" w="100%">
                        {options.map((option, index) => (
                            <OptionItem
                                key={index}
                                label={option.label}
                                isSelected={selectedOption === index}
                                onSelect={() => handleSelection(index)}
                                ariaLabel={`Select Maturatyp: ${option.label}`}
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

Step3_MaturatypSelection.propTypes = {
    onContinue: PropTypes.func,
};

export default Step3_MaturatypSelection;
