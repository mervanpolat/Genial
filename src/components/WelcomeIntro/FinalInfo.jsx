import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function FinalInfo() {
    const navigate = useNavigate();

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Text fontSize="xl">
                    You’re on your way now! If you like bending your mind over interesting problems or want to explore a rich
                    world full of beautiful mysteries, this app will be a sure thing for you.
                </Text>
                <Button colorScheme="teal" size="lg" onClick={() => navigate('/login')}>
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default FinalInfo;
