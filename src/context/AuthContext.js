'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [modalState, setModalState] = useState(null); // 'login' | 'signup' | null
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const login = (userData) => {
    setUser({
      name: userData.name || userData.username || 'Grandmaster',
      username: userData.username || 'grandmaster_99',
      avatar: null // Uses fallback
    });
    setModalState(null);
  };

  const logout = () => {
    setUser(null);
  };

  const openModal = (type) => {
    setModalState(type);
  };

  const closeModal = () => {
    setModalState(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, modalState, openModal, closeModal, isClient }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
