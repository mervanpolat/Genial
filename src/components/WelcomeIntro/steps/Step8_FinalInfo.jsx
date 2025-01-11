import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack, Heading, Image } from '@chakra-ui/react';
import ContinueButton from '../ContinueButton.jsx';

// Import image as a module
import Intro3Image from '../assets/Intro3.png';

function Step8_FinalInfo({ onContinue }) {
    const headline = "Lerne bis zu 6-mal effizienter";
    const message = "Studien zeigen, dass interaktives Lernen bis zu 6-mal effektiver ist als das bloße Ansehen von Vorlesungsvideos.";

    return (
        <Box
            p={4}
            textAlign="center"
            width={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw', xl: '50vw' }}
            maxWidth="800px" // Optional: Set a maximum width to prevent excessive stretching
            mx="auto" // Center the Box horizontally
        >
            <VStack spacing={6} align="center"> {/* Increased spacing from 4 to 6 */}
                {/* Image added above the text */}
                <Image
                    src={Intro3Image}
                    alt="Learning efficiency illustration"
                    width={{ base: '100%', sm: '200px', md: '200px', lg: '200px', xl: '200px' }}
                    height="auto"
                    objectFit="contain"
                    marginBottom={{ base: 4, sm: 6 }} // Increased marginBottom for more space below the image
                />

                {/* Headline */}
                <Heading
                    as="h2"
                    fontSize={{ base: 'xl', sm: '2xl', md: '2xl', lg: '2xl', xl: '2xl' }}
                    fontWeight="bold"
                >
                    {headline}
                </Heading>

                {/* Supporting message */}
                <Text
                    fontSize={{ base: 'md', sm: 'lg', md: 'lg', lg: 'lg', xl: 'lg' }}
                    mb={4} // Adds margin-bottom for additional spacing below the text
                >
                    {message}
                </Text>

                <ContinueButton
                    onClick={onContinue} // Use onContinue directly
                    ariaLabel="Continue to Login"
                >
                    Weiter
                </ContinueButton>
            </VStack>
        </Box>
    );
}

Step8_FinalInfo.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step8_FinalInfo;
