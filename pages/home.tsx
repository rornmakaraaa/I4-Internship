"use client";

import React, { useState, ReactNode } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/auths/Footer';

// Define types for projects and services
interface Project {
    src: string;
    alt: string;
    title: string;
    link: string;
}

interface Projects {
    website: Project[];
    uiUx: Project[];
    mobile?: Project[];  // You can add this key if you have mobile projects
    softwareCustomization?: Project[];
}

const HomePage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>('');
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const openModal = (content: string) => {
        setModalContent(content);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    interface ModalProps {
        show: boolean;
        onClose: () => void;
        title: string;
        children: ReactNode;
    }

    const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
        if (!show) return null;

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div>{children}</div>
                    <button
                        onClick={onClose}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };

    // Define the project data with explicit types
    const projects: Projects = {
        website: [
            { src: "/snapchat.jpg", alt: "SnapChat Clone", title: "SnapChat Clone", link: "/projects/snapchat-clone" },
            { src: "/E-learning.jpg", alt: "E-Learning App", title: "E-Learning App", link: "/projects/e-learning-app" },
            { src: "/Production.jpg", alt: "Drumolotion Production", title: "Drumolotion Production", link: "/projects/drumolotion-production" },
        ],
        uiUx: [
            { src: "/snapchat.jpg", alt: "SnapChat Clone", title: "SnapChat Clone", link: "/projects/snapchat-clone" },
            { src: "/E-learning.jpg", alt: "E-Learning App", title: "E-Learning App", link: "/projects/e-learning-app" },
            { src: "/Production.jpg", alt: "Drumolotion Production", title: "Drumolotion Production", link: "/projects/drumolotion-production" },
        ],
        // You can add more categories like 'mobile' or 'softwareCustomization' as needed
    };

    // Toggle the selected service
    const handleButtonClick = (service: keyof Projects) => {
        // Toggle the service. If the same button is clicked, deselect it.
        if (selectedService === service) {
            setSelectedService(null);  // Deselect the current service
        } else {
            setSelectedService(service);  // Set the new service
        }
    };

    const renderProjects = () => {
        if (!selectedService || !projects[selectedService as keyof Projects]) return null;

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
                {projects[selectedService as keyof Projects]?.map((project, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                        <Image src={project.src} alt={project.alt} width={200} height={200} className="w-full h-auto" />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                            <Link href={project.link} className="text-blue-500 hover:underline">
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="home">
            <header className="flex justify-between items-center py-4 ">
                <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
                <nav className="flex text-center space-x-4">
                    <Link href="/home" className="underline decoration-none group hover:decoration-blue-200 font-bold text-blue-500">Home</Link>
                    <Link href="/services" className="font-bold">Services</Link>
                    <Link href="/about" className="font-bold">About</Link>
                    <Link href="/contact" className="font-bold">Contact</Link>
                    <Link href="/pricing" className="font-bold ">Pricing</Link>
                </nav>
                <div>
                    <Link href="/login" className="sign-in-link border font-bold border-gray-100 px-4 py-2 hover:bg-gray-500">
                        Sign In
                    </Link>
                </div>
            </header>
            <main className="mt-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">We Help People To</h2>
                    <h2 className="text-3xl font-bold mb-2 text-purple-500">Shine Online</h2>
                    <p className="mb-6">We are here to help your business to grow and shine online.</p>
                    <Link href="/login" passHref>
                        <button className="bg-blue-700 justify-center text-white hover:bg-gray-500 px-4 py-2 rounded">
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
                <h3 className="text-2xl font-bold px-10">Working on</h3>
                <p className="mb-8 px-10">Our Company Has Been Working On</p>

                <div className="flex gap-4 mb-8 px-10">
                    <button
                        className="border border-radius-40 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('website')}
                    >
                        Website
                    </button>
                    <button
                        className="border border-radius-40 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('uiUx')}
                    >
                        UI/UX
                    </button>
                    <button
                        className="border border-radius-40 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('mobile')}
                    >
                        Mobile
                    </button>
                    <button
                        className="border border-radius-40 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleButtonClick('softwareCustomization')}
                    >
                        Software Customize
                    </button>
                </div>

                {renderProjects()}

                <div className="flex justify-center">
                    <Link href="/services" passHref>
                        <button className="bg-blue-700 mt-8 text-white hover:bg-gray-500 px-4 py-2 rounded">
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