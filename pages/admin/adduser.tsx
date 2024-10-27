import React, { useState } from 'react';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';
import CreateUser from '@/components/admin/CreateUser';

const AddUser: React.FC = () => {
    const [showCreateUser, setShowCreateUser] = useState<boolean>(false);
    type User = {
        id: number;
        name: string;
        email: string;
        role: string;
        profile_image: string;
        birthdate: string;
    };
    const handleCreateUser = (user: User) => {
        console.log("User successfully created!", user);
    };
    return (
        <div className="project flex flex-col w-auto">
            <Header />
            <div className="project-container flex">
                <Sidebar />
                <div className="main flex-grow p-5">
                        <CreateUser
                            onUserCreated={handleCreateUser}
                            onClose={() => setShowCreateUser(false)}
                        />
                </div>
            </div>
        </div>
    );
}

export default AddUser;