import type { Metadata } from "next";
import {
  Nunito_Sans,
  Plus_Jakarta_Sans,
  DM_Serif_Display,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_INFO } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import AppProviders from "@/components/providers/app-providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: SITE_INFO.name,
  description: SITE_INFO.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        nunitoSans.variable,
        plusJakartaSans.variable,
        dmSerifDisplay.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>
          <header className="px-6 h-20 border-b fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-2xl">
            <Navbar className="max-w-7xl mx-auto flex items-center justify-between gap-6 h-full" />
          </header>
          <main className="mt-20 px-6">{children}</main>
          <Footer />
          <Toaster position="top-center" duration={3000} />
        </AppProviders>
      </body>
    </html>
  );
}
