import Link from 'next/link';
import "../app/globals.css";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaHome, FaProjectDiagram, FaUserCircle, FaCommentDots, FaChartPie, FaUsersCog, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);

    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname]);

    return (
        <div className="w-72 h-auto p-5 shadow-lg bg-white">
            <nav>
                <ul className="list-none p-0">
                    <li className="mb-2">
                        <Link href="/admin/dashboard" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/dashboard' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaHome className="mr-2" />
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/projects" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/projects' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaProjectDiagram className="mr-2" />
                                Project
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/user" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/user' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaUsersCog className="mr-2" />
                                User
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/team" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/team' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaUsersCog className="mr-2" />
                                Team
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/chatgp" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/chatgp' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaUserCircle className="mr-2" />
                                Chat
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/feedback" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/feedback' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaCommentDots className="mr-2" />
                                Feedback
                            </a>
                        </Link>
                    </li>
                    <li className="mb-16">
                        <Link href="/admin/report" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/report' ? 'bg-blue-900 text-white' : 'text-black'}`}>
                                <FaChartPie className="mr-2" />
                                Reporting
                            </a>
                        </Link>
                    </li>
                    <li className="log">
                        <Link href="/admin/logout" legacyBehavior>
                            <a className={`flex items-center text-lg p-3 rounded-lg
                                ${activeLink === '/admin/logout' ? 'bg-blue-900' : 'text-red-600'}`}>
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