import React, { useState } from "react";
import { FaRecycle, FaTrash } from "react-icons/fa";

type TrashTable = {
    title: string;
    type: string;
    description: string;
    status: "Completed" | "In Progress";
    team: string[];
    deleteOn: string;
};

const projects: TrashTable[] = [
    {
    title: "Hotel Management System",
    type: "Web Development",
    status: "Completed",
    team: ["/profile.jpg", "/user2.jpg", "/user3.jpg"],
    deleteOn: "29.08.2024",
    description: "A comprehensive system for managing hotel reservations and operations.",
    },
    {
        title: "Hotel Management System",
        type: "Web Development",
        status: "In Progress",
        team: ["/user2.jpg", "/user1.jpg", "/user3.jpg"],
        deleteOn: "30.08.2024",
        description: "A comprehensive system for managing hotel reservations and operations.",
    },
];

const TrashTable: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setExpanded(expanded === index ? null : index);
};

    return (
        <div className="overflow-auto mt-4">
        <table className="min-w-full bg-white shadow-md rounded table-fixed">
            <thead className="bg-gray-300 border-b border-gray-300 text-left h-10 rounded-lg">
            <tr>
                <th className="title px-2 py-2">Title</th>
                <th className="type px-4 py-2">Type</th>
                <th className="description py-2">Description</th>
                <th className="status px-8 py-2">Status</th>
                <th className="team px-6 py-2">Team</th>
                <th className="deleteon py-2">Delete On</th>
                <th className="action px-4 py-2">Action</th>
            </tr>
            </thead>
            <tbody>
            {projects.map((project, index) => (
                <tr key={index} className="border-b">
                <td className="px-2 py-2 whitespace-nowrap">{project.title}</td>
                <td className="px-4 py-2 whitespace-nowrap">{project.type}</td>

                <td className="description py-2">
                    <span
                    onClick={() => toggleDescription(index)}
                    className="cursor-pointer"
                    style={{
                        display: "inline-block",
                        maxWidth: "200px",
                        whiteSpace: expanded === index ? "normal" : "nowrap",
                        overflow: expanded === index ? "visible" : "hidden",
                        textOverflow: expanded === index ? "clip" : "ellipsis",
                    }}
                    >
                    {project.description}
                    </span>
                </td>

                <td className="px-9 py-2">
                    <span className={`inline-block py-1 px-4 rounded-full text-white whitespace-nowrap ${
                        project.status === "Completed"
                        ? "bg-green-600 text-green-700"
                        : "bg-yellow-200 text-yellow-700"}`}
                    >
                        {project.status}
                    </span>
                </td>

                <td className="team text-right">
                    <div className="flex px-6">
                    {project.team.map((avatar, idx) => (
                        <img
                        key={idx}
                        src={avatar}
                        alt="team member"
                        className="w-6 h-6 rounded-full"
                        />
                    ))}
                    </div>
                </td>

                <td className="deleteon  py-2">{project.deleteOn}</td>
                <td className="action py-2">
                    <div className="flex space-x-2 px-4">
                    <FaRecycle style={{ color: "green" }} />
                    <FaTrash style={{ color: "red" }} />
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
);
};

export default TrashTable;