import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className="flex py-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
                <h3 className="font-bold text-lg">CamAi</h3>
                <p className="text-gray-500">Address: Institute Of Technology Of Cambodia</p>
                <p className="text-gray-500">Toul Kork Phnom Penh</p>
            </div>

            <div className="mb-6 md:mb-0">
                <h3 className="font-bold text-lg">Contact</h3>
                <p className="flex items-center text-gray-500">
                    <span className="mr-2">📧</span> camaikh@gmail.com
                </p>
                <p className="flex items-center text-gray-500">
                    <span className="mr-2">📞</span> +85512345678
                </p>
            </div>

            <div>
                <h3 className="font-bold text-lg">About</h3>
                <ul>
                    <li>
                        <Link href="/about" className="text-gray-500 hover:text-blue-500">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-500 hover:text-blue-500">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="text-gray-500 hover:text-blue-500">
                            Pricing
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
);
};

export default Footer;