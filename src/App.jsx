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

import NavBar from "./components/LandingPage/NavBar.jsx";
import Footer from "./components/LandingPage/Footer.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Overview from "./Matura/Overview/Overview.jsx";
import Price from "./components/LandingPage/Price.jsx";
import AboutUs from "./components/LandingPage/AboutUs.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

// Import Grundlagen and GleichungenLoesen
import Grundlagen from "./Matura/Content/Grundlagen/Grundlagen.jsx";
import GleichungenLoesen from "./Matura/Content/GleichungenLoesen/GleichungenLoesen.jsx";

// Import Theorie_Zahlenmengen
import Theorie_Zahlenmengen from "./Matura/Content/Grundlagen/Lektionen/1_Zahlenmengen/Theorie_Zahlenmengen.jsx";

import Step1_Welcome from "./components/WelcomeIntro/steps/Step1_Welcome.jsx";
import Step2_GoalSelection from "./components/WelcomeIntro/steps/Step2_GoalSelection.jsx";
import Step3_MaturatypSelection from "./components/WelcomeIntro/steps/Step3_MaturatypSelection.jsx";
import Step4_InfoSection from "./components/WelcomeIntro/steps/Step4_InfoSection.jsx";
import Step5_MathComfortLevel from "./components/WelcomeIntro/steps/Step5_MathComfortLevel.jsx";
import Step6_DailyGoal from "./components/WelcomeIntro/steps/Step6_DailyGoal.jsx";
import Step7_TimePreference from "./components/WelcomeIntro/steps/Step7_TimePreference.jsx";
import Step8_FinalInfo from "./components/WelcomeIntro/steps/Step8_FinalInfo.jsx";
import Step9_LoginPage from "./components/WelcomeIntro/steps/Step9_LoginPage.jsx";

import { OnboardingProvider } from "./OnboardingContext/OnboardingContext.jsx";

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

    const hideLayoutRoutes = stepsArray.map((step) => step.path);
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

    const currentStep = stepsArray.findIndex(
        (step) => step.path === location.pathname
    );

    const handleBack = () => {
        if (currentStep > 0) {
            const previousStepPath = stepsArray[currentStep - 1].path;
            navigate(previousStepPath);
        }
    };

    const handleContinue = (nextRoute) => {
        if (currentStep < stepsArray.length - 1 && nextRoute) {
            navigate(nextRoute);
        } else {
            navigate("/");
        }
    };

    return (
        <>
            {!shouldHideLayout && <NavBar />}

            {shouldHideLayout && (
                <HStack spacing={4} p={4}>
                    <IconButton
                        icon={<ArrowLeftIcon />}
                        aria-label="Back"
                        onClick={handleBack}
                        isDisabled={currentStep === 0}
                        variant="ghost"
                        _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
                        _disabled={{
                            opacity: 0.4,
                            cursor: "not-allowed",
                        }}
                    />
                </HStack>
            )}

            <Routes>
                {/* Public routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/mein-lehrplan" element={<Overview />} />
                <Route path="/preis" element={<Price />} />
                <Route path="/ueber-uns" element={<AboutUs />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Grundlagen & GleichungenLoesen */}
                <Route path="/grundlagen" element={<Grundlagen />} />
                <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />

                {/* Our Theorie_Zahlenmengen route */}
                <Route path="/theorie-zahlenmengen" element={<Theorie_Zahlenmengen />} />

                {/* Onboarding flow */}
                {stepsArray.map((step, index) => (
                    <Route
                        key={index}
                        path={step.path}
                        element={
                            <step.component
                                onContinue={() =>
                                    handleContinue(stepsArray[index + 1]?.path)
                                }
                            />
                        }
                    />
                ))}

                {/* "Kurse" => same as Overview */}
                <Route path="/kurse" element={<Overview />} />

                {/* Fallback for invalid routes during onboarding */}
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
