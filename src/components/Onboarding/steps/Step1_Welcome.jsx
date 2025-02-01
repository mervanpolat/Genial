// src/components/Onboarding/steps/Step1_Welcome.jsx

import React from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

import OnboardingLayout from "../OnboardingLayout.jsx";
import ContinueButton from "../ContinueButton.jsx";

// Import your SVG as a module:
import Step1WelcomeSVG from "../assets/Step1_Welcome.svg";

function Step1_Welcome({ onContinue = () => {} }) {
    const message = "Hallo, lass uns einen Lernpfad nur für dich erstellen.";

    return (
        <OnboardingLayout>
            <Box p={8} textAlign="center">
                <VStack spacing={10}>
                    <Image
                        src={Step1WelcomeSVG}
                        alt="Step1 Welcome"
                        boxSize="250px"
                    />
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
                    <ContinueButton onClick={onContinue}>Weiter</ContinueButton>
                </VStack>
            </Box>
        </OnboardingLayout>
    );
}

Step1_Welcome.propTypes = {
    onContinue: PropTypes.func,
};

export default Step1_Welcome;
