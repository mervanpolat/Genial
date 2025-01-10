// src/components/WelcomeIntro/OnboardingLayout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, HStack } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { ProgressBar, Step } from 'react-step-progress-bar';
import "react-step-progress-bar/styles.css";
import { useOnboarding } from '../../context/OnboardingContext';
import { useNavigate } from 'react-router-dom';

const OnboardingLayout = ({ children }) => {
    const { currentStep, totalSteps, prevStep, steps } = useOnboarding();
    const navigate = useNavigate();

    const handleBack = () => {
        if (currentStep > 0) {
            prevStep();
            navigate(steps[currentStep - 1]);
        }
    };

    return (
        <Box>
            {/* Progress Bar with Back Button */}
            <HStack spacing={4} p={4} alignItems="center">
                <IconButton
                    icon={<ArrowLeftIcon />}
                    aria-label="Back"
                    onClick={handleBack}
                    isDisabled={currentStep === 0}
                />
                <ProgressBar
                    percent={(currentStep / (totalSteps - 1)) * 100}
                    filledBackground="teal"
                    height={10}
                >
                    {steps.map((_, index) => (
                        <Step key={index}>
                            {({ accomplished }) => (
                                <div
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: '50%',
                                        backgroundColor: accomplished ? 'teal' : 'gray',
                                    }}
                                />
                            )}
                        </Step>
                    ))}
                </ProgressBar>
            </HStack>

            {/* Render the child content (step component) */}
            <Box>{children}</Box>
        </Box>
    );
};

OnboardingLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default OnboardingLayout;
