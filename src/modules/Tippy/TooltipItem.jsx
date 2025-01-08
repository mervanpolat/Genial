import  { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CubeButton from "../../components/CubeButton/CubeButton.jsx";
import PropTypes from 'prop-types';

function TooltipItem({ module, onSelect, onCubeClick, itemRef }) {
    const tippyRef = useRef(null); // Ref to control the Tippy instance
    const [isVisible, setIsVisible] = useState(false); // State to manage Tippy visibility

    useEffect(() => {
        const handleWheel = () => {
            if (tippyRef.current) {
                tippyRef.current.hide();
                setIsVisible(false); // Update visibility state when hiding
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleCubeClick = (e) => {
        onCubeClick(module, e, itemRef); // Call the original click handler

        if (tippyRef.current) {
            if (isVisible) {
                tippyRef.current.hide(); // Hide if currently visible
                setIsVisible(false);
            } else {
                tippyRef.current.show(); // Show if currently hidden
                setIsVisible(true);
            }
        }
    };

    return (
        <Tippy
            theme="genial"
            interactive={true}
            trigger="manual" // Use manual trigger to control visibility with state
            visible={isVisible}
            hideOnClick={false}
            onClickOutside={(instance) => {
                instance.hide();
                setIsVisible(false); // Update visibility state when clicking outside
            }}
            arrow={true}
            placement="bottom"
            offset={[0, 1]}
            animation="appleish"
            content={
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ margin: 0, marginBottom: '1px' }}>{module.headline}</h2>
                    <p style={{ margin: 0 }}>{module.description}</p>
                    <button className="btn-auswaehlen" onClick={() => onSelect(module)}>
                        Auswählen
                    </button>
                </div>
            }
            onCreate={(instance) => {
                tippyRef.current = instance; // Store the Tippy instance
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
