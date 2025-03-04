"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    console.log(result);
    if (result?.ok) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <button onClick={handleSignIn}>Sign in</button>
          <button onClick={() => signIn("kakao")}>Sign in with Kakao</button>
        </div>
      </div>
    </div>
  );
}
