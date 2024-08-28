import React from 'react';
import "../app/globals.css";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const project = () => {
    return (
    <div className="project flex flex-col">
        <Header />
        <div className="project-container flex">
        <Sidebar />
        <div className="main flex-grow p-5">
            <div className="top-bar flex">
                <h2 className="font-bold text-3xl">Project</h2>
                <button className="bg-blue-700 p-2 rounded-lg text-white font-semibold
                hover:bg-gray-500">+ Add Projects</button>
            </div>
            <div className="flex">
                <button className=" bg-blue-700 text-white font-semibold py-3 px-2
                hover:bg-gray-500 rounded-l-lg">All Projects</button>
                <button className=" bg-gray-300 text-gray-700 font-semibold py-3 px-2
                hover:bg-gray-500 rounded-r-lg">Trash</button>
                <div className="search-bar ml-auto">
                    <input type="text" placeholder="Search..." />
                    <button className="hover:bg-gray-200">🔍</button>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}

export default project;