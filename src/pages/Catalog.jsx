import React, { useState } from "react";
import a from '../assets/a.png'

const CARS_DATA = [
  {
    id: 1,
    title: "2025 AERO-G Flux-X",
    image: "/img/car1.jpg",
    badge: "New",
    hp: "1200 HP",
    range: "450 mi Range",
    drive: "Quad-Motor AWD",
    price: "$1,240,000",
    month: "$12,500/mo",
    isFavorite: false,
  },
  {
    id: 2,
    title: "2024 Veloce V12",
    image: "/img/car2.jpg",
    badge: "Featured",
    hp: "850 HP",
    range: "V12 Hybrid",
    drive: "RWD",
    price: "$890,000",
    month: "$8,900/mo",
    isFavorite: false,
  },
  {
    id: 3,
    title: "2025 Kinetix Nero",
    image: "/img/car3.jpg",
    badge: "",
    hp: "600 HP",
    range: "520 mi Range",
    drive: "Dual-Motor",
    price: "$215,000",
    month: "$2,100/mo",
    isFavorite: false,
  },
  {
    id: 4,
    title: "2024 AERO-G Apex",
    image: "/img/car4.jpg",
    badge: "",
    hp: "1050 HP",
    range: "Track Ready",
    drive: "",
    price: "$2,100,000",
    month: "$19,500/mo",
    isFavorite: false,
  },
];

