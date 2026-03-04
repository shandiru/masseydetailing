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
  Aldborough: { lat: 54.062, lng: -1.287 },
  Arkendale: { lat: 54.098, lng: -1.411 },
  Asenby: { lat: 54.152, lng: -1.348 },
  Bedale: { lat: 54.267, lng: -1.554 },
  Bilton: { lat: 54.015, lng: -1.494 },
  "Bishop Monkton": { lat: 54.072, lng: -1.517 },
  Boroughbridge: { lat: 54.123, lng: -1.448 },
  "Burton Leonard": { lat: 54.054, lng: -1.460 },
  Cattal: { lat: 54.004, lng: -1.399 },
  Catton: { lat: 54.072, lng: -1.433 },
  Copgrove: { lat: 54.071, lng: -1.436 },
  Coxwold: { lat: 54.129, lng: -1.232 },
  Dishforth: { lat: 54.181, lng: -1.360 },
  Easingwold: { lat: 54.149, lng: -1.239 },
  Farnham: { lat: 54.118, lng: -1.257 },
  Ferrensby: { lat: 54.057, lng: -1.386 },
  Flaxby: { lat: 54.046, lng: -1.396 },
  "Great Ouseburn": { lat: 54.027, lng: -1.330 },
  "Green Hammerton": { lat: 54.010, lng: -1.363 },
  Grewelthorpe: { lat: 54.104, lng: -1.514 },
  Harrogate: { lat: 54.001, lng: -1.539 },
  Helperby: { lat: 54.163, lng: -1.321 },
  Huby: { lat: 54.043, lng: -1.458 },
  Hunsingore: { lat: 54.050, lng: -1.378 },
  "Kirkby Malzeard": { lat: 54.146, lng: -1.552 },
  "Kirk Hammerton": { lat: 54.018, lng: -1.369 },
  Knaresborough: { lat: 54.001, lng: -1.478 },
  Langthorpe: { lat: 54.001, lng: -1.471 },
  "Leeming Bar": { lat: 54.341, lng: -1.479 },
  "Little Ouseburn": { lat: 54.033, lng: -1.330 },
  "Marton-le-Moor": { lat: 54.093, lng: -1.469 },
  Masham: { lat: 54.175, lng: -1.523 },
  Minskip: { lat: 54.105, lng: -1.482 },
  "Myton-on-Swale": { lat: 54.118, lng: -1.398 },
  Nidd: { lat: 54.037, lng: -1.427 },
  "Norton Conyers": { lat: 54.152, lng: -1.492 },
  "Nun Monkton": { lat: 54.090, lng: -1.383 },
  "Pateley Bridge": { lat: 54.168, lng: -1.756 },
  Rainton: { lat: 54.181, lng: -1.525 },
  Ripon: { lat: 54.137, lng: -1.523 },
  Roecliffe: { lat: 54.107, lng: -1.511 },
  Scotton: { lat: 54.000, lng: -1.476 },
  Sharow: { lat: 54.066, lng: -1.534 },
  "Skelton-on-Ure": { lat: 54.136, lng: -1.437 },
  "Skipton-on-Swale": { lat: 54.109, lng: -1.427 },
  Staveley: { lat: 54.144, lng: -1.394 },
  "Stump Cross": { lat: 54.163, lng: -1.366 },
  "Sutton Grange": { lat: 54.121, lng: -1.540 },
  Tanfield: { lat: 54.134, lng: -1.396 },
  Tholthorpe: { lat: 54.111, lng: -1.350 },
  Thirsk: { lat: 54.228, lng: -1.355 },
  Thormanby: { lat: 54.124, lng: -1.373 },
  Tollerton: { lat: 54.020, lng: -1.395 },
  Topcliffe: { lat: 54.191, lng: -1.345 },
  Upton: { lat: 54.030, lng: -1.470 },
  Walshford: { lat: 54.107, lng: -1.508 },
  Whixley: { lat: 54.040, lng: -1.397 },
  Wighill: { lat: 54.042, lng: -1.444 },
  "Wormald Green": { lat: 54.161, lng: -1.542 },
  "Sutton-on-the-Forest": { lat: 54.105, lng: -1.329 },
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