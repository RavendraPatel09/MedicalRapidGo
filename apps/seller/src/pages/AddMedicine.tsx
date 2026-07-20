import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Scan, CheckCircle2, PackagePlus, AlertCircle } from 'lucide-react';
import { Card, Button, Input } from '@medicycle/ui';
import { useNavigate } from 'react-router-dom';

type UploadState = 'IDLE' | 'SCANNING' | 'SUCCESS';

export default function AddMedicine() {
  const [uploadState, setUploadState] = useState<UploadState>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    expiry: '',
    price: '',
    stock: '1'
  });
  
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      startOcrScan();
    }
  };

  const startOcrScan = () => {
    setUploadState('SCANNING');
    
    // Mock OCR delay
    setTimeout(() => {
      setUploadState('SUCCESS');
      // Auto-fill mock data
      setFormData({
        name: 'Amoxicillin 500mg',
        manufacturer: 'Pfizer',
        expiry: '2027-12-01',
        price: '',
        stock: '1'
      });
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.price) return;
    
    // In a real app we'd save this to backend/state.
    alert('Medicine listed successfully!');
    navigate('/inventory');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1 flex items-center gap-2"><PackagePlus /> List a Medicine</h1>
          <p className="text-gray-400">Upload a photo and let our AI extract the details.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Upload & OCR Zone */}
        <div className="space-y-6">
          <Card glass className="p-6">
            <h3 className="font-bold mb-4">1. Upload Photo</h3>
            
            <div 
              className={`relative h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center overflow-hidden transition-colors ${
                uploadState === 'SUCCESS' ? 'border-accent-green bg-accent-green/5' : 'border-white/20 bg-surface/50 hover:border-accent-blue/50 cursor-pointer'
              }`}
              onClick={() => uploadState === 'IDLE' && fileInputRef.current?.click()}
            >
              <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileSelect} accept="image/*" />
              
              <AnimatePresence mode="wait">
                {uploadState === 'IDLE' && (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4 text-accent-blue">
                      <Upload size={32} />
                    </div>
                    <p className="font-medium text-white mb-1">Click or drag image here</p>
                    <p className="text-sm text-gray-400">Ensure the label and expiry date are clearly visible.</p>
                  </motion.div>
                )}

                {uploadState === 'SCANNING' && (
                  <motion.div key="scanning" className="absolute inset-0 w-full h-full bg-surfaceLighter/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="absolute inset-0">
                      {/* Fake Image Background */}
                      <div className="w-full h-full bg-[url('https://via.placeholder.com/400x300/111827/ffffff?text=Analyzing...')] opacity-30 bg-cover bg-center"></div>
                      
                      {/* Laser Scanner */}
                      <motion.div 
                        initial={{ top: '0%' }}
                        animate={{ top: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-accent-green shadow-[0_0_15px_rgba(16,185,129,1)]"
                      />
                    </div>
                    <div className="z-10 flex flex-col items-center">
                      <Scan size={32} className="text-accent-green animate-pulse mb-2" />
                      <p className="text-accent-green font-bold">Extracting Details via AI...</p>
                    </div>
                  </motion.div>
                )}

                {uploadState === 'SUCCESS' && (
                  <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                    <CheckCircle2 size={48} className="text-accent-green mx-auto mb-2" />
                    <p className="font-bold text-accent-green">Scan Successful</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-4 flex items-start gap-2 text-sm text-accent-orange bg-accent-orange/10 p-3 rounded-lg border border-accent-orange/20">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <p>Uploading expired, opened, or fake medicines will result in a permanent ban. All submissions undergo manual review.</p>
            </div>
          </Card>
        </div>

        {/* Verification Form */}
        <div className="space-y-6">
          <Card glass className="p-6">
            <h3 className="font-bold mb-4">2. Review & Price</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Medicine Name</label>
                <Input 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={uploadState !== 'SUCCESS'} 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Manufacturer</label>
                  <Input 
                    value={formData.manufacturer} 
                    onChange={(e) => setFormData({...formData, manufacturer: e.target.value})}
                    disabled={uploadState !== 'SUCCESS'} 
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Expiry Date</label>
                  <Input 
                    type="date"
                    value={formData.expiry} 
                    onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                    disabled={uploadState !== 'SUCCESS'} 
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Your Price (USD)</label>
                  <Input 
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price} 
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    disabled={uploadState !== 'SUCCESS'} 
                    required 
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Quantity / Stock</label>
                  <Input 
                    type="number"
                    min="1"
                    value={formData.stock} 
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    disabled={uploadState !== 'SUCCESS'} 
                    required 
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6" 
                disabled={uploadState !== 'SUCCESS'}
              >
                List Medicine for Sale
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
