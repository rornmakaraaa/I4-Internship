import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

const Logout = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authToken');

        router.push('/');
    };

    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
                <Sidebar />
                <div className="main flex-grow p-5">
                    <h2 className="text-center text-2xl font-bold">Are you sure you want to log out?</h2>
                    <button
                        className="bg-red-600 text-white py-2 px-4 rounded mt-4"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
