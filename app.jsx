import React, { useState, useEffect } from 'react';
const bankingTranslationMatrix = {
en: {
title: "COMMERCIAL SWIFT & ROUTING CODE NETWORK",
subtitle: "High-speed interbank clearing directory optimized for global wire validation.",
placeholder: "Enter banking institution or city (e.g., 'Chase Manhattan')...",
searchBtn: "Verify Code",
statusText: "Initializing Multi-Layer Clearing Network Trace...",
stackTitle: "Visual Settlement Journey Mapping",
finalTitle: "Verified Bank SWIFT / BIC Clearing Code",
dateBtn: "Layer 7 Loop: Check Branch Holiday & Day Status",
timeBtn: "Layer 8 Loop: Verify Desk Operational Clock",
hotelAff: "Coordinating a business trip? Access live premium corporate booking layouts here.",
foodAff: "Confirming commercial desk limits? Launch instant corporate service networks here.",
layers: ["Continent", "Country", "State", "Settlement", "Hub", "Branch Node"]
},
es: {
title: "RED OFICIAL DE CÓDIGOS SWIFT Y ENRUTAMIENTO",
subtitle: "Directorio de liquidación interbancaria de alta velocidad optimizado para validación global.",
placeholder: "Ingrese institución bancaria o ciudad (ej. 'Chase Manhattan')...",
searchBtn: "Verificar Código",
statusText: "Inicializando pista de red de liquidación de múltiples capas...",
stackTitle: "Mapeo Visual del Viaje de Liquidación",
finalTitle: "Código de Compensación SWIFT / BIC Verificado",
dateBtn: "Bucle de Capa 7: Verificar Estado de Día y Feriado de la Sucursal",
timeBtn: "Bucle de Capa 8: Verificar Reloj Operativo de la Mesa de Dinero",
hotelAff: "¿Coordina un viaje de negocios aquí? Acceda a ofertas de hoteles premium aquí.",
foodAff: "¿Confirma límites operativos? Inicie redes de servicios comerciales activas.",
layers: ["Continente", "País", "Estado", "Asentamiento", "Centro", "Sucursal"]
},
fr: {
title: "RÉSEAU DES CODES SWIFT & ROUTAGE COMMERCIAL",
subtitle: "Annuaire de compensation interbancaire optimisé pour la validation des virements.",
placeholder: "Entrez l'institution bancaire ou la ville (ex. 'Chase Manhattan')...",
searchBtn: "Vérifier le Code",
statusText: "Initialisation de la piste du réseau de compensation multicouche...",
stackTitle: "Cartographie Visuelle du Parcours de Règlement",
finalTitle: "Code de Compensation SWIFT / BIC Vérifié",
dateBtn: "Boucle Couche 7: Vérifier le Statut des Jours Fériés de la Succursale",
timeBtn: "Boucle Couche 8: Vérifier l'Horloge Opérationnelle du Bureau",
hotelAff: "Vous organisez un voyage d'affaires ici? Accédez aux offres d'hôtels ici.",
foodAff: "Vous confirmez les heures d'ouverture? Lancez les systèmes commerciaux actifs.",
layers: ["Continent", "Pays", "État", "Règlement", "Hub", "Succursale"]
}
};
const financialRoutingData = {
"chase manhattan": { swift: "CHASUS33NYK", continent: "North America", country: "United States", state: "New York", district: "New York County", city: "Manhattan", timezone: "America/New_York" },
"barclays london": { swift: "BARCGB22LON", continent: "Europe", country: "United Kingdom", state: "England", district: "Greater London", city: "London", timezone: "Europe/London" },
"deutsche frankfurt": { swift: "DEUTDEFFFRA", continent: "Europe", country: "Germany", state: "Hesse", district: "Frankfurt Region", city: "Frankfurt", timezone: "Europe/Berlin" }
};
export default function ElegantSwiftTandemEngine() {
const [searchQuery, setSearchQuery] = useState("");
const [currentLayer, setCurrentLayer] = useState("homepage");
const [activeData, setActiveData] = useState(null);
const [loadingText, setLoadingText] = useState("");
const [activeLanguage, setActiveLanguage] = useState("en");
useEffect(() => {
const urlParams = new URLSearchParams(window.location.search);
const edgeServerLocale = urlParams.get('native_locale');
if (edgeServerLocale && ["en", "es", "fr"].includes(edgeServerLocale)) {
setActiveLanguage(edgeServerLocale);
}
const activePath = window.location.pathname;
const pathParts = activePath.split('/').filter(Boolean);
if (pathParts.length > 0 && pathParts[0] === "world") {
const mockQuery = urlParams.get('q') || "chase manhattan";
const match = (financialRoutingData as any)[mockQuery.toLowerCase().trim()];
if (match) {
setActiveData(match);
setSearchQuery(mockQuery);
if (pathParts.length === 2) setCurrentLayer("continent");
else if (pathParts.length === 3) setCurrentLayer("country");
else if (pathParts.length === 4) setCurrentLayer("state");
else if (pathParts.length === 5) setCurrentLayer("district");
else if (pathParts.length === 6) setCurrentLayer("swift");
else if (pathParts.length === 7 && pathParts[6] === "holiday") setCurrentLayer("date");
else if (pathParts.length === 7 && pathParts[6] === "desk-hours") setCurrentLayer("time");
}
}
}, []);
useEffect(() => {
const activeAdBoxes = document.querySelectorAll(".programmatic-ad-box");
activeAdBoxes.forEach(node => {
node.setAttribute("class", "programmatic-ad-box notranslate");
});
}, [currentLayer]);
const trigger8LayerCascade = (e) => {
e.preventDefault();
const cleanKey = searchQuery.toLowerCase().trim();
const match = (financialRoutingData as any)[cleanKey];
if (!match) {
alert("Please search 'Chase Manhattan' or 'Barclays London'.");
return;
}
setActiveData(match);
const baseOrigin = window.location.origin;
const queryParam = "?q=" + encodeURIComponent(searchQuery);
setCurrentLayer("continent");
setLoadingText(bankingTranslationMatrix[activeLanguage].statusText);
setTimeout(() => {
window.history.pushState({}, "", "/world/" + match.continent.toLowerCase() + queryParam);
setCurrentLayer("country");
}, 400);
setTimeout(() => {
window.history.pushState({}, "", "/world/" + match.continent.toLowerCase() + "/" + match.country.toLowerCase() + queryParam);
setCurrentLayer("state");
}, 800);
setTimeout(() => {
window.history.pushState({}, "", "/world/" + match.continent.toLowerCase() + "/" + match.country.toLowerCase() + "/" + match.state.toLowerCase() + queryParam);
setCurrentLayer("district");
}, 1200);
setTimeout(() => {
window.location.href = baseOrigin + "/world/" + match.continent.toLowerCase() + "/" + match.country.toLowerCase() + "/" + match.state.toLowerCase() + "/" + match.city.toLowerCase() + "/swift" + queryParam;
}, 1600);
};
const loadSplitLayer = (targetType) => {
if (!activeData) return;
const baseOrigin = window.location.origin;
const queryParam = "?q=" + encodeURIComponent(searchQuery);
window.location.href = baseOrigin + "/world/" + activeData.continent.toLowerCase() + "/" + activeData.country.toLowerCase() + "/" + activeData.state.toLowerCase() + "/" + activeData.city.toLowerCase() + "/swift/" + targetType + queryParam;
};
const getLocalizedClock = (zone, style) => {
const options = style === 'date'
? { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
: { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
return new Date().toLocaleString(activeLanguage, { ...options, timeZone: zone });
};
const lang = bankingTranslationMatrix[activeLanguage];
return (
}
{activeData && (

{lang.stackTitle}


🌍
{activeData.continent}
{lang.layers}

{currentLayer !== "continent" && (

🏳️
{activeData.country}
{lang.layers}

)}
{!["continent", "country"].includes(currentLayer) && (

📍
{activeData.state}
{lang.layers}

)}
{!["continent", "country", "state"].includes(currentLayer) && (

🏢
{activeData.district}
{lang.layers}

)}
{!["continent", "country", "state", "district"].includes(currentLayer) && (

🏙️
{activeData.city}
{lang.layers}

)}
{["swift", "date", "time"].includes(currentLayer) && (


{lang.finalTitle}

{activeData.swift}


<button type="button" onClick={() => loadSplitLayer("holiday")} className={p-3 rounded-xl font-bold text-xs uppercase tracking-wider border shadow-sm transition-all flex-1 ${currentLayer === 'date' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'}}>{lang.dateBtn}
<button type="button" onClick={() => loadSplitLayer("desk-hours")} className={p-3 rounded-xl font-bold text-xs uppercase tracking-wider border shadow-sm transition-all flex-1 ${currentLayer === 'time' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'}}>{lang.timeBtn}
{currentLayer === "date" && {getLocalizedClock(activeData.timezone, 'date')}💼 {lang.hotelAff}}
{currentLayer === "time" && {getLocalizedClock(activeData.timezone, 'time')}📊 {lang.foodAff}}

)}

)}

[ENTERPRISE AD PLACEMENT: AD UNIT #2 - VERTICAL SIDEBAR BANNER]


[ENTERPRISE AD PLACEMENT: AD UNIT #3 - SCREEN-ANCHOR]


);
}
