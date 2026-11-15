import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('augustine_admin_token') || null);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('augustine_admin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));

  useEffect(() => {
    if (token) {
      localStorage.setItem('augustine_admin_token', token);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('augustine_admin_token');
      localStorage.removeItem('augustine_admin_user');
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Authentication failed');
      }

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('augustine_admin_user', JSON.stringify(data.user));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
