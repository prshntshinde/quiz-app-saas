import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <Button variant={"outline"} className="text-3xl mt-3">
        Click Me
      </Button>
    </div>
  );
}
