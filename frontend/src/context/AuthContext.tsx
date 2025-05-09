"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import api, { setToken, removeToken, getToken } from "@/utils/api";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  email: string;
  [key: string]: unknown;
}

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUser({ email: decoded.email });
      } catch (error: unknown) {
        console.log("Invalid token", error);
        removeToken();
        setUser(null);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    const token = res.data.access_token;

    if (token) {
      setToken(token);
      const decoded = jwtDecode<DecodedToken>(token);
      setUser({ email: decoded.email });
    } else {
      throw new Error("Token not returned from login response");
    }
  };

  const register = async (email: string, password: string) => {
    await api.post("/auth/register", { email, password });
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
