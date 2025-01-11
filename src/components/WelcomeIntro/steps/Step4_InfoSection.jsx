import React from "react";
import PropTypes from "prop-types";
import { Box, Text, VStack, Image } from "@chakra-ui/react";

import OnboardingLayout from "../OnboardingLayout.jsx";
import ContinueButton from "../ContinueButton.jsx";

function Step4_InfoSection({ onContinue = () => {} }) {
    const message =
        "Unsere interaktiven, erzählenden Kurse wecken Neugier und helfen dabei, mathematische Themen auf intuitive Weise zu verstehen – ganz ohne starres Pauken von Formeln.";

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
                        src="src/components/WelcomeIntro/assets/proposition_4_figure_same.svg"
                        alt="Informationsbild"
                        maxW="250px"
                        objectFit="contain"
                        mb={6}
                    />

                    <Text fontSize="xl" textAlign="center">
                        {message}
                    </Text>

                    <ContinueButton onClick={onContinue} ariaLabel="Continue to Info Section">
                        Weiter
                    </ContinueButton>
                </VStack>
            </Box>
        </OnboardingLayout>
    );
}

Step4_InfoSection.propTypes = {
    onContinue: PropTypes.func,
};

export default Step4_InfoSection;
