import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './orderparkir.css';

function OrderParkir() {
  const [platNomor, setPlatNomor] = useState('');
  const [kendaraan, setKendaraan] = useState(null);
  const [waktuMasuk, setWaktuMasuk] = useState('');
  const [waktuKeluar, setWaktuKeluar] = useState('');
  const [biayaParkir, setBiayaParkir] = useState(0);

  const navigate = useNavigate();

  const handleSearch = () => {
    const savedKendaraanList = JSON.parse(localStorage.getItem('kendaraanList')) || [];
    const foundKendaraan = savedKendaraanList.find(k => k.platNomor === platNomor);
    setKendaraan(foundKendaraan);
  };

  const handleCalculate = () => {
    const masuk = new Date(waktuMasuk);
    const keluar = new Date(waktuKeluar);
    const duration = Math.abs(keluar - masuk) / 36e5; // durasi dalam jam
    setBiayaParkir(duration * 5000); // Misalkan biaya per jam adalah 5000
  };

  const handleSave = () => {
    if (!kendaraan) {
      alert('Kendaraan tidak ditemukan.');
      return;
    }

    const paymentData = {
      platNomor: kendaraan.platNomor,
      merekMotor: kendaraan.merekMotor,
      waktuMasuk,
      waktuKeluar,
      biayaParkir,
    };
    navigate('/pembayaran', { state: paymentData });
  };

  return (
    <div className="order-parkir-container">
      <h1>Order Parkir</h1>
      <div className="search-form">
        <label htmlFor="searchPlatNomor">Plat Nomor:</label>
        <input
          type="text"
          id="searchPlatNomor"
          value={platNomor}
          onChange={(e) => setPlatNomor(e.target.value)}
        />
        <button onClick={handleSearch}>Cari Kendaraan</button>
      </div>

      {kendaraan && (
        <div className="vehicle-details">
          <h2>Detail Kendaraan</h2>
          <p>Plat Nomor: {kendaraan.platNomor}</p>
          <p>Merek Motor: {kendaraan.merekMotor}</p>

          <div className="time-form">
            <label htmlFor="waktuMasuk">Waktu Masuk:</label>
            <input
              type="datetime-local"
              id="waktuMasuk"
              value={waktuMasuk}
              onChange={(e) => setWaktuMasuk(e.target.value)}
            />
            <label htmlFor="waktuKeluar">Waktu Keluar:</label>
            <input
              type="datetime-local"
              id="waktuKeluar"
              value={waktuKeluar}
              onChange={(e) => setWaktuKeluar(e.target.value)}
            />
            <button onClick={handleCalculate}>Hitung Biaya</button>
          </div>

          {biayaParkir > 0 && (
            <div className="biaya-parkir">
              <h3>Biaya Parkir: Rp {biayaParkir}</h3>
            </div>
          )}

          <button onClick={handleSave}>Simpan Pembayaran</button>
        </div>
      )}
    </div>
  );
}

export default OrderParkir;
