import {useState } from 'react';

const CreateProject = () => {
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
            setFormData({...formData,[name]: value,});
        };

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log('Form data:', formData);
        };
        return (
            <div className="flex items-center">
                <form onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full">
                <div className="mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="projectTitle">Title</label>
                    <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter project title"/>
                </div>
                <div className="mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="projectType">Type</label>
                    <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded">
                        <option value="Select">Select project type</option>
                        <option value="Design">Design</option>
                        <option value="Web">Web Development</option>
                        <option value="Mobile">Mobile Development</option>
                        <option value="software">Software Development</option>
                    </select>
                </div>
                <div className="flex space-x-10 justify-between">
                    <div className="mb-2">
                        <label className="block mb-2 font-semibold" htmlFor="startDate">Start Date</label>
                        <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"/>
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 font-semibold" htmlFor="endDate">End Date</label>
                        <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"/>
                    </div>
                </div>
                <div className="mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="status">Team</label>
                    <select
                    id="team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded">
                        <option value="">Select team</option>
                        <option value="design">Design team</option>
                        <option value="web">Web team</option>
                        <option value="mobile">Mobile team</option>
                        <option value="software">Software team</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="status">Status</label>
                    <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded">
                        <option value="">Select status</option>
                        <option value="Active">Completed</option>
                        <option value="Completed">In Progress</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block mb-2 font-semibold" htmlFor="description">Description</label>
                    <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    rows={4}
                    placeholder="Enter project description"></textarea>
                </div>
                <div className="flex space-x-10 justify-between">
                    <button type="button" className="bg-gray-500 hover:bg-gray-300 text-white py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button type="submit" className="bg-blue-700 hover:bg-gray-500 text-white py-2 px-4 rounded">
                        Create
                    </button>
                </div>
            </form>
            </div>
    );
};

export default CreateProject;