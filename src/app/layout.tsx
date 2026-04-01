import type { Metadata } from "next";
import { Nunito_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_INFO } from "@/constants/site-info";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const dmSansHeading = DM_Sans({subsets:['latin'],variable:'--font-heading'});

const nunitoSans = Nunito_Sans({subsets:['latin'],variable:'--font-sans'});

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
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        nunitoSans.variable,
        dmSansHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <header className="h-20 border-b">
          <Navbar className="max-w-7xl mx-auto flex items-center justify-between px-4 h-full" />
        </header>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
