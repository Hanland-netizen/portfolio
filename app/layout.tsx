import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = { themeColor: "#000000" };
export const metadata: Metadata = { ...siteConfig };

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn("bg-black text-white overflow-x-hidden", inter.className)}
      >
        {/* ⭐ Fixed starfield over the whole site */}
        <StarsCanvas />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
