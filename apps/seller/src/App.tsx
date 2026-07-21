import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddMedicine from './pages/AddMedicine';
import Negotiation from './pages/Negotiation';

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-white font-sans selection:bg-accent-green selection:text-white">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory/add" element={<AddMedicine />} />
        <Route path="/negotiation" element={<Negotiation />} />
      </Routes>
    </div>
  );
}

export default App;
