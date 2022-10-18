/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.html", "projects/*.html", "contact/*.html", "assets/scripts/*.js"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        roll: "roll 3s ease",
        rollback: "rollback 1s ease",
        wiggle: "wiggle 3s ease infinite",
      },
      keyframes: {
        roll: {
          "0%": { transform: "rotate(0deg)" },
          to: { transform: "rotate(-1turn)" },
        },
        rollback: {
          "0%": { transform: "rotate(180deg)" },
          to: { transform: "rotate(1turn)" },
        },
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      plugins: [],
    },
  },
};
