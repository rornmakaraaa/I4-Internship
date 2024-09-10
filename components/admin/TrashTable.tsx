import React from "react";
import {FaRecycle, FaTrash} from 'react-icons/fa';


type TrashTable = {
    title: string;
    type: string;
    status: "Completed" | "In Progress";
    team: string[];
    deleteOn: string[];
};

const projects: TrashTable[] = [
    {
        title: "Hotel Management System",
        type: "Web Development",
        status: "Completed",
        team: ["/profile.jpg", "/user2.jpg", "/user3.jpg"],
        deleteOn:["29.08.2024"],
    },
    {
        title: "Hotel Management System",
        type: "Web Development",
        status: "In Progress",
        team: ["/user2.jpg", "/user1.jpg", "/user3.jpg"],
        deleteOn:["30.08.2024"],
    },
]

const TrashTable: React.FC =() => {
    return (
        <div className="overflow-auto mt-4">
            <table className="min-w-full bg-white shadow-md rounded table-fixed">
            <thead className="bg-gray-300 border-b border-gray-300 text-left h-10 rounded-lg">
                <tr>
                    <th className="title px-2 py-2">Title</th>
                    <th className="type px-4 py-2">Type</th>
                    <th className="status px-8 py-2">Status</th>
                    <th className="team px-20 py-2">Team</th>
                    <th className="deleteon text-center py-2">Delete On</th>
                    <th className="action text-center py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                    {projects.map((project, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-2 py-2">{project.title}</td>
                            <td className="px-4 py-2 ">{project.type}</td>
                            <td className="px-9 py-2 ">
                                <span
                                    className={`inline-block py-1 px-2 rounded-full text-white ${
                                    project.status === "Completed" ? "bg-green-600 text-green-700" :
                                    "bg-yellow-200 text-yellow-700"}`}>
                                    {project.status}
                                </span>
                            </td>
                            <td className="text-right">
                                <div className="flex px-20">
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
                            <td className="px-4 text-center py-2">{project.deleteOn}</td>
                            <td className="py-2 justify-center">
                                <div className="flex space-x-2">
                                    <FaRecycle style={{ color: 'green' }}/>
                                    <FaTrash style={{ color: 'red' }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TrashTable;