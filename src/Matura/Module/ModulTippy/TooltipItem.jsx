// File: src/Matura/Module/ModulTippy/TooltipItem.jsx

import { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

// Import your two cube variants
import Button_Theorie from "../../../components/Roadmap_Button/Button_Theorie.jsx";
import Button_Praxis from "../../../components/Roadmap_Button/Button_Praxis.jsx";

function TooltipItem({ module, onSelect, onCubeClick, itemRef }) {
    const tippyRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(false);

    // We'll store the timeout ID here so we can clear it if needed
    const timeoutIdRef = useRef(null);

    // Adjust this if you want more/less delay
    const scrollDelay = 350;

    useEffect(() => {
        const handleWheel = () => {
            // If user scrolls, hide the tooltip
            if (tippyRef.current) {
                tippyRef.current.hide();
                setIsVisible(false);
            }
            // Also clear any pending timeouts
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
                timeoutIdRef.current = null;
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => {
            window.removeEventListener("wheel", handleWheel);
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    const handleCubeClick = (e) => {
        // This triggers your parent logic, e.g. itemRef.current.scrollIntoView(...)
        onCubeClick(module, e, itemRef);

        // If tooltip is currently visible, we hide it
        if (isVisible && tippyRef.current) {
            tippyRef.current.hide();
            setIsVisible(false);
        } else if (tippyRef.current) {
            // Otherwise, wait a short delay before showing
            timeoutIdRef.current = setTimeout(() => {
                // Safety check: if user hasn't scrolled in the meantime
                tippyRef.current.show();
                setIsVisible(true);
                timeoutIdRef.current = null;
            }, scrollDelay);
        }
    };

    const handleSelectClick = () => {
        setLoading(true);
        onSelect(module); // calls e.g. handleAuswaehlen => navigate(module.route)
        // Simulate loading
        setTimeout(() => setLoading(false), 1000);
    };

    // Even ID => Button_Praxis, else => Button_Theorie
    const isEvenID = module.id % 2 === 0;
    const CubeToRender = isEvenID ? Button_Praxis : Button_Theorie;

    return (
        <Tippy
            theme="genial"
            interactive
            trigger="manual"
            visible={isVisible}
            hideOnClick={false}
            onClickOutside={(instance) => {
                instance.hide();
                setIsVisible(false);
            }}
            arrow
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
                    <Button
                        fontSize="18px"
                        color={isHovered ? "black" : "#faf3dc"}
                        bg={isHovered ? "#faf3dc" : "#333"}
                        _hover={{ bg: "#faf3dc", color: "black" }}
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
                        isLoading={loading}
                        loadingText="AUSWÄHLEN..."
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
                    <CubeToRender />
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
        route: PropTypes.string, // optional if you want to store the route
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onCubeClick: PropTypes.func.isRequired,
    itemRef: PropTypes.object.isRequired,
};

export default TooltipItem;
