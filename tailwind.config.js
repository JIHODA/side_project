/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#1A1814",
      },
      backgroundImage: {
        "custom-eventbanner": "url(/assets/sample5.jpg)",
        "custom-eventbanner-sec": "url(/assets/PC메인_마이코라이자.jpg)",
        "custom-eventbanner-sec-m": "url(/assets/모바일메인_마이코라이자.jpg)",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms",
        1000: "1000ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      height: {
        overScreen: "120vh",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
