import React from "react";
import { Box, Progress, Text } from "@chakra-ui/react";

/**
 * A simple linear progress bar that shows how many sections are completed
 * out of a total. Typically placed at the top as a navbar or subheader.
 */
const ProgressBar = ({ currentStep, totalSteps }) => {
    const percentage = Math.round((currentStep / totalSteps) * 100);

    return (
        <Box
            bg="white"
            w="100%"
            boxShadow="md"
            p={2}
            position="sticky"
            top="0"
            zIndex="999"
        >
            <Text fontSize="sm" fontWeight="bold" mb={1}>
                {`Fortschritt: ${currentStep}/${totalSteps}`}
            </Text>
            <Progress value={percentage} colorScheme="blue" size="sm" />
        </Box>
    );
};

export default ProgressBar;
