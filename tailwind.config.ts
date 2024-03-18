import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "small": {"max" : "520px"},
        "medium": {"min":"521px" , "max": "1000px"},
      },
    },
    fontFamily : {
      abc: ["Covered By Your Grace", "cursive"],
      manrope: ["Manrope", 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;
