import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Automatically redirect to the feed on success
      navigate('/feed');
    } catch (err: any) {
      console.error('Login error', err);
      setError(err.message);
    }
  };

  const handleCreateAccount = async () => {
    if (!email || !password) {
      setError("Please enter an email and password first.");
      return;
    }
    setError(null);
    setMessage(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Automatically redirect to the feed on success
      navigate('/feed');
    } catch (err: any) {
      console.error('Sign up error', err);
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address in the field above to reset your password.");
      return;
    }
    setError(null);
    setMessage(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err: any) {
      console.error('Reset error', err);
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-branding">
          <h1 className="logo">Vibe</h1>
          <p className="tagline">Connect with friends and the world around you on Vibe.</p>
        </div>
        
        <div className="login-card-wrapper">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input 
                type="email" 
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
                // Not strictly required for forgot password flow, so we handle it manually
              />
            </div>
            
            {error && <div style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>{error}</div>}
            {message && <div style={{color: 'green', fontSize: '14px', marginBottom: '10px'}}>{message}</div>}
            
            <button type="submit" className="btn-primary" onClick={() => { if(!password) setError("Password required to login") }}>Log In</button>
            <a href="#" className="forgot-password" onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>Forgot password?</a>
            <div className="divider"></div>
            <button type="button" className="btn-secondary" onClick={handleCreateAccount}>Create new account</button>
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
