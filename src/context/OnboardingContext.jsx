// src/context/OnboardingContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const OnboardingContext = createContext();

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }) => {
    const location = useLocation();

    // Onboarding routes in the order you'd like your steps to appear
    const steps = [
        "/welcome",             // Step1
        "/goal-selection",      // Step2
        "/maturatyp-selection", // Step3
        "/info-1",              // Step4
        "/math-comfort-level",  // Step5
        "/daily-goal",          // Step6
        "/time-preference",     // Step7
        "/info-2",              // Step8
        "/login",               // Step9
    ];

    const [totalSteps] = useState(steps.length);
    const [currentStep, setCurrentStep] = useState(0);

    // Onboarding states
    const [goal, setGoal] = useState("");
    const [maturatyp, setMaturatyp] = useState("");
    const [mathComfortLevel, setMathComfortLevel] = useState("");
    const [dailyGoal, setDailyGoal] = useState("");
    const [timePreference, setTimePreference] = useState("");

    // Whenever the pathname changes, update currentStep to match the index in the steps array
    useEffect(() => {
        const index = steps.indexOf(location.pathname);
        if (index !== -1) {
            setCurrentStep(index);
        }
    }, [location.pathname, steps]);

    const value = {
        currentStep,
        totalSteps,
        goal,
        setGoal,
        maturatyp,
        setMaturatyp,
        mathComfortLevel,
        setMathComfortLevel,
        dailyGoal,
        setDailyGoal,
        timePreference,
        setTimePreference,
    };

    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    );
};

OnboardingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
