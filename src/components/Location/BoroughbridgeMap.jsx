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
  Boroughbridge: { lat: 54.123, lng: -1.448 },
  Harrogate: { lat: 54.001, lng: -1.539 },
  Ripon: { lat: 54.137, lng: -1.523 },
  Knaresborough: { lat: 54.001, lng: -1.478 },
  Easingwold: { lat: 54.149, lng: -1.239 },
  Masham: { lat: 54.175, lng: -1.523 },
  "Pateley Bridge": { lat: 54.168, lng: -1.756 },
  Bedale: { lat: 54.267, lng: -1.554 },
  Thirsk: { lat: 54.228, lng: -1.355 },
  York: { lat: 53.959, lng: -1.081 },
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
export default function BoroughbridgeMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Our Service Coverage - Boroughbridge
                    </h2>
                    <p className="text-lg text-white/90">
                        Covering Boroughbridge, Harrogate, Ripon & surrounding areas
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