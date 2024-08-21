import React from 'react';
import SignInForm from '../components/SignInForm';
import "../app/globals.css";
import Link from 'next/link';
const signin = () => {
  return (
    <div>
        <header className="flex justify-between items-center  py-4 ">
        <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
        <nav className="flex space-x-4">
            <Link href="/home" className="hover:bg-pink-100">Home</Link>
            <Link href="/services" className="hover:bg-pink-100">Services</Link>
            <Link href="/about" className="hover:bg-pink-100">About</Link>
            <Link href="/contact" className="hover:bg-pink-100">Contact</Link>
            <Link href="/pricing" className="hover:bg-pink-100 ">Pricing</Link>
        </nav>
        <div>
            <Link href="/signin" className="sign-in-link border border-gray-300 px-4 py-2 hover:bg-pink-100">
            Sign In
            </Link>
        </div>
        </header>
        <SignInForm />
    </div>
  );
;}

export default signin;