import React, { useState } from 'react';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleBack = () => {
        window.history.back();
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('role', role);
        if (image) {
            formData.append('image', image);
        }

        console.log('User Created', { name, email, role, image });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-md relative">
            <button
                onClick={handleBack}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-4xl"
                aria-label="Back to Projects">
                &times;
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold">Create User</h3>
                <div className="flex flex-col">
                    <label htmlFor="image" className="mb-1 font-medium">Upload Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageUpload}
                        required
                        className="p-2 border border-gray-300 rounded-md"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="role" className="mb-1 font-medium">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded-md">
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-600">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;