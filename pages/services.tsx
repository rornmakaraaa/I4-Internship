import React from 'react';
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/auths/Footer';

const Services = () => {
return (
    <div className="services">
        <header className="flex justify-center items-center py-4">
            <nav className="flex text-center space-x-4">
                <Link href="/home" className="font-bold">Home</Link>
                <Link href="/services" className="underline decoration-none group
                    hover:decoration-blue-200 font-bold text-blue-500">Services</Link>
                <Link href="/about" passHref className="font-bold">About</Link>
                <Link href="/contact" className="font-bold">Contact</Link>
                <Link href="/pricing" className="font-bold">Pricing</Link>
            </nav>
            <div className="ml-8">
            <Link href="/login" className="underline decoration-none group
                            hover:decoration-blue-200 font-bold text-blue-500">
                Login
            </Link>
            </div>
        </header>
    <main className="mt-8">
        <div className="mb-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-2">A Great User Experience</h2>
            <h2 className="text-3xl font-bold mb-2 text-blue-400">Is Our Priority</h2>
            <p className="mt-4">We create user experience with accessibility in mind.</p>
            <p>We are here to give modern solutions to the modern problems.</p>
            <Image src="/work1.jpg" alt="Web Development" width={400} height={400}/>
        </div>
        <section className='mb-12'>
            <div className="flex">
                <div className='px-10 mt-8'>
                    <h3 className="text-2xl font-bold">Web Development</h3>
                    <h3 className="text-2xl font-bold text-blue-400 mt-2">Website and Web App Development</h3>
                    <p className="mt-4">A Website is something that gives you and Your Business a web presence. </p>
                    <p>Here at CamAi, We exactly take care of that.</p>
                </div>
                <Image src="/picture9.jpg" alt="Web Development" width={400} height={400} className='ml-44'/>
            </div>

            <div className="flex">
                <Image src="/picture10.jpg" alt="Web Development" width={400} height={400} className='ml-20'/>
                <div className="ml-80 mt-8">
                    <h2 className="text-2xl font-bold">Progressive Web Apps</h2>
                    <h2 className="text-2xl font-bold text-blue-400">Progressive web app development</h2>
                    <p className="mt-4">Progressive web apps are the future of
                        modern web</p>
                    <p>and we understand that as We've been working with those</p>
                </div>
            </div>
            <div className="flex">
                <div className='px-10 mt-8'>
                    <h3 className="text-2xl font-bold">User interface Design</h3>
                    <h3 className="text-2xl font-bold text-blue-400 mt-2">User interface and User experience design</h3>
                    <p className="mt-4">As a Design focused digital agency we are highly</p>
                    <p>concerned about the overall product design.</p>
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
