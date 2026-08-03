import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "@medicycle/ui";
import { MOCK_MEDICINES, formatCurrency, formatDate } from "@medicycle/utils";
import Navbar from "../components/Navbar";
import {
  ShieldCheck,
  ThermometerSnowflake,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Clock,
  TrendingDown,
  FileCheck2,
  Truck,
  HeartPulse,
} from "lucide-react";

export default function Landing() {
  const featuredMeds = MOCK_MEDICINES.slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-surface-border/50">
          {/* Subtle eye-comfort background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/25 text-primary-light text-xs font-semibold">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>FDA & DSCSA Compliant Surplus Exchange</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-on-surface leading-tight">
                Save on Certified Medicines.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-light to-indigo-400">
                  Zero Compromise on Safety.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Connect certified healthcare institutions, hospitals, and licensed pharmacies to safely buy and sell unexpired, factory-sealed surplus inventory with guaranteed cold-chain tracking and escrow security.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link to="/marketplace" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto px-7 gap-2 shadow-glow">
                    <span>Explore Verified Inventory</span>
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/roles" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto px-7">
                    Select Your Role
                  </Button>
                </Link>
              </div>

              {/* Key Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>100% Unopened & Sealed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ThermometerSnowflake size={15} className="text-sky-400" />
                  <span>Continuous Cold-Chain Logs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock size={15} className="text-indigo-400" />
                  <span>Escrow-Protected Funds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-surface border-b border-surface-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-surface-border/50">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-on-surface">$4.8M+</p>
                <p className="text-xs text-on-surface-variant">Healthcare Costs Saved</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400">99.8%</p>
                <p className="text-xs text-on-surface-variant">Batch Verification Pass Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-on-surface">540+</p>
                <p className="text-xs text-on-surface-variant">Certified Pharmacies & Clinics</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-sky-400">2-4 hrs</p>
                <p className="text-xs text-on-surface-variant">Avg Rapid Delivery Window</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Marketplace Highlights */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">
                <Sparkles size={14} /> Live Marketplace
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                Featured Verified Surplus Inventory
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Inspected, batch-verified, and stored in certified climate-controlled vaults.
              </p>
            </div>
            <Link to="/marketplace">
              <Button variant="outline" size="sm" className="gap-2">
                <span>View All 120+ Listings</span>
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMeds.map((med) => (
              <Card key={med.id} className="flex flex-col overflow-hidden group hover:border-primary/40 transition-all p-0">
                <div className="h-44 w-full bg-surface-subtle overflow-hidden relative">
                  <img
                    src={med.imageUrl}
                    alt={med.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {med.discountPercentage && (
                    <div className="absolute top-2.5 right-2.5 bg-emerald-500/90 text-white font-bold text-xs px-2 py-0.5 rounded shadow">
                      {med.discountPercentage}% OFF
                    </div>
                  )}
                  <div className="absolute top-2.5 left-2.5">
                    <Badge variant="primary" size="sm">
                      {med.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm text-on-surface group-hover:text-primary-light transition-colors line-clamp-1">
                      {med.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-1">{med.manufacturer}</p>
                  </div>

                  <div className="pt-2 border-t border-surface-border flex items-center justify-between text-xs text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <Clock size={13} className="text-amber-400" />
                      <span>Exp: {formatDate(med.expiryDate)}</span>
                    </div>
                    <span className="text-emerald-400 font-medium">{med.stock} in stock</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-lg font-bold text-on-surface">{formatCurrency(med.price)}</span>
                      <span className="text-[11px] text-on-surface-variant ml-1 line-through">
                        {formatCurrency(med.price * (1 + (med.discountPercentage || 30) / 100))}
                      </span>
                    </div>
                    <Link to={`/medicine/${med.id}`}>
                      <Button size="sm" variant="soft">
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-surface border-y border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                How MediCycle Ensures Total Safety
              </h2>
              <p className="text-sm text-on-surface-variant mt-2">
                A closed-loop platform built strictly for certified medical institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-base">
                  1
                </div>
                <h3 className="font-semibold text-base text-on-surface">Verified Sourcing</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Only licensed pharmacies and hospitals with verified NPI credentials can list surplus inventory.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-base">
                  2
                </div>
                <h3 className="font-semibold text-base text-on-surface">AI & Batch Analysis</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Every batch is cross-referenced against manufacturer databases and recalls with OCR batch scanning.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-base">
                  3
                </div>
                <h3 className="font-semibold text-base text-on-surface">Cold-Chain Logistics</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Temperature-controlled dispatch with live Bluetooth data-logger confirmation at delivery.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-base">
                  4
                </div>
                <h3 className="font-semibold text-base text-on-surface">Instant Escrow Release</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Payments remain locked until the receiving pharmacist scans and confirms intact tamper seals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="p-8 sm:p-12 text-center bg-gradient-to-br from-surface-card via-surface-card to-primary/10 border border-primary/20 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface">
              Ready to reduce medical waste and save on essential medicines?
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto">
              Join hundreds of clinics and certified pharmacies exchanging verified inventory today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/marketplace">
                <Button size="lg" className="px-8 shadow-glow">
                  Browse Marketplace
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="secondary" size="lg" className="px-8">
                  Register as Merchant
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="bg-surface border-t border-surface-border py-8 text-xs text-on-surface-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MediCycle Healthcare Platforms. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/roles" className="hover:text-on-surface transition-colors">Role Portal</Link>
            <Link to="/marketplace" className="hover:text-on-surface transition-colors">Marketplace</Link>
            <Link to="/nearby" className="hover:text-on-surface transition-colors">Pharmacies</Link>
            <Link to="/auth" className="hover:text-on-surface transition-colors">Compliance & Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
