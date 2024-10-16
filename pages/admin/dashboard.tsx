import React,{useState} from 'react';
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

const dashboard = () => {
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const handleSeeAllClick = () => {
    setShowMoreProjects(!showMoreProjects);
    };

    const projectsToShow = showMoreProjects
        ? recentProjectsData
        : recentProjectsData.slice(0, 4);

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
                            <p className="font-semibold mt-4 text-2xl">20</p>
                            <p className="font-semibold mt-2 text-xl">Projects</p>
                            <img src={projectIcon} alt="Customer Icon" className="card-icon" />
                        </div>
                        <div className="card total-visitors">
                            <h3 className="font-bold text-2xl">Total Visitors</h3>
                            <p className="font-semibold mt-4 text-2xl">20</p>
                            <p className="font-semibold nt-2 text-xl">Visitors</p>
                            <img src={visitorsIcon} alt="Customer Icon" className="card-icon" />
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
                            {recentProjectsData.slice(0, showMoreProjects ? recentProjectsData.length : 3).map((project, index) => (
                                <tr key={index}>
                                    <td>{project.title}</td>
                                    <td>{project.team}</td>
                                    <td>{project.status} <span className="status-dot"></span></td>
                                </tr>
                            ))}
                            </tbody>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
);
};

export default dashboard;