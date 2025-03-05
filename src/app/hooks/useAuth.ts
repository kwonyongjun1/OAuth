import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);
};

export default useAuth;
