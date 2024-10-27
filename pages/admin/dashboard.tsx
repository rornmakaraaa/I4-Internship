import React, { useState, useEffect } from 'react';
import '../styles/dasboard.css';
import { FaSearch } from 'react-icons/fa';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

const customerIcon = '/person.jpg';
const projectIcon = '/project.jpg';
const visitorsIcon = '/visitors.jpg';

const recentProjectsData = [
    { title: 'E-commerce Web', team: 'Full-stack Team', status: 'Completed' },
    { title: 'Inventory Management', team: 'UI/UX Design Team', status: 'In Progress' },
    { title: 'Social Media App', team: 'Mobile Dev Team', status: 'Completed' },
    { title: 'CRM System', team: 'Backend Team', status: 'Completed' },
    { title: 'Healthcare Platform', team: 'DevOps Team', status: 'In Progress' },
    { title: 'Social Media App', team: 'Mobile Dev Team', status: 'Completed' },
    { title: 'CRM System', team: 'Backend Team', status: 'Completed' },
    { title: 'Healthcare Platform', team: 'DevOps Team', status: 'In Progress' },
];

const Dashboard = () => {
    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [totalProjects, setTotalProjects] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleSeeAllClick = () => {
        setShowMoreProjects(!showMoreProjects);
    };

    const projectsToShow = showMoreProjects
        ? recentProjectsData
        : recentProjectsData.slice(0, 4);

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
                    <div className="top-cards">
                        <div className="card total-customers">
                            <h3 className="font-bold text-2xl">Total Customers</h3>
                            <p className="font-semibold mt-4 text-2xl">20</p>
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
                            <p className="font-semibold mt-4 text-2xl">20</p>
                            <p className="font-semibold mt-2 text-xl">Visitors</p>
                            <img src={visitorsIcon} alt="Visitors Icon" className="card-icon" />
                        </div>
                    </div>
                    <div className="recent-projects ">
                        <div className="projects-header">
                            <h3 className="font-semibold">Recent Projects</h3>
                            <button className="see-all-btn" onClick={handleSeeAllClick}>
                                See All
                            </button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Projects Title</th>
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