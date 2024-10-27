import Link from 'next/link';
import "../app/globals.css";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-primary h-screen">
      <div className="bg-gray-50 p-6 rounded-lg w-1/3">
        <h2 className="text-center mb-4"><strong>Log In</strong></h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              className="border py-2 px-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Please Enter Username"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              className="border px-2 py-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please Enter Password"
              required
            />
          </div>

          <p className="mb-4 text-sm text-gray-700 mt-1 text-right">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-700 hover:underline">
              Sign Up
            </Link>
          </p>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 w-full rounded-md">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;