// File: src/components/TippyText/TippyText.jsx

import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

/**
 * TippyText
 * Renders text in Byrne’s Blue (#30628b) with a non-animated blue underline (#30628b).
 * Tooltip also has #30628b background and #faf3dc text.
 */
const TippyText = ({ children, content }) => {
    return (
        <>
            <style>{`
        /* Trigger text */
        .tippy-solid-blue {
          color: #30628b; /* Byrne’s Blue for the text */
          text-decoration: none;
          position: relative;
        }

        /* Solid, non-animated blue underline */
        .tippy-solid-blue::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px; /* thickness of the underline */
          background-color: #30628b;
        }

        /* Custom Tippy theme: solid-blue */
        .tippy-box[data-theme~='solid-blue'] {
          background-color: #30628b; /* Tooltip background in Byrne’s Blue */
          color: #faf3dc;           /* Text in Byrne’s Beige */
          padding: 10px 10px;
          border-radius: 10px;
          max-width: 250px;
          text-align: center;
          font-size: 1.1rem;          /* Increase the font size */
        }

        /* Ensures the arrow uses Byrne’s Blue */
        .tippy-box[data-theme~='solid-blue'] .tippy-arrow {
          color: #30628b;
        }
      `}</style>

            <Tippy
                // Use our custom theme to style both the tooltip and the arrow
                theme="solid-blue"
                content={content}
                arrow={true}
                animation="shift-away"
            >
                <span className="tippy-solid-blue">{children}</span>
            </Tippy>
        </>
    );
};

TippyText.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};

export default TippyText;
