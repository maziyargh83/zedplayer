import { ShadCn } from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: [...ShadCn.content, "../../packages/ui/src/**/*.{ts,tsx}"],
  presets: [ShadCn],
} satisfies Config;
