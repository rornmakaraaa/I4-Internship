import React from 'react';
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

const Services = () => {
return (
    <div className="services">
        <header className="flex justify-between items-center  py-4 ">
        <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
        <nav className="flex text-center space-x-4">
            <Link href="/home" className="font-bold">Home</Link>
            <Link href="/services" className="underline decoration-none group
                    hover:decoration-blue-200 font-bold text-blue-500">Services</Link>
            <Link href="/about" className="hover:bg-pink-100 font-bold">About</Link>
            <Link href="/contact" className="hover:bg-pink-100 font-bold">Contact</Link>
            <Link href="/pricing" className="hover:bg-pink-100 font-bold">Pricing</Link>
        </nav>
        <div>
            <Link href="/signin" className="sign-in-link border font-bold border-gray-300 px-4 py-2 hover:bg-pink-100">
            Sign In
            </Link>
        </div>
        </header>
    <main className="mt-8">
        <div className="mb-8 px-10">
            <h2 className="text-3xl font-bold mb-2">A Great User Experience</h2>
            <h2 className="text-3xl font-bold mb-2 text-blue-400">Is Our Priority</h2>
            <p className="mt-4">We create user experience with accessibility in mind.</p>
            <p>We are here t give modern solutions to the modern problems.</p>
            <button className="bg-blue-400 justify-center mt-6 hover:bg-pink-100 px-4 py-2 rounded">Our Work</button>
        </div>
        <section className='mb-12'>
            <div className="flex">
                <div className='px-10 mt-8'>
                    <h3 className="text-2xl font-bold">Web Development</h3>
                    <h3 className="text-2xl font-bold text-blue-400 mt-2">Website and Web App Development</h3>
                    <p className="mt-4">A Website is something that gives you and Your Business a web presence. </p>
                    <p>Here at CamAi, We exactly take care of that.</p>
                    <button className="bg-blue-400 justify-center mt-5 hover:bg-pink-100 px-4 py-2 rounded">More</button>
                </div>
                <Image src="/picture9.jpg" alt="Web Development" width={400} height={400} className='ml-44'/>
            </div>

            <div className="flex">
                <Image src="/picture10.jpg" alt="Web Development" width={400} height={400} className='ml-20'/>
                <div className="ml-80 mt-8">
                    <h2 className="text-2xl font-bold">Progressive Web Apps</h2>
                    <h2 className="text-2xl font-bold text-blue-400">Progressive web app development</h2>
                    <p className="mt-4">Progressive web apps are the future of modern web and we understand that as</p>
                    <p>We've been working with those</p>
                    <button className="bg-blue-400 justify-center mt-5 hover:bg-pink-100 px-4 py-2 rounded">More</button>
                </div>
            </div>

            <div className="flex">
                <div className='px-10 mt-8'>
                    <h3 className="text-2xl font-bold">Web Development</h3>
                    <h3 className="text-2xl font-bold text-blue-400 mt-2">Website and Web App Development</h3>
                    <p className="mt-4">A Website is something that gives you and Your Business a web presence. </p>
                    <p>Here at CamAi, We exactly take care of that.</p>
                    <button className="bg-blue-400 justify-center mt-5 hover:bg-pink-100 px-4 py-2 rounded">More</button>
                </div>
                <Image src="/picture11.jpg" alt="Web Development" width={400} height={400} className='ml-44'/>
            </div>
        </section>
    </main>
    <Footer />
    </div>
);
};

export default Services;
