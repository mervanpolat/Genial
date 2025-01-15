import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import CubeButton from "../../../components/CubeButton/CubeButton.jsx";
import PropTypes from 'prop-types';

function TooltipItem({ module, onSelect, onCubeClick, itemRef }) {
    const tippyRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        const handleWheel = () => {
            if (tippyRef.current) {
                tippyRef.current.hide();
                setIsVisible(false);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleCubeClick = (e) => {
        onCubeClick(module, e, itemRef);

        if (tippyRef.current) {
            if (isVisible) {
                tippyRef.current.hide();
                setIsVisible(false);
            } else {
                tippyRef.current.show();
                setIsVisible(true);
            }
        }
    };

    const handleSelectClick = () => {
        setLoading(true);      // Start loading
        onSelect(module);      // Call the provided onSelect function

        // Simulate completion (remove this if onSelect handles async logic)
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <Tippy
            theme="genial"
            interactive={true}
            trigger="manual"
            visible={isVisible}
            hideOnClick={false}
            onClickOutside={(instance) => {
                instance.hide();
                setIsVisible(false);
            }}
            arrow={true}
            placement="bottom"
            offset={[0, 1]}
            animation="appleish"
            content={
                <Box textAlign="center">
                    <Heading fontSize="26px" color="#faf3dc" mb="2" mt="2">
                        {module.headline}
                    </Heading>
                    <Text fontSize="22px" color="#faf3dc" mb="6">
                        {module.description}
                    </Text>

                    {/* Button with loading state */}
                    <Button
                        fontSize="18px"
                        color={isHovered ? 'black' : '#faf3dc'}
                        bg={isHovered ? '#faf3dc' : '#333'}
                        _hover={{ bg: '#faf3dc', color: 'black' }}
                        px="12"
                        py="2"
                        borderRadius="100px"
                        border="2px solid #faf3dc"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        mb="4"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleSelectClick}
                        isLoading={loading}           // Apply loading state
                        loadingText="AUSWÄHLEN..."    // Text displayed while loading
                    >
                        AUSWÄHLEN
                    </Button>
                </Box>
            }
            onCreate={(instance) => {
                tippyRef.current = instance;
            }}
        >
            <Box ref={itemRef} className="right-item">
                <Box className="cube-button-wrapper" onClick={handleCubeClick}>
                    <CubeButton />
                </Box>
                <Text>{module.title}</Text>
            </Box>
        </Tippy>
    );
}

TooltipItem.propTypes = {
    module: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onCubeClick: PropTypes.func.isRequired,
    itemRef: PropTypes.object.isRequired,
};

export default TooltipItem;
