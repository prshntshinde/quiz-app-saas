"use client";

import { Button } from "@nextui-org/button";
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

import Link from "next/link";
import React from "react";

import { ThemeSwitcher } from "@/components/ui/theme-switcher";

type MenuItem = {
  label: string;
  href: string;
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Quiz",
      href: "/quiz",
    },
  ];

  function renderMenuItems(items: MenuItem[]) {
    return items.map((item) => (
      <NavbarItem key={item.label}>
        <Link className="w-full" href={item.href}>
          {item.label}
        </Link>
      </NavbarItem>
    ));
  }

  return (
    <div className="flex max-h-screen w-full flex-col">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand aria-label="Quiz Home">
            <IconBook size={28} />
            <p className="p-2 font-bold text-inherit">QUIZ</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {renderMenuItems(menuItems)}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.label}>
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
