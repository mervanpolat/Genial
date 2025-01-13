// src/components/LecturePage/LectureSection.jsx
import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

/**
 * We unify the heading style to match the main headline or slightly smaller,
 * and the paragraph text style to match the intro text fontSize.
 */
const LectureSection = ({ children, heading, imageSrc, isVisible }) => {
    if (!isVisible) return null;

    return (
        <Box as="section" mb={8}>
            {/* Heading (slightly smaller than main page headline,
          but still robust -- or you can match exactly if desired) */}
            {heading && (
                <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    mb={7}
                >
                    {heading}
                </Text>
            )}

            {/* Optional image if the section has one */}
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={heading}
                    mb={7}
                    borderRadius="md"
                    maxH="300px"
                    objectFit="cover"
                />
            )}

            {/* Child content (text or quizzes) with the same font size as intro text */}
            <Text fontSize={{ base: "xl", md: "lg" }}>
                {children}
            </Text>
        </Box>
    );
};

export default LectureSection;
