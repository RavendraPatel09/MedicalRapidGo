import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import Navbar from "../components/Navbar";
import {
  MapPin,
  Search,
  Building2,
  Phone,
  Clock,
  ShieldCheck,
  Star,
  Navigation,
  ArrowRight,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

export default function Nearby() {
  const [selectedRadius, setSelectedRadius] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPharmacyId, setSelectedPharmacyId] = useState("pharm-1");

  const pharmacies = [
    {
      id: "pharm-1",
      name: "St. Jude Metro Hospital Pharmacy",
      address: "840 N Michigan Ave, Chicago, IL",
      distance: "1.2 km away",
      rating: 4.9,
      reviewsCount: 142,
      activeSurplusCount: 45,
      courierEta: "30-45 mins",
      phone: "(312) 555-0192",
      hours: "Open 24 Hours",
      licenseNumber: "IL-PHARM-88921",
      coldChainCertified: true,
    },
    {
      id: "pharm-2",
      name: "Apex Health Regional Center",
      address: "1200 S Lake Shore Dr, Chicago, IL",
      distance: "3.8 km away",
      rating: 4.8,
      reviewsCount: 98,
      activeSurplusCount: 38,
      courierEta: "45-60 mins",
      phone: "(312) 555-0481",
      hours: "7:00 AM - 11:00 PM",
      licenseNumber: "IL-PHARM-44719",
      coldChainCertified: true,
    },
    {
      id: "pharm-3",
      name: "CareFirst Clinical Supply Hub",
      address: "2450 W Belmont Ave, Chicago, IL",
      distance: "6.4 km away",
      rating: 4.7,
      reviewsCount: 65,
      activeSurplusCount: 22,
      courierEta: "1-2 hours",
      phone: "(773) 555-0331",
      hours: "8:00 AM - 8:00 PM",
      licenseNumber: "IL-PHARM-61208",
      coldChainCertified: true,
    },
    {
      id: "pharm-4",
      name: "Northwest Medical Alliance Vault",
      address: "5100 N Lincoln Ave, Chicago, IL",
      distance: "9.1 km away",
      rating: 5.0,
      reviewsCount: 110,
      activeSurplusCount: 54,
      courierEta: "1.5-2 hours",
      phone: "(773) 555-0899",
      hours: "Open 24 Hours",
      licenseNumber: "IL-PHARM-99304",
      coldChainCertified: true,
    },
  ];

  const filteredPharmacies = pharmacies.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activePharm = pharmacies.find((p) => p.id === selectedPharmacyId) || pharmacies[0];

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Header */}
        <div className="mb-6 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface flex items-center gap-2">
            <MapPin size={26} className="text-primary-light" />
            <span>Nearby Certified Pharmacies</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Discover verified hospital pharmacies and distributors holding climate-controlled surplus inventory in your region.
          </p>
        </div>

        {/* Filters and Radius bar */}
        <div className="bg-surface p-4 rounded-xl border border-surface-border mb-6 flex flex-col md:flex-row gap-4 items-center justify-between shadow-subtle">
          <div className="w-full md:max-w-md">
            <Input
              placeholder="Search pharmacy name or street address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search size={16} />}
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-on-surface-variant">Search Radius:</span>
            {[5, 10, 25, 50].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRadius(r)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedRadius === r
                    ? "bg-primary text-white font-semibold"
                    : "bg-surface-card border border-surface-border text-on-surface-variant hover:text-on-surface hover:bg-surface-hover"
                }`}
              >
                {r} km
              </button>
            ))}
          </div>
        </div>

        {/* Two-column layout: Pharmacies List (5 cols) & Interactive Regional Map Card (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pharmacy Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {filteredPharmacies.map((pharm) => {
              const isSelected = pharm.id === selectedPharmacyId;

              return (
                <div
                  key={pharm.id}
                  onClick={() => setSelectedPharmacyId(pharm.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-surface-card border-primary ring-1 ring-primary shadow-card"
                      : "bg-surface border-surface-border hover:bg-surface-card hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm text-on-surface">{pharm.name}</h3>
                        <Badge variant="success" size="sm">Verified</Badge>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">{pharm.address}</p>
                    </div>
                    <span className="text-xs font-bold text-primary-light whitespace-nowrap">
                      {pharm.distance}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-surface-border text-[11px] text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <PackageCheck size={13} className="text-emerald-400" />
                      <span><strong>{pharm.activeSurplusCount}</strong> Surplus Batches</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={13} className="text-sky-400" />
                      <span>ETA: {pharm.courierEta}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Preview & Detailed Pharmacy Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Simulated Map Card */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 space-y-6 shadow-subtle">
              <div className="h-64 sm:h-72 w-full rounded-xl bg-surface-subtle border border-surface-border relative overflow-hidden flex items-center justify-center">
                {/* Visual Map Grid Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Map Pins Simulation */}
                {pharmacies.map((p, idx) => {
                  const isSel = p.id === selectedPharmacyId;
                  const positions = [
                    { top: "35%", left: "42%" },
                    { top: "60%", left: "65%" },
                    { top: "25%", left: "75%" },
                    { top: "70%", left: "30%" },
                  ];
                  const pos = positions[idx % positions.length];

                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPharmacyId(p.id)}
                      style={{ top: pos.top, left: pos.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-transform ${
                        isSel
                          ? "bg-primary text-white scale-125 shadow-glow z-20"
                          : "bg-surface border border-surface-border text-primary-light hover:scale-110 z-10"
                      }`}
                    >
                      <MapPin size={18} />
                    </button>
                  );
                })}

                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur px-3 py-1 rounded-lg border border-surface-border text-[11px] text-on-surface-variant flex items-center gap-1.5">
                  <Navigation size={13} className="text-primary-light" />
                  <span>Showing {filteredPharmacies.length} Certified Facilities in {selectedRadius} km Radius</span>
                </div>
              </div>

              {/* Selected Pharmacy Details Info Card */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-surface-border">
                  <div>
                    <h3 className="text-base font-bold text-on-surface">{activePharm.name}</h3>
                    <p className="text-xs text-on-surface-variant">License: {activePharm.licenseNumber} • {activePharm.hours}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="/marketplace">
                      <Button size="sm" className="gap-1.5 text-xs shadow-glow">
                        <span>Browse Pharmacy Inventory</span>
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                    <p className="text-on-surface-variant">Rapid Courier ETA</p>
                    <p className="font-bold text-sky-400 mt-0.5">{activePharm.courierEta}</p>
                  </div>
                  <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                    <p className="text-on-surface-variant">Available Batches</p>
                    <p className="font-bold text-emerald-400 mt-0.5">{activePharm.activeSurplusCount} Verified</p>
                  </div>
                  <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                    <p className="text-on-surface-variant">Trust Score</p>
                    <p className="font-bold text-amber-400 mt-0.5">★ {activePharm.rating} ({activePharm.reviewsCount})</p>
                  </div>
                  <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                    <p className="text-on-surface-variant">Cold Chain Status</p>
                    <p className="font-bold text-emerald-400 mt-0.5">Calibrated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
