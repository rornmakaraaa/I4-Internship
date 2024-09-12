import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateProject = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        projectTitle: '',
        projectType: '',
        startDate: '',
        endDate: '',
        description: '',
        team: '',
        status: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="relative p-8 w-full mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Create Projects</h2>
                <button
                    onClick={handleBack}
                    className="text-gray-500 hover:text-gray-800 text-4xl"
                    aria-label="Back to Projects">
                    &times;
                </button>
            </div>
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
                    <select
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded">
                        <option value="">Team</option>
                        <option value="Design">Design</option>
                        <option value="Web">Web</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Software">Software</option>
                    </select>
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