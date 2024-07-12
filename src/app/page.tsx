"use client";

import React from "react";
import { School, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import banner1 from "../../public/banner-1.png";

export default function Home() {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Quiz", href: "/quiz" },
  ];

  return (
    <div className="flex max-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold md:text-base"
          >
            <School className="h-6 w-6"></School>
          </Link>
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "hover:bg-sky-100 hover:text-blue-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 font-bold",
                { "text-blue-600": href === currentPath }
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <School className="h-6 w-6" />
                <span className="sr-only">Quiz App</span>
              </Link>
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "hover:bg-sky-100 hover:text-blue-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 font-bold",
                    { "text-blue-600": href === currentPath }
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="hover:bg-sky-100 hover:text-blue-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 font-bold"
              >
                {"Admin"}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="invisible flex flex-row-reverse w-full items-center md:visible">
          <Link
            href="/admin"
            className="hover:bg-sky-100 hover:text-blue-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 font-bold"
          >
            {"Admin"}
          </Link>
        </div>
      </header>
      <main className="flex">
        <div className="flex-col max-w-full mx-auto">
          <Image src={banner1} alt="Quiz App" width={600} height={400}></Image>
        </div>
      </main>
    </div>
  );
}
