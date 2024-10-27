import React from 'react';
import CreateProject from '@/components/admin/CreateProject';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

const AddProjectPage: React.FC = () => {
    const handleProjectCreated = () => {
        console.log("Project successfully created!");
    };

    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
                <Sidebar />
                <div className="CreateProject">
                    <CreateProject onProjectCreated={handleProjectCreated} />
                </div>
            </div>
        </div>
    );
};

export default AddProjectPage;