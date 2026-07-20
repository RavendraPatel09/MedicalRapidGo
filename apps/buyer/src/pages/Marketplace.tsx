import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button, Card, Input } from '@medicycle/ui';
import { getMockDistance, formatCurrency, getMockDistanceValue } from '@medicycle/utils';
import { useCartStore, useWishlistStore } from '@medicycle/store';
import type { Medicine } from '@medicycle/types';

// Realistic Mock Data
const MOCK_MEDICINES: Medicine[] = [
  {
    id: "med_1", name: "Amoxicillin 500mg", manufacturer: "Pfizer",
    expiryDate: "2027-12-01", price: 15.99, discountPercentage: 20,
    sellerId: "sel_1", sellerName: "City Pharmacy", rating: 4.8,
    imageUrl: "https://via.placeholder.com/400x300/111827/3B82F6?text=Amoxicillin",
    description: "Antibiotic used to treat a number of bacterial infections.",
    stock: 50, requiresPrescription: true, category: "Antibiotics", createdAt: "2026-01-01"
  },
  {
    id: "med_2", name: "Ibuprofen 400mg", manufacturer: "Johnson & Johnson",
    expiryDate: "2028-05-15", price: 8.50, sellerId: "sel_2", sellerName: "Jane Doe (Verified)",
    rating: 4.9, imageUrl: "https://via.placeholder.com/400x300/111827/10B981?text=Ibuprofen",
    description: "Nonsteroidal anti-inflammatory drug (NSAID).",
    stock: 2, requiresPrescription: false, category: "Pain Relief", createdAt: "2026-02-15"
  },
  {
    id: "med_3", name: "Lisinopril 10mg", manufacturer: "Novartis",
    expiryDate: "2027-08-20", price: 22.00, discountPercentage: 10,
    sellerId: "sel_3", sellerName: "HealthPlus Care", rating: 4.7,
    imageUrl: "https://via.placeholder.com/400x300/111827/8B5CF6?text=Lisinopril",
    description: "Used to treat high blood pressure and heart failure.",
    stock: 120, requiresPrescription: true, category: "Cardiology", createdAt: "2026-03-10"
  },
  {
    id: "med_4", name: "Cetirizine 10mg", manufacturer: "GSK",
    expiryDate: "2029-01-10", price: 12.75, sellerId: "sel_4", sellerName: "John Smith (Verified)",
    rating: 5.0, imageUrl: "https://via.placeholder.com/400x300/111827/F59E0B?text=Cetirizine",
    description: "Antihistamine used to relieve allergy symptoms.",
    stock: 5, requiresPrescription: false, category: "Allergy", createdAt: "2026-04-05"
  }
];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [maxDistance, setMaxDistance] = useState<number>(20);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Antibiotics", "Pain Relief", "Cardiology", "Allergy"];
  const distanceFilters = [2, 5, 10, 20];

  const filteredMedicines = useMemo(() => {
    return MOCK_MEDICINES.filter(med => {
      const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || med.category === selectedCategory;
      const distance = getMockDistanceValue(med.id);
      const matchesDistance = distance <= maxDistance;
      return matchesSearch && matchesCategory && matchesDistance;
    });
  }, [search, selectedCategory, maxDistance]);

  return (
    <div className="min-h-screen bg-background pt-8 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Marketplace</h1>
            <p className="text-gray-400">Discover safe, verified medicines nearby.</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <Input 
                placeholder="Search medicines..." 
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" className="px-3">
              <Filter size={18} />
            </Button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-accent-blue" /> Max Distance
              </h3>
              <div className="flex flex-wrap gap-2">
                {distanceFilters.map(d => (
                  <button
                    key={d}
                    onClick={() => setMaxDistance(d)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors border ${
                      maxDistance === d 
                        ? 'bg-accent-blue border-accent-blue text-white' 
                        : 'bg-surface border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {d} km
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(c => (
                  <label key={c} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                    <input 
                      type="radio" 
                      name="category"
                      checked={selectedCategory === c}
                      onChange={() => setSelectedCategory(c)}
                      className="bg-surface border-white/10 text-accent-blue focus:ring-accent-blue"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedicines.map(med => (
                <MedicineCard key={med.id} medicine={med} />
              ))}
            </div>
            {filteredMedicines.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <p>No medicines found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function MedicineCard({ medicine }: { medicine: Medicine }) {
  const addToCart = useCartStore(s => s.addItem);
  const toggleWishlist = useWishlistStore(s => s.toggleItem);
  const wishlistItems = useWishlistStore(s => s.items);
  
  const isWishlisted = wishlistItems.includes(medicine.id);
  const finalPrice = medicine.discountPercentage 
    ? medicine.price * (1 - medicine.discountPercentage / 100) 
    : medicine.price;

  return (
    <Card glass className="flex flex-col group h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={medicine.imageUrl} 
          alt={medicine.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-surface/80 backdrop-blur-md px-2 py-1 rounded text-xs font-medium flex items-center gap-1 border border-white/10">
          <MapPin size={12} className="text-accent-blue" /> {getMockDistance(medicine.id)}
        </div>
        <button 
          onClick={() => toggleWishlist(medicine.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
        >
          <Heart size={16} className={isWishlisted ? "fill-accent-purple text-accent-purple" : "text-gray-300"} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight truncate pr-2">{medicine.name}</h3>
          <div className="flex items-center gap-1 text-accent-orange text-sm font-medium">
            <Star size={14} className="fill-accent-orange" /> {medicine.rating}
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mb-4">{medicine.manufacturer}</p>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 mb-1">Sold by <span className="text-gray-300">{medicine.sellerName}</span></p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white">{formatCurrency(finalPrice)}</span>
              {medicine.discountPercentage && (
                <span className="text-sm text-gray-500 line-through">{formatCurrency(medicine.price)}</span>
              )}
            </div>
          </div>
          
          <Button size="sm" onClick={() => addToCart(medicine.id, 1)} className="rounded-full h-10 w-10 p-0 shrink-0">
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
