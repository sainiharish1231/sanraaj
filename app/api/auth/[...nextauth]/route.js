import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import AuthService from "../../../../services/AuthService";
import GoogleProvider from "next-auth/providers/google";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const resp = await AuthService.login(credentials);
        const data = await resp.data;
        if (data.token && data.user) {
          return {
            ...data.user,
            image: data.user.image,
            email: `${data.user.email}:::::${data.token}:::::${data.user.id}:::::${data.user.isAdmin}`,
            abc: data.token,
          };
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const [email, tokenVal, id, isAdmin] = (session.user?.email || "").split(
        ":::::"
      );

      if (user) {
        user.email = email;
        user.id = id;
        user.isAdmin = isAdmin;
      }
      if (session.user) {
        session.user.email = email;
        // @ts-ignore
        session.user.token = tokenVal;
        // @ts-ignore
        session.user.id = id;
        // @ts-ignore
        session.user.isAdmin = isAdmin;
      }
      // try {
      //   const res = await fetch(
      //     `${process.env.NEXT_PUBLIC_HOST_URL}/user/register`,
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         name: session.user.name,
      //         email: session.user.email,
      //         password: "dfdfdfgty56grge",
      //       }),
      //     }
      //   );

      //   const result = await res.json();
      //   if (!res.ok) {
      //     throw new Error("User data saving failed.");
      //   }
      // } catch (error) {
      //   console.error("Error saving user data:", error);
      //   alert("An error occurred while saving user data.");
      // }
      const sessionData = {
        ...session,
        ...session.user,
      };
      return sessionData;
    },
    async jwt({ token }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };
