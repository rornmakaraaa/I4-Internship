import React from "react";
import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateProject = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        projectTitle: '',
        projectType: '',
        startDate: '',
        endDate: '',
        team: '',
        status: '',
        description: '',
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.projectTitle,
                    type: formData.projectType,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    team: formData.team.split(','), // Assuming you input team members as a comma-separated string
                    status: formData.status,
                    description: formData.description,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create project');
            }


            router.push('/admin/projects'); // Assuming you have a page to display projects

        } catch (error: any) {
            console.error('Error creating project:', error);
            setError(error.message || 'Something went wrong');
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="relative p-8 w-full mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Create Project</h2>
                <button
                    onClick={handleBack}
                    className="text-gray-500 hover:text-gray-800 text-4xl"
                    aria-label="Back to Projects">
                    &times;
                </button>
            </div>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="project-tittle">
                    <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Project Title"/>
                </div>
                <div className="project-type">
                    <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded">
                        <option value="">Project Type</option>
                        <option value="Design">Design</option>
                        <option value="Web">Web Development</option>
                        <option value="Mobile">Mobile Development</option>
                        <option value="Software">Software Development</option>
                    </select>
                </div>
                <div className="date flex space-x-4">
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Start Date"/>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="End Date"/>
                </div>
                <div className="team">
                    <input
                        type="text"
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Team (comma-separated usernames)"/>
                </div>
                <div className="status">
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded">
                        <option value="">Status</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                    </select>
                </div>
                <div className="description">
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        rows={3}
                        placeholder="Description"
                    ></textarea>
                </div>

                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="bg-gray-400 hover:bg-gray-600 text-black py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;