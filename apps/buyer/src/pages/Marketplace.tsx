import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Input } from "@medicycle/ui";
import { MOCK_MEDICINES, formatCurrency, formatDate, getDaysUntilExpiry, getMockDistance } from "@medicycle/utils";
import { useCartStore } from "@medicycle/store";
import Navbar from "../components/Navbar";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Clock,
  ShieldCheck,
  Star,
  ShoppingBag,
  Check,
  Sparkles,
  ArrowUpDown,
  MapPin,
  AlertCircle,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Antibiotics",
  "Cardiovascular",
  "Diabetes",
  "Respiratory",
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "expiry" | "discount">("featured");
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const { addItem } = useCartStore();

  const handleAddToCart = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(id, 1);
    setAddedItemIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  const filteredMedicines = useMemo(() => {
    return MOCK_MEDICINES.filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.sellerName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || med.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "expiry") return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      if (sortBy === "discount") return (b.discountPercentage || 0) - (a.discountPercentage || 0);
      return 0;
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-primary/20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Header Title & Description */}
        <div className="mb-6 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface">Verified Medicine Marketplace</h1>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Explore unexpired, factory-sealed surplus inventory from licensed healthcare facilities.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-surface p-4 rounded-xl border border-surface-border mb-6 space-y-4 shadow-subtle">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="w-full md:max-w-md">
              <Input
                placeholder="Search by drug name, generic brand, manufacturer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<Search size={16} />}
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs text-on-surface-variant whitespace-nowrap flex items-center gap-1">
                <ArrowUpDown size={14} /> Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-surface-subtle border border-surface-border text-on-surface text-xs rounded-lg px-3 py-2 outline-none focus:border-primary"
              >
                <option value="featured">Featured Listings</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="expiry">Expiry: Earliest First</option>
                <option value="discount">Highest Discount %</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-xs font-semibold text-on-surface-variant mr-1">Categories:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-white font-semibold"
                    : "bg-surface-card border border-surface-border text-on-surface-variant hover:text-on-surface hover:bg-surface-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-4 text-xs text-on-surface-variant">
          <span>Showing <strong className="text-on-surface">{filteredMedicines.length}</strong> verified medications</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck size={14} /> All items backed by Escrow Protection
          </span>
        </div>

        {/* Grid of Medicines */}
        {filteredMedicines.length === 0 ? (
          <div className="bg-surface p-12 rounded-xl border border-surface-border text-center space-y-3">
            <AlertCircle size={36} className="text-on-surface-variant mx-auto" />
            <h3 className="text-lg font-bold text-on-surface">No medicines found</h3>
            <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
              We couldn't find any medications matching your search term "{searchTerm}". Try clearing your filters.
            </p>
            <Button size="sm" variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedicines.map((med) => {
              const daysLeft = getDaysUntilExpiry(med.expiryDate);
              const isAdded = addedItemIds[med.id];

              return (
                <div
                  key={med.id}
                  className="bg-surface-card border border-surface-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-200 shadow-subtle flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="h-44 w-full bg-surface-subtle overflow-hidden relative">
                      <img
                        src={med.imageUrl}
                        alt={med.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <Badge variant="primary" size="sm">
                          {med.category}
                        </Badge>
                      </div>
                      {med.discountPercentage && (
                        <div className="absolute top-2.5 right-2.5 bg-emerald-500 text-white font-bold text-xs px-2 py-0.5 rounded shadow">
                          {med.discountPercentage}% OFF
                        </div>
                      )}
                    </div>

                    {/* Body Content */}
                    <div className="p-4 space-y-3">
                      <div>
                        <Link to={`/medicine/${med.id}`} className="hover:text-primary-light transition-colors">
                          <h3 className="font-semibold text-sm text-on-surface line-clamp-1">
                            {med.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-on-surface-variant line-clamp-1">{med.manufacturer}</p>
                      </div>

                      {/* Expiry & Stock Badges */}
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-surface-border/60">
                        <div className="flex items-center gap-1 text-on-surface-variant">
                          <Clock size={13} className={daysLeft < 90 ? "text-amber-400" : "text-slate-400"} />
                          <span>Exp: {formatDate(med.expiryDate)}</span>
                        </div>
                        <span className="text-emerald-400 font-medium text-[11px]">{med.stock} units</span>
                      </div>

                      {/* Seller & Distance Info */}
                      <div className="flex items-center justify-between text-[11px] text-on-surface-variant bg-surface-subtle p-2 rounded-lg border border-surface-border/40">
                        <span className="font-medium text-on-surface truncate max-w-[140px]">{med.sellerName}</span>
                        <span className="flex items-center gap-0.5 text-primary-light">
                          <MapPin size={11} /> {getMockDistance(med.id)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="p-4 pt-0 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xl font-bold text-on-surface">{formatCurrency(med.price)}</span>
                        <span className="text-xs text-on-surface-variant line-through ml-1.5">
                          {formatCurrency(med.price * (1 + (med.discountPercentage || 30) / 100))}
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        Save {formatCurrency(med.price * ((med.discountPercentage || 30) / 100))}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link to={`/medicine/${med.id}`} className="w-full">
                        <Button variant="secondary" size="sm" className="w-full text-xs">
                          Details
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant={isAdded ? "soft" : "primary"}
                        onClick={(e) => handleAddToCart(med.id, e)}
                        className="w-full text-xs gap-1"
                      >
                        {isAdded ? (
                          <>
                            <Check size={14} className="text-emerald-400" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={14} />
                            <span>Add</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
