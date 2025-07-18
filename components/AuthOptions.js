// components/AuthOptions.js
'use client';

import { signIn } from "next-auth/react";
import styles from './AuthOptions.module.css'; // optional, reuse existing CSS

export default function AuthOptions() {
  return (
    <div className={styles.authOptions}>
      <button 
        onClick={() => signIn("github")} 
        className={`${styles.navButton} ${styles.userButton}`}
      >
        User Login
      </button>
      <a 
        href="/auth/login" 
        className={`${styles.navButton} ${styles.adminButton}`}
      >
        Admin Login
      </a>
    </div>
  );
}
