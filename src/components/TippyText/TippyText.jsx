// src/components/TippyText/TippyText.jsx
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TippyText = ({ children, content }) => {
    return (
        <Tippy content={content}>
      <span
          style={{
              marginLeft: "4px",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
          }}
      >
        {children}
      </span>
        </Tippy>
    );
};

export default TippyText;
