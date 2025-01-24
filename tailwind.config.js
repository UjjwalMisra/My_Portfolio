/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        accentFont: ["Outfit", "sans-serif"], // Elegant accent font
      },
      colors: {
        bodyColor: "#0A0F1F", // Rich dark background
        lightText: "#9CA6C1", // Subtle, elegant text color
        primaryText: "#F8F8FA", // Bright primary text for headings
        boxBg: "linear-gradient(135deg, #121D3A, #1E3256)", // Modern gradient for boxes
        designColor: "#FF3366", // Vibrant pink accent
        accentBlue: "#6C5DD3", // Cool blue for secondary highlights
        accentGreen: "#22D1EE", // Soft green for success or highlights
        borderColor: "#1C2744", // Neutral border color for separation
      },
      boxShadow: {
        shadowOne: "10px 10px 30px #05080E, -10px -10px 30px #111828",
        shadowTwo: "0 8px 16px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1)",
        neonGlow: "0 0 20px rgba(102, 51, 255, 0.7)", // Neon glow for eye-catching effects
        cyanGlow: "0 0 15px rgba(34, 209, 238, 0.8)", // Soft cyan glow
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        scaleUp: "scaleUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
