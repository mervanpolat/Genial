import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const OnboardingContext = createContext();

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }) => {
    const location = useLocation();

    // Onboarding routes
    const steps = [
        "/welcome",
        "/goal-selection",
        "/maturatyp-selection",
        "/info-1",
        "/math-comfort-level",
        "/daily-goal",
        "/time-preference",
        "/info-2",
        "/login",
    ];

    const [totalSteps] = useState(steps.length);
    const [currentStep, setCurrentStep] = useState(0);

    // Example states for user selection
    const [goal, setGoal] = useState("");
    const [maturatyp, setMaturatyp] = useState("");
    const [mathComfortLevel, setMathComfortLevel] = useState("");
    const [dailyGoal, setDailyGoal] = useState("");
    const [timePreference, setTimePreference] = useState("");

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
