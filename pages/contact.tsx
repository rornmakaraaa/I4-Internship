import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';

const contact = () => {
  return (
    <div className="contact">
        <header className="flex justify-between items-center  py-4 ">
        <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
        <nav className="flex text-center space-x-4">
            <Link href="/home" className="hover:bg-pink-100 font-bold">Home</Link>
            <Link href="/services" className="hover:bg-pink-100 font-bold">Services</Link>
            <Link href="/about" className="hover:bg-pink-100 font-bold">About</Link>
            <Link href="/contact" className="hover:bg-pink-100 font-bold text-blue-500">Contact</Link>
            <Link href="/pricing" className="hover:bg-pink-100 font-bold">Pricing</Link>
        </nav>
        <div>
            <Link href="/signin" className="sign-in-link font-bold border border-gray-300 px-4 py-2 hover:bg-pink-100">
            Sign In
            </Link>
        </div>
        </header>
        <ContactUsForm />
        <Footer />
    </div>
  );
};

export default contact;