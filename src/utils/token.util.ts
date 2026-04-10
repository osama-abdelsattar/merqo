import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

async function decodeToken() {
  const store = await cookies();
  // HTTPS (e.g. Vercel) uses __Secure- prefix; local http uses unprefixed name.
  const encodedToken =
    store.get("__Secure-next-auth.session-token")?.value ??
    store.get("next-auth.session-token")?.value;

  const secret = process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET;
  if (!secret || !encodedToken) return null;

  return decode({
    token: encodedToken,
    secret,
  });
}

/**
 * Returns the raw API token string from the session cookie,
 * or `null` if the user is not authenticated.
 */
async function getServerToken(): Promise<string | null> {
  const decoded = await decodeToken();
  if (!decoded?.token) return null;
  return decoded.token as string;
}

export { decodeToken, getServerToken };
