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
            <div className="create-project main flex-grow p-5">
                <CreateProject />
            </div>
        </div>
    </div>
);
};

export default AddProjects;