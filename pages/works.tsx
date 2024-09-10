import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/auths/Footer';

const works = () => {
    return (
        <div className="home">
            <header className="flex justify-between items-center py-4 ">
                <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
                <nav className="flex text-center space-x-4">
                    <Link href="/home" className="font-bold">Home</Link>
                    <Link href="/services" className="underline decoration-none group
                    hover:decoration-blue-200 font-bold">Services</Link>
                    <Link href="/about" className="font-bold">About</Link>
                    <Link href="/contact" className="font-bold">Contact</Link>
                    <Link href="/pricing" className="font-bold ">Pricing</Link>
                </nav>
                <div>
                    <Link href="/signin" className="sign-in-link border font-bold border-gray-300 px-4 py-2 hover:bg-pink-100">
                    Sign In
                    </Link>
                </div>
            </header>
            <main className="mt-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">What we’ve been working on</h2>
                    <p className="mb-6">Here the products that we have been completed</p>
                </div>

                <div className="mb-10 flex justify-center">
                    <Image src="/work2.jpg" alt="Illustration" width={400} height={400} className="rounded" />
                </div>

                <section className="mb-12 px-10">
                    <h3 className="text-2xl font-bold">Our recent work</h3>
                    <h4 className="text-purple-500">check our recent works</h4>
                    <div className="flex gap-4 mt-2">
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
                </section>

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
                                <Link href="/projects/drumolotion-production" className="text-blue-700 hover:underline">
                                    View Project
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="font-bold text-center mt-10">Got a Project for us? Let’s Connect</h3>
                    <Link href="/contact" passHref>
                        <button className="bg-blue-700 mt-8 text-white hover:bg-pink-100 px-4 py-2 rounded">
                            Contact us
                        </button>
                    </Link>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default works;