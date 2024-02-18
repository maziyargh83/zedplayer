import { ShadCn } from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: [...ShadCn.content],
  presets: [ShadCn],
} satisfies Config;
