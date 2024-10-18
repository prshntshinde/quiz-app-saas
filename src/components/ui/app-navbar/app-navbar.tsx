"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { IconBook } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import Link from "next/link";
import React from "react";

import { ThemeSwitcher } from "@/components/ui/app-navbar/theme-switcher";

import AuthButton from "./auth-button";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Quiz",
    href: "/quiz",
  },
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { status } = useSession();

  // TODO: fix the rerending of the menu items
  if (status === "authenticated") {
    menuItems.push({
      label: "Profile",
      href: "/profile",
    });
  }

  return (
    <div className="flex max-h-screen w-full flex-col">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <IconBook size={28} />
            <p className="p-2 font-bold text-inherit">QUIZ</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <AuthButton minimal={false} />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <AuthButton />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
