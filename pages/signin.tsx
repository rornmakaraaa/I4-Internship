import Link from 'next/link';
import "../app/globals.css";
import React, { useState } from 'react';

const singup = () => {

  return (
    <div className="flex justify-center items-center bg-primary h-screen">
      <div className="bg-gray-50  p-6 rounded-lg w-1/3">
      <h2 className="text-center font-bold mb-4">Sign Up</h2>
        <form action="">
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input className="border py-2 px-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="name"
              type="name"
              placeholder="Please Enter Name"/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input className="border py-2 px-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="email"
              type="email"
              placeholder="Please Enter Email"/>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input className="border px-2 py-2 form-input mt-1 block w-full rounded-md border-gray-200 shadow-sm"
              id="password"
              type="password"
              placeholder="Please Enter Password"/>
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

export default singup;