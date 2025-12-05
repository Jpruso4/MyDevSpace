/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "card-light": "#ffffff",
        "card-dark": "#1a202c",
        "text-primary-light": "#1f2937",
        "text-primary-dark": "#ffffff",
        "text-secondary-light": "#6b7280",
        "text-secondary-dark": "#9da6b9",
        "border-light": "#e5e7eb",
        "border-dark": "#3b4354",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

