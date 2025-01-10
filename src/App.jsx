import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/LandingPage/NavBar.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import UeberUns from './components/LandingPage/UeberUns.jsx';
import MeinLehrplan from './components/Lehrplan/MeinLehrplan.jsx';
import Preis from './components/LandingPage/Preis.jsx'; // Importing Preis page

// Importing pages created using PageWrapper
import Grundlagen from './modules/Pages/Grundlagen.jsx';
import GleichungenLoesen from './modules/Pages/GleichungenLoesen.jsx';

// Importing onboarding pages
import Welcome from './components/WelcomeIntro/Welcome.jsx';
import GoalSelection from './components/WelcomeIntro/GoalSelection.jsx';
import MaturatypSelection from './components/WelcomeIntro/MaturatypSelection.jsx';
import InfoSection from './components/WelcomeIntro/InfoSection.jsx';
import MathComfortLevel from './components/WelcomeIntro/MathComfortLevel.jsx';
import DailyGoal from './components/WelcomeIntro/DailyGoal.jsx';
import TimePreference from './components/WelcomeIntro/TimePreference.jsx';
import FinalInfo from './components/WelcomeIntro/FinalInfo.jsx';
import LoginPage from './components/WelcomeIntro/LoginPage.jsx';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/ueber-uns" element={<UeberUns />} />
                <Route path="/kurse" element={<MeinLehrplan />} /> {/* Corrected route for Kurse */}
                <Route path="/preis" element={<Preis />} />

                {/* Routes for pages using PageWrapper */}
                <Route path="/grundlagen" element={<Grundlagen />} />
                <Route path="/gleichungen-loesen" element={<GleichungenLoesen />} />

                {/* Onboarding Flow Routes */}
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/goal-selection" element={<GoalSelection />} />
                <Route path="/maturatyp-selection" element={<MaturatypSelection />} />
                <Route
                    path="/info-1"
                    element={
                        <InfoSection
                            message="You’ll fit right in: Millions of lifelong learners use Genial to hone their problem-solving skills."
                            nextRoute="/math-comfort-level"
                        />
                    }
                />
                <Route path="/math-comfort-level" element={<MathComfortLevel />} />
                <Route path="/daily-goal" element={<DailyGoal />} />
                <Route path="/time-preference" element={<TimePreference />} />
                <Route
                    path="/info-2"
                    element={
                        <InfoSection
                            message="Smarter every day: Learning a little each day is one of the most important things you can do to stay sharp."
                            nextRoute="/final-info"
                        />
                    }
                />
                <Route path="/final-info" element={<FinalInfo />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
