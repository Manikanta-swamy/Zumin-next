import Link from "next/link";
import styles from "./page.module.css";
import "./globals.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/contact">  
        Contact
      </Link>
    </div>
    </main>
  );
}
