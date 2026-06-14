import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import './Layout.css';

const Layout: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  return (
    <div className="layout-container">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-left">
          <Link to="/feed" className="logo-small">Vibe</Link>
          <div className="search-bar">
            <input type="text" placeholder="Search Vibe" />
          </div>
        </div>
        <div className="nav-right">
          <div className="user-profile">
            <span className="user-email">{currentUser?.email}</span>
            <button onClick={handleLogout} className="btn-logout">Log Out</button>
          </div>
        </div>
      </nav>

      <div className="layout-body">
        {/* Left Sidebar Navigation */}
        <aside className="sidebar">
          <ul className="nav-links">
            <li>
              <Link to="/feed" className="nav-item">🏠 Feed</Link>
            </li>
            <li>
              <Link to="/inbox" className="nav-item">💬 Inbox</Link>
            </li>
            <li>
              <Link to="/bookmarks" className="nav-item">🔖 Bookmarks</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content Area (Dynamic based on Route) */}
        <main className="main-content">
          <Outlet />
        </main>

        {/* Right Sidebar (Trending/Suggestions) */}
        <aside className="right-sidebar">
          <h3>Trending</h3>
          <ul className="trending-list">
            <li>#VibeLaunch</li>
            <li>#ReactJS</li>
            <li>#Firebase</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
