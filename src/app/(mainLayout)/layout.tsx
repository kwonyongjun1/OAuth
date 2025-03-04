import useAuth from "../hooks/useAuth";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useAuth();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
