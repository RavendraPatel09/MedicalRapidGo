import { Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';
import Auth from './pages/Auth';
import Marketplace from './pages/Marketplace';
import Cart from './pages/Cart';
import Chat from './pages/Chat';
import MedicineDetails from './pages/MedicineDetails';
import Nearby from './pages/Nearby';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-white font-sans selection:bg-accent-blue selection:text-white">
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/medicine/:id" element={<MedicineDetails />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
