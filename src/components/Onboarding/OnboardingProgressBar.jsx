import React from 'react';
import { Progress } from '@chakra-ui/react';
import { useOnboardingContext } from './OnboardingContext.jsx';

function OnboardingProgressBar({ ...styleProps }) {
    const { currentStep, totalSteps } = useOnboardingContext();

    const progressValue = totalSteps > 1
        ? (currentStep / (totalSteps - 1)) * 100
        : 0;

    return (
        <Progress
            value={progressValue}
            hasStripe={false}
            isAnimated={false}
            bg="rgba(0, 0, 0, 0.2)"
            height="10px"
            sx={{
                '& > div': {
                    backgroundColor: '#7abf91',
                },
            }}
            {...styleProps}
        />
    );
}

export default OnboardingProgressBar;
