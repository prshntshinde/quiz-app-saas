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
    return (
      <Card className="text-center text-red-500">
        <CardBody>
          <p>Unable to load your profile at this time.</p>
          <p>
            Please try again later or contact support if the issue persists.
          </p>
        </CardBody>
      </Card>
    );
  }
}
