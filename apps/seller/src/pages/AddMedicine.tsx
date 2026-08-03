import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import { formatCurrency } from "@medicycle/utils";
import SellerNavbar from "../components/SellerNavbar";
import {
  ScanBarcode,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FileCheck2,
  ThermometerSnowflake,
  ShieldCheck,
  PackageCheck,
  Upload,
} from "lucide-react";

export default function AddMedicine() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isScanning, setIsScanning] = useState(false);

  // Form Fields
  const [ndc, setNdc] = useState("0093-2264-01");
  const [name, setName] = useState("Amoxicillin & Clavulanate Potassium");
  const [manufacturer, setManufacturer] = useState("Sandoz Pharmaceuticals");
  const [category, setCategory] = useState("Antibiotics");
  const [batchLot, setBatchLot] = useState("LOT-2026-MC894");
  const [expiryDate, setExpiryDate] = useState("2026-11-15");
  const [storageTemp, setStorageTemp] = useState("Controlled Room Temp (20°C - 25°C)");
  const [quantity, setQuantity] = useState("45");
  const [mrp, setMrp] = useState("34.00");
  const [discountPercent, setDiscountPercent] = useState(45);

  const discountedPrice = (Number(mrp) * (1 - discountPercent / 100)).toFixed(2);

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setNdc("0069-4200-30");
      setName("Lipitor (Atorvastatin Calcium) 20mg");
      setManufacturer("Pfizer Inc.");
      setCategory("Cardiovascular");
      setBatchLot("LOT-2026-PFZ102");
      setExpiryDate("2026-09-30");
      setMrp("64.00");
      setDiscountPercent(50);
    }, 800);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-emerald-500/20">
      <SellerNavbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-on-surface">List Surplus Medicine Batch</h1>
            <p className="text-xs text-on-surface-variant">
              DSCSA compliant multi-point verification for hospital and pharmacy overstock.
            </p>
          </div>
          <Link to="/" className="text-xs text-on-surface-variant hover:text-on-surface flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>

        {/* Steps Indicator */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {[
            { num: 1, label: "NDC & Drug" },
            { num: 2, label: "Batch & Climate" },
            { num: 3, label: "Smart Pricing" },
            { num: 4, label: "COA & Publish" },
          ].map((s) => (
            <div
              key={s.num}
              className={`p-3 rounded-xl border text-center transition-colors ${
                step === s.num
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold"
                  : step > s.num
                  ? "bg-surface border-surface-border text-emerald-400"
                  : "bg-surface-subtle border-surface-border text-on-surface-variant"
              }`}
            >
              <div className="text-xs">Step {s.num}: {s.label}</div>
            </div>
          ))}
        </div>

        {/* Form Body */}
        <div className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 shadow-card">
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <h2 className="text-base font-bold text-on-surface">Step 1: National Drug Code (NDC) Lookup</h2>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handleSimulateScan}
                  isLoading={isScanning}
                  className="gap-1.5 text-xs text-emerald-400 border-emerald-500/30"
                >
                  <ScanBarcode size={16} />
                  <span>OCR Barcode Scan</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="National Drug Code (NDC)"
                  value={ndc}
                  onChange={(e) => setNdc(e.target.value)}
                  placeholder="e.g. 0093-2264-01"
                />
                <Input
                  label="Trade / Brand Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Manufacturer"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                />
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1.5">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-surface-subtle border border-surface-border text-on-surface text-sm rounded-lg px-3 py-2.5 outline-none focus:border-primary"
                  >
                    <option value="Antibiotics">Antibiotics</option>
                    <option value="Cardiovascular">Cardiovascular</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Respiratory">Respiratory</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-surface-border">
                <Button size="md" onClick={() => setStep(2)} className="gap-2">
                  <span>Continue to Batch Details</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-surface-border">
                <h2 className="text-base font-bold text-on-surface">Step 2: Batch Lot & Storage Conditions</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Lot / Batch Number"
                  value={batchLot}
                  onChange={(e) => setBatchLot(e.target.value)}
                />
                <Input
                  label="Expiration Date"
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-on-surface-variant mb-1.5">
                    Temperature & Climate Specification
                  </label>
                  <select
                    value={storageTemp}
                    onChange={(e) => setStorageTemp(e.target.value)}
                    className="w-full bg-surface-subtle border border-surface-border text-on-surface text-sm rounded-lg px-3 py-2.5 outline-none focus:border-primary"
                  >
                    <option value="Controlled Room Temp (20°C - 25°C)">Controlled Room Temp (20°C - 25°C)</option>
                    <option value="Refrigerated Cold Chain (2°C - 8°C)">Refrigerated Cold Chain (2°C - 8°C)</option>
                    <option value="Frozen (-20°C)">Frozen (-20°C)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-surface-border">
                <Button variant="secondary" size="md" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button size="md" onClick={() => setStep(3)} className="gap-2">
                  <span>Continue to Pricing</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-surface-border">
                <h2 className="text-base font-bold text-on-surface">Step 3: Quantity & AI Pricing Optimization</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Surplus Units / Bottles Available"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                  label="Standard Wholesale MRP ($)"
                  type="number"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value)}
                />
              </div>

              {/* Dynamic Pricing Recommendation */}
              <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                    <Sparkles size={14} className="text-emerald-400" />
                    <span>AI Recommended Discount:</span>
                  </span>
                  <span className="text-sm font-bold text-emerald-400">{discountPercent}% OFF</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(Number(e.target.value))}
                  className="w-full accent-emerald-400"
                />
                <div className="flex items-baseline justify-between text-xs pt-1 border-t border-surface-border/50">
                  <span className="text-on-surface-variant">Listing Unit Price:</span>
                  <span className="text-lg font-bold text-on-surface">${discountedPrice} / unit</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-surface-border">
                <Button variant="secondary" size="md" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button size="md" onClick={() => setStep(4)} className="gap-2">
                  <span>Review & Publish</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-surface-border">
                <h2 className="text-base font-bold text-on-surface">Step 4: Certificate of Analysis (COA) & Confirmation</h2>
              </div>

              <div className="border-2 border-dashed border-surface-border rounded-xl p-6 text-center space-y-2 bg-surface-subtle">
                <Upload size={32} className="text-emerald-400 mx-auto" />
                <p className="text-xs font-semibold text-on-surface">Certificate of Analysis (COA) Attached</p>
                <p className="text-[11px] text-on-surface-variant">Batch-MC894-COA-Verified.pdf (1.2 MB)</p>
              </div>

              {/* Summary Card Preview */}
              <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Medicine:</span>
                  <span className="font-bold text-on-surface">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Lot # & Expiry:</span>
                  <span className="font-medium text-amber-400">{batchLot} • Exp: {expiryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Quantity & Price:</span>
                  <span className="font-bold text-emerald-400">{quantity} units @ ${discountedPrice}/ea</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-surface-border">
                <Button variant="secondary" size="md" onClick={() => setStep(3)}>
                  Back
                </Button>
                <Button size="md" onClick={handleFinalSubmit} className="gap-2 bg-emerald-500 hover:bg-emerald-600 shadow-glow">
                  <CheckCircle2 size={16} />
                  <span>Publish to Verified Marketplace</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
