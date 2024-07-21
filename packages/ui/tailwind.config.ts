import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  presets: [sharedConfig],
};

export default config;
