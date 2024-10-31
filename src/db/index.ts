import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = drizzle({ client: sql });
