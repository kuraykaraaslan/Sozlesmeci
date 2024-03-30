/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        A4: "210/297"
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00bac3",

          "secondary": "#003cff",

          "accent": "#e35d00",

          "neutral": "#0b0b0b",

          "base-100": "#fff1f6",

          "info": "#00ddff",

          "success": "#00871d",

          "warning": "#ff8500",

          "error": "#ff6f99",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

