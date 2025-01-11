import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack, Image } from '@chakra-ui/react';
import ContinueButton from '../ContinueButton.jsx';

// Import image as a module
import Intro2Image from '../assets/Intro2.png';

function Step4_InfoSection({ onContinue }) {
    const message = "Unsere interaktiven, erzählenden Kurse wecken Neugier und helfen dabei, mathematische Themen auf intuitive Weise zu verstehen – ganz ohne starres Pauken von Formeln.";

    return (
        <Box
            p={4}
            textAlign="center"
            width="full"
            maxWidth="800px"
            mx="auto"
            mt={8}
        >
            <VStack spacing={6} align="center">
                {/* Bild oben */}
                <Image
                    src="src/components/WelcomeIntro/assets/proposition_4_figure_same.svg"
                    alt="Informationsbild"
                    maxW="300px"
                    objectFit="contain"
                    mb={6}
                />

                {/* Zentrierter Text */}
                <Text fontSize="lg" textAlign="center">
                    {message}
                </Text>

                {/* "Weiter"-Button */}
                <ContinueButton
                    onClick={onContinue}
                    ariaLabel="Continue to Info Section"
                >
                    Weiter
                </ContinueButton>
            </VStack>
        </Box>
    );
}

Step4_InfoSection.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step4_InfoSection;
