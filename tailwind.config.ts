/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/src/assets/heroBg.png')",
        "gradient-radial":
          "radial-gradient(50% 50% at 0% 0%, rgba(255, 255, 255, 0.15) 2.21%, rgba(255, 255, 255, 0) 100%);",
        "gradient-custom":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(205,89,89,1) 53%, rgba(255,239,0,1) 100%)",
        "gradient-text":
          "linear-gradient(93deg, rgba(255,122,59,1) 60%, rgba(9,93,93,1) 100%)",
        "button-black":
          "linear-gradient(112deg, rgba(255, 255, 255, 0.1) 0%, white 10%, rgba(255, 255, 255, 0.11) 100%)",
        "button-radial-gradient":
          "radial-gradient(127.9% 258% at -40.3% 0%, rgb(255, 171, 66) 51.7%, rgb(201, 145, 109) 75.4%,  rgb(255, 99, 111) 100% )",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
