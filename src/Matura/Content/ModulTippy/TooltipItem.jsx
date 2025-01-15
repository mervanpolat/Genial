// File: src/Matura/Content/ModulTippy/TooltipItem.jsx
import { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import CubeButton from "../../../components/CubeButton/CubeButton.jsx";
import CubePraxis from "../../../components/CubeButton/CubePraxis.jsx";

function TooltipItem({ module, onSelect, onCubeClick, itemRef }) {
    const tippyRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleWheel = () => {
            if (tippyRef.current) {
                tippyRef.current.hide();
                setIsVisible(false);
            }
        };
        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
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
        setLoading(true);
        onSelect(module); // calls handleAuswaehlen => navigate(module.route)
        setTimeout(() => setLoading(false), 1000);
    };

    const isEvenID = module.id % 2 === 0;
    const CubeToRender = isEvenID ? CubePraxis : CubeButton;

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
        route: PropTypes.string, // added route
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onCubeClick: PropTypes.func.isRequired,
    itemRef: PropTypes.object.isRequired,
};

export default TooltipItem;
