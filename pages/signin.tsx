import React from 'react';
import SignInForm from '../components/SignInForm';
import "../app/globals.css";
import Link from 'next/link';

const signin = () => {
  return (
    <div className="sigin">
        <header className="flex justify-between items-center  py-4 ">
        <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
        <nav className="flex text-center space-x-4">
            <Link href="/home" className="font-bold">Home</Link>
            <Link href="/services" className="font-bold">Services</Link>
            <Link href="/about" className="font-bold">About</Link>
            <Link href="/contact" className="font-bold">Contact</Link>
            <Link href="/pricing" className="font-bold">Pricing</Link>
        </nav>
        <div>
            <Link href="/signin" className="sign-in-link font-bold border border-gray-300 px-4 py-2 hover:bg-pink-100">
            Sign In
            </Link>
        </div>
        </header>
        <SignInForm />
    </div>
  );
;}

export default signin;