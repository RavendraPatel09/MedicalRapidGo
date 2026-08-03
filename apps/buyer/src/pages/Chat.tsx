import React, { useState } from "react";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import Navbar from "../components/Navbar";
import {
  MessageSquare,
  Send,
  Building2,
  ShieldCheck,
  Paperclip,
  CheckCircle2,
  FileCheck,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Chat() {
  const [activeConvId, setActiveConvId] = useState("conv-1");
  const [inputMessage, setInputMessage] = useState("");

  const [conversations, setConversations] = useState([
    {
      id: "conv-1",
      sellerName: "St. Jude Metro Pharmacy",
      pharmacist: "Dr. Elena Vance, PharmD",
      license: "IL-PHARM-88921",
      lastMessage: "The COA certificate and cold-chain data log have been verified.",
      time: "10:42 AM",
      unread: 0,
      messages: [
        {
          id: "m-1",
          sender: "buyer",
          text: "Hello, could you confirm if the 500mg Amoxicillin batch LOT-2026-MC894 has uninterrupted 20-25°C storage records?",
          time: "10:35 AM",
        },
        {
          id: "m-2",
          sender: "seller",
          text: "Good morning! Yes, it is stored in our primary monitored climate vault. All continuous sensor data is logged digitally.",
          time: "10:38 AM",
        },
        {
          id: "m-3",
          sender: "seller",
          text: "The COA certificate and cold-chain data log have been verified and attached to the order manifest.",
          time: "10:42 AM",
        },
      ],
    },
    {
      id: "conv-2",
      sellerName: "Apex Health Regional Center",
      pharmacist: "Marcus Brody, RPh",
      license: "IL-PHARM-44719",
      lastMessage: "We can accept $30/unit for a bulk order of 50 Lipitor bottles.",
      time: "Yesterday",
      unread: 1,
      messages: [
        {
          id: "m-201",
          sender: "buyer",
          text: "We are interested in acquiring 50 units of the Lipitor 20mg batch expiring Sept 2026.",
          time: "Yesterday",
        },
        {
          id: "m-202",
          sender: "seller",
          text: "We can accept $30/unit for a bulk order of 50 Lipitor bottles.",
          time: "Yesterday",
        },
      ],
    },
  ]);

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: "buyer" as const,
      text: inputMessage.trim(),
      time: "Just now",
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConvId
          ? {
              ...c,
              lastMessage: newMsg.text,
              time: "Just now",
              messages: [...c.messages, newMsg],
            }
          : c
      )
    );

    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full flex flex-col h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Left Panel: Conversations List (4 cols) */}
          <div className="md:col-span-4 bg-surface border border-surface-border rounded-2xl flex flex-col overflow-hidden">
            <div className="p-4 border-b border-surface-border space-y-1">
              <h2 className="font-bold text-sm text-on-surface flex items-center gap-2">
                <MessageSquare size={16} className="text-primary-light" />
                <span>Verified Provider Messages</span>
              </h2>
              <p className="text-[11px] text-on-surface-variant">End-to-end encrypted medical inquiries</p>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-surface-border">
              {conversations.map((c) => {
                const isSelected = c.id === activeConvId;

                return (
                  <div
                    key={c.id}
                    onClick={() => setActiveConvId(c.id)}
                    className={`p-4 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-surface-card border-l-2 border-primary"
                        : "hover:bg-surface-card/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-on-surface truncate">{c.sellerName}</span>
                      <span className="text-[10px] text-on-surface-variant">{c.time}</span>
                    </div>
                    <p className="text-xs text-primary-light font-medium">{c.pharmacist}</p>
                    <p className="text-xs text-on-surface-variant truncate mt-1">{c.lastMessage}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Active Chat Thread (8 cols) */}
          <div className="md:col-span-8 bg-surface border border-surface-border rounded-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-surface-border flex items-center justify-between bg-surface-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary/20 flex items-center justify-center text-primary-light font-bold">
                  <Building2 size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-on-surface">{activeConv.sellerName}</h3>
                    <Badge variant="success" size="sm">Verified</Badge>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">
                    {activeConv.pharmacist} • License: {activeConv.license}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <ShieldCheck size={16} />
                <span className="hidden sm:inline">HIPAA Protected Channel</span>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-surface-subtle/50">
              {activeConv.messages.map((msg) => {
                const isMe = msg.sender === "buyer";

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed shadow-subtle ${
                        isMe
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-surface-card border border-surface-border text-on-surface rounded-bl-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-on-surface-variant mt-1 px-1">{msg.time}</span>
                  </div>
                );
              })}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-surface-card border-t border-surface-border flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a clinical question, inquiry, or batch specification request..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-surface-subtle border border-surface-border text-on-surface placeholder:text-on-surface-variant/50 text-xs rounded-xl px-4 py-2.5 outline-none focus:border-primary"
              />
              <Button size="sm" type="submit" className="gap-1 px-4">
                <span>Send</span>
                <Send size={13} />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
