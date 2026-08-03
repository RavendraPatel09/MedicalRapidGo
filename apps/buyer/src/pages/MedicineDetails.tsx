import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Card, Badge } from "@medicycle/ui";
import { MOCK_MEDICINES, formatCurrency, formatDate, getDaysUntilExpiry, getMockDistance } from "@medicycle/utils";
import { useCartStore } from "@medicycle/store";
import Navbar from "../components/Navbar";
import {
  ArrowLeft,
  ShieldCheck,
  ThermometerSnowflake,
  Clock,
  Building2,
  FileCheck,
  Lock,
  Truck,
  CheckCircle2,
  AlertTriangle,
  ShoppingBag,
  Share2,
  Plus,
  Minus,
  MessageSquare,
} from "lucide-react";

export default function MedicineDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [addedNotification, setAddedNotification] = useState(false);

  const { addItem } = useCartStore();

  const medicine = MOCK_MEDICINES.find((m) => m.id === id) || MOCK_MEDICINES[0];
  const daysLeft = getDaysUntilExpiry(medicine.expiryDate);

  const handleAddToCart = () => {
    addItem(medicine.id, quantity);
    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(medicine.id, quantity);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Back Link & Category Path */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Marketplace</span>
          </Link>
          <div className="flex items-center gap-2">
            <Badge variant="primary" size="sm">{medicine.category}</Badge>
            <Badge variant="success" size="sm" dot>DSCSA Verified</Badge>
          </div>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Image & Certificate Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Product Image Card */}
            <div className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden p-4 relative shadow-subtle">
              <div className="h-80 sm:h-96 w-full rounded-xl bg-surface-subtle overflow-hidden relative flex items-center justify-center">
                <img
                  src={medicine.imageUrl}
                  alt={medicine.name}
                  className="w-full h-full object-cover"
                />
                {medicine.discountPercentage && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white font-bold text-sm px-3 py-1 rounded-lg shadow">
                    {medicine.discountPercentage}% DISCOUNT
                  </div>
                )}
              </div>
            </div>

            {/* Pharmaceutical & Batch Specifications */}
            <div className="bg-surface p-6 rounded-2xl border border-surface-border space-y-4">
              <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
                <FileCheck size={18} className="text-primary-light" />
                <span>Pharmaceutical & Batch Verification</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Manufacturer</p>
                  <p className="font-semibold text-on-surface mt-0.5">{medicine.manufacturer}</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Batch / Lot Number</p>
                  <p className="font-semibold text-on-surface mt-0.5">LOT-2026-MC894</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">National Drug Code (NDC)</p>
                  <p className="font-semibold text-on-surface mt-0.5">0093-2264-01</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Storage Condition</p>
                  <p className="font-semibold text-sky-400 mt-0.5">Controlled 20°C - 25°C</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Expiration Date</p>
                  <p className="font-semibold text-amber-400 mt-0.5">{formatDate(medicine.expiryDate)}</p>
                </div>
                <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
                  <p className="text-on-surface-variant">Tamper Seal</p>
                  <p className="font-semibold text-emerald-400 mt-0.5">100% Intact Factory Seal</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {medicine.description}
                </p>
              </div>
            </div>

            {/* Seller Reputation Profile */}
            <div className="bg-surface p-6 rounded-2xl border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-subtle border border-primary/20 flex items-center justify-center text-primary-light font-bold text-lg">
                  <Building2 size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-on-surface">{medicine.sellerName}</h3>
                    <Badge variant="success" size="sm">Verified Seller</Badge>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Licensed Institutional Pharmacy • {getMockDistance(medicine.id)} • ★ {medicine.rating} Rating
                  </p>
                </div>
              </div>
              <Link to="/chat">
                <Button variant="secondary" size="sm" className="gap-1.5 text-xs">
                  <MessageSquare size={14} />
                  <span>Contact Pharmacist</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Pricing & Escrow Checkout Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 space-y-6 shadow-card sticky top-24">
              {/* Price & Discount */}
              <div className="space-y-2 pb-4 border-b border-surface-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-on-surface">{formatCurrency(medicine.price)}</span>
                  <span className="text-sm text-on-surface-variant line-through">
                    {formatCurrency(medicine.price * (1 + (medicine.discountPercentage || 30) / 100))}
                  </span>
                  <Badge variant="success" size="sm">
                    Save {medicine.discountPercentage}%
                  </Badge>
                </div>
                <p className="text-xs text-on-surface-variant">Price per unit (Includes tax and verified inspection)</p>
              </div>

              {/* Expiry Warning Strip */}
              <div className={`p-3 rounded-lg border flex items-center gap-2.5 text-xs ${
                daysLeft < 90 ? "bg-amber-500/10 border-amber-500/20 text-amber-300" : "bg-sky-500/10 border-sky-500/20 text-sky-300"
              }`}>
                <Clock size={16} className="shrink-0" />
                <span>
                  Expires on <strong>{formatDate(medicine.expiryDate)}</strong> ({daysLeft} days remaining)
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-on-surface">Select Quantity:</span>
                  <span className="text-emerald-400 font-medium">{medicine.stock} units available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-surface-subtle border border-surface-border rounded-lg p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-hover transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-on-surface">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(medicine.stock, q + 1))}
                      className="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-hover transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="text-right flex-1">
                    <p className="text-xs text-on-surface-variant">Subtotal</p>
                    <p className="text-lg font-bold text-on-surface">{formatCurrency(medicine.price * quantity)}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <Button size="lg" className="w-full shadow-glow gap-2" onClick={handleBuyNow}>
                  <Lock size={16} />
                  <span>Instant Escrow Checkout</span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={16} />
                  <span>{addedNotification ? "Added to Cart!" : "Add to Cart"}</span>
                </Button>
              </div>

              {/* Escrow & Cold-Chain Assurances */}
              <div className="space-y-3 pt-4 border-t border-surface-border text-xs text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-on-surface">Escrow Protection:</strong> Funds released only after your receiving inspection is approved.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ThermometerSnowflake size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-on-surface">Cold-Chain Guaranteed:</strong> Dispatched in calibrated refrigerated containers.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Truck size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-on-surface">Insured Rapid Courier:</strong> Direct delivery within 2-4 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
