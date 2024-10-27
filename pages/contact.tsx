import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/auths/Footer';

const contact = () => {
  return (
    <div className="contact">
      <header className="flex justify-center items-center py-4">
        <nav className="flex text-center space-x-4">
          <Link href="/home" className="font-bold">Home</Link>
          <Link href="/services" className="font-bold">Services</Link>
          <Link href="/about" passHref className="font-bold">About</Link>
          <Link href="/contact" className="underline decoration-none group
        hover:decoration-blue-200 font-bold text-blue-500">Contact</Link>
          <Link href="/pricing" className="font-bold">Pricing</Link>
        </nav>
        <div className="ml-8">
          <Link href="/login" className="underline decoration-none group
                            hover:decoration-blue-200 font-bold text-blue-500">
            Login
          </Link>
        </div>
      </header>
        <ContactUsForm />
        <Footer />
    </div>
  );
};

export default contact;