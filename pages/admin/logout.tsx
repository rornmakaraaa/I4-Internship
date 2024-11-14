import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

const Logout = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        router.push('/login');
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
                <Sidebar />
                <div className="main flex-grow p-5 mt-32">
                    <h2 className="text-center text-2xl font-bold">Are you sure want to log out?</h2>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            className="bg-red-600 text-white py-2 px-4 rounded"
                            onClick={handleLogout}>
                            Logout
                        </button>
                        <button
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                            onClick={handleCancel}>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;