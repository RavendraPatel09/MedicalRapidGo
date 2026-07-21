import React from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen overflow-x-hidden flex selection:bg-secondary/30">
      
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 hidden md:flex flex-col py-lg bg-surface-dim/80 backdrop-blur-2xl border-r border-white/5 z-50">
        <div className="px-lg mb-xxl">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
            <h1 className="font-display-lg text-headline-sm text-on-surface font-bold">MediCycle Pro</h1>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant/60 uppercase tracking-widest mt-1">Merchant Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-md">
          {/* Active Tab */}
          <a className="relative flex items-center gap-md px-md py-sm bg-secondary-container/20 text-secondary rounded-xl transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-label-md text-label-md font-bold">Overview</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-l"></div>
          </a>
          <a className="flex items-center justify-between px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span className="font-label-md text-label-md">Inventory</span>
            </div>
            <span className="bg-surface-variant text-[10px] px-2 py-0.5 rounded-full font-bold">142</span>
          </a>
          <a className="flex items-center justify-between px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span className="font-label-md text-label-md">Orders</span>
            </div>
            <span className="bg-secondary/20 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">12 New</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">forum</span>
            <span className="font-label-md text-label-md">Negotiations</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:bg-white/5 transition-all group" href="#">
            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            <span className="font-label-md text-label-md">Earnings</span>
          </a>
        </nav>
        
        <div className="px-md mt-auto space-y-4">
          <div className="p-4 bg-surface-container rounded-xl border border-white/5">
            <div className="flex items-center gap-2 text-primary font-bold text-label-md mb-2">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> 
              Verified Seller
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary w-full h-full rounded-full"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2">Compliance Score: 100%</p>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-md bg-secondary text-on-secondary font-label-md text-label-md rounded-xl shadow-lg hover:shadow-secondary/20 transition-all active:scale-95 font-bold">
            <span className="material-symbols-outlined text-[18px]">add</span> Add Medicine
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 flex-1 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5 h-[72px] flex items-center justify-between px-lg">
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input 
                type="text" 
                placeholder="Search inventory, orders..." 
                className="bg-surface-container rounded-full pl-10 pr-4 py-2 text-body-sm w-64 border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 rounded-full hover:bg-surface-variant flex items-center justify-center transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-background"></span>
            </button>
            <div className="h-6 w-px bg-outline-variant/30"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-label-md font-bold text-on-surface group-hover:text-secondary transition-colors">MediTrust Pharmacy</p>
                <p className="text-[10px] text-on-surface-variant">ID: MC-773-XYZ</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center border border-secondary/20 font-bold">
                MT
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-lg md:p-xl space-y-xl max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-headline-md font-bold text-on-surface">Welcome back, Sarah</h2>
              <p className="text-on-surface-variant mt-1">Here's what's happening with your pharmacy today.</p>
            </div>
            <div className="flex gap-2">
              <select className="bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-2 text-label-md text-on-surface font-bold outline-none cursor-pointer">
                <option>Today</option>
                <option>Last 7 Days</option>
                <option>This Month</option>
              </select>
              <button className="px-4 py-2 bg-surface-container hover:bg-surface-variant border border-outline-variant/30 rounded-lg text-on-surface transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span> Export
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-lg">
            
            {/* KPI 1 */}
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} className="bg-surface-container-lowest border border-white/5 p-lg rounded-[20px] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[64px] text-secondary">account_balance_wallet</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Total Sales</p>
              <h3 className="text-display-sm font-bold text-on-surface mb-2 relative z-10">$12,450</h3>
              <div className="flex items-center gap-1 text-green-400 text-label-md font-bold relative z-10">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +14.5% <span className="text-on-surface-variant font-normal">vs last week</span>
              </div>
            </motion.div>

            {/* KPI 2 */}
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="bg-surface-container-lowest border border-white/5 p-lg rounded-[20px] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[64px] text-primary">shopping_bag</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Active Orders</p>
              <h3 className="text-display-sm font-bold text-on-surface mb-2 relative z-10">48</h3>
              <div className="flex items-center gap-1 text-on-surface-variant text-label-md relative z-10">
                12 pending fulfillment
              </div>
            </motion.div>

            {/* KPI 3 */}
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="bg-surface-container-lowest border border-white/5 p-lg rounded-[20px] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[64px] text-error">warning</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Expiring Soon</p>
              <h3 className="text-display-sm font-bold text-on-surface mb-2 relative z-10">14</h3>
              <div className="flex items-center gap-1 text-error text-label-md font-bold relative z-10">
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span> Review inventory
              </div>
            </motion.div>

            {/* KPI 4 */}
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="bg-surface-container-lowest border border-white/5 p-lg rounded-[20px] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[64px] text-tertiary">star</span>
              </div>
              <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest mb-2 relative z-10">Seller Rating</p>
              <h3 className="text-display-sm font-bold text-on-surface mb-2 relative z-10 flex items-end gap-2">4.9 <span className="text-title-md text-on-surface-variant mb-1 font-normal">/ 5.0</span></h3>
              <div className="flex items-center gap-1 text-tertiary text-label-md font-bold relative z-10">
                Top 5% in New York
              </div>
            </motion.div>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-lg">
            
            {/* Main Chart Area */}
            <div className="xl:col-span-2 bg-surface-container-lowest border border-white/5 rounded-[24px] p-lg flex flex-col h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-bold text-on-surface">Revenue Over Time</h3>
                <button className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              
              {/* Simulated Chart */}
              <div className="flex-1 relative w-full flex items-end justify-between gap-2 px-2 pb-6 border-b border-outline-variant/20">
                <div className="absolute left-0 bottom-6 w-full h-[1px] border-b border-dashed border-outline-variant/10"></div>
                <div className="absolute left-0 top-1/2 w-full h-[1px] border-b border-dashed border-outline-variant/10"></div>
                <div className="absolute left-0 top-0 w-full h-[1px] border-b border-dashed border-outline-variant/10"></div>
                
                {/* Bars */}
                <div className="w-1/12 bg-secondary-container/30 hover:bg-secondary/40 rounded-t-sm h-[30%] relative group cursor-pointer transition-all">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100">$1.2k</div>
                </div>
                <div className="w-1/12 bg-secondary-container/30 hover:bg-secondary/40 rounded-t-sm h-[45%] relative group cursor-pointer transition-all">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100">$1.8k</div>
                </div>
                <div className="w-1/12 bg-secondary-container/30 hover:bg-secondary/40 rounded-t-sm h-[35%] relative group cursor-pointer transition-all"></div>
                <div className="w-1/12 bg-secondary-container/30 hover:bg-secondary/40 rounded-t-sm h-[60%] relative group cursor-pointer transition-all"></div>
                <div className="w-1/12 bg-secondary-container/30 hover:bg-secondary/40 rounded-t-sm h-[50%] relative group cursor-pointer transition-all"></div>
                <div className="w-1/12 bg-secondary text-on-secondary shadow-[0_0_15px_rgba(139,92,246,0.3)] rounded-t-sm h-[85%] relative group cursor-pointer transition-all">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary border border-white/10 px-2 py-1 rounded text-[10px] text-on-secondary font-bold">$3.4k</div>
                </div>
                <div className="w-1/12 bg-secondary-container/30 hover:bg-secondary/40 rounded-t-sm h-[40%] relative group cursor-pointer transition-all"></div>
              </div>
              <div className="flex justify-between text-[10px] text-on-surface-variant uppercase font-bold mt-2 px-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span className="text-secondary">Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Recent Orders List */}
            <div className="bg-surface-container-lowest border border-white/5 rounded-[24px] p-lg flex flex-col h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-lg font-bold text-on-surface">Recent Orders</h3>
                <a href="#" className="text-secondary text-label-md font-bold hover:underline">View All</a>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
                {/* Order Item */}
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-label-md font-bold text-on-surface">Order #8821</p>
                      <p className="text-[11px] text-on-surface-variant">2 mins ago • Amoxicillin</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-label-md font-bold text-on-surface">$24.50</p>
                    <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded font-bold">New</span>
                  </div>
                </div>

                {/* Order Item */}
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-label-md font-bold text-on-surface">Order #8820</p>
                      <p className="text-[11px] text-on-surface-variant">15 mins ago • Ibuprofen</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-label-md font-bold text-on-surface">$12.99</p>
                    <span className="text-[10px] bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-bold">Processing</span>
                  </div>
                </div>
                
                {/* Order Item */}
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-white/5 opacity-70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant">done</span>
                    </div>
                    <div>
                      <p className="text-label-md font-bold text-on-surface">Order #8819</p>
                      <p className="text-[11px] text-on-surface-variant">1 hour ago • Lisinopril</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-label-md font-bold text-on-surface">$45.00</p>
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
