import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import PricingToggle from '../components/PricingToggle';
import Footer from '@/components/Footer';

const pricing = () => {
return (
    <div className="pricing">
        <header className="flex justify-between items-center  py-4 ">
            <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
            <nav className="flex text-center space-x-4">
                <Link href="/home" className="font-bold">Home</Link>
                <Link href="/services" className="font-bold">Services</Link>
                <Link href="/about" className="font-bold">About</Link>
                <Link href="/contact" className="font-bold">Contact</Link>
                <Link href="/pricing" className="underline decoration-none group
                    hover:decoration-blue-200 font-bold text-blue-500">Pricing</Link>
            </nav>
    <div>
        <Link href="/signin" className="sign-in-link font-bold border border-gray-300 px-4 py-2 hover:bg-pink-100">
        Sign In
        </Link>
    </div>
    </header>
    <main>
    <PricingToggle />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Free</h3>
            <p className="mt-4 text-gray-600">Free plan for all users.</p>
            <ul className="mt-6 space-y-4">
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">2 Workspaces</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">10 Collaborators</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unlimited Data</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unified Analytics</span>
            </li>
            </ul>
            <div className="mt-8">
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-700 mt-12">Get Started</button>
            </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-90">$15/month</h3>
            <p className="mt-4 text-gray-600">Ideal for small businesses.</p>
            <ul className="mt-6 space-y-4">
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unlimited Workspaces</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unlimited Collaboration</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">15 GB Data Storage</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unified Analytics</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Mobile App Access</span>
            </li>
            </ul>
            <div className="mt-8">
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-700">Get Started</button>
            </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900">$25/month</h3>
            <p className="mt-4 text-gray-600">Works best for enterprise companies.</p>
            <ul className="mt-6 space-y-4">
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unlimited Workspaces</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unlimited Collaboration</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">15 GB Data Storage</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Unified Analytics</span>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium text-gray-900">Mobile App Access</span>
            </li>
            </ul>
            <div className="mt-8">
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-700">Get Started</button>
            </div>
        </div>
        </div>
    </div>
    </main>
    <Footer />
    </div>
);
};

export default pricing;