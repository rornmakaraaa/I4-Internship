import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <div className="home">
            <header className="flex justify-between items-center py-4 ">
                <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
                <nav className="flex text-center space-x-4">
                    <Link href="/home" className="hover:bg-pink-100 font-bold text-blue-500">Home</Link>
                    <Link href="/services" className="hover:bg-pink-100 font-bold">Services</Link>
                    <Link href="/about" className="hover:bg-pink-100 font-bold">About</Link>
                    <Link href="/contact" className="hover:bg-pink-100 font-bold">Contact</Link>
                    <Link href="/pricing" className="hover:bg-pink-100 font-bold ">Pricing</Link>
                </nav>
                <div>
                    <Link href="/signin" className="sign-in-link border font-bold border-gray-300 px-4 py-2 hover:bg-pink-100">
                    Sign In
                    </Link>
                </div>
            </header>
            <main className="mt-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">We Help People To</h2>
                    <h2 className="text-3xl font-bold mb-2 text-purple-500">Shine Online</h2>
                    <p className="mb-6">We are here to help your business to grow and shine online.</p>
                    <Link href="/signin" passHref>
                        <button className="bg-blue-500 justify-center hover:bg-pink-100 px-4 py-2 rounded">
                            Get Started
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center mb-8 py-5">
                    <Image src="/banner.jpg" alt="Illustration" width={400} height={400} className="rounded" />
                </div>

                <section className="mb-12 px-10">
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
                            <Image src="/picture7.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Software Customize</h4>
                            <p>Tailored software solutions</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/picture8.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Software Customize</h4>
                            <p>Tailored software solutions</p>
                        </div>
                    </div>
                </section>
                    <h3 className="text-2xl font-bold px-10">Let's see what we've been working on</h3>
                    <h3 className="text-2xl font-bold px-10"> working on</h3>
                    <p className="mb-8 px-10">Our Company Has Been Working On</p>
                <div className="flex gap-4 mb-8 px-10">
                    <button className="bg-blue-700 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded">
                        Website
                    </button>
                    <button className=" border border-radius-40 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                        UI/UX
                    </button>
                    <button className="border border-radius-40 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                        Mobile
                    </button>
                    <button className="border border-radius-40 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                        Sotfware Customize
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <Image src="/snapchat.jpg" alt="SnapChat Clone" 
                            width={200} height={200} className="w-full h-auto" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">SnapChat Clone</h3>
                                <Link href="/projects/snapchat-clone" className="text-blue-500 hover:underline">
                                    View Project
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <Image src="/E-learning.jpg" alt="E-Learning App" 
                            width={200} height={200} className="w-full h-auto" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">E-Learning App</h3>
                                <Link href="/projects/e-learning-app" className="text-blue-500 hover:underline">
                                    View Project
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <Image src="/Production.jpg" alt="Drumolotion Production" 
                            width={200} height={200} className="w-full h-auto" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Drumolotion Production</h3>
                                <Link href="/projects/drumolotion-production" className="text-blue-500 hover:underline">
                                    View Project
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="flex justify-center">
                    <Link href="/services" passHref>
                        <button className="bg-blue-500 mt-8 hover:bg-pink-100 px-4 py-2 rounded">
                            More
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
