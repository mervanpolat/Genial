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
            width={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw', xl: '50vw' }}
            maxWidth="800px" // Optional: Set a maximum width to prevent excessive stretching
            mx="auto" // Center the Box horizontally
        >
            <VStack spacing={6} align="center"> {/* Increased spacing from 4 to 6 */}
                {/* Bild oben */}
                <Image
                    src={Intro2Image}
                    alt="Informationsbild"
                    width={{ base: '100%', sm: '300px', md: '300px', lg: '300px', xl: '300px' }}
                    height="auto"
                    objectFit="contain"
                />

                {/* Zentrierter Text */}
                <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} textAlign="center">
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
