import React from 'react';
import "../app/globals.css";
import Image from 'next/image';
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
  return (
    <div className={styles.container}>
            <div className="px-10">
                <h3 className="text-5xl font-bold mt-20">Let’s Get Connected</h3>
                <p className="mt-2 text-xl">Let’s get Connected and Make that Dream</p>
                <p className="text-blue-400 text-xl">Project of Your’s</p>
            </div>
        <div className="flex space-x-40">
            <div className={styles.contactForm}>
                <form>
                <input type="text" name="name" placeholder="Name" required className={styles.input} />
                <input type="email" name="email" placeholder="Email" required className={styles.input} />
                <textarea name="message" placeholder="Message" required className={styles.input}></textarea>
                <button type="submit" className={styles.button}>Send</button>
                </form>
            </div>
                <Image src="/picture15.jpg" alt="picture" width={400} height={400} className="mt-12" />
        </div>
    </div>
  );
};

export default ContactUsForm;
