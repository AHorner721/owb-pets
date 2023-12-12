// setup how people can auth with application
// how does api/auth/signin work?

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("github profile", profile);

        let userRole = "GitHub User";
        if (profile?.email == process.env.ADMIN_EMAIL) {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("google profile", profile);

        let userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET, // < does this mean only I can sign in with google since I got the ID & secret?
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          const user = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (user) {
            const match = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (match) {
              delete user.password;
              user["role"] = "Unverified Email";
              return user;
            }
          }
        } catch (err) {
          console.log(err);
        }
        return null;
      },
    }),
  ],
  // add role to token to use in app
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
