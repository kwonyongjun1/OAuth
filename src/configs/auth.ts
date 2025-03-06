import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jaehan" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(":::: authorize :::::");
        console.log("credentials :::", credentials);
        console.log("req :::", req);

        //  add login logic
        if (credentials?.username && credentials?.password) {
          const user = {
            id: "test",
            name: "test",
            email: "jsmith@example.com",
          };

          return user;
        } else {
          return null;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log(":::: session :::::");
      console.log("session :::", session);
      console.log("token :::", token);
      return session;
    },
    async jwt({ token, user }) {
      console.log(":::: jwt :::::");
      console.log("token :::", token);
      console.log("user :::", user);

      return token;
    },
  },
  events: {
    async signOut(message) {
      console.log(":::: signOut :::::");
      console.log("message :::", message);
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  pages: {
    signIn: `/auth/sign-in`,
    signOut: `/auth/sign-out`,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
