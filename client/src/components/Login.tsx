import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Successfully logged in!', userCredential.user);
      alert('Success! You are logged into the database as: ' + userCredential.user.email);
      // TODO: Redirect to the Main Feed later
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
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account created!', userCredential.user);
      alert('Account Successfully Created in Database: ' + userCredential.user.email);
    } catch (err: any) {
      console.error('Sign up error', err);
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
                required
              />
            </div>
            {error && <div style={{color: 'red', fontSize: '14px', marginBottom: '10px'}}>{error}</div>}
            <button type="submit" className="btn-primary">Log In</button>
            <a href="#" className="forgot-password">Forgot password?</a>
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
