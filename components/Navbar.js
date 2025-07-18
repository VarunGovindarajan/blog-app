"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLink}>Home</Link>
      {session ? (
        <>
          <Link href="/profile" className={styles.navLink}>Profile</Link>
          {session.user.role === "admin" && (
            <Link href="/admin" className={styles.navLink}>Admin</Link>
          )}
          <button onClick={() => signOut()} className={styles.navButton}>
            Logout
          </button>
        </>
      ) : (
        <div className={styles.authOptions}>
          <button 
            onClick={() => signIn("github")} 
            className={`${styles.navButton} ${styles.userButton}`}
          >
            User Login
          </button>
          <Link 
            href="/auth/login" 
            className={`${styles.navLink} ${styles.adminLink}`}
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
}