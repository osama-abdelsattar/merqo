"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/providers/theme-provider";
import { SessionProvider } from "next-auth/react";
import { AppToaster } from "@/components/layout/app-toaster";

function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <AppToaster />
        </SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export { AppProviders as default };
