import "next-auth";

declare module "next-auth" {
  interface User {
    token: string;
    role: string;
  }

  interface Session {
    user: {
      name: string;
      email: string;
      role: string;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
    role?: string;
  }
}
