import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import DaftarKendaraan from './components/daftarkendaraan'; 
import OrderParkir from './components/orderparkir'; 
import Pembayaran from './components/pembayaran';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/daftar-kendaraan" element={<DaftarKendaraan />} />
        <Route path="/order-parkir" element={<OrderParkir />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
    </Router>
  );
}

export default App;
