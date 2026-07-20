import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FloatingMedicines } from '../components/3d/FloatingMedicines';
import { Button } from '@medicycle/ui';
import { ArrowRight, ShieldCheck, Activity, Users } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Environment preset="city">
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          </Environment>
          <FloatingMedicines />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-accent-blue/30 text-accent-blue font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            The Future of Safe Medicine Exchange
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-accent-blue">
            Zero Waste.<br />Maximum Impact.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            MediCycle is the premium marketplace connecting verified sellers and pharmacies with buyers to safely exchange unopened, unexpired medicines.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2" onClick={() => navigate('/auth')}>
              Get Started <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Marketplace
            </Button>
          </div>
        </motion.div>

        {/* Features Row */}
        <div className="absolute bottom-10 left-0 right-0 px-8 hidden md:block">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShieldCheck className="text-accent-green" />}
              title="Verified Safe"
              desc="Every medicine is strictly vetted and expiration verified."
            />
            <FeatureCard 
              icon={<Activity className="text-accent-blue" />}
              title="Save Lives"
              desc="Reduce medical waste by sharing what you don't need."
            />
            <FeatureCard 
              icon={<Users className="text-accent-purple" />}
              title="Community First"
              desc="Connect with local pharmacies and verified individuals."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-4 flex items-center gap-4"
    >
      <div className="p-3 bg-surface rounded-xl border border-white/5">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
}
