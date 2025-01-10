// src/components/WelcomeIntro/steps/Step5_MathComfortLevel.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import OptionItem from '../OptionItem';

import { GiCalculator } from 'react-icons/gi';
import { HiOutlineVariable } from 'react-icons/hi';
import { TbFunction } from 'react-icons/tb';
import { FaInfinity } from 'react-icons/fa';

function Step5_MathComfortLevel({ onContinue }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Arithmetic', icon: GiCalculator },
        { label: 'Basic Algebra', icon: HiOutlineVariable },
        { label: 'Algebra', icon: TbFunction },
        { label: 'Calculus', icon: FaInfinity },
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
                    What's your math comfort level?
                </Text>
                <VStack spacing={4} align="start" w="100%">
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            icon={option.icon}
                            label={option.label}
                            isSelected={selectedOption === index}
                            onSelect={() => handleSelection(index)}
                            ariaLabel={`Select math comfort level: ${option.label}`}
                        />
                    ))}
                </VStack>
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleContinueClick}
                    isDisabled={selectedOption === null}
                    aria-label="Continue to Daily Goal"
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

Step5_MathComfortLevel.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step5_MathComfortLevel;
