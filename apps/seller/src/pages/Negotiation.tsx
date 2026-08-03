import React, { useState } from "react";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import { formatCurrency } from "@medicycle/utils";
import SellerNavbar from "../components/SellerNavbar";
import {
  MessageSquareCode,
  DollarSign,
  CheckCircle2,
  XCircle,
  Building2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";

export default function Negotiation() {
  const [selectedDealId, setSelectedDealId] = useState("deal-1");
  const [counterPrice, setCounterPrice] = useState("28.00");
  const [dealStatus, setDealStatus] = useState<Record<string, "ACCEPTED" | "COUNTERED" | "PENDING">>({
    "deal-1": "PENDING",
  });
  const [chatMessage, setChatMessage] = useState("");

  const deals = [
    {
      id: "deal-1",
      buyer: "Mercy Community Hospital",
      buyerContact: "Dr. Sarah Chen, Chief Pharmacist",
      medicine: "Lipitor (Atorvastatin) 20mg - 50 Bottles",
      lot: "LOT-9930-A",
      askingPrice: 32.0,
      offeredPrice: 26.5,
      totalUnits: 50,
      time: "15 mins ago",
      messages: [
        { sender: "buyer", text: "We have immediate clinical demand for 50 bottles if you can meet us at $26.50/unit.", time: "10:15 AM" },
        { sender: "seller", text: "We can do $28.00/unit considering these have 60 days of shelf life and full cold-storage documentation.", time: "10:20 AM" },
      ],
    },
    {
      id: "deal-2",
      buyer: "Northwestern Urgent Care Network",
      buyerContact: "Dr. Alan Ross",
      medicine: "Januvia (Sitagliptin) 100mg - 20 Boxes",
      lot: "LOT-8821-B",
      askingPrice: 45.0,
      offeredPrice: 40.0,
      totalUnits: 20,
      time: "2 hours ago",
      messages: [
        { sender: "buyer", text: "Can you provide free express cold-chain courier if we purchase all 20 remaining boxes?", time: "8:45 AM" },
      ],
    },
  ];

  const activeDeal = deals.find((d) => d.id === selectedDealId) || deals[0];
  const currentStatus = dealStatus[activeDeal.id] || "PENDING";

  const handleAccept = () => {
    setDealStatus((prev) => ({ ...prev, [activeDeal.id]: "ACCEPTED" }));
  };

  const handleCounter = () => {
    setDealStatus((prev) => ({ ...prev, [activeDeal.id]: "COUNTERED" }));
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-emerald-500/20">
      <SellerNavbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full flex flex-col h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Left Panel: Active Inquiries (4 cols) */}
          <div className="md:col-span-4 bg-surface border border-surface-border rounded-2xl flex flex-col overflow-hidden">
            <div className="p-4 border-b border-surface-border space-y-1">
              <h2 className="font-bold text-sm text-on-surface flex items-center gap-2">
                <MessageSquareCode size={16} className="text-emerald-400" />
                <span>Bulk Deal Negotiations</span>
              </h2>
              <p className="text-[11px] text-on-surface-variant">Real-time buyer offers and counter-proposals</p>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-surface-border">
              {deals.map((deal) => {
                const isSelected = deal.id === selectedDealId;
                const status = dealStatus[deal.id] || "PENDING";

                return (
                  <div
                    key={deal.id}
                    onClick={() => setSelectedDealId(deal.id)}
                    className={`p-4 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-surface-card border-l-2 border-emerald-400"
                        : "hover:bg-surface-card/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-on-surface truncate">{deal.buyer}</span>
                      <span className="text-[10px] text-on-surface-variant">{deal.time}</span>
                    </div>
                    <p className="text-xs text-on-surface font-medium">{deal.medicine}</p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-surface-border/50 text-xs">
                      <span className="text-on-surface-variant">Offer: <strong>{formatCurrency(deal.offeredPrice)}</strong>/ea</span>
                      <Badge variant={status === "ACCEPTED" ? "success" : status === "COUNTERED" ? "primary" : "warning"} size="sm">
                        {status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Negotiation Room (8 cols) */}
          <div className="md:col-span-8 bg-surface border border-surface-border rounded-2xl flex flex-col overflow-hidden">
            {/* Header / Offer Terms */}
            <div className="p-5 border-b border-surface-border bg-surface-card space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-on-surface">{activeDeal.buyer}</h3>
                    <Badge variant="success" size="sm">Licensed Buyer</Badge>
                  </div>
                  <p className="text-xs text-on-surface-variant">{activeDeal.buyerContact} • {activeDeal.medicine}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-on-surface-variant">Potential Deal Total</p>
                  <p className="text-lg font-bold text-emerald-400">
                    {formatCurrency(activeDeal.offeredPrice * activeDeal.totalUnits)}
                  </p>
                </div>
              </div>

              {/* Price comparison cards */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Your List Price</p>
                  <p className="font-bold text-on-surface mt-0.5">{formatCurrency(activeDeal.askingPrice)} / unit</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Buyer's Offer</p>
                  <p className="font-bold text-sky-400 mt-0.5">{formatCurrency(activeDeal.offeredPrice)} / unit</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Total Quantity</p>
                  <p className="font-bold text-emerald-400 mt-0.5">{activeDeal.totalUnits} units</p>
                </div>
              </div>
            </div>

            {/* Chat Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-surface-subtle/50">
              {activeDeal.messages.map((msg, idx) => {
                const isSeller = msg.sender === "seller";
                return (
                  <div key={idx} className={`flex flex-col ${isSeller ? "items-end" : "items-start"}`}>
                    <div
                      className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed ${
                        isSeller
                          ? "bg-emerald-600 text-white rounded-br-none"
                          : "bg-surface-card border border-surface-border text-on-surface rounded-bl-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-on-surface-variant mt-1">{msg.time}</span>
                  </div>
                );
              })}
            </div>

            {/* Decision & Action Bar */}
            <div className="p-4 bg-surface-card border-t border-surface-border space-y-3">
              {currentStatus === "ACCEPTED" ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={16} /> Deal Accepted! Escrow of {formatCurrency(activeDeal.offeredPrice * activeDeal.totalUnits)} Locked.
                  </span>
                  <span>Awaiting Courier Dispatch</span>
                </div>
              ) : currentStatus === "COUNTERED" ? (
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs flex items-center justify-between">
                  <span>Counter-offer of <strong>${counterPrice}/unit</strong> sent to buyer.</span>
                  <span className="text-on-surface-variant">Awaiting Buyer Response</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs text-on-surface-variant">Counter ($):</span>
                    <input
                      type="text"
                      value={counterPrice}
                      onChange={(e) => setCounterPrice(e.target.value)}
                      className="w-20 bg-surface-subtle border border-surface-border text-on-surface text-xs rounded-lg px-2.5 py-1.5 outline-none focus:border-emerald-400"
                    />
                    <Button size="sm" variant="secondary" onClick={handleCounter} className="text-xs">
                      Send Counter
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <Button size="sm" onClick={handleAccept} className="bg-emerald-500 hover:bg-emerald-600 shadow-glow gap-1 text-xs">
                      <CheckCircle2 size={14} />
                      <span>Accept {formatCurrency(activeDeal.offeredPrice)} & Lock Escrow</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
