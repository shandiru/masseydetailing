// Common/Pricing/PricingCompare.jsx
import React from "react";

const COLUMNS = [
  { label: "Maintenance", price: "from £70"  },
  { label: "Full Valet",  price: "from £100" },
  { label: "Deep Clean",  price: "from £175" },
  { label: "Full Detail", price: "from £400" },
];

// true = check, false = cross
const ROWS = [
  { feature: "Exterior hand wash",        cols: [true,  true,  true,  true]  },
  { feature: "Wheel cleaning & tyre dressing", cols: [true,  true,  true,  true]  },
  { feature: "Interior vacuum",           cols: [true,  true,  true,  true]  },
  { feature: "Dashboard & trim clean",    cols: [true,  true,  true,  true]  },
  { feature: "Glass cleaned",             cols: [true,  true,  true,  true]  },
  { feature: "Door shuts cleaned",        cols: [true,  true,  true,  true]  },
  { feature: "Interior shampoo",          cols: [false, true,  true,  true]  },
  { feature: "Leather conditioning",      cols: [false, true,  true,  true]  },
  { feature: "Exterior hand polish",      cols: [false, true,  true,  true]  },
  { feature: "Engine bay clean",          cols: [false, true,  true,  true]  },
  { feature: "Hot water extraction",      cols: [false, false, true,  true]  },
  { feature: "Steam cleaning",            cols: [false, false, true,  true]  },
  { feature: "Stain removal",             cols: [false, false, true,  true]  },
  { feature: "Clay bar treatment",        cols: [false, false, true,  true]  },
  { feature: "Odour elimination",         cols: [false, false, true,  true]  },
  { feature: "Machine polish",            cols: [false, false, false, true]  },
  { feature: "Scratch removal",           cols: [false, false, false, true]  },
  { feature: "Ceramic coating (body)",    cols: [false, false, false, true]  },
  { feature: "Ceramic coating (wheels)",  cols: [false, false, false, true]  },
  { feature: "Ceramic coating (glass)",   cols: [false, false, false, true]  },
];

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-5 w-5 text-blue-500 mx-auto" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconX() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-5 w-5 text-white/20 mx-auto" aria-hidden="true">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

export default function PricingCompare() {
  return (
    <section className="py-16 bg-white/5 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white text-balance">Compare our packages</h2>
          <p className="mt-3 text-white/60">See exactly what each service includes at a glance.</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left p-4 text-sm font-semibold text-white">Feature</th>
                {COLUMNS.map((col) => (
                  <th key={col.label} className="p-4 text-center">
                    <div className="text-sm font-semibold text-white">{col.label}</div>
                    <div className="text-xs text-blue-500 font-medium mt-0.5">{col.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature}
                  className={`border-b border-white/10 transition-colors hover:bg-white/5 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  }`}>
                  <td className="p-4 text-sm text-white/80">{row.feature}</td>
                  {row.cols.map((has, j) => (
                    <td key={j} className="p-4 text-center">
                      {has ? <IconCheck /> : <IconX />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}