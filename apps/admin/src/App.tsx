import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <Routes>
      {/* Redirect root to /admin so the URL strictly matches the nested route structure */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
      
      {/* The AdminLayout wraps all /admin routes with the Sidebar */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Default dashboard route */}
        <Route index element={<Dashboard />} />
        
        {/* Additional nested routes can be added here */}
        {/* <Route path="users" element={<Users />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
