import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        whitey: '0 0 0 3px #fff',
        top: "0 -26px 80px 0px rgba(0,0,0,0.75);",
        glow: "0 0 10px 10px #fff",
      },
      rotate: {
        '30': '30deg',
      },
      width: {
        "vw-full": "100vw",
      },
      height: {
        "vh-full": "100vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'car1': "url('/public/car1.webm')",
      },
    },
  },
  plugins: [],
};
export default config;
