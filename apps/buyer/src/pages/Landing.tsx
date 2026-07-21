import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroShader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas?.clientWidth || 1280;
      const h = canvas?.clientHeight || 720;
      if (canvas && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(syncSize);
      observer.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    if (!gl) return;
    
    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * 0.2;
    
    vec3 color1 = vec3(0.043, 0.067, 0.125); // #0B1120
    vec3 color2 = vec3(0.231, 0.510, 0.965); // #3B82F6
    vec3 color3 = vec3(0.545, 0.361, 0.965); // #8B5CF6
    
    float noise = sin(p.x * 2.0 + t) * cos(p.y * 2.0 - t) * 0.5 + 0.5;
    noise += sin(p.y * 4.0 + t * 1.5) * 0.2;
    
    vec3 finalColor = mix(color1, color2, noise * 0.3);
    finalColor = mix(finalColor, color3, pow(noise, 3.0) * 0.2);
    
    float vignette = 1.0 - length(p * 0.5);
    finalColor *= smoothstep(0.0, 1.0, vignette);
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;
    function cs(type: number, src: string) {
      const s = gl.createShader(type);
      if(!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    const prog = gl.createProgram();
    if(!prog) return;
    
    const vShader = cs(gl.VERTEX_SHADER, vs);
    const fShader = cs(gl.FRAGMENT_SHADER, fs);
    if(vShader && fShader) {
        gl.attachShader(prog, vShader);
        gl.attachShader(prog, fShader);
    }
    
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    function render(t: number) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('mousemove', handleMouseMove);
        if(observer) observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} style={{display: 'block', width: '100%', height: '100%'}} />;
};

export default function Landing() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary min-h-screen relative">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] z-[9999]" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDOwCxJUcFSs7tDAL8Vo47_d8hYWzIsTfNAKJQjg-0Q6Cvakna5FX6Tz_NWK_Yjsw6wBKvbPo-aKg0_9MSiUZljZSOyg7ZjVQTLyhWN1LbTAOu20nYoP-e7jlWyt6hWyuI13ca7QRZJibTSsInPTDGevX_k8H3vVQTuajzlFBpV7VKQ8YnaJ5mqOksqP0yjcoNrQysPic_rECu_Ar-F4Kqin8Q1gg1vLsA-eLBNfOzy75XSCxih_3Sh_N8xdm0-ok0PMtIAMS-FApB6)'}}></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-[0px_10px_30px_rgba(59,130,246,0.15)]">
        <div className="flex justify-between items-center px-lg py-sm max-w-container-max mx-auto h-16">
          <div className="flex items-center gap-md">
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MediCycle</span>
            <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-md py-xs border border-outline-variant/30">
              <span className="material-symbols-outlined text-outline text-[20px]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48 text-on-surface outline-none" placeholder="Search marketplace..." type="text"/>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-xl">
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md transition-all" to="/roles">Roles</Link>
            <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-body-md text-body-md" to="/marketplace">Marketplace</Link>
          </div>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all active:scale-95">shopping_cart</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all active:scale-95">account_circle</button>
            <button className="md:hidden material-symbols-outlined text-on-surface-variant">menu</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-60">
            <HeroShader />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background"></div>
          
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile text-center">
            <motion.div 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="inline-flex items-center gap-sm bg-primary/10 border border-primary/20 rounded-full px-md py-xs mb-xl"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label-md font-label-md text-primary tracking-widest uppercase">Verified Ecosystem</span>
            </motion.div>
            
            <motion.h1 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
                className="font-display-lg text-display-lg-mobile md:text-[64px] font-bold mb-md max-w-4xl mx-auto leading-tight"
            >
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Safe Medicine Exchange</span>
            </motion.h1>
            
            <motion.p 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xxl opacity-90"
            >
              A premium, verified marketplace for unopened and unexpired medications. Secure, clinical, and fast.
            </motion.p>
            
            <motion.div 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="flex flex-col sm:flex-row items-center justify-center gap-md"
            >
              <Link to="/marketplace" className="bg-primary text-on-primary-container px-xxl py-md rounded-full font-headline-sm text-headline-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-95 flex items-center gap-sm">
                Explore Marketplace
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="bg-surface-container-high text-on-surface px-xxl py-md rounded-full font-headline-sm text-headline-sm hover:bg-surface-container-highest transition-all border border-outline-variant/30">
                How it works
              </button>
            </motion.div>
          </div>
          
          <div className="absolute bottom-xl left-1/2 -translate-x-1/2 flex flex-col items-center gap-sm opacity-40">
            <span className="text-label-md font-label-md">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-xxl max-w-container-max mx-auto px-margin-mobile">
          <div className="text-center mb-xxl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Uncompromising Quality</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Built on the pillars of precision and trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            <div className="bg-surface/70 backdrop-blur-xl border border-white/5 p-lg rounded-card group hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm font-bold">Verified Sellers</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Every provider undergoes a rigorous 5-step background and license validation process.</p>
            </div>
            <div className="bg-surface/70 backdrop-blur-xl border border-white/5 p-lg rounded-card group hover:border-tertiary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-md group-hover:bg-tertiary/20 transition-colors">
                <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>document_scanner</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm font-bold">OCR Scanning</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Advanced pharmaceutical OCR technology verifies expiration dates and batch numbers instantly.</p>
            </div>
            <div className="bg-surface/70 backdrop-blur-xl border border-white/5 p-lg rounded-card group hover:border-secondary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>local_shipping</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm font-bold">Fast Delivery</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Cold-chain logistics ensure your medicine maintains clinical integrity from door to door.</p>
            </div>
            <div className="bg-surface/70 backdrop-blur-xl border border-white/5 p-lg rounded-card group hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>shield_with_heart</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-sm font-bold">Secure Payments</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Encrypted escrow systems protect every transaction until the product is safely in your hands.</p>
            </div>
          </div>
        </section>

        {/* Marketplace Preview */}
        <section className="py-xxl bg-surface-container-lowest/50">
          <div className="max-w-container-max mx-auto px-margin-mobile flex justify-between items-end mb-lg">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-xs font-bold">Available Near You</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Real-time inventory from verified neighbors and pharmacies.</p>
            </div>
            <Link to="/marketplace" className="text-primary font-bold flex items-center gap-xs hover:gap-sm transition-all">
              View all <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          
          <div className="flex gap-lg overflow-x-auto px-margin-mobile pb-xl scrollbar-hide snap-x" style={{msOverflowStyle:'none', scrollbarWidth:'none'}}>
            {/* Product Card 1 */}
            <div className="min-w-[280px] md:min-w-[320px] snap-start bg-surface/70 backdrop-blur-xl border border-white/5 overflow-hidden rounded-card">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover" alt="Amoxicillin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQHPECxJTCnVYL9MO4JvYxp5hB6HB7AgJsZepQNDrG1lMd83CP-cs4Yr1SG_ahg7JRaOSAEkN4fD2BBXjnxrSbcLEqQM6CY3qliPU8HnafFwALh0DN-H3DGCKw1WGXhPtkTaNLg_LGGv60OsNJguDVP2NGSDysnYXuMnGHn4XgKJQuuDvEgb3JlJgfsbJuB4ikpXdKl3kFLFyVVY6CKLB-aXTzRen2pHi-LkTrzfAD_B3lGmdCEBJQOC6ew4S_6VLqpxiuJ_jefjO"/>
                <div className="absolute top-md right-md bg-background/80 backdrop-blur-md px-sm py-xs rounded-full flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                  <span className="text-label-md font-label-md">1.2 km away</span>
                </div>
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h4 className="font-headline-sm text-headline-sm font-bold">Amoxicillin 500mg</h4>
                  <span className="text-primary font-bold">$12.50</span>
                </div>
                <p className="text-body-sm text-on-surface-variant mb-md">Exp: Oct 2025 • Sealed Box</p>
                <div className="flex items-center gap-sm">
                  <button className="flex-1 bg-primary/10 text-primary py-sm rounded-lg font-bold hover:bg-primary hover:text-on-primary-container transition-all text-body-sm">Add to Cart</button>
                  <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="min-w-[280px] md:min-w-[320px] snap-start bg-surface/70 backdrop-blur-xl border border-white/5 overflow-hidden rounded-card">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover" alt="Lisinopril" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIaZtLlRc8AUTYzixq1FPEDN7c52TeJ2H-l8nXKsp0yqTyowQlnWxASh8Jj3xmtwRsg_C_d_vlJU4QJUxVXy7dD68q-q_xMOWd2zyevsbyHlTUsvBgAGjH_III0MUsJD6x7OxZVnbXeF-Jlv6QulxID5U-a5-dtx9-7fYxQMsxgT3tG9IPU-zBrWeaZK03gXHGu47sqhio-yT1f5J_3K09mgb4psvSWy3v7heNudSRtLO4RwYYw5tjg7R9mrc9ImRM2U80pNzr8aO3"/>
                <div className="absolute top-md right-md bg-background/80 backdrop-blur-md px-sm py-xs rounded-full flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                  <span className="text-label-md font-label-md">0.8 km away</span>
                </div>
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h4 className="font-headline-sm text-headline-sm font-bold">Lisinopril 10mg</h4>
                  <span className="text-primary font-bold">$18.00</span>
                </div>
                <p className="text-body-sm text-on-surface-variant mb-md">Exp: Jan 2026 • 30 Tablets</p>
                <div className="flex items-center gap-sm">
                  <button className="flex-1 bg-primary/10 text-primary py-sm rounded-lg font-bold hover:bg-primary hover:text-on-primary-container transition-all text-body-sm">Add to Cart</button>
                  <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="min-w-[280px] md:min-w-[320px] snap-start bg-surface/70 backdrop-blur-xl border border-white/5 overflow-hidden rounded-card">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover" alt="Albuterol" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDwRIZvvDijN6VtmSO1Y0IV1dBE7c1Kgbs5RlPzXxIE_XvbNGxiF03IHZi7ZlVClJ4UYiogqRWq9pH2Ia79c3PoLrp9n4TTp50h-ysydkSRZAshaKs6iZsP17ER-pyRcZmlhLxvClOgS8YBEoa_PmmEPdxW9BENtnwac7lA1l6U6jKjXRm626xHl0zVXuD2fbkTUQpBEzSnr_qrZ6yJV806aZ5yrsajunc6u5o-rx2ntgOPXcVZqEf54g7Tzl5ygQBFsjLILNi0-wh"/>
                <div className="absolute top-md right-md bg-background/80 backdrop-blur-md px-sm py-xs rounded-full flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                  <span className="text-label-md font-label-md">2.5 km away</span>
                </div>
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h4 className="font-headline-sm text-headline-sm font-bold">Albuterol Inhaler</h4>
                  <span className="text-primary font-bold">$45.00</span>
                </div>
                <p className="text-body-sm text-on-surface-variant mb-md">Exp: Dec 2024 • New in Pack</p>
                <div className="flex items-center gap-sm">
                  <button className="flex-1 bg-primary/10 text-primary py-sm rounded-lg font-bold hover:bg-primary hover:text-on-primary-container transition-all text-body-sm">Add to Cart</button>
                  <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-xxl bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-margin-mobile md:px-lg max-w-container-max mx-auto">
          <div className="space-y-md">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">MediCycle</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">The world's most secure peer-to-peer pharmaceutical marketplace for unexpired medicine.</p>
          </div>
          <div className="space-y-sm">
            <h5 className="text-on-surface font-bold font-body-md">Platform</h5>
            <nav className="flex flex-col gap-xs">
              <a className="text-on-surface-variant font-body-sm hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-on-surface-variant font-body-sm hover:text-primary transition-colors" href="#">Terms of Service</a>
            </nav>
          </div>
          <div className="space-y-sm">
            <h5 className="text-on-surface font-bold font-body-md">Resources</h5>
            <nav className="flex flex-col gap-xs">
              <a className="text-on-surface-variant font-body-sm hover:text-primary transition-colors" href="#">Shipping Info</a>
              <a className="text-on-surface-variant font-body-sm hover:text-primary transition-colors" href="#">Verification Process</a>
            </nav>
          </div>
          <div className="space-y-sm">
            <h5 className="text-on-surface font-bold font-body-md">Connect</h5>
            <nav className="flex flex-col gap-xs">
              <a className="text-on-surface-variant font-body-sm hover:text-primary transition-colors" href="#">Contact Support</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
