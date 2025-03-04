const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "grid",
        height: "100%",
        margin: 0,
        padding: 0,
        placeItems: "center",
        position: "absolute",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default LoginLayout;
