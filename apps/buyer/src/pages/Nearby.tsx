import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Nearby() {
  const [radius, setRadius] = useState(5);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  return (
    <div className="font-body-md text-body-md bg-[#0B1120] text-[#e1e2ec] overflow-hidden h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 hidden md:flex flex-col py-lg bg-surface-dim/80 backdrop-blur-2xl border-r border-white/5 z-50">
        <div className="px-lg mb-xxl">
          <h1 className="font-display-lg text-headline-md text-primary tracking-tighter">MediCycle</h1>
          <p className="text-label-md font-label-md text-on-surface-variant/60 uppercase tracking-widest mt-1">Premium Health-Tech</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-md">
          <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">storefront</span>
            <span className="font-label-md text-label-md">Marketplace</span>
          </a>
          {/* Active Tab */}
          <a className="relative flex items-center gap-md px-md py-sm bg-primary-container/20 text-primary rounded-xl transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">distance</span>
            <span className="font-label-md text-label-md">Nearby</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-l"></div>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">receipt_long</span>
            <span className="font-label-md text-label-md">Orders</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </nav>
        
        <div className="px-md mt-auto">
          <button className="w-full py-md bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            Become a Seller
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 flex w-full h-screen overflow-hidden">
        {/* Left Section: Pharmacy List (1/3) */}
        <section className="w-full md:w-[420px] flex flex-col bg-surface border-r border-white/5 z-20 shrink-0">
          {/* Header & Filters */}
          <header className="p-lg space-y-lg border-b border-white/5 bg-surface/50 backdrop-blur-md sticky top-0">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-headline-md text-on-surface">Nearby Pharmacies</h2>
              <span className="material-symbols-outlined text-primary cursor-pointer">tune</span>
            </div>
            
            <div className="space-y-md">
              <div>
                <div className="flex justify-between items-center mb-sm">
                  <label className="text-label-md font-label-md text-on-surface-variant uppercase">Radius</label>
                  <span className="text-label-md font-label-md text-primary">{radius}km</span>
                </div>
                <input 
                  type="range" 
                  min="2" max="20" step="1" 
                  value={radius}
                  onChange={(e) => setRadius(parseInt(e.target.value))}
                  className="w-full h-1 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary" 
                />
              </div>
              
              <div className="flex items-center justify-between p-sm bg-surface-container-low rounded-xl border border-white/5">
                <span className="text-body-sm font-label-md text-on-surface ml-sm">MediCycle Guard Verified</span>
                <button 
                  onClick={() => setVerifiedOnly(!verifiedOnly)}
                  className={`w-10 h-5 rounded-full relative p-0.5 transition-colors duration-300 ${verifiedOnly ? 'bg-primary/20' : 'bg-surface-container-highest'}`}
                >
                  <div className={`w-4 h-4 bg-primary rounded-full transition-transform duration-300 ${verifiedOnly ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>
          </header>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/20 p-md space-y-md">
            
            {/* Card 1 */}
            <div className="bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 shadow-lg p-md rounded-[20px] hover:border-primary/30 transition-all group cursor-pointer">
              <div className="flex justify-between items-start mb-md">
                <div className="space-y-xs">
                  <div className="flex items-center gap-sm">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">MediTrust Pharmacy</h3>
                    <span className="material-symbols-outlined text-primary text-[18px]" style={{fontVariationSettings: "'FILL' 1"}} title="MediCycle Guard Verified">verified</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">0.8 km • New York, Midtown</p>
                </div>
                <span className="px-sm py-xs bg-green-500/10 text-green-400 text-label-md font-label-md rounded-full border border-green-500/20">Open Now</span>
              </div>
              
              <div className="flex items-center gap-lg mb-lg">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant uppercase text-[10px] tracking-widest">Trust Score</span>
                  <span className="font-headline-sm text-primary">99.8%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant uppercase text-[10px] tracking-widest">Inventory</span>
                  <span className="font-headline-sm text-on-surface">High</span>
                </div>
              </div>
              
              <button className="w-full py-sm bg-surface-container-highest hover:bg-primary hover:text-on-primary transition-all rounded-xl font-label-md text-label-md border border-white/5">
                View Inventory
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 shadow-lg p-md rounded-[20px] hover:border-primary/30 transition-all group cursor-pointer">
              <div className="flex justify-between items-start mb-md">
                <div className="space-y-xs">
                  <div className="flex items-center gap-sm">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">City General Hospital</h3>
                    <span className="material-symbols-outlined text-primary text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">1.4 km • Queens, 1st Ave</p>
                </div>
                <span className="px-sm py-xs bg-green-500/10 text-green-400 text-label-md font-label-md rounded-full border border-green-500/20">Open Now</span>
              </div>
              
              <div className="flex items-center gap-lg mb-lg">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant uppercase text-[10px] tracking-widest">Trust Score</span>
                  <span className="font-headline-sm text-primary">98.2%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant uppercase text-[10px] tracking-widest">Inventory</span>
                  <span className="font-headline-sm text-on-surface">Full</span>
                </div>
              </div>
              
              <button className="w-full py-sm bg-surface-container-highest hover:bg-primary hover:text-on-primary transition-all rounded-xl font-label-md text-label-md border border-white/5">
                View Inventory
              </button>
            </div>

            {/* Card 3 */}
            {(!verifiedOnly) && (
              <div className="bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 shadow-lg p-md rounded-[20px] hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-md">
                  <div className="space-y-xs">
                    <div className="flex items-center gap-sm">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Wellness First Pharma</h3>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">2.1 km • Upper West Side</p>
                  </div>
                  <span className="px-sm py-xs bg-error/10 text-error text-label-md font-label-md rounded-full border border-error/20">Closing Soon</span>
                </div>
                
                <div className="flex items-center gap-lg mb-lg">
                  <div className="flex flex-col">
                    <span className="text-label-md text-on-surface-variant uppercase text-[10px] tracking-widest">Trust Score</span>
                    <span className="font-headline-sm text-primary">94.5%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-md text-on-surface-variant uppercase text-[10px] tracking-widest">Inventory</span>
                    <span className="font-headline-sm text-on-surface">Med</span>
                  </div>
                </div>
                
                <button className="w-full py-sm bg-surface-container-highest hover:bg-primary hover:text-on-primary transition-all rounded-xl font-label-md text-label-md border border-white/5">
                  View Inventory
                </button>
              </div>
            )}
            
            <div className="h-16"></div>
          </div>
        </section>

        {/* Right Section: Interactive Map (2/3) */}
        <section className="hidden md:flex flex-1 relative bg-surface-container-lowest overflow-hidden">
          {/* Map Placeholder / Background */}
          <div className="absolute inset-0 z-0 bg-[#0B1120]">
            <div 
              className="w-full h-full opacity-60 bg-cover bg-center" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTF52inyMS8Vk0zwwaeLAKkbsqL5gdBFIUgKzJ1M_kUF6VXJs4GjSIRWbtuPHOGUE4ps9TCDGkfIt0ONBhEpzTWlJ0R8U98N2dtdqxuO_6gGsl_z8AbXE_i6aJ_jv4TmFYMz4FeiRcqsCGL3GKzwZnikUvFHSNEFS4TufJLXyYTdREDqV-SfRyHGQTcollZ5Po3qMUd2LCo7wPD4-ZSDM5_hVfeYlIlAg2C7P5aUCng3xOJrH4WqBmYFeMjSfpmjf79y-I5luI4Lr5')"}}
            />
          </div>

          {/* Custom Map Overlays (Pins) */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            
            {/* Pin 1 */}
            <div className="absolute top-[35%] left-[40%] pointer-events-auto group">
              <div className="relative flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-4 bg-primary/20 rounded-full z-0"
                />
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-surface z-10 shadow-[0_0_8px_rgba(59,130,246,0.6)] cursor-pointer group-hover:scale-125 transition-transform">
                  <span className="material-symbols-outlined text-on-primary text-[16px]">local_pharmacy</span>
                </div>
                <div className="mt-xs px-sm py-1 bg-surface-dim/90 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                  <span className="text-label-md text-on-surface">MediTrust Pharmacy</span>
                </div>
              </div>
            </div>

            {/* Pin 2 */}
            <div className="absolute top-[55%] left-[65%] pointer-events-auto group">
              <div className="relative flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -inset-6 bg-secondary/10 rounded-full z-0"
                />
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-surface z-10 shadow-[0_0_8px_rgba(139,92,246,0.6)] cursor-pointer group-hover:scale-125 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary text-[16px]">festival</span>
                </div>
                <div className="mt-xs px-sm py-1 bg-surface-dim/90 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                  <span className="text-label-md text-on-surface">City General Hospital</span>
                </div>
              </div>
            </div>

            {/* Pin 3 */}
            {(!verifiedOnly) && (
              <div className="absolute top-[20%] left-[55%] pointer-events-auto group">
                <div className="relative flex flex-col items-center">
                  <div className="w-8 h-8 bg-surface-variant rounded-full flex items-center justify-center border-2 border-surface z-10 shadow-lg cursor-pointer group-hover:scale-125 transition-transform">
                    <span className="material-symbols-outlined text-on-surface-variant text-[16px]">local_pharmacy</span>
                  </div>
                  <div className="mt-xs px-sm py-1 bg-surface-dim/90 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                    <span className="text-label-md text-on-surface">Wellness First Pharma</span>
                  </div>
                </div>
              </div>
            )}
            
          </div>

          {/* Map UI Controls */}
          <div className="absolute bottom-lg right-lg z-30 flex flex-col gap-sm">
            <button className="w-12 h-12 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-xl flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface shadow-lg">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-12 h-12 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-xl flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface shadow-lg">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button className="w-12 h-12 bg-primary text-on-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
          
          <div className="absolute top-lg right-lg z-30 flex gap-sm">
            <div className="bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 px-md py-sm rounded-xl flex items-center gap-sm shadow-lg">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-primary"
              />
              <span className="text-label-md font-label-md text-on-surface">Real-time Stock Tracking Active</span>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation (Bottom Bar) */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface-container-low/70 backdrop-blur-lg border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-90 transition-all" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-md font-label-md">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-xl p-2 active:scale-90 transition-all" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
          <span className="text-label-md font-label-md">Nearby</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-90 transition-all" href="#">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-label-md font-label-md">Chat</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-90 transition-all" href="#">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-label-md font-label-md">Profile</span>
        </a>
      </nav>
    </div>
  );
}
