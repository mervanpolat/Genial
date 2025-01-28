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
 * Renders a single banner image or a slider of multiple banner images.
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
                        <Box key={`banner-${idx}`}>
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
 * Single gating state:
 *   - currentSectionIndex = -1 => Intro is shown (no sections).
 *   - currentSectionIndex >= 0 => Hide intro, show sections up to currentSectionIndex.
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

    // -1 => intro, 0..(sectionsContent.length-1) => show that many sections
    const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);

    // If the current section has a quiz, user must answer it before clicking "Weiter"
    const [isSectionAnswered, setIsSectionAnswered] = useState(false);

    // Refs for each rendered section, for smooth scrolling
    const sectionRefs = useRef([]);

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    const totalSections = sectionsContent.length;
    const isLastSection = currentSectionIndex === totalSections - 1;
    const isIntro = currentSectionIndex === -1;

    useEffect(() => {
        // Scroll the page so the navbar is out of view on mount
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

    /**
     * Called when user clicks "Weiter" from the Intro
     */
    const handleIntroNext = () => {
        // Move from -1 to 0, showing the first section
        setCurrentSectionIndex(0);
        setIsSectionAnswered(false);

        // Scroll to the first section
        setTimeout(() => {
            if (sectionRefs.current[0]) {
                sectionRefs.current[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 50);
    };

    /**
     * Called when user clicks "Weiter" in a visible section
     */
    const handleNextSection = () => {
        setIsSectionAnswered(false);

        const nextIndex = currentSectionIndex + 1;
        if (nextIndex < totalSections) {
            // show next section
            setCurrentSectionIndex(nextIndex);

            // scroll to the newly shown section
            setTimeout(() => {
                if (sectionRefs.current[nextIndex]) {
                    sectionRefs.current[nextIndex].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 50);

            // optional callback
            if (onSectionComplete) {
                onSectionComplete(nextIndex);
            }
        } else {
            // If we've reached the last section, do whatever "finish" action you want
            navigate("/grundlagen");
        }
    };

    // Identify the "current" section for quiz gating:
    const currentSection =
        currentSectionIndex >= 0 && currentSectionIndex < sectionsContent.length
            ? sectionsContent[currentSectionIndex]
            : null;

    const hasQuiz = !!currentSection?.quizData;
    // If there's a quiz, disable the "Weiter" button until it's answered
    const isButtonDisabled = hasQuiz && !isSectionAnswered;

    const handleQuizAnswered = () => {
        setIsSectionAnswered(true);
    };

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
                {isIntro && introText && (
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

                {/* SECTIONS (if currentSectionIndex >= 0) */}
                {!isIntro && (
                    <>
                        {sectionsContent.map((section, idx) => {
                            // Show all sections up to currentSectionIndex
                            if (idx > currentSectionIndex) return null;

                            return (
                                <InnerSection
                                    key={`section-${idx}`}
                                    ref={(el) => (sectionRefs.current[idx] = el)}
                                    mt={8}
                                >
                                    <LectureTheorySection
                                        heading={section.heading}
                                        quizData={section.quizData}
                                        onQuizAnswered={handleQuizAnswered}
                                    >
                                        {section.paragraphs}
                                    </LectureTheorySection>
                                </InnerSection>
                            );
                        })}

                        {/* NEXT/FINISH BUTTON */}
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
