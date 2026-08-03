import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import { useCartStore } from "@medicycle/store";
import { MOCK_MEDICINES, formatCurrency, formatDate } from "@medicycle/utils";
import Navbar from "../components/Navbar";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  ThermometerSnowflake,
  Lock,
  CheckCircle2,
  Truck,
  CreditCard,
  Building2,
  FileText,
} from "lucide-react";

export default function Cart() {
  const { items, addItem, removeItem, clearCart } = useCartStore();
  const navigate = useNavigate();

  const [step, setStep] = useState<"CART" | "CHECKOUT" | "SUCCESS">("CART");
  const [courierType, setCourierType] = useState<"EXPRESS" | "STANDARD">("EXPRESS");
  const [address, setAddress] = useState("St. Jude Community Hospital, Suite 400, Chicago, IL");
  const [isProcessing, setIsProcessing] = useState(false);

  // Map cart items to full medicine objects
  const cartDetails = items.map((cartItem) => {
    const med = MOCK_MEDICINES.find((m) => m.id === cartItem.medicineId) || {
      id: cartItem.medicineId,
      name: "Verified Medical Item",
      manufacturer: "Certified Manufacturer",
      price: 25.0,
      stock: 50,
      expiryDate: "2026-12-31",
      category: "Pharmaceutical",
      sellerName: "Licensed Pharmacy",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    };
    return { ...med, quantity: cartItem.quantity };
  });

  const subtotal = cartDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = courierType === "EXPRESS" ? 14.5 : 8.0;
  const escrowProtectionFee = 0.0; // Free on platform
  const total = subtotal + (items.length > 0 ? deliveryFee : 0);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      setStep("SUCCESS");
    }, 1200);
  };

  if (step === "SUCCESS") {
    return (
      <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-surface-card border border-surface-border rounded-2xl p-8 text-center space-y-6 shadow-card">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <Badge variant="success" size="sm">Escrow Funded & Locked</Badge>
              <h2 className="text-2xl font-bold text-on-surface">Order #MC-2026-9921 Placed!</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Your payment of <strong className="text-on-surface">{formatCurrency(total || 148.5)}</strong> is held in certified escrow. The seller pharmacy is packaging your temperature-monitored shipment.
              </p>
            </div>

            <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Dispatch ETA:</span>
                <span className="font-semibold text-sky-400">Within 2 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Logistics Carrier:</span>
                <span className="font-semibold text-on-surface">MediRapid Cold-Chain Van</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link to="/orders" className="w-full block">
                <Button size="lg" className="w-full shadow-glow">
                  Track Live Order & Temperature
                </Button>
              </Link>
              <Link to="/marketplace" className="w-full block">
                <Button variant="secondary" size="md" className="w-full">
                  Return to Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="mb-6 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface flex items-center gap-2.5">
            <ShoppingBag size={26} className="text-primary-light" />
            <span>{step === "CART" ? "Your Medicine Cart" : "Escrow Checkout"}</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            {step === "CART"
              ? "Review your unexpired certified surplus medicine items before checkout."
              : "Review delivery facility address and authorize secure escrow payment."}
          </p>
        </div>

        {items.length === 0 && step === "CART" ? (
          <div className="bg-surface p-12 rounded-2xl border border-surface-border text-center space-y-4 max-w-lg mx-auto my-12">
            <div className="w-14 h-14 rounded-full bg-surface-subtle border border-surface-border flex items-center justify-center mx-auto text-on-surface-variant">
              <ShoppingBag size={28} />
            </div>
            <h2 className="text-lg font-bold text-on-surface">Your Cart is Empty</h2>
            <p className="text-xs text-on-surface-variant">
              You haven't added any surplus medications to your cart yet.
            </p>
            <Link to="/marketplace" className="inline-block pt-2">
              <Button size="md" className="gap-2">
                <span>Browse Marketplace</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Cart Items or Checkout Form (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {step === "CART" ? (
                <>
                  <div className="bg-surface p-4 rounded-xl border border-surface-border flex items-center justify-between text-xs text-on-surface-variant">
                    <span>{cartDetails.length} Distinct Medical Items</span>
                    <button
                      onClick={clearCart}
                      className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
                    >
                      <Trash2 size={13} /> Clear All
                    </button>
                  </div>

                  {cartDetails.map((item) => (
                    <div
                      key={item.id}
                      className="bg-surface-card border border-surface-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-subtle"
                    >
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover bg-surface-subtle shrink-0"
                        />
                        <div className="space-y-1">
                          <h3 className="font-semibold text-sm text-on-surface line-clamp-1">{item.name}</h3>
                          <p className="text-xs text-on-surface-variant">{item.manufacturer}</p>
                          <div className="flex items-center gap-2 text-[11px] text-amber-400">
                            <span>Exp: {formatDate(item.expiryDate)}</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-on-surface-variant">{item.sellerName}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-border">
                        {/* Quantity controls */}
                        <div className="flex items-center bg-surface-subtle border border-surface-border rounded-lg p-1">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) addItem(item.id, -1);
                              else removeItem(item.id);
                            }}
                            className="w-7 h-7 rounded flex items-center justify-center text-on-surface hover:bg-surface-hover transition-colors"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-on-surface">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addItem(item.id, 1)}
                            className="w-7 h-7 rounded flex items-center justify-center text-on-surface hover:bg-surface-hover transition-colors"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm font-bold text-on-surface">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                          <p className="text-[11px] text-on-surface-variant">
                            {formatCurrency(item.price)} each
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-on-surface-variant hover:text-rose-400 p-1.5 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                /* Step 2: Checkout Info Form */
                <div className="bg-surface p-6 rounded-2xl border border-surface-border space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                    <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
                      <Truck size={18} className="text-primary-light" />
                      <span>Delivery & Cold-Chain Selection</span>
                    </h2>
                    <button
                      onClick={() => setStep("CART")}
                      className="text-xs text-primary-light hover:underline"
                    >
                      Edit Cart Items
                    </button>
                  </div>

                  <div className="space-y-4">
                    <Input
                      label="Receiving Healthcare Facility / Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      leftIcon={<Building2 size={16} />}
                    />

                    <div>
                      <label className="block text-xs font-medium text-on-surface-variant mb-2">
                        Cold-Chain Courier Option:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div
                          onClick={() => setCourierType("EXPRESS")}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-colors ${
                            courierType === "EXPRESS"
                              ? "bg-primary-subtle border-primary ring-1 ring-primary"
                              : "bg-surface-card border-surface-border hover:bg-surface-hover"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs text-on-surface">MediRapid Refrigerated Van</span>
                            <span className="text-xs font-bold text-primary-light">$14.50</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-1">
                            Live Bluetooth temp log • 2-3 hours ETA
                          </p>
                        </div>

                        <div
                          onClick={() => setCourierType("STANDARD")}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-colors ${
                            courierType === "STANDARD"
                              ? "bg-primary-subtle border-primary ring-1 ring-primary"
                              : "bg-surface-card border-surface-border hover:bg-surface-hover"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs text-on-surface">Insulated Secure Box</span>
                            <span className="text-xs font-bold text-on-surface">$8.00</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-1">
                            Passive gel cold-pack • Same-day ETA
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2">
                      <p className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                        <Lock size={14} className="text-indigo-400" />
                        <span>Escrow Holding Account Guarantee</span>
                      </p>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed">
                        Your payment will be secured in a licensed institutional escrow trust. Funds are released to the seller only after you perform receipt inspection and verify the unbroken manufacturer seal.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Order Summary & Escrow Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 space-y-6 shadow-card sticky top-24">
                <h2 className="text-base font-bold text-on-surface pb-3 border-b border-surface-border">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Medicines Subtotal:</span>
                    <span className="font-medium text-on-surface">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Cold-Chain Delivery:</span>
                    <span className="font-medium text-on-surface">{formatCurrency(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Escrow Settlement Fee:</span>
                    <span className="font-medium text-emerald-400">FREE ($0.00)</span>
                  </div>
                  <div className="pt-3 border-t border-surface-border flex justify-between text-base font-bold text-on-surface">
                    <span>Total Amount:</span>
                    <span className="text-xl text-primary-light">{formatCurrency(total)}</span>
                  </div>
                </div>

                {step === "CART" ? (
                  <Button
                    size="lg"
                    className="w-full gap-2 shadow-glow"
                    onClick={() => setStep("CHECKOUT")}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="w-full gap-2 shadow-glow"
                    isLoading={isProcessing}
                    onClick={handlePlaceOrder}
                  >
                    <Lock size={16} />
                    <span>Authorize Escrow & Place Order</span>
                  </Button>
                )}

                <div className="p-3 bg-surface-subtle rounded-xl border border-surface-border text-[11px] text-on-surface-variant space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck size={14} /> 100% Quality & Authenticity Guaranteed
                  </div>
                  <p>
                    Inspect package on arrival. If temperature seals or packaging are compromised, get an instant 100% refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
