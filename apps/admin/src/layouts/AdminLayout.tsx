import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Activity,
  Users,
  ShieldCheck,
  FileCheck,
  Settings,
  ExternalLink,
  ShieldAlert,
  Lock,
} from "lucide-react";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-background text-on-background font-sans selection:bg-indigo-500/20">
      {/* Sidebar */}
      <aside className="w-64 border-r border-surface-border bg-surface flex flex-col p-4">
        <div className="mb-8 px-2 pt-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <ShieldCheck size={18} />
              </div>
              <h2 className="text-lg font-bold text-on-surface">MediCycle</h2>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">Admin & Compliance Ops</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1.5">
          <SidebarLink to="/admin" icon={<Activity size={17} />} label="Overview & Health" />
          <SidebarLink to="/admin/verification" icon={<FileCheck size={17} />} label="Pharmacy Verification" />
          <SidebarLink to="/admin/escrow" icon={<Lock size={17} />} label="Escrow Settlements" />
          <SidebarLink to="/admin/alerts" icon={<ShieldAlert size={17} />} label="Cold-Chain Alerts" />
          <SidebarLink to="/admin/users" icon={<Users size={17} />} label="Institutions Directory" />
        </nav>

        <div className="mt-auto border-t border-surface-border pt-4 space-y-2">
          <a
            href="http://localhost:5175"
            className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors"
          >
            <ExternalLink size={14} className="text-primary-light" />
            <span>Buyer Marketplace</span>
          </a>
          <a
            href="http://localhost:5177"
            className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors"
          >
            <ExternalLink size={14} className="text-emerald-400" />
            <span>Seller Hub</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/admin" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
        isActive
          ? "bg-indigo-500/15 text-indigo-300 font-semibold border border-indigo-500/25"
          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-hover"
      }`}
    >
      {icon} <span>{label}</span>
    </Link>
  );
}
