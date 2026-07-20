import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Store, ShieldAlert, ArrowLeft } from 'lucide-react';
import { useAuthStore } from '@medicycle/store';
import { Button, Card, Input } from '@medicycle/ui';
import { useNavigate } from 'react-router-dom';
import type { Role } from '@medicycle/types';

type AuthStep = 'ROLE_SELECTION' | 'LOGIN';

export default function Auth() {
  const [step, setStep] = useState<AuthStep>('ROLE_SELECTION');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Background Glow based on role */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <motion.div 
          animate={{
            backgroundColor: selectedRole === 'BUYER' ? '#3B82F6' : 
                             selectedRole === 'SELLER' ? '#10B981' : 
                             selectedRole === 'ADMIN' ? '#8B5CF6' : '#0F172A',
            scale: selectedRole ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="w-[800px] h-[800px] rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4">
        <AnimatePresence mode="wait">
          {step === 'ROLE_SELECTION' ? (
            <RoleSelection 
              key="roles" 
              onSelect={(role) => {
                setSelectedRole(role);
                setTimeout(() => setStep('LOGIN'), 400);
              }} 
            />
          ) : (
            <LoginForm 
              key="login" 
              role={selectedRole!} 
              onBack={() => {
                setStep('ROLE_SELECTION');
                setSelectedRole(null);
              }} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function RoleSelection({ onSelect }: { onSelect: (role: Role) => void }) {
  const roles = [
    {
      id: 'BUYER' as Role,
      title: 'Buyer',
      desc: 'Purchase verified medicines safely.',
      icon: <ShoppingBag size={32} />,
      color: 'text-accent-blue',
      glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
      border: 'hover:border-accent-blue/50'
    },
    {
      id: 'SELLER' as Role,
      title: 'Seller',
      desc: 'List unused medicines & pharmacies.',
      icon: <Store size={32} />,
      color: 'text-accent-green',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      border: 'hover:border-accent-green/50'
    },
    {
      id: 'ADMIN' as Role,
      title: 'Administrator',
      desc: 'Manage platform & review fraud.',
      icon: <ShieldAlert size={32} />,
      color: 'text-accent-purple',
      glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      border: 'hover:border-accent-purple/50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-2">Welcome to MediCycle</h2>
      <p className="text-gray-400 mb-12">How would you like to continue?</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card 
              glass
              className={`p-8 cursor-pointer transition-all duration-300 ${role.glow} ${role.border} group`}
              onClick={() => onSelect(role.id)}
            >
              <div className={`mb-6 p-4 rounded-2xl bg-surface inline-block border border-white/5 group-hover:scale-110 transition-transform ${role.color}`}>
                {role.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{role.title}</h3>
              <p className="text-sm text-gray-400">{role.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function LoginForm({ role, onBack }: { role: Role, onBack: () => void }) {
  const login = useAuthStore((s) => s.login);
  // We mock navigation since we are building a multi-port monorepo setup in reality,
  // but for the sake of frontend demonstration we will just mock the login success.
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(role, `Mock ${role}`);
    // If it was a single app, we'd navigate to /dashboard.
    // Since it's a monorepo, in production they might be on different subdomains.
    // For now, we just redirect back to landing or fake a dashboard inside buyer app.
    alert(`Logged in as ${role}! (Mock)`);
    if(role === 'BUYER') navigate('/marketplace');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-md mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to roles
      </button>

      <Card glass className="p-8">
        <h2 className="text-2xl font-bold mb-2 capitalize">{role.toLowerCase()} Login</h2>
        <p className="text-gray-400 text-sm mb-8">Sign in to your account</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input type="email" placeholder="Email address" required defaultValue="demo@medicycle.app" />
          <Input type="password" placeholder="Password" required defaultValue="password123" />
          
          <div className="flex justify-between items-center text-sm pt-2">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input type="checkbox" className="rounded bg-surface border-white/10 text-accent-blue focus:ring-accent-blue" />
              Remember me
            </label>
            <a href="#" className="text-accent-blue hover:underline">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full mt-6">
            Sign In
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}
