"use client"

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Register = () => {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      const newUser = { email }; 
      register(newUser);
      router.push('/'); 
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
    <div className="bg-base max-w-xl w-full flex flex-col items-center border border-base text-base backdrop-blur-md rounded-3xl border shadow-xl p-6 md:p-8 z-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Register</h2>
      <form  className="space-y-6" onSubmit={handleRegister}>
      <div className="max-w-xl flex flex-col items-center">
      <label htmlFor="email" className="block text-sm font-medium w-full max-w-md text-left text-white -mt-2">
            Email
          </label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
        />
        <label htmlFor="password" className="block mt-1 text-sm font-medium w-full max-w-md text-left text-white -mt-2">
            Password
          </label>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
        />
        <button className="cursor-pointer w-full max-w-md bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 px-3 rounded-3xl transition-all shadow-lg mt-2" type="submit">Register</button>
        <Link className="mt-3 hover:text-white" href="/auth/register">Already have an account?</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
