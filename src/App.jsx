// File: src/App.jsx
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
import MaturatypenUebersicht from "./Matura/MaturatypenUebersicht/MaturatypenUebersicht.jsx";
import Price from "./components/LandingPage/Price.jsx";
import AboutUs from "./components/LandingPage/AboutUs.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

// Theory-based content
import DynamicTheoryPage from "./Matura/Module/DynamicTheoryPage.jsx";
import Grundlagen from "./Matura/Module/1_Grundlagen/Grundlagen.jsx";
import GleichungenLoesen from "./Matura/Module/2_GleichungenLoesen/GleichungenLoesen.jsx";

// Onboarding
import Step1_Welcome from "./components/Onboarding/steps/Step1_Welcome.jsx";
import Step2_GoalSelection from "./components/Onboarding/steps/Step2_GoalSelection.jsx";
import Step3_MaturatypSelection from "./components/Onboarding/steps/Step3_MaturatypSelection.jsx";
import Step4_InfoSection from "./components/Onboarding/steps/Step4_InfoSection.jsx";
import Step5_MathComfortLevel from "./components/Onboarding/steps/Step5_MathComfortLevel.jsx";
import Step6_DailyGoal from "./components/Onboarding/steps/Step6_DailyGoal.jsx";
import Step7_TimePreference from "./components/Onboarding/steps/Step7_TimePreference.jsx";
import Step8_FinalInfo from "./components/Onboarding/steps/Step8_FinalInfo.jsx";
import Step9_LoginPage from "./components/Onboarding/steps/Step9_LoginPage.jsx";

import { OnboardingProvider } from "./components/Onboarding/OnboardingContext.jsx";

// PRACTICE dynamic loader
import DynamicPracticePage from "./Matura/Module/DynamicPracticePage.jsx";

// Onboarding step array
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
                {/* Public */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/mein-lehrplan" element={<MaturatypenUebersicht />} />
                <Route path="/preis" element={<Price />} />
                <Route path="/ueber-uns" element={<AboutUs />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Roadmaps */}
                <Route path="/grundlagen" element={<Grundlagen />} />
                <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />

                {/* DYNAMIC route for theory => the "slug" picks the correct theory data */}
                <Route path="/theory/:slug" element={<DynamicTheoryPage />} />

                {/* DYNAMIC route for practice => "slug" picks the correct practice component */}
                <Route path="/practice/:slug" element={<DynamicPracticePage />} />

                {/* Onboarding steps */}
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

                {/* "Kurse" => same as MaturatypenUebersicht */}
                <Route path="/kurse" element={<MaturatypenUebersicht />} />

                {/* Fallback during onboarding */}
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
