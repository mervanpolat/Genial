// File: src/components/LecturePage/LecturePage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
    chakra,
    Button,
    Image,
    Text,
    useToast,
    useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LectureSection from "./LectureSection";

// Two styled sections
const OuterSection = chakra("section", {});
const InnerSection = chakra("section", {});

const LecturePage = ({
                         bannerImageSrc,
                         headline,
                         introText,
                         sectionsContent,
                         onSectionComplete
                     }) => {
    const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
    const sectionRefs = useRef([]);
    const toast = useToast();
    const navigate = useNavigate();

    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    // Scroll to current visible section
    useEffect(() => {
        if (sectionRefs.current[visibleSectionIndex]) {
            sectionRefs.current[visibleSectionIndex].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [visibleSectionIndex]);

    const handleNextSection = () => {
        // If NOT last section, go to next
        if (visibleSectionIndex < sectionsContent.length - 1) {
            setVisibleSectionIndex((prev) => prev + 1);
            if (onSectionComplete) {
                onSectionComplete(visibleSectionIndex + 1);
            }
        } else {
            // If last section => navigate to /grundlagen
            navigate("/grundlagen");
        }
    };

    // We choose text for the button
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
                <Image
                    src={bannerImageSrc}
                    alt="Lecture Banner"
                    width="100%"
                    maxH="600px"
                    objectFit="cover"
                    borderRadius="md"
                    mb={8}
                />

                {/* Headline */}
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
                    {headline}
                </Text>

                {/* Intro Text */}
                <Text fontSize={{ base: "xl", md: "lg" }} mb={4}>
                    {introText}
                </Text>

                {/* Section Content */}
                {sectionsContent.map((section, idx) => (
                    <InnerSection
                        key={idx}
                        ref={(el) => (sectionRefs.current[idx] = el)}
                        mt={8}
                    >
                        <LectureSection
                            heading={section.heading}
                            isVisible={idx <= visibleSectionIndex}
                        >
                            {section.content}
                        </LectureSection>
                    </InnerSection>
                ))}

                {/* Single button: "Weiter" or "Lektion abschließen" */}
                <Button
                    onClick={handleNextSection}
                    alignSelf="flex-start"
                    mt={6}
                    bg="#30628b"
                    color="white"
                    size={{ base: "md", md: "lg" }}
                    boxShadow="md"
                    _hover={{
                        bg: "#245074",
                        boxShadow: "lg"
                    }}
                    _active={{
                        bg: "#1d3f5e"
                    }}
                >
                    {buttonLabel}
                </Button>
            </OuterSection>
        </chakra.section>
    );
};

export default LecturePage;
