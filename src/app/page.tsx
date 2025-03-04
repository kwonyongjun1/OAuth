"use client";

import styles from "./page.module.css";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Main</h1>
          <button onClick={() => signOut({ callbackUrl: "/login" })}>
            Sign out
          </button>
        </div>
      </main>
    </div>
  );
}
