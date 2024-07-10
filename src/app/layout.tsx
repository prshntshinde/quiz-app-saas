import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
          "min-h-screen antialiased font-poppins",
          fontPoppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
