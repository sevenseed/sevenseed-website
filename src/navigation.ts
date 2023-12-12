import { createSharedPathnamesNavigation } from "next-intl/navigation";
import x from "next/link";
import {} from "next/navigation";
export { redirect, usePathname, useRouter } from "next/navigation";

export const locales = ["en", "fr"] as const;

// export const { Link, redirect, usePathname, useRouter } =
//   createSharedPathnamesNavigation({ locales });
export const Link = x;
