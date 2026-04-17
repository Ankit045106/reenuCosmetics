import React from 'react';
import { ArrowLeft, Mail, Lock, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page-container">
      {/* Back Button */}
      <a href="/" className="login-back-link">
        <ArrowLeft size={18} /> Back to Home
      </a>

      <div className="login-card animate-fade-in">
        <div className="login-brand-area text-center mb-5">
          <h1 className="brand-logo">ELÉGANCE<span>.</span></h1>
          <p className="text-muted">Welcome back! Please enter your details.</p>
        </div>

        <form className="login-form">
          <div className="input-group-custom mb-4">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input type="email" placeholder="axepertexhibits@gmail.com" required />
            </div>
          </div>

          <div className="input-group-custom mb-3">
            <div className="d-flex justify-content-between">
              <label>Password</label>
            </div>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input type="password" placeholder="••••••••" required />
            </div>
          </div>

          <div className="remember-me mb-4">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>

          <Link to='/profile' type="submit" className="login-btn-main text-center w-100 text-decoration-none">
            Login
          </Link>

          <button type="button" className="login-btn-google mt-3">
            <Chrome size={18} className="me-2" />
            Sign in with Google
          </button>
        </form>

        <p className="login-footer-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;