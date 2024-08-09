import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './daftarkendaraan.css';

function DaftarKendaraan() {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [platNomor, setPlatNomor] = useState('');
  const [merekMotor, setMerekMotor] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [kendaraanList, setKendaraanList] = useState(() => {
    const savedList = localStorage.getItem('kendaraanList');
    return savedList ? JSON.parse(savedList) : [];
  });

  const handleAddKendaraan = () => {
    if (!platNomor || !merekMotor) {
      alert('Plat Nomor dan Merek Motor harus diisi.');
      return;
    }

    const newKendaraan = { platNomor, merekMotor };
    const updatedList = editIndex !== null
      ? kendaraanList.map((kendaraan, index) =>
          index === editIndex ? newKendaraan : kendaraan
        )
      : [...kendaraanList, newKendaraan];

    setKendaraanList(updatedList);
    localStorage.setItem('kendaraanList', JSON.stringify(updatedList));
    setPlatNomor('');
    setMerekMotor('');
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setPlatNomor(kendaraanList[index].platNomor);
    setMerekMotor(kendaraanList[index].merekMotor);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = kendaraanList.filter((_, i) => i !== index);
    setKendaraanList(updatedList);
    localStorage.setItem('kendaraanList', JSON.stringify(updatedList));
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigasi kembali ke dashboard
  };

  return (
    <div className="daftar-kendaraan-container">
      <h1>Daftar Kendaraan</h1>
      <div className="form">
        <label htmlFor="platNomor">Plat Nomor:</label>
        <input
          type="text"
          id="platNomor"
          value={platNomor}
          onChange={(e) => setPlatNomor(e.target.value)}
        />
        <label htmlFor="merekMotor">Merek Motor:</label>
        <input
          type="text"
          id="merekMotor"
          value={merekMotor}
          onChange={(e) => setMerekMotor(e.target.value)}
        />
        <button onClick={handleAddKendaraan}>
          {editIndex !== null ? 'Simpan Perubahan' : 'Tambah Kendaraan'}
        </button>
        <button className="back-button" onClick={handleBackToDashboard}>
          Kembali ke Dashboard
        </button>
      </div>

      <div className="list">
        <h2>Kendaraan Terdaftar</h2>
        <ul>
          {kendaraanList.map((kendaraan, index) => (
            <li key={index} className="kendaraan-card">
              <span>{`${kendaraan.platNomor} - ${kendaraan.merekMotor}`}</span>
              <div className="button-container">
                <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(index)}>Hapus</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DaftarKendaraan;
