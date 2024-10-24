import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import AppNavbar from "@/components/ui/app-navbar/app-navbar";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Providers } from "./providers";

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
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>"
        />
      </head>
      <body
        className={cn("font-poppins h-screen w-screen", fontPoppins.variable)}
      >
        <Providers>
          <AppNavbar />
          <main className="bg-[right_bottom_50vh)] flex-grow bg-[url(/light-bg.svg)] bg-cover bg-repeat dark:bg-[url(/dark-bg.svg)]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
