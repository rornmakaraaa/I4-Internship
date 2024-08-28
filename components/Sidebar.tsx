import Link from 'next/link';
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
                    <li className="mb-5">
                        <Link href="/dashboard" legacyBehavior>
                            <a onClick={() => handleLinkClick('/dashboard')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/dashboard' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaHome className="mr-2" />
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li className="mb-5">
                        <Link href="/project" legacyBehavior>
                            <a onClick={() => handleLinkClick('/project')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/project' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaProjectDiagram className="mr-2" />
                                Project
                            </a>
                        </Link>
                    </li>
                    <li className="mb-5">
                        <Link href="/chat-user" legacyBehavior>
                            <a onClick={() => handleLinkClick('/chat-user')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/chat-user' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaUserCircle className="mr-2" />
                                Chat User
                            </a>
                        </Link>
                    </li>
                    <li className="mb-5">
                        <Link href="/feedback" legacyBehavior>
                            <a onClick={() => handleLinkClick('/feedback')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/feedback' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaCommentDots className="mr-2" />
                                Feedback
                            </a>
                        </Link>
                    </li>
                    <li className="mb-5">
                        <Link href="/reporting" legacyBehavior>
                            <a onClick={() => handleLinkClick('/reporting')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/reporting' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaChartPie className="mr-2" />
                                Reporting
                            </a>
                        </Link>
                    </li>
                    <li className="mb-5">
                        <Link href="/user-management" legacyBehavior>
                            <a onClick={() => handleLinkClick('/user-management')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/user-management' ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                <FaUsersCog className="mr-2" />
                                User Management
                            </a>
                        </Link>
                    </li>
                    <li className="mb-5">
                        <Link href="/Logout" legacyBehavior>
                            <a onClick={() => handleLinkClick('/Logout')}
                            className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/Logout' ? 'bg-gray-500 text-white' : 'text-black'}`}>
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