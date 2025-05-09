import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN_NAME = "access_token";

export const getToken = (): string | null => {
  return Cookies.get(TOKEN_NAME) || null;
};

export const setToken = (token: string): void => {
  Cookies.set(TOKEN_NAME, token, {
    expires: 1, 
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
};

export const removeToken = (): void => {
  Cookies.remove(TOKEN_NAME);
};

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeToken();
      
    //   // Redirect to login page if in browser context
    //   if (typeof window !== "undefined") {
    //     window.location.href = "/auth/login";
    //   }
    }
    
    return Promise.reject(error);
  }
);

export default api;