// File: src/Matura/Module/TheoryRegistry.js

// Import your data object
import GriechischeBuchstabenData from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx";
import LateinischeBuchstabenData from "./1_Grundlagen/Lektionen/2_LateinischeBuchstaben/LateinischeBuchstabenData.jsx";
import ZahlenmengenData from "./1_Grundlagen/Lektionen/3_Zahlenmengen/ZahlenmengenData.jsx";
import natZahlenArithData from "./1_Grundlagen/Lektionen/4_NatZahlenArith/NatZahlenArithData.jsx";
import KommutativGesetzData from "./1_Grundlagen/Lektionen/5_Kommutativgesetz/KommutativGesetzData.jsx";
import AssoziativitaetData from "./1_Grundlagen/Lektionen/6_Assoziativgesetz/AssoziativitaetData.jsx";
import DistributivData from "./1_Grundlagen/Lektionen/7_Distributivgesetz/DistributivData.jsx";
import PrimzahlUndTeilbarkeitData from "./1_Grundlagen/Lektionen/8_PrimzahlUndTeilbarkeit/PrimzahlUndTeilbarkeitData.jsx";
import PrimfaktorenzerlegungData from "./1_Grundlagen/Lektionen/9_Primfaktorenzerlegung/PrimfaktorenzerlegungData.jsx";

// Create a mapping from "slug" => data object
const theoryRegistry = {
    griechische: GriechischeBuchstabenData,
    // If you add more, e.g. "lateinische": LateinischeBuchstabenData,
    lateinische: LateinischeBuchstabenData,
    zahlenarith: ZahlenmengenData,
    natZahlenArith: natZahlenArithData,
    kommutativg: KommutativGesetzData,
    assoziativitaet: AssoziativitaetData,
    distributiv: DistributivData,
    primzahlundteil: PrimzahlUndTeilbarkeitData,
    primfaktorenzerlegung: PrimfaktorenzerlegungData,

};

export default theoryRegistry;
