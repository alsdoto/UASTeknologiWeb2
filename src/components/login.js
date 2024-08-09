import React, { useState } from 'react';
import './login.css';
import parkingImage from '../assets/sae.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ambil data pengguna dari localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && email === userData.email && password === userData.password) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <h1 className="image-title">Selamat Datang</h1>
        <h2 className="sub-title">Parkir Aman dan Nyaman</h2>
        <p className="image-caption">Rasakan kenyamanan parkir dengan layanan terbaik kami</p>
        <img src={parkingImage} alt="Parking" className="login-image" />
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
            <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
          </div>
          <p className="register-link">
            Belum punya akun? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
