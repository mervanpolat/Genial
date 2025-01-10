// src/components/WelcomeIntro/steps/Step3_MaturatypSelection.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';

import {
    GiBookshelf,
    GiStairsGoal
} from 'react-icons/gi';
import { FaLaptopCode, FaToolbox } from 'react-icons/fa';
import { MdBusiness } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';

function Step3_MaturatypSelection({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'AHS', icon: GiBookshelf },
        { label: 'BHS Cluster P', icon: FaLaptopCode },
        { label: 'BHS Cluster T1', icon: RiBuilding2Fill },
        { label: 'BHS Cluster T2', icon: FaToolbox },
        { label: 'BHS Cluster W1', icon: MdBusiness },
        { label: 'BHS Cluster W2', icon: GiStairsGoal },
    ];

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
                    Welche Maturatyp besuchst du?
                </Text>
                <VStack spacing={4} align="start" w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            icon={option.icon}
                            label={option.label}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select Maturatyp: ${option.label}`}
                        />
                    ))}
                </VStack>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    aria-label="Continue to Info Section"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step3_MaturatypSelection.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step3_MaturatypSelection;
