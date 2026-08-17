
import al from '../assets/al.png'
import po from '../assets/li.png'
import React from 'react'

export default function Blog() {
  return (
    <div>
      
      <div className="w-full min-h-screen bg-[#080b11] text-white font-sans flex items-center justify-center p-0 md:p-6">
  {/* Asosiy karta - ekranga moslashuvchan */}
  <div className="w-full max-w-7xl min-h-[90vh] md:min-h-0 border border-dashed border-cyan-500/30 rounded-lg overflow-hidden bg-[#0a0e17] shadow-2xl flex flex-col justify-between">
    
    {/* 1. Yuqori Navigatsiya paneli (Header) */}
    <header className="flex items-center justify-between px-8 py-5 border-b border-gray-900/60 bg-[#090d15] w-full">
      <nav className="flex flex-wrap items-center gap-2 md:gap-4 text-xs font-medium text-gray-400">
        <a href="#" className="bg-[#00f0ff] text-black px-4 py-1.5 rounded-sm font-bold uppercase tracking-wider text-[11px]">
          All Posts
        </a>
        <a href="#" className="px-3 py-1.5 hover:text-white transition-colors">Car Reviews</a>
        <a href="#" className="px-3 py-1.5 hover:text-white transition-colors">Electric Vehicles</a>
        <a href="#" className="px-3 py-1.5 hover:text-white transition-colors">Maintenance Tips</a>
        <a href="#" className="px-3 py-1.5 hover:text-white transition-colors">Industry News</a>
      </nav>
      
      {/* Qidiruv paneli */}
      <div className="relative hidden lg:block">
        <input 
          type="text" 
          placeholder="Search insights..." 
          className="bg-[#0f1522] border border-gray-800 rounded px-4 py-1.5 text-xs w-56 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
        />
      </div>
    </header>

    {/* 2. Asosiy Kontent (Rasm va Matn 50/50 muvozanatda) */}
    <main className="grid grid-cols-1 md:grid-cols-2 flex-grow w-full">
      
      {/* Chap tomon: Avtomobil rasmi (public/car.jpg dan o'qiydi) */}
      <div className="relative min-h-[350px] md:min-h-[600px] h-full bg-[#05070b]">
        <img 
          src="scr{al}" 
          alt="Flux-X Prototype" 
          className="w-full h-full object-cover opacity-75 brightness-90 contrast-110 absolute inset-0 block"
        />
        {/* Rasm ustidagi silliq qoraytirish gradiyenti */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0e17] hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent md:hidden"></div>
      </div>

      {/* O'ng tomon: Maqola matnlari */}
      <div className="p-8 md:p-16 flex flex-col justify-between bg-[#0a0e17] h-full">
        
        <div className="my-auto space-y-6">
          {/* Featured tegi */}
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/10 px-3 py-1 rounded-sm border border-[#00f0ff]/20">
              Featured
            </span>
          </div>
          
          {/* Sarlavha */}
          <h1 className="text-3xl md:text-[44px] font-bold leading-[1.2] text-slate-100 tracking-tight max-w-xl">
            The Aerodynamics of Tomorrow: How the Flux-X Redefines Efficiency
          </h1>
          
          {/* Tavsif */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-lg">
            Deep dive into the fluid dynamics and active aero surfaces that propel our latest prototype beyond the 0.19 drag coefficient barrier.
          </p>
        </div>

        {/* Muallif bloki (public/user.jpg dan o'qiydi) */}
        <div className="flex items-center gap-4 mt-12 pt-6 border-t border-gray-900/60">
          
          <img src={po} alt="" />
          <div>
            <h4 className="text-xs font-semibold text-slate-200 tracking-wide">Dr. Elena Vance</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
              5 MIN READ • MAY 24, 2024
            </p>
          </div>
        </div>

      </div>
    </main>
  </div>
</div>

<div className="w-full bg-[#080b11] text-white font-sans flex flex-col items-center p-0 md:p-6 space-y-12">
  
  {/* ========================================================================= */}
  {/* 1. LATEST DEVELOPMENTS BLOKI (Rasmda ko'k chiziq ichidagi qism) */}
  {/* ========================================================================= */}
  <div className="w-full max-w-7xl border border-dashed border-cyan-500/30 rounded-lg p-6 md:p-8 bg-[#0a0e17] shadow-2xl">
    
    {/* Blok sarlavhasi */}
    <div className="flex items-center gap-4 mb-8">
      <span className="text-gray-600">—</span>
      <h2 className="text-lg md:text-xl font-bold tracking-wide text-slate-200">Latest Developments</h2>
    </div>

    {/* Maqolalar gridi (3 talik kartalar) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* 1-Karta */}
      <div className="border border-gray-900/60 bg-[#090d15] rounded-md overflow-hidden flex flex-col justify-between group cursor-pointer">
        <div>
          <div className="relative h-48 bg-black">
            <img src="/card1.jpg" alt="Solid State" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-black/60 px-2 py-0.5 rounded-sm text-cyan-400 border border-cyan-500/20">Tech</span>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-base font-bold text-slate-100 leading-snug group-hover:text-cyan-400 transition-colors">The Solid State Revolution: Why 1,000 Mile Range is Near</h3>
            <p className="text-gray-500 text-xs leading-relaxed font-light">A technical analysis of the latest breakthroughs in battery chemistry that are set to eliminate range anxiety.</p>
          </div>
        </div>
        <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-900/40 mt-4">
          <div className="flex items-center gap-2">
            <img src="/avatar1.jpg" alt="Marcus" className="w-6 h-6 rounded-full object-cover grayscale" />
            <span className="text-[11px] text-gray-400 font-medium">Marcus Thorne</span>
          </div>
          <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

      {/* 2-Karta */}
      <div className="border border-gray-900/60 bg-[#090d15] rounded-md overflow-hidden flex flex-col justify-between group cursor-pointer">
        <div>
          <div className="relative h-48 bg-black grid grid-cols-3 gap-0.5">
            {/* Rasmda ichki bo'lingan qismlar borligi uchun kichik grid qilindi */}
            <div className="col-span-2 h-full"><img src="/card2_1.jpg" alt="Aero-G" className="w-full h-full object-cover opacity-80" /></div>
            <div className="grid grid-rows-2 gap-0.5 h-full">
              <img src="/card2_2.jpg" alt="Aero-G interior" className="w-full h-full object-cover opacity-80" />
              <img src="/card2_3.jpg" alt="Aero-G detail" className="w-full h-full object-cover opacity-80" />
            </div>
            <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-black/60 px-2 py-0.5 rounded-sm text-cyan-400 border border-cyan-500/20">Reviews</span>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-base font-bold text-slate-100 leading-snug group-hover:text-cyan-400 transition-colors">AERO-G GT-1: The Purest Connection Between Man and Machine</h3>
            <p className="text-gray-500 text-xs leading-relaxed font-light">We take the flagship GT-1 to the Amalfi Coast to see if soul can truly be engineered into a machine.</p>
          </div>
        </div>
        <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-900/40 mt-4">
          <div className="flex items-center gap-2">
            <img src="/avatar2.jpg" alt="Julian" className="w-6 h-6 rounded-full object-cover grayscale" />
            <span className="text-[11px] text-gray-400 font-medium">Julian Ross</span>
          </div>
          <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

      {/* 3-Karta */}
      <div className="border border-gray-900/60 bg-[#090d15] rounded-md overflow-hidden flex flex-col justify-between group cursor-pointer">
        <div>
          <div className="relative h-48 bg-black">
            <img src="/card3.jpg" alt="Gigafactory" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-black/60 px-2 py-0.5 rounded-sm text-cyan-400 border border-cyan-500/20">Industry</span>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-base font-bold text-slate-100 leading-snug group-hover:text-cyan-400 transition-colors">Europe's New Gigafactory: A Strategic Shift in Power</h3>
            <p className="text-gray-500 text-xs leading-relaxed font-light">Understanding the geopolitical and economic impact of the new production hub in Northern Sweden.</p>
          </div>
        </div>
        <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-900/40 mt-4">
          <div className="flex items-center gap-2">
            <img src="/avatar3.jpg" alt="Sarah" className="w-6 h-6 rounded-full object-cover grayscale" />
            <span className="text-[11px] text-gray-400 font-medium">Sarah Chen</span>
          </div>
          <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

    </div>
  </div>

  {/* ========================================================================= */}
  {/* 2. STAY AHEAD OF THE CURVE BLOKI (Email xabarnomasi) */}
  {/* ========================================================================= */}
  <div className="w-full max-w-7xl bg-[#111622] rounded-md p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-900">
    <div className="space-y-4">
      <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-slate-100">Stay Ahead of the Curve.</h2>
      <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-md">
        Get weekly auto market insights and exclusive test-drive news delivered directly to your inbox. No noise, just engineering excellence.
      </p>
    </div>
    <div className="space-y-3 w-full max-w-md md:ml-auto">
      <input 
        type="email" 
        placeholder="email@address.com" 
        className="w-full bg-[#090d15] border border-gray-800 rounded px-4 py-3 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
      />
      <button className="w-full bg-[#00f0ff] hover:bg-cyan-400 text-black text-[11px] font-bold uppercase tracking-wider py-3 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all">
        Subscribe Now
      </button>
      <p className="text-[9px] text-gray-600 tracking-wide text-center md:text-left mt-2 uppercase">Privacy guaranteed. Zero spam. Policy</p>
    </div>
  </div>

  {/* ========================================================================= */}
  {/* 3. FOOTER BLOKI (Eng pastki qism) */}
  {/* ========================================================================= */}
  <footer className="w-full max-w-7xl pt-12 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gray-900 text-gray-500 text-[11px]">
    
    {/* Chap tomon: Logotip va Mualliflik huquqi */}
    <div className="md:col-span-6 space-y-6">
      <h3 className="text-base font-bold text-slate-200 tracking-wider">AERO-G</h3>
      <p className="max-w-xs leading-relaxed uppercase tracking-wider text-[9px] text-gray-600">
        © 2026 AERO-G PERFORMANCE MEDIA. ALL RIGHTS RESERVED.
      </p>
      {/* Ijtimoiy tarmoqlar piktogrammalari o'rni */}
      <div className="flex gap-4 text-xs text-gray-400">
        <span className="cursor-pointer hover:text-white">🌐</span>
        <span className="cursor-pointer hover:text-white">✉️</span>
        <span className="cursor-pointer hover:text-white">🔗</span>
      </div>
    </div>

    {/* O'ng tomon: Linklar guruhlari */}
    <div className="md:col-span-2 space-y-3">
      <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Legal</h4>
      <ul className="space-y-2 font-light">
        <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
      </ul>
    </div>

    <div className="md:col-span-2 space-y-3">
      <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Editorial</h4>
      <ul className="space-y-2 font-light">
        <li><a href="#" className="hover:text-white transition-colors">Editorial Policy</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Advertising</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Archives</a></li>
      </ul>
    </div>

    <div className="md:col-span-2 space-y-3">
      <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Contact</h4>
      <ul className="space-y-2 font-light">
        <li><a href="#" className="hover:text-white transition-colors">Press Office</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
      </ul>
    </div>

  </footer>
</div>

    </div>
  )
}



