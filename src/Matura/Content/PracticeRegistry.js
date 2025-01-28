// File: src/Matura/Content/PracticeRegistry.js

// Import all your "Praxis_..." components:
import Praxis_GriechischeBuchstaben from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/Praxis_GriechischeBuchstaben.jsx";
import Praxis_LateinischeBuchstaben from "./1_Grundlagen/Lektionen/2_LateinischeBuchstaben/Praxis_LateinischeBuchstaben.jsx";
import Praxis_Zahlenmengen from "./1_Grundlagen/Lektionen/3_Zahlenmengen/Praxis_Zahlenmengen.jsx";
import Praxis_NatZahlenArith from "./1_Grundlagen/Lektionen/4_NatZahlenArith/Praxis_NatZahlenArith.jsx";
import Praxis_KommutativGesetz from "./1_Grundlagen/Lektionen/5_Kommutativgesetz/Praxis_KommutativGesetz.jsx";
import Praxis_Assoziativitaet from "./1_Grundlagen/Lektionen/6_Assoziativgesetz/Praxis_Assoziativitaet.jsx";
import Praxis_Distributivgesetz from "./1_Grundlagen/Lektionen/7_Distributivgesetz/Praxis_Distributivgesetz.jsx";
import Praxis_PrimzahlUndTeilbarkeit from "./1_Grundlagen/Lektionen/8_PrimzahlUndTeilbarkeit/Praxis_PrimzahlUndTeilbarkeit.jsx";
import Praxis_Primfaktorenzerlegung from "./1_Grundlagen/Lektionen/9_Primfaktorenzerlegung/Praxis_Primfaktorenzerlegung.jsx";

// Create a slug => component mapping
const practiceRegistry = {
    griechischebuchstaben: Praxis_GriechischeBuchstaben,
    lateinischebuchstaben: Praxis_LateinischeBuchstaben,
    zahlenarithmetik:      Praxis_Zahlenmengen,
    natZahlenArithmetik:   Praxis_NatZahlenArith,
    kommutativ:            Praxis_KommutativGesetz,
    assoziativitaet:       Praxis_Assoziativitaet,
    distributivgesetz:     Praxis_Distributivgesetz,
    primzahlundteil:       Praxis_PrimzahlUndTeilbarkeit,
    primfaktorenzerlegung: Praxis_Primfaktorenzerlegung,
};

export default practiceRegistry;
