import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Loginform.module.css';

const Loginform = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loginData = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);

                router.push('/admin/dashboard');
            } else {
                setError('Invalid credentials, please try again.');
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className='text-3xl font-bold text-white mb-4'>Welcome to CamAi</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.input}
                />
                {error && <p className="text-red-500">{error}</p>}
                <div className="mt-4">
                    <p className='text-white ml-48'>Don't have an account? 
                        <Link href="/signin" className="text-blue-700 hover:underline">Sign Up</Link>
                    </p>
                </div>
                <button type="submit" className={styles.button}>Log In</button>
                <h1 className="font-bold mt-4">----------- Create New Account -----------</h1>
                <Link href="/signin">
                    <button className="bg-blue-700 text-white w-full p-4 rounded-3xl mt-4">Sign Up</button>
                </Link>
            </form>
        </div>
    );
};

export default Loginform;