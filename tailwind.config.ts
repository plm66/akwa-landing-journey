import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        earth: {
          DEFAULT: "#4A3B27",
          light: "#8A7355"
        },
        forest: {
          DEFAULT: "#2C5530",
          light: "#447A4B"
        },
        stone: {
          DEFAULT: "#8E9196",
          light: "#B8BABD"
        },
        gold: {
          DEFAULT: "#C5A572",
          light: "#D4BC94"
        }
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;