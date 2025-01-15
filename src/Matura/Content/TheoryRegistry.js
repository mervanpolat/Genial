// File: src/Matura/Content/TheoryRegistry.js

// Import your data object
import GriechischeBuchstabenData from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx";

// Create a mapping from "slug" => data object
const theoryRegistry = {
    griechische: GriechischeBuchstabenData,
    // If you add more, e.g. "lateinische": LateinischeBuchstabenData,
};

export default theoryRegistry;
