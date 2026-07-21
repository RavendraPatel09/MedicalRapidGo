import { Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';
import Auth from './pages/Auth';
import Marketplace from './pages/Marketplace';
import Cart from './pages/Cart';
import Chat from './pages/Chat';
import MedicineDetails from './pages/MedicineDetails';
import Nearby from './pages/Nearby';
import Orders from './pages/Orders';

import Landing from './pages/Landing';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary/30 selection:text-primary">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/roles" element={<RoleSelection />} />
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
