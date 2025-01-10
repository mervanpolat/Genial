// src/components/WelcomeIntro/OptionItem.jsx
import React from 'react';
import { HStack, Icon, Text, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const OptionItem = ({ icon: IconComponent, label, isSelected, onSelect, ariaLabel }) => (
    <Box
        w="100%"
        p={4}
        borderRadius="md"
        border="2px solid"
        borderColor={isSelected ? 'teal.500' : 'gray.200'}
        bg={isSelected ? 'teal.50' : 'white'}
        cursor="pointer"
        onClick={onSelect}
        _hover={{ borderColor: 'teal.500', bg: 'teal.50' }}
        role="button"
        aria-label={ariaLabel || label}
        tabIndex={0}
        onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                onSelect();
            }
        }}
    >
        <HStack spacing={4}>
            {IconComponent && <Icon as={IconComponent} boxSize={6} color="teal.500" />}
            <Text fontSize="lg">{label}</Text>
        </HStack>
    </Box>
);

OptionItem.propTypes = {
    icon: PropTypes.elementType,
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    ariaLabel: PropTypes.string,
};

OptionItem.defaultProps = {
    icon: null,
    isSelected: false,
    onSelect: () => {},
    ariaLabel: '',
};

export default OptionItem;
