import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirect them to the login page, but save the current location they were trying to go to if we wanted to
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
