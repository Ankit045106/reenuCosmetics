import React from 'react';
import { ArrowLeft, Mail, Lock, User, Chrome } from 'lucide-react';

const Register = () => {
  return (
    <div className="register-page-wrapper">
      {/* Back to Home */}
      <a href="/" className="register-back-link">
        <ArrowLeft size={18} /> Back to Home
      </a>

      <div className="register-card-container animate-fade-in">
        <div className="register-brand-section text-center mb-5">
          <h1 className="register-logo-text">ELÉGANCE<span>.</span></h1>
          <p className="register-subtitle">Join the elite. Create your account.</p>
        </div>

        <form className="register-form-content">
          {/* Full Name */}
          <div className="register-input-group mb-4">
            <label className="register-label">Full Name</label>
            <div className="register-field-wrapper">
              <User className="register-icon" size={18} />
              <input type="text" className="register-input" placeholder="Jiya Sharma" required />
            </div>
          </div>

          {/* Email */}
          <div className="register-input-group mb-4">
            <label className="register-label">Email Address</label>
            <div className="register-field-wrapper">
              <Mail className="register-icon" size={18} />
              <input type="email" className="register-input" placeholder="axepertexhibits@gmail.com" required />
            </div>
          </div>

          {/* Side by Side Passwords */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="register-input-group">
                <label className="register-label">Password</label>
                <div className="register-field-wrapper">
                  <Lock className="register-icon" size={18} />
                  <input type="password" name="password" className="register-input" placeholder="••••••••" required />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="register-input-group">
                <label className="register-label">Confirm Password</label>
                <div className="register-field-wrapper">
                  <Lock className="register-icon" size={18} />
                  <input type="password" name="confirmPassword" className="register-input" placeholder="••••••••" required />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="register-submit-btn">
            Create Account
          </button>

          <button type="button" className="register-google-btn mt-3">
            <Chrome size={18} className="me-2" />
            Sign up with Google
          </button>
        </form>

        <p className="register-switch-text">
          Already a member? <a href="/login">Login </a>
        </p>
      </div>
    </div>
  );
};

export default Register;