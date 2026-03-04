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
  Adel: { lat: 53.862, lng: -1.579 },
  Alwoodley: { lat: 53.857, lng: -1.523 },
  Armley: { lat: 53.801, lng: -1.584 },
  Armytage: { lat: 53.698, lng: -1.660 },
  Bardsey: { lat: 53.891, lng: -1.483 },
  "Barwick-in-Elmet": { lat: 53.826, lng: -1.351 },
  Batley: { lat: 53.707, lng: -1.625 },
  Beeston: { lat: 53.797, lng: -1.546 },
  Birstall: { lat: 53.766, lng: -1.519 },
  "Boston Spa": { lat: 53.902, lng: -1.326 },
  Bramham: { lat: 53.902, lng: -1.351 },
  Bramhope: { lat: 53.907, lng: -1.653 },
  Bramley: { lat: 53.817, lng: -1.646 },
  Bradford: { lat: 53.796, lng: -1.759 },
  Brighouse: { lat: 53.713, lng: -1.777 },
  Burley: { lat: 53.840, lng: -1.585 },
  "Burley-in-Wharfedale": { lat: 53.900, lng: -1.688 },
  Calverley: { lat: 53.839, lng: -1.665 },
  "Chapel Allerton": { lat: 53.826, lng: -1.551 },
  Churwell: { lat: 53.783, lng: -1.556 },
  Cleckheaton: { lat: 53.708, lng: -1.650 },
  Clifford: { lat: 53.812, lng: -1.479 },
  Collingham: { lat: 53.878, lng: -1.300 },
  Cookridge: { lat: 53.867, lng: -1.584 },
  "Cross Gates": { lat: 53.809, lng: -1.467 },
  Dewsbury: { lat: 53.691, lng: -1.629 },
  Drighlington: { lat: 53.737, lng: -1.615 },
  "East Ardsley": { lat: 53.733, lng: -1.501 },
  Farsley: { lat: 53.819, lng: -1.638 },
  Featherstone: { lat: 53.705, lng: -1.402 },
  Garforth: { lat: 53.790, lng: -1.354 },
  Gildersome: { lat: 53.774, lng: -1.602 },
  Guiseley: { lat: 53.895, lng: -1.669 },
  Harewood: { lat: 53.893, lng: -1.493 },
  Headingley: { lat: 53.822, lng: -1.578 },
  Horsforth: { lat: 53.852, lng: -1.608 },
  Horbury: { lat: 53.676, lng: -1.591 },
  Hunslet: { lat: 53.786, lng: -1.529 },
  "Hyde Park": { lat: 53.808, lng: -1.568 },
  Idle: { lat: 53.833, lng: -1.740 },
  Ilkley: { lat: 53.956, lng: -1.822 },
  Keighley: { lat: 53.867, lng: -1.911 },
  Killingbeck: { lat: 53.811, lng: -1.500 },
  Kirkstall: { lat: 53.817, lng: -1.576 },
  Knottingley: { lat: 53.704, lng: -1.276 },
  "Leeds City Centre": { lat: 53.800, lng: -1.549 },
  Lofthouse: { lat: 53.704, lng: -1.505 },
  Meanwood: { lat: 53.835, lng: -1.553 },
  Menston: { lat: 53.905, lng: -1.711 },
  Methley: { lat: 53.717, lng: -1.381 },
  Middleton: { lat: 53.748, lng: -1.574 },
  Mirfield: { lat: 53.697, lng: -1.636 },
  Moortown: { lat: 53.834, lng: -1.546 },
  Morley: { lat: 53.789, lng: -1.639 },
  Normanton: { lat: 53.701, lng: -1.399 },
  Oakwood: { lat: 53.840, lng: -1.540 },
  Ossett: { lat: 53.690, lng: -1.532 },
  Otley: { lat: 53.932, lng: -1.632 },
  "Pontefract": { lat: 53.688, lng: -1.321 },
  "Pool-in-Wharfedale": { lat: 53.917, lng: -1.694 },
  Pudsey: { lat: 53.813, lng: -1.658 },
  Rawdon: { lat: 53.861, lng: -1.644 },
  Rodley: { lat: 53.837, lng: -1.620 },
  Rothwell: { lat: 53.738, lng: -1.450 },
  Roundhay: { lat: 53.833, lng: -1.529 },
  Scholes: { lat: 53.813, lng: -1.423 },
  Seacroft: { lat: 53.815, lng: -1.481 },
  Shadwell: { lat: 53.888, lng: -1.508 },
  Shipley: { lat: 53.849, lng: -1.776 },
  Silsden: { lat: 53.913, lng: -1.921 },
  Stanningley: { lat: 53.809, lng: -1.655 },
  Swillington: { lat: 53.767, lng: -1.406 },
  Tadcaster: { lat: 53.869, lng: -1.257 },
  Tingley: { lat: 53.740, lng: -1.551 },
  Thorner: { lat: 53.888, lng: -1.492 },
  "Wakefield": { lat: 53.682, lng: -1.496 },
  Wetherby: { lat: 53.918, lng: -1.359 },
  Whinmoor: { lat: 53.839, lng: -1.466 },
  Whitkirk: { lat: 53.813, lng: -1.476 },
  "Wigton Moor": { lat: 53.835, lng: -1.513 },
  Woodlesford: { lat: 53.743, lng: -1.461 },
  Yeadon: { lat: 53.875, lng: -1.663 },
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
export default function LeedsMapSection() {
    const [selectedArea, setSelectedArea] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Our Service Coverage – Leeds
                    </h2>
                    <p className="text-lg text-white/90">
                        Covering Leeds, Bradford, Wakefield & surrounding areas
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