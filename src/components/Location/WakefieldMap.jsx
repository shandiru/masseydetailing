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
  "Ainderby Steeple": { lat: 54.345, lng: -1.489 },
  Aiskew: { lat: 54.341, lng: -1.433 },
  Aldborough: { lat: 54.062, lng: -1.287 },
  Ampleforth: { lat: 54.250, lng: -1.155 },
  Asenby: { lat: 54.152, lng: -1.348 },
  Bagby: { lat: 54.234, lng: -1.357 },
  Baldersby: { lat: 54.191, lng: -1.459 },
  Bedale: { lat: 54.267, lng: -1.554 },
  Borrowby: { lat: 54.389, lng: -0.911 },
  Brafferton: { lat: 54.378, lng: -1.378 },
  Breckenbrough: { lat: 54.254, lng: -1.435 },
  Brompton: { lat: 54.338, lng: -1.436 },
  "Carlton Miniott": { lat: 54.328, lng: -1.413 },
  Catton: { lat: 54.072, lng: -1.433 },
  Cawton: { lat: 54.156, lng: -1.228 },
  Coxwold: { lat: 54.129, lng: -1.232 },
  Crayke: { lat: 54.097, lng: -1.187 },
  Dalton: { lat: 54.213, lng: -1.371 },
  "Danby Wiske": { lat: 54.343, lng: -1.402 },
  Dishforth: { lat: 54.181, lng: -1.360 },
  Easingwold: { lat: 54.149, lng: -1.239 },
  Eavestone: { lat: 54.066, lng: -1.302 },
  Eldmire: { lat: 54.138, lng: -1.503 },
  Felixkirk: { lat: 54.187, lng: -1.378 },
  Filey: { lat: 54.210, lng: -0.309 },
  Gatenby: { lat: 54.327, lng: -1.460 },
  "Great Langton": { lat: 54.265, lng: -1.423 },
  Helperby: { lat: 54.163, lng: -1.321 },
  Howe: { lat: 54.203, lng: -1.349 },
  Huby: { lat: 54.043, lng: -1.458 },
  Husthwaite: { lat: 54.157, lng: -1.343 },
  "Hutton Sessay": { lat: 54.207, lng: -1.365 },
  "Kirkby Knowle": { lat: 54.401, lng: -1.164 },
  "Kirkby-in-Cleveland": { lat: 54.470, lng: -1.020 },
  "Kirby Sigston": { lat: 54.402, lng: -1.429 },
  "Kirby Wiske": { lat: 54.362, lng: -1.376 },
  Leeming: { lat: 54.386, lng: -1.506 },
  "Leeming Bar": { lat: 54.341, lng: -1.479 },
  Levisham: { lat: 54.327, lng: -0.992 },
  Maunby: { lat: 54.364, lng: -1.386 },
  Middlesbrough: { lat: 54.574, lng: -1.235 },
  "Morton-on-Swale": { lat: 54.337, lng: -1.457 },
  "Myton-on-Swale": { lat: 54.118, lng: -1.398 },
  "Newby Wiske": { lat: 54.376, lng: -1.426 },
  "Newton-on-Ouse": { lat: 54.014, lng: -1.216 },
  Northallerton: { lat: 54.339, lng: -1.433 },
  "Norton Conyers": { lat: 54.152, lng: -1.492 },
  "Old Byland": { lat: 54.230, lng: -1.550 },
  Osmotherley: { lat: 54.348, lng: -1.390 },
  Pickhill: { lat: 54.310, lng: -1.432 },
  Rainton: { lat: 54.181, lng: -1.525 },
  Ripon: { lat: 54.137, lng: -1.523 },
  Romanby: { lat: 54.337, lng: -1.430 },
  "Sand Hutton": { lat: 54.116, lng: -1.280 },
  Scruton: { lat: 54.318, lng: -1.452 },
  Sessay: { lat: 54.207, lng: -1.365 },
  Sharow: { lat: 54.066, lng: -1.534 },
  Sinderby: { lat: 54.330, lng: -1.410 },
  "Skipton-on-Swale": { lat: 54.109, lng: -1.427 },
  Sowerby: { lat: 54.390, lng: -1.412 },
  "South Kilvington": { lat: 54.078, lng: -1.461 },
  Staddlebridge: { lat: 54.055, lng: -1.440 },
  "Sutton-under-Whitestonecliffe": { lat: 54.182, lng: -1.353 },
  Tanfield: { lat: 54.134, lng: -1.396 },
  Thirkleby: { lat: 54.177, lng: -1.353 },
  Thirsk: { lat: 54.228, lng: -1.355 },
  Tholthorpe: { lat: 54.111, lng: -1.350 },
  Thornborough: { lat: 54.177, lng: -1.479 },
  "Thornton-le-Beans": { lat: 54.319, lng: -1.423 },
  "Thornton-le-Moor": { lat: 54.312, lng: -1.422 },
  "Thornton-le-Street": { lat: 54.318, lng: -1.427 },
  Topcliffe: { lat: 54.191, lng: -1.345 },
  Upsall: { lat: 54.333, lng: -1.421 },
  Well: { lat: 54.287, lng: -1.416 },
  "West Tanfield": { lat: 54.168, lng: -1.430 },
  Whitby: { lat: 54.485, lng: -0.620 },
  Whorlton: { lat: 54.431, lng: -1.030 },
  Yafforth: { lat: 54.351, lng: -1.471 },
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
export default function WakefieldMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                       Our Service Coverage – Wakefield
                    </h2>
                    <p className="text-lg text-white/90">
                        Covering Wakefield, Pontefract, Castleford & surrounding areas
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