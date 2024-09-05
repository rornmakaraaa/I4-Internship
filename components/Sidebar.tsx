import Link from 'next/link';
import "../app/globals.css";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHome, FaProjectDiagram, FaUserCircle, FaCommentDots, FaChartPie, FaUsersCog, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('/');
    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <div className="w-72 h-auto bg-white p-5 shadow-lg">
            <nav>
                <ul className="list-none p-0">
                    <li className="mb-2">
                        <Link href="/admin/dashboard" legacyBehavior>
                            <a onClick={() => handleLinkClick('/dashboard')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/dashboard' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaHome className="mr-2" />
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/projects" legacyBehavior>
                            <a onClick={() => handleLinkClick('/projects')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/projects' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaProjectDiagram className="mr-2" />
                                Project
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/user" legacyBehavior>
                            <a onClick={() => handleLinkClick('/user-management')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/user-management' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaUsersCog className="mr-2" />
                                User Management
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/team" legacyBehavior>
                            <a onClick={() => handleLinkClick('/team-management')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/team-management' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaUsersCog className="mr-2" />
                                Team Management
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/chat-user" legacyBehavior>
                            <a onClick={() => handleLinkClick('/chat-user')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/chat-user' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaUserCircle className="mr-2" />
                                Chat User
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/feedback" legacyBehavior>
                            <a onClick={() => handleLinkClick('/feedback')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/feedback' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaCommentDots className="mr-2" />
                                Feedback
                            </a>
                        </Link>
                    </li>
                    <li className="mb-16">
                        <Link href="/admin/reporting" legacyBehavior>
                            <a onClick={() => handleLinkClick('/reporting')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/reporting' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaChartPie className="mr-2" />
                                Reporting
                            </a>
                        </Link>
                    </li>
                    <li className="log">
                        <Link href="/admin/Logout" legacyBehavior>
                            <a onClick={() => handleLinkClick('/Logout')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/Logout' ? 'bg-gray-500' : 'text-red-600'}`}>
                                <FaSignOutAlt className="mr-2" />
                                Log Out
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}