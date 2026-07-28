import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Background3D, GlassPanel } from '@medicycle/ui';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    const tl = gsap.timeline();
    
    tl.from('.hero-badge', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.hero-title-word', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
    }, "-=0.4")
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, "-=0.6")
    .from('.hero-buttons', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, "-=0.8");

    // Scroll Animations for Features
    const featurePanels = gsap.utils.toArray('.feature-panel');
    featurePanels.forEach((panel: any, i) => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        rotationX: 15,
        scale: 0.9,
        transformPerspective: 1000,
        ease: 'power2.out',
      });
    });

    // Parallax background on scroll
    gsap.to('.hero-bg-container', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 200,
      opacity: 0,
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-background text-on-background font-body-md min-h-screen relative overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-2xl border-b border-white/5 shadow-glass-sm">
        <div className="flex justify-between items-center px-lg py-sm max-w-container-max mx-auto h-16">
          <div className="flex items-center gap-md">
            <span className="font-headline-md text-headline-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-tight">MediCycle</span>
            <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-md py-xs border border-outline-variant/30 transition-all focus-within:border-primary/50 focus-within:shadow-neon">
              <span className="material-symbols-outlined text-outline text-[20px]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48 text-on-surface outline-none placeholder:text-outline/70" placeholder="Search marketplace..." type="text"/>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-xl">
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md transition-all drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]" to="/roles">Roles</Link>
            <Link className="text-on-surface-variant font-medium hover:text-primary hover:drop-shadow-[0_0_8px_rgba(173,198,255,0.5)] transition-all duration-300 font-body-md text-body-md" to="/marketplace">Marketplace</Link>
          </div>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.6)] transition-all active:scale-95">shopping_cart</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.6)] transition-all active:scale-95">account_circle</button>
          </div>
        </div>
      </nav>

      <main>
        {/* 3D Hero Section */}
        <section className="hero-section relative h-screen min-h-[800px] flex items-center justify-center">
          <div className="hero-bg-container absolute inset-0 w-full h-full">
            <Background3D />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile text-center">
            <div className="hero-badge inline-flex items-center gap-sm bg-primary/10 border border-primary/20 rounded-full px-md py-xs mb-xl shadow-neon">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#adc6ff] animate-pulse"></span>
              <span className="text-label-md font-label-md text-primary tracking-widest uppercase">Quantum Verified Ecosystem</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] font-black mb-md max-w-5xl mx-auto leading-tight tracking-tighter">
              <span className="hero-title-word inline-block">The</span>{' '}
              <span className="hero-title-word inline-block">Future</span>{' '}
              <span className="hero-title-word inline-block">of</span>{' '}
              <br className="hidden md:block" />
              <span className="hero-title-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-[#ffb786] drop-shadow-lg">Safe Medicine Exchange</span>
            </h1>
            
            <p className="hero-subtitle font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xxl opacity-90 text-[20px] leading-relaxed">
              A premium, verified marketplace for unopened and unexpired medications. Powered by AI and secured by cryptographic escrow.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-md">
              <Link to="/marketplace" className="group relative bg-primary text-on-primary-container px-xxl py-md rounded-full font-headline-sm text-headline-sm hover:shadow-neon-strong transition-all active:scale-95 flex items-center gap-sm overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                <span className="relative z-10">Explore Marketplace</span>
                <span className="relative z-10 material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <button className="bg-surface/50 backdrop-blur-md text-on-surface px-xxl py-md rounded-full font-headline-sm text-headline-sm hover:bg-surface-container-highest hover:border-primary/50 transition-all border border-outline-variant/30 hover:shadow-glass-sm">
                View Architecture
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-sm opacity-60 animate-bounce">
            <span className="text-label-md font-label-md tracking-widest text-primary">DISCOVER</span>
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Holographic Features Grid */}
        <section className="py-xxl max-w-container-max mx-auto px-margin-mobile relative z-20">
          <div className="text-center mb-xxl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm font-bold tracking-tight">Uncompromising Quality</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Built on the pillars of precision and absolute trust.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg perspective-[2000px]">
            {/* Feature 1 */}
            <GlassPanel intensity="high" className="feature-panel p-xl group hover:border-primary/40 transition-colors duration-500 min-h-[300px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700"></div>
              <div className="w-16 h-16 bg-background/50 border border-primary/20 rounded-2xl flex items-center justify-center mb-lg backdrop-blur-xl shadow-glass-sm group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-[32px] drop-shadow-[0_0_10px_#adc6ff]" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              </div>
              <h3 className="font-headline-sm text-[28px] mb-sm font-bold">Cryptographic Verification</h3>
              <p className="font-body-sm text-[16px] text-on-surface-variant leading-relaxed max-w-md">Every provider undergoes a rigorous 5-step background and license validation process stored immutably.</p>
            </GlassPanel>

            {/* Feature 2 */}
            <GlassPanel intensity="high" className="feature-panel p-xl group hover:border-secondary/40 transition-colors duration-500 min-h-[300px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/30 transition-all duration-700"></div>
              <div className="w-16 h-16 bg-background/50 border border-secondary/20 rounded-2xl flex items-center justify-center mb-lg backdrop-blur-xl shadow-glass-sm group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-secondary text-[32px] drop-shadow-[0_0_10px_#d0bcff]" style={{fontVariationSettings: "'FILL' 1"}}>document_scanner</span>
              </div>
              <h3 className="font-headline-sm text-[28px] mb-sm font-bold">Neural Net OCR</h3>
              <p className="font-body-sm text-[16px] text-on-surface-variant leading-relaxed max-w-md">Advanced AI vision technology verifies expiration dates and batch numbers instantly with 99.99% accuracy.</p>
            </GlassPanel>
            
            {/* Feature 3 */}
            <GlassPanel intensity="high" className="feature-panel p-xl group hover:border-tertiary/40 transition-colors duration-500 min-h-[300px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-tertiary/30 transition-all duration-700"></div>
              <div className="w-16 h-16 bg-background/50 border border-tertiary/20 rounded-2xl flex items-center justify-center mb-lg backdrop-blur-xl shadow-glass-sm group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-tertiary text-[32px] drop-shadow-[0_0_10px_#ffb786]" style={{fontVariationSettings: "'FILL' 1"}}>ac_unit</span>
              </div>
              <h3 className="font-headline-sm text-[28px] mb-sm font-bold">Cold-Chain Logistics</h3>
              <p className="font-body-sm text-[16px] text-on-surface-variant leading-relaxed max-w-md">Temperature-controlled tracking ensures your medicine maintains absolute clinical integrity from door to door.</p>
            </GlassPanel>

            {/* Feature 4 */}
            <GlassPanel intensity="high" className="feature-panel p-xl group hover:border-primary/40 transition-colors duration-500 min-h-[300px] flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-container/30 transition-all duration-700"></div>
              <div className="w-16 h-16 bg-background/50 border border-primary/20 rounded-2xl flex items-center justify-center mb-lg backdrop-blur-xl shadow-glass-sm group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-[32px] drop-shadow-[0_0_10px_#adc6ff]" style={{fontVariationSettings: "'FILL' 1"}}>shield_lock</span>
              </div>
              <h3 className="font-headline-sm text-[28px] mb-sm font-bold">Zero-Trust Escrow</h3>
              <p className="font-body-sm text-[16px] text-on-surface-variant leading-relaxed max-w-md">Military-grade encrypted payment systems protect every single transaction until delivery is verified.</p>
            </GlassPanel>
          </div>
        </section>

      </main>
    </div>
  );
}
