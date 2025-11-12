import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <style>{`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: url('/public/plane.jpg');
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    line-height: 1.6;
}

.login-container {
    width: 100%;
    max-width: 420px;
}

.login-card {
    background: rgba(224, 229, 236, 0.7);
    border-radius: 30px;
    padding: 50px 40px;
    box-shadow: 
        20px 20px 60px #bec3cf,
        -20px -20px 60px #ffffff;
    position: relative;
    transition: all 0.3s ease;
}

.login-card:hover {
    transform: translateY(-5px);
}

.login-header {
    text-align: center;
    margin-bottom: 40px;
}

.neu-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: #e0e5ec;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
        8px 8px 20px #bec3cf,
        -8px -8px 20px #ffffff,
        inset 0 0 0 #bec3cf,
        inset 0 0 0 #ffffff;
    transition: all 0.3s ease;
}

.neu-icon:hover {
    box-shadow: 
        4px 4px 10px #bec3cf,
        -4px -4px 10px #ffffff,
        inset 4px 4px 10px #bec3cf,
        inset -4px -4px 10px #ffffff;
}

.icon-inner {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6c7293;
}

.icon-inner svg {
    width: 100%;
    height: 100%;
}

.login-header h2 {
    font-family: 'Poppins', 'Segoe UI', Roboto, sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1f36;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.login-header p {
    color: #9499b7;
    font-size: 15px;
    font-weight: 400;
}

/* Neumorphic Input Styles */
.form-group {
    margin-bottom: 28px;
    position: relative;
}

.neu-input {
    position: relative;
    background: #e0e5ec;
    border-radius: 15px;
    box-shadow: 
        inset 8px 8px 16px #bec3cf,
        inset -8px -8px 16px #ffffff;
    transition: all 0.3s ease;
}

.neu-input:focus-within {
    box-shadow: 
        inset 4px 4px 8px #bec3cf,
        inset -4px -4px 8px #ffffff;
}

.neu-input input {
    width: 100%;
    background: transparent;
    border: none;
    padding: 20px 24px;
    padding-left: 55px;
    color: #3d4468;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    transition: all 0.3s ease;
}

.neu-input input::placeholder {
    color: transparent;
}

.neu-input label {
    position: absolute;
    left: 55px;
    top: 50%;
    transform: translateY(-50%);
    color: #9499b7;
    font-size: 16px;
    font-weight: 400;
    pointer-events: none;
    transition: all 0.3s ease;
}

.neu-input input:focus + label,
.neu-input input:not(:placeholder-shown) + label {
    top: 8px;
    font-size: 12px;
    color: #6c7293;
    transform: translateY(0);
}

.input-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #9499b7;
    transition: all 0.3s ease;
}

.input-icon svg {
    width: 100%;
    height: 100%;
}

.neu-input:focus-within .input-icon {
    color: #6c7293;
}

/* Password Toggle */
.password-group {
    padding-right: 50px;
}

.neu-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: #e0e5ec;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9499b7;
    box-shadow: 
        4px 4px 10px #bec3cf,
        -4px -4px 10px #ffffff;
    transition: all 0.3s ease;
}

.neu-toggle:hover {
    color: #6c7293;
}

.neu-toggle:active {
    box-shadow: 
        inset 2px 2px 5px #bec3cf,
        inset -2px -2px 5px #ffffff;
}

.eye-closed {
    display: none;
}

.neu-toggle.show-password .eye-open {
    display: none;
}

.neu-toggle.show-password .eye-closed {
    display: block;
}

/* Form Options */
.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    flex-wrap: wrap;
    gap: 16px;
}

.remember-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.remember-wrapper input[type="checkbox"] {
    display: none;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    user-select: none;
    color: #6c7293;
    font-size: 14px;
    font-weight: 500;
}

.neu-checkbox {
    width: 22px;
    height: 22px;
    background: #e0e5ec;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
        3px 3px 8px #bec3cf,
        -3px -3px 8px #ffffff;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.remember-wrapper input[type="checkbox"]:checked + .checkbox-label .neu-checkbox {
    box-shadow: 
        inset 2px 2px 5px #bec3cf,
        inset -2px -2px 5px #ffffff;
}

.neu-checkbox svg {
    width: 14px;
    height: 14px;
    color: #00c896;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
}

.remember-wrapper input[type="checkbox"]:checked + .checkbox-label .neu-checkbox svg {
    opacity: 1;
    transform: scale(1);
}

.forgot-link {
    color: #6c7293;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
}

.forgot-link:hover {
    color: #3d4468;
}

/* Neumorphic Button */
.neu-button {
    width: 100%;
    background: #e0e5ec;
    border: none;
    border-radius: 15px;
    padding: 18px 32px;
    color: #3d4468;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 
        8px 8px 20px #bec3cf,
        -8px -8px 20px #ffffff;
    transition: all 0.3s ease;
    overflow: hidden;
}

.neu-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.neu-button:hover {
    transform: translateY(-2px);
    box-shadow: 
        12px 12px 30px #bec3cf,
        -12px -12px 30px #ffffff;
}

.neu-button:hover::before {
    left: 100%;
}

.neu-button:active {
    transform: translateY(0);
    box-shadow: 
        inset 4px 4px 10px #bec3cf,
        inset -4px -4px 10px #ffffff;
}

.btn-text {
    position: relative;
    z-index: 1;
    transition: opacity 0.3s ease;
}

.btn-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.neu-spinner {
    width: 20px;
    height: 20px;
    border: 3px solid #bec3cf;
    border-top: 3px solid #6c7293;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Divider */
.divider {
    display: flex;
    align-items: center;
    margin: 30px 0;
    gap: 16px;
}

.divider-line {
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, transparent, #bec3cf, transparent);
}

.divider span {
    color: #9499b7;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Mobile Responsive */
@media (max-width: 480px) {
    body {
        padding: 16px;
    }
    
    .login-card {
        padding: 35px 25px;
        border-radius: 20px;
    }
    
    .login-header h2 {
        font-size: 1.75rem;
    }
    
    .neu-input input {
        padding: 18px 20px;
        padding-left: 50px;
    }
    
    .neu-input label {
        left: 50px;
    }
    
    .form-options {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
}
      `}</style>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="neu-icon">
              <div className="icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h2>Liftoff</h2>
            <p>Please log in to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <div className="input-group neu-input">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">Email address</label>
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group neu-input password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder=" "
                />
                <label htmlFor="password">Password</label>
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <button
                  type="button"
                  className={`neu-toggle ${showPassword ? "show-password" : ""}`}
                  onClick={togglePassword}
                  aria-label="Toggle password visibility"
                >
                  <svg className="eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <svg className="eye-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="remember-wrapper">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className="checkbox-label">
                  <div className="neu-checkbox">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Remember me
                </label>
              </div>
              <Link to="/">Don't have an account? signup here</Link>
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="neu-button login-btn">
              <span className="btn-text">Sign In</span>
              <div className="btn-loader">
                <div className="neu-spinner"></div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;