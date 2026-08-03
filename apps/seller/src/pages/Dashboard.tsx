import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "@medicycle/ui";
import { formatCurrency, formatDate } from "@medicycle/utils";
import SellerNavbar from "../components/SellerNavbar";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  TrendingUp,
  PackagePlus,
  AlertTriangle,
  Clock,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Boxes,
} from "lucide-react";

const REVENUE_DATA = [
  { month: "Jan", revenue: 14200, saved: 18500 },
  { month: "Feb", revenue: 21800, saved: 26000 },
  { month: "Mar", revenue: 19400, saved: 22000 },
  { month: "Apr", revenue: 28500, saved: 34000 },
  { month: "May", revenue: 34200, saved: 41000 },
  { month: "Jun", revenue: 42800, saved: 52000 },
];

const AT_RISK_INVENTORY = [
  {
    id: "risk-1",
    name: "Januvia (Sitagliptin) 100mg",
    lot: "LOT-8821-B",
    expiry: "2026-08-25",
    daysRemaining: 22,
    stock: 35,
    currentPrice: 45.0,
    suggestedDiscount: 55,
    status: "URGENT",
  },
  {
    id: "risk-2",
    name: "Lipitor (Atorvastatin) 20mg",
    lot: "LOT-9930-A",
    expiry: "2026-09-30",
    daysRemaining: 58,
    stock: 120,
    currentPrice: 32.0,
    suggestedDiscount: 40,
    status: "RECOMMENDED",
  },
  {
    id: "risk-3",
    name: "Lantus SoloStar Insulin 100u/mL",
    lot: "LOT-1029-C",
    expiry: "2026-10-15",
    daysRemaining: 73,
    stock: 25,
    currentPrice: 68.0,
    suggestedDiscount: 35,
    status: "NORMAL",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-emerald-500/20">
      <SellerNavbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full space-y-8">
        {/* Header Title with 1-Click Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-on-surface">Pharmacy Command Center</h1>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Manage surplus medicine monetization, prevent expiry write-offs, and track batch fulfillment.
            </p>
          </div>

          <Link to="/inventory/add">
            <Button size="md" className="gap-2 bg-emerald-500 hover:bg-emerald-600 shadow-glow">
              <PackagePlus size={16} />
              <span>List New Surplus Batch</span>
            </Button>
          </Link>
        </div>

        {/* 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant font-medium">Total Surplus Recovered</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <DollarSign size={18} />
              </div>
            </div>
            <p className="text-2xl font-bold text-on-surface">$160,900</p>
            <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <TrendingUp size={13} /> +24% vs last quarter
            </p>
          </div>

          <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant font-medium">Active Listed Batches</span>
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Boxes size={18} />
              </div>
            </div>
            <p className="text-2xl font-bold text-on-surface">34 Batches</p>
            <p className="text-[11px] text-sky-400 font-medium">100% DSCSA compliant</p>
          </div>

          <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant font-medium">At-Risk Value Saved</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <AlertTriangle size={18} />
              </div>
            </div>
            <p className="text-2xl font-bold text-amber-400">$28,450</p>
            <p className="text-[11px] text-on-surface-variant">Prevented inventory loss</p>
          </div>

          <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant font-medium">Pending Escrow Orders</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
            </div>
            <p className="text-2xl font-bold text-indigo-400">4 Shipments</p>
            <p className="text-[11px] text-on-surface-variant">$4,280 in verified escrow</p>
          </div>
        </div>

        {/* 6-Month Surplus Recovery Chart */}
        <div className="bg-surface-card border border-surface-border rounded-2xl p-6 space-y-4 shadow-subtle">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-on-surface">Surplus Monetization vs Potential Loss Saved</h2>
              <p className="text-xs text-on-surface-variant">Monthly revenue generated from overstock and near-expiry medications.</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-on-surface-variant">Recovered ($)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-sky-500" />
                <span className="text-on-surface-variant">Potential Loss Saved ($)</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2d44" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#182234",
                    borderColor: "#1f2d44",
                    borderRadius: "8px",
                    color: "#f1f5f9",
                    fontSize: "12px",
                  }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#emeraldGrad)" />
                <Area type="monotone" dataKey="saved" stroke="#0284c7" strokeWidth={2} fillOpacity={1} fill="url(#skyGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Near Expiry Risk Table */}
        <div className="bg-surface-card border border-surface-border rounded-2xl p-6 space-y-4 shadow-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-surface-border">
            <div>
              <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-400" />
                <span>Urgent Expiry Liquidation Alerts</span>
              </h2>
              <p className="text-xs text-on-surface-variant">
                Items approaching the 90-day expiry threshold. Dynamic discounts boost buyer purchase rate by 84%.
              </p>
            </div>
            <Link to="/inventory/add">
              <Button variant="secondary" size="sm" className="text-xs">
                Upload New Batch
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-subtle text-on-surface-variant border-b border-surface-border">
                <tr>
                  <th className="p-3 font-semibold">Medicine & Lot #</th>
                  <th className="p-3 font-semibold">Expiry Date</th>
                  <th className="p-3 font-semibold">Units In Stock</th>
                  <th className="p-3 font-semibold">Current Price</th>
                  <th className="p-3 font-semibold">Suggested Discount</th>
                  <th className="p-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {AT_RISK_INVENTORY.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-hover/50 transition-colors">
                    <td className="p-3">
                      <p className="font-semibold text-on-surface">{item.name}</p>
                      <p className="text-[11px] text-on-surface-variant">{item.lot}</p>
                    </td>
                    <td className="p-3">
                      <span className="font-medium text-amber-400">{formatDate(item.expiry)}</span>
                      <p className="text-[10px] text-on-surface-variant">{item.daysRemaining} days left</p>
                    </td>
                    <td className="p-3 font-medium text-on-surface">{item.stock} boxes</td>
                    <td className="p-3 font-bold text-on-surface">{formatCurrency(item.currentPrice)}</td>
                    <td className="p-3">
                      <Badge variant="warning" size="sm">
                        Apply {item.suggestedDiscount}% Off
                      </Badge>
                    </td>
                    <td className="p-3 text-right">
                      <Link to="/negotiation">
                        <Button size="sm" variant="soft" className="text-xs">
                          Review Deal
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
