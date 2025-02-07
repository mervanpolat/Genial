// File: src/components/Button_Theorie/Button_Praxis.jsx

import React from "react";

function Button_Praxis({ size }) {
    return (
        <svg
            style={{ width: size, height: size }}
            id="cube-praxis"
            className="cube-button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 247.49 223.24"
        >
            <style>
                {`
          #cube-praxis {
            cursor: pointer;
          }
          #praxis-top {
            fill: #565656;
          }
          #praxis-right {
            fill: #000000;
          }
          #praxis-left {
            fill: #333333;
          }
          #praxis-icon {
            fill: #f0c34e;
          }

          #cube-praxis:hover #praxis-top {
            fill: #777777;
          }
          #cube-praxis:hover #praxis-right {
            fill: #353535;
          }
          #cube-praxis:hover #praxis-left {
            fill: #545454;
          }

          #cube-praxis:active #praxis-top,
          #cube-praxis:active #praxis-left,
          #cube-praxis:active #praxis-right,
          #cube-praxis:active #praxis-icon {
            transform: translateY(50px);
          }
          #cube-praxis:active #praxis-left,
          #cube-praxis:active #praxis-right {
            opacity: 0;
          }
        `}
            </style>

            <polygon
                id="praxis-top"
                points="123.74 173.24 0 86.62 123.74 0 247.49 86.62 123.74 173.24"
            />
            <polygon
                id="praxis-right"
                points="247.49 86.62 247.49 136.62 123.74 223.24 123.74 173.24 247.49 86.62"
            />
            <polygon
                id="praxis-left"
                points="0 86.62 123.74 173.24 123.74 223.24 0 136.62 0 86.62"
            />
            <path
                id="praxis-icon"
                d="m165.24,68.52c-6.81,15.01-20.85,45.87-27.71,60.97-.97,2.12-3.33,3.1-5.43,2.46l-29.04-20.27c-.91-.77-30.27-21.33-32.3-22.87-3.22-2.28-2.19-7.31,1.67-8.12,21.89-4.6,65.9-13.88,87.77-18.48,3.6-.77,6.58,2.89,5.05,6.3Z"
            />
        </svg>
    );
}

export default Button_Praxis;
