import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-white font-sans selection:bg-accent-blue selection:text-white">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* Marketplace routes will go here */}
      </Routes>
    </div>
  );
}

export default App;
