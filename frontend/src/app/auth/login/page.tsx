"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (email && password) {
      setLoading(true);
      try {
        await login(email, password);
        router.push("/");
      } catch (error: unknown) {
        setError("Invalid email or password");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-base max-w-xl w-full flex flex-col items-center border border-base text-base backdrop-blur-md rounded-3xl border shadow-xl p-6 md:p-8 z-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="max-w-xl flex flex-col items-center">
            {error && (
              <div className="text-red-500 mb-4 text-center">{error}</div>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
            />
            <button
              type="submit"
              className="cursor-pointer w-full max-w-md bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 px-3 rounded-3xl transition-all shadow-lg mt-2 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <Link className="mt-3 hover:text-white" href="/auth/register">
              Don&apos;t have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
