import type { Config } from "tailwindcss"
import { designSystemV2 } from "./lib/design-system-v2"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: designSystemV2.colors.primary[50],
          100: designSystemV2.colors.primary[100],
          200: designSystemV2.colors.primary[200],
          300: designSystemV2.colors.primary[300],
          400: designSystemV2.colors.primary[400],
          500: designSystemV2.colors.primary[500],
          600: designSystemV2.colors.primary[600],
          700: designSystemV2.colors.primary[700],
          800: designSystemV2.colors.primary[800],
          900: designSystemV2.colors.primary[900],
          950: designSystemV2.colors.primary[950],
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          blue: designSystemV2.colors.accent.blue,
          purple: designSystemV2.colors.accent.purple,
          teal: designSystemV2.colors.accent.teal,
          green: designSystemV2.colors.accent.green,
          yellow: designSystemV2.colors.accent.yellow,
          red: designSystemV2.colors.accent.red,
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neutral: {
          50: designSystemV2.colors.neutral[50],
          100: designSystemV2.colors.neutral[100],
          200: designSystemV2.colors.neutral[200],
          300: designSystemV2.colors.neutral[300],
          400: designSystemV2.colors.neutral[400],
          500: designSystemV2.colors.neutral[500],
          600: designSystemV2.colors.neutral[600],
          700: designSystemV2.colors.neutral[700],
          800: designSystemV2.colors.neutral[800],
          900: designSystemV2.colors.neutral[900],
          950: designSystemV2.colors.neutral[950],
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: designSystemV2.shadows.soft,
        "soft-lg": designSystemV2.shadows["soft-lg"],
        "primary-sm": designSystemV2.shadows["primary-sm"],
        "primary-md": designSystemV2.shadows["primary-md"],
        glass: designSystemV2.shadows.glass,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "slide-up": "slide-up 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      backgroundImage: {
        "primary-gradient": designSystemV2.colors.gradients.primaryGradient,
        "accent-gradient": designSystemV2.colors.gradients.accentGradient,
        "subtle-gradient": designSystemV2.colors.gradients.subtleGradient,
        "glass-gradient": designSystemV2.colors.gradients.glassGradient,
      },
      backdropFilter: {
        none: "none",
        blur: "blur(8px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

