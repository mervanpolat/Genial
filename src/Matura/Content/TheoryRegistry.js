// File: src/Matura/Content/TheoryRegistry.js

// Import your data object
import GriechischeBuchstabenData from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx";
import LateinischeBuchstabenData from "./1_Grundlagen/Lektionen/2_LateinischeBuchstaben/LateinischeBuchstabenData.jsx";
import ZahlenArithmetikData from "./1_Grundlagen/Lektionen/3_ZahlenArithmetik/ZahlenArithmetikData.jsx";
import natZahlenArithData from "./1_Grundlagen/Lektionen/4_NatZahlenArith/NatZahlenArithData.jsx";
import KommutativGesetzData from "./1_Grundlagen/Lektionen/5_Kommutativgesetz/KommutativGesetzData.jsx";
import AssoziativitaetData from "./1_Grundlagen/Lektionen/6_Assoziativgesetz/AssoziativitaetData.jsx";


// Create a mapping from "slug" => data object
const theoryRegistry = {
    griechische: GriechischeBuchstabenData,
    // If you add more, e.g. "lateinische": LateinischeBuchstabenData,
    lateinische: LateinischeBuchstabenData,
    zahlenarith: ZahlenArithmetikData,
    natZahlenArith: natZahlenArithData,
    kommutativg: KommutativGesetzData,
    assoziativitaet: AssoziativitaetData

};

export default theoryRegistry;
