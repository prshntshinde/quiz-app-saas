import { Card, CardBody, User } from "@nextui-org/react";
import { getServerSession } from "next-auth";

import options from "@/config/auth";

export default async function Profile() {
  try {
    const session = await getServerSession(options);
    return (
      <Card className="mx-auto mt-4 max-w-md">
        <CardBody className="text-center">
          <User
            name={session?.user?.name}
            description={session?.user?.email}
            avatarProps={{
              showFallback: !session?.user?.image,
              src: session?.user?.image ?? "",
            }}
          />
        </CardBody>
      </Card>
    );
  } catch (error) {
    console.error("Failed to fetch user profile: ", error);
    return <div>Failed to fetch user profile.</div>;
  }
}
