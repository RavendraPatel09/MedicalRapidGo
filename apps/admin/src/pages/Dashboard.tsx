import React, { useState } from "react";
import { Button, Card, Badge } from "@medicycle/ui";
import { formatCurrency, formatDate } from "@medicycle/utils";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  Users,
  AlertTriangle,
  ShieldCheck,
  Download,
  Lock,
  CheckCircle2,
  XCircle,
  Building2,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

const VOLUME_DATA = [
  { name: "Mon", volume: 42000 },
  { name: "Tue", volume: 38000 },
  { name: "Wed", volume: 55000 },
  { name: "Thu", volume: 48000 },
  { name: "Fri", volume: 64000 },
  { name: "Sat", volume: 31000 },
  { name: "Sun", volume: 29000 },
];

const PENDING_VERIFICATIONS = [
  {
    id: "ver-1",
    facility: "Memorial Health Regional Pharmacy",
    npi: "NPI-883920194",
    type: "Hospital Center",
    state: "Illinois",
    appliedDate: "Today, 9:20 AM",
    status: "PENDING",
  },
  {
    id: "ver-2",
    facility: "Midwest Clinical Distribution Vault",
    npi: "NPI-551029384",
    type: "Licensed Wholesaler",
    state: "Indiana",
    appliedDate: "Yesterday",
    status: "PENDING",
  },
];

export default function Dashboard() {
  const [verifications, setVerifications] = useState(PENDING_VERIFICATIONS);

  const handleApprove = (id: string) => {
    setVerifications((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: "APPROVED" } : v))
    );
  };

  const handleReject = (id: string) => {
    setVerifications((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: "REJECTED" } : v))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface">Platform Compliance & Escrow Health</h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            System-wide escrow oversight, cold-chain compliance monitoring, and provider verification.
          </p>
        </div>
        <Button variant="secondary" size="sm" className="gap-2 text-xs">
          <Download size={14} />
          <span>Export Compliance Audit</span>
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
          <div className="flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">30-Day Escrow Volume</span>
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Lock size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-on-surface">{formatCurrency(307000)}</p>
          <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
            <TrendingUp size={13} /> 100% on-time settlement
          </p>
        </div>

        <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
          <div className="flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">Verified Facilities</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Building2 size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-on-surface">542 Institutions</p>
          <p className="text-[11px] text-sky-400 font-medium">NPI & DEA validated</p>
        </div>

        <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
          <div className="flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">Temperature Integrity</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <ShieldCheck size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-emerald-400">99.9%</p>
          <p className="text-[11px] text-on-surface-variant">0 Cold-chain excursions</p>
        </div>

        <div className="bg-surface-card border border-surface-border rounded-xl p-5 space-y-2 shadow-subtle">
          <div className="flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">Pending Verifications</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <FileCheck2 size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-amber-400">2 In Queue</p>
          <p className="text-[11px] text-on-surface-variant">Requires license approval</p>
        </div>
      </div>

      {/* Chart & Audit Logs Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart (8 cols) */}
        <div className="lg:col-span-8 bg-surface-card border border-surface-border rounded-2xl p-6 space-y-4 shadow-subtle">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-on-surface">Weekly Settlement Volume</h2>
              <p className="text-xs text-on-surface-variant">Total funds transacted through locked escrow trust.</p>
            </div>
            <span className="text-xs font-bold text-primary-light">$307,000 Total</span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={VOLUME_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2d44" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
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
                <Bar dataKey="volume" fill="#0284c7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Audit Logs (4 cols) */}
        <div className="lg:col-span-4 bg-surface-card border border-surface-border rounded-2xl p-6 space-y-4 shadow-subtle">
          <h2 className="text-base font-bold text-on-surface">Platform Compliance Feed</h2>

          <div className="space-y-3.5 text-xs">
            <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-emerald-400">Escrow #9921 Released</span>
                <span className="text-[10px] text-on-surface-variant">2 mins ago</span>
              </div>
              <p className="text-on-surface-variant">Receiving pharmacist inspection verified.</p>
            </div>

            <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sky-400">Cold Chain Calibrated</span>
                <span className="text-[10px] text-on-surface-variant">15 mins ago</span>
              </div>
              <p className="text-on-surface-variant">Sensor logger #SN-99824 sync normal (4.2°C).</p>
            </div>

            <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-amber-400">Expiry Threshold Warning</span>
                <span className="text-[10px] text-on-surface-variant">1 hour ago</span>
              </div>
              <p className="text-on-surface-variant">3 batches reached 60-day liquidation window.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Verification Queue Table */}
      <div className="bg-surface-card border border-surface-border rounded-2xl p-6 space-y-4 shadow-subtle">
        <div className="flex items-center justify-between pb-3 border-b border-surface-border">
          <div>
            <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
              <FileCheck2 size={18} className="text-indigo-400" />
              <span>Pending Institutional Verification Queue</span>
            </h2>
            <p className="text-xs text-on-surface-variant">
              Review state pharmacy license and NPI registry records before granting seller privileges.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-subtle text-on-surface-variant border-b border-surface-border">
              <tr>
                <th className="p-3 font-semibold">Institution Name</th>
                <th className="p-3 font-semibold">NPI / License #</th>
                <th className="p-3 font-semibold">Facility Type</th>
                <th className="p-3 font-semibold">Jurisdiction</th>
                <th className="p-3 font-semibold">Submission Date</th>
                <th className="p-3 font-semibold text-right">Verification Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {verifications.map((v) => (
                <tr key={v.id} className="hover:bg-surface-hover/50 transition-colors">
                  <td className="p-3 font-semibold text-on-surface">{v.facility}</td>
                  <td className="p-3 text-sky-400 font-medium">{v.npi}</td>
                  <td className="p-3 text-on-surface-variant">{v.type}</td>
                  <td className="p-3 text-on-surface-variant">{v.state}</td>
                  <td className="p-3 text-on-surface-variant">{v.appliedDate}</td>
                  <td className="p-3 text-right">
                    {v.status === "APPROVED" ? (
                      <Badge variant="success" size="sm">✓ Approved</Badge>
                    ) : v.status === "REJECTED" ? (
                      <Badge variant="danger" size="sm">✗ Rejected</Badge>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="soft"
                          onClick={() => handleApprove(v.id)}
                          className="text-xs text-emerald-400 border-emerald-500/30"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleReject(v.id)}
                          className="text-xs text-rose-400 hover:text-rose-300"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
