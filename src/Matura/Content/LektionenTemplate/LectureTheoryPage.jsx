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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OuterSection = chakra("section", {});
const InnerSection = chakra("section", {});

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

    const totalSections = sectionsContent.length;
    const isLastSection = visibleSectionIndex === totalSections - 1;

    // Klicke auf “Weiter”
    const handleNextSection = () => {
        const nextIndex = visibleSectionIndex + 1;
        setIsSectionAnswered(false);

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
            // Letzter Abschnitt => Abschließen
            navigate("/grundlagen");
        }
    };

    // Die Logik zum Deaktivieren des Buttons
    const currentSection = sectionsContent[visibleSectionIndex];
    const hasQuiz = !!currentSection?.quizData;
    const isButtonDisabled = hasQuiz && !isSectionAnswered;

    const handleQuizAnswered = () => {
        setIsSectionAnswered(true);
    };

    const buttonLabel = isLastSection ? "Lektion abschließen" : "Weiter";

    return (
        <chakra.section bg={bgColor} minH="100vh" py={6}>
            <OuterSection
                maxW={{ base: "95vw", md: "80vw", lg: "50vw" }}
                mx="auto"
                borderRadius="md"
                p={6}
                bg={cardBg}
            >
                <BannerArea bannerImageSrc={bannerImageSrc} bannerImages={bannerImages || []} />

                {headline && (
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
                        {headline}
                    </Text>
                )}

                {introText && (
                    <Text fontSize={{ base: "xl", md: "xl" }} mb={4}>
                        {introText}
                    </Text>
                )}

                {/* Render all sections, but only up to visibleSectionIndex are actually displayed */}
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

                {/* Button */}
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
            </OuterSection>
        </chakra.section>
    );
}

export default LectureTheoryPage;
