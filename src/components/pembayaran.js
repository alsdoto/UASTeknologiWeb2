import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './pembayaran.css';

function Pembayaran() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook untuk navigasi
  const { platNomor, merekMotor, jamMasuk, biaya } = location.state || {};
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleBayarSekarang = () => {
    setIsProcessing(true);
    setPaymentStatus('');

    // Simulasi proses pembayaran
    setTimeout(() => {
      // Misalnya, 70% chance pembayaran berhasil, 30% gagal
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setPaymentStatus('Pembayaran berhasil! Terima kasih.');
      } else {
        setPaymentStatus('Pembayaran gagal. Silakan coba lagi.');
      }
      
      setIsProcessing(false);
    }, 2000); // Simulasi proses pembayaran selama 2 detik
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigasi ke halaman dashboard
  };

  return (
    <div className="pembayaran-container">
      <h1>Pembayaran Parkir</h1>
      <div className="pembayaran-card">
        <div className="info-item">
          <span className="info-label">Plat Nomor:</span>
          <span className="info-value">{platNomor}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Merek Motor:</span>
          <span className="info-value">{merekMotor}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Jam Masuk:</span>
          <span className="info-value">{jamMasuk}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Biaya Parkir:</span>
          <span className="info-value">{biaya}</span>
        </div>
        <div className="button-group">
          <button
            className="pay-button"
            onClick={handleBayarSekarang}
            disabled={isProcessing}
          >
            {isProcessing ? 'Memproses...' : 'Bayar Sekarang'}
          </button>
          <button
            className="back-button"
            onClick={handleBackToDashboard}
          >
            Kembali
          </button>
        </div>
        {paymentStatus && (
          <div className={`payment-status ${paymentStatus.includes('berhasil') ? 'success' : 'error'}`}>
            {paymentStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pembayaran;
