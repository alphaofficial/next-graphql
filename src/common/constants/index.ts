import config from "../config";

export const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  sameSite: "lax",
  secure: config.ENVIRONMENT === "production",
} as const;
