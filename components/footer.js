"use client";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Your Blog. All rights reserved.
        </p>
        <Link href="/terms" className={styles.termsLink}>
          Terms and Conditions
        </Link>
        <p className={styles.contact}>
          Contact: <a href="mailto:support@yourblog.com">support@yourblog.com</a>
        </p>
      </div>
    </footer>
  );
}