// File: src/Matura/Content/TheoryRegistry.js

// Import your data object
import GriechischeBuchstabenData from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx";
import LateinischeBuchstabenData from "./1_Grundlagen/Lektionen/2_LateinischeBuchstaben/LateinischeBuchstabenData.jsx";
import ZahlenArithmetikData from "./1_Grundlagen/Lektionen/3_ZahlenArithmetik/ZahlenArithmetikData.jsx";



// Create a mapping from "slug" => data object
const theoryRegistry = {
    griechische: GriechischeBuchstabenData,
    // If you add more, e.g. "lateinische": LateinischeBuchstabenData,
    lateinische: LateinischeBuchstabenData,
    zahlenarith: ZahlenArithmetikData,

};

export default theoryRegistry;
