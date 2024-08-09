// src/components/Dashboard.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link bersama useNavigate
import './dashboard.css';

// Import ikon dari Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCar, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogout = () => {
    // Hapus data autentikasi dari localStorage atau sesi
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    localStorage.removeItem('authToken');  // Jika menggunakan token
    sessionStorage.removeItem('authToken'); // Jika menggunakan token

    // Arahkan pengguna ke halaman login
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/daftar-kendaraan">Daftar Kendaraan</Link></li>
            <li><Link to="/order-parkir">Order Kendaraan</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Halo Admin, Selamat Datang!</h1>
        <p>Waktunya memberikan yang terbaik untuk pelanggan kita.</p>
        <p>Setiap kendaraan yang kita layani adalah kepercayaan yang harus dijaga. Tetap semangat dan terus berikan yang terbaik!</p>

        <div className="stats-container">
          <div className="stat-card">
            <FontAwesomeIcon icon={faMotorcycle} className="icon" />
            <h3>Jumlah Daftar Kendaraan</h3>
            <p>150</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faClipboardList} className="icon" />
            <h3>Order Kendaraan Hari Ini</h3>
            <p>25</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faCar} className="icon" />
            <h3>Total Parkir Hari Ini</h3>
            <p>10</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
