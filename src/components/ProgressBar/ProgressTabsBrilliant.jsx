// File: src/components/ProgressBar/ProgressTabsBrilliant.jsx
import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

/**
 * ProgressTabsBrilliant
 * - A row of subtopic “tabs” with left/right arrows to navigate
 * - On hover, a tippy is displayed
 *
 * PROPS:
 * - subtopics: array => e.g. [{ title: "Sub1", isComplete: bool }, ...]
 * - currentIndex: number => which subtopic is active
 * - onChangeIndex: (idx) => callback
 */
export default function ProgressTabsBrilliant({
                                                  subtopics = [],
                                                  currentIndex = 0,
                                                  onChangeIndex = () => {},
                                              }) {
    const handlePrev = () => {
        if (currentIndex > 0) onChangeIndex(currentIndex - 1);
    };
    const handleNext = () => {
        if (currentIndex < subtopics.length - 1) onChangeIndex(currentIndex + 1);
    };

    // By default, use Byrne’s palette
    return (
        <Box w="100%" bg="#faf3dc" p={4}>
            <Flex align="center" justify="space-between">
                <IconButton
                    icon={<ChevronLeftIcon />}
                    aria-label="Previous subtopic"
                    onClick={handlePrev}
                    isDisabled={currentIndex === 0}
                    variant="ghost"
                />
                <Flex overflowX="auto" mx={2} flex="1" justify="center">
                    {subtopics.map((sub, idx) => {
                        const isActive = idx === currentIndex;
                        return (
                            <Tippy
                                key={idx}
                                content={
                                    <Box
                                        p="8px"
                                        bg="#333"
                                        color="#faf3dc"
                                        borderRadius="8px"
                                        boxShadow="0 4px 10px rgba(0,0,0,0.2)"
                                    >
                                        {sub.title}
                                    </Box>
                                }
                                arrow={true}
                                placement="top"
                            >
                                <Box
                                    minW="120px"
                                    mx={1}
                                    p={2}
                                    textAlign="center"
                                    borderRadius="5px"
                                    bg={isActive ? "#30628b" : "#e7ddbe"}
                                    color={isActive ? "#fff" : "#333"}
                                    cursor="pointer"
                                    onClick={() => onChangeIndex(idx)}
                                    _hover={{ opacity: 0.9 }}
                                    transition="all 0.2s"
                                >
                                    <Text fontSize="md" fontWeight={isActive ? "bold" : "normal"}>
                                        {sub.title}
                                    </Text>
                                </Box>
                            </Tippy>
                        );
                    })}
                </Flex>
                <IconButton
                    icon={<ChevronRightIcon />}
                    aria-label="Next subtopic"
                    onClick={handleNext}
                    isDisabled={currentIndex === subtopics.length - 1}
                    variant="ghost"
                />
            </Flex>
        </Box>
    );
}

ProgressTabsBrilliant.propTypes = {
    subtopics: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            isComplete: PropTypes.bool,
        })
    ).isRequired,
    currentIndex: PropTypes.number,
    onChangeIndex: PropTypes.func,
};
