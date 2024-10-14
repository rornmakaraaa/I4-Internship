import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import axios from 'axios';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    status: 'Active' | 'Inactive';
}
interface Team {
    id: number;
    name: string;
    image: string;
    members?: TeamMember[];
}
const TeamManagement: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const teamsPerPage = 4;

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/teams');
                const teamsWithMembers = response.data.map((team: Team) => ({
                    ...team,
                    members: team.members || [],
                }));
                setTeams(teamsWithMembers);
            } catch (error) {
                setError('Error fetching teams');
                console.error('Error fetching teams:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = teams.slice(indexOfFirstTeam, indexOfLastTeam);
    const totalPages = Math.ceil(teams.length / teamsPerPage);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <p>Loading teams...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
                <Sidebar />
                <div className="main flex-grow p-5">
                    <h1 className="text-2xl font-bold mb-4">Team Management</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {currentTeams.map((team) => (
                            <div key={team.id} className="border border-gray-300 p-4 rounded-lg shadow-lg">
                                <img
                                    src={team.image}
                                    alt={team.name}
                                    className="h-24 w-24 object-cover mx-auto mb-4"
                                />
                                <h3 className="text-lg font-bold">{team.name}</h3>
                                <p>{(team.members?.length || 0)} Members</p>
                                <Link href={`/admin/${team.id}`} className="text-blue-600 hover:underline mt-2">
                                    View Team Members
                            </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(index + 1)}
                                className={`mx-2 px-4 py-2 rounded-full ${
                                    currentPage === index + 1
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-black'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamManagement;