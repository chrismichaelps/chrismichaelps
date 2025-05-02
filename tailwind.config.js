/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "Courier New", "monospace"],
      },
      colors: {
        "terminal-green": "#4AF626",
        "terminal-amber": "#FFB000",
        "terminal-bg": "#0C0C0C",
        "terminal-lightBg": "#1A1A1A",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typing: "typing 3.5s steps(30, end)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
