// src/components/Onboarding/hooks/useOnboardingSelection.js
import { useState, useEffect } from 'react';

/**
 * Custom hook for handling two-way data binding in onboarding selections
 * @param {Array} options - Array of option objects with label property
 * @param {string} contextValue - Current value from context
 * @param {Function} setContextValue - Function to update context value
 * @returns {Object} - { selectedOption, handleSelection }
 */
export const useOnboardingSelection = (options, contextValue, setContextValue) => {
    // Initialize selectedOption from context
    const [selectedOption, setSelectedOption] = useState(() => {
        const index = options.findIndex(option => option.label === contextValue);
        return index !== -1 ? index : null;
    });

    // Sync with context changes (for when user navigates back)
    useEffect(() => {
        const index = options.findIndex(option => option.label === contextValue);
        setSelectedOption(index !== -1 ? index : null);
    }, [contextValue, options]);

    const handleSelection = (index) => {
        setSelectedOption(index);
        setContextValue(options[index].label);
    };

    return {
        selectedOption,
        handleSelection
    };
}; 