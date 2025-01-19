// File: src/Matura/Content/LektionenTemplate/LectureTheoryPage.jsx

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
 * A helper to render either a slider if multiple banner images,
 * a single image if exactly one banner,
 * or nothing if no banner is provided.
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
 * Behavior:
 *  - On initial mount, we scroll the user down so that the navbar is NOT visible.
 *    (We do that by offsetting the top by NAVBAR_HEIGHT or a bit more.)
 *  - Show an "intro" (banner, optional headline, optional introText) plus a "Weiter" button.
 *  - When user clicks "Weiter" => show section 0, then 1, etc., gating each with quizzes if present.
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

    // We'll reference the entire main container to measure offset
    const pageRef = useRef(null);

    // If we want the navbar out of sight => we assume the navbar is ~80 px high.
    // You can tweak this to fit your actual nav size.
    const NAVBAR_HEIGHT = 80;

    // "Intro" gating
    const [introVisible, setIntroVisible] = useState(!!introText);

    // "Section" gating
    const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
    const [isSectionAnswered, setIsSectionAnswered] = useState(false);

    const sectionRefs = useRef([]);

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    const totalSections = sectionsContent.length;
    const isLastSection = visibleSectionIndex === totalSections - 1;

    // Scroll user so the navbar is NOT visible initially
    useEffect(() => {
        if (pageRef.current) {
            // Wait a little so layout is rendered
            setTimeout(() => {
                // We scroll an offset that hides the navbar from view.
                // If your navbar is at top: 0, we add ~80 px
                // You might want to do + NAVBAR_HEIGHT + some margin => e.g. + 10
                const topPosition = pageRef.current.offsetTop + NAVBAR_HEIGHT;

                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth",
                });
            }, 50);
        }
    }, []);

    // User clicks "Weiter" in the intro => show first section
    const handleIntroNext = () => {
        setIntroVisible(false);
        setVisibleSectionIndex(0);
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

    // User clicks "Weiter" in each section => next or done
    const handleNextSection = () => {
        setIsSectionAnswered(false);
        const nextIndex = visibleSectionIndex + 1;
        if (nextIndex < totalSections) {
            setVisibleSectionIndex(nextIndex);
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
            navigate("/grundlagen");
        }
    };

    // Gating if there's a quiz
    const currentSection = sectionsContent[visibleSectionIndex];
    const hasQuiz = !!currentSection?.quizData;
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
                    <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        mb={4}
                    >
                        {headline}
                    </Text>
                )}

                {/* INTRO STAGE */}
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

                {/* SECTION STAGE */}
                {!introVisible && (
                    <>
                        {sectionsContent.map((section, idx) => (
                            <InnerSection
                                key={idx}
                                ref={(el) => (sectionRefs.current[idx] = el)}
                                mt={8}
                            >
                                <LectureTheorySection
                                    heading={section.heading}
                                    isVisible={idx <= visibleSectionIndex}
                                    quizData={section.quizData}
                                    onQuizAnswered={handleQuizAnswered}
                                >
                                    {section.paragraphs}
                                </LectureTheorySection>
                            </InnerSection>
                        ))}

                        {visibleSectionIndex < totalSections && (
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
