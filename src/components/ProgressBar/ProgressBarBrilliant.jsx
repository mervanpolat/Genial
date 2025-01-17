// File: src/components/ProgressBar/ProgressBarBrilliant.jsx
import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Box, Flex } from "@chakra-ui/react";

/**
 * ProgressBarBrilliant
 * A horizontal progress bar styled like “Brilliant.org”, with Byrne’s colors.
 *
 * PROPS:
 * - current: number => e.g. current step (1-based)
 * - total: number
 * - lectureTitle: string => displayed in the tippy on hover
 */
export default function ProgressBarBrilliant({
                                                 current = 1,
                                                 total = 1,
                                                 lectureTitle = "Aktuelle Lektion",
                                             }) {
    const fraction = total > 0 ? current / total : 0;
    const percentage = Math.min(1, fraction) * 100;

    // Colors from Oliver Byrne’s palette
    const trackColor = "#e7ddbe"; // lighter beige
    const fillColor = "#30628b";  // Byrne’s Blue

    return (
        <Box w="100%" py={2} px={4} bg="transparent">
            <Tippy
                content={
                    <Box
                        p="8px"
                        bg="#333"
                        color="#faf3dc"
                        borderRadius="8px"
                        boxShadow="0 4px 10px rgba(0,0,0,0.2)"
                        textAlign="center"
                    >
                        {lectureTitle} ({current}/{total})
                    </Box>
                }
                placement="top"
                animation="shift-away"
                arrow={true}
            >
                <Flex
                    position="relative"
                    w="100%"
                    h="10px"
                    bg={trackColor}
                    borderRadius="5px"
                    cursor="pointer"
                >
                    <Box
                        position="absolute"
                        left="0"
                        top="0"
                        h="100%"
                        w={`${percentage}%`}
                        bg={fillColor}
                        borderRadius="5px"
                        transition="width 0.3s ease"
                    />
                </Flex>
            </Tippy>
        </Box>
    );
}

ProgressBarBrilliant.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    lectureTitle: PropTypes.string,
};
