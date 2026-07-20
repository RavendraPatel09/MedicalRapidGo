import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../apps/*/index.html",
    "../../apps/*/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: "#111827",
        surfaceLighter: "#0F172A",
        accent: {
          blue: "#3B82F6",
          green: "#10B981",
          purple: "#8B5CF6",
          orange: "#F59E0B",
        }
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        '0': '0px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
      },
      borderRadius: {
        DEFAULT: "20px",
        lg: "24px",
        md: "16px",
        sm: "8px",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};

export default config;
