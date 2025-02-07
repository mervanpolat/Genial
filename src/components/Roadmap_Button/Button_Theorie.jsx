// File: src/components/Button_Theorie/Button_Theorie.jsx

import React from 'react';

function Button_Theorie({ size = 60 }) {
  return (
      <svg
          style={{ width: size, height: size }}
          id="cube-button"
          className="cube-button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 247.49 223.24"
      >
        <style>
          {`
          #cube-button {
            cursor: pointer;
          }
          #top-side {
            fill: #565656;
          }
          #right-side {
            fill: #000000;
          }
          #left-side {
            fill: #333333;
          }
          #cube-button:hover #top-side {
            fill: #777777;
          }
          #cube-button:hover #right-side {
            fill: #353535;
          }
          #cube-button:hover #left-side {
            fill: #545454;
          }
          #cube-button:active #top-side,
          #cube-button:active #left-side,
          #cube-button:active #right-side {
            transform: translateY(50px);
          }
          #cube-button:active #left-side,
          #cube-button:active #right-side {
            opacity: 0;
          }
        `}
        </style>

        <polygon
            id="top-side"
            points="123.74 173.24 0 86.62 123.74 0 247.49 86.62 123.74 173.24"
        />
        <polygon
            id="right-side"
            points="247.49 86.62 247.49 136.62 123.74 223.24 123.74 173.24 247.49 86.62"
        />
        <polygon
            id="left-side"
            points="0 86.62 123.74 173.24 123.74 223.24 0 136.62 0 86.62"
        />
      </svg>
  );
}

export default Button_Theorie;
