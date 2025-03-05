"use client";

import useAuth from "../hooks/useAuth";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useAuth();

  return <>{children}</>;
};

export default MainLayout;
