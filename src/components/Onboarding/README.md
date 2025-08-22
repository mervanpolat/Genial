# Onboarding Two-Way Data Binding

## Problem
When users navigate back in the onboarding flow, their previous selections were lost because the local state in each step component wasn't synchronized with the context values.

## Solution
Implemented two-way data binding using a custom hook `useOnboardingSelection` that:

1. **Initializes local state from context**: When a component mounts, it checks the context for existing values
2. **Syncs with context changes**: Uses `useEffect` to update local state when context changes (e.g., when navigating back)
3. **Updates context on selection**: When user makes a selection, both local state and context are updated

## Implementation

### Custom Hook: `useOnboardingSelection`

```javascript
// src/components/Onboarding/hooks/useOnboardingSelection.js
import { useState, useEffect } from 'react';

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
```

### Usage in Step Components

```javascript
// Before (problematic)
const [selectedOption, setSelectedOption] = useState(null);
const { setGoal } = useOnboardingContext();

// After (with two-way binding)
const { goal, setGoal } = useOnboardingContext();
const { selectedOption, handleSelection } = useOnboardingSelection(options, goal, setGoal);
```

## Benefits

1. **Persistent Selections**: User selections are preserved when navigating back
2. **Clean Code**: Reusable hook reduces code duplication
3. **Consistent Behavior**: All selection steps work the same way
4. **Better UX**: Users don't lose their progress when going back

## Updated Components

The following components have been updated with two-way data binding:

- `Step2_GoalSelection.jsx`
- `Step3_MaturatypSelection.jsx`
- `Step5_MathComfortLevel.jsx`
- `Step6_DailyGoal.jsx`
- `Step7_TimePreference.jsx`

## Testing the Fix

1. Start the onboarding flow
2. Make selections in multiple steps
3. Navigate back using the back button
4. Verify that your previous selections are still highlighted
5. Continue forward - selections should persist

## Future Enhancements

- Add persistence to localStorage for even better user experience
- Implement validation before allowing navigation forward
- Add progress indicators showing completed steps 