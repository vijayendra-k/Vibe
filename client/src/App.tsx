import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './components/Login';
import Layout from './components/Layout';
import Feed from './pages/Feed';
import Inbox from './pages/Inbox';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/Vibe/">
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes inside the Layout */}
          <Route 
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/feed" element={<Feed />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
