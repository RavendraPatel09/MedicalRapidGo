import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AddMedicine() {
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Simulate AI extraction delay
    const timer = setTimeout(() => {
      setIsVerifying(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-body-md selection:bg-primary/30 overflow-hidden h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="w-full z-50 backdrop-blur-md border-b border-outline-variant/10 shadow-sm flex justify-between items-center px-lg h-[64px] bg-[#10131a]/80">
        <div className="flex items-center gap-xl w-full max-w-container-max mx-auto">
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MediCycle</span>
          <div className="hidden md:flex gap-lg">
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-all" href="#">Marketplace</a>
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-all" href="#">Pharmacists</a>
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md" href="#">Orders</a>
          </div>
          
          <div className="flex items-center gap-md ml-auto">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-2 w-64 text-body-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" placeholder="Quick search inventory..." type="text"/>
            </div>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
            <div className="flex items-center gap-sm pl-md border-l border-outline-variant/20">
              <img className="w-8 h-8 rounded-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWjV4T097V-q64fQcsVVd7zc1vRUMnDX-9eLS_fX7Hk2DvUC566DxmCO2eQJMJgfHvcKDfHhZ-WkME0waQowoeqO6d3fSkKwkGwwYFgJuoJrG0wLqTESnvvbmMT1BZRWM3VcuzSk9_9YmpV8yetYOjMztNKUb5RfBsfuP6I7qlBNtCDtuPdRvmTYZv_PGbkHXw75KDVgzHaGIVgUP_ihuLAguM3DQJQLMvhBLkJZbdsvxZ8OkaHwVWl_1MwDUGqHMKWqxe9NEBMNxL"/>
              <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar */}
        <aside className="h-full w-64 bg-surface-container-low border-r border-outline-variant/20 flex flex-col py-lg shrink-0">
          <div className="px-lg mb-xl">
            <div className="flex items-center gap-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm font-bold text-primary">MediCycle Pro</h2>
                <p className="text-[10px] uppercase tracking-widest text-outline">Verified Merchant</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 px-md space-y-1">
            <a className="flex items-center gap-md px-lg py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-label-md text-label-md" href="#">
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
            <a className="flex items-center gap-md px-lg py-3 rounded-xl text-primary font-bold border-r-2 border-primary bg-primary/5 font-label-md text-label-md" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>inventory_2</span> Inventory
            </a>
            <a className="flex items-center gap-md px-lg py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-label-md text-label-md" href="#">
              <span className="material-symbols-outlined">shopping_cart</span> Orders
            </a>
            <a className="flex items-center gap-md px-lg py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-label-md text-label-md" href="#">
              <span className="material-symbols-outlined">insights</span> Analytics
            </a>
            <a className="flex items-center gap-md px-lg py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-label-md text-label-md" href="#">
              <span className="material-symbols-outlined">settings</span> Settings
            </a>
          </nav>
          
          <div className="px-md mt-auto">
            <button className="w-full bg-primary-container text-on-primary-container font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">add</span> Add New Product
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 relative flex">
          {/* Scan & Verify Interface */}
          <div className="flex-1 h-full p-lg flex flex-col gap-lg">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-end">
              <div>
                <h1 className="font-headline-md text-headline-md text-on-surface">AI Smart Scan</h1>
                <p className="text-on-surface-variant font-body-sm">Place the medicine box within the frame for instant verification.</p>
              </div>
              <div className="flex gap-sm">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold text-primary flex items-center gap-1 border border-primary/20">
                  <span className="material-symbols-outlined text-xs">auto_awesome</span> AI ACTIVE
                </span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold text-outline flex items-center gap-1">
                  FPS: 60
                </span>
              </div>
            </div>

            {/* Camera Viewport Container */}
            <div className="flex-1 relative rounded-[20px] overflow-hidden bg-surface-container-lowest border border-outline-variant/20 shadow-2xl group">
              {/* Simulated Camera Feed */}
              <div className="absolute inset-0 z-0">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAG1Kjk565FFTkZUjpcYlK-0DepdunMppMUJNPlMxO7PxufNsUeZWBdOwQy9nvaDzC9hkrlkdJmYtyvxKlxhT6MzG5FauTEIE4GdGPbmlGwv0yixHD_A485OjxjgKHYEs8o_qv3DWlwlnyprWyx_gDGu4gzKSrjEcpXsQZGcvjcO74AGRCmfHq9GKqqNhCPVbW5pnrQyApDjujBy9uEDPKzWJfIaxKJLFmU3K1vlburgqRrUJ14nwR-bJq8GLUlHEpRw8fOevLN_Qjg')"}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
              </div>

              {/* Scanning Frame UI Overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="relative w-[80%] h-[70%] border-2 border-primary/30 rounded-2xl">
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(173,198,255,0.8)]"
                  />

                  {/* Hotspots */}
                  <div className="absolute top-[60%] right-[20%] group/hotspot pointer-events-auto">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6], boxShadow: ['0 0 0px rgba(173,198,255,0)', '0 0 20px rgba(173,198,255,0.8)', '0 0 0px rgba(173,198,255,0)'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-4 h-4 bg-primary rounded-full"
                    />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-md text-[10px] text-primary font-bold whitespace-nowrap opacity-0 group-hover/hotspot:opacity-100 transition-opacity">
                      EXPIRY DATE
                    </div>
                  </div>

                  <div className="absolute bottom-[25%] left-[30%] group/hotspot pointer-events-auto">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6], boxShadow: ['0 0 0px rgba(173,198,255,0)', '0 0 20px rgba(173,198,255,0.8)', '0 0 0px rgba(173,198,255,0)'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="w-4 h-4 bg-primary rounded-full"
                    />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-md text-[10px] text-primary font-bold whitespace-nowrap opacity-0 group-hover/hotspot:opacity-100 transition-opacity">
                      BATCH NO.
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-[50%] group/hotspot pointer-events-auto">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6], boxShadow: ['0 0 0px rgba(255,183,134,0)', '0 0 20px rgba(255,183,134,0.8)', '0 0 0px rgba(255,183,134,0)'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                      className={`w-4 h-4 ${isVerifying ? 'bg-tertiary' : 'bg-primary'} rounded-full`}
                    />
                    <div className={`absolute top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-md text-[10px] ${isVerifying ? 'text-tertiary' : 'text-primary'} font-bold whitespace-nowrap opacity-0 group-hover/hotspot:opacity-100 transition-opacity`}>
                      {isVerifying ? 'VERIFYING DOSAGE...' : 'DOSAGE CONFIRMED'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidance Overlay */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center space-y-2">
                <motion.div 
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 px-6 py-3 rounded-full text-white/90 font-label-md flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  Align the expiry date within the frame
                </motion.div>
                <p className="text-white/60 text-[12px] font-body-sm">Ensure good lighting for maximum accuracy</p>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-6 right-6 z-20 flex gap-md">
                <button className="w-12 h-12 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <span className="material-symbols-outlined">zoom_in</span>
                </button>
                <button className="w-12 h-12 bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <span className="material-symbols-outlined">flash_on</span>
                </button>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-md">
                <div className="flex items-center gap-2 text-on-surface-variant text-body-sm">
                  <motion.span 
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                  AI Processing Engine v4.2
                </div>
              </div>
              <div className="flex items-center gap-xl">
                <a className="text-on-surface-variant font-label-md hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30" href="#">Manual Entry</a>
                <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-xl shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
                  Capture &amp; Finalize
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Extraction Sidebar */}
          <aside className="w-[380px] h-full bg-[rgba(17,24,39,0.7)] backdrop-blur-[20px] border-l border-outline-variant/10 p-lg flex flex-col gap-xl z-20">
            <div className="space-y-1">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Real-time Extraction</h3>
              <p className="text-on-surface-variant text-body-sm">Verify the data detected by MediCycle AI</p>
            </div>
            
            <div className="flex-1 space-y-6 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/20">
              
              {/* Extraction Card 1 */}
              <div className="bg-surface-container-high rounded-[20px] p-md border border-outline-variant/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Expiry Date</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-primary">
                    <span className="material-symbols-outlined text-xs">check_circle</span> CONFIRMED
                  </span>
                </div>
                <div className="text-headline-sm font-bold text-on-surface mb-1">Oct 2025</div>
                <div className="text-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">precision_manufacturing</span> 99.8% Confidence
                </div>
              </div>

              {/* Extraction Card 2 */}
              <div className="bg-surface-container-high rounded-[20px] p-md border border-outline-variant/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Batch Number</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-primary">
                    <span className="material-symbols-outlined text-xs">check_circle</span> CONFIRMED
                  </span>
                </div>
                <div className="text-headline-sm font-bold text-on-surface mb-1">#MC-AMOX-500-24</div>
                <div className="text-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">history</span> Matched with records
                </div>
              </div>

              {/* Extraction Card 3 (Processing) */}
              <div className={`${isVerifying ? 'bg-surface-container-high/40' : 'bg-surface-container-high'} rounded-[20px] p-md border border-outline-variant/10 relative overflow-hidden group transition-colors duration-500`}>
                <div className={`absolute top-0 left-0 w-1 h-full ${isVerifying ? 'bg-tertiary animate-pulse' : 'bg-primary'}`}></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Dosage</span>
                  {isVerifying ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-tertiary italic">
                      <motion.span 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="material-symbols-outlined text-xs"
                      >
                        refresh
                      </motion.span> VERIFYING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-primary">
                      <span className="material-symbols-outlined text-xs">check_circle</span> CONFIRMED
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className={`text-headline-sm font-bold ${isVerifying ? 'text-on-surface/50 blur-[1px]' : 'text-on-surface'} mb-1 transition-all duration-500`}>500mg</div>
                  <div className="h-2 flex-1 bg-surface-variant rounded-full overflow-hidden">
                    {isVerifying ? (
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-full bg-tertiary w-full"
                      />
                    ) : (
                      <div className="h-full bg-primary w-full"></div>
                    )}
                  </div>
                </div>
                <div className="text-body-sm text-on-surface-variant">
                  {isVerifying ? 'Parsing concentration units...' : 'Concentration units parsed successfully.'}
                </div>
              </div>

              {/* Compliance Section */}
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant/20 flex items-center justify-center text-on-secondary-fixed-variant">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <div className="text-body-sm font-bold text-on-surface">Compliance Check</div>
                    <div className="text-[12px] text-on-surface-variant">FDA &amp; GMP Regulations</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-on-surface-variant">Serialization Match</span>
                    <span className="text-primary font-bold">Passed</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-on-surface-variant">Counterfeit Analysis</span>
                    <span className="text-primary font-bold">Secure</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-on-surface-variant">Regulatory Alert</span>
                    <span className="text-error font-bold">None</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-lg">
              <p className="text-[11px] text-center text-on-surface-variant italic leading-relaxed">
                By capturing, you confirm that the extracted data matches the physical packaging exactly. 
                MediCycle is not responsible for manual verification errors.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
