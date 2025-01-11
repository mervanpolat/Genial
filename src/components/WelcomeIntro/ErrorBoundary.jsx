// src/components/ErrorBoundary.jsx
import React from 'react';
import PropTypes from 'prop-types'; // <-- Import PropTypes
import { Box, Text, Button, VStack } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI.
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

        // If there’s no error, render children as normal
        return this.props.children;
    }
}

// Define prop types to satisfy ESLint
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
