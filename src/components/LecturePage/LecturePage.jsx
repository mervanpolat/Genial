// src/components/LecturePage/LecturePage.jsx

import React, { useState, useRef, useEffect } from "react";
import {
    chakra,
    Button,
    Image,
    Text,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import LectureSection from "./LectureSection";

// We'll create two styled "section" components via Chakra:
const OuterSection = chakra("section", {
    baseStyle: {
        // default styling can go here if needed
    },
});

const InnerSection = chakra("section", {
    baseStyle: {
        // default styling for each repeated section
    },
});

const LecturePage = ({
                         bannerImageSrc,
                         headline,
                         introText,
                         sectionsContent,
                         onSectionComplete,
                     }) => {
    const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
    const sectionRefs = useRef([]);
    const toast = useToast();

    // For now, same color in light/dark mode
    const bgColor = useColorModeValue("#faf3dc", "#faf3dc");
    const cardBg = useColorModeValue("#faf3dc", "#faf3dc");

    useEffect(() => {
        if (sectionRefs.current[visibleSectionIndex]) {
            sectionRefs.current[visibleSectionIndex].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [visibleSectionIndex]);

    const handleNextSection = () => {
        if (visibleSectionIndex < sectionsContent.length - 1) {
            setVisibleSectionIndex((prev) => prev + 1);

            if (onSectionComplete) {
                onSectionComplete(visibleSectionIndex + 1);
            }
        } else {
            toast({
                title: "Lecture Complete",
                description: "Du hast alle Inhalte abgeschlossen!",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        // Outer background area
        <chakra.section bg={bgColor} minH="100vh" py={6}>
            {/* Outer "card" area replaced with a <section> instead of Container */}
            <OuterSection
                maxW={{ base: "100vw", md: "100vw", lg: "40vw" }}
                mx="auto"              // center horizontally (like Container does)
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

                {/* Sections Loop */}
                {sectionsContent.map((section, idx) => (
                    // Replacing <Box> with an <InnerSection>
                    <InnerSection
                        key={idx}
                        ref={(el) => (sectionRefs.current[idx] = el)}
                        mt={8}
                    >
                        <LectureSection
                            heading={section.heading}
                            imageSrc={section.imageSrc}
                            isVisible={idx <= visibleSectionIndex}
                        >
                            {section.content}
                        </LectureSection>
                    </InnerSection>
                ))}

                {/* "Weiter" Button */}
                <Button
                    onClick={handleNextSection}
                    alignSelf="flex-start"
                    mt={6}
                    bg="#30628b" // Background color
                    color="white" // Text color
                    size={{ base: "md", md: "lg" }}
                    boxShadow="md"
                    _hover={{
                        bg: "#245074", // Slightly darker shade of #30628b for hover
                        boxShadow: "lg",
                    }}
                    _active={{
                        bg: "#1d3f5e", // Even darker shade for active state
                    }}
                >
                    Weiter
                </Button>

            </OuterSection>
        </chakra.section>
    );
};

export default LecturePage;
