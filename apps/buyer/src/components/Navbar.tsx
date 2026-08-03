import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "@medicycle/store";
import { 
  Activity, 
  Store, 
  MapPin, 
  ShoppingBag, 
  MessageSquare, 
  UserCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { to: "/marketplace", label: "Marketplace", icon: Store },
    { to: "/nearby", label: "Nearby Pharmacies", icon: MapPin },
    { to: "/orders", label: "My Orders", icon: ShoppingBag },
    { to: "/chat", label: "Messages", icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Activity size={20} />
          </div>
          <div>
            <span className="font-bold text-lg text-on-surface tracking-tight flex items-center gap-1.5">
              MediCycle
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary-subtle text-primary-light">
                Verified
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-subtle text-primary-light font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-hover"
                }`}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Role switch, Cart, Auth */}
        <div className="flex items-center gap-3">
          <Link
            to="/roles"
            className="hidden sm:flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-on-surface px-2.5 py-1.5 rounded-lg border border-surface-border hover:bg-surface-hover transition-colors"
          >
            <ShieldCheck size={14} className="text-primary-light" />
            <span>Switch Role</span>
          </Link>

          {/* Cart Icon with Counter */}
          <Link
            to="/cart"
            className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-hover border border-surface-border transition-colors flex items-center justify-center"
            title="Shopping Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Account / Auth */}
          <Link
            to="/auth"
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg bg-surface-card border border-surface-border hover:border-primary/40 hover:bg-surface-hover transition-colors text-xs font-medium text-on-surface"
          >
            <UserCircle2 size={18} className="text-primary-light" />
            <span className="hidden sm:inline">Provider Portal</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
