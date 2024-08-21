"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMoon } from "lucide-react";
import { Button } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <Button
        isIconOnly
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunMoon />
      </Button>
    </div>
  );
}
