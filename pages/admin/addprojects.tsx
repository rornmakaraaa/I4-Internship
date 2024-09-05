import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const addprojects = () => {
    return (
    <div className="add-projects">
        <Header />
        <div className="project-contents flex">
        <Sidebar />
        <div className="top-bar main flex-grow p-5">
            <h2 className="font-bold text-3xl">Create Project</h2>
        </div>
        </div>
    </div>
);
};

export default addprojects;