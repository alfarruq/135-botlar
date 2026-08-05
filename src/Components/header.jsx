import React from 'react';

const Header = () => {
    return (
        <header className="bg-[#121214] text-white py-4 px-8 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wider">
                    AERO-G
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wide">
                    <a
                        href="/"
                        className="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-semibold"
                    >
                        Home
                    </a>
                    <a href="/catalog" className="text-gray-300 hover:text-white transition">
                        Catalog
                    </a>
                    <a href="/services" className="text-gray-300 hover:text-white transition">
                        Services
                    </a>
                    <a href="/about" className="text-gray-300 hover:text-white transition">
                        About Us
                    </a>
                    <a href="/blog" className="text-gray-300 hover:text-white transition">
                        Blog
                    </a>
                    <a href="/contact" className="text-gray-300 hover:text-white transition">
                        Contact
                    </a>
                </nav>

                {/* Action Icons and Button */}
                <div className="flex items-center space-x-6">
                    {/* Heart Icon */}
                    <button className="text-gray-300 hover:text-white transition">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>

                    {/* Compare/Transfer Icon */}
                    <button className="text-gray-300 hover:text-white transition">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                            />
                        </svg>
                    </button>

                    {/* CTA Button */}
                    <a
                        href="#book"
                        className="bg-cyan-400 text-black font-semibold font-mono text-xs uppercase px-5 py-2.5 rounded-sm hover:bg-cyan-300 transition"
                    >
                        Book Test Drive
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;