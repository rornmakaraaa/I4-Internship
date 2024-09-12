import React from 'react';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import CreateUser from '@/components/admin/CreateUser';

const adduser = () => {
    return (
    <div className="project flex flex-col w-auto">
        <Header />
        <div className="project-container flex">
        <Sidebar />
        <div className="main flex-grow p-5">
        <CreateUser />
        </div>
        </div>
    </div>
)
}

export default adduser;