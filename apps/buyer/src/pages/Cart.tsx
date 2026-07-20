import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button, Card, Input } from '@medicycle/ui';
import { useCartStore } from '@medicycle/store';
import { formatCurrency } from '@medicycle/utils';

export default function Cart() {
  const { items, removeItem, clearCart } = useCartStore();
  const [checkoutStep, setCheckoutStep] = useState<'CART' | 'PAYMENT' | 'SUCCESS'>('CART');

  // In a real app we'd fetch full details for items in cart.
  // For the mock, we assume a static price of $15.99 for demonstration.
  const subtotal = items.reduce((acc, item) => acc + (15.99 * item.quantity), 0);
  const deliveryFee = 5.00;
  const total = subtotal + deliveryFee;

  if (checkoutStep === 'SUCCESS') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md w-full">
          <Card glass className="p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} className="text-accent-green" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
            <p className="text-gray-400 mb-8">Your medicine is secured and being prepared for safe exchange.</p>
            <Button onClick={() => setCheckoutStep('CART')} className="w-full">
              Track Order
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-8 px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <ShoppingCart /> {checkoutStep === 'CART' ? 'Your Cart' : 'Secure Checkout'}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-4">
            {checkoutStep === 'CART' ? (
              items.length === 0 ? (
                <Card glass className="p-12 text-center text-gray-500">
                  Your cart is empty.
                </Card>
              ) : (
                items.map((item) => (
                  <Card key={item.medicineId} glass className="p-4 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-surface border border-white/10 overflow-hidden">
                      <img src={`https://via.placeholder.com/150/111827/3B82F6?text=Medicine`} alt="med" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Mock Medicine</h3>
                      <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl">{formatCurrency(15.99 * item.quantity)}</p>
                      <button onClick={() => removeItem(item.medicineId)} className="text-red-400 text-sm hover:underline flex items-center justify-end gap-1 mt-1">
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </Card>
                ))
              )
            ) : (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <Card glass className="p-6 mb-4">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-accent-blue" /> Payment Details</h3>
                  <div className="space-y-4">
                    <Input placeholder="Card Number" defaultValue="4242 4242 4242 4242" />
                    <div className="flex gap-4">
                      <Input placeholder="MM/YY" defaultValue="12/28" />
                      <Input placeholder="CVC" defaultValue="123" />
                    </div>
                    <Input placeholder="Cardholder Name" defaultValue="John Doe" />
                  </div>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Summary Sidebar */}
          {items.length > 0 && (
            <div className="w-full lg:w-80 shrink-0">
              <Card glass className="p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm text-gray-300 mb-4 border-b border-white/10 pb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>{formatCurrency(deliveryFee)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <span className="font-bold text-white">Total</span>
                  <span className="font-bold text-2xl text-white">{formatCurrency(total)}</span>
                </div>
                
                {checkoutStep === 'CART' ? (
                  <Button className="w-full gap-2" onClick={() => setCheckoutStep('PAYMENT')}>
                    Proceed to Checkout <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button className="w-full bg-accent-green hover:bg-emerald-600" onClick={() => { clearCart(); setCheckoutStep('SUCCESS'); }}>
                    Pay Securely
                  </Button>
                )}
                <p className="text-xs text-gray-500 text-center mt-4">Payments are processed securely via Stripe. Buyer protection included.</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
