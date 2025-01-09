import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CubeButton from "../../components/CubeButton/CubeButton.jsx";
import PropTypes from 'prop-types';

function TooltipItem({ module, onSelect, onCubeClick, itemRef }) {
    const tippyRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // State to track hover

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
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '26px', color: '#faf3dc', margin: '10px' }}>
                        {module.headline}
                    </h2>
                    <p style={{ fontSize: '22px', color: '#faf3dc', marginBottom: '30px' }}>
                        {module.description}
                    </p>

                    {/* Button with hover effect */}
                    <button
                        style={{
                            fontSize: '18px',
                            color: isHovered ? 'black' : 'white', // Change text color on hover
                            backgroundColor: isHovered ? '#faf3dc' : '#333', // Change background color on hover
                            padding: '9px 80px',
                            borderRadius: '100px',
                            border: '2px solid #faf3dc',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease', // Smooth transition effect
                            marginBottom: '15px',
                        }}
                        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                        onClick={() => onSelect(module)}
                    >
                        AUSWÄHLEN
                    </button>
                </div>
            }
            onCreate={(instance) => {
                tippyRef.current = instance;
            }}
        >
            <div ref={itemRef} className="right-item">
                <div className="cube-button-wrapper" onClick={handleCubeClick}>
                    <CubeButton />
                </div>
                <p>{module.title}</p>
            </div>
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
