"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ForgotPasswordLink({ redirectHere }: { redirectHere?: boolean }) {
  const pathname = {
    pathname: "/forgot-password",
  };

  let href: Url = pathname;

  const path = usePathname();

  if (redirectHere) {
    href = {
      ...pathname,
      query: { redirect: path },
    };
  }

  return (
    <Link
      href={href}
      className="inline-block text-sm underline-offset-4 hover:underline"
    >
      Forgot your password?
    </Link>
  );
}

export default ForgotPasswordLink;
