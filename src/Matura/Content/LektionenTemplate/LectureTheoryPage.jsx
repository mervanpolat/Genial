// File: src/Matura/Content/LektionenTemplate/LectureTheoryPage.jsx

import React, { useState, useRef } from "react";
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

// For multiple-banner support
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OuterSection = chakra("section", {});
const InnerSection = chakra("section", {});

/**
 * A small helper to render either:
 *  - a single static image (if there's exactly 1),
 *  - or a swipeable carousel (if there's 2+).
 */
function BannerArea({ bannerImageSrc, bannerImages = [] }) {
    // If bannerImages has 2 or more => show carousel
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

    // If bannerImages has exactly 1 => single static image
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

    // If only bannerImageSrc is provided => single static image
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

    // Otherwise => no banner
    return null;
}

function LectureTheoryPage({
                               bannerImageSrc,
                               bannerImages,
                               headline,
                               introText,
                               sectionsContent,
                               onSectionComplete,
                           }) {
    const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
    const [isSectionAnswered, setIsSectionAnswered] = useState(false);
    const sectionRefs = useRef([]);
    const navigate = useNavigate();

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    // Next section logic
    const handleNextSection = () => {
        const nextIndex = visibleSectionIndex + 1;
        setIsSectionAnswered(false);

        if (nextIndex < sectionsContent.length) {
            setVisibleSectionIndex(nextIndex);

            // Smooth scroll to the next section
            setTimeout(() => {
                if (sectionRefs.current[nextIndex]) {
                    sectionRefs.current[nextIndex].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 50);

            if (onSectionComplete) {
                onSectionComplete(nextIndex);
            }
        } else {
            // If we're at the end => navigate away or show completion
            navigate("/grundlagen");
        }
    };

    const isLastSection = visibleSectionIndex === sectionsContent.length - 1;
    const buttonLabel = isLastSection ? "Lektion abschließen" : "Weiter";

    // Check the quiz in the current section
    const currentSection = sectionsContent[visibleSectionIndex] || {};
    const hasQuiz = !!currentSection.quizData;
    const isButtonDisabled = hasQuiz && !isSectionAnswered;

    // Once user answers => enable "Weiter" button
    const handleQuizAnswered = () => {
        setIsSectionAnswered(true);
    };

    return (
        <chakra.section bg={bgColor} minH="100vh" py={6}>
            <OuterSection
                maxW={{ base: "100vw", md: "100vw", lg: "40vw" }}
                mx="auto"
                borderRadius="md"
                p={6}
                bg={cardBg}
            >
                {/* Banner (single or multiple images) */}
                <BannerArea
                    bannerImageSrc={bannerImageSrc}
                    bannerImages={bannerImages || []}
                />

                {/* Headline */}
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
                    {headline}
                </Text>

                {/* Intro Text */}
                <Text fontSize={{ base: "xl", md: "lg" }} mb={4}>
                    {introText}
                </Text>

                {/* Sections */}
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
                            {section.paragraphs || section.content}
                        </LectureTheorySection>
                    </InnerSection>
                ))}

                {/* Next/Weiter Button */}
                <Button
                    onClick={handleNextSection}
                    alignSelf="flex-start"
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
            </OuterSection>
        </chakra.section>
    );
}

export default LectureTheoryPage;
