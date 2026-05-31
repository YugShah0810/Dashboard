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
        ink: {
          950: "#050509",
          900: "#090a10",
          850: "#0d0f18",
          800: "#121521"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.14)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 18% 12%, rgba(56, 189, 248, 0.18), transparent 24%), radial-gradient(circle at 84% 10%, rgba(168, 85, 247, 0.16), transparent 28%), radial-gradient(circle at 50% 100%, rgba(20, 184, 166, 0.13), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
