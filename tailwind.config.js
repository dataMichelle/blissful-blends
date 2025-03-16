/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#1e3a8a",
        "bright-blue": "#3b82f6",
        "lime-green": "#84cc16",
        "vivid-orange": "#f97316",
        "sunny-yellow": "#facc15",
        "soft-peach": "#fcd34d",
        "light-peach": "#fee3c3 ",
        "slate-white": "#f1f5f9",
        "dark-teal": "#006d77",
        "muted-teal": "#4a878d",
        "hot-pink": "#ff2e63",
      },
    },
  },
  plugins: [],
};
