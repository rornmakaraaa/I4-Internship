import React, { useState } from 'react';
import Options from "@/components/admin/Options";

const UserTable = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Jennie Kim',
            email: 'jenniekim@gmail.com',
            role: 'admin',
            lastActive: '29.08.2024',
            dateAdded: '01.08.2024',
            image:'/user2.jpg'
        },
        {
            id: 2,
            name: 'Kim Jisoo',
            email: 'kimjisoo@gmail.com',
            role: 'manager',
            lastActive: '30.08.2024',
            dateAdded: '07.07.2024',
            image:'/user1.jpg'
        },
        {
            id: 3,
            name: 'Lala Lisa',
            email: 'lalalisa@gmail.com',
            role: 'manager',
            lastActive: '29.08.2024',
            dateAdded: '11.07.2024',
            image:'/profile.jpg'
        },
        {
            id: 4,
            name: 'Park Rose',
            email: 'parkrose@gmail.com',
            role: 'admin',
            lastActive: '16.07.2024',
            dateAdded: '07.06.2024',
            image:'/user3.jpg'
        },
    ]);

    return (
        <div className="container mx-auto mt-4">
            <table className="min-w-full bg-white shadow-md rounded table-fixed">
                <thead className="bg-gray-200 border-b border-gray-300 text-left h-10 rounded-lg">
                    <tr>
                        <th className="py-2 px-4">Image</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Last Active</th>
                        <th className="py-2 px-4">Date Added</th>
                        <th className="py-2 px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b">
                            <td className="py-2 px-4">
                                <img src={user.image} alt="Profile" className="w-8 h-8 rounded-full" />
                            </td>
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.role}</td>
                            <td className="py-2 px-4">{user.lastActive}</td>
                            <td className="py-2 px-4">{user.dateAdded}</td>
                            <td className="py-2 px-4">
                                <Options user={user} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;