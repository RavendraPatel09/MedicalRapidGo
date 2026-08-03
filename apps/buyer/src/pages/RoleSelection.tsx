import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, Badge } from "@medicycle/ui";
import Navbar from "../components/Navbar";
import { 
  ShoppingBag, 
  Store, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2,
  Lock
} from "lucide-react";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller" | "admin">("buyer");
  const navigate = useNavigate();

  const handleProceed = () => {
    if (selectedRole === "buyer") {
      navigate("/marketplace");
    } else if (selectedRole === "seller") {
      // Navigate to seller app port or local seller route
      window.location.href = "http://localhost:5177";
    } else if (selectedRole === "admin") {
      window.location.href = "http://localhost:5176";
    }
  };

  const roles = [
    {
      id: "buyer" as const,
      title: "Healthcare Buyer",
      subtitle: "Clinics, Hospitals & Licensed Practitioners",
      icon: ShoppingBag,
      color: "sky",
      badge: "Fast Sourcing",
      description: "Search verified surplus medicine inventory, place escrow-backed orders, and track cold-chain temperature logs.",
      features: [
        "Access to discounted verified surplus medicines",
        "Cold-chain delivery status with live temp logs",
        "Automated batch COA certificate retrieval",
        "100% money-back escrow protection",
      ],
      destination: "Browse Marketplace",
    },
    {
      id: "seller" as const,
      title: "Licensed Seller / Pharmacy",
      subtitle: "Certified Distributors & Retail Pharmacies",
      icon: Store,
      color: "emerald",
      badge: "Monetize Surplus",
      description: "List unopened, unexpired surplus inventory, verify batch OCR codes, negotiate deals, and automate compliance.",
      features: [
        "Instant OCR barcode & batch scanning upload",
        "Smart dynamic pricing recommendations",
        "Direct buyer negotiation & counter-offer chat",
        "Automated DEA & DSCSA compliance reports",
      ],
      destination: "Open Seller Dashboard",
    },
    {
      id: "admin" as const,
      title: "Compliance Officer / Admin",
      subtitle: "Platform Regulators & Operations Team",
      icon: ShieldCheck,
      color: "indigo",
      badge: "Platform Control",
      description: "Monitor platform health, verify merchant NPI licenses, resolve escrow disputes, and track system-wide transactions.",
      features: [
        "Merchant verification & license review queue",
        "Cold-chain temperature excursion alerts",
        "Escrow settlement oversight & fraud monitoring",
        "Complete platform audit & regulatory logs",
      ],
      destination: "Launch Admin Portal",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col justify-center">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-subtle text-primary-light text-xs font-semibold">
            <Sparkles size={14} />
            <span>Select Your Operating Workspace</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-on-surface">
            Choose how you will use MediCycle
          </h1>
          <p className="text-sm text-on-surface-variant">
            Each role delivers tailored workflows, security permissions, and tools designed for your medical operations.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative rounded-2xl p-6 transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? "bg-surface-card border-primary ring-2 ring-primary/40 shadow-card"
                    : "bg-surface border-surface-border hover:border-slate-600 hover:bg-surface-card/60"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow">
                    <CheckCircle2 size={16} />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-subtle border border-surface-border flex items-center justify-center text-primary-light">
                      <Icon size={24} />
                    </div>
                    <Badge variant={role.id === "buyer" ? "primary" : role.id === "seller" ? "success" : "neutral"} size="sm">
                      {role.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-on-surface">{role.title}</h3>
                    <p className="text-xs text-primary-light font-medium">{role.subtitle}</p>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {role.description}
                  </p>

                  <div className="pt-3 border-t border-surface-border space-y-2">
                    <p className="text-[11px] font-semibold text-on-surface uppercase tracking-wider">Features Included:</p>
                    <ul className="space-y-1.5">
                      {role.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border">
                  <span className={`text-xs font-semibold flex items-center gap-1 ${isSelected ? "text-primary-light" : "text-on-surface-variant"}`}>
                    {role.destination} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={handleProceed} className="w-full sm:w-auto px-10 gap-2 shadow-glow">
            <span>Continue as {selectedRole.toUpperCase()}</span>
            <ArrowRight size={18} />
          </Button>
          <Link to="/" className="text-xs text-on-surface-variant hover:text-on-surface">
            Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
