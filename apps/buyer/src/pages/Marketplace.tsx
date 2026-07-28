import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassPanel } from '@medicycle/ui';

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4
    });
    
    if (imageRef.current) {
        gsap.to(imageRef.current, {
            x: rotateY * 1.5,
            y: -rotateX * 1.5,
            scale: 1.1,
            ease: "power2.out",
            duration: 0.4
        });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1
    });
    
    if (imageRef.current) {
        gsap.to(imageRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1
        });
    }
  };

  return (
    <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="product-card opacity-0 translate-y-10"
        style={{ transformStyle: 'preserve-3d' }}
    >
      <GlassPanel intensity="medium" className="p-4 group cursor-pointer hover:border-primary/50 transition-colors duration-300 flex flex-col h-full relative overflow-visible">
        
        {/* Holographic Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-secondary/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>

        <div className="relative w-full aspect-square bg-surface-container/50 rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center border border-white/5" style={{ transform: 'translateZ(30px)' }}>
          <div className="absolute top-2 left-2 flex gap-1 z-10">
            {product.verified && (
                <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 shadow-neon">
                  <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Verified
                </span>
            )}
            {product.tag && (
                <span className={`bg-${product.tagColor}/20 backdrop-blur-md text-${product.tagColor} border border-${product.tagColor}/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase`}>
                  {product.tag}
                </span>
            )}
          </div>
          <div className="absolute top-2 right-2 z-10">
            <button className="w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors shadow-glass-sm hover:shadow-neon">
              <span className="material-symbols-outlined text-[18px]">favorite</span>
            </button>
          </div>
          <img 
            ref={imageRef}
            className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
            alt={product.title} 
            src={product.image}
          />
        </div>
        
        <div className="flex-1 flex flex-col relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex justify-between items-start mb-1">
            <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">{product.category}</p>
            <div className={`flex items-center gap-1 text-${product.dateColor || 'tertiary'} text-[11px] font-bold bg-${product.dateColor || 'tertiary'}/10 px-1.5 rounded`}>
              <span className="material-symbols-outlined text-[12px]">calendar_today</span> {product.date}
            </div>
          </div>
          
          <h3 className="text-headline-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.title}</h3>
          <p className="text-on-surface-variant text-body-sm line-clamp-1 mb-3">{product.desc}</p>
          
          <div className="mt-auto">
            <div className="flex items-end gap-2 mb-4">
              <span className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-none">{product.price}</span>
              {product.oldPrice && <span className="text-on-surface-variant text-body-sm line-through leading-none pb-1">{product.oldPrice}</span>}
            </div>
            
            <div className="flex items-center gap-2">
              <button className="flex-1 bg-primary/10 hover:bg-primary text-primary hover:text-on-primary-container font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-neon">
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default function Marketplace() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.header-element', {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 0.6
    })
    .from('.promo-banner', {
        scale: 0.95,
        opacity: 0,
        ease: 'power3.out',
        duration: 0.8
    }, "-=0.4")
    .to('.product-card', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power3.out',
        duration: 0.8
    }, "-=0.4");
  }, { scope: container });

  const products = [
    {
        title: "Amoxicillin 500mg",
        category: "Antibiotic",
        date: "Oct 2025",
        desc: "24 Capsules • Pfizer",
        price: "$24.50",
        oldPrice: "$28.90",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsoVq8dLOU9q6h8GSqFOMZDx-Dwf5K8hpwGFuyY1yyuCdDRktP50RkH8L-cwgHD3wMLrYVW3NBBgFV9zy41Ms-L7Ar-GPqr0QjbNJBJPwAq6Av7y5X8VsfEq5q2NkYDtntM9Zf0OCoCK3yShk9NUPHBsqlVM0jGYTaebKRM8lGukgtz6qPSaiwQWQReUIVwxdm4lBz0g8zXmwAXanHpLDtn1AeYPM15seaBd6WcvD8cZDH7xORCiClWDtjDR42haPjeGG7wqFMJxdU",
        verified: true
    },
    {
        title: "Ibuprofen 400mg",
        category: "Pain Relief",
        date: "Dec 2025",
        desc: "50 Tablets • Advil",
        price: "$12.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATDVPEMY3RstN_RM8vkGlyxLJsZbqQrCyoNyey6O7TCj_fykDo4F7h9GImiN3hZmHLDrqvZRoL62cn0WLwqsbEFQsk3VVzhb61FI4cfjl_cotJHHxfL3d3NzJKO6zaVIylq4H1WWQZZF2AmTXnm3fZe4XFdMsNnZCfUpauMuXnJuOluF3N7hBYy9qn0_taRf6Jpdk1VRAP_Rlx-Pywqr0VdBrhWG7yN0QM-OBvv1716x907ufYnOxTl08B6Ajdq6qFAptVGGA3eKzZ",
        verified: true
    },
    {
        title: "Lisinopril 20mg",
        category: "Cardiovascular",
        date: "Mar 2026",
        desc: "30 Tablets • Zestril",
        price: "$18.75",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhz0ZN8fbSD-kvC6sEPRlk76hszlWf7AhDete1MY8-3N4BdSEfhY0mZGv92GT8xP_3GUiGybPGdnrLUe0iAnvVl_TSOB4touf6DYMweKfQj8At82SzjvRhxZhWg9SXBhEObgjh8Ag3613dINrViZIKZJcpLlV03yqwn9-KCimjghBw8B-HXcQMCdPiM-38rGJLDmnqbl5rtgKJv7nccDr0DpxzTz09r-r78ClCaWMi9I_GlYPq6iJyyKS3bhZYBTAt5gL3rpbI7QUJ",
        verified: true,
        tag: "Rare",
        tagColor: "secondary"
    },
    {
        title: "Metformin 500mg",
        category: "Diabetes",
        date: "In 30 Days",
        dateColor: "error",
        desc: "100 Tablets • Glucophage",
        price: "$5.00",
        oldPrice: "$15.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJwbBsYDNaQ08n5Cbmpi7w86h4CHGB_1Cen2hZJzGSWPb1tdxkvtFxQ95XMRtk6eR78_PvvVfsUvlS0Nf2u0DYIodGrr0zGrbSc7xDCkiJyvV3xWoC3z9bSGKlv88CgYhpUBfE0YGHmVowireiLv8nwYhItEM7bEs-sb3PKD7_eScpcc76XOg4JUw8J7Ps6Le8TY0qJnftTew3V3M2d2nwbdOWR2HO7kyBreaSN6nzpd0jDyS55SW5lhujkdKqTP9k5Js_rpJByoCz",
        verified: false,
        tag: "Expiring Soon",
        tagColor: "error"
    }
  ];

  return (
    <div ref={container} className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen overflow-x-hidden flex flex-col selection:bg-primary/30 relative">
      
      {/* Background ambient light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <header className="sticky top-0 z-40 bg-surface/50 backdrop-blur-2xl border-b border-white/5 pt-lg pb-md shadow-glass-sm">
        <div className="max-w-container-max mx-auto px-gutter space-y-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md header-element">
            <div className="flex items-center gap-2">
              <Link to="/" className="font-headline-md text-headline-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-tight">MediCycle</Link>
              <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/30 rounded text-[10px] font-bold uppercase tracking-widest hidden sm:block shadow-[0_0_10px_rgba(173,198,255,0.2)]">Marketplace</span>
            </div>
            
            <div className="flex-1 max-w-2xl w-full">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
                <input 
                  type="text" 
                  placeholder="Search for medicines, active ingredients, or conditions..." 
                  className="w-full bg-surface-container/50 backdrop-blur-md rounded-full pl-12 pr-12 py-3 border border-outline-variant/30 focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface placeholder:text-on-surface-variant/50 shadow-inner group-focus-within:shadow-neon"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded-full hover:scale-105 active:scale-95 transition-all shadow-neon">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-sm justify-end">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="hidden sm:inline font-label-md text-label-md">Cart (2)</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container/50 backdrop-blur-md flex items-center justify-center border border-outline-variant/30 hover:border-primary hover:shadow-neon transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide header-element [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <button className="px-4 py-1.5 bg-primary text-on-primary rounded-full font-label-md text-label-md shadow-neon">All Medicines</button>
              <button className="px-4 py-1.5 bg-surface-container/50 backdrop-blur-md hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all hover:border-primary/30">Antibiotics</button>
              <button className="px-4 py-1.5 bg-surface-container/50 backdrop-blur-md hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all hover:border-primary/30">Pain Relief</button>
              <button className="px-4 py-1.5 bg-surface-container/50 backdrop-blur-md hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all hover:border-primary/30">Cardiovascular</button>
              <button className="px-4 py-1.5 bg-surface-container/50 backdrop-blur-md hover:bg-surface-variant text-on-surface border border-outline-variant/30 rounded-full font-label-md text-label-md transition-all hover:border-primary/30">Diabetes</button>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-1.5 bg-surface-container/50 backdrop-blur-md border border-outline-variant/50 rounded-full text-on-surface font-label-md text-label-md hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all shrink-0">
              <span className="material-symbols-outlined text-[18px]">tune</span> Filters
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-container-max mx-auto px-gutter py-xl w-full relative z-10">
        
        <GlassPanel intensity="high" className="promo-banner w-full border-primary/30 rounded-[24px] p-xl mb-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden group shadow-neon">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-1000 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <span className="px-3 py-1 bg-primary text-on-primary font-bold text-[10px] uppercase tracking-widest rounded-full mb-4 inline-block shadow-neon">Flash Sale</span>
            <h2 className="text-display-sm md:text-[40px] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80 mb-2 leading-tight">Save up to 40% on verified surplus stock.</h2>
            <p className="text-on-surface-variant text-body-lg">Premium medicines sourced from top pharmacies. Fully verified by MediCycle Guard's Quantum Encrypted network.</p>
          </div>
          <button className="relative z-10 px-8 py-3 bg-white text-background font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all active:scale-95 whitespace-nowrap overflow-hidden group-btn">
            <span className="relative z-10">Access Inventory</span>
          </button>
        </GlassPanel>

        <div className="flex justify-between items-end mb-lg header-element">
          <div>
            <h1 className="text-headline-sm font-bold text-on-surface drop-shadow-md">Verified Medicines</h1>
            <p className="text-on-surface-variant text-body-sm mt-1">Global encrypted network</p>
          </div>
          <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
            <span>Sort:</span>
            <select className="bg-surface/50 backdrop-blur-md border border-outline-variant/30 rounded-lg px-2 py-1 text-on-surface outline-none cursor-pointer focus:border-primary/50">
              <option>AI Recommended</option>
              <option>Price: Low to High</option>
              <option>Expiry: Furthest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} index={i} />
          ))}
        </div>

        <div className="mt-xl flex justify-center header-element">
          <button className="px-8 py-3 bg-surface-container/50 backdrop-blur-xl border border-white/10 text-on-surface hover:border-primary/50 hover:shadow-neon rounded-full font-bold transition-all flex items-center gap-2 active:scale-95">
            Load More Elements <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>
    </div>
  );
}
