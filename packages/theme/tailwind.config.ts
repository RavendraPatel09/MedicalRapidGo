import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../apps/*/index.html",
    "../../apps/*/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Soothing medical-grade palette
        primary: {
          DEFAULT: "#0284c7", // Calm medical sky blue
          hover: "#0369a1",
          light: "#38bdf8",
          subtle: "rgba(2, 132, 199, 0.12)",
        },
        secondary: {
          DEFAULT: "#6366f1", // Indigo
          hover: "#4f46e5",
          subtle: "rgba(99, 102, 241, 0.12)",
        },
        accent: {
          green: "#10b981", // Emerald (verified/in-stock)
          amber: "#f59e0b", // Amber (expiring soon)
          red: "#ef4444",   // Red (critical)
          blue: "#3b82f6",  // Blue (informational)
          purple: "#8b5cf6",
        },
        // Eye-friendly dark slate surfaces
        background: "#0b0f19",
        surface: {
          DEFAULT: "#111827",
          card: "#182234",
          hover: "#1e2c42",
          subtle: "#0e1524",
          border: "#1f2d44",
        },
        // Mapped UI tokens for backwards compatibility and clarity
        "surface-container": "#182234",
        "surface-container-low": "#111827",
        "surface-container-lowest": "#0b0f19",
        "surface-container-high": "#1f2d44",
        "surface-container-highest": "#283852",
        "surface-variant": "#1f2d44",
        "on-background": "#f1f5f9",
        "on-surface": "#f1f5f9",
        "on-surface-variant": "#94a3b8",
        "on-primary": "#ffffff",
        outline: "#334155",
        "outline-variant": "#1f2d44",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        full: "9999px",
        card: "16px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Satoshi", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.3), 0 2px 6px -1px rgba(0, 0, 0, 0.2)",
        glow: "0 0 24px -4px rgba(2, 132, 199, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
