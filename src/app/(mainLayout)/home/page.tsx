"use client";

import styles from "../../page.module.css";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  const { data, status, update } = useSession();

  const info = () => {
    console.log(data);
    console.log(status);
    console.log(update);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Main</h1>
          <div>status :: {status}</div>
          <button onClick={info}>정보</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
