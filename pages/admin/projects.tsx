import React from 'react';
import './dasboard.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProjectTable from '@/components/authentication/ProjectTable';
import Link from 'next/link';

const projects = () => {
    return (
    <div className="project flex flex-col w-auto">
        <Header />
        <div className="project-container flex">
        <Sidebar />
        <div className="main flex-grow p-5">
            <div className="top-bar flex">
                <h2 className="font-bold text-3xl">Projects</h2>
                <div>
                    <Link href="/admin/addprojects" className="bg-blue-700 p-2 rounded-lg
                    text-white font-semibold hover:bg-gray-500"
                    >+ Add Projects</Link>
                </div>
            </div>
            <div className="flex">
                <Link href="/admin/projects" className=" bg-blue-700 text-white font-semibold py-2 px-2
                hover:bg-gray-500 rounded-l-lg">All Projects</Link>
                <Link href="/admin/trash" className=" bg-gray-300 text-gray-700 font-semibold py-2 px-2
                hover:bg-gray-500 rounded-r-lg">Trash</Link>
                <div className="search-bar ml-auto">
                    <input type="text" placeholder="Search..." />
                    <button className="hover:bg-gray-200">🔍</button>
                </div>
            </div>
            <div className="project-table">
                <ProjectTable />
            </div>
        </div>
        </div>
    </div>
)
}

export default projects;