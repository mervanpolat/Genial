import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, VStack, Image } from '@chakra-ui/react';
import { Typewriter } from 'react-simple-typewriter';
import ContinueButton from "../ContinueButton.jsx";

function Step1_Welcome({ onContinue }) {
    const message = "Hallo, lass uns einen Lernpfad nur für dich erstellen.";

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={10}>
                <Image src="src/components/WelcomeIntro/assets/proposition_11_figure.svg" alt="Step1_Welcome" boxSize="250px" />
                <Text fontSize="2xl" fontWeight="bold">
                    <Typewriter
                        words={[message]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </Text>

                <ContinueButton onClick={onContinue} ariaLabel="Continue to Goal Selection">
                    Weiter
                </ContinueButton>
            </VStack>
        </Box>
    );
}

Step1_Welcome.propTypes = {
    onContinue: PropTypes.func.isRequired,
};

export default Step1_Welcome;
