"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <SessionProvider>{children}</SessionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
