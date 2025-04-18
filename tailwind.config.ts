import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rockwell: ["RockWell", "serif"],
        raleway: ["Raleway", "sans-serif"],
        montagu: ["MontaguSlab", "serif"],
        inter: ["var(--inter)"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          dark: "#1E1E1E",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          dark: "#FFFFFF",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "#F306F3",
          foreground: "hsl(var(--secondary-foreground))",
          light: "#E5BAE5",
          dark: "#B700B7",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#D18884",
          light: "#E5BAE5",
          dark: "#A14CA1",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "#C4C4C4",
        input: "hsl(var(--input))",
        ring: "#008AAA",

        primary: {
          DEFAULT: "#008AAA",
          hover: "#F306F3",
          light: "#C4C4C4",
          dark: "#004E60",
        },

        light: {
          100: "#FBE7FB",
          200: "#F4C4F4",
          300: "#EEA1EE",
          400: "#E87DE8",
          500: "#F306F3",
          600: "#DA06DA",
          700: "#C105C1",
          800: "#A804A8",
          900: "#8F038F",
        },

        red: {
          DEFAULT: "#EF3A4B",
          400: "#F46F70",
          500: "#E27233",
          800: "#EF3A4B",
        },

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        pattern: "url('/images/pattern.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
