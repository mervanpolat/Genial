// src/components/WelcomeIntro/OptionItem.jsx
import React from 'react';
import { HStack, Text, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function OptionItem({
                        // Default parameters if you want them optional
                        emoji,
                        label,
                        isSelected = false,
                        onSelect = () => {},
                        ariaLabel = '',
                    }) {
    return (
        <Box
            as="button"
            w="100%"
            maxW={{ base: '100%', md: '600px' }}
            p={4}
            borderRadius="md"
            border="2px solid"
            borderColor={isSelected ? 'black' : 'blackAlpha.200'}
            bg={isSelected ? 'black' : '#faf3dc'}
            color={isSelected ? 'white' : 'black'}
            cursor="pointer"
            onClick={onSelect}
            _hover={{
                bg: isSelected ? 'black' : 'rgba(0, 0, 0, 0.1)',
                borderColor: 'black',
                boxShadow: 'md',
                transform: 'scale(1.02)',
            }}
            _active={{
                transform: 'scale(0.98)',
            }}
            transition="background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease"
            role="button"
            aria-label={ariaLabel || label}
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onSelect();
                }
            }}
            margin="auto"
        >
            <HStack spacing={4}>
                {/* Render emoji only if provided */}
                {emoji && (
                    <Text fontSize="2xl" as="span" role="img" aria-hidden="true">
                        {emoji}
                    </Text>
                )}
                <Text
                    fontSize="lg"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    textAlign="left"
                >
                    {label}
                </Text>
            </HStack>
        </Box>
    );
}

OptionItem.propTypes = {
    emoji: PropTypes.string,
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    ariaLabel: PropTypes.string,
};

export default OptionItem;
