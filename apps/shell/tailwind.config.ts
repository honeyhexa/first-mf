// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"| "mode"> = {
  mode: "jit",
  content: [
    "../users/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../settings/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../dashboard/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../shared/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../shared/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../users/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../settings/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../dashboard/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
};

export default config;
