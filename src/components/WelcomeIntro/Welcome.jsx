import 'react';
import { Box, Text, Button, VStack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={6}>
                <Image src="/images/welcome.png" alt="Welcome" boxSize="150px" />
                <Text fontSize="2xl" fontWeight="bold">
                    Hi, let&#39;s build a learning path just for you
                </Text>

                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={() => navigate('/goal-selection')}
                >
                    Continue
                </Button>
            </VStack>
        </Box>
    );
}

export default Welcome;
