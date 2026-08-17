import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#0d0f12] text-white font-sans pt-16 pb-12 px-6 md:px-16 border-t border-gray-900">
            <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Top Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    
                    {/* Column 1: Brand Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-2xl font-black tracking-wider text-white font-sans uppercase">
                            AERO-G
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            Redefining the boundaries of performance engineering for the next generation of elite drivers.
                        </p>
                        {/* Social / Action Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#globe" className="w-9 h-9 rounded-xl bg-[#14171c] border border-gray-800 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 text-xs transition-colors">
                                🌐
                            </a>
                            <a href="#share" className="w-9 h-9 rounded-xl bg-[#14171c] border border-gray-800 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 text-xs transition-colors">
                                <span className="transform -rotate-45">➤</span>
                            </a>
                            <a href="#mail" className="w-9 h-9 rounded-xl bg-[#14171c] border border-gray-800 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 text-xs transition-colors">
                                ✉️
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-semibold">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-xs sm:text-sm text-gray-400 font-medium">
                            <li>
                                <a href="#catalog" className="hover:text-white transition-colors">Catalog</a>
                            </li>
                            <li>
                                <a href="#electric-fleet" className="hover:text-white transition-colors">Electric Fleet</a>
                            </li>
                            <li>
                                <a href="#trade-in" className="hover:text-white transition-colors">Trade-In</a>
                            </li>
                            <li>
                                <a href="#financing" className="hover:text-white transition-colors">Financing</a>
                            </li>
                            <li>
                                <a href="#careers" className="hover:text-white transition-colors">Careers</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-semibold">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-xs sm:text-sm text-gray-400 font-medium">
                            <li>
                                <a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a>
                            </li>
                            <li>
                                <a href="#cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#media-kit" className="hover:text-white transition-colors">Media Kit</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Input */}
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-semibold">
                            Join the Newsletter
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            Stay updated with exclusive prototypes and engineering breakthroughs.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center pt-2">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-[#14171c] border border-gray-800 border-r-0 rounded-l-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                            />
                            <button 
                                type="submit" 
                                className="bg-[#00E5FF] hover:bg-[#00cBE6] text-black px-4 py-3 rounded-r-xl transition-colors font-bold text-sm flex items-center justify-center shrink-0"
                            >
                                ➔
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="pt-8 border-t border-gray-900/80 text-center">
                    <p className="text-[11px] text-gray-500 font-mono">
                        © 2024 AERO-G Performance Engineering. All rights reserved. Built for those who lead.
                    </p>
                </div>

            </div>
        </footer>
    );
}