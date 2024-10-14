import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios"; // Ensure axios is installed
import { useRouter } from "next/router"; // Use for routing to the edit page

type Project = {
    id: number;
    title: string;
    type: string;
    status: "Completed" | "In Progress";
    team: string[] | null; // Handle potential null values
    description: string;
};

const EditProject: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [expanded, setExpanded] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Track selected project for editing
    const [newTeamMember, setNewTeamMember] = useState(""); // State for adding new team member
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const router = useRouter(); // For navigation

    // Fetch projects from API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/projects");
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const toggleDescription = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    const handleEdit = (project: Project) => {
        setSelectedProject(project); // Set selected project to be edited
        setShowModal(true); // Show the modal with the edit form
    };

    const handleDelete = async (id: number) => {
        const confirmed = window.confirm("Are you sure you want to delete this project?");
        if (!confirmed) return;

        try {
            // Send a DELETE request to the API
            await axios.delete(`http://localhost:8000/api/projects/${id}`);

            // Filter the deleted project out of the state
            setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const handleSave = async () => {
        if (!selectedProject) return;

        try {
            // Update the project using PUT or PATCH
            await axios.put(`http://localhost:8000/api/projects/${selectedProject.id}`, selectedProject);
            
            // Update the projects in the state
            setProjects((prevProjects) =>
                prevProjects.map((project) =>
                    project.id === selectedProject.id ? selectedProject : project
                )
            );

            // Hide the modal after saving
            setShowModal(false);
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (selectedProject) {
            setSelectedProject({
                ...selectedProject,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleAddTeamMember = () => {
        if (!selectedProject || newTeamMember.trim() === "") return;

        const updatedTeam = selectedProject.team ? [...selectedProject.team, newTeamMember] : [newTeamMember];
        setSelectedProject({ ...selectedProject, team: updatedTeam });
        setNewTeamMember(""); // Reset the input field
    };

    const handleRemoveTeamMember = (index: number) => {
        if (!selectedProject || !selectedProject.team) return;

        const updatedTeam = selectedProject.team.filter((_, idx) => idx !== index);
        setSelectedProject({ ...selectedProject, team: updatedTeam });
    };

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white shadow-md rounded table-fixed">
                <thead className="bg-gray-200 border-b border-gray-300 text-left h-10 rounded-lg">
                    <tr>
                        <th className="title px-2 py-2">Title</th>
                        <th className="type px-4 py-2">Type</th>
                        <th className="description py-2">Description</th>
                        <th className="status px-8 py-2">Status</th>
                        <th className="team px-10 py-2">Team</th>
                        <th className="action py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="border-b">
                            <td className="px-2 py-2 whitespace-nowrap">{project.title}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{project.type}</td>
                            <td className="description py-2">
                                <span
                                    onClick={() => toggleDescription(project.id)} // Use project.id to identify which description to toggle
                                    className="cursor-pointer"
                                    style={{
                                        display: "inline-block",
                                        maxWidth: "200px",
                                        whiteSpace: expanded === project.id ? "normal" : "nowrap",
                                        overflow: expanded === project.id ? "visible" : "hidden",
                                        textOverflow: expanded === project.id ? "clip" : "ellipsis",
                                    }}
                                >
                                    {project.description}
                                </span>
                            </td>
                            <td className="px-9 py-2">
                                <span className={`inline-block py-1 px-4 rounded-full text-white whitespace-nowrap ${
                                    project.status === "Completed"
                                        ? "bg-green-600 text-green-700"
                                        : "bg-yellow-200 text-yellow-700"
                                }`}>
                                    {project.status}
                                </span>
                            </td>
                            <td className="text-right">
                                <div className="flex px-10">
                                    {Array.isArray(project.team) && project.team.length > 0 ? (
                                        project.team.map((avatar, idx) => (
                                            <img
                                                key={idx}
                                                src={avatar}
                                                alt="team member"
                                                className="w-6 h-6 rounded-full"
                                            />
                                        ))
                                    ) : (
                                        <span>No Team Members</span>
                                    )}
                                </div>
                            </td>
                            <td className="py-2 justify-center">
                                <div className="flex space-x-2">
                                    <FaEdit
                                        style={{ color: "blue", cursor: "pointer" }}
                                        onClick={() => handleEdit(project)} // Pass the project to edit
                                    />
                                    <FaTrash
                                        style={{ color: "red", cursor: "pointer" }}
                                        onClick={() => handleDelete(project.id)} // Delete project on click
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for editing project */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Edit Project</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={selectedProject.title}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={selectedProject.type}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea
                                name="description"
                                value={selectedProject.description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                            <select
                                name="status"
                                value={selectedProject.status}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            >
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        {/* Team Members Section */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Team Members</label>
                            <div className="mb-2">
                                {selectedProject.team && selectedProject.team.length > 0 ? (
                                    selectedProject.team.map((member, idx) => (
                                        <div key={idx} className="flex items-center justify-between mb-2">
                                            <span>{member}</span>
                                            <FaMinus
                                                style={{ color: "red", cursor: "pointer" }}
                                                onClick={() => handleRemoveTeamMember(idx)}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <span>No Team Members</span>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={newTeamMember}
                                    onChange={(e) => setNewTeamMember(e.target.value)}
                                    placeholder="Add team member"
                                    className="border rounded w-full py-2 px-3"
                                />
                                <FaPlus
                                    style={{ color: "green", cursor: "pointer", marginLeft: "10px" }}
                                    onClick={handleAddTeamMember}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProject;