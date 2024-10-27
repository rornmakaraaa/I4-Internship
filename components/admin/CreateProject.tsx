import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

type Team = {
    id: number;
    name: string;
};

type Project = {
    title: string;
    type: string;
    status: "Completed" | "In Progress" | "";
    team: string | null;
    description: string;
};

const CreateProject: React.FC<{ onProjectCreated: () => void }> = ({ onProjectCreated }) => {
    const router = useRouter();
    const [teams, setTeams] = useState<Team[]>([]);
    const [newProject, setNewProject] = useState<Project>({
        title: "",
        type: "",
        status: "",
        team: null,
        description: "",
    });

    // Fetch teams from API
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/teams");
                setTeams(response.data);
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
        };

        fetchTeams();
    }, []);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject((prevProject) => ({
            ...prevProject,
            [name]: name === "team" ? teams.find((team) => team.id === +value)?.name || null : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/projects", newProject);
            onProjectCreated();
            router.push("/admin/projects");
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    const handleBack = () => {
        router.push('/admin/projects');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/2 relative">
                <button
                    onClick={handleBack}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-4xl"
                    aria-label="Back to Projects"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">Create New Project</h2>
                <form onSubmit={handleSubmit}>
                    {["title", "type"].map((field) => (
                        <div key={field} className="mb-4">
                            <label className="block text-sm font-bold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            <input
                                type="text"
                                name={field}
                                value={newProject[field as keyof Project] as string}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>
                    ))}

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Description</label>
                        <textarea
                            name="description"
                            value={newProject.description}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Status</label>
                        <select
                            name="status"
                            value={newProject.status}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                        >
                            <option value="">Select Team</option>
                            {teams.map((team) => (
                                <option key={team.id} value={team.id}>{team.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <Link
                            href="/admin/projects"
                            className="bg-gray-500 text-white hover:bg-gray-700 px-4 py-2 rounded ml-2 text-center"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white hover:bg-gray-700 px-4 py-2 rounded"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;