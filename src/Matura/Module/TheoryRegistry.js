// File: src/Matura/Module/TheoryRegistry.js

// Import your various theory data objects
import GriechischeBuchstabenData from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/GriechischeBuchstabenData.jsx";
import LateinischeBuchstabenData from "./1_Grundlagen/Lektionen/2_LateinischeBuchstaben/LateinischeBuchstabenData.jsx";
import ZahlenmengenData from "./1_Grundlagen/Lektionen/3_Zahlenmengen/ZahlenmengenData.jsx";
import natZahlenArithData from "./1_Grundlagen/Lektionen/4_GrundlagenZahlenUndArithmetik/GrundlagenZahlenUndArithmetik.jsx";
import KommutativGesetzData from "./1_Grundlagen/Lektionen/5_Kommutativgesetz/KommutativGesetzData.jsx";
import AssoziativitaetData from "./1_Grundlagen/Lektionen/6_Assoziativgesetz/AssoziativitaetData.jsx";
import DistributivData from "./1_Grundlagen/Lektionen/7_Distributivgesetz/DistributivData.jsx";
import PrimzahlUndTeilbarkeitData from "./1_Grundlagen/Lektionen/8_PrimzahlenUndTeilbarkeitsregeln/PrimzahlUndTeilbarkeitData.jsx";
import PrimfaktorenzerlegungData from "./1_Grundlagen/Lektionen/9_Primfaktorenzerlegung/PrimfaktorenzerlegungData.jsx";
import SiebDesEratosthenesData from "./1_Grundlagen/Lektionen/10_SiebDesEratosthenes/SiebDesEratosthenesData.jsx";
import ZahlentheorieData from "./1_Grundlagen/Lektionen/11_Zahlentheorie/ZahlentheorieData.jsx";

// Map each slug to its respective data file
const theoryRegistry = {
    griechische: GriechischeBuchstabenData,
    lateinische: LateinischeBuchstabenData,
    zahlenarith: ZahlenmengenData,
    natZahlenArith: natZahlenArithData,
    kommutativg: KommutativGesetzData,
    assoziativitaet: AssoziativitaetData,
    distributiv: DistributivData,
    primzahlundteil: PrimzahlUndTeilbarkeitData,
    primfaktorenzerlegung: PrimfaktorenzerlegungData,
    primzahlenfinden: SiebDesEratosthenesData,
    zahlentheorie: ZahlentheorieData,
};

export default theoryRegistry;
