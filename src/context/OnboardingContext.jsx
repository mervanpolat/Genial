// src/context/OnboardingContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const OnboardingContext = createContext();

export const useOnboarding = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }) => {
    const location = useLocation();

    const steps = [
        '/welcome',
        '/goal-selection',
        '/maturatyp-selection',
        '/info-1',
        '/math-comfort-level',
        '/daily-goal',
        '/time-preference',
        '/info-2',
        '/final-info',
        '/login',
    ];
    const totalSteps = steps.length;
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const stepIndex = steps.indexOf(location.pathname);
        if (stepIndex !== -1) {
            setCurrentStep(stepIndex);
        }
    }, [location.pathname, steps]);

    const goToStep = (stepPath) => {
        const stepIndex = steps.indexOf(stepPath);
        if (stepIndex !== -1) {
            setCurrentStep(stepIndex);
        }
    };

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <OnboardingContext.Provider
            value={{
                currentStep,
                totalSteps,
                goToStep,
                nextStep,
                prevStep,
                steps,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
};

OnboardingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
