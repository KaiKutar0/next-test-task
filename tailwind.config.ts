import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#101828",
        "text-tertiary": "#475467",
        "button-primary-bg": "#7F56D9",
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F9FAFB",
        "border-primary": "#D0D5DD",
        "border-secondary": "#EAECF0",
        "secondary-color-border": "#D6BBFB",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
