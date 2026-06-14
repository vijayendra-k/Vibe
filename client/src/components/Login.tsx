import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
    // TODO: implement actual login logic
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-branding">
          <h1 className="logo">Vibe</h1>
          <p className="tagline">Connect with friends and the world around you on Vibe.</p>
        </div>
        
        <div className="login-card-wrapper">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Email or phone number" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary">Log In</button>
            <a href="#" className="forgot-password">Forgot password?</a>
            <div className="divider"></div>
            <button type="button" className="btn-secondary">Create new account</button>
          </form>
          <div className="login-footer">
            <p><strong>Create a Page</strong> for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
