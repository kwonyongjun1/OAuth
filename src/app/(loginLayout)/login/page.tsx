"use client";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleSignIn = async () => {
    signIn();
  };

  const handleKakaoSignIn = async () => {
    signIn("kakao");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleKakaoSignIn}>KaKao Sign In</button>
    </div>
  );
};

export default LoginPage;
