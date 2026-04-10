import "next-auth";

declare module "next-auth" {
  interface User {
    token: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
  }
}
