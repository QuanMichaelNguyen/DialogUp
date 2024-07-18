import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,php}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}