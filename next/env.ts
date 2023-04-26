import { createEnv } from "@t3-oss/env-nextjs";
import zod from "zod";

export const env = createEnv({
  server: {
    DRUPAL_CLIENT_ID: zod.string(),
    DRUPAL_CLIENT_SECRET: zod.string(),
    DRUPAL_REVALIDATE_SECRET: zod.string(),
    NEXT_IMAGE_DOMAIN: zod.string(),
  },
  client: {
    NEXT_PUBLIC_DRUPAL_BASE_URL: zod.string().url(),
    NEXT_PUBLIC_FRONTEND_URL: zod.string().url(),
  },
  runtimeEnv: {
    DRUPAL_CLIENT_ID: process.env.DRUPAL_CLIENT_ID,
    DRUPAL_CLIENT_SECRET: process.env.DRUPAL_CLIENT_SECRET,
    DRUPAL_REVALIDATE_SECRET: process.env.DRUPAL_REVALIDATE_SECRET,
    NEXT_IMAGE_DOMAIN: process.env.NEXT_IMAGE_DOMAIN,
    NEXT_PUBLIC_DRUPAL_BASE_URL: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
});
