import React, { useState } from 'react';
import { useRouter } from 'next/router';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    profile_image: string;
    addeddate: string;
};

interface CreateUserProps {
    onUserCreated: (user: User) => void;
    onClose: () => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ onUserCreated, onClose }) => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [addeddate, setAddeddate] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('addeddate', addeddate);
        formData.append('role', role.toLowerCase());

        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch('http://localhost:8000/api/usermanage', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const text = await response.text();
                console.error('Response:', text);
                throw new Error('Failed to create user');
            }

            const createdUser: User = await response.json();
            setSuccessMessage('User created successfully!');
            onUserCreated(createdUser);

            // Reset form fields
            setName('');
            setEmail('');
            setRole('');
            setAddeddate('');
            setImage(null);
            setError(null);

            setTimeout(() => {
                setSuccessMessage('');
                router.push('/admin/user');
            }, 2000);
        } catch (err) {
            const errorMessage = (err as Error).message;
            setError(errorMessage);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const handleClose = () => {
        router.push('/admin/user');
    };

    return (
        <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-md relative">
            <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-4xl"
                aria-label="Close"
            >
                &times;
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold">Create User</h3>
                {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="flex flex-col">
                    <label htmlFor="image" className="mb-1 font-medium">Upload Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageUpload}
                        required
                        className="p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="addeddate" className="mb-1 font-medium">Added Date</label>
                    <input
                        type="date"
                        id="addeddate"
                        value={addeddate}
                        onChange={(e) => setAddeddate(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="role" className="mb-1 font-medium">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="mr-2 border text-black py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;