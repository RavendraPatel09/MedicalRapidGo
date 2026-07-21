import React from 'react';

export default function Marketplace() {
  return (
    <div className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen overflow-x-hidden flex flex-col selection:bg-primary/30">
      
      {/* Search & Filter Header (Sticky) */}
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/5 pt-lg pb-md shadow-sm">
        <div className="max-w-container-max mx-auto px-gutter space-y-md">
          {/* Top Row: Logo, Search, Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div className="flex items-center gap-2">
              <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MediCycle</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-bold uppercase tracking-widest hidden sm:block">Marketplace</span>
            </div>
            
            <div className="flex-1 max-w-2xl w-full">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
                <input 
                  type="text" 
                  placeholder="Search for medicines, active ingredients, or conditions..." 
                  className="w-full bg-surface-container rounded-full pl-12 pr-12 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface placeholder:text-on-surface-variant/50 shadow-inner"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded-full hover:scale-105 active:scale-95 transition-all shadow-md">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-sm justify-end">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="hidden sm:inline font-label-md text-label-md">Cart (2)</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 hover:border-primary transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Categories & Filters */}
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <button className="px-4 py-1.5 bg-primary text-on-primary rounded-full font-label-md text-label-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">All Medicines</button>
              <button className="px-4 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all">Antibiotics</button>
              <button className="px-4 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all">Pain Relief</button>
              <button className="px-4 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all">Cardiovascular</button>
              <button className="px-4 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all">Diabetes</button>
              <button className="px-4 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">local_fire_department</span> Trending</button>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-1.5 bg-surface-container border border-outline-variant/50 rounded-full text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-all shrink-0">
              <span className="material-symbols-outlined text-[18px]">tune</span> Filters
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-container-max mx-auto px-gutter py-xl w-full">
        
        {/* Promotional Banner */}
        <div className="w-full bg-gradient-to-r from-primary-container to-surface-container-high border border-primary/20 rounded-[24px] p-xl mb-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <span className="px-3 py-1 bg-primary text-on-primary font-bold text-[10px] uppercase tracking-widest rounded-full mb-4 inline-block">Flash Sale</span>
            <h2 className="text-display-sm md:text-display-md font-bold text-on-surface mb-2 leading-tight">Save up to 40% on verified surplus stock.</h2>
            <p className="text-on-surface-variant text-body-lg">Premium medicines sourced from top pharmacies. Fully verified by MediCycle Guard.</p>
          </div>
          <button className="relative z-10 px-8 py-3 bg-surface text-on-surface font-bold rounded-xl border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-primary/20 transition-all active:scale-95 whitespace-nowrap">
            View Deals
          </button>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-end mb-lg">
          <div>
            <h1 className="text-headline-sm font-bold text-on-surface">Showing All Medicines</h1>
            <p className="text-on-surface-variant text-body-sm mt-1">2,451 results found</p>
          </div>
          <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
            <span>Sort by:</span>
            <select className="bg-surface-container border border-outline-variant/30 rounded-lg px-2 py-1 text-on-surface outline-none cursor-pointer">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Expiry: Furthest</option>
              <option>Distance: Nearest</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          
          {/* Card 1 */}
          <div className="bg-surface-container-lowest border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full">
            <div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
              <div className="absolute top-2 left-2 flex gap-1 z-10">
                <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Verified
                </span>
              </div>
              <div className="absolute top-2 right-2 z-10">
                <button className="w-8 h-8 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
              </div>
              <img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" alt="Amoxicillin 500mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoVq8dLOU9q6h8GSqFOMZDx-Dwf5K8hpwGFuyY1yyuCdDRktP50RkH8L-cwgHD3wMLrYVW3NBBgFV9zy41Ms-L7Ar-GPqr0QjbNJBJPwAq6Av7y5X8VsfEq5q2NkYDtntM9Zf0OCoCK3yShk9NUPHBsqlVM0jGYTaebKRM8lGukgtz6qPSaiwQWQReUIVwxdm4lBz0g8zXmwAXanHpLDtn1AeYPM15seaBd6WcvD8cZDH7xORCiClWDtjDR42haPjeGG7wqFMJxdU"/>
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">Antibiotic</p>
                <div className="flex items-center gap-1 text-tertiary text-[11px] font-bold bg-tertiary/10 px-1.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">calendar_today</span> Oct 2025
                </div>
              </div>
              
              <h3 className="text-headline-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">Amoxicillin 500mg</h3>
              <p className="text-on-surface-variant text-body-sm line-clamp-1 mb-3">24 Capsules • Pfizer</p>
              
              <div className="mt-auto">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-[24px] font-bold text-on-surface leading-none">$24.50</span>
                  <span className="text-on-surface-variant text-body-sm line-through leading-none pb-1">$28.90</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-bold py-2.5 rounded-lg transition-colors border border-outline-variant/30 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full">
            <div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
              <div className="absolute top-2 left-2 flex gap-1 z-10">
                <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Verified
                </span>
              </div>
              <div className="absolute top-2 right-2 z-10">
                <button className="w-8 h-8 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
              </div>
              <img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" alt="Ibuprofen 400mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDVPEMY3RstN_RM8vkGlyxLJsZbqQrCyoNyey6O7TCj_fykDo4F7h9GImiN3hZmHLDrqvZRoL62cn0WLwqsbEFQsk3VVzhb61FI4cfjl_cotJHHxfL3d3NzJKO6zaVIylq4H1WWQZZF2AmTXnm3fZe4XFdMsNnZCfUpauMuXnJuOluF3N7hBYy9qn0_taRf6Jpdk1VRAP_Rlx-Pywqr0VdBrhWG7yN0QM-OBvv1716x907ufYnOxTl08B6Ajdq6qFAptVGGA3eKzZ"/>
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">Pain Relief</p>
                <div className="flex items-center gap-1 text-tertiary text-[11px] font-bold bg-tertiary/10 px-1.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">calendar_today</span> Dec 2025
                </div>
              </div>
              
              <h3 className="text-headline-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">Ibuprofen 400mg</h3>
              <p className="text-on-surface-variant text-body-sm line-clamp-1 mb-3">50 Tablets • Advil</p>
              
              <div className="mt-auto">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-[24px] font-bold text-on-surface leading-none">$12.99</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-bold py-2.5 rounded-lg transition-colors border border-outline-variant/30 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full">
            <div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
              <div className="absolute top-2 left-2 flex gap-1 z-10">
                <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Verified
                </span>
                <span className="bg-secondary/20 backdrop-blur-md text-secondary border border-secondary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                  Rare
                </span>
              </div>
              <div className="absolute top-2 right-2 z-10">
                <button className="w-8 h-8 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
              </div>
              <img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" alt="Lisinopril 20mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhz0ZN8fbSD-kvC6sEPRlk76hszlWf7AhDete1MY8-3N4BdSEfhY0mZGv92GT8xP_3GUiGybPGdnrLUe0iAnvVl_TSOB4touf6DYMweKfQj8At82SzjvRhxZhWg9SXBhEObgjh8Ag3613dINrViZIKZJcpLlV03yqwn9-KCimjghBw8B-HXcQMCdPiM-38rGJLDmnqbl5rtgKJv7nccDr0DpxzTz09r-r78ClCaWMi9I_GlYPq6iJyyKS3bhZYBTAt5gL3rpbI7QUJ"/>
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">Cardiovascular</p>
                <div className="flex items-center gap-1 text-tertiary text-[11px] font-bold bg-tertiary/10 px-1.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">calendar_today</span> Mar 2026
                </div>
              </div>
              
              <h3 className="text-headline-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">Lisinopril 20mg</h3>
              <p className="text-on-surface-variant text-body-sm line-clamp-1 mb-3">30 Tablets • Zestril</p>
              
              <div className="mt-auto">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-[24px] font-bold text-on-surface leading-none">$18.75</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-bold py-2.5 rounded-lg transition-colors border border-outline-variant/30 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-container-lowest border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full opacity-70 hover:opacity-100">
            <div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
              <div className="absolute top-2 left-2 flex gap-1 z-10">
                <span className="bg-error/20 backdrop-blur-md text-error border border-error/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">warning</span> Expiring Soon
                </span>
              </div>
              <img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" alt="Metformin 500mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJwbBsYDNaQ08n5Cbmpi7w86h4CHGB_1Cen2hZJzGSWPb1tdxkvtFxQ95XMRtk6eR78_PvvVfsUvlS0Nf2u0DYIodGrr0zGrbSc7xDCkiJyvV3xWoC3z9bSGKlv88CgYhpUBfE0YGHmVowireiLv8nwYhItEM7bEs-sb3PKD7_eScpcc76XOg4JUw8J7Ps6Le8TY0qJnftTew3V3M2d2nwbdOWR2HO7kyBreaSN6nzpd0jDyS55SW5lhujkdKqTP9k5Js_rpJByoCz"/>
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">Diabetes</p>
                <div className="flex items-center gap-1 text-error text-[11px] font-bold bg-error/10 px-1.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">calendar_today</span> In 30 Days
                </div>
              </div>
              
              <h3 className="text-headline-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">Metformin 500mg</h3>
              <p className="text-on-surface-variant text-body-sm line-clamp-1 mb-3">100 Tablets • Glucophage</p>
              
              <div className="mt-auto">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-[24px] font-bold text-on-surface leading-none">$5.00</span>
                  <span className="text-on-surface-variant text-body-sm line-through leading-none pb-1">$15.00</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-bold py-2.5 rounded-lg transition-colors border border-outline-variant/30 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Load More */}
        <div className="mt-xl flex justify-center">
          <button className="px-8 py-3 bg-surface-container border border-outline-variant/30 text-on-surface hover:bg-surface-variant rounded-full font-bold transition-colors flex items-center gap-2">
            Load More Products <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>
      
      {/* Footer minimal */}
      <footer className="w-full text-center py-6 border-t border-white/5 text-on-surface-variant text-body-sm relative z-10 bg-surface-container-lowest">
        &copy; 2024 MediCycle Platforms Inc. All rights reserved.
      </footer>
    </div>
  );
}
