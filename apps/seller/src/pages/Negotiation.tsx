import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Negotiation() {
  const [message, setMessage] = useState('');

  return (
    <div className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen overflow-hidden flex flex-col selection:bg-tertiary/30">
      
      {/* TopNavBar */}
      <nav className="w-full z-50 backdrop-blur-md border-b border-white/5 shadow-sm flex justify-between items-center px-lg h-[64px] bg-surface-dim/80">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full hover:bg-surface-variant flex items-center justify-center transition-colors lg:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MediCycle</span>
            <span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest hidden sm:block border border-tertiary/20">Secure Chat</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full border border-white/5">
            <span className="material-symbols-outlined text-tertiary text-[14px]">lock</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">End-to-End Encrypted</span>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Left Sidebar: Conversations List */}
        <aside className="w-full md:w-[320px] lg:w-[380px] flex-shrink-0 bg-surface border-r border-white/5 flex flex-col absolute md:relative z-20 h-full transition-transform transform -translate-x-full md:translate-x-0">
          <div className="p-4 border-b border-white/5">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input 
                type="text" 
                placeholder="Search messages, users, or order IDs..." 
                className="w-full bg-surface-container rounded-lg pl-10 pr-4 py-2 border border-outline-variant/30 focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none transition-all text-body-sm text-on-surface placeholder:text-on-surface-variant/50"
              />
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
              <button className="px-3 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded-full text-label-sm font-bold whitespace-nowrap">All</button>
              <button className="px-3 py-1 bg-surface-container hover:bg-surface-variant border border-outline-variant/30 text-on-surface-variant rounded-full text-label-sm font-bold whitespace-nowrap transition-colors">Offers</button>
              <button className="px-3 py-1 bg-surface-container hover:bg-surface-variant border border-outline-variant/30 text-on-surface-variant rounded-full text-label-sm font-bold whitespace-nowrap transition-colors">Support</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-1">
            {/* Conversation Item (Active) */}
            <div className="p-3 bg-tertiary/5 border border-tertiary/20 rounded-xl cursor-pointer flex items-start gap-3 relative overflow-hidden group">
              <div className="absolute left-0 top-0 w-1 h-full bg-tertiary"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-label-md font-bold text-on-surface truncate">Alex Mercer (Buyer)</h4>
                  <span className="text-[10px] text-tertiary font-bold">10:42 AM</span>
                </div>
                <p className="text-body-sm text-on-surface-variant truncate font-semibold text-on-surface">Would you accept $18 for the Amoxicillin?</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="bg-surface-container-high px-1.5 py-0.5 rounded text-[9px] font-bold uppercase text-on-surface-variant border border-white/5">Order #8821</span>
                </div>
              </div>
            </div>

            {/* Conversation Item 2 */}
            <div className="p-3 bg-transparent hover:bg-surface-container rounded-xl cursor-pointer flex items-start gap-3 transition-colors border border-transparent hover:border-white/5">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-label-md font-bold text-on-surface truncate">Wellness First Pharma</h4>
                  <span className="text-[10px] text-on-surface-variant">Yesterday</span>
                </div>
                <p className="text-body-sm text-on-surface-variant truncate">Thank you for confirming the batch number.</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="bg-surface-container-high px-1.5 py-0.5 rounded text-[9px] font-bold uppercase text-on-surface-variant border border-white/5">Wholesale</span>
                </div>
              </div>
            </div>
            
            {/* Conversation Item 3 */}
            <div className="p-3 bg-transparent hover:bg-surface-container rounded-xl cursor-pointer flex items-start gap-3 transition-colors border border-transparent hover:border-white/5">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-label-md font-bold text-on-surface truncate">MediCycle Support</h4>
                  <span className="text-[10px] text-on-surface-variant">Oct 12</span>
                </div>
                <p className="text-body-sm text-on-surface-variant truncate">Your verification is complete.</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-surface-container-lowest relative">
          
          {/* Chat Header */}
          <div className="h-[80px] bg-surface/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-lg shrink-0 z-10 shadow-sm">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center shrink-0 shadow-inner">
                  <span className="material-symbols-outlined text-on-surface-variant text-[24px]">person</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-surface"></div>
              </div>
              <div>
                <h2 className="text-title-md font-bold text-on-surface flex items-center gap-1">
                  Alex Mercer
                  <span className="material-symbols-outlined text-tertiary text-[14px]" style={{fontVariationSettings: "'FILL' 1"}} title="Verified Buyer">verified</span>
                </h2>
                <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online • Typing...
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors border border-transparent hover:border-white/10">
                <span className="material-symbols-outlined">call</span>
              </button>
              <button className="w-10 h-10 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors border border-transparent hover:border-white/10">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Context Banner (The Item being negotiated) */}
          <div className="bg-surface-container p-4 border-b border-white/5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-lowest rounded-lg border border-white/5 p-1">
                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoVq8dLOU9q6h8GSqFOMZDx-Dwf5K8hpwGFuyY1yyuCdDRktP50RkH8L-cwgHD3wMLrYVW3NBBgFV9zy41Ms-L7Ar-GPqr0QjbNJBJPwAq6Av7y5X8VsfEq5q2NkYDtntM9Zf0OCoCK3yShk9NUPHBsqlVM0jGYTaebKRM8lGukgtz6qPSaiwQWQReUIVwxdm4lBz0g8zXmwAXanHpLDtn1AeYPM15seaBd6WcvD8cZDH7xORCiClWDtjDR42haPjeGG7wqFMJxdU" alt="Amoxicillin" />
              </div>
              <div>
                <p className="text-label-md text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">Negotiating On</p>
                <h4 className="text-label-lg font-bold text-on-surface">Amoxicillin 500mg</h4>
                <p className="text-body-sm text-on-surface-variant">Listed Price: <span className="line-through">$24.50</span></p>
              </div>
            </div>
            <button className="text-tertiary text-label-md font-bold hover:underline">View Listing</button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-lg space-y-6 scrollbar-hide bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDEpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] bg-repeat">
            
            <div className="flex justify-center my-4">
              <span className="bg-surface-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant border border-white/5 shadow-sm">Today</span>
            </div>

            {/* System Message */}
            <div className="flex justify-center">
              <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl text-body-sm text-primary flex items-center gap-2 max-w-md text-center shadow-sm">
                <span className="material-symbols-outlined text-[16px]">security</span>
                MediCycle Guard active. Never share personal contact info or payment details here.
              </div>
            </div>

            {/* Buyer Message */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 mb-1">
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">person</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-on-surface-variant font-bold ml-1">Alex • 10:30 AM</span>
                <div className="bg-surface-container px-4 py-3 rounded-2xl rounded-bl-sm border border-white/5 text-on-surface shadow-sm">
                  Hi, I'm interested in the Amoxicillin. Is the expiry date definitely Oct 2025?
                </div>
              </div>
            </div>

            {/* Seller Message (Me) */}
            <div className="flex items-end gap-3 max-w-[80%] ml-auto justify-end">
              <div className="flex flex-col gap-1 items-end">
                <div className="flex items-center gap-1 mr-1">
                  <span className="text-[10px] text-on-surface-variant font-bold">You • 10:35 AM</span>
                  <span className="material-symbols-outlined text-[14px] text-tertiary">done_all</span>
                </div>
                <div className="bg-tertiary text-on-tertiary px-4 py-3 rounded-2xl rounded-br-sm shadow-md">
                  Hello! Yes, it was verified by the AI Smart Scan during upload. It is factory sealed and expires in Oct 2025.
                </div>
              </div>
            </div>

            {/* Buyer Offer Message */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 mb-1">
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">person</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-on-surface-variant font-bold ml-1">Alex • 10:42 AM</span>
                <div className="bg-surface-container px-4 py-3 rounded-2xl rounded-bl-sm border border-white/5 text-on-surface shadow-sm space-y-3">
                  <p>Would you accept $18 for the Amoxicillin?</p>
                  
                  {/* Embedded Offer Card */}
                  <div className="bg-surface-container-lowest border border-white/10 p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">local_offer</span> Buyer Offer</span>
                      <span className="font-bold text-tertiary">$18.00</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-1.5 bg-tertiary text-on-tertiary font-bold text-label-sm rounded-lg hover:shadow-[0_0_15px_rgba(255,183,134,0.4)] transition-all">Accept</button>
                      <button className="flex-1 py-1.5 bg-surface-container-high text-error font-bold text-label-sm rounded-lg border border-error/30 hover:bg-error/10 transition-colors">Decline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 mb-1">
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">person</span>
              </div>
              <div className="bg-surface-container px-4 py-3 rounded-2xl rounded-bl-sm border border-white/5 flex items-center gap-1 shadow-sm">
                <motion.div animate={{y: [0, -5, 0]}} transition={{duration: 0.6, repeat: Infinity}} className="w-1.5 h-1.5 bg-on-surface-variant rounded-full"></motion.div>
                <motion.div animate={{y: [0, -5, 0]}} transition={{duration: 0.6, repeat: Infinity, delay: 0.2}} className="w-1.5 h-1.5 bg-on-surface-variant rounded-full"></motion.div>
                <motion.div animate={{y: [0, -5, 0]}} transition={{duration: 0.6, repeat: Infinity, delay: 0.4}} className="w-1.5 h-1.5 bg-on-surface-variant rounded-full"></motion.div>
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-4 bg-surface/90 backdrop-blur-xl border-t border-white/5 z-10 shrink-0">
            <div className="flex items-center gap-3 bg-surface-container rounded-full pl-4 pr-2 py-2 border border-outline-variant/30 focus-within:border-tertiary focus-within:ring-1 focus-within:ring-tertiary transition-all shadow-inner">
              <button className="text-on-surface-variant hover:text-tertiary transition-colors shrink-0">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <button className="text-on-surface-variant hover:text-tertiary transition-colors shrink-0">
                <span className="material-symbols-outlined">attach_money</span>
              </button>
              <input 
                type="text" 
                placeholder="Type a message or counter-offer..." 
                className="flex-1 bg-transparent border-none outline-none text-on-surface placeholder:text-on-surface-variant/50 min-w-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${message.trim().length > 0 ? 'bg-tertiary text-on-tertiary shadow-[0_0_15px_rgba(255,183,134,0.4)]' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
