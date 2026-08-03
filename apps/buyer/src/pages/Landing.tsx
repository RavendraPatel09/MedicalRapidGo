import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '@medicycle/ui';
import { ShieldCheck, Activity, PackageCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="bg-background text-on-background min-h-screen font-sans flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="text-primary w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-on-background">MediCycle</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" to="/roles">Roles</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" to="/marketplace">Marketplace</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/marketplace">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                <ShieldCheck size={14} /> Safe & Verified
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-on-background">
                The smart way to source <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">verified medications.</span>
              </h1>
              
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
                Connect with certified pharmacies to safely buy and sell unopened, unexpired inventory. Built for healthcare professionals, secured by advanced compliance checks.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/marketplace">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto px-8">
                    Browse Inventory
                  </Button>
                </Link>
                <Link to="/roles">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 border-outline/30 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface-container/30 border-t border-outline/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why choose MediCycle?</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                We provide a reliable, compliant, and seamless experience for healthcare facilities to manage surplus inventory.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<ShieldCheck size={24} className="text-primary" />}
                title="Strict Verification"
                description="Every facility is thoroughly vetted. We guarantee that all medications are authentic, unopened, and within safe expiration windows."
              />
              <FeatureCard 
                icon={<PackageCheck size={24} className="text-secondary" />}
                title="Cold-Chain Tracking"
                description="Our logistics partners ensure that temperature-sensitive medications are monitored and maintained in optimal conditions during transit."
              />
              <FeatureCard 
                icon={<Zap size={24} className="text-tertiary" />}
                title="Instant Escrow"
                description="Payments are securely held in escrow until the receiving facility verifies the shipment, ensuring complete peace of mind for both parties."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-on-surface-variant text-sm border-t border-outline/10 mt-auto">
        &copy; {new Date().getFullYear()} MediCycle Platforms Inc. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="p-8 bg-surface border border-outline/10 text-left hover:border-primary/30 transition-colors shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed text-sm">
        {description}
      </p>
    </Card>
  );
}
