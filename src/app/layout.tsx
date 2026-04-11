import type { Metadata } from "next";
import {
  Nunito_Sans,
  Plus_Jakarta_Sans,
  DM_Serif_Display,
} from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { SITE_INFO } from "@/config/site.config";
import AppProviders from "@/components/providers/app-providers";

// CSS
import "@/styles/section-header.css";
import "@/styles/hover-link.css";

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

const metadata: Metadata = {
  title: SITE_INFO.name,
  description: SITE_INFO.description,
};

function RootLayout({
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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

export { RootLayout as default, metadata };
