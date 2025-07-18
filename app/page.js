import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Link from "next/link";
import styles from "./home.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  let blogs = [];

  if (session) {
    await connectDB();
    blogs = await Blog.find().lean();
  }

  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }}>
        {session ? (
          <>
            <h1 className={styles.heading}>All Blogs</h1>
            {blogs.map((blog) => (
              <div key={blog._id} className={styles.blogCard}>
                <Link href={`/${blog._id}`}>
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                </Link>
                <p className={styles.blogExcerpt}>
                  {blog.content.slice(0, 80)}...
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className={styles.introSection}>
              <h1 className={styles.heading}>Welcome to Your Blog</h1>
              <p className={styles.description}>
                Your Blog is a simple and powerful platform for reading and publishing insightful articles.
                Whether you are here to explore blogs or manage content as an admin, you are in the right place.
              </p>
            </div>

            <div className={styles.authOptions}>
              <h2 className={styles.authTitle}>Please Log In</h2>
              <div className={styles.authButtons}>
        <Link href="/auth/login" className={styles.adminButton}>
                  user Login
                </Link>
                <Link href="/auth/login" className={styles.adminButton}>
                  Admin Login
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
