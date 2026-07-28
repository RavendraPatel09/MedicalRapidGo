import React, { forwardRef } from 'react';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(({ 
  children, 
  className = '', 
  intensity = 'medium',
  ...props 
}, ref) => {
  const intensityClasses = {
    low: 'bg-surface/40 backdrop-blur-md border-white/5',
    medium: 'bg-surface/60 backdrop-blur-xl border-white/10 shadow-glass',
    high: 'bg-surface/80 backdrop-blur-2xl border-white/20 shadow-glass-sm',
  };

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border ${intensityClasses[intensity]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-glass-gradient pointer-events-none mix-blend-overlay opacity-50"></div>
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
});

GlassPanel.displayName = 'GlassPanel';
