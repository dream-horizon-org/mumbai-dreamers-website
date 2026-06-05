import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#C8102E",
        navy: {
          DEFAULT: "#1A3A6B",
          dark: "#0D1B3E",
        },
        body: "#1A1A1A",
        meta: "#555555",
        divider: "#DDDDDD",
        "score-bg": "#D6E4F0",
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
        barlow: ["Barlow", "system-ui", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
