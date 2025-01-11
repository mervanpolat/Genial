import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack, Image } from '@chakra-ui/react';
import ContinueButton from '../ContinueButton.jsx';

function Step8_FinalInfo({ onContinue }) {
    const headline = "Lerne bis zu 6-mal effizienter";
    const message = "Studien zeigen, dass interaktives Lernen bis zu 6-mal effektiver ist als das bloße Ansehen von Vorlesungsvideos.";

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
                {/* Image Section */}
                <Image
                    src="src/components/WelcomeIntro/assets/proposition_47_figure.svg"
                    alt="Learning efficiency illustration"
                    maxW="250px"
                    objectFit="contain"
                    mb={6}
                />

                {/* Headline Section */}
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign="center"
                >
                    {headline}
                </Text>

                {/* Supporting Text Section */}
                <Text
                    fontSize="xl"
                    textAlign="center"
                >
                    {message}
                </Text>

                {/* Continue Button */}
                <ContinueButton
                    onClick={onContinue}
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
