import { useEffect } from "react";

/**
 * Home Component
 * Renders the Home page view as shown in the screenshot, including the exact
 * styled header and the custom SVG bar chart showing project counts by status.
 */
export default function Home() {
  useEffect(() => {
    document.title = "Estimora | Home";
  }, []);
  return (
    <div className="p-8 flex flex-col gap-8 animate-fade-in bg-white h-full">
      {/* Page Header */}
      <div className="flex items-center gap-2 select-none">
        {/* Teal outline grid icon */}
        <div className="text-[#3da89b]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
        </div>
        <h2 className="font-bold text-[#3da89b] tracking-wide">Home</h2>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center items-center mt-6 w-full overflow-hidden px-4">
        {/* SVG Drawing replicating the chart from the screenshot */}
        <svg
          viewBox="0 0 650 420"
          className="w-full max-w-[650px] h-auto font-sans select-none overflow-visible text-zinc-800"
        >
          {/* Grid lines (horizontal) */}
          <line x1="80" y1="40" x2="560" y2="40" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="80" y1="100" x2="560" y2="100" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="80" y1="160" x2="560" y2="160" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="80" y1="220" x2="560" y2="220" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="80" y1="280" x2="560" y2="280" stroke="#f1f3f5" strokeWidth="1" />
          {/* Base Axis Line */}
          <line x1="80" y1="340" x2="560" y2="340" stroke="#dcdfe4" strokeWidth="1.5" />

          {/* Grid lines (vertical) */}
          <line x1="80" y1="40" x2="80" y2="340" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="200" y1="40" x2="200" y2="340" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="320" y1="40" x2="320" y2="340" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="440" y1="40" x2="440" y2="340" stroke="#f1f3f5" strokeWidth="1" />
          <line x1="560" y1="40" x2="560" y2="340" stroke="#f1f3f5" strokeWidth="1" />

          {/* Y Axis Labels (Projects Count values) */}
          <text x="70" y="44" textAnchor="end" className="text-xs font-semibold fill-zinc-700">50</text>
          <text x="70" y="104" textAnchor="end" className="text-xs font-semibold fill-zinc-700">40</text>
          <text x="70" y="164" textAnchor="end" className="text-xs font-semibold fill-zinc-700">30</text>
          <text x="70" y="224" textAnchor="end" className="text-xs font-semibold fill-zinc-700">20</text>
          <text x="70" y="284" textAnchor="end" className="text-xs font-semibold fill-zinc-700">10</text>
          <text x="70" y="344" textAnchor="end" className="text-xs font-semibold fill-zinc-700">0</text>

          {/* Y Axis Title (Projects Count) */}
          <text
            x="40"
            y="190"
            textAnchor="middle"
            transform="rotate(-90 40 190)"
            className="text-sm font-semibold fill-zinc-800 tracking-wide"
          >
            Projects Count
          </text>

          {/* Bar 1: Drafted (value ~55) */}
          <rect
            x="112"
            y="10"
            width="56"
            height="330"
            rx="3"
            fill="#a33153"
            className="transition-all duration-300 hover:opacity-95 cursor-pointer"
          />

          {/* Bar 2: Pending (value 0, not drawn or 0 height) */}
          
          {/* Bar 3: Approved (value ~54) */}
          <rect
            x="352"
            y="16"
            width="56"
            height="324"
            rx="3"
            fill="#9b7ea9"
            className="transition-all duration-300 hover:opacity-95 cursor-pointer"
          />

          {/* Bar 4: Rejected (value ~10) */}
          <rect
            x="472"
            y="280"
            width="56"
            height="60"
            rx="3"
            fill="#9edbf5"
            className="transition-all duration-300 hover:opacity-95 cursor-pointer"
          />

          {/* X Axis Labels */}
          <text x="140" y="365" textAnchor="middle" className="text-xs font-semibold fill-zinc-700">Drafted</text>
          <text x="260" y="365" textAnchor="middle" className="text-xs font-semibold fill-zinc-700">Pending</text>
          <text x="380" y="365" textAnchor="middle" className="text-xs font-semibold fill-zinc-700">Approved</text>
          <text x="500" y="365" textAnchor="middle" className="text-xs font-semibold fill-zinc-700">Rejected</text>

          {/* X Axis Title (Status) */}
          <text
            x="320"
            y="395"
            textAnchor="middle"
            className="text-sm font-bold fill-zinc-800 tracking-wider"
          >
            Status
          </text>
        </svg>
      </div>
    </div>
  );
}
