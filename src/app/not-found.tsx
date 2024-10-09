import { Card, CardBody } from "@nextui-org/react";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-2xl">Page Not Found</h1>
        <p>
          Uh oh, we can’t seem to find the page you’re looking for. Try going
          back to the previous page or Home page.
        </p>
      </CardBody>
    </Card>
  );
}
