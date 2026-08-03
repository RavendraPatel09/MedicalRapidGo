import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "@medicycle/ui";
import { formatCurrency, formatDate } from "@medicycle/utils";
import Navbar from "../components/Navbar";
import {
  ShoppingBag,
  Clock,
  ThermometerSnowflake,
  Truck,
  CheckCircle2,
  FileCheck2,
  Download,
  AlertCircle,
  Building2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function Orders() {
  const [activeTab, setActiveTab] = useState<"ACTIVE" | "PAST">("ACTIVE");
  const [confirmedOrders, setConfirmedOrders] = useState<Record<string, boolean>>({});

  const handleConfirmInspection = (orderId: string) => {
    setConfirmedOrders((prev) => ({ ...prev, [orderId]: true }));
  };

  const activeOrders = [
    {
      id: "MC-2026-9921",
      date: "Today, 10:30 AM",
      seller: "St. Jude Metro Pharmacy",
      items: [
        { name: "Amoxicillin & Clavulanate Potassium 500mg", qty: 2, price: 18.50 },
        { name: "Lantus SoloStar (Insulin Glargine) 100u/mL", qty: 1, price: 68.00 },
      ],
      total: 119.50,
      status: "IN_TRANSIT",
      stepIndex: 2, // 0: Placed, 1: Packed, 2: In-Transit, 3: Delivered
      temperature: "4.2°C (Calibrated 2-8°C)",
      tempStatus: "STABLE",
      courier: "MediRapid Cold-Chain Van #14",
      eta: "45 mins (11:45 AM)",
    },
    {
      id: "MC-2026-8810",
      date: "Yesterday, 2:15 PM",
      seller: "Apex Health Regional Center",
      items: [
        { name: "Lipitor (Atorvastatin Calcium) 20mg", qty: 3, price: 32.00 },
      ],
      total: 104.00,
      status: "DELIVERED",
      stepIndex: 3,
      temperature: "21.5°C Room Temp",
      tempStatus: "STABLE",
      courier: "Direct Hospital Courier",
      eta: "Delivered",
    },
  ];

  const pastOrders = [
    {
      id: "MC-2026-7734",
      date: "Jun 24, 2026",
      seller: "CareFirst Clinical Supply",
      items: [
        { name: "Metformin Hydrochloride ER 750mg", qty: 4, price: 14.20 },
      ],
      total: 64.80,
      status: "COMPLETED",
      inspectionApproved: true,
    },
    {
      id: "MC-2026-6652",
      date: "Jun 10, 2026",
      seller: "Northwest Medical Alliance",
      items: [
        { name: "Ventolin HFA (Albuterol Sulfate) 90mcg", qty: 2, price: 24.50 },
      ],
      total: 57.00,
      status: "COMPLETED",
      inspectionApproved: true,
    },
  ];

  const steps = [
    { label: "Order Placed", desc: "Escrow Locked" },
    { label: "Batch Verified", desc: "Pharmacist Packed" },
    { label: "Cold-Chain Transit", desc: "Live Temp Log" },
    { label: "Delivered & Inspected", desc: "Escrow Settled" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-on-surface flex items-center gap-2">
              <ShoppingBag size={26} className="text-primary-light" />
              <span>Medicine Orders & Tracking</span>
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
              Monitor active shipments, verify continuous cold-chain temperature logs, and release escrow funds.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center bg-surface p-1 rounded-xl border border-surface-border self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("ACTIVE")}
              className={`text-xs px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === "ACTIVE"
                  ? "bg-primary text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Active Orders (2)
            </button>
            <button
              onClick={() => setActiveTab("PAST")}
              className={`text-xs px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === "PAST"
                  ? "bg-primary text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Order History (2)
            </button>
          </div>
        </div>

        {/* Orders List */}
        {activeTab === "ACTIVE" ? (
          <div className="space-y-6">
            {activeOrders.map((order) => {
              const isApproved = confirmedOrders[order.id];

              return (
                <div
                  key={order.id}
                  className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden shadow-subtle space-y-6 p-6"
                >
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-border">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-on-surface">{order.id}</span>
                        <Badge variant={order.stepIndex === 3 ? "success" : "primary"} size="sm" dot>
                          {order.stepIndex === 3 ? "Delivered" : "In Transit"}
                        </Badge>
                      </div>
                      <p className="text-xs text-on-surface-variant">
                        Placed {order.date} • Seller: <strong className="text-on-surface">{order.seller}</strong>
                      </p>
                    </div>

                    <div className="text-right flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-xs text-on-surface-variant">Escrow Total</p>
                        <p className="text-lg font-bold text-primary-light">{formatCurrency(order.total)}</p>
                      </div>
                      <Button variant="secondary" size="sm" className="gap-1.5 text-xs">
                        <Download size={14} />
                        <span>COA & Invoice</span>
                      </Button>
                    </div>
                  </div>

                  {/* 4-Step Progress Bar */}
                  <div className="py-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                      {steps.map((step, idx) => {
                        const isDone = idx <= order.stepIndex;
                        const isCurrent = idx === order.stepIndex;

                        return (
                          <div key={idx} className="flex flex-col items-center text-center space-y-1.5 relative z-10">
                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border ${
                                isDone
                                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                                  : "bg-surface-subtle text-slate-500 border-surface-border"
                              } ${isCurrent ? "ring-2 ring-emerald-400" : ""}`}
                            >
                              {isDone ? <CheckCircle2 size={18} /> : idx + 1}
                            </div>
                            <div>
                              <p className={`text-xs font-bold ${isDone ? "text-on-surface" : "text-on-surface-variant"}`}>
                                {step.label}
                              </p>
                              <p className="text-[11px] text-on-surface-variant">{step.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Cold-Chain Sensor Reading Strip */}
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                        <ThermometerSnowflake size={20} />
                      </div>
                      <div>
                        <p className="text-on-surface-variant">Live Container Temp</p>
                        <p className="font-bold text-emerald-400">{order.temperature}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                        <Truck size={20} />
                      </div>
                      <div>
                        <p className="text-on-surface-variant">Carrier & Courier</p>
                        <p className="font-bold text-on-surface">{order.courier}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-on-surface-variant">Estimated Arrival</p>
                        <p className="font-bold text-amber-400">{order.eta}</p>
                      </div>
                    </div>
                  </div>

                  {/* Items list in order */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-semibold text-on-surface">Order Contents:</p>
                    <div className="divide-y divide-surface-border">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="py-2 flex justify-between items-center text-xs">
                          <span className="text-on-surface">
                            {item.qty}x {item.name}
                          </span>
                          <span className="font-medium text-on-surface-variant">
                            {formatCurrency(item.price * item.qty)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                      <ShieldCheck size={16} className="text-emerald-400" />
                      <span>Protected by Escrow until verified by receiving pharmacist.</span>
                    </div>

                    {order.stepIndex === 3 ? (
                      isApproved ? (
                        <Badge variant="success" size="md">
                          ✓ Inspection Approved & Escrow Released
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          className="gap-2 shadow-glow"
                          onClick={() => handleConfirmInspection(order.id)}
                        >
                          <CheckCircle2 size={16} />
                          <span>Confirm Package & Release Escrow</span>
                        </Button>
                      )
                    ) : (
                      <Link to="/chat">
                        <Button variant="secondary" size="sm" className="text-xs">
                          Message Seller Pharmacist
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Past Orders Tab */
          <div className="space-y-4">
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="bg-surface-card border border-surface-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-subtle"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-on-surface">{order.id}</span>
                    <Badge variant="success" size="sm">Completed</Badge>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Delivered on {order.date} • {order.seller}
                  </p>
                  <p className="text-xs text-on-surface font-medium">
                    {order.items.map((i) => `${i.qty}x ${i.name}`).join(", ")}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant">Total Paid</p>
                    <p className="text-sm font-bold text-on-surface">{formatCurrency(order.total)}</p>
                  </div>
                  <Button variant="secondary" size="sm" className="gap-1.5 text-xs">
                    <Download size={14} />
                    <span>Receipt</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
