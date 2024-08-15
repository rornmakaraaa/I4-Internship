import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-4">
                <h1 className="font-bold text-4xl">CamAi</h1>
                <nav className="flex space-x-4">
                    <Link href="/home" className="hover:bg-pink-100">Home</Link>
                    <Link href="/services" className="hover:bg-pink-100">Services</Link>
                    <Link href="/about" className="hover:bg-pink-100">About</Link>
                    <Link href="/contact" className="hover:bg-pink-100">Contact</Link>
                    <Link href="/pricing" className="hover:bg-pink-100 ">Pricing</Link>
                </nav>
                <div>
                    <Link href="/sign-in" className="sign-in-link border border-gray-300 px-4 py-2 hover:bg-pink-100">
                    Sign In
                    </Link>
                </div>
            </header>
            <main className="mt-8 text-center">
                <h2 className="text-3xl font-bold mb-2">We Help People To</h2>
                <h2 className="text-3xl font-bold mb-2 text-purple-500">Shine Online</h2>
                <p className="mb-6">We are here to help your business to grow and thrive online.</p>
                
                <button className="bg-blue-500 justify-center  hover:bg-pink-100 
                px-4 py-2 rounded">Get Started</button>

                <div className="flex justify-center mb-8 py-5">
                    <Image src="/banner.jpg" alt="Illustration" width={400} height={400} className="rounded" />
                </div>
            </main>


            <section className="mb-12">
                    <h3 className="text-2xl font-bold">Services that we help </h3>
                    <h3 className="text-2xl font-bold mb-4 text-purple-500">Your Business</h3>
                    <h4>Here The Services That We Can Help You</h4>
                    <div className="flex space-x-4">
                       
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/ui.jpg" alt="Web App" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">UX/UI Design</h4>
                            <p>Develop and customize web apps</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/web.jpg" alt="Mobile App" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Web Develpment</h4>
                            <p>Innovative mobile applications</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/mobile.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Progressive Web Apps</h4>
                            <p>Tailored software solutions</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/mobile.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Software Customize</h4>
                            <p>Tailored software solutions</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/mobile.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Software Customize</h4>
                            <p>Tailored software solutions</p>
                        </div>
                    </div>
                </section>
            
        </div>
    );
};

export default HomePage;
