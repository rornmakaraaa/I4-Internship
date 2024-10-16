import React, { useState } from "react";
import { useRouter } from 'next/router';
import Select from 'react-select';  // Import the Select component

const CreateProject = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        projectTitle: '',
        projectType: '',
        startDate: '',
        endDate: '',
        team: [],  // Change to an array to store selected team members
        status: '',
        description: '',
    });

    const [error, setError] = useState<string | null>(null);
    
    // Updated team members array
    const teamMembers = [
        { value: 'ux_ui_design', label: 'UX/UI Design' },
        { value: 'website_developer', label: 'Website Developer' },
        { value: 'mobile_developer', label: 'Mobile Developer' },
        { value: 'software_developer', label: 'Software Developers' },
        { value: 'analytics', label: 'Analytics' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTeamChange = (selectedOptions: any) => {
        const selectedMembers = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
        setFormData({ ...formData, team: selectedMembers }); // Update team with selected values
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
                    team: formData.team,  // Pass team as an array
                    status: formData.status,
                    description: formData.description,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create project');
            }
            router.push('/admin/projects');
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
                <div className="project-title">
                    <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Project Title"
                    />
                </div>
                <div className="project-type">
                    <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="">Project Type</option>
                        <option value="Design">UX/UI Design</option>
                        <option value="Web">Web Development</option>
                        <option value="Mobile">Mobile Development</option>
                        <option value="Software">Software Customize</option>
                        <option value="Software">Analytics</option>
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
                    />
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="team">
                    <Select
                        options={teamMembers}
                        isMulti
                        onChange={handleTeamChange}
                        placeholder="Select Team Members"
                    />
                </div>
                <div className="status">
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
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
                        className="bg-gray-400 hover:bg-gray-600 text-black py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-900 hover:bg-gray-500 text-white py-2 px-4 rounded"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;