export default function Catalog() {
  const [viewMode, setViewMode] = useState("grid");
  const [cars, setCars] = useState(CARS_DATA);

  const toggleFavorite = (id) => {
    setCars((prev) =>
      prev.map((car) =>
        car.id === id ? { ...car, isFavorite: !car.isFavorite } : car
      )
    );
  };

  return (
    <div className="bg-[#111111] text-white min-h-screen  ">
  
      <section className="bg-[#111111] text-white px-6 md:px-10 py-12 border-b border-[#222]">
        <p className="text-sm text-gray-500 mb-8">
          Home <span className="text-gray-700">/</span> Catalog
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1] tracking-tight">
              Explore Our <br />
              Inventory
            </h1>

            <p className="text-gray-400 mt-5 text-lg">
              Precision engineered performance, available for immediate
              commission.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-md px-5 py-2 text-sm text-gray-300">
                Showing <span className="font-semibold text-white">{cars.length}</span>{" "}
                Vehicles
              </div>

              <select className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-md px-5 py-2 text-sm text-white outline-none cursor-pointer">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`w-11 h-11 flex items-center justify-center rounded transition ${
                  viewMode === "grid"
                    ? "bg-cyan-400 text-black"
                    : "border border-[#2a2a2a] text-gray-400 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="6" height="6" />
                  <rect x="14" y="4" width="6" height="6" />
                  <rect x="4" y="14" width="6" height="6" />
                  <rect x="14" y="14" width="6" height="6" />
                </svg>
              </button>

              <button
                onClick={() => setViewMode("list")}
                aria-label="List View"
                className={`w-11 h-11 flex items-center justify-center rounded transition ${
                  viewMode === "list"
                    ? "bg-cyan-400 text-black"
                    : "border border-[#2a2a2a] text-gray-400 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="7" x2="19" y2="7" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="17" x2="19" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Sidebar + Grid */}
      <div className="flex flex-col lg:flex-row">
        {/* Filter Sidebar */}
        <aside className="w-full lg:w-[280px] bg-[#0d0d0d] border-b lg:border-b-0 lg:border-r border-[#222] p-6 shrink-0">
          <h2 className="text-xs uppercase tracking-[4px] text-gray-500 mb-6 font-mono">
            Explore
          </h2>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent border-b border-gray-700 pb-2 text-sm outline-none focus:border-cyan-400 placeholder:text-gray-500 transition"
            />
            <svg
              className="absolute right-0 top-1 w-4 h-4 text-gray-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Price Range
            </h3>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
             
              <span>$50K</span>
              <span>$10M</span>
            </div>
            <input type="range" className="w-full accent-cyan-400 cursor-pointer" />
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Propulsion
            </h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400/10 transition">
                Electric
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm hover:border-gray-500 transition">
                Hybrid
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Manufacturer
            </h3>
            <div className="space-y-3 text-sm">
              {["AERO-X", "Veloce Engineering", "Kinetix Motors"].map((mfr, idx) => (
                <label key={mfr} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={idx === 0}
                    className="accent-cyan-400 rounded cursor-pointer"
                  />
                  <span className="text-gray-300 hover:text-white transition">{mfr}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Transmission
            </h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="accent-cyan-400 rounded cursor-pointer" />
              <span className="text-sm text-gray-300">Body Type</span>
            </label>
          </div>

          <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 font-semibold rounded transition">
            Apply Filters
          </button>
          <button className="w-full mt-3 text-gray-400 text-sm hover:text-white transition">
            Reset All
          </button>
        </aside>

        {/* Listings Display */}
        <main className="flex-1 bg-[#0d0d0d] p-6 lg:p-8">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                : "flex flex-col gap-5"
            }
          >
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-[#181818] border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <img src={a} alt="" 
                      className="w-full h-52 object-cover"
                    />

                    {car.badge && (
                      <span className="absolute top-3 left-3 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                        {car.badge}
                      </span>
                    )}

                    <button
                      onClick={() => toggleFavorite(car.id)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center transition ${
                        car.isFavorite ? "text-cyan-400" : "text-white hover:text-cyan-300"
                      }`}
                    >
                      {car.isFavorite ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="p-5">
                    <h2 className="text-white text-3xl font-light leading-tight">
                      {car.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mt-5">
                      <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded">
                        {car.hp}
                      </span>
                      <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded">
                        {car.range}
                      </span>
                      {car.drive && (
                        <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded">
                          {car.drive}
                        </span>
                      )}
                    </div>

                    <h3 className="text-cyan-300 text-4xl font-bold mt-6">
                      {car.price}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-1">or {car.month}</p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex gap-3 mt-7">
                    <button className="flex-1 bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded-md font-semibold transition">
                      Details
                    </button>
                    <button className="flex-1 border border-zinc-700 text-zinc-300 py-3 rounded-md hover:bg-zinc-800 transition">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Custom Build Tile */}
            <div className="bg-[#181818] border border-zinc-800 rounded-xl flex flex-col items-center justify-center p-8 text-center min-h-[500px]">
              <div className="text-cyan-300 text-5xl mb-6">✦</div>

              <h2 className="text-white text-4xl font-light">
                Custom <br /> Build
              </h2>

              <p className="text-zinc-500 mt-6 leading-7 max-w-xs">
                Can't find what you're looking for? Configure your unique model.
              </p>

              <button className="mt-8 text-cyan-300 border-b border-cyan-300 pb-1 hover:text-cyan-200 transition">
                Start configurator
              </button>
            </div>
          </div>
        </main>
        
      </div>
      <footer className="bg-[#0E0E0E] text-white">
  <div className="max-w-7xl mx-auto px-14 py-14">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-bold tracking-wide mb-6">
          AERO-G
        </h2>

        <p className="text-gray-400 text-sm leading-7 max-w-[230px]">
          Pushing the boundaries of automotive engineering through
          relentless innovation and aerodynamic perfection.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-cyan-400 uppercase text-xs tracking-[3px] mb-6">
          Quick Links
        </h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Catalog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Configurator
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Pre-owned
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Financial Services
            </a>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-cyan-400 uppercase text-xs tracking-[3px] mb-6">
          Company
        </h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Sustainability
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-cyan-400 uppercase text-xs tracking-[3px] mb-6">
          Newsletter
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-5">
          Stay updated on the latest engineering breakthroughs.
        </p>

        <div className="flex">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#1A1A1A] text-white px-4 py-3 w-full outline-none placeholder:text-gray-500"
          />

          <button className="bg-cyan-400 hover:bg-cyan-300 transition px-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-5-5 5 5-5 5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="border-t border-[#1F1F1F] mt-12 pt-8">
      <p className="text-gray-500 text-sm">
        © 2024 AERO-G Performance Engineering. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}