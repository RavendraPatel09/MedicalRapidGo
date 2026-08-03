import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Building2, 
  LayoutDashboard, 
  PlusCircle, 
  MessageSquareCode, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";

export default function SellerNavbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/inventory/add", label: "List Surplus Medicine", icon: PlusCircle },
    { to: "/negotiation", label: "Deal Negotiations", icon: MessageSquareCode },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <Building2 size={20} />
          </div>
          <div>
            <span className="font-bold text-lg text-on-surface tracking-tight flex items-center gap-1.5">
              MediCycle
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Seller Hub
              </span>
            </span>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/25"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-hover"
                }`}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Info */}
        <div className="flex items-center gap-3">
          <a
            href="http://localhost:5175"
            className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-on-surface px-2.5 py-1.5 rounded-lg border border-surface-border hover:bg-surface-hover transition-colors"
          >
            <ExternalLink size={13} className="text-primary-light" />
            <span className="hidden sm:inline">Buyer Marketplace</span>
          </a>

          <div className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg bg-surface-card border border-surface-border text-xs">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-on-surface hidden sm:inline">Apex Health Center</span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase">Verified</span>
          </div>
        </div>
      </div>
    </header>
  );
}
