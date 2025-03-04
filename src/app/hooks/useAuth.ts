"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const useAuth = () => {
  const { data, status } = useSession();

  useEffect(() => {
    console.log("data :::", data);
    console.log("status :::", status);
    if (status === "loading") return;
    if (status === "unauthenticated") {
      signOut({ callbackUrl: "/login" });
    }
  }, [data, status]);
};

export default useAuth;
