import React, { useEffect, useState } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/auths/Footer';
import axios from 'axios';

const About = () => {
    const [teams, setTeams] = useState<any[]>([]); // State to store team data
    const [showMembers, setShowMembers] = useState<{ [key: string]: boolean }>({}); // State to manage visibility of team members

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/teams'); // Fetching team data
                setTeams(response.data); // Storing team data in state
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchTeams();
    }, []);

    const toggleTeamMembers = (teamId: string) => {
        setShowMembers(prevState => ({
            ...prevState,
            [teamId]: !prevState[teamId], // Toggle the visibility of team members
        }));
    };

    return (
        <div className="about">
            <header className="flex justify-center items-center py-4">
                <nav className="flex text-center space-x-4">
                    <Link href="/home" className="font-bold">Home</Link>
                    <Link href="/services" className="font-bold">Services</Link>
                    <Link href="/about" passHref className="underline decoration-none group hover:decoration-blue-200 font-bold text-blue-500">About</Link>
                    <Link href="/contact" className="font-bold">Contact</Link>
                    <Link href="/pricing" className="font-bold">Pricing</Link>
                </nav>
                <div className="ml-8">
                    <Link href="/login" className="underline decoration-none group hover:decoration-blue-200 font-bold text-blue-500">
                        Login
                    </Link>
                </div>
            </header>

            <main className="mt-8">
                <section className="mb-12">
                    <div className="flex">
                        <div className='px-10 mt-16'>
                            <h3 className="text-2xl font-bold">How we started doing</h3>
                            <h3 className="text-2xl font-bold text-blue-400 mt-2">what we love</h3>
                            <p className="mt-4">At CamAi.Kh, We’re your digital success partner.</p>
                            <p>With good in web development,</p>
                            <p>digital marketing and design, we deliver tailored solutions for business and</p>
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
                            <p>but that above everything else delivered data-driven real results for clients.</p>
                        </div>
                    </div>

                    <div className="team mt-4">
                        <h3 className="text-2xl font-bold px-10">Here Our Team</h3>
                        {/* Displaying team data */}
                        <div className="flex flex-wrap justify-center mt-4">
                            {teams.length > 0 ? (
                                teams.map((team: any) => (
                                    <div key={team.id} className="team-card mx-4 my-2 border p-4 rounded-lg shadow-md">
                                        <h4 className="font-bold text-lg">{team.name}</h4>
                                        <Image src={team.image} alt={team.name} width={200} height={200} className="rounded-full" />
                                        <p className="mt-2">{team.description}</p>
                                        <div className="team-members mt-2">
                                            <button
                                                className="text-blue-500 font-bold mt-2"
                                                onClick={() => toggleTeamMembers(team.id)}
                                            >
                                                {showMembers[team.id] ? 'Hide team members' : 'View team members'}
                                            </button>
                                            {showMembers[team.id] && (
                                                <div>
                                                    <h5 className="font-bold mt-2">Members:</h5>
                                                    <ul>
                                                        {team.members?.map((member: any) => (
                                                            <li key={member.id}>{member.name} - {member.role}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No team information available.</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center h-full mt-8">
                        <h3 className="text-2xl font-bold">Excited to work with us?</h3>
                        <h3 className="text-blue-400 text-2xl font-bold mt-2">Let's Connect</h3>
                    </div>

                    <div className="flex justify-center">
                        <Link href="/contact" passHref>
                            <button className="text-white bg-blue-900 mt-4 hover:bg-gray-400 px-4 py-2 rounded">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;