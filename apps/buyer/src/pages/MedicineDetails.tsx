import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MedicineDetails() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="font-body-md text-body-md overflow-x-hidden min-h-screen bg-[#0b0e15] text-[#e1e2ec]"
         style={{
           backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
           backgroundSize: '40px 40px'
         }}>
      
      {/* TopNavBar Implementation (Normally this would be in a Layout component, but placed here for fidelity to prototype) */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-sm">
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-headline-md text-headline-md font-bold text-primary">MediCycle</span>
            <div className="hidden md:flex gap-6">
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Wholesale</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Tracking</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant/30 focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-64 text-on-surface outline-none" placeholder="Search medicines..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-surface-variant rounded-full active:scale-95 transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
              </button>
              <button className="p-2 hover:bg-surface-variant rounded-full active:scale-95 transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-xxl pb-xxl px-gutter max-w-container-max mx-auto">
        {/* Breadcrumbs */}
        <div className="py-8">
          <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">Marketplace</a>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <a className="hover:text-primary transition-colors" href="#">Antibiotics</a>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary">Amoxicillin 500mg</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl pb-xxl">
          {/* Left Column: Image and Gallery */}
          <div className="lg:col-span-5 space-y-gutter">
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] overflow-hidden group relative">
              <div className="aspect-square w-full bg-surface-container-high flex items-center justify-center p-xl">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" alt="Amoxicillin 500mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoVq8dLOU9q6h8GSqFOMZDx-Dwf5K8hpwGFuyY1yyuCdDRktP50RkH8L-cwgHD3wMLrYVW3NBBgFV9zy41Ms-L7Ar-GPqr0QjbNJBJPwAq6Av7y5X8VsfEq5q2NkYDtntM9Zf0OCoCK3yShk9NUPHBsqlVM0jGYTaebKRM8lGukgtz6qPSaiwQWQReUIVwxdm4lBz0g8zXmwAXanHpLDtn1AeYPM15seaBd6WcvD8cZDH7xORCiClWDtjDR42haPjeGG7wqFMJxdU"/>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-4 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  VERIFIED AUTHENTIC
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-primary/40 rounded-[20px] cursor-pointer overflow-hidden p-2">
                <img className="w-full h-full object-cover rounded-lg opacity-100" alt="Gallery 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBednVmotEgGJlvFx733sZLUH6eJ1ctTytJiKiWiOJ78IcbV_23FXndUOhsaYRW9KRz0IHDebdluEcdzC8PXPeqbhmii8zJE8fI1NcsQzFkNx0hxlRgGWfkJU_ZYNpgecTikpzx3Tl3mna5taesU0pDFiBtoXzpUU8TavHftJiXSqa4kiXp87Jz5tDhxsQfkDbaqrgj6SycBvvz1bHPX-x4apT-N0aTgDJj1WDKYP_s6i54euA1gfT4_M37zSQMnzPx8dcjQksrsc8V"/>
              </div>
              <div className="aspect-square bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 hover:border-primary/20 rounded-[20px] cursor-pointer overflow-hidden p-2 transition-all">
                <img className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-all" alt="Gallery 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8OddjVPzylEcqSi_CIJKAGbRqT_UNRRw7Q1xe484Z3r7DvILA6_P6YAKxxvqSh9PJg0XTCTVKFlEy93iwQQCNiM50PUlyNcHNW1Yaag0dF5KzSUZqavpqjGHZCBF18ZjWUaIdK6cX-suWdMLOdpdiqpMOCtKoUlpgtV5i3p9QW1dhFoumHtk_3516V3DiIkHi_utzxWOL_XnrYMTcBdbGGktgGuHcfazsdDiktmwRZRk4Q3oYHCgFXkn9jKShLgPM168byv5kx-ND"/>
              </div>
              <div className="aspect-square bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 hover:border-primary/20 rounded-[20px] cursor-pointer overflow-hidden p-2 transition-all">
                <img className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-all" alt="Gallery 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-zSYx6VXschmiRwNv3OnF8z6A250LSX95GWbE4BFywq7tm5O5orvVbvEDfjEDlagIDcpHJ7mhvJNOVMilwVj1Sil0-RuGPwZXViYhOJ8b3wSxYOAz-Uwyq8Md78a7O82aaEd91LGwdF5BwYB8-ecZX2VrrYxEGsiyXNy5tAFTy1lfv9tCEFDvxlLhpWpOW7leJgycnmom1ahRDe2NPgQCjtQIa3ZTBzKK0wDivopvNwDaO8aP7kFv6luZRgLk4E_O30JErjvmmvrl"/>
              </div>
              <div className="aspect-square bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 hover:border-primary/20 rounded-[20px] cursor-pointer flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">videocam</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Actions */}
          <div className="lg:col-span-7 space-y-gutter">
            <header className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-label-md text-label-md text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Antibiotic</span>
                <span className="text-on-surface-variant font-label-md text-label-md border-l border-outline-variant pl-2">SKU: MC-AMOX-500-24</span>
              </div>
              <h1 className="font-headline-md text-headline-md md:text-display-lg md:font-display-lg text-on-surface">Amoxicillin 500mg</h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg">A broad-spectrum penicillin antibiotic used to treat various bacterial infections. Manufactured by <span className="text-primary font-semibold">Pfizer</span>.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 space-y-1">
                <span className="text-on-surface-variant font-label-md text-label-md uppercase">Dosage</span>
                <p className="text-on-surface font-semibold">500mg</p>
              </div>
              <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 space-y-1">
                <span className="text-on-surface-variant font-label-md text-label-md uppercase">Pack Size</span>
                <p className="text-on-surface font-semibold">24 Capsules</p>
              </div>
              <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-error/20 rounded-[20px] p-4 space-y-1">
                <span className="text-on-surface-variant font-label-md text-label-md uppercase">Expiry</span>
                <p className="text-error font-semibold">Oct 2025</p>
              </div>
              <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 space-y-1">
                <span className="text-on-surface-variant font-label-md text-label-md uppercase">Origin</span>
                <p className="text-on-surface font-semibold">USA</p>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-gutter space-y-6 bg-gradient-to-br from-surface-container to-surface-container-low">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-on-surface-variant font-label-md text-label-md line-through">$28.90</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[32px] leading-[40px] font-bold text-on-surface tracking-[-0.01em]">$24.50</span>
                    <span className="bg-tertiary-container/20 text-tertiary-container px-2 py-1 rounded font-bold text-label-md">-15% OFF</span>
                  </div>
                </div>
                <div className="flex flex-col text-right items-end">
                  <div className="flex items-center gap-1 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-primary text-sm">local_shipping</span>
                    Estimated Delivery
                  </div>
                  <p className="text-on-surface-variant text-body-sm">Today, 2:00 PM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex items-center bg-surface-container-highest rounded-xl p-1 border border-outline-variant">
                  <button onClick={decrement} className="w-10 h-10 flex items-center justify-center hover:bg-surface-variant rounded-lg transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button onClick={increment} className="w-10 h-10 flex items-center justify-center hover:bg-surface-variant rounded-lg transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">shopping_bag</span>
                  Add to Cart
                </motion.button>
              </div>
            </div>

            {/* Seller Profile Card */}
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-gutter flex flex-col md:flex-row items-center gap-6 group hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-4xl">local_pharmacy</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">HealthCare Plus Pharmacy</h3>
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                </div>
                <div className="flex justify-center md:justify-start items-center gap-4 text-on-surface-variant font-label-md text-label-md">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span> 4.9 (1.2k+ reviews)</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> 1.2 km away</span>
                </div>
              </div>
              <button className="border border-outline text-on-surface px-6 py-2 rounded-full font-label-md text-label-md hover:bg-white/5 transition-all active:scale-95 shrink-0">View Pharmacy</button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs / Sections */}
        <section className="mb-xxl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            <div className="lg:col-span-2 space-y-xl">
              {/* Bento-style spec grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-gutter space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined">science</span>
                    <h4 className="font-headline-sm text-headline-sm">Composition</h4>
                  </div>
                  <ul className="space-y-2 text-on-surface-variant font-body-md">
                    <li className="flex justify-between border-b border-outline-variant/30 pb-2"><span>Amoxicillin Trihydrate</span> <span className="text-on-surface">500mg</span></li>
                    <li className="flex justify-between border-b border-outline-variant/30 pb-2"><span>Magnesium Stearate</span> <span className="text-on-surface">Trace</span></li>
                    <li className="flex justify-between"><span>Microcrystalline Cellulose</span> <span className="text-on-surface">USP Grade</span></li>
                  </ul>
                </div>
                <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-gutter space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="material-symbols-outlined">chair_fireplace</span>
                    <h4 className="font-headline-sm text-headline-sm">Indications</h4>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">Indicated for the treatment of infections due to susceptible strains of designated microorganisms in the ear, nose, throat, and skin.</p>
                </div>
                <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-gutter space-y-4 md:col-span-2">
                  <div className="flex items-center gap-3 text-tertiary">
                    <span className="material-symbols-outlined">assignment</span>
                    <h4 className="font-headline-sm text-headline-sm">Dosage Instructions</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h5 className="text-on-surface font-semibold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Adults &amp; Children (&gt;40kg)</h5>
                      <p className="text-on-surface-variant text-body-sm">500mg every 12 hours or 250mg every 8 hours depending on severity of infection.</p>
                    </div>
                    <div className="space-y-3">
                      <h5 className="text-on-surface font-semibold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Children (&lt;40kg)</h5>
                      <p className="text-on-surface-variant text-body-sm">20mg/kg/day in divided doses every 8 hours or as prescribed by a pediatrician.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage & Safety (Side Panel) */}
            <div className="space-y-gutter">
              <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 border-l-4 border-l-tertiary rounded-[20px] p-gutter">
                <div className="flex items-center gap-3 text-on-surface mb-4">
                  <span className="material-symbols-outlined">inventory_2</span>
                  <h4 className="font-headline-sm text-headline-sm">Storage</h4>
                </div>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Store below 25°C (77°F) in a dry place. Keep the container tightly closed. Protect from light. Keep out of reach of children.
                </p>
              </div>
              <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 border-l-4 border-l-primary rounded-[20px] p-gutter">
                <div className="flex items-center gap-3 text-on-surface mb-4">
                  <span className="material-symbols-outlined">security</span>
                  <h4 className="font-headline-sm text-headline-sm">MediCycle Guard</h4>
                </div>
                <p className="text-on-surface-variant text-body-sm mb-4">Your purchase is protected by our blockchain-verified supply chain tracking.</p>
                <a className="text-primary font-bold text-label-md flex items-center gap-1 group w-fit" href="#">
                  Track Origin <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Medicines */}
        <section className="mb-xxl">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Related Medicines</h2>
              <p className="text-on-surface-variant">Commonly purchased alternatives and related treatments.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:underline">
              View All <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Related Item 1 */}
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 transition-all">
              <div className="aspect-square bg-surface-container rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Azithromycin 250mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDVPEMY3RstN_RM8vkGlyxLJsZbqQrCyoNyey6O7TCj_fykDo4F7h9GImiN3hZmHLDrqvZRoL62cn0WLwqsbEFQsk3VVzhb61FI4cfjl_cotJHHxfL3d3NzJKO6zaVIylq4H1WWQZZF2AmTXnm3fZe4XFdMsNnZCfUpauMuXnJuOluF3N7hBYy9qn0_taRf6Jpdk1VRAP_Rlx-Pywqr0VdBrhWG7yN0QM-OBvv1716x907ufYnOxTl08B6Ajdq6qFAptVGGA3eKzZ"/>
              </div>
              <div className="space-y-1">
                <p className="text-on-surface-variant text-label-md uppercase font-label-md">Antibiotic</p>
                <h4 className="text-on-surface font-semibold">Azithromycin 250mg</h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-primary font-bold">$18.20</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add_circle</span>
                </div>
              </div>
            </div>
            
            {/* Related Item 2 */}
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 transition-all">
              <div className="aspect-square bg-surface-container rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Augmentin 625mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhz0ZN8fbSD-kvC6sEPRlk76hszlWf7AhDete1MY8-3N4BdSEfhY0mZGv92GT8xP_3GUiGybPGdnrLUe0iAnvVl_TSOB4touf6DYMweKfQj8At82SzjvRhxZhWg9SXBhEObgjh8Ag3613dINrViZIKZJcpLlV03yqwn9-KCimjghBw8B-HXcQMCdPiM-38rGJLDmnqbl5rtgKJv7nccDr0DpxzTz09r-r78ClCaWMi9I_GlYPq6iJyyKS3bhZYBTAt5gL3rpbI7QUJ"/>
              </div>
              <div className="space-y-1">
                <p className="text-on-surface-variant text-label-md uppercase font-label-md">Antibiotic</p>
                <h4 className="text-on-surface font-semibold">Augmentin 625mg</h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-primary font-bold">$32.00</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add_circle</span>
                </div>
              </div>
            </div>

            {/* Related Item 3 */}
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 transition-all">
              <div className="aspect-square bg-surface-container rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Ciprofloxacin 500mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJwbBsYDNaQ08n5Cbmpi7w86h4CHGB_1Cen2hZJzGSWPb1tdxkvtFxQ95XMRtk6eR78_PvvVfsUvlS0Nf2u0DYIodGrr0zGrbSc7xDCkiJyvV3xWoC3z9bSGKlv88CgYhpUBfE0YGHmVowireiLv8nwYhItEM7bEs-sb3PKD7_eScpcc76XOg4JUw8J7Ps6Le8TY0qJnftTew3V3M2d2nwbdOWR2HO7kyBreaSN6nzpd0jDyS55SW5lhujkdKqTP9k5Js_rpJByoCz"/>
              </div>
              <div className="space-y-1">
                <p className="text-on-surface-variant text-label-md uppercase font-label-md">Antibiotic</p>
                <h4 className="text-on-surface font-semibold">Ciprofloxacin 500mg</h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-primary font-bold">$15.50</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add_circle</span>
                </div>
              </div>
            </div>

            {/* Related Item 4 */}
            <div className="bg-[rgba(29,32,39,0.7)] backdrop-blur-[20px] border border-white/5 rounded-[20px] p-4 group cursor-pointer hover:border-primary/30 transition-all">
              <div className="aspect-square bg-surface-container rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt="Cephalexin 500mg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCh4ETrxB7qUN2Fyt-hg5okL9nTQAteGLFWRL74HSzQohvPS96WByGfazyrfCa6BScHHsWnWYKmSCuIVed3su273OWtBPwIgKUi-IudYcxGeibBCkPMWzrG9HXCnmdWva_mIhCch7AaQ61Eaw6uSOW6LzNjWq80RUawy5jB60v0WXJX4dFNLUsEx_cyv5ReCGVIJH1Fo1u8Ei5KZMCHeZiLvlWdTqzbOmv5pulxApVYRv4fFAvF3RtV4DltShOvbJehXl8YY2HvTdQ"/>
              </div>
              <div className="space-y-1">
                <p className="text-on-surface-variant text-label-md uppercase font-label-md">Antibiotic</p>
                <h4 className="text-on-surface font-semibold">Cephalexin 500mg</h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-primary font-bold">$21.00</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add_circle</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-xxl bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="space-y-4">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">MediCycle</span>
            <p className="text-on-surface-variant max-w-sm">© 2024 MediCycle. SEC-Compliant Pharmaceutical Marketplace. Ensuring the integrity of the medical supply chain through advanced logistics and verification.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">face_nod</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">phone_in_talk</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h5 className="text-on-surface font-bold font-label-md text-label-md uppercase tracking-wider">Resources</h5>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">FDA Compliance</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="text-on-surface font-bold font-label-md text-label-md uppercase tracking-wider">Account</h5>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Verified Sellers</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Track Order</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Merchant Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
