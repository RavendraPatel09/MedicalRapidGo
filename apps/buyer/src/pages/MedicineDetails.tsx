import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin, Star, AlertTriangle, ArrowLeft, MessageSquare, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Button, Card } from '@medicycle/ui';
import { useCartStore } from '@medicycle/store';
import { formatCurrency, getMockDistance, formatDate } from '@medicycle/utils';

export default function MedicineDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore(s => s.addItem);
  const [added, setAdded] = useState(false);

  // Mock data fetching based on ID
  const medicine = {
    id: id || "med_1", name: "Amoxicillin 500mg", manufacturer: "Pfizer",
    expiryDate: "2027-12-01", price: 15.99, discountPercentage: 20,
    sellerId: "sel_1", sellerName: "City Pharmacy", rating: 4.8,
    imageUrl: "https://via.placeholder.com/600x400/111827/3B82F6?text=Amoxicillin+Premium",
    description: "Premium grade antibiotic used to treat a number of bacterial infections. Stored in a climate-controlled environment to ensure maximum efficacy.",
    stock: 50, requiresPrescription: true, category: "Antibiotics", createdAt: "2026-01-01"
  };

  const finalPrice = medicine.discountPercentage 
    ? medicine.price * (1 - medicine.discountPercentage / 100) 
    : medicine.price;

  const handleAddToCart = () => {
    addToCart(medicine.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-8 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Marketplace
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image & Badges */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface aspect-[4/3] group">
              <img src={medicine.imageUrl} alt={medicine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-accent-green/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg border border-white/20">
                  <ShieldCheck size={14} /> 100% Verified Safe
                </div>
                {medicine.requiresPrescription && (
                  <div className="bg-accent-orange/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg border border-white/20 w-fit">
                    <AlertTriangle size={14} /> Rx Required
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Details & Action */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span className="text-accent-blue">{medicine.category}</span>
                <span>•</span>
                <span>{medicine.manufacturer}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">{medicine.name}</h1>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="flex items-center gap-1 text-accent-orange"><Star size={16} className="fill-accent-orange" /> {medicine.rating} / 5.0</span>
                <span className="text-gray-500">|</span>
                <span className="flex items-center gap-1 text-gray-300"><MapPin size={16} /> {getMockDistance(medicine.id)}</span>
              </div>
            </div>

            <Card glass className="p-6 mb-8">
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-white">{formatCurrency(finalPrice)}</span>
                {medicine.discountPercentage && (
                  <span className="text-lg text-gray-500 line-through mb-1">{formatCurrency(medicine.price)}</span>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surfaceLighter/50 p-3 rounded-lg border border-white/5">
                  <span className="flex items-center gap-2 text-xs text-gray-400 mb-1"><Clock size={14} /> Expiry Date</span>
                  <span className="font-semibold text-white">{formatDate(medicine.expiryDate)}</span>
                </div>
                <div className="bg-surfaceLighter/50 p-3 rounded-lg border border-white/5">
                  <span className="flex items-center gap-2 text-xs text-gray-400 mb-1"><ShieldCheck size={14} /> Condition</span>
                  <span className="font-semibold text-accent-green">Unopened / Sealed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
                  {added ? <><CheckCircle2 size={18} /> Added</> : <><ShoppingCart size={18} /> Add to Cart</>}
                </Button>
                <Button variant="secondary" size="lg" className="flex-1 gap-2" onClick={() => navigate('/chat')}>
                  <MessageSquare size={18} /> Contact Seller
                </Button>
              </div>
            </Card>

            <div>
              <h3 className="text-lg font-bold mb-2">Description</h3>
              <p className="text-gray-400 leading-relaxed">
                {medicine.description}
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Sold by</p>
                <p className="font-bold text-white flex items-center gap-2">
                  {medicine.sellerName} <ShieldCheck size={14} className="text-accent-blue" />
                </p>
              </div>
              <div className="text-right text-sm">
                <p className="text-gray-400 mb-1">Stock</p>
                <p className="font-bold text-white">{medicine.stock} units available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
