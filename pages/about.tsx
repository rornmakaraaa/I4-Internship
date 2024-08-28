import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

const about = () => {
    return (
    <div className="about">
        <header className="flex justify-between items-center py-4 ">
            <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
                <nav className="flex text-center space-x-4">
                    <Link href="/home" className="font-bold">Home</Link>
                    <Link href="/services" className="font-bold">Services</Link>
                    <Link href="/about" passHref className="underline decoration-none group
                        hover:decoration-blue-200 font-bold text-blue-500">About</Link>
                    <Link href="/contact" className="font-bold">Contact</Link>
                    <Link href="/pricing" className="font-bold">Pricing</Link>
                </nav>
                <div>
                    <Link href="/signin" className="sign-in-link border font-bold border-gray-300 px-4 py-2 hover:bg-pink-100">
                    Sign In
                    </Link>
                </div>
        </header>
        <main className="mt-8">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">We are helping people with</h2>
                <h2 className="text-3xl font-bold mb-2 text-blue-400">building their brands</h2>
                <p className="mt-4">Global digital agency offering advertising and digital solutions for clients.</p>
                <Image src="/picture12.jpg" alt="Our Story" width={300} height={300} className="mx-auto" />
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white w-28 h-10 rounded-2xl hover:bg-pink-100">Our Story</button>
            </div>
            <section className="mb-12">
                <div className="flex">
                    <div className='px-10 mt-16'>
                        <h3 className="text-2xl font-bold">How we started doing</h3>
                        <h3 className="text-2xl font-bold text-blue-400 mt-2">what we love</h3>
                        <p className="mt-4">At CamAi.Kh , We’re your digital success partner.
                        With gaod in web development,</p>
                        <p>digital markerting and design, we deliver tailored solutions for business and</p>
                        <p>individuals. Our commitment to excellence and innovation ensures</p>
                        <p>results-driven strategies that empower your online presence.</p>
                        <p>Let’s achieve greatness together.</p>
                    </div>
                    <Image src="/picture13.jpg" alt="our story" width={400} height={350} className='ml-56 mt-32'/>
                </div>
                    <div className="flex">
                        <Image src="/picture14.jpg" alt="our story" width={450} height={450} className="px-10 mt-20"/>
                        <div className="mt-32">
                        <h3 className="text-2xl font-bold text-blue-400">Our values</h3>
                        <h3 className="text-2xl font-bold mt-2">Why You Should Work With Us</h3>
                        <p className="mt-4">Because connecting to your audience is what success is built on.</p>
                        <p>Utrainomedia was founded with a vision to impact better digital solutions for businesses.</p>
                        <p>Solutions that were beautiful and functional,</p>
                        <p>but that above everything else delivered data-driven real results for clients.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full mt-8">
                        <h3 className="text-2xl font-bold">Excited to work with us?</h3>
                        <h3 className="text-blue-400 text-2xl font-bold mt-2">Let's Connect</h3>
                    </div>
                    <div className="flex justify-center">
                    <Link href="/contact" passHref>
                        <button className="text-white bg-blue-500 mt-4 hover:bg-pink-100 px-4 py-2 rounded">
                            Get Started
                        </button>
                    </Link>
                    </div>
            </section>
            </main>
            < Footer />
    </div>
)
}

export default about;