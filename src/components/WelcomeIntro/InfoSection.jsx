import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function InfoSection({ message, nextRoute }) {
    const navigate = useNavigate();

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="xl">{message}</Text>
                <Button colorScheme="teal" size="lg" onClick={() => navigate(nextRoute)}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

// Define prop types
InfoSection.propTypes = {
    message: PropTypes.string.isRequired,
    nextRoute: PropTypes.string.isRequired,
};

export default InfoSection;
