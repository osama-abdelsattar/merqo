import { getToken } from "next-auth/jwt";
import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";

export default async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });
  const loginUrl = new URL("/login", req.nextUrl.origin);

  if (token) return NextResponse.next();
  else return NextResponse.redirect(loginUrl);
}

export const config: MiddlewareConfig = {
  matcher: [
    "/cart/:path*",
    "/wishlist/:path*",
    "/allorders/:path*",
    "/update-profile",
  ],
};
