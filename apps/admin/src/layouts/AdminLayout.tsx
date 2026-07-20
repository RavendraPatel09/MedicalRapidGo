import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Users, Activity, ShieldAlert, FileText, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-background text-white font-sans selection:bg-accent-purple selection:text-white">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 border-r border-white/10 bg-surface/50 backdrop-blur-xl flex flex-col p-4"
      >
        <div className="mb-8 px-2 pt-2">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-pink-400">
            MediCycle
          </h2>
          <p className="text-xs text-gray-400">Admin Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          <SidebarLink to="/admin" icon={<Activity size={18} />} label="Overview" />
          <SidebarLink to="/admin/users" icon={<Users size={18} />} label="Users" />
          <SidebarLink to="/admin/fraud" icon={<ShieldAlert size={18} />} label="Fraud Alerts" />
          <SidebarLink to="/admin/reports" icon={<FileText size={18} />} label="Reports" />
          <SidebarLink to="/admin/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>
        
        <div className="mt-auto border-t border-white/10 pt-4">
          <SidebarLink to="/logout" icon={<LogOut size={18} />} label="Logout" />
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar / Header Area (Optional spacing) */}
        <div className="p-8 pb-0 max-w-6xl mx-auto flex items-center justify-end">
           {/* Add Top Navbar contents here if needed later */}
        </div>
        
        <div className="p-8 pt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  const location = useLocation();
  // Exact match for the overview, prefix match for others to keep active state
  const isActive = location.pathname === to || (to !== '/admin' && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
        isActive ? 'bg-accent-purple/20 text-accent-purple' : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon} <span className="font-medium">{label}</span>
    </Link>
  );
}
