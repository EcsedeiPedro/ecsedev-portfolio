import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D17A7",
        secondary: "#4F0F7B",
        dark: "#220238",
        white: "#F6F6F6",
        black: "#101010",
      },
    },
  },
  plugins: [],
} satisfies Config;
