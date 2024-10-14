import Link from 'next/link';
import "../app/globals.css";
import React, { useState } from 'react';

const Signup: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Signup successful! You can now log in.'); // Set success message
        setError(''); // Clear error message
      } else {
        setError(data.message || 'Signup failed'); // Set error message
        setSuccess(''); // Clear success message
      }
    } catch (err) {
      console.error('Error during signup:', err);
      setError('An error occurred during signup. Please try again.'); // Set error message for any errors
      setSuccess(''); // Clear success message
    }
  };

  return (
    <div className="flex justify-center items-center bg-primary h-screen">
      <div className="bg-gray-50 p-6 rounded-lg w-1/3">
        <h2 className="text-center font-bold mb-4">Sign Up</h2>
        {/* Show error or success messages */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              className="border py-2 px-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="username"
              type="text" // Corrected to text
              placeholder="Please Enter Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              className="border py-2 px-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="email"
              type="email"
              placeholder="Please Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Please Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="mb-4 text-sm text-gray-700 mt-1 text-right">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-700 hover:underline">
              Log In
            </Link>
          </p>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 w-full rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
