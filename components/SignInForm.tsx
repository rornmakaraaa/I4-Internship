import React from 'react';
import styles from './SignInForm.module.css';
import Link from 'next/link';

const SignInForm = () => {
    return (
        <div className={styles.container}>
            <h1 className='text-3xl font-bold text-white mb-4'>Welcome to CamAi.Kh</h1>
            <form action="/api/login" method="post">
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className={styles.input}
                />
                <div className="mt-4">
                     <p className='text-white ml-48'>Already have an account? 
                        <Link href="/login" className="text-blue-700 hover:underline">Log in</Link></p>
                </div>
                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignInForm;
