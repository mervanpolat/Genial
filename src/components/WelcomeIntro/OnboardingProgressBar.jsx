import React from 'react';
import { Progress } from '@chakra-ui/react';
import { useOnboarding } from '../../context/OnboardingContext.jsx';

function OnboardingProgressBar({ ...styleProps }) {
    const { currentStep, totalSteps } = useOnboarding();

    // Avoid division by zero
    const progressValue = totalSteps > 1
        ? (currentStep / (totalSteps - 1)) * 100
        : 0;

    return (
        <Progress
            value={progressValue}
            // Remove stripes & animations
            hasStripe={false}
            isAnimated={false}
            // The track (unfilled portion) color: black at 20% opacity
            bg="rgba(0, 0, 0, 0.2)"
            // Adjust the thickness
            height="10px"
            // Override the filled portion to our custom green
            // We use the `sx` prop to style the inner div
            sx={{
                '& > div': {
                    backgroundColor: '#7abf91', // The filled bar
                },
            }}
            // Spread additional style props from parent
            {...styleProps}
        />
    );
}

export default OnboardingProgressBar;
