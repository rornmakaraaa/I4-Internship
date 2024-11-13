import Link from 'next/link';
import "../app/globals.css";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Signup successful!');
        setError('');
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Signup failed');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error during signup:', err);
      setError('An error occurred during signup. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-center items-center py-4 bg-gray-100 shadow-md">
        <nav className="flex text-center space-x-6">
          <Link href="/home" className="font-bold">Home</Link>
          <Link href="/services" className="font-bold">Services</Link>
          <Link href="/about" className="font-bold">About</Link>
          <Link href="/contact" className="font-bold">Contact</Link>
          <Link href="/pricing" className="font-bold">Pricing</Link>
        </nav>
        <div className="ml-8">
          <Link href="/login" className="underline decoration-none group hover:decoration-blue-200 font-bold text-blue-500">
            Login
          </Link>
        </div>
      </header>

      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full flex">
          <div className="w-1/2 hidden md:flex bg-green-200 items-center justify-center">
            <Image src="/Login.jpg" alt="Illustration" width={500} height={500} />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <button className="text-lg font-semibold text-gray-500 focus:outline-none">
                  <Link href="/login">Login</Link>
                </button>
                <button className="text-lg font-semibold text-blue-700 border-b-2 border-blue-700 focus:outline-none">
                  Sign Up
                </button>
              </div>
            </div>
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}
            {success && <p className="text-green-600 text-center mb-4">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                  className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-right">
                Have an account?{' '}
                <Link href="/login" className="text-sm text-blue-700 hover:underline">
                  Login
                </Link>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;