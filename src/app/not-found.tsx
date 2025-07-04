import { Card, CardBody } from "@nextui-org/react";

import Link from "next/link";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h2 className="mb-2 text-2xl font-bold">Page Not Found</h2>
        <p>
          Uh oh, we can’t seem to find the page you’re looking for. Try going
          back to the previous page or Home page.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Go to Home Page
        </Link>
      </CardBody>
    </Card>
  );
}
