import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import OnboardingProgressBar from './OnboardingProgressBar.jsx';

function OnboardingLayout({ children }) {
    return (
        <>
            <OnboardingProgressBar />
            {/* Add some top margin so your content isn't hidden behind the fixed bar */}
            <Box mt="5px">
                {children}
            </Box>
        </>
    );
}

OnboardingLayout.propTypes = {
    children: PropTypes.node.isRequired, // Ensure 'children' is a React node and required
};

export default OnboardingLayout;
