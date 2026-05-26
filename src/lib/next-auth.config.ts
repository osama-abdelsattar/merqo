import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { buildApiUrl } from "@/utils/api.util";
import { AuthResponse } from "@/types/api.type";

const signInUrl = buildApiUrl(["auth", "signin"]);
const signUpUrl = buildApiUrl(["auth", "signup"]);

const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      id: "signin",
      name: "Merqo Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const res = await axios.post<AuthResponse>(signInUrl, credentials);
          const { user, token } = res.data;
          return { ...user, token, id: user.email };
        } catch (error) {
          if (axios.isAxiosError(error)) {
            throw new Error(
              error.response?.data?.message ?? "Authentication failed",
            );
          }
          throw new Error("Authentication failed");
        }
      },
    }),

    Credentials({
      id: "signup",
      name: "Merqo Sign Up",
      credentials: {
        name: {
          label: "Full name",
          type: "text",
          placeholder: "i.e. Mark Henry",
        },
        phone: {
          label: "Phone number",
          type: "tel",
          placeholder: "i.e. 0112 345 6789",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter a strong password",
        },
        rePassword: {
          label: "Confirm Password",
          type: "password",
          placeholder: "Confirm your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const res = await axios.post<AuthResponse>(signUpUrl, credentials);
          const { user, token } = res.data;

          return { ...user, token, id: user.email };
        } catch (error) {
          if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message ?? "Signup failed");
          }
          throw new Error("Signup failed");
        }
      },
    }),
  ],

  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.token = user.token;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }

      if (trigger === "update" && session) {
        if (session.name) token.name = session.name;
        if (session.email) token.email = session.email;
        if (session.role) token.role = session.role;
      }

      return token;
    },
    session({ session, token }) {
      session.user.name = token.name ?? session.user.name;
      session.user.email = token.email ?? session.user.email;
      session.user.role = token.role ?? session.user.role;

      return session;
    },
  },

  session: {
    maxAge: 60 * 60 * 24 * 7,
  },

  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
};

export { nextAuthConfig };
