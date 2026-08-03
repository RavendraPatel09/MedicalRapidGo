import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import { useAuthStore } from "@medicycle/store";
import Navbar from "../components/Navbar";
import {
  UserCircle2,
  Lock,
  Mail,
  ShieldCheck,
  Building2,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("dr.miller@chicagohealth.org");
  const [password, setPassword] = useState("••••••••••••");
  const [npiNumber, setNpiNumber] = useState("NPI-994827104");
  const [role, setRole] = useState<"BUYER" | "SELLER">("BUYER");

  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role, isLogin ? "Dr. Miller, MD" : "St. Jude Clinic Admin");
    navigate("/marketplace");
  };

  const handleDemoBuyer = () => {
    login("BUYER", "Dr. Sarah Chen, MD (Mercy Health)");
    navigate("/marketplace");
  };

  const handleDemoSeller = () => {
    login("SELLER", "Marcus Brody, RPh (Apex Health)");
    window.location.href = "http://localhost:5177";
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-md mx-auto px-4 py-12 w-full flex flex-col justify-center">
        <div className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-card">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-primary-subtle border border-primary/20 flex items-center justify-center text-primary-light mx-auto">
              <ShieldCheck size={26} />
            </div>
            <h1 className="text-2xl font-bold text-on-surface">
              {isLogin ? "Healthcare Provider Login" : "Register Institutional Account"}
            </h1>
            <p className="text-xs text-on-surface-variant">
              Secure, DSCSA-compliant surplus exchange network.
            </p>
          </div>

          {/* Login / Register Tab Switcher */}
          <div className="flex bg-surface-subtle p-1 rounded-xl border border-surface-border">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                isLogin
                  ? "bg-surface-card text-on-surface shadow-sm border border-surface-border"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                !isLogin
                  ? "bg-surface-card text-on-surface shadow-sm border border-surface-border"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              New Institution
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Institutional Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail size={16} />}
              required
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock size={16} />}
              required
            />

            {!isLogin && (
              <Input
                label="National Provider Identifier (NPI) / License #"
                value={npiNumber}
                onChange={(e) => setNpiNumber(e.target.value)}
                leftIcon={<FileCheck2 size={16} />}
                helperText="Required for pharmacy & clinic verification"
                required
              />
            )}

            <Button size="lg" type="submit" className="w-full gap-2 shadow-glow">
              <span>{isLogin ? "Sign In to Portal" : "Submit for Verification"}</span>
              <ArrowRight size={16} />
            </Button>
          </form>

          {/* Quick Demo Access Bar */}
          <div className="pt-4 border-t border-surface-border space-y-2">
            <p className="text-[11px] font-semibold text-on-surface-variant text-center uppercase tracking-wider">
              Instant 1-Click Demo Logins:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" size="sm" onClick={handleDemoBuyer} className="text-xs">
                Demo Buyer
              </Button>
              <Button variant="secondary" size="sm" onClick={handleDemoSeller} className="text-xs">
                Demo Seller
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
