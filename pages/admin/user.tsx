import React from 'react';
import Link from 'next/link';
import '../styles/dasboard.css';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import UserTable from '@/components/admin/UserTable';
import { FaSearch } from "react-icons/fa";

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
            <div className="flex items-center justify-between mb-4">
                <button className=" bg-blue-700 text-white font-semibold py-2 px-2
                hover:bg-gray-500 rounded-lg">All Users</button>
                <div className="flex items-center ml-4">
                    <button className="flex items-center bg-gray-200 rounded-lg py-2 px-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-none outline-none bg-transparent w-24" />
                            <FaSearch className="text-gray-500 ml-2" style={{ fontSize: '20px' }} />
                    </button>
                    <Link href="/admin/addprojects"
                        className="bg-blue-700 text-white font-semibold hover:bg-gray-500 rounded-lg py-2 px-4 ml-4">
                        + Add User
                    </Link>
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