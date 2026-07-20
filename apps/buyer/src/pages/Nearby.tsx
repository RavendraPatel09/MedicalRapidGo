import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Card } from '@medicycle/ui';
import { getMockDistanceValue } from '@medicycle/utils';
import type { Medicine } from '@medicycle/types';
import { useNavigate } from 'react-router-dom';

// Same mock data for context
const MOCK_MEDICINES: Medicine[] = [
  {
    id: "med_1", name: "Amoxicillin 500mg", manufacturer: "Pfizer",
    expiryDate: "2027-12-01", price: 15.99, discountPercentage: 20,
    sellerId: "sel_1", sellerName: "City Pharmacy", rating: 4.8,
    imageUrl: "https://via.placeholder.com/400x300/111827/3B82F6?text=Amoxicillin",
    description: "", stock: 50, requiresPrescription: true, category: "Antibiotics", createdAt: "2026-01-01"
  },
  {
    id: "med_2", name: "Ibuprofen 400mg", manufacturer: "J&J",
    expiryDate: "2028-05-15", price: 8.50, sellerId: "sel_2", sellerName: "Jane Doe (Verified)",
    rating: 4.9, imageUrl: "https://via.placeholder.com/400x300/111827/10B981?text=Ibuprofen",
    description: "", stock: 2, requiresPrescription: false, category: "Pain Relief", createdAt: "2026-02-15"
  },
  {
    id: "med_3", name: "Lisinopril 10mg", manufacturer: "Novartis",
    expiryDate: "2027-08-20", price: 22.00, discountPercentage: 10,
    sellerId: "sel_3", sellerName: "HealthPlus Care", rating: 4.7,
    imageUrl: "https://via.placeholder.com/400x300/111827/8B5CF6?text=Lisinopril",
    description: "", stock: 120, requiresPrescription: true, category: "Cardiology", createdAt: "2026-03-10"
  },
];

export default function Nearby() {
  const [radius, setRadius] = useState<number>(5);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return MOCK_MEDICINES.filter(m => getMockDistanceValue(m.id) <= radius).sort((a, b) => getMockDistanceValue(a.id) - getMockDistanceValue(b.id));
  }, [radius]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row w-full bg-background relative overflow-hidden">
      
      {/* Mock Map / Radar Area */}
      <div className="flex-1 relative bg-surfaceLighter/20 border-r border-white/5 flex items-center justify-center overflow-hidden min-h-[50vh]">
        {/* Radar Rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.5], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-[100px] h-[100px] rounded-full border border-accent-blue/50" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-accent-blue/30" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-accent-blue/20" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-accent-blue/10" />
        </div>
        
        {/* User Location */}
        <div className="relative z-10 w-4 h-4 bg-accent-blue rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-white flex items-center justify-center">
          <div className="absolute -bottom-6 text-xs font-bold text-accent-blue whitespace-nowrap bg-surface/80 px-2 py-0.5 rounded-md">You are here</div>
        </div>

        {/* Mock Pins */}
        {filtered.map((med, i) => {
          const dist = getMockDistanceValue(med.id);
          // Simple random angle based on index
          const angle = (i * 137.5) * (Math.PI / 180);
          // Scale distance to pixels roughly (1km = 30px)
          const pxDist = dist * 30;
          const x = Math.cos(angle) * pxDist;
          const y = Math.sin(angle) * pxDist;

          return (
            <motion.div
              key={med.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, x, y }}
              className="absolute z-10 cursor-pointer group"
              onClick={() => navigate(`/medicine/${med.id}`)}
            >
              <div className="w-8 h-8 -ml-4 -mt-4 bg-accent-green rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] border-2 border-background flex items-center justify-center text-white transform transition-transform group-hover:scale-125 group-hover:bg-accent-blue group-hover:shadow-accent-blue">
                <MapPin size={14} />
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface border border-white/10 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap pointer-events-none shadow-xl z-20">
                <p className="font-bold text-white">{med.name}</p>
                <p className="text-gray-400">{dist.toFixed(1)} km away</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* List Sidebar */}
      <div className="w-full md:w-96 bg-surface/50 backdrop-blur-xl flex flex-col h-full md:h-[calc(100vh-80px)] border-l border-white/5 relative z-20 shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Navigation size={20} className="text-accent-blue" /> Nearby Medicines</h2>
          <div className="flex gap-2">
            {[2, 5, 10, 20].map(r => (
              <button
                key={r}
                onClick={() => setRadius(r)}
                className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${radius === r ? 'bg-accent-blue text-white' : 'bg-surfaceLighter text-gray-400 hover:text-white border border-white/5'}`}
              >
                {r} km
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 py-10">No sellers found within {radius} km.</div>
          ) : (
            filtered.map(med => (
              <motion.div key={med.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card 
                  glass 
                  className="p-4 cursor-pointer hover:border-accent-blue/50 transition-colors"
                  onClick={() => navigate(`/medicine/${med.id}`)}
                >
                  <h3 className="font-bold text-white mb-1 truncate">{med.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{med.sellerName}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-accent-green/20 text-accent-green px-2 py-1 rounded font-medium flex items-center gap-1">
                      <MapPin size={12} /> {getMockDistanceValue(med.id).toFixed(1)} km
                    </span>
                    <span className="font-bold text-lg">${med.price}</span>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
