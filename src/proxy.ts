import { getToken } from "next-auth/jwt";
import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";

export default async function proxy(req: NextRequest) {
  const token = await getToken({ req });

  if (token?.token) return NextResponse.next();

  const loginUrl = new URL("/login", req.nextUrl.origin);

  return NextResponse.redirect(loginUrl);
}

export const config: MiddlewareConfig = {
  matcher: ["/cart/:path*", "/wishlist/:path*", "/orders/:path*"],
};
