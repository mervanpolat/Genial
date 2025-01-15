// File: src/Matura/Content/LektionenTemplate/LectureTheoryPage.jsx
import React, { useState, useRef } from "react";
import {
    chakra,
    Button,
    Image,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LectureTheorySection from "./LectureTheorySection.jsx";

const OuterSection = chakra("section", {});
const InnerSection = chakra("section", {});

function LectureTheoryPage({
                               bannerImageSrc,
                               headline,
                               introText,
                               sectionsContent,
                               onSectionComplete
                           }) {
    const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
    const sectionRefs = useRef([]);
    const navigate = useNavigate();

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    const handleNextSection = () => {
        const nextIndex = visibleSectionIndex + 1;
        if (nextIndex < sectionsContent.length) {
            setVisibleSectionIndex(nextIndex);

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
            // Lecture done => navigate away or do something
            navigate("/grundlagen");
        }
    };

    const isLastSection = visibleSectionIndex === sectionsContent.length - 1;
    const buttonLabel = isLastSection ? "Lektion abschließen" : "Weiter";

    return (
        <chakra.section bg={bgColor} minH="100vh" py={6}>
            <OuterSection
                maxW={{ base: "100vw", md: "100vw", lg: "40vw" }}
                mx="auto"
                borderRadius="md"
                p={6}
                bg={cardBg}
            >
                {/* Banner */}
                {bannerImageSrc && (
                    <Image
                        src={bannerImageSrc}
                        alt="Lecture Banner"
                        width="100%"
                        maxH="600px"
                        objectFit="cover"
                        borderRadius="md"
                        mb={8}
                    />
                )}

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
                        >
                            {section.content}
                        </LectureTheorySection>
                    </InnerSection>
                ))}

                {/* Next or Finish Button */}
                <Button
                    onClick={handleNextSection}
                    mt={6}
                    bg="#30628b"
                    color="white"
                    size={{ base: "md", md: "lg" }}
                    boxShadow="md"
                    _hover={{ bg: "#245074", boxShadow: "lg" }}
                    _active={{ bg: "#1d3f5e" }}
                >
                    {buttonLabel}
                </Button>
            </OuterSection>
        </chakra.section>
    );
}

export default LectureTheoryPage;
