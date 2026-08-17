


import React from 'react'
import Footer from '../Components/footer'

export default function Home() {
  return (
    <div>
      <section className="font-sans max-w-[1920px] mx-auto bg-[#0d0f12] text-white py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 md:space-y-8">
              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs tracking-widest uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>500+ PREMIUM VEHICLES AVAILABLE</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-[#00E5FF] font-sans">
                  DRIVE THE<br />
                  FUTURE OF<br />
                  MOBILITY
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                  Experience unparalleled performance and sustainable luxury. Our fleet of next-generation electric hypercars redefines what's possible on the open road.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                      type="button" 
                      className="bg-[#00E5FF] hover:bg-[#00cBE6] text-black font-bold text-xs sm:text-sm px-8 py-4 rounded-xl uppercase tracking-wider font-mono transition-all shadow-lg shadow-cyan-500/10 active:scale-95"
                  >
                      Explore Inventory
                  </button>

                  <button 
                      type="button" 
                      className="border border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900 text-white font-medium text-xs sm:text-sm px-6 py-4 rounded-xl flex items-center gap-2.5 font-mono transition-all active:scale-95"
                  >
                      <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center text-[10px]">▶</span>
                      <span>Watch Video</span>
                  </button>
              </div>
          </div>

          {/* Right Column: Image Box */}
          <div className="w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl bg-gray-900">
                  <img 
                      src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80" 
                      alt="Dark futuristic hypercar layout" 
                      className="w-full h-full object-cover object-center"
                  />
              </div>
          </div>
      </div>
  </section>
  <section className="font-sans max-w-[1920px] mx-auto bg-[#0d0f12] text-white py-12 md:py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Top Search Filter Bar */}
                <div className="bg-[#14171c] border border-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Make</label>
                            <select className="w-full bg-[#1c2026] border border-gray-800 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-cyan-500">
                                <option value="">All Makes</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Model</label>
                            <select className="w-full bg-[#1c2026] border border-gray-800 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-cyan-500">
                                <option value="">All Models</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Year</label>
                            <select className="w-full bg-[#1c2026] border border-gray-800 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-cyan-500">
                                <option value="">2024 - 2025</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Max Price</label>
                            <select className="w-full bg-[#1c2026] border border-gray-800 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-cyan-500">
                                <option value="">$250,000</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Body Type</label>
                            <select className="w-full bg-[#1c2026] border border-gray-800 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-cyan-500">
                                <option value="">Coupe</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" className="w-full bg-[#00E5FF] hover:bg-[#00cBE6] text-black font-bold text-xs py-3 rounded-xl uppercase font-mono tracking-wider flex items-center justify-center gap-2 transition-colors">
                                🔍 Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans">
                            THE FEATURED FLEET
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
                            A curated selection of our most advanced engineering achievements, ready for deployment.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" className="w-10 h-10 rounded-xl border border-gray-800 bg-[#14171c] hover:border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            ‹
                        </button>
                        <button type="button" className="w-10 h-10 rounded-xl border border-gray-800 bg-[#14171c] hover:border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            ›
                        </button>
                    </div>
                </div>

                {/* Fleet Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Card 1: Flux-X GT Aero (Large Left Card) */}
                    <div className="lg:col-span-8 bg-[#14171c] border border-gray-800 rounded-3xl overflow-hidden flex flex-col justify-between group">
                        <div className="relative aspect-[16/9] w-full bg-gray-900 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80" 
                                alt="Flux-X GT Aero" 
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#00E5FF] text-black text-[10px] font-bold font-mono px-3 py-1 rounded-md uppercase">
                                    NEW ARRIVAL
                                </span>
                            </div>
                            {/* Floating Info Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-2xl">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Flux-X GT Aero</h3>
                                    <p className="text-[#00E5FF] font-mono text-sm font-semibold">$1,240,000</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-mono text-gray-300 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                    <span>⚡ 2.1s 0-60</span>
                                    <span>🔋 450 MI</span>
                                    <span>⚙️ AWD</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800/80">
                            <p className="text-xs text-gray-400 font-mono">Advanced Magnesium-Alloy Chassis</p>
                            <button type="button" className="w-full sm:w-auto bg-[#20252d] hover:bg-[#282e38] text-white text-xs font-mono px-6 py-2.5 rounded-xl transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Zenith Stealth (Top Right Card) */}
                    <div className="lg:col-span-4 bg-[#14171c] border border-gray-800 rounded-3xl overflow-hidden flex flex-col justify-between group">
                        <div>
                            <div className="relative aspect-[16/10] w-full bg-gray-900 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" 
                                    alt="Zenith Stealth" 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg">
                                    <span className="text-xs font-mono text-gray-300">$185,000</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white">Zenith Stealth</h3>
                                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-gray-400">
                                    <div className="bg-[#1c2026] p-2 rounded-xl border border-gray-800/60">
                                        <p className="text-cyan-400 text-xs mb-0.5">⚡</p>
                                        <p>205 MPH</p>
                                    </div>
                                    <div className="bg-[#1c2026] p-2 rounded-xl border border-gray-800/60">
                                        <p className="text-cyan-400 text-xs mb-0.5">🔋</p>
                                        <p>800V ARCH</p>
                                    </div>
                                    <div className="bg-[#1c2026] p-2 rounded-xl border border-gray-800/60">
                                        <p className="text-cyan-400 text-xs mb-0.5">💺</p>
                                        <p>LUX 4-SEATER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <button type="button" className="w-full bg-[#20252d] hover:bg-[#282e38] text-white text-xs font-mono py-2.5 rounded-xl transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Apex Terrain (Bottom Left Card) */}
                    <div className="lg:col-span-4 bg-[#14171c] border border-gray-800 rounded-3xl overflow-hidden flex flex-col justify-between group">
                        <div>
                            <div className="relative aspect-[16/10] w-full bg-gray-900 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80" 
                                    alt="Apex Terrain" 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg">
                                    <span className="text-xs font-mono text-gray-300">$142,000</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white">Apex Terrain</h3>
                                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-gray-400">
                                    <div className="bg-[#1c2026] p-2 rounded-xl border border-gray-800/60">
                                        <p className="text-cyan-400 text-xs mb-0.5">⛰️</p>
                                        <p>OFF-ROAD MODE</p>
                                    </div>
                                    <div className="bg-[#1c2026] p-2 rounded-xl border border-gray-800/60">
                                        <p className="text-cyan-400 text-xs mb-0.5">⚙️</p>
                                        <p>QUAD-MOTOR</p>
                                    </div>
                                    <div className="bg-[#1c2026] p-2 rounded-xl border border-gray-800/60">
                                        <p className="text-cyan-400 text-xs mb-0.5">☀️</p>
                                        <p>GLASS ROOF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <button type="button" className="w-full bg-[#20252d] hover:bg-[#282e38] text-white text-xs font-mono py-2.5 rounded-xl transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Card 4: Aether Prototype-01 (Bottom Right Card) */}
                    <div className="lg:col-span-8 bg-[#14171c] border border-gray-800 rounded-3xl overflow-hidden relative flex flex-col justify-end group min-h-[350px]">
                        <img 
                            src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80" 
                            alt="Aether Prototype-01" 
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        <div className="relative p-6 sm:p-10 space-y-4 max-w-xl">
                            <span className="text-[#00E5FF] text-[10px] font-bold font-mono tracking-widest uppercase">
                                LIMITED EDITION
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Aether Prototype-01</h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                Experience the pinnacle of aerodynamic mastery with the Aether series. Only 25 units crafted globally.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 pt-2">
                                <span className="text-2xl font-bold font-mono text-white">$2,850,000</span>
                                <button type="button" className="bg-[#00E5FF] hover:bg-[#00cBE6] text-black font-bold text-xs font-mono px-6 py-3 rounded-xl uppercase tracking-wider transition-colors">
                                    Pre-Order Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="font-sans max-w-[1920px] mx-auto bg-[#0d0f12] text-white py-16 md:py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#14171c] border border-gray-800 flex items-center justify-center text-cyan-400 text-xl shadow-lg">
                    🛡️
                </div>
                <h3 className="font-mono text-sm tracking-wider uppercase text-white font-semibold">
                    CERTIFIED WARRANTY
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-normal">
                    Every AERO-G vehicle comes with a lifetime engineering guarantee and 8-year battery warranty.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#14171c] border border-gray-800 flex items-center justify-center text-cyan-400 text-xl shadow-lg">
                    🏛️
                </div>
                <h3 className="font-mono text-sm tracking-wider uppercase text-white font-semibold">
                    INSTANT FINANCING
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-normal">
                    Flexible digital financing with approval in under 60 seconds. Rates starting from 1.99% APR.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#14171c] border border-gray-800 flex items-center justify-center text-cyan-400 text-xl shadow-lg">
                    ↔️
                </div>
                <h3 className="font-mono text-sm tracking-wider uppercase text-white font-semibold">
                    TRADE-IN PROGRAM
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-normal">
                    Upgrade seamlessly. We offer market-leading valuations for your current performance luxury vehicle.
                </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#14171c] border border-gray-800 flex items-center justify-center text-cyan-400 text-xl shadow-lg">
                    🎧
                </div>
                <h3 className="font-mono text-sm tracking-wider uppercase text-white font-semibold">
                    24/7 SUPPORT
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-normal">
                    Direct access to our expert engineering concierge, available globally via encrypted terminal.
                </p>
            </div>
        </div>

        {/* Community / Testimonials Section */}
        <div className="space-y-12">
            {/* Section Heading */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans">
                    THE AERO-G COMMUNITY
                </h2>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Testimonial 1 */}
                <div className="bg-[#14171c] border border-gray-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 text-cyan-400 text-sm">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic font-light">
                            "The transition to electric was something I hesitated on until I drove the Flux-X. It's not just a car; it's a piece of master-class engineering that happens to have four wheels."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                            alt="Marcus Thorne" 
                            className="w-10 h-10 rounded-xl object-cover border border-gray-800"
                        />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-bold text-white">Marcus Thorne</h4>
                                <span className="text-cyan-400 text-[10px]">✓</span>
                            </div>
                            <p className="text-[10px] font-mono text-gray-400 uppercase">TECH FOUNDER</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-[#14171c] border border-gray-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 text-cyan-400 text-sm">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic font-light">
                            "White-glove service from the moment of inquiry to delivery. The attention to detail in the interior craftsmanship is simply unparalleled in the current market."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                            alt="Elena Vance" 
                            className="w-10 h-10 rounded-xl object-cover border border-gray-800"
                        />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-bold text-white">Elena Vance</h4>
                                <span className="text-cyan-400 text-[10px]">✓</span>
                            </div>
                            <p className="text-[10px] font-mono text-gray-400 uppercase">ARCHITECTURAL DIRECTOR</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-[#14171c] border border-gray-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 text-cyan-400 text-sm">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic font-light">
                            "The range estimates are remarkably accurate. Driving through the Alps in a supercar with zero emissions is an experience I'll never forget. Pure technical mastery."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                            alt="Julian Rossi" 
                            className="w-10 h-10 rounded-xl object-cover border border-gray-800"
                        />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-bold text-white">Julian Rossi</h4>
                                <span className="text-cyan-400 text-[10px]">✓</span>
                            </div>
                            <p className="text-[10px] font-mono text-gray-400 uppercase">INVESTOR</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Slider Dots */}
            <div className="flex justify-center items-center gap-2 pt-4">
                <span className="w-8 h-1 bg-cyan-400 rounded-full"></span>
                <span className="w-8 h-1 bg-gray-800 rounded-full"></span>
                <span className="w-8 h-1 bg-gray-800 rounded-full"></span>
            </div>
        </div>

    </div>
</section>
<Footer/>
    </div>
  )
}
