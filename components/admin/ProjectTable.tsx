import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

type Team = {
    id: number;
    name: string;
};

type Project = {
    id: number;
    title: string;
    type: string;
    status: "Completed" | "In Progress";
    team: string | null;
    description: string;
};

interface ProjectTableProps {
    searchQuery: string;
}

const ProjectTable: React.FC<ProjectTableProps> = ({ searchQuery }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/projects");
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        const fetchTeams = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/teams");
                setTeams(response.data);
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
        };

        fetchProjects();
        fetchTeams();
    }, []);

    // Handle edit project
    const handleEdit = (project: Project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    // Handle delete project
    const handleDelete = async (id: number) => {
        const confirmed = window.confirm("Are you sure you want to delete this project?");
        if (!confirmed) return;

        try {
            await axios.delete(`http://localhost:8000/api/projects/${id}`);
            setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    // Handle form input changes for the edit form
    const handleEditChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (selectedProject) {
            setSelectedProject((prevProject) => ({
                ...prevProject!,
                [name]: name === "team" ? teams.find((team) => team.id === +value)?.name || null : value,
            }));
        }
    };

    // Handle form submission for editing a project
    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedProject && selectedProject.id) {
            try {
                await axios.put(`http://localhost:8000/api/projects/${selectedProject.id}`, selectedProject);
                setProjects((prevProjects) =>
                    prevProjects.map((project) =>
                        project.id === selectedProject.id ? selectedProject : project
                    )
                );
                setShowModal(false); // Close modal after saving
            } catch (error) {
                console.error("Error updating project:", error);
            }
        } else {
            console.error("Invalid project data");
        }
    };

    // Filter projects based on search query
    const filteredProjects = projects.filter(
        (project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="overflow-x-auto mt-4">
            <table ref={tableRef} className="min-w-full bg-white shadow-md rounded table-fixed">
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
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProjects.map((project) => (
                        <tr key={project.id}>
                            <td className="px-2 py-2 whitespace-nowrap">{project.title}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{project.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span>
                                    {expandedProjectId === project.id
                                        ? project.description
                                        : `${project.description.slice(0, 15)}...`}
                                </span>
                                {project.description.length > 15 && (
                                    <span
                                        className="cursor-pointer text-gray-500 ml-1"
                                        onClick={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
                                    >
                                        {expandedProjectId === project.id ? ' ▲' : ' ...'}
                                    </span>
                                )}
                            </td>
                            <td className="px-8 py-2 whitespace-nowrap">
                                <button className={`py-1 px-3 rounded ${project.status === "Completed" ? "bg-green-500" : "bg-orange-500"} text-white`}>
                                    {project.status}
                                </button>
                            </td>
                            <td className="px-10 py-2 whitespace-nowrap">{project.team || "No Team"}</td>
                            <td className="py-2 justify-center">
                                <div className="flex space-x-2">
                                    <FaEdit style={{ color: "blue", cursor: "pointer" }} onClick={() => handleEdit(project)} />
                                    <FaTrash style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(project.id)} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Edit Project</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={selectedProject?.title || ""}
                                    onChange={handleEditChange}
                                    className="border rounded w-full py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={selectedProject?.type || ""}
                                    onChange={handleEditChange}
                                    className="border rounded w-full py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={selectedProject?.description || ""}
                                    onChange={handleEditChange}
                                    className="border rounded w-full py-2 px-3"
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Status</label>
                                <select
                                    name="status"
                                    value={selectedProject?.status || ""}
                                    onChange={handleEditChange}
                                    className="border rounded w-full py-2 px-3"
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Team</label>
                                <select
                                    name="team"
                                    value={teams.find(team => team.name === selectedProject?.team)?.id || ""}
                                    onChange={handleEditChange}
                                    className="border rounded w-full py-2 px-3"
                                >
                                    <option value="">Select Team</option>
                                    {teams.map((team) => (
                                        <option key={team.id} value={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white hover:bg-gray-700 px-4 py-2 rounded"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white hover:bg-blue-700 px-4 py-2 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectTable;