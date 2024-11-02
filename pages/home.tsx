"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/auths/Footer';
import "../app/globals.css";

interface ProjectData {
    id: number;
    title: string;
    type: string;
    status: 'In progress' | 'Completed';
    description: string;
}

interface ProjectCounts {
    website: number;
    uxUi: number;
    mobile: number;
    software: number;
}

const HomePage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>('');
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [projectCounts, setProjectCounts] = useState<ProjectCounts | null>(null);
    const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    const bannerImages = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];
    const projectsPerPage = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/projects');
                const data = await response.json();
                console.log("Fetched data:", data);
                // Filter for completed projects only
                const completedProjects = data.filter((project: ProjectData) => project.status === 'Completed');
                setProjectsData(completedProjects);
                countCompletedProjects(completedProjects); // Pass completed projects for counting
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, []);

    const countCompletedProjects = (data: ProjectData[]) => {
        const counts: ProjectCounts = { website: 0, uxUi: 0, mobile: 0, software: 0 };

        data.forEach(project => {
            const type = project.type?.toLowerCase().trim();

            if (type === "web development") {
                counts.website += 1;
            } else if (type === "ux/ui design") {
                counts.uxUi += 1;
            } else if (type === "mobile development") {
                counts.mobile += 1;
            } else if (type === "software development") {
                counts.software += 1;
            }
        });

        setProjectCounts(counts);
        console.log("Completed Project Counts:", counts);
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

    const handleButtonClick = (service: keyof ProjectCounts) => {
        if (selectedService === service) {
            setSelectedService(null);
        } else {
            setSelectedService(service);
            setCurrentPage(0);
        }
    };

    const filteredProjects = selectedService && projectCounts ? projectsData.filter(project => {
        if (selectedService === 'website') {
            return project.type.toLowerCase() === "web development";
        } else if (selectedService === 'uxUi') {
            return project.type.toLowerCase() === "ux/ui design";
        } else if (selectedService === 'mobile') {
            return project.type.toLowerCase() === "mobile development";
        } else if (selectedService === 'software') {
            return project.type.toLowerCase() === "software development";
        }
        return false;
    }) : projectsData;

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const renderProjects = () => {
        const startIndex = currentPage * projectsPerPage;
        const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
                {currentProjects.map((project, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                        <Image src="/picture8.jpg" alt={project.title} width={200} height={200} className="w-full h-auto" />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    return (
        <div className="home">
            <header className="flex justify-center items-center py-4">
                <nav className="flex text-center space-x-6">
                    <Link href="/home" className="underline decoration-none group hover:decoration-blue-200 font-bold text-blue-500">Home</Link>
                    <Link href="/services" className="font-bold">Services</Link>
                    <Link href="/about" className="font-bold">About</Link>
                    <Link href="/contact" className="font-bold">Contact</Link>
                    <Link href="/pricing" className="font-bold">Pricing</Link>
                </nav>
                <div className="ml-8">
                    <Link href="/login" className="underline decoration-none group hover:decoration-blue-200 font-bold text-blue-500">
                        Login
                    </Link>
                </div>
            </header>
            <main className="mt-2">
                <div className="flex justify-center mb-4">
                    <Image
                        src={bannerImages[currentImageIndex]}
                        alt="Illustration"
                        width={1280}
                        height={720}
                        className="transition-opacity duration-500 ease-in-out object-cover"
                    />
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
                            <h4 className="font-semibold">Web Development</h4>
                            <p>Develop and customize web apps</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/mobile.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Mobile Development</h4>
                            <p>Innovative mobile applications</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/analysis.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Analystic</h4>
                            <p>Innovative mobile applications</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 text-center">
                            <Image src="/picture7.jpg" alt="Software Customize" width={100} height={100} className="mx-auto" />
                            <h4 className="font-semibold">Software Development</h4>
                            <p>Innovative mobile applications</p>
                        </div>
                    </div>
                </section>
                <h3 className="text-2xl font-bold px-10">Let's see what we've been working on</h3>
                <p className="mb-8 px-10">Our Company Has Been Working On</p>
                <div className="flex gap-4 mb-8 px-10">
                    <button
                        onClick={() => handleButtonClick('website')}
                        className={`border rounded px-4 py-2 ${selectedService === 'website' ? 'bg-blue-500 text-white' : 'text-black'}`}
                    >
                        Website
                    </button>
                    <button
                        onClick={() => handleButtonClick('uxUi')}
                        className={`border rounded px-4 py-2 ${selectedService === 'uxUi' ? 'bg-blue-500 text-white' : 'text-black'}`}
                    >
                        UX/UI
                    </button>
                    <button
                        onClick={() => handleButtonClick('mobile')}
                        className={`border rounded px-4 py-2 ${selectedService === 'mobile' ? 'bg-blue-500 text-white' : 'text-black'}`}
                    >
                        Mobile Development
                    </button>
                    <button
                        onClick={() => handleButtonClick('software')}
                        className={`border rounded px-4 py-2 ${selectedService === 'software' ? 'bg-blue-500 text-white' : 'text-black'}`}
                    >
                        Software Development
                    </button>
                </div>
                {renderProjects()}
                {totalPages > 0 && (
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-3 h-3 rounded-full mx-1 ${currentPage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                )}
            </main>
            <Modal show={showModal} onClose={closeModal} title="Information">
                <p>{modalContent}</p>
            </Modal>
            <Footer />
        </div>
    );
};

export default HomePage;