import React, { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ---------------- Leaflet icon fix ---------------- */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

/* ---------------- Derby Area Coordinates ---------------- */
const areaCoordinates = {
  Aberford: { lat: 53.850, lng: -1.384 },
  "Allerton Bywater": { lat: 53.725, lng: -1.414 },
  "Barwick-in-Elmet": { lat: 53.826, lng: -1.351 },
  Beeston: { lat: 53.797, lng: -1.546 },
  Brotherton: { lat: 53.722, lng: -1.270 },
  "Burton Salmon": { lat: 53.713, lng: -1.270 },
  Castleford: { lat: 53.727, lng: -1.342 },
  "Chapel Allerton": { lat: 53.826, lng: -1.551 },
  "Church Fenton": { lat: 53.843, lng: -1.246 },
  Clifford: { lat: 53.812, lng: -1.479 },
  Collingham: { lat: 53.878, lng: -1.300 },
  "Cross Gates": { lat: 53.809, lng: -1.467 },
  "East Ardsley": { lat: 53.733, lng: -1.501 },
  "East Keswick": { lat: 53.882, lng: -1.369 },
  Fairburn: { lat: 53.724, lng: -1.370 },
  Featherstone: { lat: 53.705, lng: -1.402 },
  Garforth: { lat: 53.790, lng: -1.354 },
  "Glass Houghton": { lat: 53.724, lng: -1.340 },
  "Great Preston": { lat: 53.771, lng: -1.407 },
  Halton: { lat: 53.681, lng: -1.362 },
  Harewood: { lat: 53.893, lng: -1.493 },
  Hillam: { lat: 53.737, lng: -1.370 },
  Horsforth: { lat: 53.852, lng: -1.608 },
  Kippax: { lat: 53.780, lng: -1.372 },
  "Kirkby Wharfe": { lat: 53.729, lng: -1.210 },
  Knottingley: { lat: 53.704, lng: -1.276 },
  Ledsham: { lat: 53.718, lng: -1.362 },
  Ledston: { lat: 53.736, lng: -1.368 },
  "Leeds City Centre": { lat: 53.800, lng: -1.549 },
  Lofthouse: { lat: 53.704, lng: -1.505 },
  Methley: { lat: 53.717, lng: -1.381 },
  Micklefield: { lat: 53.790, lng: -1.341 },
  Mickletown: { lat: 53.721, lng: -1.358 },
  Milford: { lat: 53.723, lng: -1.336 },
  Morley: { lat: 53.789, lng: -1.639 },
  Normanton: { lat: 53.701, lng: -1.399 },
  Oulton: { lat: 53.737, lng: -1.376 },
  Pontefract: { lat: 53.688, lng: -1.321 },
  Rawcliffe: { lat: 53.720, lng: -1.370 },
  "Robin Hood": { lat: 53.710, lng: -1.330 },
  Rothwell: { lat: 53.738, lng: -1.450 },
  Ryther: { lat: 53.779, lng: -1.270 },
  Scholes: { lat: 53.813, lng: -1.423 },
  Seacroft: { lat: 53.815, lng: -1.481 },
  "Sherburn-in-Elmet": { lat: 53.832, lng: -1.217 },
  "South Milford": { lat: 53.810, lng: -1.230 },
  Stanks: { lat: 53.805, lng: -1.470 },
  Swillington: { lat: 53.767, lng: -1.406 },
  Tadcaster: { lat: 53.869, lng: -1.257 },
  Thorner: { lat: 53.888, lng: -1.492 },
  "Thorp Arch": { lat: 53.896, lng: -1.404 },
  Wakefield: { lat: 53.682, lng: -1.496 },
  Whitkirk: { lat: 53.813, lng: -1.476 },
  Whinmoor: { lat: 53.839, lng: -1.466 },
  Woodlesford: { lat: 53.743, lng: -1.461 },
  Wothersome: { lat: 53.862, lng: -1.516 }
};

/* ---------------- Auto Fit Bounds ---------------- */
function FitBounds() {
    const map = useMap();

    useEffect(() => {
        const bounds = L.latLngBounds(
            Object.values(areaCoordinates).map((area) => [
                area.lat,
                area.lng
            ])
        );
        map.fitBounds(bounds, { padding: [50, 50] });
    }, [map]);

    return null;
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function GarforthMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                       Our Service Coverage – Garforth
                    </h2>
                    <p className="text-lg text-white/90">
                        Covering Garforth, Leeds, Wakefield & surrounding areas
                    </p>
                </div>

                {/* Map Card */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl">

                        {/* Responsive Map */}
                        <div className="relative w-full h-88 md:h-125 rounded-2xl overflow-hidden">
                            <MapContainer
                                scrollWheelZoom={true}   /* Zoom Enabled */
                                className="w-full h-full"
                            >
                                <TileLayer
                                    attribution="© OpenStreetMap"
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                <FitBounds />

                                {Object.entries(areaCoordinates).map(([area, coords]) => (
                                    <Marker
                                        key={area}
                                        position={[coords.lat, coords.lng]}
                                        eventHandlers={{
                                            click: () => setSelectedArea(area)
                                        }}
                                    >
                                        <Popup>
                                            <strong>{area}</strong>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>

                        {/* Area List */}
                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-center text-[#0D1525] mb-6">
                                Areas We Cover
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {Object.keys(areaCoordinates)
                                    .sort()
                                    .map((area) => (
                                        <div
                                            key={area}
                                            onClick={() => setSelectedArea(area)}
                                            className={`cursor-pointer rounded-xl px-3 py-2 text-center font-medium transition-all duration-300 transform hover:scale-105 ${selectedArea === area
                                                ? "bg-[#0052cc] text-white shadow-lg"
                                                : "bg-[#0052cc] text-white hover:bg-[#0052cc]/70"
                                                }`}
                                        >
                                            {area}
                                        </div>
                                    ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}