// src/App.jsx

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    useNavigate,
    Navigate,
} from 'react-router-dom';
import { IconButton, HStack } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';


// Import NavBar, Footer, and General Pages
import NavBar from './components/LandingPage/NavBar.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import UeberUns from './components/LandingPage/UeberUns.jsx';
import MeinLehrplan from './components/Lehrplan/MeinLehrplan.jsx';
import Preis from './components/LandingPage/Preis.jsx';
import Grundlagen from './modules/Pages/Grundlagen.jsx';
import GleichungenLoesen from './modules/Pages/GleichungenLoesen.jsx';

// Import Onboarding Steps
import Step1_Welcome from './components/WelcomeIntro/steps/Step1_Welcome.jsx';
import Step2_GoalSelection from './components/WelcomeIntro/steps/Step2_GoalSelection.jsx';
import Step3_MaturatypSelection from './components/WelcomeIntro/steps/Step3_MaturatypSelection.jsx';
import Step4_InfoSection from './components/WelcomeIntro/steps/Step4_InfoSection.jsx';
import Step5_MathComfortLevel from './components/WelcomeIntro/steps/Step5_MathComfortLevel.jsx';
import Step6_DailyGoal from './components/WelcomeIntro/steps/Step6_DailyGoal.jsx';
import Step7_TimePreference from './components/WelcomeIntro/steps/Step7_TimePreference.jsx';
import Step8_FinalInfo from './components/WelcomeIntro/steps/Step8_FinalInfo.jsx';
import Step9_LoginPage from './components/WelcomeIntro/steps/Step9_LoginPage.jsx';

// **Import your OnboardingProvider**
import { OnboardingProvider } from './context/OnboardingContext.jsx';

// Define steps array outside App component to prevent re-creation on every render
const stepsArray = [
    { path: '/welcome', component: Step1_Welcome },
    { path: '/goal-selection', component: Step2_GoalSelection },
    { path: '/maturatyp-selection', component: Step3_MaturatypSelection },
    { path: '/info-1', component: Step4_InfoSection },
    { path: '/math-comfort-level', component: Step5_MathComfortLevel },
    { path: '/daily-goal', component: Step6_DailyGoal },
    { path: '/time-preference', component: Step7_TimePreference },
    { path: '/info-2', component: Step8_FinalInfo },
    { path: '/login', component: Step9_LoginPage },
];

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    // Routes where NavBar and Footer should be hidden
    const hideLayoutRoutes = stepsArray.map((step) => step.path);
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

    // Derive currentStep based on location.pathname
    const currentStep = stepsArray.findIndex(
        (step) => step.path === location.pathname
    );

    // Debugging Logs (Remove in Production)
    console.log(`Current Path: ${location.pathname}`);
    console.log(`Current Step Index: ${currentStep}`);

    // Handle back button click
    const handleBack = () => {
        if (currentStep > 0) {
            const previousStepPath = stepsArray[currentStep - 1].path;
            navigate(previousStepPath);
        }
    };

    // Handle continue button click
    const handleContinue = (nextRoute) => {
        if (currentStep < stepsArray.length - 1 && nextRoute) {
            navigate(nextRoute);
        } else {
            // After the last step, redirect to home or another page
            navigate('/'); // e.g. Home page
        }
    };

    return (
        <>
            {/* Conditionally render NavBar and Footer */}
            {!shouldHideLayout && <NavBar />}
            {shouldHideLayout && (
                <HStack spacing={4} p={4} alignItems="center">
                    <IconButton
                        icon={<ArrowLeftIcon />}
                        aria-label="Back"
                        onClick={handleBack}
                        isDisabled={currentStep === 0}
                        variant="ghost" // Removes background by default
                        _hover={{
                            bg: 'rgba(0, 0, 0, 0.1)', // Black with 20% transparency on hover
                        }}
                        _disabled={{
                            opacity: 0.4, // Makes the arrow semi-transparent when disabled
                            cursor: 'not-allowed',
                        }}
                    />
                </HStack>
            )}

            <Routes>
                {/* General Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/ueber-uns" element={<UeberUns />} />
                <Route path="/kurse" element={<MeinLehrplan />} />
                <Route path="/preis" element={<Preis />} />
                <Route path="/grundlagen" element={<Grundlagen />} />
                <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />

                {/* Onboarding Flow Routes */}
                {stepsArray.map((step, index) => (
                    <Route
                        key={index}
                        path={step.path}
                        element={
                            <step.component
                                onContinue={() => handleContinue(stepsArray[index + 1]?.path)}
                            />
                        }
                    />
                ))}

                {/* Fallback Route for Onboarding Steps */}
                {hideLayoutRoutes.includes(location.pathname) && (
                    <Route path="*" element={<Navigate to="/welcome" replace />} />
                )}
            </Routes>

            {!shouldHideLayout && <Footer />}
        </>
    );
}

// **Wrap App with OnboardingProvider** in AppWrapper
export default function AppWrapper() {
    return (
        <Router>
            <OnboardingProvider>
                <App />
            </OnboardingProvider>
        </Router>
    );
}
