import NextAuth from "next-auth";
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process?.env?.GITHUB_CLIENTID as string,
      clientSecret: process?.env?.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "my-auth",
      credentials: {},
      async authorize(credentials: Record<never, string> | undefined, req: Pick<any, "headers" | "body" | "query" | "method">): Promise<User | null> {
          try {
            const response = await fetch(`${process.env.BASE_URL}/api/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: req?.body?.email,
                password: req?.body?.password
              }),
            });
            const data = await response.json();
            if (data.success) {
              const responseData = data;
              return responseData?.data;
            } else {
              const errorData = await response.json();
              console.error("Server error:", errorData); // Log error response for debugging
              throw new Error("Server error: " + errorData.message);
            }
          } catch (error:any) {
            console.error("Error:", error.message);
            return null;
          }
          
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      if (session) {
        try {
          const response = await fetch(
            `${process.env.BASE_URL}/api/createUserByProvider`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: session?.user?.email,
                name: session?.user?.name,
                image: session?.user?.image,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const resData = await response.json(); // Await parsing JSON response
          // Merge resData with session.user
          session.user = { ...session.user, ...resData.data };
        } catch (error: any) {
          console.log("Error saving user data:", error.message);
        }
      }
      return session;
    },

    async jwt({ token }) {
      
      return token;
    },
  },
});

export { handler as GET, handler as POST };
