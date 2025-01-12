// src/components/WelcomeIntro/steps/Step8_FinalInfo.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack, Image } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import ContinueButton from "../ContinueButton.jsx";

function Step8_FinalInfo({ onContinue = () => {} }) {
    const headline = "Lerne bis zu 6-mal effizienter";
    const message =
        "Studien zeigen, dass interaktives Lernen bis zu 6-mal effektiver ist als das bloße Ansehen von Vorlesungsvideos.";

    return (
        <OnboardingLayout>
            <Box
                p={4}
                textAlign="center"
                width="full"
                maxWidth="800px"
                mx="auto"
                mt={8}
            >
                <VStack spacing={6} align="center">
                    <Image
                        src="src/components/WelcomeIntro/assets/Step8_FinalInfo.svg"
                        alt="Learning efficiency illustration"
                        maxW="250px"
                        objectFit="contain"
                        mb={6}
                    />

                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                        {headline}
                    </Text>

                    <Text fontSize="xl" textAlign="center">
                        {message}
                    </Text>

                    <ContinueButton onClick={onContinue} ariaLabel="Continue to Login">
                        Weiter
                    </ContinueButton>
                </VStack>
            </Box>
        </OnboardingLayout>
    );
}

Step8_FinalInfo.propTypes = {
    onContinue: PropTypes.func,
};

export default Step8_FinalInfo;
