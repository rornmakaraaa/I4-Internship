import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SignInForm.module.css';
import Link from 'next/link';

const SignInForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            router.push('/admin/dashboard');
        } else {
        }
    };

    return (
        <div className={styles.container}>
            <h1 className='text-3xl font-bold text-white mb-4'>Welcome to CamAi</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    className={styles.input}
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className={styles.input}
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className="mt-4">
                    <p className='text-white ml-48'>Already have an account?
                        <Link href="/login" className="text-blue-700 hover:underline">
                        Log in</Link>
                    </p>
                </div>
                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignInForm;