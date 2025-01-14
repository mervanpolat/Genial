// File: src/components/LecturePage/LectureSection.jsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const LectureSection = ({ children, heading, isVisible }) => {
    if (!isVisible) return null;

    return (
        <Box as="section" mb={8}>
            {heading && (
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={7}>
                    {heading}
                </Text>
            )}
            <Box>{children}</Box>
        </Box>
    );
};

export default LectureSection;
