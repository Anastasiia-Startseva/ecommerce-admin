import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';


export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Route>
    </Routes>
  );
}