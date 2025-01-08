// src/theme.js

import { extendTheme } from "@chakra-ui/react";

// Define your custom theme
const theme = extendTheme({
    styles: {
        global: {
            // Apply styles to the <body> element
            body: {
                bg: "#faf3dc", // Set background color
                color: "#000",  // Set text color
                fontFamily: "'LTCKennerleyPro', serif", // Ensure custom font is applied
            },
        },
    },
});

export default theme;
