"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/providers/theme-provider";
import { SessionProvider } from "next-auth/react";
import { AppToaster } from "@/components/layout/app-toaster";
import ContextProviders from "@/providers/context-providers";

function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
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
        <ContextProviders>
          <SessionProvider>
            <TooltipProvider>{children}</TooltipProvider>
            <AppToaster />
          </SessionProvider>
        </ContextProviders>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default AppProviders;
