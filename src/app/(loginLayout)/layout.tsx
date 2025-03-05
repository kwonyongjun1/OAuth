"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("login layout");
    console.log(session);
    console.log(status);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      {children}
    </div>
  );
};

export default LoginLayout;
