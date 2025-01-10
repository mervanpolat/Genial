// src/components/ErrorBoundary.jsx
import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to display fallback UI
        return { hasError: true };
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box p={8} textAlign="center">
                    <VStack spacing={4}>
                        <Text fontSize="2xl" fontWeight="bold">
                            Oops! Something went wrong.
                        </Text>
                        <Button colorScheme="teal" onClick={this.handleReload}>
                            Reload Page
                        </Button>
                    </VStack>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
