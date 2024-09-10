import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import TrashTable from '@/components/admin/TrashTable';
import { FaBackward } from 'react-icons/fa';

const trash = () => {
    const router = useRouter();
    return (
    <div className="project flex flex-col w-auto">
        <Header />
        <div className="project-container flex">
        <Sidebar />
        <div className="main flex-grow p-5">
            <div className="top-bar flex">
                <h2 className="font-bold text-3xl">Projects</h2>
            </div>
            <div className="back flex mt-4 items-center">
                <button className="bg-blue-700 text-white flex font-semibold
                py-2 px-2 hover:bg-gray-500 rounded-lg items-center font-size-lg"
                onClick={() => router.push('/admin/projects')}>
                    <FaBackward className="mr-1" />Back</button>
            </div>
            <div className="project-table">
            <TrashTable />
            </div>
        </div>
        </div>
    </div>
);
};

export default trash;