"use client";

import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">Quiz</h1>
        <p className="text-2xl">A simple quiz app.</p>
      </CardBody>
    </Card>
  );
}
