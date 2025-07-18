// components/AuthOptions.js
'use client';

import { signIn } from "next-auth/react";
import Link from 'next/link';
import styles from './AuthOptions.module.css';

export default function AuthOptions() {
  return (
    <div className={styles.authOptions}>
      {/* GitHub OAuth Login (triggers API route, so use a button) */}
      <button 
        onClick={() => signIn("github")} 
        className={`${styles.navButton} ${styles.userButton}`}
      >
        User Login
      </button>

      {/* Internal page, so use <Link> instead of <a> */}
      <Link 
        href="/auth/login" 
        className={`${styles.navButton} ${styles.adminButton}`}
      >
        Admin Login
      </Link>
    </div>
  );
}
