import BlogPage from "./blogpage/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.layout}>
      <BlogPage />
    </main>
  );
}
