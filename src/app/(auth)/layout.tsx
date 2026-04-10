import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh flex justify-center items-center md:p-4">
      {children}
    </main>
  );
}
