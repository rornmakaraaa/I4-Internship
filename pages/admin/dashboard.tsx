import React, { useState, useEffect } from 'react';
import '../styles/dasboard.css';
import { FaSearch } from 'react-icons/fa';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

const customerIcon = '/person.jpg';
const projectIcon = '/project.jpg';
const visitorsIcon = '/visitors.jpg';

// Define the interface for a User
interface User {
    name: string;
    email: string;
    role: string;
}

// Define the interface for a Project
interface Project {
    title: string;
    team: string;
    status: string;
}

const Dashboard = () => {
    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [totalProjects, setTotalProjects] = useState(0);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    const handleSeeAllClick = () => {
        setShowMoreProjects(!showMoreProjects);
    };
    const projectsToShow = showMoreProjects ? projects : projects.slice(0, 4);

    // Fetch total projects from API
    useEffect(() => {
        const fetchTotalProjects = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/dashboard/projects/count');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTotalProjects(data.total_projects);
            } catch (error) {
                console.error('Failed to fetch total projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTotalProjects();
    }, []);

    // Fetch users from the API and filter only those with the "customer" role
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/usermanage');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);

                // Filter users by role "customer"
                const customerUsers = data.filter((user: User) => user.role === 'customer');
                setFilteredUsers(customerUsers);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        fetchUsers();
    }, []);

    // Fetch projects from the API (this is where you fetch the project data)
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/projects');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-container">
                <Sidebar />
                <div className="main-content">
                    <div className="top-bar">
                        <h2 className="font-bold text-2xl">Dashboard</h2>
                        <button className="flex items-center bg-gray-200 rounded-lg py-2 px-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border-none outline-none bg-transparent w-24" />
                            <FaSearch className="text-gray-500 ml-2" style={{ fontSize: '20px' }} />
                        </button>
                    </div>
                    {/* Top Cards */}
                    <div className="top-cards">
                        <div className="card total-customers">
                            <h3 className="font-bold text-2xl">Total Customers</h3>
                            <p className="font-semibold mt-4 text-2xl">{filteredUsers.length}</p>
                            <p className="font-semibold mt-2 text-xl">Customers</p>
                            <img src={customerIcon} alt="Customer Icon" className="card-icon" />
                        </div>
                        <div className="card total-projects">
                            <h3 className="font-bold text-2xl">Total Projects</h3>
                            <p className="font-semibold mt-4 text-2xl">{loading ? 'Loading...' : totalProjects}</p>
                            <p className="font-semibold mt-2 text-xl">Projects</p>
                            <img src={projectIcon} alt="Project Icon" className="card-icon" />
                        </div>
                        <div className="card total-visitors">
                            <h3 className="font-bold text-2xl">Total Visitors</h3>
                            <p className="font-semibold mt-4 text-2xl">3</p>
                            <p className="font-semibold mt-2 text-xl">Visitors</p>
                            <img src={visitorsIcon} alt="Visitors Icon" className="card-icon" />
                        </div>
                    </div>
                    {/* Recent Projects Section */}
                    <div className="recent-projects">
                        <div className="projects-header">
                            <h3 className="font-semibold">Recent Projects</h3>
                            <button className="see-all-btn" onClick={handleSeeAllClick}>
                                See All
                            </button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Title</th>
                                    <th>Team</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectsToShow.map((project, index) => (
                                    <tr key={index}>
                                        <td>{project.title}</td>
                                        <td>{project.team}</td>
                                        <td>{project.status} <span className="status-dot"></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;