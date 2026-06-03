import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",
          accent: "#06b6d4",
          accentSoft: "#e0fbff",
          muted: "#475569"
        }
      },
      boxShadow: {
        glow: "0 18px 50px rgba(6, 182, 212, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;

