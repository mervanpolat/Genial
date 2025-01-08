import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensure .mjs files can be resolved
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  optimizeDeps: {
    include: [
      "@chakra-ui/react",  // Pre-bundling Chakra UI for optimization
      "framer-motion",     // Pre-bundling Framer Motion to avoid runtime issues
    ],
  },
  build: {
    // Handle potential build issues with certain libraries
    commonjsOptions: {
      include: [/node_modules/], // Ensure dependencies in node_modules are processed
    },
  },
});
