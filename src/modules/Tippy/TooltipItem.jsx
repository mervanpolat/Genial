import 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CubeButton from '/Users/mervan/Desktop/genial/src/components/CubeButton/CubeButton.jsx'; // Import CubeButton
import PropTypes from 'prop-types';


function TooltipItem({ module, onSelect, onCubeClick, itemRef }) {
    return (
        <Tippy
            theme="genial"
            interactive={true}
            trigger="click"
            hideOnClick={false}
            onClickOutside={(instance) => instance.hide()}
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
        >
            <div
                ref={itemRef}
                className="right-item"
                onClick={(e) => onCubeClick(module, e, itemRef)}
            >
                <CubeButton /> {/* CubeButton is included here */}
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
