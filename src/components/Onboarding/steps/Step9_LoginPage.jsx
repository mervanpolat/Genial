// src/components/Onboarding/steps/Step9_LoginPage.jsx
import React, { useEffect, useState } from "react";
import { Box, VStack, Text, Button, Image, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

import OnboardingLayout from "../OnboardingLayout.jsx";
import LoginPopper from "../../../firebase/LoginPopper.jsx";
import { auth, db } from "../../../firebase/firebaseConfig.js";
import { useOnboardingContext } from "../OnboardingContext.jsx";

function Step9_LoginPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [hasSaved, setHasSaved] = useState(false);
    const navigate = useNavigate();

    // Pull the user’s onboarding data from OnboardingContext
    const {
        goal,
        maturatyp,
        mathComfortLevel,
        dailyGoal,
        timePreference,
    } = useOnboardingContext();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user && !hasSaved) {
                try {
                    // Combine everything we have into one object:
                    const userData = {
                        goal,
                        maturatyp,
                        mathComfortLevel,
                        dailyGoal,
                        timePreference,
                        // Also store the Firebase user info
                        username: user.displayName || "",
                        email: user.email,
                        completedOnboarding: true,
                        timestamp: serverTimestamp(),
                    };

                    // MERGE so that we don't overwrite existing data
                    await setDoc(
                        doc(collection(db, "users"), user.uid),
                        userData,
                        { merge: true }
                    );

                    setHasSaved(true);
                    navigate("/mein-lehrplan");
                } catch (error) {
                    console.error("Error saving onboarding data:", error);
                }
            }
        });

        return () => unsubscribe();
    }, [
        goal,
        maturatyp,
        mathComfortLevel,
        dailyGoal,
        timePreference,
        hasSaved,
        navigate,
    ]);

    return (
        <OnboardingLayout>
            <Box
                p={4}
                textAlign="center"
                width="full"
                maxWidth="800px"
                mx="auto"
                mt={8}
            >
                <VStack spacing={6} align="center">
                    <Image
                        src="src/components/WelcomeIntro/assets/Step9_LoginPage.svg"
                        alt="Login Illustration"
                        maxW="250px"
                        objectFit="contain"
                        mb={6}
                    />

                    <Text fontSize="xl" fontWeight="normal" textAlign="center">
                        Dein individueller Lernweg wartet auf dich. Registriere dich
                        kostenlos und fange an, dein Wissen auszubauen.
                    </Text>

                    <Button
                        bg="black"
                        color="white"
                        size="lg"
                        onClick={onOpen}
                        aria-label="Open Login Popper"
                        _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
                    >
                        Anmelden
                    </Button>

                    <LoginPopper isOpen={isOpen} onClose={onClose} />
                </VStack>
            </Box>
        </OnboardingLayout>
    );
}

export default Step9_LoginPage;
