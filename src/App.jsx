// src/App.jsx

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    useNavigate,
    Navigate,
} from "react-router-dom";
import { IconButton, HStack } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

// Import NavBar, Footer, and other pages
import NavBar from "./components/LandingPage/NavBar.jsx";
import Footer from "./components/LandingPage/Footer.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import MeinLehrplan from "./components/Lehrplan/MeinLehrplan.jsx";

// Onboarding Steps
import Step1_Welcome from "./components/WelcomeIntro/steps/Step1_Welcome.jsx";
import Step2_GoalSelection from "./components/WelcomeIntro/steps/Step2_GoalSelection.jsx";
import Step3_MaturatypSelection from "./components/WelcomeIntro/steps/Step3_MaturatypSelection.jsx";
import Step4_InfoSection from "./components/WelcomeIntro/steps/Step4_InfoSection.jsx";
import Step5_MathComfortLevel from "./components/WelcomeIntro/steps/Step5_MathComfortLevel.jsx";
import Step6_DailyGoal from "./components/WelcomeIntro/steps/Step6_DailyGoal.jsx";
import Step7_TimePreference from "./components/WelcomeIntro/steps/Step7_TimePreference.jsx";
import Step8_FinalInfo from "./components/WelcomeIntro/steps/Step8_FinalInfo.jsx";
import Step9_LoginPage from "./components/WelcomeIntro/steps/Step9_LoginPage.jsx";

// Import OnboardingProvider
import { OnboardingProvider } from "./context/OnboardingContext.jsx";

const stepsArray = [
    { path: "/welcome", component: Step1_Welcome },
    { path: "/goal-selection", component: Step2_GoalSelection },
    { path: "/maturatyp-selection", component: Step3_MaturatypSelection },
    { path: "/info-1", component: Step4_InfoSection },
    { path: "/math-comfort-level", component: Step5_MathComfortLevel },
    { path: "/daily-goal", component: Step6_DailyGoal },
    { path: "/time-preference", component: Step7_TimePreference },
    { path: "/info-2", component: Step8_FinalInfo },
    { path: "/login", component: Step9_LoginPage },
];

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    // These are the routes where we hide NavBar/Footer
    const hideLayoutRoutes = stepsArray.map((step) => step.path);
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

    // Find which step index we are on
    const currentStep = stepsArray.findIndex(
        (step) => step.path === location.pathname
    );

    console.log("Current Path:", location.pathname);
    console.log("Current Step Index:", currentStep);

    // Go back to previous step
    const handleBack = () => {
        if (currentStep > 0) {
            const previousStepPath = stepsArray[currentStep - 1].path;
            navigate(previousStepPath);
        }
    };

    // Move to the next route (onContinue handler)
    const handleContinue = (nextRoute) => {
        if (currentStep < stepsArray.length - 1 && nextRoute) {
            navigate(nextRoute);
        } else {
            // After the last step, go to home or wherever
            navigate("/");
        }
    };

    return (
        <>
            {!shouldHideLayout && <NavBar />}

            {shouldHideLayout && (
                <HStack spacing={4} p={4} alignItems="center">
                    <IconButton
                        icon={<ArrowLeftIcon />}
                        aria-label="Back"
                        onClick={handleBack}
                        isDisabled={currentStep === 0}
                        variant="ghost"
                        _hover={{
                            bg: "rgba(0, 0, 0, 0.1)",
                        }}
                        _disabled={{
                            opacity: 0.4,
                            cursor: "not-allowed",
                        }}
                    />
                </HStack>
            )}

            <Routes>
                {/* General (non-onboarding) Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/mein-lehrplan" element={<MeinLehrplan />} />

                {/* Onboarding Flow Routes */}
                {stepsArray.map((step, index) => (
                    <Route
                        key={index}
                        path={step.path}
                        element={
                            <step.component
                                // We pass onContinue except for Step9, which might not need it
                                onContinue={() =>
                                    handleContinue(stepsArray[index + 1]?.path)
                                }
                            />
                        }
                    />
                ))}

                {/* Fallback for any undefined route during onboarding */}
                {hideLayoutRoutes.includes(location.pathname) && (
                    <Route path="*" element={<Navigate to="/welcome" replace />} />
                )}
            </Routes>

            {!shouldHideLayout && <Footer />}
        </>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <OnboardingProvider>
                <App />
            </OnboardingProvider>
        </Router>
    );
}
