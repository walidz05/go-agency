/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: "#0057B7",
        primaryHover: "#0A6CDE",
        dark: "#0B1120",
        secondary: "#FFD700",
      },

      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        Sora: ["Sora", "sans-serif"],
        GeneralSans: ["GeneralSans", "sans-serif"],
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          padding: "12px 36px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "1px",
          fontFamily: "Sora",
          transition: "all .3s ease",
          cursor: "pointer",
        },

        ".btn-primary": {
          backgroundColor: "#2563eb",
          color: "#fff",
        },

        ".btn-primary:hover": {
          backgroundColor: "#3b82f6",
        },

        ".btn-secondary": {
          border: "1px solid #eab308",
          color: "#facc15",
          backgroundColor: "transparent",
        },

        ".btn-secondary:hover": {
          backgroundColor: "#eab308",
          color: "#000",
        },
      });
    },
  ],
};
