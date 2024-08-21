import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Loginform.module.css';

const Loginform = () => {
    const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/signin');
  };
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
                     <p className='text-white ml-48'>Don't have an account? 
                        <Link href="/signin" className="text-blue-700 hover:underline">Sign Up</Link></p>
                </div>
                <button type="submit" className={styles.button}>Log In</button>
                <h1 className="font-bold mt-4">Create New Account</h1>
                <Link href="/signin">
                    <button className="bg-blue-700 text-white w-full p-4 rounded-3xl mt-4 ">Sign Up</button>
                </Link>

            </form>
        </div>
  );
};

export default Loginform;