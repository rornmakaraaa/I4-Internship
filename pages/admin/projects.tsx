import React, { useState } from 'react';
import '../styles/dasboard.css';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import ProjectTable from '@/components/admin/ProjectTable';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const ProjectsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
                <Sidebar />
                <div className="main flex-grow p-5">
                    <div className="top-bar flex">
                        <h2 className="font-bold text-2xl">Projects</h2>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex">
                            <Link href="/admin/projects" className="bg-blue-900 text-white font-semibold py-2 px-4 hover:bg-gray-500 rounded-lg">
                                All Projects
                            </Link>
                        </div>
                        <div className="flex items-center ml-4">
                            <button className="flex items-center bg-gray-200 rounded-lg py-2 px-2">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="border-none outline-none bg-transparent w-24"
                                />
                                <FaSearch className="text-gray-500 ml-2" style={{ fontSize: '20px' }} />
                            </button>
                            <Link href="/admin/addprojects" className="bg-blue-900 text-white font-semibold hover:bg-gray-500 rounded-lg py-2 px-4 ml-4">
                                + Add Project
                            </Link>
                        </div>
                    </div>
                    <div className="project-table">
                        <ProjectTable searchQuery={searchQuery} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;