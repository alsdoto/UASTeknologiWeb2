import React, { useState } from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faAdjust, faLanguage, faUser, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    phone: '+123 456 7890',
    address: '1234 Main St, Anytown, USA',
    joinedDate: 'January 1, 2023',
    lastLogin: 'March 5, 2023',
    theme: 'Light',
    language: 'English',
    profilePicture: '/path/to/profile-picture.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
    console.log('Profile saved:', profile);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
        {editing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="profile-picture-input"
          />
        )}
        <div>
          {editing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <h1>{profile.name}</h1>
          )}
          {editing ? (
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <p>{profile.email}</p>
          )}
          {editing ? (
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <p>{profile.phone}</p>
          )}
          {editing ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="profile-input profile-textarea"
            />
          ) : (
            <p>{profile.address}</p>
          )}
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-card">
          <h2>Informasi Kontak</h2>
          <p><FontAwesomeIcon icon={faUser} /> Nama: {profile.name}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: {profile.email}</p>
          <p><FontAwesomeIcon icon={faPhone} /> Telepon: {profile.phone}</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Alamat: {profile.address}</p>
        </div>
        <div className="profile-card">
          <h2>Detail Pekerjaan</h2>
          <p><FontAwesomeIcon icon={faCalendarAlt} /> Bergabung: {profile.joinedDate}</p>
          <p><FontAwesomeIcon icon={faClock} /> Jam Kerja: 09:00 - 17:00</p>
          <p><FontAwesomeIcon icon={faAdjust} /> Tema: {profile.theme}</p>
          <p><FontAwesomeIcon icon={faLanguage} /> Bahasa: {profile.language}</p>
        </div>
        <div className="profile-buttons">
          {editing ? (
            <button onClick={handleSave} className="save-button">Save</button>
          ) : (
            <button onClick={() => setEditing(true)} className="edit-button">Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
