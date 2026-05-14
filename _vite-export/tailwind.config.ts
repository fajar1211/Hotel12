import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "var(--gold)",
        "gold-soft": "var(--gold-soft)",
        "gold-deep": "var(--gold-deep)",
        ink: "var(--ink)",
        cream: "var(--cream)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "ken-burns": {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.15) translate(-2%, -1%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 20s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 1s ease-out both",
        shimmer: "shimmer 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
