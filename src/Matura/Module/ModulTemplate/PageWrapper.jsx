// File: src/Matura/Module/ModulTemplate/PageWrapper.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import './PageWrapper.css'; // Import your custom CSS

function PageWrapper({
                         title,
                         headline,
                         description,
                         imageSrc,
                         exercises,
                         units,
                         moduleData
                     }) {
    // Define a repeating pattern for columns: 1 → 2 → 3 → 1 → 2 → 3 ...
    const columnPattern = [1, 2, 3];

    return (
        <Box className="template-page" p="20px">
            <Flex
                className="gleichungen-container"
                direction={{ base: 'column', md: 'row' }}
                gap="20px"
            >
                {/* LEFT SECTION */}
                <Box className="left-section" flex="1">
                    <Image
                        src={imageSrc}
                        alt={title}
                        className="subject-icon"
                        boxSize="100px"
                        mb="10px"
                    />
                    <Heading as="h1" size="xl" mb="10px">
                        {headline}
                    </Heading>
                    <Text fontSize="lg" mb="20px">
                        {description}
                    </Text>

                    <Flex className="exercise-units" gap="20px">
                        <Flex className="exercise-unit" direction="column" align="center">
                            <Image src="" alt="Übung" boxSize="40px" mb="5px" />
                            <Heading as="h1" size="lg">
                                {exercises}
                            </Heading>
                        </Flex>
                        <Flex className="exercise-unit" direction="column" align="center">
                            <Image src="" alt="Einheit" boxSize="40px" mb="5px" />
                            <Heading as="h1" size="lg">
                                {units}
                            </Heading>
                        </Flex>
                    </Flex>
                </Box>

                {/* RIGHT SECTION (Puzzle Layout in a 3-Column Grid) */}
                <Box className="right-section" flex="1">
                    {moduleData.map((module, index) => {
                        // Calculate which row and column this item should occupy
                        const row = index + 1; // e.g. item #1 is in row 1, #2 is row 2, etc.
                        const col = columnPattern[index % columnPattern.length];
                        // cycles 1,2,3,1,2,3,...

                        return (
                            <Box
                                key={module.id}
                                className="right-item"
                                p="10px"
                                borderBottom="1px solid #ddd"
                                // Inline style to position each item in the puzzle grid
                                style={{
                                    gridRow: row,
                                    gridColumn: col
                                }}
                            >
                                <Text fontSize="md">{module.title}</Text>
                            </Box>
                        );
                    })}
                </Box>
            </Flex>
        </Box>
    );
}

// PropTypes for clarity
PageWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
    moduleData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default PageWrapper;
