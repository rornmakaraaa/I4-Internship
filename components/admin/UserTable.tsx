import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    addeddate: string;
    image: string;
};

interface UserTableProps {
    searchTerm: string;
}

const UserTable: React.FC<UserTableProps> = ({ searchTerm }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState<User | null>(null);

    const roles = [
        { value: 'admin', label: 'Admin' },
        { value: 'manager', label: 'Manager' },
        { value: 'customer', label: 'Customer' },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/usermanage');
                if (!response.ok) throw new Error('Failed to fetch users');
                const data = await response.json();
                const usersWithCorrectDate = data.map((user: any) => ({
                    ...user,
                    addeddate: user.AddedDate
                }));
                setUsers(usersWithCorrectDate);
            } catch (error) {
                setError('Failed to load users');
            }
        };
        fetchUsers();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setShowModal(true);
        setIsCreating(false);
        setProfileImage(null);
    };

    const handleDelete = async () => {
        if (userToDelete) {
            try {
                await fetch(`http://localhost:8000/api/usermanage/${userToDelete.id}`, { method: 'DELETE' });
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userToDelete.id));
                setShowDeleteModal(false);  // Close the delete confirmation modal
            } catch (error) {
                setError('Failed to delete user');
            }
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedUser(null);
        setProfileImage(null);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', selectedUser!.name);
        formData.append('email', selectedUser!.email);
        formData.append('role', selectedUser!.role);
        if (selectedUser!.addeddate) {
            formData.append('addeddate', selectedUser!.addeddate);
        }
        if (profileImage) {
            formData.append('image', profileImage);
        }
        try {
            if (isCreating) {
                const response = await fetch('http://localhost:8000/api/usermanage', {
                    method: 'POST',
                    body: formData,
                });
                const newUser = await response.json();
                newUser.image = `${window.location.origin}/uploads/${newUser.image}`;
                setUsers((prev) => [...prev, { ...newUser, addeddate: newUser.AddedDate }]);
            } else if (selectedUser) {
                await fetch(`http://localhost:8000/api/usermanage/${selectedUser.id}`, {
                    method: 'PUT',
                    body: formData,
                });
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === selectedUser.id
                            ? { ...selectedUser, image: profileImage ? URL.createObjectURL(profileImage) : user.image }
                            : user
                    )
                );
            }
            handleModalClose();
        } catch (error) {
            setError(isCreating ? 'Failed to create user' : 'Failed to update user');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedUser) {
            const { name, value } = e.target;
            setSelectedUser({ ...selectedUser, [name]: value });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfileImage(e.target.files[0]);
            if (selectedUser) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (event.target && typeof event.target.result === 'string') {
                        setSelectedUser({ ...selectedUser, image: event.target.result });
                    }
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    };

    const handleCreateUser = () => {
        setSelectedUser({
            id: 0,
            name: '',
            email: '',
            role: '',
            addeddate: '',
            image: '',
        });
        setShowModal(true);
        setIsCreating(true);
    };

    const handleShowDeleteModal = (user: User) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    if (error) {
        return <div>{error}</div>;
    }

    // Filter users based on searchTerm
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto mt-4">
            <table className="min-w-full bg-white shadow-md rounded table-fixed">
                <thead className="bg-gray-200 border-b border-gray-300 text-left h-10 rounded-lg">
                    <tr>
                        <th className="py-2 px-4">Image</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Added Date</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id} className="border-b">
                            <td className="py-2 px-4">
                                <img src={user.image} alt="Profile" className="w-8 h-8 rounded-full" />
                            </td>
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.role}</td>
                            <td className="py-2 px-4">{formatDate(user.addeddate)}</td>
                            <td className="py-2 px-4">
                                <div className="flex space-x-2">
                                    <button onClick={() => handleEdit(user)}>
                                        <FaEdit style={{ color: 'blue', cursor: 'pointer' }} />
                                    </button>
                                    <button onClick={() => handleShowDeleteModal(user)}>
                                        <FaTrash style={{ color: 'red', cursor: 'pointer' }} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">{isCreating ? 'Create User' : 'Edit User'}</h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedUser.name}
                                    onChange={handleInputChange}
                                    className="border rounded w-full py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={selectedUser.email}
                                    onChange={handleInputChange}
                                    className="border rounded w-full py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Role</label>
                                <select
                                    id="role"
                                    value={selectedUser.role}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
                                    required
                                    className="p-2 border rounded w-full"
                                >
                                    <option value="">Select a role</option>
                                    {roles.map(role => (
                                        <option key={role.value} value={role.value}>{role.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Profile Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button type="button" onClick={handleModalClose} className="mr-2 border text-black py-2 px-4 rounded">Close</button>
                                <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded">{isCreating ? 'Create' : 'Save'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Delete Confirmation Modal */}
            {showDeleteModal && userToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3">
                        <h3 className="text-xl font-bold mb-4">Are you sure to delete this user?</h3>
                        <p className="mb-4">{userToDelete.name} ({userToDelete.email})</p>
                        <div className="flex justify-between">
                            <button onClick={() => setShowDeleteModal(false)} className="mr-2 border text-black py-2 px-4 rounded">Cancel</button>
                            <button onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 rounded">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTable;