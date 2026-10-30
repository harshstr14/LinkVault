/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const daisyuiColorObj = require("daisyui/src/theming/index");

module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4338ca",
          "primary-content": "#ffffff",
          secondary: "#0e7490",
          accent: "#7c3aed",
          neutral: "#6b7280",
          "neutral-content": "#e4e4ea",
          "base-100": "#fcfcfd",
          "base-200": "#f4f4f7",
          "base-300": "#e9e9ef",
          "base-content": "#0f0f14",
          info: "#a5f3fc",
          success: "#22c55e",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
      {
        dark: {
          primary: "#a5b4fc",
          "primary-content": "#0b0b12",
          secondary: "#67e8f9",
          accent: "#8b5cf6",
          neutral: "#9ca3af",
          "neutral-content": "#2a2a33",
          "base-100": "#0c0c10",
          "base-200": "#14141a",
          "base-300": "#1c1c24",
          "base-content": "#f5f5f7",
          info: "#009ee4",
          success: "#00b17d",
          warning: "#eac700",
          error: "#f1293c",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // For the "layouts" directory
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("daisyui"),
    plugin(({ addVariant }) => {
      addVariant("dark", '&[data-theme="dark"]');
    }),
    require("tailwindcss-animate"),
  ],
  theme: {
    extend: {
      colors: {
        border: daisyuiColorObj["neutral-content"],
        input: daisyuiColorObj["base-content"],
        ring: daisyuiColorObj["base-content"],
        background: daisyuiColorObj["base-100"],
        foreground: daisyuiColorObj["base-content"],
        primary: {
          DEFAULT: daisyuiColorObj["primary"],
          foreground: daisyuiColorObj["primary-content"],
        },
        secondary: {
          DEFAULT: daisyuiColorObj["secondary"],
          foreground: daisyuiColorObj["secondary-content"],
        },
        destructive: {
          DEFAULT: daisyuiColorObj["error"],
          foreground: daisyuiColorObj["error-content"],
        },
        muted: {
          DEFAULT: daisyuiColorObj["base-300"],
          foreground: daisyuiColorObj["base-content"],
        },
        accent: {
          DEFAULT: daisyuiColorObj["accent"],
          foreground: daisyuiColorObj["accent-content"],
        },
        popover: {
          DEFAULT: daisyuiColorObj["base-200"],
          foreground: daisyuiColorObj["base-content"],
        },
        card: {
          DEFAULT: daisyuiColorObj["base-100"],
          foreground: daisyuiColorObj["base-content"],
        },
      },
      borderRadius: {
        lg: "var(--rounded-btn)",
        md: "calc(var(--rounded-btn) - 2px)",
        sm: "calc(var(--rounded-btn) - 4px)",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 4px 16px -4px rgb(0 0 0 / 0.08)",
        lift: "0 2px 4px rgb(0 0 0 / 0.04), 0 16px 32px -12px rgb(0 0 0 / 0.18)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
