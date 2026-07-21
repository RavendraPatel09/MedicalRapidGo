import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function RoleSelection() {
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'admin' | null>('buyer');
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'buyer' | 'seller' | 'admin') => {
    setActiveRole(role);
  };

  const handleContinue = () => {
    if (activeRole === 'buyer') navigate('/marketplace');
    if (activeRole === 'seller') window.location.href = 'http://localhost:5177';
    if (activeRole === 'admin') window.location.href = 'http://localhost:5176';
  };

  return (
    <div className="font-body-md text-body-md bg-background text-[#e1e2ec] min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[120px]"></div>
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      {/* Header */}
      <header className="w-full py-xl px-gutter relative z-10 flex justify-center md:justify-start max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
          <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">MediCycle</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-gutter w-full max-w-container-max mx-auto pb-xxxl">
        
        <div className="text-center mb-xxl max-w-2xl mt-[-8vh]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-on-surface mb-md tracking-tight"
          >
            How will you use <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MediCycle</span>?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-on-surface-variant max-w-xl mx-auto"
          >
            Select your role to access customized features, analytics, and marketplace tools designed specifically for your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg w-full max-w-5xl">
          
          {/* Buyer Role */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => handleRoleSelect('buyer')}
            className={`
              relative p-xl rounded-[28px] cursor-pointer transition-all duration-300 overflow-hidden group
              ${activeRole === 'buyer' 
                ? 'bg-primary/10 border-2 border-primary shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-[1.02]' 
                : 'bg-surface-container border-2 border-outline-variant/30 hover:border-primary/50 hover:bg-surface-container-high'
              }
            `}
          >
            {activeRole === 'buyer' && (
              <motion.div layoutId="active-indicator" className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-on-primary">check</span>
              </motion.div>
            )}
            
            <div className={`w-16 h-16 rounded-2xl mb-lg flex items-center justify-center transition-colors duration-300
              ${activeRole === 'buyer' ? 'bg-primary text-on-primary' : 'bg-primary-container/20 text-primary group-hover:bg-primary/20'}
            `}>
              <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
            </div>
            
            <h3 className="text-headline-sm font-bold text-on-surface mb-sm">Buyer</h3>
            <p className="text-body-md text-on-surface-variant mb-xl line-clamp-3">
              Purchase verified medicines from certified pharmacies with secure tracking and authentication.
            </p>
            
            <ul className="space-y-sm text-body-sm text-on-surface-variant mb-xl">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">done</span> Access to full marketplace</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">done</span> AI-powered search</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">done</span> Secure transaction tracking</li>
            </ul>

            <div className="mt-auto absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          {/* Seller Role */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => handleRoleSelect('seller')}
            className={`
              relative p-xl rounded-[28px] cursor-pointer transition-all duration-300 overflow-hidden group
              ${activeRole === 'seller' 
                ? 'bg-secondary/10 border-2 border-secondary shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-[1.02]' 
                : 'bg-surface-container border-2 border-outline-variant/30 hover:border-secondary/50 hover:bg-surface-container-high'
              }
            `}
          >
            {activeRole === 'seller' && (
              <motion.div layoutId="active-indicator" className="absolute top-4 right-4 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-on-secondary">check</span>
              </motion.div>
            )}

            <div className={`w-16 h-16 rounded-2xl mb-lg flex items-center justify-center transition-colors duration-300
              ${activeRole === 'seller' ? 'bg-secondary text-on-secondary' : 'bg-secondary-container/20 text-secondary group-hover:bg-secondary/20'}
            `}>
              <span className="material-symbols-outlined text-[32px]">storefront</span>
            </div>
            
            <div className="flex items-center gap-2 mb-sm">
              <h3 className="text-headline-sm font-bold text-on-surface">Seller</h3>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Pro</span>
            </div>
            
            <p className="text-body-md text-on-surface-variant mb-xl line-clamp-3">
              List inventory, manage orders, and utilize AI OCR tools to quickly add verified stock.
            </p>
            
            <ul className="space-y-sm text-body-sm text-on-surface-variant mb-xl">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">done</span> Inventory dashboard</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">done</span> AI Smart Scan upload</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">done</span> Negotiation tools</li>
            </ul>

            <div className="mt-auto absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          {/* Admin Role */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => handleRoleSelect('admin')}
            className={`
              relative p-xl rounded-[28px] cursor-pointer transition-all duration-300 overflow-hidden group
              ${activeRole === 'admin' 
                ? 'bg-tertiary/10 border-2 border-tertiary shadow-[0_0_40px_rgba(255,183,134,0.15)] scale-[1.02]' 
                : 'bg-surface-container border-2 border-outline-variant/30 hover:border-tertiary/50 hover:bg-surface-container-high'
              }
            `}
          >
            {activeRole === 'admin' && (
              <motion.div layoutId="active-indicator" className="absolute top-4 right-4 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-on-tertiary">check</span>
              </motion.div>
            )}

            <div className={`w-16 h-16 rounded-2xl mb-lg flex items-center justify-center transition-colors duration-300
              ${activeRole === 'admin' ? 'bg-tertiary text-on-tertiary' : 'bg-tertiary-container/20 text-tertiary group-hover:bg-tertiary/20'}
            `}>
              <span className="material-symbols-outlined text-[32px]">admin_panel_settings</span>
            </div>
            
            <h3 className="text-headline-sm font-bold text-on-surface mb-sm">Admin</h3>
            <p className="text-body-md text-on-surface-variant mb-xl line-clamp-3">
              Oversee platform security, verify seller compliance, and manage dispute resolution.
            </p>
            
            <ul className="space-y-sm text-body-sm text-on-surface-variant mb-xl">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-tertiary">done</span> Global analytics</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-tertiary">done</span> Seller verification approval</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-tertiary">done</span> System configuration</li>
            </ul>

            <div className="mt-auto absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

        </div>

        {/* Action Button */}
        <AnimatePresence>
          {activeRole && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-xl text-center z-20"
            >
              <button 
                onClick={handleContinue}
                className={`
                  px-12 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 mx-auto transition-transform hover:scale-105 active:scale-95
                  ${activeRole === 'buyer' ? 'bg-primary text-on-primary shadow-primary/20' : ''}
                  ${activeRole === 'seller' ? 'bg-secondary text-on-secondary shadow-secondary/20' : ''}
                  ${activeRole === 'admin' ? 'bg-tertiary text-on-tertiary shadow-tertiary/20' : ''}
                `}
              >
                Continue as {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      
      {/* Footer minimal */}
      <footer className="w-full text-center py-6 text-on-surface-variant text-body-sm relative z-10">
        &copy; 2024 MediCycle Platforms Inc. All rights reserved.
      </footer>
    </div>
  );
}
