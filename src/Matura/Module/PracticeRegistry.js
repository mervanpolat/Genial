// File: src/Matura/Module/PracticeRegistry.js

// Import all your "Praxis_..." components:
import Praxis_GriechischeBuchstaben from "./1_Grundlagen/Lektionen/1_GriechischeBuchstaben/Praxis_GriechischeBuchstaben.jsx";
import Praxis_LateinischeBuchstaben from "./1_Grundlagen/Lektionen/2_LateinischeBuchstaben/Praxis_LateinischeBuchstaben.jsx";
import Praxis_Zahlenmengen from "./1_Grundlagen/Lektionen/3_Zahlenmengen/Praxis_Zahlenmengen.jsx";
import Praxis_GrundlagenZahlenUndArithmetik from "./1_Grundlagen/Lektionen/4_GrundlagenZahlenUndArithmetik/Praxis_GrundlagenZahlenUndArithmetik.jsx";
import Praxis_KommutativGesetz from "./1_Grundlagen/Lektionen/5_Kommutativgesetz/Praxis_KommutativGesetz.jsx";
import Praxis_Assoziativitaet from "./1_Grundlagen/Lektionen/6_Assoziativgesetz/Praxis_Assoziativitaet.jsx";
import Praxis_Distributivgesetz from "./1_Grundlagen/Lektionen/7_Distributivgesetz/Praxis_Distributivgesetz.jsx";
import Praxis_PrimzahlUndTeilbarkeit from "./1_Grundlagen/Lektionen/8_PrimzahlenUndTeilbarkeitsregeln/Praxis_PrimzahlUndTeilbarkeit.jsx";
import Praxis_Primfaktorenzerlegung from "./1_Grundlagen/Lektionen/9_Primfaktorenzerlegung/Praxis_Primfaktorenzerlegung.jsx";
import Praxis_SiebDesEratosthenes from "./1_Grundlagen/Lektionen/10_SiebDesEratosthenes/Praxis_SiebDesEratosthenes.jsx";
import Praxis_Zahlentheorie from "./1_Grundlagen/Lektionen/11_Zahlentheorie/Praxis_Zahlentheorie.jsx";

// Create a slug => component mapping
const practiceRegistry = {
    griechischebuchstaben: Praxis_GriechischeBuchstaben,
    lateinischebuchstaben: Praxis_LateinischeBuchstaben,
    zahlenarithmetik:      Praxis_Zahlenmengen,
    natZahlenArithmetik:   Praxis_GrundlagenZahlenUndArithmetik,
    kommutativ:            Praxis_KommutativGesetz,
    assoziativitaet:       Praxis_Assoziativitaet,
    distributivgesetz:     Praxis_Distributivgesetz,
    primzahlundteil:       Praxis_PrimzahlUndTeilbarkeit,
    primfaktorenzerlegung: Praxis_Primfaktorenzerlegung,
    primzahlenfinden:      Praxis_SiebDesEratosthenes,
    zahlentheorie:         Praxis_Zahlentheorie,
};

export default practiceRegistry;
