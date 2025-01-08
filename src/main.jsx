// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import theme from './theme'; // Import the custom theme
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider theme={theme}> {/* Pass the custom theme */}
            <App />
        </ChakraProvider>
    </StrictMode>,
);
