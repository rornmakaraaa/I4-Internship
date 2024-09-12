import React from 'react';
import Link from 'next/link';
import '../styles/dasboard.css';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import UserTable from '@/components/admin/UserTable';

const user = () => {
    return (
    <div className="project flex flex-col w-auto">
        <Header />
        <div className="project-container flex">
        <Sidebar />
        <div className="main flex-grow p-5">
            <div className="top-bar flex">
                <h2 className="font-bold text-3xl">User Management</h2>
            </div>
            <div className="flex">
                <button className=" bg-blue-700 text-white font-semibold py-2 px-2
                hover:bg-gray-500 rounded-lg">All Users</button>
                <div className="flex ml-auto space-x-4">
                    <div className="search-bar ml-auto">
                        <input type="text" placeholder="Search..." />
                        <button className="hover:bg-gray-200">🔍</button>
                    </div>
                    <div className="add-user mt-2">
                        <Link href="/admin/adduser" className="bg-blue-700 py-2 px-2 rounded-lg
                        text-white font-semibold hover:bg-gray-500"
                        >+ Add user</Link>
                    </div>
                </div>
            </div>
            <div className="user-table">
                <UserTable />
            </div>
        </div>
        </div>
    </div>
)
}

export default user;