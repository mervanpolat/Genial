// src/theme.js

import { extendTheme } from "@chakra-ui/react";

// Define your custom theme
const theme = extendTheme({
    styles: {
        global: {
            // Apply global styles to the <body> element
            body: {
                bg: "#faf3dc", // Set background color
                color: "#000",  // Set text color
                fontFamily: "'LTCKennerleyPro', serif", // Ensure custom font is applied globally
            },
        },
    },
    fonts: {
        heading: "'Times New Roman', serif", // Apply Times New Roman to headings
        body: "'LTCKennerleyPro', serif",    // Keep the custom font for body
    },
});

export default theme;
