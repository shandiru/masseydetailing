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
    Aldfield: { lat: 54.074, lng: -1.556 },
    Arkendale: { lat: 54.097, lng: -1.410 },
    Askwith: { lat: 53.993, lng: -1.707 },
    Azerley: { lat: 54.123, lng: -1.527 },
    Beckwithshaw: { lat: 54.000, lng: -1.537 },
    Bedale: { lat: 54.267, lng: -1.554 },
    Bilton: { lat: 54.015, lng: -1.494 },
    Birstwith: { lat: 54.035, lng: -1.606 },
    "Bishop Monkton": { lat: 54.072, lng: -1.517 },
    Boroughbridge: { lat: 54.123, lng: -1.448 },
    "Burnt Yates": { lat: 54.084, lng: -1.638 },
    "Burton Leonard": { lat: 54.054, lng: -1.460 },
    Calcutt: { lat: 54.123, lng: -1.500 },
    Clint: { lat: 54.086, lng: -1.591 },
    Copgrove: { lat: 54.071, lng: -1.436 },
    Dacre: { lat: 54.041, lng: -1.720 },
    Darley: { lat: 54.101, lng: -1.644 },
    Dishforth: { lat: 54.181, lng: -1.360 },
    Dunkeswick: { lat: 53.998, lng: -1.569 },
    Farnham: { lat: 54.118, lng: -1.257 },
    Ferrensby: { lat: 54.057, lng: -1.386 },
    Fewston: { lat: 54.033, lng: -1.603 },
    Flaxby: { lat: 54.046, lng: -1.396 },
    Follifoot: { lat: 54.007, lng: -1.510 },
    "Great Ouseburn": { lat: 54.027, lng: -1.330 },
    "Green Hammerton": { lat: 54.010, lng: -1.363 },
    Grewelthorpe: { lat: 54.104, lng: -1.514 },
    Hampsthwaite: { lat: 54.034, lng: -1.597 },
    Harrogate: { lat: 54.001, lng: -1.539 },
    Hartwith: { lat: 54.027, lng: -1.612 },
    Huby: { lat: 54.043, lng: -1.458 },
    Hunsingore: { lat: 54.050, lng: -1.378 },
    Killinghall: { lat: 54.050, lng: -1.556 },
    "Kirkby Malzeard": { lat: 54.146, lng: -1.552 },
    "Kirk Hammerton": { lat: 54.018, lng: -1.369 },
    Knaresborough: { lat: 54.001, lng: -1.478 },
    Langthorpe: { lat: 54.001, lng: -1.471 },
    Leathley: { lat: 53.999, lng: -1.703 },
    "Leeming Bar": { lat: 54.341, lng: -1.479 },
    "Little Ouseburn": { lat: 54.033, lng: -1.330 },
    Littlethorpe: { lat: 54.004, lng: -1.522 },
    Markington: { lat: 54.050, lng: -1.560 },
    "Marton-le-Moor": { lat: 54.093, lng: -1.469 },
    Masham: { lat: 54.175, lng: -1.523 },
    Minskip: { lat: 54.105, lng: -1.482 },
    "Myton-on-Swale": { lat: 54.118, lng: -1.398 },
    Nidd: { lat: 54.037, lng: -1.427 },
    "North Rigton": { lat: 54.023, lng: -1.555 },
    "Norton Conyers": { lat: 54.152, lng: -1.492 },
    "Nun Monkton": { lat: 54.090, lng: -1.383 },
    Oakdale: { lat: 54.010, lng: -1.500 },
    Otley: { lat: 53.926, lng: -1.697 },
    Pannal: { lat: 54.000, lng: -1.560 },
    "Pateley Bridge": { lat: 54.168, lng: -1.756 },
    Plompton: { lat: 54.047, lng: -1.529 },
    "Pool-in-Wharfedale": { lat: 53.917, lng: -1.694 },
    Rainton: { lat: 54.181, lng: -1.525 },
    Ripon: { lat: 54.137, lng: -1.523 },
    Ripley: { lat: 54.013, lng: -1.560 },
    Roecliffe: { lat: 54.107, lng: -1.511 },
    Scotton: { lat: 54.000, lng: -1.476 },
    Sharow: { lat: 54.066, lng: -1.534 },
    "Skelton-on-Ure": { lat: 54.136, lng: -1.437 },
    "Skipton-on-Swale": { lat: 54.109, lng: -1.427 },
    Spofforth: { lat: 53.996, lng: -1.541 },
    Starbeck: { lat: 54.003, lng: -1.535 },
    Staveley: { lat: 54.144, lng: -1.394 },
    "Stump Cross": { lat: 54.163, lng: -1.366 },
    Summerbridge: { lat: 53.996, lng: -1.588 },
    "Sutton Grange": { lat: 54.121, lng: -1.540 },
    Tanfield: { lat: 54.134, lng: -1.396 },
    Thirsk: { lat: 54.228, lng: -1.355 },
    Tholthorpe: { lat: 54.111, lng: -1.350 },
    Thormanby: { lat: 54.124, lng: -1.373 },
    Tollerton: { lat: 54.020, lng: -1.395 },
    Topcliffe: { lat: 54.191, lng: -1.345 },
    Walshford: { lat: 54.107, lng: -1.508 },
    Weeton: { lat: 53.983, lng: -1.578 },
    Wharfedale: { lat: 53.910, lng: -1.700 },
    Whixley: { lat: 54.040, lng: -1.397 },
    Wighill: { lat: 54.042, lng: -1.444 },
    "Wormald Green": { lat: 54.161, lng: -1.542 },
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
export default function HarrogateMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Our Service Coverage – Harrogate
                    </h2>
                    <p className="text-lg text-white/90">
                        Covering Harrogate, Knaresborough, Ripon & surrounding areas
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