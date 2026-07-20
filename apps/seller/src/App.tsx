import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Package, BarChart3, MessageSquare, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="flex min-h-screen bg-background text-white font-sans selection:bg-accent-green selection:text-white">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 border-r border-white/10 bg-surface/50 backdrop-blur-xl flex flex-col p-4"
      >
        <div className="mb-8 px-2 pt-2">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-green to-teal-400">
            MediCycle
          </h2>
          <p className="text-xs text-gray-400">Seller Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          <SidebarLink to="/" icon={<BarChart3 size={18} />} label="Dashboard" />
          <SidebarLink to="/inventory" icon={<Package size={18} />} label="Inventory" />
          <SidebarLink to="/messages" icon={<MessageSquare size={18} />} label="Messages" />
          <SidebarLink to="/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>
        
        <div className="mt-auto border-t border-white/10 pt-4">
          <SidebarLink to="/logout" icon={<LogOut size={18} />} label="Logout" />
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add other routes later */}
        </Routes>
      </main>
    </div>
  );
}

function SidebarLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  // Mocking active state for "/"
  const isActive = to === "/";
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
        isActive ? 'bg-accent-green/20 text-accent-green' : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon} <span className="font-medium">{label}</span>
    </Link>
  );
}

export default App;
