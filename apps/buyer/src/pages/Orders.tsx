import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Orders() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen overflow-x-hidden flex flex-col selection:bg-primary/30">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/5 pt-lg pb-md shadow-sm">
        <div className="max-w-container-max mx-auto px-gutter flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full hover:bg-surface-variant flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
            </button>
            <h1 className="text-headline-sm md:text-headline-md font-bold text-on-surface">Order History</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30 hover:border-primary transition-all">
            <span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
            <span className="hidden sm:inline font-label-md text-label-md text-on-surface">Help</span>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-container-max mx-auto px-gutter py-xl w-full">
        
        {/* Tabs */}
        <div className="flex border-b border-outline-variant/20 mb-xl overflow-x-auto scrollbar-hide">
          <button 
            onClick={() => setActiveTab('active')}
            className={`px-6 py-4 font-bold text-label-lg whitespace-nowrap transition-colors relative ${activeTab === 'active' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Active Orders (2)
            {activeTab === 'active' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`px-6 py-4 font-bold text-label-lg whitespace-nowrap transition-colors relative ${activeTab === 'past' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Past Orders
            {activeTab === 'past' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
          </button>
          <button 
            onClick={() => setActiveTab('cancelled')}
            className={`px-6 py-4 font-bold text-label-lg whitespace-nowrap transition-colors relative ${activeTab === 'cancelled' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Cancelled
            {activeTab === 'cancelled' && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
          </button>
        </div>

        {activeTab === 'active' && (
          <div className="space-y-lg">
            {/* Active Order Card 1 */}
            <div className="bg-surface-container-lowest border border-white/5 rounded-[24px] overflow-hidden group hover:border-primary/30 transition-all duration-300 shadow-lg">
              {/* Order Header */}
              <div className="bg-surface-container/50 px-lg py-md border-b border-outline-variant/20 flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <div className="text-on-surface-variant text-label-md font-bold uppercase tracking-widest mb-1">Order #MC-9982-FX</div>
                  <div className="text-body-sm text-on-surface-variant flex items-center gap-2">
                    Placed on Oct 12, 2024 <span className="w-1 h-1 bg-outline-variant rounded-full"></span> 3 items <span className="w-1 h-1 bg-outline-variant rounded-full"></span> $48.50
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-outline-variant/50 rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-colors">Invoice</button>
                  <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl font-label-md font-bold hover:bg-primary/20 transition-colors">Track Order</button>
                </div>
              </div>
              
              {/* Tracking Progress Bar */}
              <div className="px-lg py-xl border-b border-outline-variant/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-headline-sm font-bold text-on-surface">Arriving Today by 8 PM</h3>
                  <span className="text-primary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">local_shipping</span> Out for delivery</span>
                </div>
                
                <div className="relative w-full h-2 bg-surface-variant rounded-full mt-8 mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                  />
                  
                  {/* Nodes */}
                  <div className="absolute -top-3 left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                  </div>
                  <div className="absolute -top-3 left-1/4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <span className="material-symbols-outlined text-[14px]">done_all</span>
                  </div>
                  <div className="absolute -top-3 left-2/4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                  </div>
                  <div className="absolute -top-3 right-0 w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-variant flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">home</span>
                  </div>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  <span>Ordered</span>
                  <span>Verified</span>
                  <span>Shipped</span>
                  <span>Delivered</span>
                </div>
              </div>
              
              {/* Items */}
              <div className="p-lg">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-surface-container rounded-xl p-2 flex items-center justify-center shrink-0">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoVq8dLOU9q6h8GSqFOMZDx-Dwf5K8hpwGFuyY1yyuCdDRktP50RkH8L-cwgHD3wMLrYVW3NBBgFV9zy41Ms-L7Ar-GPqr0QjbNJBJPwAq6Av7y5X8VsfEq5q2NkYDtntM9Zf0OCoCK3yShk9NUPHBsqlVM0jGYTaebKRM8lGukgtz6qPSaiwQWQReUIVwxdm4lBz0g8zXmwAXanHpLDtn1AeYPM15seaBd6WcvD8cZDH7xORCiClWDtjDR42haPjeGG7wqFMJxdU" alt="Item" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-on-surface font-bold">Amoxicillin 500mg</h4>
                    <p className="text-on-surface-variant text-body-sm mb-2">24 Capsules • Qty: 2</p>
                    <div className="flex items-center gap-1">
                      <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 w-fit">
                        <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Verified Authentic
                      </span>
                      <span className="text-on-surface-variant text-[12px] ml-2">Sold by: City General Hospital</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active Order Card 2 */}
            <div className="bg-surface-container-lowest border border-white/5 rounded-[24px] overflow-hidden group hover:border-secondary/30 transition-all duration-300 shadow-lg">
              {/* Order Header */}
              <div className="bg-surface-container/50 px-lg py-md border-b border-outline-variant/20 flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <div className="text-on-surface-variant text-label-md font-bold uppercase tracking-widest mb-1">Order #MC-8821-BB</div>
                  <div className="text-body-sm text-on-surface-variant flex items-center gap-2">
                    Placed on Oct 14, 2024 <span className="w-1 h-1 bg-outline-variant rounded-full"></span> 1 item <span className="w-1 h-1 bg-outline-variant rounded-full"></span> $12.99
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-outline-variant/50 rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-colors">Invoice</button>
                  <button className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl font-label-md font-bold hover:bg-secondary/20 transition-colors">Track Order</button>
                </div>
              </div>
              
              {/* Tracking Progress Bar */}
              <div className="px-lg py-xl border-b border-outline-variant/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-headline-sm font-bold text-on-surface">Preparing for Dispatch</h3>
                  <span className="text-secondary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">inventory</span> Processing</span>
                </div>
                
                <div className="relative w-full h-2 bg-surface-variant rounded-full mt-8 mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '25%' }}
                    className="absolute top-0 left-0 h-full bg-secondary rounded-full"
                  />
                  
                  {/* Nodes */}
                  <div className="absolute -top-3 left-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                    <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                  </div>
                  <div className="absolute -top-3 left-1/4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                    <motion.span animate={{rotate: 360}} transition={{duration: 2, repeat: Infinity, ease: 'linear'}} className="material-symbols-outlined text-[14px]">sync</motion.span>
                  </div>
                  <div className="absolute -top-3 left-2/4 w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-variant flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                  </div>
                  <div className="absolute -top-3 right-0 w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-variant flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">home</span>
                  </div>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  <span>Ordered</span>
                  <span>Verifying</span>
                  <span>Shipped</span>
                  <span>Delivered</span>
                </div>
              </div>
              
              {/* Items */}
              <div className="p-lg">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-surface-container rounded-xl p-2 flex items-center justify-center shrink-0">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDVPEMY3RstN_RM8vkGlyxLJsZbqQrCyoNyey6O7TCj_fykDo4F7h9GImiN3hZmHLDrqvZRoL62cn0WLwqsbEFQsk3VVzhb61FI4cfjl_cotJHHxfL3d3NzJKO6zaVIylq4H1WWQZZF2AmTXnm3fZe4XFdMsNnZCfUpauMuXnJuOluF3N7hBYy9qn0_taRf6Jpdk1VRAP_Rlx-Pywqr0VdBrhWG7yN0QM-OBvv1716x907ufYnOxTl08B6Ajdq6qFAptVGGA3eKzZ" alt="Item" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-on-surface font-bold">Ibuprofen 400mg</h4>
                    <p className="text-on-surface-variant text-body-sm mb-2">50 Tablets • Qty: 1</p>
                    <div className="flex items-center gap-1">
                      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 w-fit">
                        <span className="material-symbols-outlined text-[12px]">pending</span> Verification Pending
                      </span>
                      <span className="text-on-surface-variant text-[12px] ml-2">Sold by: MediTrust Pharmacy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        )}

      </main>
    </div>
  );
}
