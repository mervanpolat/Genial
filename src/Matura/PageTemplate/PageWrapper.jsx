import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import './PageWrapper.css'; // Keeping the CSS file as requested for any custom styles

function PageWrapper({ title, headline, description, imageSrc, exercises, units, moduleData }) {
    return (
        <Box className="template-page" p="20px">
            <Flex
                className="gleichungen-container"
                direction={{ base: 'column', md: 'row' }}
                gap="20px"
            >
                {/* Left Section */}
                <Box className="left-section" flex="1">
                    <Image src={imageSrc} alt={title} className="subject-icon" boxSize="100px" mb="10px" />
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

                {/* Right Section */}
                <Box className="right-section" flex="1">
                    {moduleData.map((module) => (
                        <Box key={module.id} className="right-item" p="10px" borderBottom="1px solid #ddd">
                            <Text fontSize="md">{module.title}</Text>
                        </Box>
                    ))}
                </Box>
            </Flex>
        </Box>
    );
}

// PropTypes definition
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
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default PageWrapper;
