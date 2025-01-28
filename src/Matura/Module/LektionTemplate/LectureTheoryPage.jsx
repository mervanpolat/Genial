// File: src/Matura/Module/LektionTemplate/LectureTheoryPage.jsx

import React, { useState, useRef, useEffect } from "react";
import {
    chakra,
    Button,
    Image,
    Text,
    useColorModeValue,
    Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LectureTheorySection from "./LectureTheorySection.jsx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OuterSection = chakra("section", {});
const InnerSection = chakra("section", {});

/**
 * Banner rendering logic
 */
function BannerArea({ bannerImageSrc, bannerImages = [] }) {
    if (bannerImages.length >= 2) {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };
        return (
            <Box w="100%" maxW="600px" mx="auto" mb={8}>
                <Slider {...settings}>
                    {bannerImages.map((imgSrc, idx) => (
                        <Box key={idx}>
                            <Image
                                src={imgSrc}
                                alt={`Lecture Banner ${idx + 1}`}
                                width="100%"
                                maxH="600px"
                                objectFit="contain"
                                borderRadius="md"
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        );
    }

    if (bannerImages.length === 1) {
        return (
            <Image
                src={bannerImages[0]}
                alt="Lecture Banner"
                width="100%"
                maxH="600px"
                objectFit="contain"
                borderRadius="md"
                mb={8}
            />
        );
    }

    if (bannerImageSrc) {
        return (
            <Image
                src={bannerImageSrc}
                alt="Lecture Banner"
                width="100%"
                maxH="600px"
                objectFit="contain"
                borderRadius="md"
                mb={8}
            />
        );
    }

    return null;
}

/**
 * LectureTheoryPage
 *
 * Alternative Gating mit sectionVisibility[] (boolean array).
 *
 * - Intro: bei Klick "Weiter" => Intro wird versteckt, sectionVisibility[0] = true,
 *   wir scrollen zu section 0.
 * - currentSectionIndex => der "aktive" Abschnitt, an dem sich der User befindet.
 * - Klick auf "Weiter" in section i => wir schalten section i+1 "visible" und
 *   scrollen dorthin, increment i => gating fürs Quiz (user muss isAnswered=true).
 */
function LectureTheoryPage({
                               bannerImageSrc,
                               bannerImages,
                               headline,
                               introText,
                               sectionsContent,
                               onSectionComplete,
                           }) {
    const navigate = useNavigate();

    const pageRef = useRef(null);
    const NAVBAR_HEIGHT = 80;

    // Intro gating
    const [introVisible, setIntroVisible] = useState(!!introText);

    // Wir halten fest, welcher Abschnitt "aktiv" ist (User steht dort).
    const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);

    // Ein bool-Array, ob section i angezeigt wird.
    // Anfangs: alle false.
    const initialVisibility = sectionsContent.map(() => false);
    const [sectionVisibility, setSectionVisibility] = useState(initialVisibility);

    // Quiz-Freischaltung
    const [isSectionAnswered, setIsSectionAnswered] = useState(false);

    const sectionRefs = useRef([]);

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    const totalSections = sectionsContent.length;

    const isLastSection = currentSectionIndex === totalSections - 1;

    // Scroll Navbar out of view on mount
    useEffect(() => {
        if (pageRef.current) {
            setTimeout(() => {
                const topPosition = pageRef.current.offsetTop + NAVBAR_HEIGHT;
                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth",
                });
            }, 50);
        }
    }, []);

    // INTRO => klick => zeige Section 0
    const handleIntroNext = () => {
        setIntroVisible(false);

        // Mach section 0 sichtbar
        setSectionVisibility((prev) => {
            const copy = [...prev];
            copy[0] = true;
            return copy;
        });

        // Wir wechseln currentSectionIndex = 0
        setCurrentSectionIndex(0);
        setIsSectionAnswered(false);

        // Scroll zu Section 0
        setTimeout(() => {
            if (sectionRefs.current[0]) {
                sectionRefs.current[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 50);
    };

    // "Weiter" => next section
    const handleNextSection = () => {
        setIsSectionAnswered(false);

        const nextIndex = currentSectionIndex + 1;
        if (nextIndex < totalSections) {
            // Mach section nextIndex sichtbar
            setSectionVisibility((prev) => {
                const copy = [...prev];
                copy[nextIndex] = true;
                return copy;
            });

            setCurrentSectionIndex(nextIndex);

            setTimeout(() => {
                if (sectionRefs.current[nextIndex]) {
                    sectionRefs.current[nextIndex].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 50);

            if (onSectionComplete) onSectionComplete(nextIndex);
        } else {
            // Letzter => navigate
            navigate("/grundlagen");
        }
    };

    // Wenn im aktuellen Abschnitt quiz => gating
    const currentSection = currentSectionIndex >= 0
        ? sectionsContent[currentSectionIndex]
        : null;

    const hasQuiz = currentSection?.quizData ? true : false;
    const isButtonDisabled = hasQuiz && !isSectionAnswered;

    // Quiz answered => man darf "Weiter" klicken
    const handleQuizAnswered = () => {
        setIsSectionAnswered(true);
    };

    // Button label
    const buttonLabel = isLastSection ? "Lektion abschließen" : "Weiter";

    return (
        <chakra.section ref={pageRef} bg={bgColor} minH="100vh" py={6}>
            <OuterSection
                maxW={{ base: "95vw", md: "80vw", lg: "50vw" }}
                mx="auto"
                borderRadius="md"
                p={6}
                bg={cardBg}
            >
                <BannerArea
                    bannerImageSrc={bannerImageSrc}
                    bannerImages={bannerImages || []}
                />

                {headline && (
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
                        {headline}
                    </Text>
                )}

                {/* INTRO */}
                {introVisible && introText && (
                    <>
                        <Text fontSize={{ base: "xl", md: "xl" }} mb={4}>
                            {introText}
                        </Text>

                        <Button
                            onClick={handleIntroNext}
                            mt={6}
                            bg="#30628b"
                            color="white"
                            size={{ base: "md", md: "lg" }}
                            boxShadow="md"
                            _hover={{ bg: "#245074", boxShadow: "lg" }}
                            _active={{ bg: "#1d3f5e" }}
                        >
                            Weiter
                        </Button>
                    </>
                )}

                {/* Abschnitte */}
                {!introVisible && (
                    <>
                        {sectionsContent.map((section, idx) => {
                            // Nur rendern, wenn sectionVisibility[idx] == true
                            if (!sectionVisibility[idx]) return null;

                            return (
                                <InnerSection
                                    key={idx}
                                    ref={(el) => (sectionRefs.current[idx] = el)}
                                    mt={8}
                                >
                                    <LectureTheorySection
                                        heading={section.heading}
                                        // isVisible => immer true, weil wir ja
                                        // uns entschieden haben, es anzuzeigen
                                        isVisible
                                        quizData={section.quizData}
                                        onQuizAnswered={handleQuizAnswered}
                                    >
                                        {section.paragraphs}
                                    </LectureTheorySection>
                                </InnerSection>
                            );
                        })}

                        {/* Next/Abschließen Button */}
                        {currentSectionIndex < totalSections && (
                            <Button
                                onClick={handleNextSection}
                                mt={6}
                                bg="#30628b"
                                color="white"
                                size={{ base: "md", md: "lg" }}
                                boxShadow="md"
                                _hover={{ bg: "#245074", boxShadow: "lg" }}
                                _active={{ bg: "#1d3f5e" }}
                                isDisabled={isButtonDisabled}
                            >
                                {buttonLabel}
                            </Button>
                        )}
                    </>
                )}
            </OuterSection>
        </chakra.section>
    );
}

export default LectureTheoryPage;
