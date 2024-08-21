import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { School, Menu } from "lucide-react";
import { Providers } from "./providers";

import { cn } from "@/lib/utils";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A web based quiz app for testing your knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-w-[1920px] mx-auto font-poppins",
          fontPoppins.variable
        )}
      >
        <Providers>
          {/* Layout UI */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
