import React from 'react';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

const chatgp = () => {
    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
            <Sidebar />
            <div className="main flex-grow p-5">

            </div>
            </div>
        </div>
    )
}

export default chatgp;