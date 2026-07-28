import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassPanel } from '@medicycle/ui';

export default function Dashboard() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Sidebar stagger
    tl.from('.sidebar-item', {
        x: -20,
        opacity: 0,
        stagger: 0.05,
        ease: 'power2.out',
        duration: 0.4
    })
    // Header elements
    .from('.header-item', {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 0.4
    }, "-=0.2")
    // Main welcome text
    .from('.welcome-text', {
        y: 20,
        opacity: 0,
        ease: 'power3.out',
        duration: 0.6
    }, "-=0.2")
    // KPI Cards stagger
    .from('.kpi-card', {
        scale: 0.9,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        duration: 0.6
    }, "-=0.4")
    // Charts and Lists
    .from('.dashboard-panel', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        duration: 0.8
    }, "-=0.4");
    
    // Animate chart bars continuously
    gsap.to('.chart-bar', {
        height: '+=10%',
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
        ease: 'sine.inOut',
        duration: 2
    });

  }, { scope: container });

  return (
    <div ref={container} className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen overflow-x-hidden flex selection:bg-secondary/30 relative">
      
      {/* Deep Background Lights */}
      <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 hidden md:flex flex-col py-lg bg-surface/30 backdrop-blur-2xl border-r border-white/5 z-50 shadow-glass">
        <div className="px-lg mb-xxl sidebar-item">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
            <h1 className="font-display-lg text-headline-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">MediCycle Pro</h1>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant/60 uppercase tracking-widest mt-1">Merchant Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-md">
          <a className="sidebar-item relative flex items-center gap-md px-md py-sm bg-secondary/20 text-secondary border border-secondary/30 rounded-xl transition-all group shadow-[0_0_15px_rgba(139,92,246,0.15)]" href="#">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-label-md text-label-md font-bold">Overview</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-l shadow-neon"></div>
          </a>
          <a className="sidebar-item flex items-center justify-between px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all group" href="#">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span className="font-label-md text-label-md">Inventory</span>
            </div>
            <span className="bg-surface-variant text-[10px] px-2 py-0.5 rounded-full font-bold">142</span>
          </a>
          <a className="sidebar-item flex items-center justify-between px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all group" href="#">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span className="font-label-md text-label-md">Orders</span>
            </div>
            <span className="bg-primary/20 border border-primary/30 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold shadow-neon">12 New</span>
          </a>
          <a className="sidebar-item flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">forum</span>
            <span className="font-label-md text-label-md">Negotiations</span>
          </a>
        </nav>
        
        <div className="px-md mt-auto space-y-4 sidebar-item">
          <GlassPanel intensity="low" className="p-4 border-white/5">
            <div className="flex items-center gap-2 text-primary font-bold text-label-md mb-2 drop-shadow-[0_0_5px_rgba(173,198,255,0.5)]">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> 
              Verified Seller
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden shadow-inner">
              <div className="bg-primary w-full h-full rounded-full shadow-neon"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 font-mono">Compliance Score: 100%</p>
          </GlassPanel>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 flex-1 flex flex-col min-h-screen relative z-10">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-surface/30 backdrop-blur-2xl border-b border-white/5 h-[72px] flex items-center justify-between px-lg shadow-glass-sm">
          <div className="flex items-center gap-4 header-item">
            <div className="relative group hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] group-focus-within:text-secondary transition-colors">search</span>
              <input 
                type="text" 
                placeholder="Search inventory, orders..." 
                className="bg-surface-container/50 backdrop-blur-md rounded-full pl-10 pr-4 py-2 text-body-sm w-64 border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all group-focus-within:shadow-neon"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 header-item">
            <button className="relative w-10 h-10 rounded-full hover:bg-surface-variant flex items-center justify-center transition-all text-on-surface-variant hover:text-secondary hover:shadow-neon">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-background shadow-[0_0_8px_#ffb4ab]"></span>
            </button>
            <div className="h-6 w-px bg-outline-variant/30"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-label-md font-bold text-on-surface group-hover:text-secondary transition-colors">MediTrust Pharmacy</p>
                <p className="text-[10px] text-on-surface-variant font-mono">ID: MC-773-XYZ</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary-container/50 backdrop-blur-md text-secondary flex items-center justify-center border border-secondary/30 font-bold shadow-neon group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                MT
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-lg md:p-xl space-y-xl max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 welcome-text">
            <div>
              <h2 className="text-headline-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-on-surface-variant text-[32px] tracking-tight">Welcome back, Sarah</h2>
              <p className="text-on-surface-variant mt-1 text-body-lg">Here's the quantum state of your pharmacy today.</p>
            </div>
            <div className="flex gap-2">
              <select className="bg-surface/50 backdrop-blur-md border border-outline-variant/30 rounded-lg px-4 py-2 text-label-md text-on-surface font-bold outline-none cursor-pointer hover:border-secondary/50 transition-colors">
                <option>Today</option>
                <option>Last 7 Days</option>
                <option>This Month</option>
              </select>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-lg">
            
            <GlassPanel intensity="medium" className="kpi-card p-lg group hover:border-secondary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                <span className="material-symbols-outlined text-[80px] text-secondary">account_balance_wallet</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Total Sales</p>
              <h3 className="text-display-lg font-black text-on-surface mb-2 relative z-10">$12,450</h3>
              <div className="flex items-center gap-1 text-green-400 text-label-md font-bold relative z-10 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +14.5% <span className="text-on-surface-variant font-normal drop-shadow-none">vs last week</span>
              </div>
            </GlassPanel>

            <GlassPanel intensity="medium" className="kpi-card p-lg group hover:border-primary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                <span className="material-symbols-outlined text-[80px] text-primary">shopping_bag</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Active Orders</p>
              <h3 className="text-display-lg font-black text-on-surface mb-2 relative z-10">48</h3>
              <div className="flex items-center gap-1 text-on-surface-variant text-label-md relative z-10">
                <span className="text-primary font-bold">12</span> pending fulfillment
              </div>
            </GlassPanel>

            <GlassPanel intensity="medium" className="kpi-card p-lg group hover:border-error/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                <span className="material-symbols-outlined text-[80px] text-error">warning</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Expiring Soon</p>
              <h3 className="text-display-lg font-black text-on-surface mb-2 relative z-10">14</h3>
              <div className="flex items-center gap-1 text-error text-label-md font-bold relative z-10 cursor-pointer hover:underline drop-shadow-[0_0_5px_rgba(255,180,171,0.5)]">
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span> Review inventory
              </div>
            </GlassPanel>

            <GlassPanel intensity="medium" className="kpi-card p-lg group hover:border-tertiary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                <span className="material-symbols-outlined text-[80px] text-tertiary">star</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Seller Rating</p>
              <h3 className="text-display-lg font-black text-on-surface mb-2 relative z-10 flex items-end gap-2">4.9 <span className="text-title-md text-on-surface-variant mb-2 font-normal">/ 5.0</span></h3>
              <div className="flex items-center gap-1 text-tertiary text-label-md font-bold relative z-10 drop-shadow-[0_0_5px_rgba(255,183,134,0.5)]">
                Top 5% in Global Network
              </div>
            </GlassPanel>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-lg">
            
            {/* Holographic Chart Area */}
            <GlassPanel intensity="high" className="dashboard-panel xl:col-span-2 p-lg flex flex-col h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-bold text-on-surface">Revenue Over Time</h3>
              </div>
              
              <div className="flex-1 relative w-full flex items-end justify-between gap-2 px-2 pb-6 border-b border-outline-variant/20">
                <div className="absolute left-0 bottom-6 w-full h-[1px] border-b border-dashed border-outline-variant/10"></div>
                <div className="absolute left-0 top-1/2 w-full h-[1px] border-b border-dashed border-outline-variant/10"></div>
                
                {/* Bars */}
                <div className="chart-bar w-1/12 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 rounded-t-lg h-[30%] relative group cursor-pointer transition-all">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[12px] opacity-0 group-hover:opacity-100 font-mono shadow-glass-sm transition-opacity pointer-events-none">$1.2k</div>
                </div>
                <div className="chart-bar w-1/12 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 rounded-t-lg h-[45%] relative group cursor-pointer transition-all"></div>
                <div className="chart-bar w-1/12 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 rounded-t-lg h-[35%] relative group cursor-pointer transition-all"></div>
                <div className="chart-bar w-1/12 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 rounded-t-lg h-[60%] relative group cursor-pointer transition-all"></div>
                <div className="chart-bar w-1/12 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 rounded-t-lg h-[50%] relative group cursor-pointer transition-all"></div>
                <div className="chart-bar w-1/12 bg-gradient-to-t from-secondary/50 to-secondary border border-secondary/80 shadow-neon rounded-t-lg h-[85%] relative group cursor-pointer transition-all">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary border border-white/20 px-2 py-1 rounded text-[12px] text-on-secondary font-bold font-mono shadow-neon pointer-events-none">$3.4k</div>
                </div>
                <div className="chart-bar w-1/12 bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 rounded-t-lg h-[40%] relative group cursor-pointer transition-all"></div>
              </div>
              <div className="flex justify-between text-[10px] text-on-surface-variant uppercase font-bold mt-2 px-2 font-mono">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="text-secondary drop-shadow-[0_0_5px_rgba(208,188,255,0.5)]">Sat</span><span>Sun</span>
              </div>
            </GlassPanel>

            {/* Recent Orders List */}
            <GlassPanel intensity="high" className="dashboard-panel p-lg flex flex-col h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-bold text-on-surface">Live Stream</h3>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/30 border border-white/5 hover:border-secondary/30 hover:shadow-[0_0_15px_rgba(208,188,255,0.1)] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[20px]">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-label-md font-bold text-on-surface font-mono">ORD-8821</p>
                      <p className="text-[11px] text-on-surface-variant">2m ago • Amoxicillin</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-label-md font-bold text-secondary font-mono">$24.50</p>
                    <span className="text-[9px] bg-secondary/20 text-secondary border border-secondary/30 px-2 py-0.5 rounded font-bold tracking-widest uppercase">New</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/30 border border-white/5 hover:border-tertiary/30 hover:shadow-[0_0_15px_rgba(255,183,134,0.1)] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/20 border border-tertiary/30 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">sync</span>
                    </div>
                    <div>
                      <p className="text-label-md font-bold text-on-surface font-mono">ORD-8820</p>
                      <p className="text-[11px] text-on-surface-variant">15m ago • Ibuprofen</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-label-md font-bold text-tertiary font-mono">$12.99</p>
                    <span className="text-[9px] bg-tertiary/20 text-tertiary border border-tertiary/30 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Process</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/10 border border-white/5 opacity-60 hover:opacity-100 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-green-400 text-[20px]">done_all</span>
                    </div>
                    <div>
                      <p className="text-label-md font-bold text-on-surface font-mono">ORD-8819</p>
                      <p className="text-[11px] text-on-surface-variant">1h ago • Lisinopril</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-label-md font-bold text-green-400 font-mono">$45.00</p>
                    <span className="text-[9px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Done</span>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
          
        </div>
      </main>
    </div>
  );
}
