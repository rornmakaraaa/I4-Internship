import React from 'react';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import CreateProject from '@/components/admin/CreateProject';

const AddProjects = () => {
    return (
    <div className="add-projects">
        <Header />
        <div className="project-contents flex">
            <Sidebar />
            <div className="main flex-grow p-5">
                <h2 className="font-bold text-3xl mb-4">Create Project</h2>
                <CreateProject />
            </div>
        </div>
    </div>
);
};

export default AddProjects;
