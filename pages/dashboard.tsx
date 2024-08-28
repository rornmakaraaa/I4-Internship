import React from 'react';
import "../app/globals.css";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import customerIcon from '../public/person.jpg';
import projectIcon from '../public/project.jpg';
import visitorsIcon from '../public/visitors.jpg';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-container">
                <Sidebar />
                <div className="main-content">
                    <div className="top-bar">
                        <h2 className="font-bold text-3xl">Dashboard</h2>
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                            <button className="hover:bg-gray-200">🔍</button>
                        </div>
                    </div>

                    <div className="top-cards">
                        <div className="card total-customers">
                            <h3 className="font-bold text-2xl">Total Customers</h3>
                            <p className="font-semibold mt-4 text-2xl">20</p>
                            <p className="font-semibold mt-2 text-xl">Customers</p>
                            <img src={customerIcon.src} alt="Customer Icon" className="card-icon" />
                        </div>
                        <div className="card total-projects">
                            <h3 className="font-bold text-2xl">Total Projects</h3>
                            <p className="font-semibold mt-4 text-2xl">20</p>
                            <p className="font-semibold mt-2 text-xl">Projects</p>
                            <img src={projectIcon.src} alt="Customer Icon" className="card-icon" />
                        </div>
                        <div className="card total-visitors">
                            <h3 className="font-bold text-2xl">Total Visitors</h3>
                            <p className="font-semibold mt-4 text-2xl">20</p>
                            <p className="font-semibold nt-2 text-xl">Visitors</p>
                            <img src={visitorsIcon.src} alt="Customer Icon" className="card-icon" />
                        </div>
                    </div>

                    <div className="recent-projects">
                        <div className="projects-header">
                            <h3>Recent Projects</h3>
                            <button className="see-all-btn">See All</button>
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
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <tr key={index}>
                                        <td>E-commerce Web</td>
                                        <td>Full-stack Team</td>
                                        <td>In Progress <span className="status-dot"></span></td>
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