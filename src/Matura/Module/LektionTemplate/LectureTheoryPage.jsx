import React, { useRef, useEffect, useState } from "react";
import {
    chakra,
    Button,
    Image,
    Text,
    Box,
    useColorModeValue,
} from "@chakra-ui/react";
import LectureTheorySection from "./LectureTheorySection.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const OuterSection = chakra("section", {});
const InnerSection = chakra("section", {});

/** Renders a single banner image or a slider of multiple banner images. */
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
 * Instead of an explicit “intro” state, we assume the FIRST item of sectionsContent
 * might be your intro. Then we only show sections up to currentSectionIndex.
 */
function LectureTheoryPage({
                               bannerImageSrc,
                               bannerImages,
                               headline,
                               introText, // optional
                               sectionsContent,
                               onSectionComplete,
                           }) {
    const navigate = useNavigate();
    const pageRef = useRef(null);
    const sectionRefs = useRef([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [isSectionAnswered, setIsSectionAnswered] = useState(false);

    const totalSections = sectionsContent.length;
    const isLastSection = currentSectionIndex === totalSections - 1;

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    // create refs for each section so we can scroll to them
    sectionRefs.current = sectionsContent.map(
        (_, i) => sectionRefs.current[i] ?? React.createRef()
    );

    useEffect(() => {
        if (pageRef.current) {
            // optional scroll on mount
            window.scrollTo({ top: pageRef.current.offsetTop, behavior: "smooth" });
        }
    }, []);

    const handleQuizAnswered = () => {
        setIsSectionAnswered(true);
    };

    const handleNextSection = () => {
        setIsSectionAnswered(false);

        const nextIndex = currentSectionIndex + 1;
        if (nextIndex < totalSections) {
            setCurrentSectionIndex(nextIndex);

            // optional: scroll to that next section
            setTimeout(() => {
                if (sectionRefs.current[nextIndex]?.current) {
                    sectionRefs.current[nextIndex].current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 50);

            if (onSectionComplete) {
                onSectionComplete(nextIndex);
            }
        } else {
            // If we are on the last section, do "finish" logic
            navigate("/grundlagen"); // or whichever route you want
        }
    };

    const buttonLabel = isLastSection ? "Lektion abschließen" : "Weiter";
    const isButtonDisabled = false;
    // if you want gating by quiz, set isButtonDisabled = has quiz & !answered
    // or do that logic per-section.

    // If you want each section to require the quiz to be answered, do something like:
    // const currentSection = sectionsContent[currentSectionIndex];
    // const hasQuiz = !!currentSection?.quizData;
    // const isButtonDisabled = hasQuiz && !isSectionAnswered;

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

                {/* If you still want an extra intro text on top (not in the sections) */}
                {introText && (
                    <Box mb={6}>
                        <Text fontSize={{ base: "xl", md: "xl" }}>{introText}</Text>
                    </Box>
                )}

                {/* RENDER SECTIONS up to currentSectionIndex */}
                {sectionsContent.map((section, idx) => {
                    if (idx > currentSectionIndex) return null; // not unlocked yet
                    return (
                        <InnerSection
                            key={idx}
                            ref={sectionRefs.current[idx]}
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
            </OuterSection>
        </chakra.section>
    );
}

export default LectureTheoryPage;
